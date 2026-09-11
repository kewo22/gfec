"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ContainerNew from "./layouts/container-new";
import Breadcrumbs from "./breadcrumbs";
import { ResultSeal } from "./hero-result-slip";
import MasonryGallery from "./masonry-gallery";
import { IMAGES } from "../_constants/gallery-images";

export default function GalleryContent() {
  return (
    <div className="bg-gazette">
      <section className="relative w-full bg-gazette overflow-hidden">
        <ContainerNew className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <div className="text-exam-ink">
            <Breadcrumbs items={[{ label: "Gallery" }]} />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8 lg:mt-12">
            <div>
              <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">Photo register</p>
              <h1 className="font-slip-display font-bold text-exam-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] max-w-3xl">
                Moments, filed for the record.
              </h1>
              <p className="font-body text-slip-mist text-lg mt-5 max-w-xl leading-relaxed">
                From agent meetups to open days — a running record of the people and moments behind every
                file we open.
              </p>
            </div>

            <div className="hidden lg:block shrink-0">
              <ResultSeal
                className="w-[140px] h-[140px]"
                ringText="GFEC · COLOMBO · PHOTO REGISTER ·"
                centerLine1={String(IMAGES.length)}
                centerLine2="EXHIBITS"
                pathId="gallery-seal-ring"
              />
            </div>
          </div>
        </ContainerNew>
        <div className="slip-rule" />
      </section>

      <section className="bg-gazette py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <MasonryGallery />
        </ContainerNew>
      </section>

      <section className="bg-exam-ink relative">
        <div className="slip-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20 text-center">
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to add your own file to the register?
          </h2>
          <Link
            href="/contact#get-in-touch-container"
            className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-transform active:scale-[0.97]"
          >
            Book a Free Consultation
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
