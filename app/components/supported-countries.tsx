"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import styles from "../page.module.css";
import Swipe from "react-easy-swipe";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { COUNTRIES } from "../constants/countries.constants";
import { Country } from "../types/constants/country";

interface ButtonProps extends React.AllHTMLAttributes<HTMLElement> {
  title?: string;
  showIcon?: boolean;
}

export default function SupportedCountries(props: ButtonProps) {
  const router = useRouter();

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

  const onCountryClick = (country: Country) => {
    router.push(`/destination?country=${country.id}`);
  };

  return (
    <section className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        Could your next home be?
      </h1>

      <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify sm:text-center lg:px-0 mb-5 mx-7 lg:mx-20 xl:mx-36">
        Discover your next home in the world of education with GFEC, your
        trusted foreign education consultancy based in Sri Lanka. Explore a
        multitude of countries and unlock endless possibilities for your
        academic journey. Our expert team will guide you in finding the perfect
        destination that aligns with your aspirations and paves the way for a
        bright future.
      </p>

      <div
        id="country-list"
        className={`${styles.hideScroll} flex overflow-x-auto px-4`}
      >
        {COUNTRIES.map((country) => {
          return (
            <div
              key={country.country}
              className={`group mb-4 sm:mb-0 relative h-60 lg:h-72 w-full rounded-xl ${country.class} hover:cursor-pointer`}
              style={{ flex: "0 0 350px" }}
              onClick={() => onCountryClick(country)}
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
