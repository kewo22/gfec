"use client";

import React, { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { NavItems } from "../_constants/nav-items.constants";
import NavSocial from "./nav-social";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

interface MobileNavProps {
  isMainNavInView: boolean;
}

export default function MobileNav({ }: MobileNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const onFreeConsultationClick = () => {
    setIsOpen(false);
    router.push("/contact#get-in-touch-container");
  };

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden ml-auto flex items-center justify-center w-11 h-11 text-navy cursor-pointer"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <section
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-0 z-[60] bg-paper transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="stitch-rule-v absolute left-6 top-0 bottom-0" />

        <div className="h-full flex flex-col px-8 py-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-12">
            <Image src={gfecTrans} alt="GFEC logo" width={56} height={50} priority />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-11 h-11 text-navy cursor-pointer"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NavItems.map((item, i) => {
              const active =
                item.route === "/" ? pathname === "/" : pathname.startsWith(item.route);
              return (
                <Link
                  key={i}
                  href={item.route}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-4 py-4 border-b border-hairline"
                >
                  <span className="ledger-ref text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`font-display text-2xl font-semibold ${active ? "text-navy" : "text-navy/60 group-hover:text-navy"
                      }`}
                  >
                    {item.text}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <button
              type="button"
              onClick={onFreeConsultationClick}
              className="bg-navy text-paper font-display font-semibold text-base px-6 py-4 rounded-sm text-center cursor-pointer"
            >
              Book a Free Consultation
            </button>
            <Link
              href="/apply-now"
              onClick={() => setIsOpen(false)}
              className="border border-navy/30 text-navy font-display font-semibold text-base px-6 py-4 rounded-sm text-center"
            >
              Apply Now
            </Link>
            <NavSocial
              iconClass="text-navy"
              wrapperClass="flex flex-row gap-6 items-center justify-center pt-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
