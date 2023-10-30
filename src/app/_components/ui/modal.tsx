"use client";

import {
  faTimesCircle,
  faTimesSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  type: string;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { children, isOpen = false, type, onClose } = props;
  console.log("🚀 ~ file: modal.tsx:19 ~ Modal ~ type:", type, isOpen);

  useEffect(() => {
    if (isOpen) {
      const bodyEl = document.querySelector("body");
      const firstChild = bodyEl?.firstChild;
      const modalEl = document.querySelector("#modal")!;
      bodyEl!.insertBefore(modalEl, firstChild!);
      bodyEl?.classList.add("overflow-hidden");
      setTimeout(() => {
        modalEl.classList.add("scale-0");
        modalEl.classList.add("scale-100");
      }, 100);
    } else {
      //
      console.log("is open false");
    }
    return () => {
      console.log("cleanup");
      //  debugger
    };
  }, [isOpen]);

  const onCloseClick = () => {
    debugger
    const bodyEl = document.querySelector("body");
    const modalEl = document.querySelector("#modal");
    if (modalEl && bodyEl) {
      bodyEl.classList.remove("overflow-hidden");
      modalEl.classList.add("scale-0");
      modalEl.classList.remove("scale-100");
      bodyEl.removeChild(modalEl);
      onClose();
    }
  };

  if (!isOpen) return;

  return (
    <section
      id="modal"
      className="fixed z-50 bg-slate-950/50 scale-0 transition-all duration-500 ease-in-out top-0 left-0 bottom-0 right-0 grid place-items-center h-screen w-screen"
    >
      <div className="relative max-h-[90%] h-auto w-[90%] lg:max-w-4xl xl:max-w-5xl bg-white rounded-lg overflow-y-auto overflow-x-hidden p-5">
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          className="text-slate-500 absolute right-5 top-5 cursor-pointer hover:text-secondary transition-all duration-500 ease-in-out"
          onClick={onCloseClick}
        />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
