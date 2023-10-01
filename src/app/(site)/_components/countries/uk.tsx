import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Uk() {
  return (
    <div className="">
      <div className="bg-uk-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          UNITED KINGDOM
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          The United Kingdom is renowned for its prestigious universities and
          diverse academic opportunities. Whether you choose the historic charm
          of Oxford and Cambridge or the bustling cosmopolitan life in London,
          you&apos;ll find a wide range of programs and degrees. The UK offers a
          rich cultural experience, with a blend of tradition and modernity,
          making it an attractive destination for international students.
        </Typography>
      </div>
    </div>
  );
}
