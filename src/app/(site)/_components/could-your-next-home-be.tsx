"use client";

import React from "react";

import Image from "next/image";
import Slider from "react-slick";

import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";

import { COUNTRIES } from "../_constants/countries.constants";
import SectionTitle from "./section-title";
import PrevIcon from "./ui/slider-previous";
import NextIcon from "./ui/slider-next";

import buildings from '../../../../public/comp/buildings.png'

export default function CouldYourNextHomeBe() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <PrevIcon />,
    prevArrow: <NextIcon />,
    className: "country-slider-arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          fade: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="mx-0 lg:mx-auto py-20 relative bg-white">
      <Image
        src={buildings}
        alt="buildings-bg"
        priority
        width="0"
        height="200"
        sizes="100vw"
        className="absolute left-0 bottom-[62px] sm:bottom-[44px] md:bottom-[24px] opacity-10 w-full h-auto"
      />

      <SectionTitle title="Could Your Next Home Be?" />

      <Slider {...settings}>
        {COUNTRIES.map((country) => {
          return (
            <div
              key={country.country}
              className={`sm:mb-0 relative h-60 lg:h-72 rounded-xl ${country.class} hover:cursor-pointer border-none outline-none`}
              // onClick={() => onCountryClick(country)}
            >
              <Image
                src={country.image}
                alt={`country-${country.image}`}
                fill
                priority
                className="rounded-xl"
              />
              <Typography
                variant="h4"
                className="w-full text-white tracking-widest absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {country.country}
              </Typography>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}
