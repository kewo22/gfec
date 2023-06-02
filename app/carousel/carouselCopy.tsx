"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselCopy() {
  const images = ["/aus.jpg", "/uk-2.jpg", "/toronto.jpg"];

  return (
    <div className="h-56 sm:h-64 md:h-96 xl:h-screen 2xl:h-screen">
      <Carousel
        slideInterval={1000}
        slide={false}
        className="rounded-3xl"
        indicators={false}
        leftControl={<></>}
        rightControl={<></>}
      >
        <Image
          src={images[0]}
          alt="..."
          width={1000}
          height={100}
          priority
          style={{ height: "100%" }}
        />
        <Image
          src={images[1]}
          alt="..."
          width={1000}
          height={100}
          priority
          style={{ height: "100%" }}
        />
        <Image
          src={images[2]}
          alt="..."
          width={1000}
          height={100}
          priority
          style={{ height: "100%" }}
        />
      </Carousel>
    </div>
  );
}
