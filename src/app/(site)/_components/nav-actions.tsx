"use client";

import React, { useState } from "react";

import Button from "@/app/_components/ui/button";
import Modal from "@/app/_components/ui/modal";
import GetInTouchForm from "./get-in-touch-form";
import SectionTitle from "./section-title";
import { Typography } from "@/app/_components/ui/typography";

export default function NavActions() {
  const [isOpen, setIsOpen] = useState(false);

  const onFreeConsultationClick = () => {
    const getInTouchContainer = document.querySelector(
      "#get-in-touch-container"
    );
    console.log(getInTouchContainer);
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

  const openModel = () => {
    setIsOpen(true);
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

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Typography variant="h3" className="my-5 mx-auto text-center">Get in Touch</Typography>
        <GetInTouchForm />
      </Modal>
    </div>
  );
}
