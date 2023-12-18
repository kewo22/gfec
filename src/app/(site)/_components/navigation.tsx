"use client";

import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { useInView } from "react-intersection-observer";

import NavContactRibbon from "./nav-contact-ribbon";
import MobileNav from "./mobile-nav";
import { Typography } from "@/app/_components/ui/typography";
import GetInTouchForm, { GetInTouchFormHandle } from "./get-in-touch-form";
import { Modal } from "@/app/_components/ui/modal";

import { MemoizedNavItems } from "./nav-items";

const SLIDES = ["bg-home-banner-1", "bg-home-banner-2"];

export default function Navigation() {
  const modalRef = useRef(null);
  const getInTouchFormRef = useRef<GetInTouchFormHandle | null>(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const onOpenModel = useCallback(() => {
    if (modalRef && modalRef.current) {
      (modalRef.current as HTMLDialogElement).showModal();
    }
  }, [modalRef]);

  const onCloseModal = () => {
    if (getInTouchFormRef && getInTouchFormRef.current)
      getInTouchFormRef.current.resetForm();
  };

  const [slidNo, setSlideNo] = useState(0);

  let intervalId = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideNo((val) => {
        return ++val;
      });
    }, 5000) as unknown as number;
    intervalId.current = timer;
    return () => clearInterval(intervalId.current);
  }, []);

  const slides = useMemo(() => {
    let TEMP_SLIDES = [...SLIDES];
    if (typeof window !== "undefined") {
      // browser code
      if (slidNo > 2) {
        const bannerWrapper = document.querySelector("#banner-wrapper");
        const el = document.createElement("div");
        el.setAttribute("id", `banner-img-${slidNo}`);
        el.classList.add(
          SLIDES[slidNo % 2],
          "w-full",
          "flex-[0_0_auto]",
          "bg-cover",
          "bg-center",
          "appended-banner-images"
        );
        bannerWrapper?.appendChild(el);
        const element = document.querySelector(`#banner-img-${slidNo}`);
        element?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }

    return TEMP_SLIDES;
  }, [slidNo]);

  if (!inView) {
    clearInterval(intervalId.current);
    if (typeof window !== "undefined") {
      document.querySelectorAll(".appended-banner-images").forEach((el) => {
        el.remove();
      });
      const element = document.querySelector(`#banner-wrapper`);
      element?.scrollTo({ left: 0 });
    }
  } else {
    clearInterval(intervalId.current);
    const timer = setInterval(() => {
      setSlideNo((val) => {
        return ++val;
      });
    }, 5000) as unknown as number;
    intervalId.current = timer;
  }

  return (
    <nav
      className={`min-h-[900px] h-[900px] flex flex-col relative`}
      id="main-nav"
      ref={ref}
    >
     
        <NavContactRibbon />
     

      <div className="absolute w-full h-full">
        <MemoizedNavItems onOpenModel={onOpenModel} />
      </div>

      <div
        className="flex flex-row h-full w-full overflow-y-hidden overflow-x-auto banner-img"
        id="banner-wrapper"
      >
        {slides.map((slide, i) => {
          return (
            <div
              key={i}
              className={`${slide} w-full flex-[0_0_auto] bg-cover bg-center`}
              id={`banner-img-${i}`}
            ></div>
          );
        })}
      </div>

      <MobileNav isMainNavInView={inView} />

      <Modal onClose={onCloseModal} ref={modalRef}>
        <Typography variant="h3" className="my-5 mx-auto text-center">
          Get in Touch
        </Typography>
        <GetInTouchForm ref={getInTouchFormRef} />
      </Modal>
    </nav>
  );
}
