"use client";

import React from "react";
import Image from "next/image";

import styles from "../page.module.css";
import { Button, Label, TextInput } from "flowbite-react";
import FaceBookIcon from "../icons/fb";
import InstagramIcon from "../icons/instagram";
import LinkedinIcon from "../icons/linkedIn";
import TwitterIcon from "../icons/twitter";
import YoutubeIcon from "../icons/youtube";
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            <BuildingOfficeIcon className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm font-light border-l-2 border-l-primary pl-1">
              50, Kassapa Road, Colombo 5, Sri Lanka
            </span>
          </div>
          <div className="flex items-center mb-5">
            <PhoneIcon className="h-4 w-4 mr-2 text-gray-500" strokeWidth={2} />
            <div className="border-l-2 border-l-primary pl-1">
              <a className="text-sm font-light" href="tel:0761561870">
                076 156 1870
              </a>
              <br />
              <a className="text-sm font-light" href="tel:0779024112">
                077 902 4112
              </a>
              <br />
              <a className="text-sm font-light" href="tel:076 858359">
                076 285 8359
              </a>
            </div>
          </div>

          <div className="flex items-center mb-5">
            <AtSymbolIcon
              className="h-4 w-4 mr-2 text-gray-500"
              strokeWidth={2}
            />
            {/* <img src="mail.svg" class="h-4 w-4 mr-2" /> */}
            <div className="border-l-2 border-l-primary pl-1">
              <a
                className="text-sm font-light"
                href="mailto:mgr@gfeconsultancy.com"
              >
                mgr@gfeconsultancy.com
              </a>
              <br />
              <a
                className="text-sm font-light"
                href="mailto:paviyan@gfeconsultancy.com"
              >
                paviyan@gfeconsultancy.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-2 text-gray-500" strokeWidth={2} />
            <div className="border-l-2 border-l-primary pl-1">
              <span className="text-sm font-light">
                Monday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light">
                Tuesday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light">
                Wednesday : 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light">
                Thursday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light">
                Friday: 9:00 AM - 5:00 PM
              </span>
              <br />
              <span className="text-sm font-light">
                Saturday: 9:00 AM - 1:00 PM
              </span>
              {/* <span className="text-sm font-light">
                Saturday : 9:00 AM - 1:00 PM
              </span> */}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:justify-center">
            <Button size="xs" className="w-60">
              <span className="text-sm text-white icon-facebook"></span>
              <span className="text-xs ml-2">Follow Us On Facebook</span>
            </Button>
            <Button size="xs" className="w-60">
              <span className="text-sm text-white icon-instagram"></span>
              <span className="text-xs ml-2">Follow Us On Instagram</span>
            </Button>
            <Button size="xs" className="w-60">
              <span className="text-sm text-white icon-linkedln"></span>
              <span className="text-xs ml-2">Follow Us On LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      <hr className="mt-6 mb-2 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
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
