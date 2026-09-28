"use client";

import { CircleCheckBig, LoaderCircle, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

const STATUS_URL = "https://status.cmld.ru/api/v1/summary";
const POLL_INTERVAL_MS = 20_000;
const TIMEOUT_MS = 10_000;

const badges = {
  loading: {
    icon: <LoaderCircle className="size-4 animate-spin" />,
    label: "Checking status…",
    className:
      "glass:text-white/90 glass:ring-white/10 photo:bg-gray-800 photo:text-gray-300 photo:shadow-xs",
  },
  error: {
    icon: <TriangleAlert className="size-4" />,
    label: "Status unavailable",
    className:
      "glass:text-red-400 glass:ring-red-500/30 photo:bg-red-900/10 photo:text-red-400 photo:shadow-xs",
  },
  operational: {
    icon: <CircleCheckBig className="size-4" />,
    label: "All services operational",
    className:
      "glass:text-green-300 glass:ring-green-500/30 photo:bg-green-900/10 photo:text-green-400",
  },
  disrupted: {
    icon: <TriangleAlert className="size-4" />,
    label: "Service disruption detected",
    className:
      "glass:text-amber-300 glass:ring-amber-500/30 photo:bg-amber-900/10 photo:text-amber-400",
  },
};

type Status = keyof typeof badges;

async function fetchStatus(): Promise<Status> {
  const response = await fetch(STATUS_URL, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!response.ok) return "error";
  const summary: unknown = await response.json();
  if (
    summary instanceof Object &&
    "ongoing_incidents" in summary &&
    Array.isArray(summary.ongoing_incidents)
  )
    return summary.ongoing_incidents.length === 0 ? "operational" : "disrupted";
  return "error";
}

export default function IncidentBadge() {
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    let isActive = true;
    const poll = () =>
      fetchStatus()
        .catch((): Status => "error")
        .then((nextStatus) => {
          if (isActive) setStatus(nextStatus);
        });
    void poll();
    const intervalId = setInterval(() => void poll(), POLL_INTERVAL_MS);
    return () => {
      isActive = false;
      clearInterval(intervalId);
    };
  }, []);
  const badge = badges[status];
  return (
    <div className="flex justify-center p-4 text-sm">
      <a
        href="https://status.cmld.ru"
        target="_blank"
        className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium shadow-md transition-all duration-200 glass:border glass:border-white/10 glass:bg-white/6 glass:ring-1 glass:backdrop-blur-2xl glass:backdrop-saturate-150 ${badge.className}`}
      >
        {badge.icon}
        {badge.label}
      </a>
    </div>
  );
}
