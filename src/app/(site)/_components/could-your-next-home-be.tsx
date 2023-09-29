"use client";

import React from "react";

import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";

import { COUNTRIES } from "../_constants/countries.constants";

export default function CouldYourNextHomeBe() {
  const PrevIcon = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronRight}
        size="2x"
        className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  };

  const NextIcon = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="2x"
        className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  };

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
    className: "xxx",
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
    <Container className="mx-0 lg:mx-auto py-20">
      <Typography variant="h2" className="text-secondary mb-10">
        Could Your Next <span className="text-primary">Home</span> Be?
      </Typography>
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
                alt="Next.js Logo"
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
