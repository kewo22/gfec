"use client";

import { motion } from "motion/react";

import Container from "../_components/layouts/container";
import ApplyForm from "../_components/apply-form";

export default function ApplyNow() {
  return (
    <section className="relative bg-gazette overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-exam-ink) 0px, var(--color-exam-ink) 1px, transparent 1px, transparent 32px)",
        }}
      />

      <Container className="relative mx-5 xl:mx-auto py-20 lg:py-28">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="slip-mono text-xs text-stamp-red tracking-[0.2em] uppercase">
            File Registration — Form A1
          </span>
          <h1 className="font-slip-display font-bold text-exam-ink text-[42px] leading-[1.08] sm:text-6xl mt-4">
            Apply Now
          </h1>
          <p className="font-body text-slip-mist text-lg max-w-xl mx-auto mt-5">
            Two minutes to open your file. Free, and reviewed by hand — no forms lost,
            no follow-up missed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto"
        >
          <ApplyForm />
        </motion.div>
      </Container>
    </section>
  );
}
