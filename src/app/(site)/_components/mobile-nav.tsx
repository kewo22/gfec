"use client";
import React, { useEffect, useRef } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";
import NavSocial from "./nav-social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNav({ isMainNavInView }: any) {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  const menuIconRef = useRef<HTMLUListElement | null>(null);
  // const bottomMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      document.querySelector("body")?.classList.remove("overflow-hidden");
      document.getElementById("menu")!.classList.remove("active");
      document.getElementById("sss")!.classList.add("-right-[850px]");
      document.getElementById("sss")!.classList.remove("right-0");
    }, 100);
  }, [pathname]);

  const menuOnClick = () => {
    document.querySelector("body")?.classList.toggle("overflow-hidden");
    document.getElementById("menu")!.classList.toggle("active");
    document.getElementById("sss")!.classList.toggle("-right-[850px]");
    document.getElementById("sss")!.classList.toggle("right-0");
  };

  if (
    menuIconRef &&
    menuIconRef.current &&
    // bottomMenuRef &&
    // bottomMenuRef.current &&
    isMobile
  ) {
    if (isMainNavInView) {
      // show menu bar
      menuIconRef.current.classList.remove("!-right-[15%]");
      menuIconRef.current.classList.add("!right-[5%]");
      menuIconRef.current.classList.add("!top-[5%]");
      
      // hide bottom menu
      // bottomMenuRef.current.classList.add("-bottom-[80px]");
      // bottomMenuRef.current.classList.remove("bottom-0");
      // document.querySelector("body")!.classList.remove("pb-[80px]");
    } else {
      // hide menu bar
      menuIconRef.current.classList.remove("!right-[5%]");
      menuIconRef.current.classList.remove("!top-[5%]");
      menuIconRef.current.classList.add("!-right-[15%]");

      // show bottom menu
      // bottomMenuRef.current.classList.remove("-bottom-[80px]");
      // bottomMenuRef.current.classList.add("bottom-0");
      // document.querySelector("body")!.classList.add("pb-[80px]");
    }
  }

  // const navItems = NavItems.map((item) => {
  //   const clonedItem = { ...item };
  //   if (rawPathName === "" && item.route === "/") {
  //     clonedItem.isActive = true;
  //     return clonedItem;
  //   }
  //   return { ...item, isActive: rawPathName === item.route };
  // });

  return (
    <>
      <ul
        id="menu"
        onClick={menuOnClick}
        className="block lg:hidden z-[41] menu transition-all ease-in-out duration-500"
        ref={menuIconRef}
      >
        <li className="bar"></li>
        <li className="bar"></li>
        <li className="bar"></li>
      </ul>

      <section
        id="sss"
        // mobile-nav-height
        className="lg:hidden z-40 fixed top-0 -right-[850px] h-screen w-full bg-slate-100 transition-all ease-in-out duration-1000"
      >
        <div className="h-full flex flex-col items-center justify-around">
          <Image
            src="/GFEC-Trans.png"
            alt="GFEC-Trans-mobile"
            width={150}
            height={100}
            priority
            className="mx-auto"
          />
          <div className="flex items-center justify-center flex-col gap-5">
            {NavItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className={`transition-all ease-in-out border-b-4 ${rawPathName === item.route
                      ? "border-b-secondary"
                      : "border-b-transparent"
                    } `}
                  href={item.route}
                >
                  <Typography
                    variant="p"
                    className="uppercase font-bold tracking-widest text-secondary"
                  >
                    {item.text}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <NavSocial
            iconClass="text-secondary"
            wrapperClass="flex flex-row gap-8 items-center justify-center"
          />
        </div>
      </section>

      {/* <div
        className="sm:hidden h-20 w-full fixed -bottom-[80px] left-0 z-50 bg-secondary transition-all ease-in-out duration-500 flex items-center justify-evenly"
        ref={bottomMenuRef}
      >
        {navItems.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.route}
              className="flex flex-col items-center justify-center gap-1"
            >
              <FontAwesomeIcon
                size="sm"
                className={`text-white ${item.isActive && "!text-primary"}`}
                icon={item.icon}
              />
              <Typography
                variant="small"
                className={`text-white ${item.isActive && "!text-primary"}`}
              >
                {item.text}
              </Typography>
            </Link>
          );
        })}
      </div> */}
    </>
  );
}
