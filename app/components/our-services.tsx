import {
  AcademicCapIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Accordion from "./accordion";
import Image from "next/image";

export default function OurServices() {
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
        name: "/eng.png",
        alt: "eng",
        height: 55,
        width: 55,
      },
      title: "IELTS Classes / Spoken English Classes",
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
  ];

  return (
    <div className="mb-20 mx-7 lg:mx-20 xl:mx-36">
      <h1 className="mb-4 text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 lg:px-32 xl:px-60">
        How We Differentiate Form Others
      </h1>

      <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-center lg:px-0 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto
        quam magni laborum recusandae consequuntur atque, eaque molestiae
        possimus laudantium corporis eius quisquam sint aliquid sit nisi esse
        adipisci pariatur!
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {dataArr.map((data, i) => {
          return (
            <div
              key={i}
              className="text-base bg-gradient-to-b from-[#DCFBBD] to-[#F2D67F] text-accent rounded-lg drop-shadow-lg p-7 sm:flex sm:justify-center sm:flex-col"
            >
              <Image
                src={data.image.name}
                alt={data.image.alt}
                height={data.image.height}
                width={data.image.width}
                className="!relative mb-3"
              />
              <div className="font-bold mb-3">{data.title}</div>
              <div className="font-light leading-6">{data.description}</div>
            </div>
          );
        })}
      </div>
      {/* <div className="w-full flex flex-col xl:flex-row gap-5">
        <div className="w-full sm:flex gap-5 xl:flex-col">
          <div className="flex-[250%]">
            <Accordion />
          </div>
        </div>
      </div> */}
    </div>
  );
}
