import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Bel() {
  return (
    <div className="">
      <div className="bg-belarus-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          BELARUS
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-justify sm:text-left">
          Belarus is an emerging destination for international students due to
          its affordable tuition fees and diverse range of programs. Its
          universities offer degrees in various fields, and the country&apos;s rich
          history and culture provide a unique backdrop for learning. Belarus is
          an excellent option for those seeking a cost-effective education in
          Europe.
        </Typography>
      </div>
    </div>
  );
}
