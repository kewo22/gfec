"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";

export default function NavLinks() {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  return (
    <div className="hidden w-full sm:flex items-center justify-center gap-10 my-10">
      {NavItems.map((item, i) => {
        return (
          <Link
            key={i}
            className={`transition-all ease-in-out py-2 px-5 border-b-4 ${
              rawPathName === item.route
                ? "border-b-secondary"
                : "border-b-transparent"
            } `}
            href={item.route}
          >
            <Typography
              variant="p"
              className="uppercase font-bold tracking-widest text-white"
            >
              {item.text}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
}
