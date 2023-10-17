import React from "react";

import SuccessPath from "./_components/success-path";
import SuccessStories from "./_components/success-stories";
import CouldYourNextHomeBe from "./_components/could-your-next-home-be";
import StudyOverseasWithGfec from "./_components/study-overseas-with-gfec";
import HowWeDifferentiateFromOthers from "./_components/how-we-differentiate-from-others";
import GetInTouch from "./_components/get-in-touch";
import Testimonial from "./_components/testimonial";
import SuccessStoriesText from "./_components/success-stories-text";

export default function SitePage() {
  return (
    <section className="bg-slate-100 px">
      <StudyOverseasWithGfec />

      <SuccessPath />

      <HowWeDifferentiateFromOthers />

      <CouldYourNextHomeBe />

      {/* <SuccessStories /> */}
      <SuccessStoriesText />

      <Testimonial />

      <div id="get-in-touch-container">
        <GetInTouch />
      </div>
    </section>
  );
}
