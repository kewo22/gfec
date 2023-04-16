"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import Image from "next/image";

import {
  AtSymbolIcon,
  ChevronRightIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { MobileNav } from "./types/props/mobile-nav";
import { NavItems } from "./constants/nav-items.constants";
import Link from "next/link";

import FaceBookIcon from "./icons/fb";
import TwitterIcon from "./icons/twitter";
import LinkedinIcon from "./icons/linkedIn";
import YoutubeIcon from "./icons/youtube";
import InstagramIcon from "./icons/instagram";

import styles from "./page.module.css";

export default function MobileNavigation(props: MobileNav) {
  const wrapperElement = useRef(null);

  const { mobileNavPositionClass } = props;
  const { onCloseMenu } = props;

  useEffect(() => {
    (
      wrapperElement.current! as HTMLDivElement
    ).style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div
      ref={wrapperElement}
      className={`bg-gradient-to-b from-gray-100 to-gray-200 z-50 fixed top-0 ${mobileNavPositionClass} w-screen transition-all duration-1000 ease-in-out p-8 ${styles.wrapper}`}
    >
      <XMarkIcon
        className="absolute h-6 w-6 right-5 top-5"
        onClick={onCloseMenu}
      />

      <div className="w-full flex items-center justify-center">
        <Image
          src="/GFEC-Trans.png"
          alt="Next.js Logo"
          width={180}
          height={70}
          priority
        />
        {/* <XMarkIcon className="h-6 w-6" onClick={onCloseMenu} /> */}
      </div>

      <section className="text-lg font-medium">
        {NavItems.map((item) => {
          return (
            <Link
              key={item.text}
              className="text-accent w-full py-3 flex items-center justify-center"
              href={item.route}
              onClick={onCloseMenu}
            >
              {item.text}
              {/* <ChevronRightIcon className="h-4 w-4" /> */}
            </Link>
          );
        })}
      </section>

      <section className="">
        <div className="flex flex-row items-start justify-between mb-4">
          <div className="text-accent flex items-center text-sm font-medium">
            <PhoneIcon className="h-4 w-4 mr-2" strokeWidth={2} />
            <a href="tel:0771782888">0771782888</a>
          </div>
          <div className="text-accent flex items-center text-base font-medium">
            <AtSymbolIcon className="h-4 w-4 mr-2" strokeWidth={2} />
            <a href="mailto:email@gmail.com">email@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg text-accent icon-facebook mr-2"></span>
          <span className="text-lg text-accent icon-instagram mr-2"></span>
          <span className="text-lg text-accent icon-linkedln mr-2"></span>
          {/* <FaceBookIcon />
          <TwitterIcon />
          <LinkedinIcon />
          <YoutubeIcon />
          <InstagramIcon /> */}
        </div>
      </section>
    </div>
  );
}
