"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItems } from "../_constants/nav-items.constants";
import { Typography } from "@/app/_components/ui/typography";

interface NavLinksNewProps {
  className?: string;
}

export default function NavLinksNew({ className }: NavLinksNewProps) {
  const pathname = usePathname();

  const navItems = NavItems.map((item) => {
    const clonedItem = { ...item };
    if (clonedItem.route === '/' && pathname === '/') {
      return { ...clonedItem, isActive: true };
    } else if (pathname === clonedItem.route) {
      return { ...clonedItem, isActive: true };
    } else if (clonedItem.route !== '/' && pathname.includes(clonedItem.route)) {
      return { ...clonedItem, isActive: true };
    } else {
      return { ...clonedItem, isActive: false };
    }
  });


  return (
    <div className={`flex flex-row items-center gap-x-10 ${className}`}>
      {navItems.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.route}
          >
            <Typography
              variant="link"
              className={`hover:border-b-4 hover:border-b-primary transition-all ease-in-out pb-2 ${item.isActive && "!border-b-primary border-b-4"
                }`}
            >
              {item.text}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
}
