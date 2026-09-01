"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center gap-4 p-5 text-center">
      <p className="text-lg font-semibold text-slate-700">
        Something went wrong loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-slate-700 px-4 py-2 text-sm text-white hover:bg-slate-800"
      >
        Try again
      </button>
    </div>
  );
}
