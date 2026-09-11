"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItems } from "../_constants/nav-items.constants";

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
    <div className={`flex flex-row items-center gap-x-8 ${className}`}>
      {navItems.map((item, i) => {
        return (
          <Link key={i} href={item.route} className="group relative py-2 flex items-baseline gap-1.5">
            <span className="slip-mono text-[10px] text-slip-mist">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-slip-display text-[14px] font-bold tracking-wide transition-colors ${item.isActive ? "text-exam-ink" : "text-exam-ink/60 group-hover:text-exam-ink"
                }`}
            >
              {item.text}
            </span>
            <span
              className={`absolute -bottom-0.5 left-0 h-[2px] bg-exam-navy transition-all duration-300 ease-out ${item.isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
