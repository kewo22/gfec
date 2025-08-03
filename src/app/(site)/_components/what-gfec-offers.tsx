import React from "react";
import Image from "next/image";

import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";
import SectionTitle from "./section-title";

import books from "../../../../public/comp/books.png";
import graduationHat from "../../../../public/comp/graduation-hat.png";
import offer from "../../../../public/comp/offer.png";
import finSupport from "../../../../public/comp/fin-support.png";
import studentVisa from "../../../../public/comp/student-visa.png";
import waitingRoom from "../../../../public/comp/waiting-room.png";
import roomKey from "../../../../public/comp/room-key.png";
import immigration from "../../../../public/comp/immigration.png";
import discussion from "../../../../public/comp/discussion.png";
import visa from "../../../../public/comp/visa.png";
import eng from "../../../../public/comp/eng.png";
import { TypingEffect } from "./typing-effect";

export default function WhatGfecOffers() {
  const dataArr = [
    {
      image: {
        name: books,
        alt: "books",
        height: 50,
        width: 50,
      },
      title: "Program Selections",
      description:
        "Explore a wide range of study programs tailored to your career goals and academic interests",
    },
    {
      image: {
        name: graduationHat,
        alt: "graduation-hat",
        height: 70,
        width: 70,
      },
      title: "University Selections",
      description:
        "Choose from top universities across the globe to find the right fit for your future",
    },
    {
      image: {
        name: offer,
        alt: "offer",
        height: 60,
        width: 60,
      },
      title: "Offers & Admissions",
      description:
        "Get access to exclusive admission discounts and personalized application support",
    },
    {
      image: {
        name: finSupport,
        alt: "fin-support",
        height: 70,
        width: 70,
      },
      title: "Financial Guidance",
      description:
        "Receive expert advice on budgeting, scholarships, and making your education affordable",
    },
    {
      image: {
        name: studentVisa,
        alt: "student-visa",
        height: 70,
        width: 70,
      },
      title: "Visa processing assistance",
      description:
        "We guide you through every step of your student visa application with ease and accuracy",
    },
    {
      image: {
        name: waitingRoom,
        alt: "waiting-room",
        height: 70,
        width: 70,
      },
      title: "Pre-departure Briefings",
      description:
        "Be fully prepared before you fly—get practical tips, cultural insights, and travel guidance",
    },
    {
      image: {
        name: roomKey,
        alt: "room-key",
        height: 70,
        width: 70,
      },
      title: "Accommodation Guidance",
      description:
        "Find safe and convenient student housing options near your campus with our help",
    },
    {
      image: {
        name: immigration,
        alt: "immigration",
        height: 75,
        width: 75,
      },
      title: "Immigration Guidance",
      description:
        "Understand immigration policies and procedures with reliable, up-to-date support and Q&A",
    },
    // {
    //   image: {
    //     name: discussion,
    //     alt: "discussion",
    //     height: 50,
    //     width: 50,
    //   },
    //   title: "Free Counselling & Personalized Service",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    // },
    // {
    //   image: {
    //     name: visa,
    //     alt: "visa",
    //     height: 50,
    //     width: 50,
    //   },
    //   title: "Total Process Until Visa Free of Charge",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    // },
    // {
    //   image: {
    //     name: eng,
    //     alt: "eng",
    //     height: 55,
    //     width: 55,
    //   },
    //   title: "IELTS Classes / Spoken English Classes",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    // },
  ];

  return (
    <Container className="mx-5 xl:mx-auto py-12">
      <SectionTitle title="What GFEC offers ?" />

      <div id="what-we-offer-card" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {dataArr.map((data, i) => {
          return (

            <div key={i} className="card">
              <div className="card-front">
                <Image
                  src={data.image.name}
                  alt={data.image.alt}
                  height={data.image.height}
                  width={data.image.width}
                  className="!relative mb-3 text-center mx-auto"
                  priority
                />
                <Typography variant="p" className="font-bold ">
                  {data.title}
                </Typography>
              </div>
              <div className="card-back">
                <Typography variant="p" className=" px-5">
                  {data.description}
                </Typography>
              </div>
            </div>
          )
        })}

      </div>


      <section id="paper" className="mt-10 flex flex-col lg:flex-row justify-evenly items-center gap-5 lg:gap-0">
        <div className="page">
          <div className="margin"></div>
          <TypingEffect variant="h5" text="Start Your Global Education Journey with Confidence!" duration={0.01} />
          <br />
          <TypingEffect variant="p" textClassName="text-left" text="Whether you&apos;re dreaming of studying in the UK, Malta, Germany, or Dubai—GFEC is here to guide you every step of the way. Our expert counselors are partnered with leading global universities to offer you trusted advice, step-by-step application support, and a pathway to success. " />
        </div>
        <div className="page">
          <div className="margin"></div>
          <TypingEffect variant="h5" text="Global Admissions & Visa Expertise You Can Trust" duration={0.01} />
          <br />
          <TypingEffect variant="p" textClassName="text-left" text="Navigating international education can be overwhelming—but not with GFEC. With over a decade of experience helping Sri Lankan students study abroad, our counselors provide personalized support tailored to your academic goals and budget. From selecting the right course to securing your visa, we&apos;re with you from start to finish." />
        </div>
      </section>
    </Container>
  );
}
