"use client";

import React, { useState } from "react";
import Container from "../_components/layouts/container";
import SectionTitle from "../_components/section-title";
import Image from "next/image";
import { Typography } from "@/app/_components/ui/typography";
import { COUNTRIES } from "../_constants/countries.constants";
import { Country } from "../_types/country";
import { twMerge } from "tailwind-merge";

export default function Destination() {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const onCountryClick = (country: Country, i: number) => {
    setSelectedCountryIndex(i);
  };

  return (
    <section className="bg-slate-100">
      <Container className="relative mx-5 xl:mx-auto py-20">
        <SectionTitle title="Ready to Travel the World ?" />
        <div className="flex flex-row">
          <div className="flex-[0_0_280px] bg-slate-300">
            <ul className="countries-details">
              {COUNTRIES.map((country, i) => {
                const mergedClassName = twMerge(
                  "bg-center bg-cover h-12 w-12 rounded-full my-auto mr-5",
                  country.flagBg
                );

                return (
                  <li
                    className={`flex flex-row justify-between bg-slate-200 h-24 cursor-pointer ${
                      selectedCountryIndex === i && "active"
                    }`}
                    key={i}
                    onClick={() => {
                      onCountryClick(country, i);
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
          <div className="flex-grow">wqdwq</div>
        </div>
      </Container>
    </section>
  );
}
