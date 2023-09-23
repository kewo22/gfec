"use client";

import React from "react";

import Button from "@/app/_components/ui/button";

export default function NavActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <Button
        text="Apply Now"
        size="lg"
        customClass="mx-auto mt-5 sm:m-0"
        onClick={() => {
          alert("");
        }}
      />
      <Button
        text="Free Consultation"
        size="lg"
        customClass="mx-auto mt-5 sm:m-0"
        onClick={() => {
          alert("");
        }}
      />
    </div>
  );
}
