"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  BookOpenCheck,
  CloudSun,
  GraduationCap,
  Plus,
  Users,
  Wallet,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { COUNTRIES } from "../_constants/countries.constants";
import ContainerNew from "./layouts/container-new";
import Breadcrumbs from "./breadcrumbs";
import { ResultSeal } from "./hero-result-slip";
import FlipValue from "./flip-value";

type Region = "Europe" | "Asia-Pacific" | "Middle East" | "Oceania";

const REGION_BY_COUNTRY_ID: Record<string, Region> = {
  australia: "Oceania",
  france: "Europe",
  germany: "Europe",
  ireland: "Europe",
  malta: "Europe",
  singapore: "Asia-Pacific",
  south_korea: "Asia-Pacific",
  spain: "Europe",
  uae: "Middle East",
  united_kingdom: "Europe",
};

const REGIONS: Region[] = ["Europe", "Asia-Pacific", "Middle East", "Oceania"];

const CRITERIA = [
  {
    icon: GraduationCap,
    title: "Education Goals",
    description:
      "Choose a country offering programs that match your academic direction and long-term ambitions.",
  },
  {
    icon: Wallet,
    title: "Budget Fit",
    description:
      "Select destinations where tuition, living costs, and financial requirements align with your budget.",
  },
  {
    icon: BookOpenCheck,
    title: "Course Match",
    description:
      "Pick countries known for strong industry pathways and high-quality programs in your field.",
  },
  {
    icon: CloudSun,
    title: "Climate Comfort",
    description:
      "Consider weather conditions that suit your lifestyle, wellbeing, and preferred living environment.",
  },
  {
    icon: Users,
    title: "Lifestyle Choice",
    description:
      "Choose a culture, pace, and environment that support your personal growth and daily comfort.",
  },
  {
    icon: Briefcase,
    title: "Career Plans",
    description:
      "Select destinations offering strong job prospects, post-study pathways, and industry demand.",
  },
];

const FAQS = [
  {
    q: "How do I know which country is right for me?",
    a: "It comes down to six things: your education goals, budget, course availability, climate, lifestyle, and career plans — the same criteria above. Your GFEC consultant walks through all six with you and narrows the register to destinations that actually fit.",
  },
  {
    q: "Do I need to have already chosen a university before I contact GFEC?",
    a: "No. Program selection and university selection are both things we help with from scratch — you don't need to arrive with a shortlist.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. Booking a consultation costs nothing — it's a working session to review your goals and options with a consultant, not a sales call.",
  },
  {
    q: "Can I compare more than one country before deciding?",
    a: "Yes. Most students shortlist two or three destinations before committing. Your consultant can walk you through each option side by side against your goals and budget.",
  },
  {
    q: "What does GFEC actually handle, start to finish?",
    a: "One consultant carries your file through program selection, university selection, offers and admissions, financial guidance, visa processing, accommodation guidance, and a pre-departure briefing — the same person from your first meeting to departure.",
  },
  {
    q: "What happens after my visa is approved?",
    a: "You're not on your own from there. GFEC provides accommodation guidance and a pre-departure briefing so you land prepared, not just approved.",
  },
  {
    q: "What documents should I have ready to get started?",
    a: "Typically your academic transcripts, passport, and financial documents — but the exact list depends on your destination. Your consultant will confirm exactly what's needed once a country is shortlisted.",
  },
];

function CriteriaCheck({ delay, reduceMotion }: { delay: number; reduceMotion: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 20 20"
      className="w-5 h-5 shrink-0"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.2, delay }}
    >
      <circle cx="10" cy="10" r="9" fill="none" stroke="var(--color-exam-green-bright)" strokeWidth="1.5" opacity="0.6" />
      <motion.path
        d="M5.5 10.3l3 3 6-6.5"
        fill="none"
        stroke="var(--color-exam-green-bright)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, delay: delay + 0.15, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

function FaqItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-exam-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-start gap-4 py-6 text-left group"
      >
        <span className="slip-mono text-exam-green text-xs shrink-0 pt-1.5 w-8">
          {`Q${String(index + 1).padStart(2, "0")}`}
        </span>
        <span className="font-slip-display font-bold text-exam-ink text-base lg:text-lg flex-1 group-hover:text-exam-green-deep transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-45 border-exam-green-bright text-exam-green-bright" : "border-exam-ink/20 text-exam-ink/50"
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="font-body text-slip-mist text-sm leading-relaxed pb-6 pl-12 pr-6 max-w-2xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function StudyDestinationsContent() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeRegion, setActiveRegion] = useState<Region | "all">("all");

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COUNTRIES.length };
    REGIONS.forEach((r) => {
      counts[r] = 0;
    });
    COUNTRIES.forEach((c) => {
      const region = REGION_BY_COUNTRY_ID[c.id];
      if (region) counts[region] = (counts[region] ?? 0) + 1;
    });
    return counts;
  }, []);

  const visibleCountries = useMemo(
    () =>
      activeRegion === "all"
        ? COUNTRIES
        : COUNTRIES.filter((c) => REGION_BY_COUNTRY_ID[c.id] === activeRegion),
    [activeRegion],
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="bg-gazette">
      <section className="relative w-full bg-gazette overflow-hidden">
        <ContainerNew className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="text-exam-ink">
            <Breadcrumbs items={[{ label: "Study Abroad" }]} />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8 lg:mt-12">
            <div>
              <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">
                Destination register
              </p>
              <h1 className="font-slip-display font-bold text-exam-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] max-w-3xl">
                Choose your destination. We&apos;ll handle the file.
              </h1>
              <p className="font-body text-slip-mist text-lg mt-5 max-w-xl leading-relaxed">
                {COUNTRIES.length} countries, real partner universities, and one consultant guiding your
                application from shortlist to visa.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  href="/contact#get-in-touch-container"
                  className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97]"
                >
                  Book a Free Consultation
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#how-to-choose"
                  className="group font-slip-display font-bold text-exam-ink text-sm tracking-wide uppercase px-1 py-4 flex items-center gap-2 border-b-2 border-exam-ink/25 hover:border-exam-green transition-colors"
                >
                  How to choose
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block shrink-0">
              <ResultSeal
                className="w-[140px] h-[140px]"
                ringText="GFEC · COLOMBO · DESTINATION REGISTER ·"
                centerLine1={String(COUNTRIES.length)}
                centerLine2="DESTINATIONS"
                pathId="study-abroad-seal-ring"
              />
            </div>
          </div>
        </ContainerNew>
        <div className="slip-rule" />
      </section>

      <section className="bg-gazette py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="max-w-2xl mb-10">
            <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">The register</p>
            <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
              Every destination, filed by region.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {(["all", ...REGIONS] as const).map((region) => {
              const active = activeRegion === region;
              const label = region === "all" ? "All destinations" : region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`slip-mono text-[11px] uppercase tracking-wide px-4 py-2 rounded-sm border transition-colors duration-200 ${
                    active
                      ? "bg-exam-ink border-exam-ink text-gazette"
                      : "border-exam-ink/15 text-exam-ink/70 hover:border-exam-green-bright/50 hover:text-exam-ink"
                  }`}
                >
                  {label}
                  <span className={active ? "text-gazette/50" : "text-exam-ink/40"}> ({regionCounts[region]})</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCountries.map((country) => {
              const originalIndex = COUNTRIES.findIndex((c) => c.id === country.id);
              const region = REGION_BY_COUNTRY_ID[country.id];
              const delay = Math.min(originalIndex, 6) * 0.06;
              return (
                <motion.div
                  key={country.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/study-abroad/${country.route}`}
                    className="group relative block aspect-[4/5] rounded-sm overflow-hidden border border-transparent transition-colors duration-300 hover:border-exam-green-bright/60"
                  >
                    <Image
                      src={country.image}
                      alt={country.country}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-exam-ink via-exam-ink/25 to-transparent" />
                    <div className="absolute inset-0 bg-exam-ink/0 group-hover:bg-exam-ink/20 transition-colors duration-500" />

                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <Image src={country.flag} alt="" width={22} height={16} className="rounded-[2px] shadow" />
                      <FlipValue
                        value={String(originalIndex + 1).padStart(2, "0")}
                        delayMs={delay * 1000 + 300}
                        className="slip-mono text-gazette/85 text-[11px] uppercase"
                      />
                    </div>

                    <div className="absolute top-5 right-5">
                      <span className="slip-mono text-[10px] uppercase tracking-wide text-gazette/70 bg-exam-ink/50 px-2 py-1 rounded-sm border border-gazette/15">
                        {region}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-slip-display font-bold text-gazette text-2xl mb-2">
                        {country.country}
                      </h3>
                      <p className="font-body text-gazette/75 text-sm leading-relaxed line-clamp-2 mb-4 max-w-[90%]">
                        {country.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-slip-display font-bold text-exam-green-bright text-sm uppercase tracking-wide">
                        Explore
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </ContainerNew>
      </section>

      <section id="how-to-choose" className="bg-exam-ink py-20 lg:py-28">
        <ContainerNew className="px-5 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wider mb-3">How it works</p>
            <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
              How to choose your study destination.
            </h2>
            <p className="font-body text-gazette/60 mt-4 leading-relaxed max-w-xl">
              Six questions worth answering honestly before you shortlist a country — the same ones your
              consultant will walk through with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {CRITERIA.map((item, i) => {
              const delay = Math.min(i, 6) * 0.07;
              return (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gazette/5 border border-gazette/10 rounded-sm p-8 transition-colors duration-300 hover:border-exam-green-bright/40 hover:bg-gazette/[0.07]"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="slip-mono text-gazette/30 text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <CriteriaCheck delay={delay} reduceMotion={reduceMotion} />
                  </div>
                  <item.icon size={28} strokeWidth={1.5} className="text-exam-green-bright mb-4" />
                  <h3 className="font-slip-display font-bold text-gazette text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-gazette/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </ContainerNew>
      </section>

      <section id="faq" className="bg-gazette py-20 lg:py-28">
        <ContainerNew className="px-5 lg:px-12">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            <div>
              <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1] mb-4">
                Questions students actually ask.
              </h2>
              <p className="font-body text-slip-mist leading-relaxed max-w-sm">
                Don&apos;t see yours here? A consultant can answer it directly — free of charge.
              </p>
              <Link
                href="/contact#get-in-touch-container"
                className="mt-6 inline-flex items-center gap-1.5 font-slip-display font-bold text-xs uppercase tracking-wide text-exam-green hover:text-exam-green-deep transition-colors"
              >
                Ask a consultant
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="border-t border-exam-ink/10">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} index={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </ContainerNew>
      </section>

      <section className="bg-exam-ink relative">
        <div className="slip-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wider mb-4">Not sure yet?</p>
            <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-4xl mb-4">
              Not sure which country is right for you?
            </h2>
            <p className="font-body text-gazette/60 leading-relaxed mb-8">
              Our consultants can help you compare destinations based on your education goals, career plans, and
              personal preferences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact#get-in-touch-container"
                className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-transform active:scale-[0.97]"
              >
                Talk to a Consultant
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/apply-now"
                className="group font-slip-display font-bold text-gazette text-sm tracking-wide uppercase px-1 py-4 flex items-center gap-2 border-b-2 border-gazette/25 hover:border-exam-green-bright transition-colors"
              >
                Start Your Application
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ContainerNew>
      </section>
    </div>
  );
}
