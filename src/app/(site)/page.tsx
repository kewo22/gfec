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
    </section>
  );
}
