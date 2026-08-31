"use client";

import { forwardRef, memo, ReactNode, RefObject } from "react";

import { useMutationObserver } from "@/app/_hooks/useMutationObserver";
import { X } from "lucide-react";
import { cn } from "@/app/utils/utils";

interface ModalProps {
  dialogWrapperClassName?: string;
  children?: ReactNode;
  onClose?: () => void;
}
export type Ref = HTMLDialogElement;

export const Modal = forwardRef<Ref, ModalProps>((props, ref) => {
  const { children, dialogWrapperClassName, onClose } = props;

  useMutationObserver(ref as RefObject<Element | null>, (e: any) => {
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
    const dialogElement = (ref as any)?.current as HTMLDialogElement;
    if (dialogElement) {
      dialogElement.close();
    }
    const bodyEl = document.querySelector("body");
    bodyEl?.classList.remove("overflow-hidden");
  };

  return (
    <dialog className={cn("p-5 modal", dialogWrapperClassName)} id="modal" ref={ref}>
      <X
        className="cursor-pointer ml-auto"
        onClick={onCloseModel}
      />
      {children}
    </dialog>
  );
});

Modal.displayName = "Modal";
