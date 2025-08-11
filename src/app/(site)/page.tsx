import React from "react";

import SuccessPath from "./_components/success-path";
import CouldYourNextHomeBe from "./_components/could-your-next-home-be";
import StudyOverseasWithGfec from "./_components/study-overseas-with-gfec";
import HowWeDifferentiateFromOthers from "./_components/how-we-differentiate-from-others";
import GetInTouch from "./_components/get-in-touch";
import Testimonial from "./_components/testimonial";
import SuccessStoriesText from "./_components/success-stories-text";
import StudentLife from "./_components/student-life";
import ChooseYourDestination from "./_components/could-your-next-home-be-new";
import WhatGfecOffers from "./_components/what-gfec-offers";
import SummaryCounterGroup from "./_components/summary-counter-group";
import SuccessPathNew from "./_components/success-path-new";
import ScrollAnimationSection from "./_components/destinations-v9";
import DestinationsMobile from "./_components/destinations-mobile";
import UniversityPartnersGrid from "./_components/uni-list";

export default function SitePage() {

  return (
    <section className="bg-slate-100">

      <UniversityPartnersGrid />

      <SummaryCounterGroup />

      <WhatGfecOffers />

      {/* <ChooseYourDestination /> */}

      <div className="hidden md:block">
        <ScrollAnimationSection />
      </div>
      <div className="block md:hidden">
        <DestinationsMobile />
      </div>

      {/* <StudyOverseasWithGfec /> */}

      {/* <SuccessPath /> */}

      <SuccessPathNew />

      {/* <HowWeDifferentiateFromOthers /> */}

      {/* <SuccessStories /> audio not using*/}
      {/* <SuccessStoriesText /> */}

      {/* <Testimonial /> */}

      {/* <StudentLife /> */}

      <div id="get-in-touch-container">
        <GetInTouch />
      </div>
    </section>
  );
}
