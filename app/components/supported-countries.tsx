"use client";

import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";

import styles from "../page.module.css";
import Swipe from "react-easy-swipe";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> {
  title?: string;
  showIcon?: boolean;
}

export default function SupportedCountries(props: ButtonProps) {
  const [btnClass, setBtnClass] = useState("hidden");

  useEffect(() => {
    const is_touch_enabled = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };
    is_touch_enabled() ? setBtnClass("hidden") : setBtnClass("flex");
  }, []);

  const onNextClick = () => {
    const scrollToOptions: ScrollToOptions = {
      behavior: "smooth",
      left: 600,
      top: 0,
    };
    document.querySelector("#country-list")?.scrollBy(scrollToOptions);
  };

  const onPrevClick = () => {
    const scrollToOptions: ScrollToOptions = {
      behavior: "smooth",
      left: -600,
      top: 0,
    };
    document.querySelector("#country-list")?.scrollBy(scrollToOptions);
  };

  const countries = [
    {
      image: "/aus.jpg",
      country: "Australia",
      class: "mr-4",
    },
    {
      image: "/uk-2.jpg",
      country: "United Kingdom",
      class: "mr-4",
    },
    {
      image: "/toronto.jpg",
      country: "Canada",
      class: "mr-4",
    },
    {
      image: "/finland-2.jpg",
      country: "Finland",
      class: "mr-4",
    },
    {
      image: "/belarus.jpg",
      country: "Belarus",
      class: "mr-4",
    },
    {
      image: "/germany.jpg",
      country: "Germany",
      class: "mr-4",
    },
    {
      image: "/italy.jpg",
      country: "Italy",
      class: "mr-4",
    },
    {
      image: "/sweden.jpg",
      country: "Sweden",
      class: "mr-4",
    },
    {
      image: "/russia.jpg",
      country: "Russia",
      class: "mr-4",
    },
    {
      image: "/france.jpg",
      country: "France",
      class: "mr-4",
    },
    {
      image: "/netherlands.jpg",
      country: "Netherlands",
      class: "mr-4",
    },
    {
      image: "/latvia.jpg",
      country: "Latvia",
      class: "mr-4",
    },
    {
      image: "/switzerland.jpg",
      country: "Switzerland",
      class: "",
    },
  ];

  return (
    <section className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        Could your next home be?
      </h1>

      <div
        id="country-list"
        className={`${styles.hideScroll} flex overflow-x-auto px-4`}
      >
        {countries.map((country, index) => {
          return (
            <div
              key={country.country}
              className={`group mb-4 sm:mb-0 relative h-60 lg:h-72 w-full rounded-xl ${country.class}`}
              style={{ flex: "0 0 350px" }}
            >
              <Image
                src={country.image}
                alt="Next.js Logo"
                fill
                priority
                className="group-hover:opacity-40 transition ease-in-out duration-500 rounded-xl"
              />
              <h1 className="absolute text-2xl sm:text-2xl font-bold leading-none tracking-tight top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-gray-900 transition ease-in-out duration-500">
                {country.country}
              </h1>
            </div>
          );
        })}
      </div>

      <div
        className={`${btnClass} w-full flex items-center justify-center mt-5`}
      >
        <button
          className="rounded-l-lg bg-primary p-2 mr-1"
          onClick={onPrevClick}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <button
          className="rounded-r-lg bg-primary p-2 ml-1"
          onClick={onNextClick}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
