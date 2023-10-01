import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Swi() {
  return (
    <div className="">
      <div className="bg-switzerland-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          SWITZERLAND
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Switzerland is known for its precision, innovation, and high standards
          of education. Its universities are renowned for research and
          technology. The country&apos;s stunning Alpine scenery and multicultural
          cities create an ideal setting for academic and personal growth.
        </Typography>
      </div>
    </div>
  );
}
