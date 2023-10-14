"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const data = [
    {
      name: "Isanka Edirisooriya",
      uni: "Student of Oxford, UK.",
      successStory:
        "I'm Isanka Edirisooriya, student of University of Essex UK. I got this opportunity through GFE Consultancy. There was a consultant who guided me throughout this process. I got to know about GFE Consultancy through Facebook. I visited the place and they guided me throughout my SOP's until the VISA Process in which they did VISA's for my whole family of 4 members. We got our VISA's success within the specific period of time without any delay. So GFE Consultancy guided me very much and I highly recommend this place for you all.",
    },
    {
      name: "Janitha Dineshan",
      uni: "Student of Oxford, UK.",
      successStory:
        "Hi! Good Afternoon! My name is Janitha Dineshan and this is my husband Manoharan Dineshan. We got the VISA to the UK. අපි GFE Consultation එකෙන් තමයි කරේ. එයාලා හරියටම documents arrange කරලා, අපිට හරියටම එකේ ඉදලා පටන් ගන්න වෙලාව ඔක්කොම හරියටම කරලා, අපිට calls ඔක්කොම support කරලා, අපිට හොදට කියලා දුන්නා. ඒක නිසා තමයි අපි VISA වලට Monday දාලා Saturday ගත්තේ. එයාලා හරියටම අපිට ඔක්කොම කියලා දුන්නා. ඒක නිසා තමයි අපි ඉක්මනට VISA එක ගත්තේ. මේ වගේ සල්ලි මුකුත් ගන්නේ නැතුව, කවුරුත් මේ වගේ කරලා දෙන්නේ නැහැ. මේ Agency එකට ඔයාලත් අවොත්, ඔයාලට පරිස්සමින්, ඉක්මනට VISA ගන්න පුළුවන්. අපි වගේ ඔයාලටත් UK යන්න පුළුවන්. නැත්නම් වෙන countries වලටත් VISA එයාලා කරලා දෙනවා.",
    },
  ];

  const [selectedSuccessStory, setSelectedSuccessStory] = useState(0);

  const fullNameRef = useRef<any>();
  const uniRef = useRef<any>();
  const successStoryRef = useRef<any>();

  useEffect(() => {
    if (!fullNameRef) return;
    setTimeout(() => {
      fullNameRef.current?.classList.remove("opacity-0");
      fullNameRef.current?.classList.add("opacity-1");
      uniRef.current?.classList.remove("opacity-0");
      uniRef.current?.classList.add("opacity-1");
      successStoryRef.current?.classList.remove("opacity-0");
      successStoryRef.current?.classList.add("opacity-1");
    }, 500);
  }, [selectedSuccessStory]);

  const onPrevClick = () => {
    fullNameRef.current?.classList.add("opacity-0");
    uniRef.current?.classList.add("opacity-0");
    successStoryRef.current?.classList.add("opacity-0");
    setTimeout(() => {
      if (selectedSuccessStory === 0) {
        setSelectedSuccessStory(data.length - 1);
        return;
      }
      setSelectedSuccessStory((state) => state - 1);
    }, 500);
  };

  const onNextClick = () => {
    fullNameRef.current?.classList.add("opacity-0");
    uniRef.current?.classList.add("opacity-0");
    successStoryRef.current?.classList.add("opacity-0");
    setTimeout(() => {
      if (selectedSuccessStory === data.length - 1) {
        setSelectedSuccessStory(0);
        return;
      }
      setSelectedSuccessStory((state) => state + 1);
    }, 500);
  };

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
            <Typography
              className="text-center sm:text-left transition-all duration-500 ease-in-out"
              // id="test"
              variant="h4"
              ref={fullNameRef}
            >
              {data[selectedSuccessStory].name}
            </Typography>
            <Typography
              variant="small"
              className="text-center sm:text-left"
              ref={uniRef}
            >
              {data[selectedSuccessStory].uni}
            </Typography>
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
        <Typography className="text-justify my-10" ref={successStoryRef}>
          {data[selectedSuccessStory].successStory}
        </Typography>
        <div className="flex flex-row gap-5 justify-center sm:justify-end">
          <Button customClass="bg-secondary rounded-full" onClick={onPrevClick}>
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="text-white"
              size="1x"
            />
          </Button>

          <Button customClass="bg-secondary rounded-full" onClick={onNextClick}>
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
