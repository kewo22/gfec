"use client";

import React from "react";

import Button from "@/app/_components/ui/button";

export default function NavActions({ openModel }: any) {
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
        openModel();
      }
    }, 100);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <Button
        text="Apply Now"
        size="md"
        customClass="w-fit"
        onClick={() => {
          alert("");
        }}
      />
      <Button
        text="Free Consultation"
        size="md"
        customClass="w-fit"
        onClick={() => {
          onFreeConsultationClick();
        }}
      />
    </div>
  );
}
