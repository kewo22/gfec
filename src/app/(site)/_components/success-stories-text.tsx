"use client";

import React from "react";

import Container from "./layouts/container";

import { Typography } from "../../_components/ui/typography";
import SectionTitle from "./section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from "@/app/_components/ui/button";

export default function SuccessStoriesText() {
  const onPrevClick = () => {};
  const onNextClick = () => {};

  return (
    <Container className="mx-0 lg:mx-auto py-20">
      <SectionTitle title="Our Success Stories" />

      <div className="relative border-4 border-secondary mx-5 p-12 sm:p-20">
        <div className="absolute -top-[40px] left-[5%] bg-slate-100 px-1">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="4x"
            className="text-secondary"
          />
        </div>
        <div className="absolute -bottom-[40px] right-[5%] bg-slate-100 px-1">
          <FontAwesomeIcon
            icon={faQuoteRight}
            size="4x"
            className="text-secondary"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_auto_1fr] gap-5 place-items-center sm:place-items-start sm:items-center">
          <Image
            src="/team1.png"
            alt="img"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <Typography className="text-center sm:text-left" variant="h4">
              Kewin
            </Typography>
            <Typography className="text-center sm:text-left" variant="h4">
              Fernando
            </Typography>
            <Typography variant="small">Student of Oxford, UX.</Typography>
          </div>
          <div className="justify-self-center sm:justify-self-end flex flex-row gap-1">
            {[1, 2, 3, 4, 5].map((i) => {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  size="2x"
                  className="text-secondary animation_background_test "
                />
              );
            })}
          </div>
        </div>
        <Typography className="text-justify my-10">
          deleniti expedita quisquam, facilis quibusdam excepturi unde, quo
          officiis ducimus ipsa accusantium iusto quos voluptates hic
          distinctio? Recusandae consequatur iusto quas. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Pariatur deleniti expedita
          quisquam, facilis quibusdam excepturi unde, quo officiis ducimus ipsa
          accusantium iusto quos voluptates hic distinctio? Recusandae
          consequatur iusto quas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur
        </Typography>
        <div className="flex flex-row gap-5 justify-center sm:justify-end">
          <Button
            customClass="bg-secondary rounded-full"
            onClick={onPrevClick}
          >
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="text-white"
              size="1x"
            />
          </Button>

          <Button
            customClass="bg-secondary rounded-full"
            onClick={onNextClick}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-white"
              size="1x"
            />
          </Button>
        </div>
      </div>
    </Container>
  );
}
