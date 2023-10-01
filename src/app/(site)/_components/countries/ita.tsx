import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Ita() {
  return (
    <div className="">
      <div className="bg-italy-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          ITALY
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Italy offers a rich blend of history, culture and academic excellence.
          Renowned for its art, architecture and cuisine, Italy provides a
          unique backdrop for education. Universities in cities like Florence,
          Rome, and Milan offer a wide range of programs, making it an enticing
          destination for those looking to combine their studies with a
          Mediterranean lifestyle.
        </Typography>
      </div>
    </div>
  );
}
