import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Ger() {
  return (
    <div className="">
      <div className="bg-germany-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          GERMANY
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-left">
          Germany is known for its excellent higher education institutions, many
          of which offer tuition-free or low-cost education to international
          students. The country&apos;s strong emphasis on research and innovation,
          combined with its rich cultural heritage, makes it a popular choice
          for students looking for quality education and a multicultural
          experience.
        </Typography>
      </div>
    </div>
  );
}
