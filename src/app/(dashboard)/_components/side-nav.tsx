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
    <aside className="min-h-full overflow-hidden flex-[0_0_180px] bg-secondary rounded-lg shadow-lg flex flex-col">
      <div className="flex flex-col items-center justify-center py-14">
        <Typography variant="h4" className="text-white font-bold">
          GFEC
        </Typography>
        <Typography variant="xs" className="text-white">
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
                className={`text-white ${
                  navItem.isActive && "!text-primary font-bold"
                }`}
              />
              <Typography
                variant="small"
                className={`text-white flex-grow ${
                  navItem.isActive && "!text-primary font-bold"
                }`}
              >
                {navItem.text}
              </Typography>
              {navItem.isActive && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-primary"
                />
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col py-10">
        <button>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="text-white"
          />
        </button>
      </div>
    </aside>
  );
}
