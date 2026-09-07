"use client";

import dynamic from "next/dynamic";

import ContainerNew from "./layouts/container-new";

const WorldPartnersMap = dynamic(() => import("./world-partners-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[21/9] sm:aspect-[2.4/1] bg-exam-ink flex items-center justify-center">
      <span className="slip-mono text-gazette/40 text-xs uppercase tracking-wider">Loading register…</span>
    </div>
  ),
});

const UniversityPartnersGrid = () => {
  return (
    <section className="bg-slip-surface py-20 lg:py-28 overflow-x-hidden">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-10">
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            Verified partners. Real relationships.
          </h2>
          <p className="font-body text-slip-mist mt-4 max-w-xl leading-relaxed">
            Every listing here is a direct, working partnership GFEC maintains — not a directory
            pulled from somewhere else. Hover a coordinate to open the file.
          </p>
        </div>
      </ContainerNew>

      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <WorldPartnersMap />
      </div>
    </section>
  );
};

export default UniversityPartnersGrid;
