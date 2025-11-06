"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

import NavLinksNew from "./nav-links-new";
import NavActionsNew from "./nav-actions-new";
import MobileNav from "./mobile-nav";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

export default function NavigationNew({ className }: any) {
  const router = useRouter();

  const onLogoClick = () => {
    router.push('/');
  }

  return (
    <nav className={`flex flex-row items-center gap-x-14 h-[140px] max-h-[140px] px-14 bg-white ${className} `} >
      <Image
        src={gfecTrans}
        alt="GFEC-LOGO"
        width={100}
        height={90}
        priority
        onClick={onLogoClick}
      />

      {/* isMainNavInView - can remove */}
      <MobileNav isMainNavInView={true} />

      <NavLinksNew className="hidden lg:flex" />

      <NavActionsNew className='ml-auto hidden xl:flex' />
    </nav>
  );
}
