"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";

import { XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";
import { MobileNav } from "../types/props/mobile-nav";
import { FilterProps } from "../types/props/filter.";
import { COUNTRIES } from "../constants/countries.constants";

export default function Filter(props: FilterProps) {
  const wrapperElement = useRef(null);

  const { filterPosition } = props;
  const { onCloseMenu, onCountrySelect } = props;

  useEffect(() => {
    const navHeight = document.querySelector("#main-nav")?.clientHeight!;
    const el = wrapperElement.current! as HTMLDivElement;
    el.style.height = `${window.innerHeight - navHeight}px`;
  }, []);

  const mobileClass = `absolute w-full bg-white p-10 transition-all duration-1000 ease-in-out overflow-x-hidden overflow-y-auto z-[1] ${filterPosition}`;
  const smClass = `sm:relative sm:w-auto sm:top-auto sm:right-auto sm:z-[0] sm:!h-full sm:drop-shadow-lg sm:rounded-md sm:ml-5`;

  return (
    <div ref={wrapperElement} className={`${mobileClass} ${smClass}`}>
      <XMarkIcon
        className="absolute h-6 w-6 right-5 top-5 sm:hidden"
        onClick={onCloseMenu}
      />

      <h1 className="text-base font-bold text-gray-900">Destinations</h1>

      {COUNTRIES.map((country) => {
        return (
          <div
            key={country.country}
            className="my-2"
            onClick={() => {
              onCountrySelect(country);
            }}
          >
            <span className="text-sm lg:text-base text-gray-900 hover:cursor-pointer">
              {country.country}
            </span>
          </div>
        );
      })}
    </div>
  );
}
