import React from "react";

import SectionTitle from "./section-title";
import Container from "./layouts/container";
import GetInTouchForm from "./get-in-touch-form";
import ContainerNew from "./layouts/container-new";

export default function GetInTouch() {
  return (
    <ContainerNew className="mx-5 xl:mx-auto py-40 grid place-items-center">
      <SectionTitle title="Get in Touch" />
      <GetInTouchForm />
    </ContainerNew>
  );
}
