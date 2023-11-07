"use client";

import React, { useState } from "react";

import Plyr, { PlyrProps } from "plyr-react";

import Container from "./layouts/container";
import SectionTitle from "./section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  const plyrProps: PlyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/testimonial-1.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
      // poster: "/video-poster.jpg",
    },
    options: {
      volume: 0,
    },
  };

  const [currentVideo, setCurrentVideo] = useState(0);
  const [first, setFirst] = useState<PlyrProps>(plyrProps);
  const [isLoading, setIsLoading] = useState(false);

  const videos = [
    "https://gfce.s3.amazonaws.com/testimonial-1.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-2.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-3.mp4",
  ];

  const onNextClick = () => {
    setIsLoading(true);

    setCurrentVideo((state) => {
      if (state === videos.length - 1) {
        afterChange(0);
        return 0;
      }
      afterChange(state + 1);
      return state + 1;
    });
  };

  const onPrevClick = () => {
    setIsLoading(true);

    setCurrentVideo((state) => {
      console.log(
        "🚀 ~ file: testimonial.tsx:57 ~ setCurrentVideo ~ state:",
        state
      );
      if (state === 0) {
        afterChange(videos.length - 1);
        return videos.length - 1;
      }
      afterChange(state - 1);
      return state - 1;
    });
  };

  const afterChange = (currentSlide: number) => {
    const promise = new Promise(function (resolve, reject) {
      const tempPlyrProps = { ...plyrProps };
      setTimeout(() => {
        switch (currentSlide) {
          case 0:
            tempPlyrProps.source!.sources[0].src =
              "https://gfce.s3.amazonaws.com/testimonial-1.mp4";
            break;
          case 1:
            tempPlyrProps.source!.sources[0].src =
              "https://gfce.s3.amazonaws.com/testimonial-2.mp4";
            break;
          case 2:
            tempPlyrProps.source!.sources[0].src =
              "https://gfce.s3.amazonaws.com/testimonial-3.mp4";
            break;

          default:
            break;
        }
        resolve(tempPlyrProps);
      }, 2000);
    });

    promise
      .then((data: any) => {
        console.log("🚀 ~ file: testimonial.tsx:105 ~ .then ~ data:", data);
        setFirst(state => {
          return data
        });
        setIsLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container className="py-10 sm:py-20 bg-white">
      <div className="mx-4">
        <SectionTitle title="What They're Talking About GFEC" />
      </div>

      <div
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } mx-5 transition-all duration-[2000] ease-in-out`}
      >
        <Plyr {...first} />
      </div>

      <div className="flex flex-row mt-5 gap-5 justify-center">
        <button
          className="py-2 px-4 bg-secondary rounded-full"
          onClick={onPrevClick}
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="text-white"
            size="1x"
          />
        </button>
        <button
          className="py-2 px-4 bg-secondary rounded-full"
          onClick={onNextClick}
        >
          <FontAwesomeIcon
            icon={faCaretRight}
            className="text-white"
            size="1x"
          />
        </button>
      </div>
    </Container>
  );
}
