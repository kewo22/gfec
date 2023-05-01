"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Bars3Icon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";

import MobileNavigation from "./mobile-nav-bar";
import { NavItems } from "./constants/nav-items.constants";

export default function Navigation() {
  const router = useRouter();

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

  const onRequestCallbackClick = () => {
    const getInTouchEl = document.querySelector("#get-in-touch");
    getInTouchEl?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <nav
        id="main-nav"
        className="relative bg-white flex items-center sm:justify-between w-full border-b-2 px-5 lg:px-20 xl:px-36"
      >
        <div role="button" onClick={onLogoClick}>
          <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={170}
            height={120}
            priority
            className=""
          />
        </div>
        <div className="flex flex-col items-end">
          <section className="hidden sm:flex mb-3">
            <div className="flex items-center">
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

          <div className="hidden sm:flex flex-row">
            {NavItems.map((item, i) => {
              return (
                <Link
                  key={item.text}
                  className={`text-accent flex items-center justify-center first:m-0 font-bold ${item.class} hover:text-primary transition-all ease-in-out text-base lg:text-lg`}
                  href={item.route}
                  onClick={onCloseMenu}
                >
                  {item.text}
                </Link>
              );
            })}

            <div
              className="bg-primary ml-5 px-5 py-2 rounded-lg text-white flex items-center text-sm"
              role="button"
              onClick={onRequestCallbackClick}
            >
              <PhoneArrowDownLeftIcon className="h-4 w-4 text-white mr-3" />
              Request a callback
            </div>
          </div>
        </div>
        <PhoneArrowDownLeftIcon
          className="h-6 w-6 mr-5 ml-auto sm:hidden"
          role="button"
          onClick={onRequestCallbackClick}
        />
        <Bars3Icon onClick={onMenuClick} className="h-10 w-10 sm:hidden mr-5" />
      </nav>
      <MobileNavigation
        mobileNavPositionClass={mobileNavPositionClass}
        onCloseMenu={onCloseMenu}
      />
    </>
  );
}
