import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Rus() {
  return (
    <div className="">
      <div className="bg-russia-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          RUSSIA
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Russia offers a diverse range of educational opportunities, from
          classical literature and arts to cutting-edge science and technology.
          Its historic universities in Moscow and St. Petersburg are renowned
          worldwide. Studying in Russia provides a chance to immerse oneself in
          a rich cultural and historical context while pursuing higher
          education.
        </Typography>
      </div>
    </div>
  );
}
