"use client";

import {
  AcademicCapIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Carousel } from "flowbite-react";

import React from "react";

export default function Testimonial() {
  const data = [
    {
      testimonial:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex  dashboard. Perfect choice for your next SaaS application .",
      by: "Micheal Gough",
      info: "CEO at Google",
    },
    {
      testimonial:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex  dashboard. Perfect choice for your next SaaS application.",
      by: "Micheal Gough",
      info: "CEO at Google",
    },
    {
      testimonial:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex  dashboard. Perfect choice for your next SaaS application.",
      by: "Micheal Gough",
      info: "CEO at Google",
    },
  ];

  return (
    <div className="mb-20 mx-7 lg:mx-20 xl:mx-36 min-h-min h-96">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900">
        Testimonials
      </h1>

      <Carousel
        slideInterval={2000}
        slide={true}
        className="rounded-3xl h-full"
        indicators={false}
        // leftControl={<></>}
        // rightControl={<></>}
      >
        {data.map((obj, i) => {
          return (
            <section key={i} className="bg-white dark:bg-gray-900">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <span className="text-6xl icon-format-quote text-primary"></span>
                  <blockquote>
                    <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-center">
                      &quot;{obj.testimonial}&quot;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">
                        {obj.by}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                        {obj.info}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          );
        })}
      </Carousel>
    </div>
  );
}
