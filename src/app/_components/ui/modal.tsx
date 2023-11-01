"use client";

import React, { createElement, useEffect, useState } from "react";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  type: string;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { children, isOpen = false, type, onClose } = props;

  const test = () => {
    onClose();
  };

  if (isOpen) {
    const bodyEl = document.querySelector("body");
    bodyEl?.classList.add("overflow-hidden");
    const u = createElement(
      "div",
      {
        className:
          "fixed z-50 top-0 left-0 h-full w-full overflow-hidden bg-slate-950/50 flex items-center justify-center",
      },
      createElement(
        "div",
        {
          className: "bg-white mx-5 p-5",
        },
        <>
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={test} />
          </div>
          {children}
        </>
      )
    );

    return u;
  } else {
    setTimeout(() => {
      const bodyEl = document.querySelector("body");
      bodyEl?.classList.remove("overflow-hidden");
    }, 500);
    return <></>;
  }
}
