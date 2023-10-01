"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import NavLinks from "./nav-links";
import NavContactRibbon from "./nav-contact-ribbon";
import NavSocial from "./nav-social";
import NavActions from "./nav-actions";
import MobileNav from "./mobile-nav";
import { Typography } from "@/app/_components/ui/typography";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slider from "react-slick";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function Navigation() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "nav-slider",
  };

  const Items = () => {
    return (
      <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-[90%] max-w-[1000px] flex flex-col gap-10">
          <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={210}
            height={160}
            priority
            className="!hidden lg:!block mx-auto"
          />
          <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={170}
            height={140}
            priority
            className="!block lg:!hidden mx-auto"
          />

          <NavLinks />

          <div className="relative mx-5 lg:mx-0 flex-grow">
            <Image
              src="/arrow-shape.png"
              alt="Next.js Logo"
              width={222}
              height={92}
              priority
              className="!hidden lg:!block absolute left-[38%] top-[-5%] animate-bounce"
            />

            <Typography
              variant="xl"
              className="text-white !leading-[3.5rem] lg:!leading-[5.5rem]"
            >
              Considering <br /> Studying Abroad ?
            </Typography>

            <div className="flex flex-col lg:flex-row items-start justify-start gap-5 my-10">
              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Free Consultation
                </Typography>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Relocate in 45 Days
                </Typography>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Relocate in 45 Days
                </Typography>
              </div>
            </div>

            <NavActions />
          </div>

          <NavSocial wrapperClass="flex flex-row gap-8 items-center justify-start mx-5 lg:mx-0" />
        </div>
      </>
    );
  };

  return (
    <nav className={`h-[900px] flex flex-col items-center relative`}>
      <section className="w-full h-auto">
        <NavContactRibbon />
      </section>

      {/* <Slider {...settings}>
        <div className="bg-home-banner-1 bg-center bg-cover w-full h-full banner-img">
          <Items />
        </div>
        <div className="bg-home-banner-2 bg-center bg-cover w-full h-full banner-img">
          <Items />
        </div>
      </Slider> */}

      <MobileNav />
    </nav>
  );
}
