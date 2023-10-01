"use client";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import {
  COUNTRIES,
  PRE_SELECTED_COUNTRY,
} from "../_constants/countries.constants";
import { Country } from "../_types/country";

import { Typography } from "@/app/_components/ui/typography";

import Container from "../_components/layouts/container";
import SectionTitle from "../_components/section-title";
import Aus from "../_components/countries/aus";
import Uk from "../_components/countries/uk";
import Can from "../_components/countries/can";
import Fin from "../_components/countries/fin";
import Bel from "../_components/countries/bel";
import Ger from "../_components/countries/ger";
import Ita from "../_components/countries/ita";
import Swe from "../_components/countries/swe";
import Rus from "../_components/countries/rus";
import Fra from "../_components/countries/fra";
import Ned from "../_components/countries/ned";
import Lat from "../_components/countries/lat";
import Swi from "../_components/countries/swi";

export default function Destination() {
  const [selectedCountry, setSelectedCountry] = useState(PRE_SELECTED_COUNTRY);

  const onCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  return (
    <section className="bg-slate-100">
      <Container className="relative mx-5 xl:mx-auto py-20">
        <SectionTitle title="Study Abroad Destinations" />

        <Typography className="mb-16">
          Embark on an enriching educational adventure with GFEC, your premier
          foreign education consultancy based in Sri Lanka. Explore a myriad of
          captivating study abroad destinations that open doors to endless
          opportunities. From vibrant cultural experiences to world-class
          institutions, we&apos;ll help you navigate the diverse landscape of
          study options and find the perfect destination to shape your future
          success.
        </Typography>

        <div className="flex flex-row gap-5">
          <div className="flex-[0_0_280px] bg-slate-300 max-h-[700px] overflow-x-hidden overflow-y-auto sticky top-0">
            <ul className="countries-details">
              {COUNTRIES.map((country, i) => {
                const mergedClassName = twMerge(
                  "bg-center bg-cover h-12 w-12 rounded-full my-auto mr-5",
                  country.flagBg
                );

                return (
                  <li
                    className={`flex flex-row justify-between bg-slate-200 h-24 cursor-pointer ${
                      selectedCountry.id === country.id && "active"
                    }`}
                    key={i}
                    onClick={() => {
                      onCountryClick(country);
                    }}
                  >
                    <Typography className="country-name relative grid place-items-center pl-5">
                      {country.country}
                    </Typography>
                    <div className={mergedClassName}></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-grow bg-white">
            {selectedCountry.id === "aus" && <Aus />}
            {selectedCountry.id === "uk" && <Uk />}
            {selectedCountry.id === "can" && <Can />}
            {selectedCountry.id === "fin" && <Fin />}
            {selectedCountry.id === "bal" && <Bel />}
            {selectedCountry.id === "ger" && <Ger />}
            {selectedCountry.id === "ita" && <Ita />}
            {selectedCountry.id === "swe" && <Swe />}
            {selectedCountry.id === "rus" && <Rus />}
            {selectedCountry.id === "fra" && <Fra />}
            {selectedCountry.id === "ned" && <Ned />}
            {selectedCountry.id === "lat" && <Lat />}
            {selectedCountry.id === "swi" && <Swi />}
          </div>
        </div>
      </Container>
    </section>
  );
}
