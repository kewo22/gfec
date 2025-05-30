import React from "react";

import GfecMap from "../_components/gfec-map";
import GetInTouch from "../_components/get-in-touch";

export default function Contact() {
  return (
    <section className="bg-slate-100">
      <GfecMap />

      <div id="get-in-touch-container">
        <GetInTouch />
      </div>
    </section>
  );
}
