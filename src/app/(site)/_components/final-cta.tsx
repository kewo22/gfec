"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import ContainerNew from "./layouts/container-new";

export default function FinalCta() {
  const router = useRouter();

  const onBookClick = () => {
    router.push("/contact#get-in-touch-container");
  };

  return (
    <section className="bg-navy-deep relative">
      <div className="stitch-rule" />
      <ContainerNew className="px-5 lg:px-12 py-20 lg:py-28 text-center">
        <p className="ledger-ref text-gold text-xs uppercase mb-5">Ready when you are</p>
        <h2 className="font-display font-bold text-paper text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl mx-auto">
          Your global future starts here.
        </h2>
        <p className="font-body text-paper/70 text-lg mt-6 max-w-xl mx-auto">
          Tell us where you want to study. We&apos;ll help you figure out how to get there.
        </p>
        <button
          type="button"
          onClick={onBookClick}
          className="group inline-flex items-center gap-2 bg-gold text-navy-deep font-display font-semibold text-base px-8 py-4 rounded-sm mt-10 cursor-pointer"
        >
          Book a Free Consultation
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </ContainerNew>
    </section>
  );
}
