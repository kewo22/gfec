"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { MobileNav } from "./types/props/mobile-nav";
import { CountriesRoute, NavItems } from "./constants/nav-items.constants";
import Link from "next/link";

import styles from "./page.module.css";
import { Dropdown } from "flowbite-react";

export default function MobileNavigation(props: MobileNav) {
  const wrapperElement = useRef(null);

  const { mobileNavPositionClass } = props;
  const { onCloseMenu } = props;

  useEffect(() => {
    (
      wrapperElement.current! as HTMLDivElement
    ).style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div
      ref={wrapperElement}
      className={`bg-gradient-to-b from-gray-100 to-gray-200 z-50 fixed top-0 ${mobileNavPositionClass} w-screen transition-all duration-1000 ease-in-out p-8 ${styles.wrapper}`}
    >
      <XMarkIcon
        className="absolute h-6 w-6 right-5 top-5"
        onClick={onCloseMenu}
      />

      <div className="w-full flex items-center justify-center">
        <Image
          src="/GFEC-Trans.png"
          alt="Next.js Logo"
          width={180}
          height={70}
          priority
        />
      </div>

      <section className="text-lg font-medium">
        {NavItems.map((item, i) => {
          return (
            <div key={i} className="my-5">
              {item.type === "link" && (
                <Link
                  key={i}
                  className={`text-accent flex items-center justify-center first:m-0 font-bold ${item.class} hover:text-primary transition-all ease-in-out text-base lg:text-lg`}
                  href={item.route}
                  onClick={onCloseMenu}
                >
                  {item.text}
                </Link>
              )}
              {item.type === "popover" && (
                <Dropdown
                  key={i}
                  label={item.text}
                  inline={true}
                  arrowIcon={false}
                >
                  {CountriesRoute.map((country, i) => {
                    return (
                      <Dropdown.Item key={i}>
                        <Link href={country.route}>{country.country}</Link>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown>
              )}
            </div>
          );
        })}
      </section>

      <section className="">
        <div className="flex items-center justify-center">
          <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-base text-white icon-facebook"></span>
          </span>
          <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-base text-white icon-instagram"></span>
          </span>
          <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-base text-white icon-linkedln"></span>
          </span>
        </div>
      </section>
    </div>
  );
}
