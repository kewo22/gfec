"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";
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

import { Typography } from "@/app/_components/ui/typography";
import { NavItems } from "../_constants/nav-items.constants";
import { ResolveBaseUrl } from "@/app/utils/common";
import NavSocial from "./nav-social";

export default function Footer() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  const addressLine1 = process.env.ADDRESS_LINE_1 as unknown as string;
  const addressLine2 = process.env.ADDRESS_LINE_2 as unknown as string;
  const addressLine3 = process.env.ADDRESS_LINE_3 as unknown as string;

  const LAT = process.env.LAT as unknown as string;
  const LNG = process.env.LNG as unknown as string;

  const privacyBasePolicyUrl = ResolveBaseUrl(
    process.env.NEXT_PUBLIC_VERCEL_ENV!
  );

  // const onFbClick = () => {
  //   window.open(
  //     "https://www.facebook.com/profile.php?id=100089486356607",
  //     "_blank"
  //   );
  // };

  // const onInstagramClick = () => {
  //   window.open(
  //     "https://instagram.com/gfe_consultancy?igshid=MTk0NTkyODZkYg==",
  //     "_blank"
  //   );
  // };

  // const onInClick = () => {
  //   window.open(
  //     "https://www.linkedin.com/company/gordon-foreign-education-consultancy-pvt-ltd/",
  //     "_blank"
  //   );
  // };

  const onVisitClick = () => {
    const url = `https://www.google.com/maps?q=${LAT},${LNG}`;
    window.open(url, '_blank');
  }

  return (
    <>

      <footer className="flex flex-col items-center justify-center max-w-5xl mx-auto py-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src={gfecTrans}
            alt="GFEC-LOGO"
            width={100}
            height={90}
            priority
          />

          <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center gap-6 lg:gap-16">
            <div className="flex flex-col justify-center items-center sm:items-start">
              <Typography className="text-primary font-bold mb-2 tracking-wide" variant="h5">
                Explore
              </Typography>
              <div className="flex flex-col justify-center items-center sm:items-start">
                {NavItems.map((item, i) => {
                  return (
                    <Link key={i} className="hover:font-bold" href={item.route}>
                      <Typography className="text-secondary" variant="p">
                        {item.text}
                      </Typography>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <Typography className="text-primary font-bold mb-2 tracking-wide" variant="h5">
                Visit As At
              </Typography>
              <Typography
                className="text-secondary hover:underline cursor-pointer"
                variant="p"
                onClick={onVisitClick}
              >
                <span className="block sm:hidden">{addressLine1}, {addressLine2}, <br /> {addressLine3}.</span>
                <span className="hidden sm:block">{addressLine1}, <br /> {addressLine2}, <br /> {addressLine3}.</span>
              </Typography>
            </div>

            <div className="text-center sm:text-left">
              <Typography className="text-primary font-bold mb-2 tracking-wide" variant="h5">
                Call Us
              </Typography>
              <div className="flex flex-col justify-center items-center ">
                {phoneNos?.map((phoneNo, i) => {
                  return (
                    <Typography key={i} className="text-secondary hover:underline cursor-pointer" variant="p">
                      <a className="" href={`tel:${phoneNo}`}>
                        {phoneNo}
                      </a>
                    </Typography>
                  );
                })}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <Typography className="text-primary font-bold mb-2 tracking-wide" variant="h5">
                Email Us
              </Typography>
              <div className="flex flex-col justify-center items-center sm:items-start">
                {emails?.map((mail, i) => {
                  return (
                    <Typography key={i} className="text-secondary hover:underline cursor-pointer" variant="p">
                      <a className="" href={`tel:${mail}`}>
                        {mail}
                      </a>
                    </Typography>
                  );
                })}
              </div>
            </div>

            <div className="text-center flex flex-col items-center sm:items-start">
              <Typography className="text-primary font-bold mb-2 tracking-wide" variant="h5">
                Opening Hours
              </Typography>

              <Typography className="text-secondary" variant="p">
                Weekdays
              </Typography>
              <Typography className="text-secondary" variant="p">
                9:00 AM - 5:00 PM
              </Typography>
              <Typography className="text-secondary" variant="p">
                Saturday
              </Typography>
              <Typography className="text-secondary" variant="p">
                9:00 AM - 1:00 PM
              </Typography>
            </div>
          </div>
        </div>

        <hr className="border-secondary border w-full my-8" />

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-evenly">
          <NavSocial
            iconClass="text-secondary"
            wrapperClass="flex flex-row gap-8 items-center justify-center"
          />

          <div className="flex flex-row items-center justify-evenly gap-0 sm:gap-4">
            <span className="text-sm sm:text-base text-secondary">
              © 2025 &nbsp;
              <a href="https://www.gfeconsultancy.com/" className="underline hover:font-bold hover:decoration-primary">
                GEFC™
              </a>
              . All Rights Reserved.
            </span>
            <span className="text-sm sm:text-base text-center text-secondary">
              <a
                href={`${privacyBasePolicyUrl}/privacy-policy`}
                className="underline hover:font-bold hover:decoration-primary"
              >
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* <section className="bg-secondary flex flex-col lg:flex-row p-5 gap-5 md:justify-around">
        <div className="row-1 flex flex-col sm:flex-row gap-5 sm:gap-0 md:gap-5 lg:gap-10 sm:justify-around items-start">
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

            <div className="flex flex-col 2xl:flex-row gap-8 2xl:gap-16">
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

              <div className="flex items-center mb-5 2xl:mb-0">
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

        <div className="row-2">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
            <button
              className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black"
              onClick={onFbClick}
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="xl"
                className="text-white"
              />
              <Typography className="text-white" variant="md">
                Follow Us On Facebook
              </Typography>
            </button>
            <button
              className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black"
              onClick={onInstagramClick}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="text-white"
              />
              <Typography className="text-white" variant="md">
                Follow Us On Instagram
              </Typography>
            </button>
            <button
              className="flex flex-row items-center justify-center gap-2 p-3 rounded-lg bg-primary hover:bg-accent transition-all duration-500 ease-in-out w-64 shadow-sm shadow-black"
              onClick={onInClick}
            >
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
            href={`${privacyBasePolicyUrl}/privacy-policy`}
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </span>
      </div> */}


    </>
  );
}
