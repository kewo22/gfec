import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Lat() {
  return (
    <div className="">
      <div className="bg-latvia-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          LATVIA
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-justify sm:text-left">
          Latvia, with its picturesque landscapes and vibrant cities, is gaining
          popularity among international students. Its universities provide
          various programs in English, making it accessible to a global
          audience. Latvia offers an affordable yet high-quality education in
          the heart of the Baltic region.
        </Typography>
      </div>
    </div>
  );
}
