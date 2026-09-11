"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ArrowUpRight, BookOpen, CalendarClock, Check, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Country, University } from "../_types/country";
import { DestinationContent } from "../_constants/destination-content.constants";
import { COUNTRIES } from "../_constants/countries.constants";
import Breadcrumbs from "./breadcrumbs";
import UniversityPartnerItem from "./uni-item";
import ContainerNew from "./layouts/container-new";
import DestinationFaq from "./destination-faq";
import FlipValue from "./flip-value";
import { ResultSeal } from "./hero-result-slip";

type DestinationTemplateProps = {
  country: Country;
  content: DestinationContent;
  universities: University[];
};

export default function DestinationTemplate({ country, content, universities }: DestinationTemplateProps) {
  const reduceMotion = useReducedMotion() ?? false;

  const establishedYears = universities.map((u) => parseInt(u.established, 10)).filter((n) => !Number.isNaN(n));
  const oldestYear = establishedYears.length ? Math.min(...establishedYears) : null;
  const popularPrograms = Array.from(new Set(universities.flatMap((u) => u.programs))).slice(0, 6);

  const otherDestinations = COUNTRIES.filter((c) => c.id !== country.id).slice(0, 3);

  const statCells = [
    { icon: GraduationCap, value: String(universities.length), label: "Partner universities" },
    { icon: BookOpen, value: `${popularPrograms.length}+`, label: "Popular study areas" },
    ...(oldestYear ? [{ icon: CalendarClock, value: String(oldestYear), label: "Oldest partner institution" }] : []),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-gazette">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative w-full min-h-[520px] flex items-end overflow-hidden bg-exam-ink">
        <Image src={country.image} alt={`Study in ${country.country}`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-exam-ink via-exam-ink/70 to-exam-ink/30" />

        <ContainerNew className="relative z-10 max-w-[1600px] mx-auto px-5 lg:px-12 pb-14 pt-32 text-gazette">
          <Breadcrumbs items={[{ label: "Study Abroad", href: "/study-abroad" }, { label: country.country }]} />

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-6">
            <div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-4"
              >
                <Image src={country.flag} alt="" width={30} height={20} className="rounded-[2px] shadow" />
                <span className="slip-mono text-exam-gold text-xs uppercase tracking-wider">
                  Destination file · {country.country}
                </span>
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-slip-display font-bold text-4xl sm:text-5xl lg:text-[68px] leading-[1.02] max-w-3xl"
              >
                Study in {country.country}
              </motion.h1>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-6 mt-9"
              >
                <a
                  href="#universities"
                  className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97]"
                >
                  Explore {country.country} universities
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/contact#get-in-touch-container"
                  className="group font-slip-display font-bold text-gazette text-sm tracking-wide uppercase px-1 py-4 flex items-center gap-2 border-b-2 border-gazette/30 hover:border-exam-gold transition-colors"
                >
                  Book a Free Consultation
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            <div className="hidden lg:block shrink-0 relative">
              {!reduceMotion && (
                <motion.div
                  initial={{ opacity: 0.6, scale: 0.3 }}
                  animate={{ opacity: 0, scale: 2.6 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-stamp-red/30 pointer-events-none"
                />
              )}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 2.1, rotate: 24 }}
                animate={{ opacity: 1, scale: 1, rotate: -9 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <ResultSeal
                  className="w-[180px] h-[180px]"
                  ringText={`GFEC · COLOMBO · DESTINATION FILE ·`}
                  centerLine1="APPROVED"
                  centerLine2={country.country.toUpperCase()}
                  pathId={`${country.id}-seal-ring`}
                />
              </motion.div>
            </div>
          </div>
        </ContainerNew>
        <div className="slip-rule" />
      </section>

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div
            className={`grid grid-cols-1 gap-10 lg:gap-16 items-center ${
              universities.length > 0 || popularPrograms.length > 0 ? "lg:grid-cols-2" : "max-w-2xl"
            }`}
          >
            <div>
              <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">Country overview</p>
              <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-5">
                Why study in {country.country} from Sri Lanka?
              </h2>
              {content.intro.map((paragraph, i) => (
                <p key={i} className="font-body text-slip-mist leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {(universities.length > 0 || popularPrograms.length > 0) && (
              <div className="grid grid-cols-2 gap-px bg-exam-ink/10 rounded-sm overflow-hidden border border-exam-ink/10">
                {statCells.map((cell, i) => (
                  <div
                    key={cell.label}
                    className="bg-exam-ink px-6 py-8 flex flex-col items-center justify-center text-center gap-2"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="slip-mono text-[10px] text-gazette/40">{String(i + 1).padStart(2, "0")}</span>
                      <cell.icon size={16} className="text-exam-gold/70" />
                    </div>
                    <FlipValue
                      value={cell.value}
                      delayMs={i * 100}
                      className="slip-mono text-exam-gold font-bold text-4xl sm:text-5xl"
                    />
                    <p className="font-body text-gazette/60 text-sm">{cell.label}</p>
                    <span className="flex items-center gap-1 text-exam-gold">
                      <Check size={12} strokeWidth={3} />
                      <span className="slip-mono text-[9px] tracking-wider">PASS</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ContainerNew>
      </section>

      <section id="universities" className="bg-exam-ink py-16 lg:py-24 scroll-mt-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-3">Universities</p>
          <h2 className="font-slip-display font-bold text-gazette text-2xl lg:text-3xl mb-10">
            {country.country} universities GFEC works with
          </h2>
          {universities.length > 0 ? (
            <UniversityPartnerItem universities={universities} countryFilter={country.id} />
          ) : (
            <p className="font-body text-gazette/60">
              We&apos;re expanding our partner network in {country.country} — talk to a consultant for the latest
              options.
            </p>
          )}
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">
            Why choose {country.country}?
          </p>
          <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-10 max-w-2xl">
            Benefits worth weighing before you apply.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {content.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`border rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-exam-gold/50 hover:shadow-[0_16px_36px_-16px_rgba(201,151,46,0.35)] ${
                  i === 0
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-exam-ink border-exam-ink"
                    : "bg-slip-surface border-slip-rule"
                }`}
              >
                <span
                  className={`slip-mono text-xs block mb-4 ${i === 0 ? "text-gazette/30" : "text-exam-ink/30"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-slip-display font-bold mb-2 ${
                    i === 0 ? "text-gazette text-xl lg:text-2xl" : "text-exam-ink text-base"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed ${
                    i === 0 ? "text-gazette/70 lg:text-base lg:max-w-md" : "text-slip-mist"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 mt-8 p-5 bg-stamp-red/5 rounded-sm border border-stamp-red/25 max-w-3xl">
            <AlertTriangle size={18} className="text-stamp-red shrink-0 mt-0.5" />
            <p className="font-body text-exam-ink/70 text-sm leading-relaxed">
              Visa, work-right, and permanent residency rules can change. Please verify current immigration
              requirements with official government sources — your GFEC consultant can help you check the latest
              position before you apply.
            </p>
          </div>
        </ContainerNew>
      </section>

      {content.faqs.length > 0 && (
        <section className="bg-gazette py-16 lg:py-24">
          <ContainerNew className="px-5 lg:px-12 max-w-3xl">
            <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">FAQs</p>
            <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-8">
              Frequently asked questions
            </h2>
            <DestinationFaq faqs={content.faqs} />
          </ContainerNew>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">Keep exploring</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-8">Other destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherDestinations.map((dest, i) => (
              <Link
                key={dest.id}
                href={`/study-abroad/${dest.route}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-transparent transition-colors duration-300 hover:border-exam-gold/60"
              >
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-exam-ink via-exam-ink/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Image src={dest.flag} alt="" width={20} height={14} className="rounded-[2px] shadow" />
                  <span className="slip-mono text-gazette/80 text-[10px] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="font-slip-display font-bold text-gazette text-xl block mb-1">
                    {dest.country}
                  </span>
                  <span className="inline-flex items-center gap-1 font-slip-display font-bold text-exam-gold text-xs uppercase tracking-wide opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ContainerNew>
      </section>

      <section className="bg-exam-ink relative">
        <div className="slip-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20 text-center">
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-4xl mb-4 max-w-2xl mx-auto">
            Thinking about studying in {country.country}?
          </h2>
          <p className="font-body text-gazette/60 mb-8 max-w-xl mx-auto">
            Talk to a GFEC consultant about your options, costs, and next steps.
          </p>
          <Link
            href="/contact#get-in-touch-container"
            className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-transform active:scale-[0.97]"
          >
            Speak with a consultant
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
