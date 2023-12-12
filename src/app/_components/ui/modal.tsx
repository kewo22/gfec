"use client";

import { forwardRef, memo, ReactNode } from "react";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutationObserver } from "@/app/_hooks/useMutationObserver";

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}
export type Ref = HTMLDialogElement;

export const Modal = forwardRef<Ref, ModalProps>((props, ref) => {
  const { children, onClose } = props;

  useMutationObserver(ref, (e: any) => {
    const el =
      (e[0].target as HTMLDialogElement) ||
      ((ref as any).current as HTMLDialogElement);

    const isOpen = el.getAttribute("open");
    if (isOpen === null) {
      const bodyEl = document.querySelector("body");
      bodyEl?.classList.remove("overflow-hidden");
    } else {
      const bodyEl = document.querySelector("body");
      bodyEl?.classList.add("overflow-hidden");
    }
  });

  const onCloseModel = () => {
    if (onClose) onClose();
    ((ref as any).current as HTMLDialogElement).close();
    const bodyEl = document.querySelector("body");
    bodyEl?.classList.remove("overflow-hidden");
  };

  return (
    <dialog className="p-5 modal" id="modal" ref={ref}>
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          className="cursor-pointer"
          onClick={onCloseModel}
        />
      </div>
      {children}
    </dialog>
  );
});

Modal.displayName = "Modal";
