"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface NavActionsNewProps {
  className?: string;
}

export default function NavActionsNew({ className }: NavActionsNewProps) {
  const router = useRouter();

  const onApplyNowClick = () => {
    router.push("/apply-now", { scroll: true });
  };

  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      {/* <button
        type="button"
        onClick={onApplyNowClick}
        className="font-slip-display text-[13px] font-bold uppercase tracking-wide text-exam-ink/75 hover:text-exam-navy transition-colors"
      >
        Apply Now
      </button> */}
      <button
        type="button"
        onClick={onApplyNowClick}
        className="bg-stamp-red text-slip-surface font-slip-display text-[13px] font-bold uppercase tracking-wide px-6 py-3 rounded-sm cursor-pointer transition-transform active:scale-[0.97]"
      >
        Apply Now
      </button>
    </div>
  );
}
