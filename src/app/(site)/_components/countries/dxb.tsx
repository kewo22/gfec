import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Dxb() {
  return (
    <div className="">
      <div className="bg-dxb-banner bg-center bg-cover w-full h-60 grid place-items-center">
        <Typography
          variant="h1"
          className="text-white tracking-wider shadow-2xl"
        >
          DUBAI
        </Typography>
      </div>

      <div className="p-10">
        <Typography className="text-justify sm:text-left">
          Continuing higher education in Dubai offers a unique blend of cultural
          diversity and academic excellence. Renowned for its world-class
          universities and innovative programs, Dubai provides a global learning
          environment with a focus on cutting-edge research and industry
          integration. Students benefit from exposure to an international
          business hub, gaining valuable networking opportunities and real-world
          insights. The city&apos;s strategic location fosters connections between
          East and West, enhancing career prospects. Additionally, Dubai&apos;s
          commitment to modern infrastructure and quality of life ensures a
          dynamic and enriching educational experience.
        </Typography>
      </div>
    </div>
  );
}
