"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, PlaneTakeoff } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";

import ContainerNew from "./layouts/container-new";

const STEPS = [
  {
    label: "Discover",
    description: "Tell us your goals, budget, and grades — we map out which countries and universities genuinely fit.",
  },
  {
    label: "Choose",
    description: "Compare real partner universities and programs side by side, with an advisor guiding the shortlist.",
  },
  {
    label: "Apply",
    description: "We prepare and submit your application and documentation, and track admissions with you.",
  },
  {
    label: "Visa",
    description: "Full documentation and interview support through your student visa application.",
  },
  {
    label: "Prepare",
    description: "A pre-departure briefing covering accommodation, travel, and what to expect on arrival.",
  },
  {
    label: "Fly",
    description: "You depart with a plan in hand — and a consultant you can still call.",
  },
];

function StepRow({
  step,
  index,
  progress,
  reduceMotion,
}: {
  step: (typeof STEPS)[number];
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const activateAt = index / (STEPS.length - 1);
  const windowStart = Math.max(0, activateAt - 0.09);
  const windowEnd = Math.min(1, activateAt + 0.02);

  const rawScale = useTransform(progress, [windowStart, windowEnd], [0.5, 1]);
  const rawRotate = useTransform(progress, [windowStart, windowEnd], [-16, 0]);
  const opacity = useTransform(progress, [windowStart, windowEnd], [0, 1]);
  const stampScale = useSpring(rawScale, { stiffness: 420, damping: 16 });
  const stampRotate = useSpring(rawRotate, { stiffness: 420, damping: 18 });

  const ringColor = useTransform(progress, [windowStart, windowEnd], ["var(--color-slip-rule)", "var(--color-stamp-red)"]);
  const textColor = useTransform(progress, [windowStart, windowEnd], ["var(--color-slip-mist)", "var(--color-gazette)"]);

  return (
    <div className="relative flex items-start gap-5 lg:gap-7">
      <motion.div
        style={{
          scale: reduceMotion ? 1 : stampScale,
          rotate: reduceMotion ? 0 : stampRotate,
          opacity,
          borderColor: ringColor,
        }}
        className="relative z-10 shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-exam-ink border-2 flex items-center justify-center"
      >
        <motion.span
          style={{ color: textColor }}
          className="slip-mono font-bold text-sm lg:text-base"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="pt-1 lg:pt-2 pb-10 lg:pb-14"
      >
        <h3 className="font-slip-display font-bold text-exam-ink text-lg lg:text-xl mb-1.5">{step.label}</h3>
        <p className="font-body text-slip-mist text-sm lg:text-base leading-relaxed max-w-md">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function SuccessPathNew() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const fillProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 40 });
  const fillScaleY = reduceMotion ? 1 : fillProgress;
  const planeTop = useTransform(fillProgress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(fillProgress, [0, 0.02, 0.96, 1], [0, 1, 1, 0]);

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Student journey</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            Six steps, one consultant, start to finish.
          </h2>
        </div>

        <div ref={trackRef} className="relative max-w-2xl">
          <div className="absolute top-0 bottom-0 left-[23px] lg:left-[27px] w-[2px] bg-exam-ink/10" aria-hidden="true" />
          <motion.div
            style={{ scaleY: fillScaleY }}
            className="absolute top-0 bottom-0 left-[23px] lg:left-[27px] w-[2px] bg-exam-green origin-top"
            aria-hidden="true"
          />
          {!reduceMotion && (
            <motion.div
              style={{ top: planeTop, opacity: planeOpacity }}
              className="absolute left-[23px] lg:left-[27px] -translate-x-1/2 -translate-y-1/2 text-exam-green-bright"
              aria-hidden="true"
            >
              <PlaneTakeoff size={14} className="rotate-90" />
            </motion.div>
          )}

          {STEPS.map((step, i) => (
            <StepRow key={step.label} step={step} index={i} progress={fillProgress} reduceMotion={reduceMotion} />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <Link
            href="/apply-now"
            className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97]"
          >
            Start your journey today
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </ContainerNew>
    </section>
  );
}
