"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import ContainerNew from "./layouts/container-new";
import Breadcrumbs from "./breadcrumbs";
import { ResultSeal } from "./result-seal";
import MasonryGallery from "./masonry-gallery";
import { IMAGES } from "../_constants/gallery-images";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_STAMP = [0.34, 1.56, 0.64, 1] as const;

export default function GalleryContent() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="bg-gazette">
      <section className="relative w-full bg-gazette overflow-hidden">
        <ContainerNew className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <div className="text-exam-ink">
            <Breadcrumbs items={[{ label: "Gallery" }]} />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8 lg:mt-12">
            <div>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3"
              >
                Photo register
              </motion.p>
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
                className="font-slip-display font-bold text-exam-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] max-w-3xl"
              >
                Moments, filed for the record.
              </motion.h1>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
                className="font-body text-slip-mist text-lg mt-5 max-w-xl leading-relaxed"
              >
                From agent meetups to open days — a running record of the people and moments behind every
                file we open.
              </motion.p>
            </div>

            <div className="hidden lg:block shrink-0 relative">
              {!reduceMotion && (
                <motion.div
                  initial={{ opacity: 0.55, scale: 0.3 }}
                  animate={{ opacity: 0, scale: 2.4 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-stamp-red/30 pointer-events-none"
                />
              )}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 1.9, rotate: 18 }}
                animate={{ opacity: 1, scale: 1, rotate: -9 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE_STAMP }}
              >
                <ResultSeal
                  className="w-[140px] h-[140px]"
                  ringText="GFEC · COLOMBO · PHOTO REGISTER ·"
                  centerLine1={String(IMAGES.length)}
                  centerLine2="EXHIBITS"
                  pathId="gallery-seal-ring"
                />
              </motion.div>
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
            href="/apply-now"
            className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exam-gold focus-visible:ring-offset-2 focus-visible:ring-offset-exam-ink"
          >
            Book a Free Consultation
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
