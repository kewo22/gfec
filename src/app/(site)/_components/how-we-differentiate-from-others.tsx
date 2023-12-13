import React from "react";
import Image from "next/image";

import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";
import SectionTitle from "./section-title";

import books from "../../../../public/books.png";
import graduationHat from "../../../../public/graduation-hat.png";
import offer from "../../../../public/offer.png";
import finSupport from "../../../../public/fin-support.png";
import studentVisa from "../../../../public/student-visa.png";
import waitingRoom from "../../../../public/waiting-room.png";
import roomKey from "../../../../public/room-key.png";
import immigration from "../../../../public/immigration.png";
import discussion from "../../../../public/discussion.png";
import visa from "../../../../public/visa.png";
import eng from "../../../../public/eng.png";

export default function HowWeDifferentiateFromOthers() {
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
    {
      image: {
        name: studentVisa,
        alt: "student-visa",
        height: 70,
        width: 70,
      },
      title: "Assistance with visa processing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
    {
      image: {
        name: roomKey,
        alt: "room-key",
        height: 70,
        width: 70,
      },
      title: "Accommodation Selection Guidance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
    {
      image: {
        name: discussion,
        alt: "discussion",
        height: 50,
        width: 50,
      },
      title: "Free Counselling & Personalized Service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
    {
      image: {
        name: visa,
        alt: "visa",
        height: 50,
        width: 50,
      },
      title: "Total Process Until Visa Free of Charge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
    {
      image: {
        name: eng,
        alt: "eng",
        height: 55,
        width: 55,
      },
      title: "IELTS Classes / Spoken English Classes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident incidunt at magni sapiente tenetur doloribus dolorem nobis nisi. Repellendus?",
    },
  ];

  return (
    <Container className="mx-5 xl:mx-auto py-12">
      <SectionTitle title="How We Differentiate From Others?" />

      <Typography className="mb-10">
        At GFEC, we redefine the experience of foreign education consultancy in
        Sri Lanka. Our unwavering commitment to personalized guidance, extensive
        global network, and comprehensive support sets us apart from other
        consultancy agencies. Discover a refreshing approach that puts your
        aspirations first and helps you achieve your educational dreams with
        confidence.
      </Typography>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
        {dataArr.map((data, i) => {
          return (
            <div
              key={i}
              className="bg-secondary/10 shadow-lg rounded-lg border-b-4 border-secondary hover:bg-primary/10 hover:border-primary hover:shadow-xl flex flex-col items-center justify-center p-8 transition duration-500"
            >
              <Image
                src={data.image.name}
                alt={data.image.alt}
                height={data.image.height}
                width={data.image.width}
                className="!relative mb-3 text-center"
                priority
              />
              <Typography variant="p" className="text-secondary">
                {data.title}
              </Typography>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
