"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";

function GraphCMSImageLoader({ src, width }: any) {
  const relativeSrc = (src: any) => src.split("/").pop();
  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`;
}

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel() {
  const images = ["/slide-01.jpg", "/slide-02.jpg", "/slide-03.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <ChevronLeftIcon
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-20 h-6 w-6"
      />
      <div
        className="w-full flex overflow-hidden relative m-auto"
        // style={{ height: "600px" }}
      >
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image: string, index: number) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={index}
                  src={image}
                  alt="Next.js Logo"
                  width={2000}
                  height={500}
                  priority
                //   loader={GraphCMSImageLoader}
                  //   style={{ objectFit: "cover" }}
                  //   fill
                  //   sizes="(max-width: 768px) 100vw,
                  //           (max-width: 1200px) 50vw,
                  //           33vw"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <ChevronRightIcon
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white z-20 h-6 w-6"
      />
      {/* 
      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
}
