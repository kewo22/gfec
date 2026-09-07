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
        className="xl:hidden ml-auto flex items-center justify-center w-11 h-11 text-exam-ink cursor-pointer"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <section
        aria-hidden={!isOpen}
        className={`xl:hidden fixed inset-0 z-[60] bg-gazette transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-stamp-red opacity-70" />
        <div className="absolute left-[26px] top-0 bottom-0 w-px bg-stamp-red opacity-30" />

        <div className="h-full flex flex-col px-8 pl-10 py-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-12">
            <Image src={gfecTrans} alt="GFEC logo" width={56} height={50} priority />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-11 h-11 text-exam-ink cursor-pointer"
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
                  className="group flex items-center gap-4 py-4 border-b border-slip-rule"
                >
                  <span className="slip-mono text-xs text-stamp-red">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`font-slip-display text-2xl font-bold ${active ? "text-exam-ink" : "text-exam-ink/55 group-hover:text-exam-ink"
                      }`}
                  >
                    {item.text}
                  </span>
                  {active && (
                    <span className="ml-auto slip-mono text-[10px] text-exam-green flex items-center gap-1">
                      PASS
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <button
              type="button"
              onClick={onFreeConsultationClick}
              className="bg-stamp-red text-slip-surface font-slip-display font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-sm text-center cursor-pointer"
            >
              Book a Free Consultation
            </button>
            <Link
              href="/apply-now"
              onClick={() => setIsOpen(false)}
              className="border border-exam-ink/30 text-exam-ink font-slip-display font-bold uppercase tracking-wide text-sm px-6 py-4 rounded-sm text-center"
            >
              Apply Now
            </Link>
            <NavSocial
              iconClass="text-exam-ink"
              wrapperClass="flex flex-row gap-6 items-center justify-center pt-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
