"use client";

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import Filter from "../components/filter";
import { COUNTRIES } from "../constants/countries.constants";
import Image from "next/image";
import styles from "../page.module.css";
import Aus from "./country-info/aus";
import { Country } from "../types/constants/country";
import NoData from "./country-info/no-detail";
import Uk from "./country-info/uk";

export default function Destination() {
  const [filterPosition, setFilterPosition] = useState("right-full");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [sectionClass, setSectionClass] = useState("my-14");

  const onMenuClick = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "hidden";
    setSectionClass("my-0");
    setTimeout(() => {
      setFilterPosition("right-0");
    }, 500);
  };

  const onCloseMenu = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "auto";
    setFilterPosition("right-full");
    setTimeout(() => {
      setSectionClass("my-14");
    }, 600);
  };

  const onCountrySelect = (e: Country) => {
    setSelectedCountry(e);
    onCloseMenu();
  };

  return (
    <section
      className={`relative flex flex-col sm:grid sm:grid-rows-[auto_auto] sm:grid-cols-[250px_1fr] xl:grid-cols-[350px_1fr] transition-all sm:transition-none duration-1000 ease-in-out sm:mt-10 sm:mb-20 ${sectionClass}`}
    >
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 my-5 sm:my-10 sm:col-start-1 sm:col-end-3">
        Study Abroad Destinations
      </h1>

      <Filter
        filterPosition={filterPosition}
        onCloseMenu={onCloseMenu}
        onCountrySelect={onCountrySelect}
      />

      <div className="mb-10 text-center block sm:hidden" onClick={onMenuClick}>
        <span className="underline text-primary">
          Select desired destination
        </span>
      </div>

      {!selectedCountry && (
        <div
          className={`${styles.imageContainer} w-full flex justify-center items-center`}
        >
          <Card className="mx-7 flex items-center justify-center h-full w-full">
            <Image
              src="/search-no-results.svg"
              alt="search-no-results"
              fill
              priority
              className={`!relative !w-3/6 mx-auto my-10 sm:my-0`}
            />
          </Card>
        </div>
      )}

      {selectedCountry && (
        <div>
          <Card className="mx-7">
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              {selectedCountry.country}
            </h5>
            {!selectedCountry.isCourseDetailAvailable && <NoData />}
            {selectedCountry.id === "aus" &&
              selectedCountry.isCourseDetailAvailable && <Aus />}
            {selectedCountry.id === "uk" &&
              selectedCountry.isCourseDetailAvailable && <Uk />}
          </Card>
        </div>
      )}
    </section>
  );
}
