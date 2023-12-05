import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Malta() {
  return (
    <div className="">
      <div className="bg-malta-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          MALTA
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-justify sm:text-left">
          Continuing higher education in Malta offers a unique and enriching
          experience. With a rich history and vibrant cultural environment,
          Malta provides a picturesque backdrop for learning. The country&apos;s
          educational institutions, including the University of Malta, are
          internationally recognized, offering diverse academic programs. Small
          class sizes foster personalized attention, creating an interactive and
          engaging learning environment. Additionally, Malta&apos;s strategic
          location in the heart of the Mediterranean provides students with
          opportunities for cultural exploration and easy access to Europe,
          enhancing their global perspective.
        </Typography>
      </div>
    </div>
  );
}
