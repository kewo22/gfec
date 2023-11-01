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
  console.log("🚀 ~ file: modal.tsx:19 ~ Modal ~ type:", type, isOpen);

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
        "button",
        {
          className:
            "absolute right-5 top-5 cursor-pointer hover:text-secondary transition-all duration-500 ease-in-out",
          onClick: () => {
            test();
          },
        },
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      ),
      createElement(
        "div",
        {
          className: "bg-white mx-5 p-5",
          onClick: () => {
            test();
          },
        },
        children
      )
    );

    return u;
  } else {
    setTimeout(() => {
      console.log(document);
    }, 1000);
    // if (document) {
    //   const bodyEl = document.querySelector("body");
    //   bodyEl?.classList.remove("overflow-hidden");
    // }
    return <></>;
  }
}
