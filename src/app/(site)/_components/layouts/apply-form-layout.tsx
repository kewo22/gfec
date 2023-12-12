import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ApplyFormLayout({ icon, title, children }: any) {
  return (
    <div className="bg-white shadow-2xl p-6 pt-12 flex flex-col gap-8 relative">
      <div className="flex flex-row items-center justify-center gap-4 absolute -top-[20px] sm:-top-[20px] left-[3%] bg-secondary py-2 px-4 shadow-md">
        <FontAwesomeIcon icon={icon} className="text-white" />
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <FontAwesomeIcon icon={faCircleInfo} /> */}
        <Typography variant="p" className="text-white tracking-wide">
          {title}
        </Typography>
      </div>

      {children}
    </div>
  );
}
