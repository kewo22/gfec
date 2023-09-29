"use client";

import React from "react";

import Button from "@/app/_components/ui/button";

export default function NavActions() {
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
          alert("");
        }}
      />
    </div>
  );
}
