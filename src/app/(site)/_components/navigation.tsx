"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavContactRibbon from "./nav-contact-ribbon";
import { Typography } from "@/app/_components/ui/typography";
import { NavItems } from "../_constants/nav-items.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  //   const router = useRouter();
  const pathname = usePathname();
  const rawPathName = pathname.split("/")[1];
  console.log(
    "🚀 ~ file: navigation.tsx:17 ~ Navigation ~ rawPathName:",
    rawPathName
  );

  return (
    <nav className="h-nav-height flex flex-col items-center">
      <section className="w-full h-auto">
        <NavContactRibbon />
      </section>

      {/* bg-home-banner bg-center bg-cover -- absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
      {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-3/5 */}
      {/* bg-home-banner-1 */}
      <div className="relative bg-home-banner-crop bg-slate-300 bg-center bg-cover w-full flex-grow flex flex-col items-center banner-img">
        {/* <Image
          src="/home-banner-crop.jpg"
          alt="Next.js Logo"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full absolute"
        /> */}

        <div className="w-full h-full flex flex-col items-center justify-start sm:justify-around gap-[60px] sm:gap-0 z-10">
          <div className="flex flex-col items-center">
            <Image
              src="/GFEC-Trans.png"
              alt="Next.js Logo"
              width={300}
              height={250}
              priority
              className=""
            />
            <Typography variant="h1" className="text-secondary text-center">
              Gordon Foreign Educational Consultancy
            </Typography>
          </div>

          <div className="hidden w-full sm:flex items-center justify-center gap-10">
            {NavItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  className="nav-link pulse"
                  // className={`${
                  //   item.class
                  // } transition-all ease-in-out border-b-2 ${
                  //   rawPathName === item.route
                  //     ? "border-primary"
                  //     : "border-transparent"
                  // } `}
                  href={item.route}
                  // onClick={onCloseMenu}
                >
                  <Typography
                    variant="h5"
                    className="font-normal p-5 px-10 min-w-fit"
                  >
                    {item.text}
                  </Typography>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <button className="w-fit lg:w-[400px] py-5 lg:py-14 px-5 lg:px-0 rounded-3xl coolBeans flex flex-row lg:flex-col items-center gap-5 lg:gap-0 lg:justify-around">
              <FontAwesomeIcon
                icon={faPen}
                size="3x"
                className="hidden lg:block mb-5"
              />
              <FontAwesomeIcon
                icon={faPen}
                size="1x"
                className="block lg:hidden"
              />
              <Typography variant="h3" className="font-normal hidden lg:block">
                Apply Now
              </Typography>
              <Typography variant="h5" className="font-normal block lg:hidden">
                Apply Now
              </Typography>
            </button>

            <button className="w-fit lg:w-[400px] py-5 lg:py-14 px-5 lg:px-0 rounded-3xl coolBeans flex flex-row lg:flex-col items-center gap-5 lg:gap-0 lg:justify-around">
              <FontAwesomeIcon
                icon={faPhone}
                size="3x"
                className="hidden lg:block mb-5"
              />
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="block lg:hidden"
              />
              <Typography variant="h3" className="font-normal hidden lg:block">
                Free Consultation
              </Typography>
              <Typography variant="h5" className="font-normal block lg:hidden">
                Free Consultation
              </Typography>
            </button>
          </div>

          <div className="flex flex-row gap-5 items-center">
            <button>
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="block sm:hidden text-secondary mb-5"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                className="hidden sm:block text-secondary mb-5"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="block sm:hidden text-secondary mb-5"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                className="hidden sm:block text-secondary mb-5"
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="block sm:hidden text-secondary mb-5"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                className="hidden sm:block text-secondary mb-5"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-row fixed items-center justify-around bottom-0 left-0 w-full h-14 bg-secondary z-50">
        {NavItems.map((item, i) => {
          return (
            <Link
              key={i}
              className="flex-grow"
              // className={`${
              //   item.class
              // } transition-all ease-in-out border-b-2 ${
              //   rawPathName === item.route
              //     ? "border-primary"
              //     : "border-transparent"
              // } `}
              href={item.route}
              // onClick={onCloseMenu}
            >
              <Typography
                variant="p"
                className="font-normal text-center text-white"
              >
                {item.text}
              </Typography>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
