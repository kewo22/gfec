import type { Metadata } from "next";

import AboutContent from "../_components/about-content";

export const metadata: Metadata = {
  title: "About GFEC",
  description:
    "GFEC is a Colombo-based study abroad consultancy helping Sri Lankan students since 2021 — personalized guidance, comprehensive support, and unwavering commitment from program selection to departure.",
  alternates: { canonical: "https://gfeconsultancy.com/about" },
};

export default function About() {
  return <AboutContent />;
}
