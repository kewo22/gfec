import {
  AcademicCapIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Accordion from "./accordion";

export default function OurServices() {
  return (
    <div className="mb-20 mx-7 lg:mx-20 xl:mx-36">
      <h1 className="mb-4 text-xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 lg:px-32 xl:px-60">
        Our Services
      </h1>
      <div className="w-full flex flex-col xl:flex-row gap-5">
        {/* xl:w-1/2  */}
        <div className="w-full sm:flex gap-5 xl:flex-col">
          {/* <p className="mb-4 sm:mb-0 font-light text-base leading-8 tracking-tight text-gray-900 text-justify">
            Our aim is to promote Australia as a destination for international
            students. We will also offer support to international students
            already in Australia, who wish to pursue higher education, and or
            change career paths by choosing a different course of study.
          </p> */}

          <div className="flex-[250%]">
            <Accordion />
          </div>
        </div>
        {/* <div className="w-full xl:w-1/2">
          <h1 className="mb-4 text-xl text-center lg:text-left font-bold leading-normal tracking-tight text-gray-900">
            Provider of world-class education counselling
          </h1>
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify">
            We take a step further and in addition to simply placing students at
            institution, we help them during their time at the institution if
            they need us.
          </p>
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify flex items-center">
            <GlobeAltIcon className="h-6 w-6 text-primary mr-4" />
            <span>
              <b className="font-bold">International focus</b> – our students
              come from across the globe
            </span>
          </p>
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify flex items-center">
            <AcademicCapIcon className="h-6 w-6 text-primary mr-4" />
            <span>
              <b className="font-bold">Residential courses</b> – we encourage
              learning and growth
            </span>
          </p>
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify flex items-center">
            <FaceSmileIcon className="h-6 w-6 text-primary mr-4" />
            <span>
              <b className="font-bold">People not profits</b> – we education is
              a right not a privilege
            </span>
          </p>
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify">
            If you prefer to study in your own time and at your own speed then
            one of our e-learning packages may be right up your street.
          </p>
        </div> */}
      </div>
    </div>
  );
}
