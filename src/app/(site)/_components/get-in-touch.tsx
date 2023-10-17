import React from "react";

import SectionTitle from "./section-title";
import Container from "./layouts/container";
import GetInTouchForm from "./get-in-touch-form";

export default function GetInTouch() {
  return (
    <Container className="mx-5 xl:mx-auto py-40 grid place-items-center">
      <SectionTitle title="Get in Touch" />

      <GetInTouchForm />
    </Container>
  );
}
