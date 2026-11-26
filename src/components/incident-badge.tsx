"use client";

import {
  CircleCheckBig,
  CircleDashed,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

const STATUS_URL = "https://status.cmld.ru/api/v1/summary";
const POLL_INTERVAL_MS = 20_000;
const TIMEOUT_MS = 10_000;

const badges = {
  loading: {
    icon: CircleDashed,
    label: "Checking status…",
    className:
      "glass:text-white/90 glass:ring-white/10 photo:bg-gray-800 photo:text-gray-300 photo:shadow-xs",
  },
  error: {
    icon: TriangleAlert,
    label: "Status unavailable",
    className:
      "glass:text-red-400 glass:ring-red-500/30 photo:bg-red-900/10 photo:text-red-400 photo:shadow-xs",
  },
  operational: {
    icon: CircleCheckBig,
    label: "All services operational",
    className:
      "glass:text-green-300 glass:ring-green-500/30 photo:bg-green-900/10 photo:text-green-400",
  },
  maintenance: {
    icon: Wrench,
    label: "Maintenance in progress",
    className:
      "glass:text-sky-300 glass:ring-sky-500/30 photo:bg-sky-900/10 photo:text-sky-400",
  },
  disrupted: {
    icon: TriangleAlert,
    label: "Service disruption detected",
    className:
      "glass:text-amber-300 glass:ring-amber-500/30 photo:bg-amber-900/10 photo:text-amber-400",
  },
};

type Status = keyof typeof badges;

type Summary = {
  ongoing_incidents: unknown[];
  in_progress_maintenances: unknown[];
};

function isSummary(value: unknown): value is Summary {
  return (
    value instanceof Object &&
    "ongoing_incidents" in value &&
    Array.isArray(value.ongoing_incidents) &&
    "in_progress_maintenances" in value &&
    Array.isArray(value.in_progress_maintenances)
  );
}

async function fetchStatus(): Promise<Status> {
  const response = await fetch(STATUS_URL, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!response.ok) return "error";
  const summary: unknown = await response.json();
  if (!isSummary(summary)) return "error";
  if (summary.ongoing_incidents.length > 0) return "disrupted";
  if (summary.in_progress_maintenances.length > 0) return "maintenance";
  return "operational";
}

export default function IncidentBadge() {
  const [status, setStatus] = useState<Status>("loading");
  useEffect(() => {
    let latestPollId = 0;
    const poll = () => {
      if (document.hidden) return;
      latestPollId += 1;
      const pollId = latestPollId;
      void fetchStatus()
        .catch((): Status => "error")
        .then((nextStatus) => {
          if (pollId === latestPollId) setStatus(nextStatus);
        });
    };
    poll();
    const intervalId = setInterval(poll, POLL_INTERVAL_MS);
    document.addEventListener("visibilitychange", poll);
    return () => {
      latestPollId += 1;
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", poll);
    };
  }, []);
  const { icon: Icon, label, className } = badges[status];
  return (
    <div aria-live="polite" className="flex justify-center p-4 text-sm">
      <a
        href="https://status.cmld.ru"
        target="_blank"
        className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium shadow-md transition-all glass:bg-white/6 glass:ring-1 glass:inset-ring glass:inset-ring-white/10 glass:backdrop-blur-2xl glass:backdrop-saturate-150 ${className}`}
      >
        <Icon className="size-4" />
        {label}
      </a>
    </div>
  );
}
