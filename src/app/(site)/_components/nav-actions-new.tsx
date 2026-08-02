"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Button from "@/app/_components/ui/button";

interface NavActionsNewProps {
  openModel?: () => void;
  className?: string;
}

export default function NavActionsNew({ openModel, className }: NavActionsNewProps) {
  const router = useRouter();

  // take out from nav actions
  const onFreeConsultationClick = () => {
    const getInTouchContainer = document.querySelector(
      "#get-in-touch-container"
    );
    setTimeout(() => {
      if (getInTouchContainer) {
        getInTouchContainer.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        openModel?.();
      }
    }, 100);
  };

  const onApplyNowClick = () => {
    router.push('/apply-now', { scroll: true })
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-5 ${className}`}>
      <Button
        text="Apply Now"
        size="md"
        customClass="w-fit"
        onClick={() => {
          onApplyNowClick();
        }}
      />
      {/* <Button
        text="Free Consultation"
        size="md"
        customClass="w-fit"
        onClick={() => {
          onFreeConsultationClick();
        }}
      /> */}
    </div>
  );
}
