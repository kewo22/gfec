"use client";

import React, { BaseSyntheticEvent } from "react";
import { isMobile } from "react-device-detect";

import Image from "next/image";

import Container from "./layouts/container";
import SectionTitle from "./section-title";

export default function StudentLife() {
  const onMouseOver = (e: BaseSyntheticEvent) => {
    if (isMobile) return;
    const target = e.target as HTMLElement;
    target.classList.add("absolute", "z-50");
    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      if (!target.isSameNode(image)) {
        image.classList.add("blur-sm");
      }
    });
  };
  const onMouseLeave = () => {
    if (isMobile) return;
    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      image.classList.remove("blur-sm");
      image.classList.remove("absolute", "z-50");
    });
  };

  return (
    <Container className="py-10 sm:py-20 bg-white">
      <div className="mx-4">
        <SectionTitle title="Student Life" />
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10 mx-5">
        <div className="relative">
          <Image
            src="/grid-1.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="relative">
          <Image
            src="/grid-2.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="relative">
          <Image
            src="/grid-3.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="relative">
          <Image
            src="/grid-4.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="relative">
          <Image
            src="/grid-5.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="relative">
          <Image
            src="/grid-7.jpeg"
            alt="Next.js Logo"
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto border-secondary border-2 p-2 rounded-tl-3xl rounded-br-3xl sm:hover:scale-150 transition-all ease-in-out duration-200 image"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </div>
    </Container>
  );
}
