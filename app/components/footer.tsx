"use client";

import React from "react";

import styles from "../page.module.css";
import { Button } from "flowbite-react";

import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];
  const addressLine1 = process.env.ADDRESS_LINE_1 as unknown as string;
  const addressLine2 = process.env.ADDRESS_LINE_2 as unknown as string;
  const addressLine3 = process.env.ADDRESS_LINE_3 as unknown as string;

  return (
    <footer className="">
      <div className="md:flex md:justify-between p-5 pb-0 border-t-2 border-primary">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            <BuildingOfficeIcon className="h-4 w-4 mr-2 text-secondary" />
            <span className="text-sm font-light border-l-2 border-l-secondary pl-2 text-secondary">
              {addressLine1}, <br /> {addressLine2}, <br /> {addressLine3}.
            </span>
          </div>

          <div className="flex items-center mb-5">
            <PhoneIcon
              className="h-4 w-4 mr-2 text-secondary"
              strokeWidth={2}
            />
            <div className="border-l-2 border-l-secondary pl-2">
              {phoneNos?.map((phoneNo, i) => {
                return (
                  <div key={i}>
                    <a
                      className="text-sm font-light text-secondary"
                      href={`tel:${phoneNo}`}
                    >
                      {phoneNo}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center mb-5">
            <AtSymbolIcon
              className="h-4 w-4 mr-2 text-secondary"
              strokeWidth={2}
            />
            <div className="border-l-2 border-l-secondary pl-2">
              {emails?.map((mail, i) => {
                return (
                  <div key={i}>
                    <a
                      className="text-sm font-light text-secondary"
                      href={`tel:${mail}`}
                    >
                      {mail}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <ClockIcon
              className="h-4 w-4 mr-2 text-secondary"
              strokeWidth={2}
            />
            <div className="border-l-2 border-l-secondary pl-2 grid grid-cols-[80px_auto] gap-1">
              <div className="text-sm font-light text-secondary">Monday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 5:00 PM
              </div>
              <div className="text-sm font-light text-secondary">Tuesday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 5:00 PM
              </div>
              <div className="text-sm font-light text-secondary">Wednesday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 5:00 PM
              </div>
              <div className="text-sm font-light text-secondary">Thursday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 5:00 PM
              </div>
              <div className="text-sm font-light text-secondary">Friday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 5:00 PM
              </div>
              <div className="text-sm font-light text-secondary">Saturday</div>
              <div className="text-sm font-light text-secondary">
                9:00 AM - 1:00 PM
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-5 my-4 sm:my-0 sm:justify-center">
            <Button size="xs" className="flex-grow p-2 bg-secondary">
              <span className="text-base text-white icon-facebook"></span>
              <span className="hidden sm:block text-xs ml-2 text-white">
                Follow Us On Facebook
              </span>
            </Button>
            <Button size="xs" className="flex-grow p-2 bg-secondary">
              <span className="text-base text-white icon-instagram"></span>
              <span className="hidden sm:block text-xs ml-2">
                Follow Us On Instagram
              </span>
            </Button>
            <Button size="xs" className="flex-grow p-2 bg-secondary">
              <span className="text-base text-white icon-linkedln"></span>
              <span className="hidden sm:block text-xs ml-2">
                Follow Us On LinkedIn
              </span>
            </Button>
          </div>
        </div>
      </div>
      <hr className="border-secondary sm:mx-auto" />
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
    </footer>
  );
}
