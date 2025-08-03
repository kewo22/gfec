"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";

export default function NavLinksNew({ className }: any) {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  // const defaultNavLinkClassName =
  //   "transition-all ease-in-out py-2 px-5 bg-transparent hover:bg-secondary transition-all duration-300 ease-in-out text-xs";

  const navItems = NavItems.map((item) => {
    const clonedItem = { ...item };
    if (rawPathName === "" && item.route === "/") {
      clonedItem.isActive = true;
      return clonedItem;
    }
    return { ...item, isActive: rawPathName === item.route };
  });

  return (
    <div className={`flex flex-row items-center gap-x-10 ${className}`}>
      {navItems.map((item, i) => {
        return (
          <Link
            key={i}
            // className="text-base pb-2"
            // className={`${defaultNavLinkClassName} ${item.isActive && "!bg-secondary"
            //   }`}
            href={item.route}
          >
            <Typography
              variant="link"
              className={`hover:border-b-4 hover:border-b-primary transition-all ease-in-out pb-2 ${item.isActive && "!border-b-primary border-b-4"
                }`}
            // className={`uppercase tracking-widest text-white font-bold ${item.isActive && "!text-white"
            //   }`}
            >
              {item.text}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
}
