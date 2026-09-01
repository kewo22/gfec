"use client";

import { useEffect } from "react";

import { Typography } from "@/app/_components/ui/typography";
import Button from "@/app/_components/ui/button";

export default function SiteError({
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
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <Typography variant="h3" className="text-secondary">
        Something went wrong
      </Typography>
      <Typography variant="p" className="text-secondary/80">
        Please try again, or contact us if the problem continues.
      </Typography>
      <Button text="Try again" size="md" onClick={() => reset()} />
    </div>
  );
}
