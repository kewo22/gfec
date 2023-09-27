import React from "react";
import Image from "next/image";

import Container from "./layouts/container";
import { Typography } from "../../_components/ui/typography";

export default function HowWeDifferentiateFromOthers() {
  const dataArr = [
    {
      image: {
        name: "/books.png",
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
        name: "/graduation-hat.png",
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
        name: "/offer.png",
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
        name: "/fin-support.png",
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
        name: "/student-visa.png",
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
        name: "/waiting-room.png",
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
        name: "/room-key.png",
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
        name: "/immigration.png",
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
        name: "/discussion.png",
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
        name: "/visa.png",
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
        name: "/eng.png",
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
      <Typography variant="h2" className="text-secondary mb-10">
        How We <span className="text-primary">Differentiate</span> From Others?
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
