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

  // const [currentVideo, setCurrentVideo] = useState(0);
  const [first, setFirst] = useState<PlyrProps>(plyrProps);
  const [isLoading, setIsLoading] = useState(false);

  const videos = [
    "https://gfce.s3.amazonaws.com/testimonial-1.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-2.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-3.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-4.mp4",
    "https://gfce.s3.amazonaws.com/testimonial-5.mp4",
  ];

  const onNextClick = () => {
    setIsLoading(true);
    const tempPlyrProps: PlyrProps = JSON.parse(JSON.stringify(first));
    const src = tempPlyrProps.source?.sources[0].src;
    if (!src) return;

    const currentVideoIndex = videos.findIndex((vid) => {
      return vid === src;
    });

    if (currentVideoIndex === -1) return;

    if (currentVideoIndex === videos.length - 1) {
      tempPlyrProps.source!.sources[0].src = videos[0];
      setFirst({ ...tempPlyrProps });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    tempPlyrProps.source!.sources[0].src = videos[currentVideoIndex + 1];
    setFirst({ ...tempPlyrProps });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const onPrevClick = () => {
    setIsLoading(true);
    const tempPlyrProps: PlyrProps = JSON.parse(JSON.stringify(first));
    const src = tempPlyrProps.source?.sources[0].src;
    if (!src) return;

    const currentVideoIndex = videos.findIndex((vid) => {
      return vid === src;
    });

    if (currentVideoIndex === -1) return;

    if (currentVideoIndex === 0) {
      tempPlyrProps.source!.sources[0].src = videos[videos.length - 1];
      setFirst({ ...tempPlyrProps });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    tempPlyrProps.source!.sources[0].src = videos[currentVideoIndex - 1];
    setFirst({ ...tempPlyrProps });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container className="py-10 sm:py-20 bg-white">
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
