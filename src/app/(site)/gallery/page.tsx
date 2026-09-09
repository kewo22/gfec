import type { Metadata } from "next";

import GalleryContent from "../_components/gallery-content";

export const metadata: Metadata = {
  title: "GFEC Gallery",
  description:
    "Moments from GFEC's agent meetups, GDEU education fairs, open days, and student experiences — a look inside our study abroad consultancy in Colombo.",
  alternates: { canonical: "https://gfeconsultancy.com/gallery" },
};

export default function Gallery() {
  return <GalleryContent />;
}
