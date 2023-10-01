import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Fin() {
  return (
    <div className="">
      <div className="bg-finland-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          FINLAND
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Finland is recognized for its innovative education system, which
          emphasizes student well-being and individualized learning. It boasts
          numerous English-taught degree programs and a strong focus on
          cutting-edge research. The pristine natural surroundings and vibrant
          cities offer a unique balance between academic pursuits and a high
          quality of life.
        </Typography>
      </div>
    </div>
  );
}
