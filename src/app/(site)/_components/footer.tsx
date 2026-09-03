"use client";

import Link from "next/link";
import Image from "next/image";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

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

  const privacyBasePolicyUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const onVisitClick = () => {
    const url = `https://www.google.com/maps?q=${LAT},${LNG}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-navy-deep">
      <div className="stitch-rule" />
      <div className="max-w-[1600px] mx-auto px-5 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
          <div className="flex flex-col gap-4">
            <Image src={gfecTrans} alt="GFEC logo" width={100} height={90} className="brightness-0 invert opacity-90" />
            <p className="font-body text-paper/60 text-sm leading-relaxed max-w-xs">
              GFEC helps students from Sri Lanka pursue international education — from program
              selection to visa approval and departure.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-display font-semibold text-gold text-xs uppercase tracking-wide mb-1">Explore</p>
            {NavItems.map((item, i) => (
              <Link key={i} href={item.route} className="font-body text-paper/70 hover:text-paper text-sm transition-colors">
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-display font-semibold text-gold text-xs uppercase tracking-wide mb-1">Visit us at</p>
            <button
              type="button"
              onClick={onVisitClick}
              className="font-body text-paper/70 hover:text-paper text-sm text-left transition-colors cursor-pointer"
            >
              {addressLine1}, {addressLine2}, <br /> {addressLine3}.
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-display font-semibold text-gold text-xs uppercase tracking-wide mb-1">Contact us</p>
            {phoneNos?.map((phoneNo, i) => (
              <a key={i} href={`tel:${phoneNo}`} className="font-body text-paper/70 hover:text-paper text-sm transition-colors">
                {phoneNo}
              </a>
            ))}
            {emails?.map((mail, i) => (
              <a key={i} href={`mailto:${mail}`} className="font-body text-paper/70 hover:text-paper text-sm transition-colors break-all">
                {mail}
              </a>
            ))}
            <NavSocial
              iconClass="text-paper/70 hover:text-gold transition-colors"
              wrapperClass="flex flex-row gap-4 items-center pt-2"
            />
          </div>
        </div>

        <div className="border-t border-paper/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-paper/50 text-xs">
            © 2025{" "}
            <a href="https://www.gfeconsultancy.com/" className="hover:text-paper/80">
              GFEC™
            </a>
            . All rights reserved.
          </p>
          <a href={`${privacyBasePolicyUrl}/privacy-policy`} className="font-body text-paper/50 hover:text-paper/80 text-xs">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
