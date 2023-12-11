"use client";

import { forwardRef, ReactNode, useEffect, useLayoutEffect } from "react";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  children?: ReactNode;
  isOpen?: boolean;
}
export type Ref = HTMLDialogElement;

export const Modal2 = forwardRef<Ref, ModalProps>((props, ref) => {
  const { isOpen, children } = props;
  useEffect(() => {
    if (isOpen) {
      console.log("🚀 ~ file: modal2.tsx:19 ~ useEffect ~ isOpen:", isOpen);
      const bodyEl = document.querySelector("body");
      bodyEl?.classList.add("overflow-hidden");
    }
  }, [isOpen]);

  const onClose = () => {
    ((ref as any).current as HTMLDialogElement).close();
    const bodyEl = document.querySelector("body");
    bodyEl?.classList.remove("overflow-hidden");
  };

  return (
    <dialog className="p-5" ref={ref}>
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>
      {children}
    </dialog>
  );
});

Modal2.displayName = "Modal";
