"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";

export default function NavLinks() {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  const defaultNavLinkClassName =
    "transition-all ease-in-out py-2 px-5 bg-transparent hover:bg-secondary transition-all duration-300 ease-in-out";

  const navItems = NavItems.map((item) => {
    const clonedItem = { ...item };
    if (rawPathName === "" && item.route === "/") {
      clonedItem.isActive = true;
      return clonedItem;
    }
    return { ...item, isActive: rawPathName === item.route };
  });

  return (
    <div className="hidden w-full sm:flex items-center justify-center gap-10 my-0 flex-[0_0_100px]">
      {navItems.map((item, i) => {
        return (
          <Link
            key={i}
            className={`${defaultNavLinkClassName} ${
              item.isActive && "!bg-secondary"
            }`}
            href={item.route}
          >
            <Typography
              variant="p"
              className="uppercase tracking-widest text-white font-bold"
            >
              {item.text}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
}
