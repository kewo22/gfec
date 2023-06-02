import React from "react";

import {
  MagnifyingGlassIcon,
  MapPinIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function LinkCards() {
  const items = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8" />,
      heading: "Course Search",
      description:
        "Could your ideal course be in Australia, Canada, New Zealand, Ireland, the UK or the US?",
    },
    {
      icon: <MapPinIcon className="h-8 w-8" />,
      heading: "Come and see us",
      description:
        "Got questions? We can help. Book a free appointment with one of our expert teams.",
    },
    {
      icon: <InformationCircleIcon className="h-8 w-8" />,
      heading: "Why GFEC?",
      description:
        "As international education experts, we can turn your dreams into a plan.",
    },
  ];

  return (
    <div className="w-full sm:flex gap-6 px-6 my-20 lg:px-32 xl:px-60">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow text-center mb-4 sm:mb-0 p-6"
          >
            <div className="w-full flex justify-center mb-4">{item.icon}</div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
                {item.heading}
              </h5>
            </a>
            <p className="mb-3 text-sm font-normal text-gray-500">
              {item.description}
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a> */}
          </div>
        );
      })}
    </div>
  );
}
