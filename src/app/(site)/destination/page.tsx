"use client";

import React, { useState } from "react";
import Container from "../_components/layouts/container";
import SectionTitle from "../_components/section-title";
import Image from "next/image";
import { Typography } from "@/app/_components/ui/typography";
import {
  COUNTRIES,
  PRE_SELECTED_COUNTRY,
} from "../_constants/countries.constants";
import { Country } from "../_types/country";
import { twMerge } from "tailwind-merge";
import Aus from "../_components/countries/aus";

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
          institutions, we&apos;ll help you navigate the diverse landscape of study
          options and find the perfect destination to shape your future success.
        </Typography>

        <div className="flex flex-row gap-5">
          <div className="flex-[0_0_280px] bg-slate-300 h-max sticky top-0">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
