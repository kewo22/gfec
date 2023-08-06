"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
import { MobileNav } from "../types/props/mobile-nav";
import { FilterProps } from "../types/props/filter";
import {
  COUNTRIES,
  PRE_SELECTED_COUNTRY,
} from "../constants/countries.constants";
import { Country } from "../types/constants/country";

export default function Filter(props: FilterProps) {
  const wrapperElement = useRef(null);

  const { filterPosition, selectedCountry } = props;
  const { onCloseMenu, onCountryChange } = props;

  const mobileClass = `fixed top-0 h-screen w-full bg-primary p-10 transition-all duration-1000 ease-in-out overflow-x-hidden overflow-y-auto z-[1] ${filterPosition}`;
  const smClass = `sm:relative sm:w-auto sm:top-auto sm:right-auto sm:z-[0] sm:!h-full sm:drop-shadow-lg sm:rounded-md sm:ml-5`;

  const onCountrySelect = (e: Country) => {
    onCountryChange(e);
  };

  return (
    <div ref={wrapperElement} className={`${mobileClass} ${smClass}`}>
      <XMarkIcon
        className="absolute h-6 w-6 right-5 top-5 sm:hidden"
        onClick={onCloseMenu}
      />

      <h1 className="text-xl font-bold text-gray-900 mb-2">Destinations</h1>

      {COUNTRIES.map((country) => {
        return (
          <div
            key={country.country}
            className="flex items-center justify-between p-2 border-b-gray-900 border-b-[1px] hover:cursor-pointer"
            onClick={() => {
              onCountrySelect(country);
            }}
          >
            <span
              className={`text-sm lg:text-base hover:cursor-pointer ${
                country.id === selectedCountry?.id
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {country.country}
            </span>
            {country.id === selectedCountry?.id && (
              <ChevronRightIcon className="h-4 w-4 text-white" />
            )}
          </div>
        );
      })}
    </div>
  );
}
