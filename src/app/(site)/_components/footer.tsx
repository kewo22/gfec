"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

import { NavItems } from "../_constants/nav-items.constants";
import { GFEC_GOOGLE_MAPS_URL } from "../_constants/google-maps.constants";
import { ResolveBaseUrl } from "@/app/utils/common";
import NavSocial from "./nav-social";

const REVEAL_STAGGER_MS = 60;

export default function Footer() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  const addressLine1 = process.env.ADDRESS_LINE_1 as unknown as string;
  const addressLine2 = process.env.ADDRESS_LINE_2 as unknown as string;
  const addressLine3 = process.env.ADDRESS_LINE_3 as unknown as string;

  const privacyBasePolicyUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="bg-exam-ink relative">
      <div className="slip-rule-thin" />
      <div ref={ref} className="max-w-[1600px] mx-auto px-5 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div
            style={{ transitionDelay: "0ms" }}
            className={`reveal-card ${inView ? "reveal-card-in" : ""} transition-all duration-500 flex flex-col gap-4`}
          >
            <Image src={gfecTrans} alt="GFEC logo" width={100} height={90} className="brightness-0 invert opacity-90" />
            <p className="slip-mono text-exam-gold text-[10px] uppercase tracking-[0.2em]">
              GFEC · Colombo · Est. 2021
            </p>
            <p className="font-body text-gazette/60 text-sm leading-relaxed max-w-xs">
              GFEC helps students from Sri Lanka pursue international education — from program
              selection to visa approval and departure.
            </p>
          </div>

          <div
            style={{ transitionDelay: `${REVEAL_STAGGER_MS}ms` }}
            className={`reveal-card ${inView ? "reveal-card-in" : ""} transition-all duration-500 flex flex-col gap-3`}
          >
            <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-1">Explore</p>
            {NavItems.map((item, i) => (
              <Link
                key={i}
                href={item.route}
                className="group flex items-center gap-2.5 font-body text-gazette/70 hover:text-gazette text-sm transition-colors"
              >
                <span className="slip-mono text-[10px] text-gazette/30 group-hover:text-exam-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.text}
              </Link>
            ))}
          </div>

          <div
            style={{ transitionDelay: `${REVEAL_STAGGER_MS * 2}ms` }}
            className={`reveal-card ${inView ? "reveal-card-in" : ""} transition-all duration-500 flex flex-col gap-3`}
          >
            <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-1">Visit us at</p>
            <a
              href={GFEC_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 font-body text-gazette/70 hover:text-gazette text-sm transition-colors"
            >
              <MapPin size={14} className="shrink-0 mt-0.5 text-exam-gold" />
              <span>
                {addressLine1}, {addressLine2}, <br /> {addressLine3}.
              </span>
            </a>
          </div>

          <div
            style={{ transitionDelay: `${REVEAL_STAGGER_MS * 3}ms` }}
            className={`reveal-card ${inView ? "reveal-card-in" : ""} transition-all duration-500 flex flex-col gap-3`}
          >
            <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-1">Contact us</p>
            {phoneNos?.map((phoneNo, i) => (
              <a key={i} href={`tel:${phoneNo}`} className="font-body text-gazette/70 hover:text-gazette text-sm transition-colors">
                {phoneNo}
              </a>
            ))}
            {emails?.map((mail, i) => (
              <a
                key={i}
                href={`mailto:${mail}`}
                className="font-body text-gazette/70 hover:text-gazette text-sm transition-colors break-all"
              >
                {mail}
              </a>
            ))}
            <NavSocial iconClass="text-gazette/70" wrapperClass="flex flex-row gap-3 items-center pt-2" />
          </div>
        </div>

        <div className="border-t border-gazette/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-gazette/50 text-xs">
            © 2025{" "}
            <a href="https://www.gfeconsultancy.com/" className="hover:text-gazette/80">
              GFEC™
            </a>
            . All rights reserved.
          </p>
          <a href={`${privacyBasePolicyUrl}/privacy-policy`} className="font-body text-gazette/50 hover:text-gazette/80 text-xs">
            Privacy Policy
          </a>
        </div>

        <p className="slip-mono text-gazette/20 text-[10px] uppercase tracking-[0.3em] text-center mt-8">
          — Filed &amp; Verified —
        </p>
      </div>
    </footer>
  );
}
