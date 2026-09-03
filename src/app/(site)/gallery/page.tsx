import type { Metadata } from "next";

import ContainerNew from "../_components/layouts/container-new";
import Breadcrumbs from "../_components/breadcrumbs";
import MasonryGallery from "../_components/masonry-gallery";

export const metadata: Metadata = {
  title: "GFEC Gallery",
  description:
    "Moments from GFEC's agent meetups, GDEU education fairs, open days, and student experiences — a look inside our study abroad consultancy in Colombo.",
  alternates: { canonical: "https://gfeconsultancy.com/gallery" },
};

export default function Gallery() {
  return (
    <div className="bg-paper">
      <section className="bg-navy py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12 text-paper">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <p className="ledger-ref text-gold text-xs uppercase mt-6 mb-3">Gallery</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] max-w-xl">
            Moments from the GFEC journey.
          </h1>
          <p className="font-body text-paper/70 text-lg mt-5 max-w-xl">
            Explore moments from our events, student experiences, and university engagements.
          </p>
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12">
          <MasonryGallery />
        </ContainerNew>
      </section>
    </div>
  );
}
