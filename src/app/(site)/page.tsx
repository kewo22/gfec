import React from "react";

import SuccessPath from "./_components/success-path";
import SuccessStories from "./_components/success-stories";
import CouldYourNextHomeBe from "./_components/could-your-next-home-be";
import StudyOverseasWithGfec from "./_components/study-overseas-with-gfec";
import HowWeDifferentiateFromOthers from "./_components/how-we-differentiate-from-others";
import GetInTouch from "./_components/get-in-touch";

export default function SitePage() {
  return (
    <section className="bg-slate-100">
      <StudyOverseasWithGfec />

      <SuccessPath />

      <HowWeDifferentiateFromOthers />

      <CouldYourNextHomeBe />

      <SuccessStories />
      
      <GetInTouch />
    </section>
  );
}
