"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import NavLinksNew from "./nav-links-new";
import NavActionsNew from "./nav-actions-new";
import MobileNav from "./mobile-nav";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

export default function NavigationNew({ className }: { className?: string }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={`relative bg-gazette transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_20px_-8px_rgba(32,29,24,0.18)]" : ""} ${className ?? ""}`}>
      <nav className="flex flex-row items-center gap-x-10 h-[92px] px-5 lg:px-12 max-w-[1600px] mx-auto">
        <button
          type="button"
          onClick={onLogoClick}
          className="flex items-center gap-3 shrink-0 cursor-pointer"
          aria-label="GFEC home"
        >
          <Image src={gfecTrans} alt="GFEC logo" width={64} height={58} priority />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-slip-display font-bold text-exam-ink text-lg tracking-tight">GFEC</span>
            <span className="font-body text-[11px] text-slip-mist tracking-wide">Study Abroad Consultancy</span>
          </span>
        </button>

        <MobileNav isMainNavInView={true} />

        <NavLinksNew className="hidden xl:flex ml-6" />

        <NavActionsNew className="ml-auto hidden xl:flex" />
      </nav>
      <div className="slip-rule" />
      <div className="slip-rule-thin mt-[3px]" />
    </header>
  );
}
