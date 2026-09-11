import SuccessStoriesText from "./_components/success-stories-text";
import WhatGfecOffers from "./_components/what-gfec-offers";
import WhyGfec from "./_components/why-gfec";
import SummaryCounterGroup from "./_components/summary-counter-group";
import SuccessPathNew from "./_components/success-path-new";
import DestinationExplorer from "./_components/destination-explorer";
import UniversityPartnersGrid from "./_components/uni-list";
import HeroResultSlip from "./_components/hero-result-slip";
import FinalCta from "./_components/final-cta";

export default function SitePage() {

  return (
    <section className="bg-paper">
      <HeroResultSlip />
      <SummaryCounterGroup />
      <WhyGfec />
      <WhatGfecOffers />
      <DestinationExplorer />
      {/* <UniversityPartnersGrid /> */}
      <SuccessPathNew />
      <SuccessStoriesText />
      {/* <FinalCta /> */}
    </section>
  );
}
