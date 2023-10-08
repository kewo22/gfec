"use client";

import React from "react";

import Slider from "react-slick";
import Plyr, { PlyrProps } from "plyr-react";

import Container from "./layouts/container";
import SectionTitle from "./section-title";
import PrevIcon from "./ui/slider-previous";
import NextIcon from "./ui/slider-next";

export default function Testimonial() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevIcon />,
    prevArrow: <NextIcon />,
    className: "testimonial-slider",
  };

  //   const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //     // dots: false,
  //     // speed: 800,
  //     // autoplaySpeed: 3000,
  //     // slidesToShow: 4,
  //     // slidesToScroll: 1,
  //     // className: "nav-slider",
  //   };

  const plyrProps: PlyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/GFEC-PROMO.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
      poster: "/video-poster.jpg",
    }, // https://github.com/sampotts/plyr#the-source-setter
    options: {
      volume: 0.3,
      // controls: ["play-large", "f"],
      // hideControls: true,
    }, // https://github.com/sampotts/plyr#options
  };

  const plyrPropsTestimonial1: PlyrProps = {
    ...plyrProps,
    source: {
      type: "video",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/testimonial-1.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
    },
  };

  const plyrPropsTestimonial2: PlyrProps = {
    ...plyrProps,
    source: {
      type: "video",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/testimonial-2.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
    },
  };

  const plyrPropsTestimonial3: PlyrProps = {
    ...plyrProps,
    source: {
      type: "video",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/testimonial-3.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
    },
  };

  return (
    <Container className="mx-5 xl:mx-auto py-20 bg-white">
      <div className="mx-4">
        <SectionTitle title="What They're Talking About GFEC" />
      </div>

      <Slider {...settings}>
        <div className="h-full w-full">
          <Plyr {...plyrProps} />
        </div>
        <div className="h-full w-full">
          <Plyr {...plyrPropsTestimonial1} />
        </div>
        <div className="h-full w-full">
          <Plyr {...plyrPropsTestimonial2} />
        </div>
        <div className="h-full w-full">
          <Plyr {...plyrPropsTestimonial3} />
        </div>
        <div className="h-full w-full">
          <Plyr {...plyrPropsTestimonial1} />
        </div>
      </Slider>
    </Container>
  );
}
