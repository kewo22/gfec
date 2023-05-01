"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/outline";

import MobileNavigation from "./mobile-nav-bar";
import { NavItems } from "./constants/nav-items.constants";

export default function Navigation() {
  const [mobileNavPositionClass, setMobileNavPositionClass] =
    useState("left-full");

  const onMenuClick = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "hidden";
    setMobileNavPositionClass("left-0");
  };

  const onCloseMenu = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "auto";
    setMobileNavPositionClass("left-full");
  };

  return (
    <>
      <nav
        id="main-nav"
        className="relative bg-transparent flex items-center sm:justify-between w-full mb-5 sm:mb-16 border-b-2"
      >
        <Image
          src="/GFEC-Trans.png"
          alt="Next.js Logo"
          width={170}
          height={120}
          priority
          className="sm:ml-6 lg:ml-20 xl:ml-36"
        />

        <div className="hidden sm:flex flex-row flex-1 ml-5">
          {NavItems.map((item, i) => {
            return (
              <Link
                key={item.text}
                className={`text-accent flex items-center justify-center pr-5 ml-5 first:m-0 font-bold ${item.class} hover:text-primary transition-all ease-in-out text-base`}
                href={item.route}
                onClick={onCloseMenu}
              >
                {item.text}
              </Link>
            );
          })}
        </div>

        <section className="hidden sm:flex flex-col sm:mr-6 lg:mr-20 xl:mr-36">
          <div className="flex items-center">
            <span className="text-lg lg:text-xl text-accent icon-facebook mr-2"></span>
            <span className="text-lg lg:text-xl text-accent icon-instagram mr-2"></span>
            <span className="text-lg lg:text-xl text-accent icon-linkedln mr-2"></span>
          </div>
        </section>

        <Bars3Icon
          onClick={onMenuClick}
          className="h-6 w-6 sm:hidden ml-auto mr-5"
        />
      </nav>
      <MobileNavigation
        mobileNavPositionClass={mobileNavPositionClass}
        onCloseMenu={onCloseMenu}
      />
    </>
  );
}