import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Swe() {
  return (
    <div className="">
      <div className="bg-sweden-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          SWEDEN
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-justify sm:text-left">
          Sweden is celebrated for its high-quality education system, with a
          strong focus on research and innovation. English-taught programs are
          widely available, and the country&apos;s commitment to sustainability and
          equality creates a welcoming environment for international students.
          The stunning landscapes and vibrant cities make Sweden an attractive
          place to study.
        </Typography>
      </div>
    </div>
  );
}
