"use client";

import React from "react";
import { Typography } from "../_components/ui/typography";
import Image from "next/image";

import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import SuccessPath from "./_components/success-path";

export default function SitePage() {
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
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
    }, // https://github.com/sampotts/plyr#the-source-setter
    options: {
      volume: 0.3,
      controls: ["play-large"],
      hideControls: true,
    }, // https://github.com/sampotts/plyr#options
  };

  return (
    <section className="bg-slate-100">
      <SuccessPath />

      <section className="text-center max-w-[1200px] py-12 mx-5 lg:mx-auto">
        <Typography variant="h2" className="text-secondary">
          Study in Overseas with <span className="text-primary">GFEC</span>
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-primary divide-x my-12">
          <Typography className="text-justify lg:pr-5">
            Are you a student looking to pursue higher education but feeling
            overwhelmed by the process? Look no further! Our team of expert
            counselors has partnered with some of the top educational
            institutions to provide you with the guidance you need to make
            informed decisions about your future.
          </Typography>
          <br className="lg:hidden" />
          <Typography className="text-justify lg:pl-5">
            We understand that the prospect of higher education can be daunting,
            but with our help, you can confidently navigate the college and
            university landscape. Our counselors have years of experience
            working with students just like you, and they have the knowledge and
            expertise to help you identify your strengths, interests, and career
            goals.
          </Typography>
        </div>

        <Plyr {...plyrProps} />
      </section>

      <br />
      <br />
    </section>
  );
}
