import React from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./nav-links";
import { Typography } from "@/app/_components/ui/typography";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import NavActions from "./nav-actions";
import NavSocial from "./nav-social";

function NavItems({ onOpenModel }: any) {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-[80%] max-w-[1000px] flex flex-col gap-10">
        <div className="">
          <Image
            src="/comp/GFEC-Trans.png"
            alt="GFEC-Trans-mobile-lg"
            width={210}
            height={160}
            priority
            // className="!hidden lg:!block mx-auto"
            className="mx-auto"
          />
          {/* <Image
                src="/comp/GFEC-Trans.png"
                alt="GFEC-Trans-mobile-sm"
                width={170}
                height={140}
                priority
                className="!block lg:!hidden mx-auto"
              /> */}
        </div>

        <NavLinks />

        <div className="relative mx-5 lg:mx-0 flex-grow">
          <Image
            src="/comp/arrow-shape.webp"
            alt="arrow-shape-anim"
            width={222}
            height={92}
            priority
            className="!hidden lg:!block absolute left-[38%] top-[-5%] animate-bounce"
          />

          <Typography
            variant="xl"
            className="text-white !leading-[3.5rem] lg:!leading-[5.5rem]"
          >
            Considering <br /> Studying Abroad ?
          </Typography>

          <div className="flex flex-col lg:flex-row items-start justify-start gap-5 my-10">
            <div className="flex flex-row gap-2 items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                className="text-secondary"
              />
              <Typography variant="h5" className="text-white font-normal">
                Free Consultation
              </Typography>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                className="text-secondary"
              />
              <Typography variant="h5" className="text-white font-normal">
                Relocate in 45 Days
              </Typography>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="lg"
                className="text-secondary"
              />
              <Typography variant="h5" className="text-white font-normal">
                Relocate in 45 Days
              </Typography>
            </div>
          </div>

          <NavActions openModel={onOpenModel} />
        </div>

        <NavSocial wrapperClass="flex flex-row gap-8 items-center justify-start mx-5 lg:mx-0" />
      </div>
    </div>
  );
}

export const MemoizedNavItems = React.memo(NavItems);
