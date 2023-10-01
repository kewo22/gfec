import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Fra() {
  return (
    <div className="">
      <div className="bg-france-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          FRANCE
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          France is known for its prestigious universities, cultural heritage
          and culinary delights. With a strong emphasis on arts, humanities and
          sciences, France offers a wide array of programs. The country's
          cosmopolitan cities and picturesque regions provide an enriching
          backdrop for academic pursuits.
        </Typography>
      </div>
    </div>
  );
}
