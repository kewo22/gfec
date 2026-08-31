"use client";

import Link from "next/link";
import Image from "next/image";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

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

  const onVisitClick = () => {
    const url = `https://www.google.com/maps?q=${LAT},${LNG}`;
    window.open(url, '_blank');
  }

  return (
    <footer className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center max-w-7xl py-16 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <Image
            src={gfecTrans}
            alt="GFEC-LOGO"
            width={100}
            height={90}
            priority
            className="block lg:hidden mx-auto"
          />
          <Image
            src={gfecTrans}
            alt="GFEC-LOGO"
            width={140}
            height={120}
            priority
            className="hidden lg:block mx-auto"
          />
        </div>

        <div className="flex flex-col text-sm text-secondary text-center md:text-left">
          <span className="">
            © 2025 &nbsp;
            <a href="https://www.gfeconsultancy.com/" className="underline hover:font-bold hover:decoration-primary">
              GEFC™
            </a>
            . All Rights Reserved.
          </span>
          <span className="">
            <a
              href={`${privacyBasePolicyUrl}/privacy-policy`}
              className="underline hover:font-bold hover:decoration-primary"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16">
        <div className="flex flex-col justify-center items-center sm:items-start gap-2">
          <Typography className="text-primary font-bold tracking-wide" variant="h5">
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

        <div className="text-center sm:text-left flex flex-col gap-2">
          <Typography className="text-primary font-bold tracking-wide" variant="h5">
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

        <div className="text-center sm:text-left flex flex-col gap-2">
          <Typography className="text-primary font-bold tracking-wide" variant="h5">
            Contact Us
          </Typography>
          <div className="flex flex-col justify-center items-center md:items-start">
            {phoneNos?.map((phoneNo, i) => {
              return (
                <Typography key={i} className="text-secondary hover:underline cursor-pointer" variant="p">
                  <a className="" href={`tel:${phoneNo}`}>
                    {phoneNo}
                  </a>
                </Typography>
              );
            })}
            {emails?.map((mail, i) => {
              return (
                <Typography key={i} className="text-secondary hover:underline cursor-pointer" variant="p">
                  <a className="" href={`mailto:${mail}`}>
                    {mail}
                  </a>
                </Typography>
              );
            })}
          </div>
        </div>

        <div className="text-center sm:text-left flex flex-col gap-2">
          <Typography className="text-primary font-bold tracking-wide" variant="h5">
            Follow Us On
          </Typography>
          <NavSocial
            iconClass="text-secondary"
            wrapperClass="flex flex-row md:flex-col xl:flex-row gap-4 lg:gap-6 items-center md:items-start justify-center xl:justify-start"
          />
        </div>
      </div>
    </footer>
  );
}
