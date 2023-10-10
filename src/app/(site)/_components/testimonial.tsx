"use client";

import React, { useState } from "react";

import Plyr, { PlyrProps } from "plyr-react";

import Container from "./layouts/container";
import SectionTitle from "./section-title";

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
  const [first, setFirst] = useState(plyrProps);
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
        setFirst(tempPlyrProps);
        resolve(tempPlyrProps);
      }, 1000);
    });

    promise
      .then(() => {
        setIsLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container className="mx-5 xl:mx-auto py-20 bg-white">
      <div className="mx-4">
        <SectionTitle title="What They're Talking About GFEC" />
      </div>

      <div
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } mx-5 transition-all duration-1000 ease-in-out`}
      >
        <Plyr {...first} />
      </div>

      <button className="p-5 mx-2" onClick={onPrevClick}>
        prev
      </button>
      <button className="p-5 mx-2" onClick={onNextClick}>
        next
      </button>
    </Container>
  );
}
