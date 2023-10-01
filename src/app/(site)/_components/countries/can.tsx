import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Can() {
  return (
    <div className="">
      <div className="bg-canada-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          CANADA
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Canada is known for its high-quality education system, stunning
          natural landscapes and multicultural society. Canadian universities
          consistently rank among the best globally, and the country provides a
          welcoming environment for international students. With a focus on
          research and innovation, Canada is an excellent choice for those
          seeking top-notch education and a high quality of life.
        </Typography>
      </div>
    </div>
  );
}
