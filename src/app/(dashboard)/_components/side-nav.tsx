"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  faArrowRightFromBracket,
  faChartSimple,
  faChevronRight,
  faFilePen,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Typography } from "@/app/_components/ui/typography";
import { NavItems } from "../_constants/nav-items.constants";

export default function SideNav() {
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];

  const navItems = NavItems.map((item) => {
    const clonedItem = { ...item };
    if (rawPathName === "" && item.route === "/") {
      clonedItem.isActive = true;
      return clonedItem;
    }
    return { ...item, isActive: rawPathName === item.route };
  });

  return (
    <aside className="min-h-full overflow-hidden flex-[0_0_180px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="flex flex-col items-center justify-center py-14">
        <Typography variant="h4" className="text-secondary font-bold">
          GFEC
        </Typography>
        <Typography variant="xs" className="">
          DASHBOARD
        </Typography>
      </div>
      <div className="flex flex-col flex-grow">
        {navItems.map((navItem, i) => {
          return (
            <Link
              key={i}
              className={`w-full flex flex-row items-center gap-2 px-4 py-4 }`}
              href={navItem.route}
            >
              <FontAwesomeIcon
                icon={navItem.icon}
                className={`text-slate-800 ${
                  navItem.isActive && "!text-secondary font-bold"
                }`}
              />
              <Typography
                variant="small"
                className={`text-slate-800 flex-grow ${
                  navItem.isActive && "!text-secondary font-bold"
                }`}
              >
                {navItem.text}
              </Typography>
              {navItem.isActive && <FontAwesomeIcon icon={faChevronRight} className="text-secondary"/>}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col py-10">
        <button>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </div>
    </aside>
  );
}
