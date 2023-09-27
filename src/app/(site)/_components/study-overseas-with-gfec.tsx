"use client";

import React from "react";

import Plyr, { PlyrProps } from "plyr-react";

import Container from "./layouts/container";
import "plyr-react/plyr.css";
import { Typography } from "@/app/_components/ui/typography";

export default function StudyOverseasWithGfec() {
  const plyrProps: PlyrProps = {
    source: {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/GFEC-PROMO.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
      poster:
        "/video-poster.jpg",
    }, // https://github.com/sampotts/plyr#the-source-setter
    options: {
      volume: 0.3,
      // controls: ["play-large", "f"],
      // hideControls: true,
    }, // https://github.com/sampotts/plyr#options
  };

  return (
    <Container className="mx-5 xl:mx-auto py-20">
      <Typography variant="h2" className="text-secondary">
        Study in Overseas with <span className="text-primary">GFEC</span>
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-primary divide-x my-10">
        <Typography className="text-justify lg:pr-5">
          Are you a student looking to pursue higher education but feeling
          overwhelmed by the process? Look no further! Our team of expert
          counselors has partnered with some of the top educational institutions
          to provide you with the guidance you need to make informed decisions
          about your future.
        </Typography>
        <br className="lg:hidden" />
        <Typography className="text-justify lg:pl-5">
          We understand that the prospect of higher education can be daunting,
          but with our help, you can confidently navigate the college and
          university landscape. Our counselors have years of experience working
          with students just like you, and they have the knowledge and expertise
          to help you identify your strengths, interests, and career goals.
        </Typography>
      </div>

      <Plyr {...plyrProps} />
    </Container>
  );
}
