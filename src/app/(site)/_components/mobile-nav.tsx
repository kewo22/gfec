"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";
import NavSocial from "./nav-social";

export default function MobileNav() {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  const menuOnClick = () => {
    document.querySelector("body")?.classList.toggle("overflow-hidden");
    document.getElementById("menu")!.classList.toggle("active");
    document.getElementById("sss")!.classList.toggle("-right-[500px]");
    document.getElementById("sss")!.classList.toggle("right-0");
  };

  return (
    <>
      <ul id="menu" onClick={menuOnClick} className="z-50">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <section
        id="sss"
        className="sm:hidden z-40 fixed top-0 -right-[500px] h-screen w-full bg-slate-100 transition-all ease-in-out duration-1000"
      >
        <div className="h-full flex flex-col items-center justify-start gap-5">
          <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={250}
            height={200}
            priority
            className="mx-auto mt-24"
          />
          <div className="flex items-center justify-center flex-col gap-5">
            {NavItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className={`transition-all ease-in-out border-b-4 ${
                    rawPathName === item.route
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
            wrapperClass="flex flex-row gap-8 items-center justify-center mt-auto"
          />
        </div>
      </section>
    </>
  );
}
