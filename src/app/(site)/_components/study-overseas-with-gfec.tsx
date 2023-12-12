"use client";

import React, { useEffect } from "react";

import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Plyr, { PlyrProps } from "plyr-react";

import Container from "./layouts/container";
import "plyr-react/plyr.css";
import { Typography } from "@/app/_components/ui/typography";
import Button from "@/app/_components/ui/button";
import SectionTitle from "./section-title";
import { ResolveBaseUrl } from "@/app/utils/common";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function StudyOverseasWithGfec() {
  const router = useRouter();

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);
    console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
    console.log(process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL);
  }, []);

  // const privacyBasePolicyUrl = ResolveBaseUrl(
  //   process.env.NEXT_PUBLIC_VERCEL_ENV!
  // );

  // const { data, isLoading } = useSWR(
  //   `${privacyBasePolicyUrl}/api`,
  //   fetcher
  //   // { revalidateOnFocus: false, revalidateOnReconnect: false }
  // );

  // console.log(isLoading);
  // console.log(data);

  const plyrProps: PlyrProps = {
    source: {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: "https://gfce.s3.amazonaws.com/GFEC-PROMO.mp4",
          type: "video/webm",
          size: 1080,
        },
      ],
      poster: "/comp/video-poster.webp",
    }, // https://github.com/sampotts/plyr#the-source-setter
    options: {
      volume: 0.3,
      // controls: ["play-large", "f"],
      // hideControls: true,
    }, // https://github.com/sampotts/plyr#options
  };

  const onApplyNowClick = () => {
    router.push("/apply-now", { scroll: true });
  };

  return (
    <Container className="relative mx-5 xl:mx-auto py-20">
      <SectionTitle title=" Study in Overseas with GFEC" />

      <div className="flex flex-col sm:grid sm:grid-cols-[400px_1fr] sm:grid-rows-2 mb-20">
        <div className="row-span-2">
          <div className="image-container inline-block relative rounded-lg">
            <Image
              src="/comp/grad-1.webp"
              alt="grad-1"
              priority
              width="400"
              height="600"
              className="rounded-lg"
            />
          </div>
        </div>
        <div>
          <Typography className="text-justify p-6 md:p-10 bg-primary/80 text-secondary rounded-lg leading-8 sm:relative -left-[35%] top-[12%] sm:w-[130%] lg:-left-[25%] lg:w-[100%]">
            Are you a student looking to pursue higher education but feeling
            overwhelmed by the process? Look no further! Our team of expert
            counselors has partnered with some of the top educational
            institutions to provide you with the guidance you need to make
            informed decisions about your future.
          </Typography>
        </div>
        <div className="pt-10 lg:pt-0 px-5 text-center sm:text-left w-full md:w-[85%] lg:w-full">
          <Typography variant="h3" className="mb-3 text-secondary">
            Providing the Best Visa Services to Students
          </Typography>
          <Typography className="text-justify mb-3">
            We understand that the prospect of higher education can be daunting,
            but with our help, you can confidently navigate the college and
            university landscape. Our counselors have years of experience
            working with students just like you, and they have the knowledge and
            expertise to help you identify your strengths, interests, and career
            goals.
          </Typography>
          <Button
            text="Apply Now"
            size="md"
            customClass="w-fit block mx-auto sm:hidden lg:block lg:!ml-[inherit]"
            onClick={() => {
              onApplyNowClick();
            }}
          />
        </div>
      </div>

      <div className="about-plyr">
        <Plyr {...plyrProps} />
      </div>
    </Container>
  );
}
