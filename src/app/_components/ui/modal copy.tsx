"use client";

import React, { useEffect, useState } from "react";

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

  const [_isOpen, _setIsOpen] = useState(isOpen);

  useEffect(() => {
    console.log(isOpen);
    _setIsOpen(isOpen);

    return () => {
      _setIsOpen(false);
      console.log("cleanup");
    };
  }, [isOpen]);

  if (_isOpen) {
    const bodyEl = document.querySelector("body");
    const firstChild = bodyEl?.firstChild;
    const modalEl = document.querySelector("#modal")!;
    bodyEl!.insertBefore(modalEl, firstChild!);
    bodyEl?.classList.add("overflow-hidden");
    setTimeout(() => {
      modalEl.classList.add("scale-0");
      modalEl.classList.add("scale-100");
    }, 100);
  }

  const onCloseClick = () => {
    const bodyEl = document.querySelector("body");
    const modalEl = document.querySelector("#modal");
    if (bodyEl && modalEl) {
      bodyEl.classList.remove("overflow-hidden");
      modalEl.classList.add("scale-0");
      modalEl.classList.remove("scale-100");
      //   debugger
      //   console.log("🚀 ~ file: modal.tsx:44 ~ onCloseClick ~ bodyEl:", bodyEl);
      //   // bodyEl.removeChild(modalEl);
      _setIsOpen(false);
      onClose();
    }
  };

  // if (!isOpen) return;

  // if (_isOpen) {
  //   setTimeout(() => {
  //     const bodyEl = document.querySelector("body");
  //     const firstChild = bodyEl?.firstChild;
  //     const modalEl = document.querySelector("#modal")!;
  //     bodyEl!.insertBefore(modalEl, firstChild!);
  //     bodyEl?.classList.add("overflow-hidden");
  //     setTimeout(() => {
  //       modalEl.classList.add("scale-0");
  //       modalEl.classList.add("scale-100");
  //     }, 100);
  //   }, 1000);

  //   return (
  //     <section
  //       id="modal"
  //       // -top-[45px]
  //       className="fixed z-50 bg-slate-950/50 scale-0 transition-all duration-500 ease-in-out top-0 left-0 bottom-0 right-0 grid place-items-center h-screen w-screen"
  //     >
  //       <div className="relative max-h-[90%] h-auto w-[90%] lg:max-w-4xl xl:max-w-5xl bg-white rounded-lg overflow-y-auto overflow-x-hidden p-5">
  //         <FontAwesomeIcon
  //           icon={faTimesCircle}
  //           size="2x"
  //           className="text-slate-500 absolute right-5 top-5 cursor-pointer hover:text-secondary transition-all duration-500 ease-in-out"
  //           onClick={onCloseClick}
  //         />
  //         <div className="mt-10">{children}</div>
  //       </div>
  //     </section>
  //   );
  // } else {
  //   // const bodyEl = document.querySelector("body");
  //   // const modalEl = document.querySelector("#modal");
  //   // if (bodyEl && modalEl) {
  //   //   bodyEl.classList.remove("overflow-hidden");
  //   //   modalEl.classList.add("scale-0");
  //   //   modalEl.classList.remove("scale-100");
  //   //   //   debugger
  //   //   //   console.log("🚀 ~ file: modal.tsx:44 ~ onCloseClick ~ bodyEl:", bodyEl);
  //   //   // if (bodyEl.contains(modalEl)) bodyEl.removeChild(modalEl);
  //   //   // modalEl.remove()
  //   // }

  //   return <></>;
  // }

  // const u = React.createElement(() => <div className="fixed z-50 top-0 left-0"> {children} </div>, {
  //   key: Math.random(),
  // });

  // return u

  // const x = `
  // <section
  //     id="modal"
  //     // -top-[45px]
  //     className="fixed z-50 bg-slate-950/50 scale-0 transition-all duration-500 ease-in-out top-0 left-0 bottom-0 right-0 grid place-items-center h-screen w-screen"
  //   >
  //     <div className="relative max-h-[90%] h-auto w-[90%] lg:max-w-4xl xl:max-w-5xl bg-white rounded-lg overflow-y-auto overflow-x-hidden p-5">
  //       <FontAwesomeIcon
  //         icon={faTimesCircle}
  //         size="2x"
  //         className="text-slate-500 absolute right-5 top-5 cursor-pointer hover:text-secondary transition-all duration-500 ease-in-out"
  //         onClick={onCloseClick}
  //       />
  //       <div className="mt-10">{children}</div>
  //     </div>
  //   </section>
  //   `;

  return (
    <section
      id="modal"
      // -top-[45px]
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