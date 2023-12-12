import React from "react";

import Image from "next/image";

import { Typography } from "../../_components/ui/typography";
import Container from "./layouts/container";
import SectionTitle from "./section-title";

export default function SuccessPath() {
  return (
    <Container className="mx-auto py-20 bg-white">
      <SectionTitle title="You Pathway to Achieving Success" />

      <div className="flex flex-col items-center lg:hidden gap-10">
        <div className="flex flex-col items-center">
          <Image
            src="/apply.svg"
            alt="success-path-apply"
            priority
            width={140}
            height={140}
          />
          <Typography className="">Apply Online</Typography>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/consult.svg"
            alt="success-path-consult"
            priority
            width={140}
            height={140}
          />
          <Typography className="">Meet Our Consultants</Typography>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/flight.svg"
            alt="success-path-flight"
            priority
            width={140}
            height={140}
            className="-scale-x-[1] -rotate-[20deg] "
          />
          <Typography className="">Depart to Your Destination</Typography>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/graduate.svg"
            alt="success-path-graduate"
            priority
            width={110}
            height={110}
          />
          <Typography className="">Earn Your Degree</Typography>
        </div>
      </div>

      <div className="hidden lg:block relative h-56 max-w-3xl mx-auto">
        <div className="flex flex-row justify-between relative">
          <div className="absolute top-[0] -left-[5%] z-10">
            <Image
              src="/apply.svg"
              alt="success-path-apply"
              priority
              width={125}
              height={125}
            />
            <Typography variant="small" className="absolute top-[110%]">
              Apply Online
            </Typography>
          </div>
          <div className="absolute -top-[32px] left-[31%] z-10">
            <Image
              src="/consult.svg"
              alt="success-path-consult"
              priority
              width={150}
              height={150}
            />
            <Typography
              variant="small"
              className="absolute top-[88%] left-[20%] w-[100px]"
            >
              Meet Our Consultants
            </Typography>
          </div>
          <div className="absolute top-[85px] left-[60%] z-10">
            <Image
              src="/flight.svg"
              alt="success-path-flight"
              priority
              width={125}
              height={125}
              className="-scale-x-[1] -rotate-[20deg] "
            />
            <Typography variant="small" className="absolute top-[80%]">
              Depart to Your Destination
            </Typography>
          </div>
          <div className="absolute top-[18px] -right-[5%] z-10">
            <Image
              src="/graduate.svg"
              alt="success-path-graduate"
              priority
              width={100}
              height={100}
            />
            <Typography variant="small" className="absolute top-[110%]">
              Earn Your Degree
            </Typography>
          </div>
        </div>
        <Image
          src="/curve-dotted-line.svg"
          alt="success-path-curve-dotted-line"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="absolute top-16 left-0 right-0 bottom-0 w-full h-auto"
        />
      </div>
    </Container>
  );
}
