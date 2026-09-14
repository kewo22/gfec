"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import FlipValue from "./flip-value";
import { ResultSeal } from "./result-seal";

const FILE_SUMMARY = [
  { label: "Countries covered", value: "14" },
  { label: "University partners", value: "600+" },
  { label: "Courses available", value: "150+" },
  { label: "Students guided", value: "30+" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_STAMP = [0.34, 1.56, 0.64, 1] as const;

const CTA_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exam-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gazette";

export default function HeroResultSlip() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full bg-gazette overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-24 flex flex-col lg:flex-row items-center gap-14">
        <div className="relative w-full lg:w-[56%]">
          <motion.div
            className="mb-6 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.6, rotate: 14 }}
            animate={{ opacity: 1, scale: 1, rotate: -9 }}
            transition={{ duration: 0.5, ease: EASE_STAMP }}
          >
            <ResultSeal className="w-[88px] h-[88px]" />
          </motion.div>

          <div className="hidden lg:block absolute -top-10 right-0 z-10">
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
              <ResultSeal />
            </motion.div>
          </div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="font-slip-display font-bold text-exam-ink text-[38px] leading-[1.12] sm:text-[52px] lg:text-[62px] tracking-tight lg:max-w-2xl lg:pr-40"
          >
            Your File Just Got Approved.
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
            className="font-body text-slip-mist text-lg lg:text-xl mt-6 max-w-xl leading-relaxed"
          >
            GFEC has personally guided Sri Lankan students from program selection to visa
            approval since 2021. Your file is reviewed by hand, verified against real
            university partners, and carried through to departure.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
            className="flex flex-wrap items-center gap-6 mt-10"
          >
            <Link
              href="/apply-now"
              className={`group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97] ${CTA_FOCUS}`}
            >
              Register Your File
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/study-abroad"
              className={`group font-slip-display font-bold text-exam-ink text-sm tracking-wide uppercase px-1 py-4 flex items-center gap-2 border-b-2 border-exam-ink/25 hover:border-exam-navy transition-colors ${CTA_FOCUS}`}
            >
              Browse the Register
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
          className="w-full lg:w-[40%] lg:ml-auto"
        >
          <div className="bg-slip-surface border border-slip-rule rounded-sm p-7 lg:p-8 shadow-[var(--shadow-slip-card)]">
            <p className="font-slip-display font-bold text-exam-ink text-sm uppercase tracking-wide">
              Student File — Summary
            </p>
            <p className="font-body text-slip-mist text-sm mt-1 mb-5">
              Verified totals, updated as our practice grows.
            </p>

            <div className="slip-register">
              {FILE_SUMMARY.map((row, i) => (
                <div key={row.label} className="flex items-center gap-3 py-3">
                  <span className="slip-mono text-xs text-slip-mist w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-exam-ink/85 flex-1 min-w-0">{row.label}</span>
                  <span className="slip-mono text-exam-navy font-bold text-base shrink-0">
                    <FlipValue value={row.value} delayMs={i * 120} />
                  </span>
                  <span className="flex items-center gap-1 text-exam-navy shrink-0">
                    <Check size={14} strokeWidth={3} />
                    <span className="slip-mono text-[10px] tracking-wider">PASS</span>
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className={`mt-6 inline-flex items-center gap-1.5 font-slip-display font-bold text-xs uppercase tracking-wide text-exam-navy hover:text-exam-navy-deep transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-exam-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slip-surface`}
            >
              More about GFEC
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="slip-rule" />
    </section>
  );
}
