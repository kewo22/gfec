"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavActionsNewProps {
  openModel?: () => void;
  className?: string;
}

export default function NavActionsNew({ openModel, className }: NavActionsNewProps) {
  const router = useRouter();
  const pathname = usePathname();

  const onFreeConsultationClick = () => {
    if (pathname !== "/contact") {
      router.push("/contact#get-in-touch-container");
      return;
    }
    const getInTouchContainer = document.querySelector("#get-in-touch-container");
    if (getInTouchContainer) {
      getInTouchContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      openModel?.();
    }
  };

  const onApplyNowClick = () => {
    router.push("/apply-now", { scroll: true });
  };

  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <button
        type="button"
        onClick={onApplyNowClick}
        className="font-display text-[15px] font-medium text-navy/80 hover:text-navy transition-colors"
      >
        Apply Now
      </button>
      <button
        type="button"
        onClick={onFreeConsultationClick}
        className="group relative overflow-hidden bg-navy text-paper font-display text-[15px] font-semibold px-6 py-3 rounded-sm cursor-pointer"
      >
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        Book a Free Consultation
      </button>
    </div>
  );
}
