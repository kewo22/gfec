// "use client";

import React from "react";

import Image from "next/image";

import NavLinks from "./nav-links";
import NavContactRibbon from "./nav-contact-ribbon";
import NavSocial from "./nav-social";
import NavActions from "./nav-actions";
import MobileNav from "./mobile-nav";

export default function Navigation() {
  return (
    <nav className="h-nav-height flex flex-col items-center">
      <section className="w-full h-auto">
        <NavContactRibbon />
      </section>

      <div className="relative bg-home-banner-1 bg-slate-300 bg-center bg-cover w-full max-h-[550px] flex-grow flex flex-col items-center banner-img">
        <div className="absolute z-10 w-full h-full">
          <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={250}
            height={200}
            priority
            className="mx-auto"
          />

          <NavLinks />

          <NavActions />

          <NavSocial wrapperClass="mt-10 flex flex-row gap-8 items-center justify-center" />
        </div>
      </div>

      <MobileNav />
    </nav>
  );
}
