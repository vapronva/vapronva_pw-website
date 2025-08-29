"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";

interface OngoingIncident {
  id: string;
  name: string;
  status: string;
}

interface Summary {
  ongoing_incidents: OngoingIncident[];
}

interface Model {
  summary: Summary;
}

interface IncidentBadgeProps {
  glass?: boolean;
}

const IncidentBadge: React.FC<IncidentBadgeProps> = ({ glass = false }) => {
  const [data, setData] = useState<Model | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchStatus = async (): Promise<void> => {
    try {
      const res = await fetch("https://status.cmld.ru/proxy/status.cmld.ru");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = (await res.json()) as Model;
      setData(json);
      setError(null);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStatus().catch(console.error);
    const interval = setInterval(() => {
      fetchStatus().catch(console.error);
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  const isOperational = data?.summary.ongoing_incidents?.length === 0;
  return (
    <div className="flex items-center justify-center p-4 text-sm">
      <Link
        href="https://status.cmld.ru"
        passHref
        rel="noreferer noopener"
        target="_blank"
      >
        {loading ? (
          <div
            className={
              glass
                ? "flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white/90 shadow-md ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150"
                : "flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 shadow-xs dark:bg-gray-800 dark:text-gray-300"
            }
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="font-medium">Checking status…</span>
          </div>
        ) : error ? (
          <div
            className={
              glass
                ? "flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-red-400 shadow-md ring-1 ring-red-500/30 backdrop-blur-2xl backdrop-saturate-150"
                : "flex items-center space-x-2 rounded-full bg-red-50 px-4 py-2 text-red-600 shadow-xs dark:bg-red-900/10 dark:text-red-400"
            }
          >
            <AlertTriangle className="h-4 w-4" />
            <span className="font-medium">{error}</span>
          </div>
        ) : (
          <div
            className={
              glass
                ? `flex items-center space-x-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-medium shadow-md ring-1 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-200 ${
                    isOperational
                      ? "text-green-300 ring-green-500/30"
                      : "text-amber-300 ring-amber-500/30"
                  }`
                : `flex items-center space-x-2 rounded-full px-4 py-2 font-medium shadow-md transition-all duration-200 ${
                    isOperational
                      ? "bg-green-50 text-green-600 dark:bg-green-900/10 dark:text-green-400"
                      : "bg-amber-50 text-amber-600 dark:bg-amber-900/10 dark:text-amber-400"
                  }`
            }
          >
            {isOperational ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>All services operational</span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-4 w-4" />
                <span>Service disruption detected</span>
              </>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default IncidentBadge;
