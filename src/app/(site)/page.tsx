import React from "react";

import SuccessPath from "./_components/success-path";
import CouldYourNextHomeBe from "./_components/could-your-next-home-be";
import StudyOverseasWithGfec from "./_components/study-overseas-with-gfec";
import HowWeDifferentiateFromOthers from "./_components/how-we-differentiate-from-others";
import GetInTouch from "./_components/get-in-touch";
import Testimonial from "./_components/testimonial";
import SuccessStoriesText from "./_components/success-stories-text";
import StudentLife from "./_components/student-life";

export default function SitePage() {
  return (
    <section className="bg-slate-100">
      <StudyOverseasWithGfec />

      {/* <SuccessPath /> */}

      {/*<HowWeDifferentiateFromOthers />

      <CouldYourNextHomeBe /> */}

      {/* <SuccessStories /> audio not using*/}
      {/* <SuccessStoriesText />

      <Testimonial />

      <StudentLife />

      <div id="get-in-touch-container">
        <GetInTouch />
      </div> */}
    </section>
  );
}
