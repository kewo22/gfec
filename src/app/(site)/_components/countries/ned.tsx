import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Ned() {
  return (
    <div className="">
      <div className="bg-netherlands-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          NETHERLANDS
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          The Netherlands is a popular destination for international students
          due to its high-quality education, English-taught programs, and
          welcoming atmosphere. Renowned for its research, innovation, and
          international outlook, Dutch universities offer a range of programs in
          a diverse and inclusive environment.
        </Typography>
      </div>
    </div>
  );
}
