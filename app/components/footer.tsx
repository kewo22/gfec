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

export default function Footer2() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  return (
    <footer className="bg-primary">
      <div className="md:flex md:justify-between p-5 pb-0">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            <BuildingOfficeIcon className="h-4 w-4 mr-2 text-white" />
            <span className="text-sm font-light border-l-2 border-l-secondary pl-1 text-white">
              50, Kassapa Road, <br /> Colombo 5,
              <br /> Sri Lanka.
            </span>
          </div>
          <div className="flex items-center mb-5">
            <PhoneIcon className="h-4 w-4 mr-2 text-white" strokeWidth={2} />
            <div className="border-l-2 border-l-secondary pl-1">
              {phoneNos?.map((phoneNo, i) => {
                return (
                  <>
                    <a
                      className="text-sm font-light text-white"
                      href={`tel:${phoneNo}`}
                      key={i}
                    >
                      {phoneNo}
                    </a>
                    {i !== phoneNos.length - 1 && <br />}
                  </>
                );
              })}
            </div>
          </div>

          <div className="flex items-center mb-5">
            <AtSymbolIcon className="h-4 w-4 mr-2 text-white" strokeWidth={2} />
            {/* <img src="mail.svg" class="h-4 w-4 mr-2" /> */}
            <div className="border-l-2 border-l-secondary pl-1">
              {emails?.map((mail, i) => {
                return (
                  <>
                    <a
                      className="text-sm font-light text-white"
                      href={`tel:${mail}`}
                      key={i}
                    >
                      {mail}
                    </a>
                    {i !== phoneNos.length - 1 && <br />}
                  </>
                );
              })}
              {/* <a
                className="text-sm font-light text-white"
                href="mailto:mgr@gfeconsultancy.com"
              >
                mgr@gfeconsultancy.com
              </a>
              <br />
              <a
                className="text-sm font-light text-white"
                href="mailto:paviyan@gfeconsultancy.com"
              >
                paviyan@gfeconsultancy.com
              </a> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 text-white" strokeWidth={2} />
            <div className="border-l-2 border-l-secondary pl-1">
              <span className="text-sm font-light text-white">
                Monday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light text-white">
                Tuesday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light text-white">
                Wednesday : 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light text-white">
                Thursday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light text-white">
                Friday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light text-white">
                Saturday: 9:00 AM - 1:00 PM
              </span>
              {/* <span className="text-sm font-light text-white">
                Saturday : 9:00 AM - 1:00 PM
              </span> */}
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
      <div className="sm:flex sm:items-center sm:justify-between py-2 px-4">
        <span className="text-xs sm:text-center text-white">
          © 2023 &nbsp;
          <a href="https://flowbite.com/" className="hover:underline">
            GEFC™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
