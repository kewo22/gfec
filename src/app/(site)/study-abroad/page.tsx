import type { Metadata } from "next";

import StudyDestinationsContent from "../_components/study-destinations-content";

export const metadata: Metadata = {
  title: "Study Abroad from Sri Lanka",
  description:
    "Explore study destinations across 10 countries — Australia, the UK, Ireland, Germany, France, Spain, the UAE, Malta, Singapore, and South Korea — with GFEC's guidance every step of the way.",
  alternates: { canonical: "https://gfeconsultancy.com/study-abroad" },
};

export default function StudyAbroad() {
  return <StudyDestinationsContent />;
}
