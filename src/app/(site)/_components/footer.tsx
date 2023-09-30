"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Typography } from "@/app/_components/ui/typography";
import { NavItems } from "../_constants/nav-items.constants";
import {
  faAt,
  faBuilding,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/app/_components/ui/button";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  const addressLine1 = process.env.ADDRESS_LINE_1 as unknown as string;
  const addressLine2 = process.env.ADDRESS_LINE_2 as unknown as string;
  const addressLine3 = process.env.ADDRESS_LINE_3 as unknown as string;

  return (
    <>
      <section className="bg-secondary p-10 lg:px-28 lg:py-20 flex flex-col gap-10 lg:gap-14">
        <div className="row-1 flex flex-wrap flex-row gap-14 items-start">
          <div>
            <Typography className="text-primary font-bold mb-3" variant="md">
              Explore
            </Typography>
            {NavItems.map((item, i) => {
              return (
                <Link key={i} className="" href={item.route}>
                  <Typography className="text-white" variant="md">
                    {item.text}
                  </Typography>
                </Link>
              );
            })}
          </div>

          <div className="">
            <Typography className="text-primary font-bold mb-3" variant="md">
              Contact
            </Typography>

            <div className="flex flex-row flex-wrap gap-8">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  color="white"
                  className="mr-3"
                />
                <Typography
                  className="border-l-2 border-l-primary pl-2 text-white"
                  variant="md"
                >
                  {addressLine1}, <br /> {addressLine2}, <br /> {addressLine3}.
                </Typography>
              </div>

              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="white"
                  className="mr-2"
                />
                <div className="border-l-2 border-l-primary pl-2">
                  {phoneNos?.map((phoneNo, i) => {
                    return (
                      <Typography key={i} className="text-white" variant="md">
                        <a className="" href={`tel:${phoneNo}`}>
                          {phoneNo}
                        </a>
                      </Typography>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center mb-5">
                <FontAwesomeIcon icon={faAt} color="white" className="mr-2" />
                <div className="border-l-2 border-l-primary pl-2">
                  {emails?.map((mail, i) => {
                    return (
                      <Typography key={i} className="text-white" variant="md">
                        <a className="" href={`tel:${mail}`}>
                          {mail}
                        </a>
                      </Typography>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <Typography className="text-primary font-bold mb-3" variant="md">
              Office Hours
            </Typography>

            <div className="flex flex-col">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  color="white"
                  className="mr-2"
                />

                <div className="border-l-2 border-l-primary pl-2 grid grid-cols-[80px_auto] gap-1">
                  <Typography className="text-white" variant="md">
                    Weekdays
                  </Typography>
                  <Typography className="text-white" variant="md">
                    9:00 AM - 5:00 PM
                  </Typography>

                  <Typography className="text-white" variant="md">
                    Saturday
                  </Typography>
                  <Typography className="text-white" variant="md">
                    9:00 AM - 1:00 PM
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-2 ">
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="xl"
                className="text-white"
              />
              <Typography className="text-white" variant="md">
                Follow Us On Facebook
              </Typography>
            </button>
            <button className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="text-white"
              />
              <Typography className="text-white" variant="md">
                Follow Us On Instagram
              </Typography>
            </button>
            <button className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="text-white"
              />
              <Typography className="text-white" variant="md">
                Follow Us On LinkedIn
              </Typography>
            </button>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between py-2 px-4 bg-primary">
        <span className="text-xs sm:text-center text-secondary">
          © 2023 &nbsp;
          <a href="https://flowbite.com/" className="hover:underline">
            GEFC™
          </a>
          . All Rights Reserved.
        </span>

        <span className="text-xs sm:text-center text-secondary">
          <a
            href={`${process.env.APP_BASE_URL}/privacy-policy`}
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </span>
      </div>
    </>
  );
}
