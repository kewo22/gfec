'use client';

import { SocialIcon } from 'react-social-icons';

import SuccessStoriesText from "./_components/success-stories-text";
import WhatGfecOffers from "./_components/what-gfec-offers";
import SummaryCounterGroup from "./_components/summary-counter-group";
import SuccessPathNew from "./_components/success-path-new";
import ScrollAnimationSection from "./_components/destinations-v9";
import DestinationsMobile from "./_components/destinations-mobile";
import UniversityPartnersGrid from "./_components/uni-list";
import HeroNew from "./_components/hero-new";

export default function SitePage() {

  return (
    <section className="bg-slate-100">
      <HeroNew />
      <SummaryCounterGroup />
      <WhatGfecOffers />
      <UniversityPartnersGrid countryFilter="all" />
      <div className="hidden md:block">
        <ScrollAnimationSection />
      </div>
      <div className="block md:hidden">
        <DestinationsMobile />
      </div>
      <SuccessPathNew />
      <SuccessStoriesText />

      {/* <a
        className="whatsapp-float"
        href="https://wa.me/15551234567?text=Hello%20there%2C%20I%27d%20like%20help%20with%20..."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      > */}
      {/*   */}
      {/* onClick={(event) => event.preventDefault()}  */}
      <div className='fixed z-[999999999] bottom-5 right-5'>
        <SocialIcon network="whatsapp" url="https://wa.me/+94771789038" target="_blank" />
      </div>
      {/* </a> */}

    </section>
  );
}
