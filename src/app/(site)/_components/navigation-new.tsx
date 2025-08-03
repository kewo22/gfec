"use client"

// import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";
import NavLinksNew from "./nav-links-new";
import NavActionsNew from "./nav-actions-new";
import MobileNav from "./mobile-nav";

// import { motion } from "motion/react"
// import * as motion from "motion/react-client"

// import { useInView } from "react-intersection-observer";

// import NavContactRibbon from "./nav-contact-ribbon";
// import MobileNav from "./mobile-nav";
// import { Typography } from "@/app/_components/ui/typography";
// import GetInTouchForm, { GetInTouchFormHandle } from "./get-in-touch-form";
// import { Modal } from "@/app/_components/ui/modal";

// import { MemoizedNavItems } from "./nav-items";

// const SLIDES = ["bg-home-banner-1", "bg-home-banner-2"];

export default function NavigationNew({ className }: any) {


  return (
    <nav className={`flex flex-row items-center gap-x-14 h-[140px] max-h-[140px] px-14 bg-white ${className} `} >
      <Image
        src={gfecTrans}
        alt="GFEC-LOGO"
        width={100}
        height={90}
        priority
      />

      {/* isMainNavInView - can remove */}
      <MobileNav isMainNavInView={true} />

      <NavLinksNew className="hidden lg:flex" />

      <NavActionsNew className='ml-auto hidden xl:flex' />
    </nav>
  );
}
