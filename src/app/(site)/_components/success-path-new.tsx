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

function useStampMotion(progress: MotionValue<number>, index: number) {
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

  return { stampScale, stampRotate, opacity, ringColor, textColor };
}

function TravelMarker({ rotateClass }: { rotateClass?: string }) {
  return (
    <span className="relative flex items-center justify-center w-8 h-8">
      <span className="absolute inset-0 rounded-full bg-exam-green-bright/20 blur-[3px]" aria-hidden="true" />
      <span className="absolute inset-[3px] rounded-full bg-gazette" aria-hidden="true" />
      <PlaneTakeoff size={22} strokeWidth={2.25} className={`relative text-exam-green-bright drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] ${rotateClass ?? ""}`} />
    </span>
  );
}

function StepBadge({
  index,
  progress,
  reduceMotion,
  size,
}: {
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  size: string;
}) {
  const { stampScale, stampRotate, opacity, ringColor, textColor } = useStampMotion(progress, index);
  return (
    <motion.div
      style={{
        scale: reduceMotion ? 1 : stampScale,
        rotate: reduceMotion ? 0 : stampRotate,
        opacity,
        borderColor: ringColor,
      }}
      className={`relative z-10 shrink-0 ${size} rounded-full bg-exam-ink border-2 flex items-center justify-center`}
    >
      <motion.span style={{ color: textColor }} className="slip-mono font-bold text-sm lg:text-base">
        {String(index + 1).padStart(2, "0")}
      </motion.span>
    </motion.div>
  );
}

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
  return (
    <div className="relative flex items-start gap-5">
      <StepBadge index={index} progress={progress} reduceMotion={reduceMotion} size="w-12 h-12" />
      <motion.div
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="pt-1 pb-10"
      >
        <h3 className="font-slip-display font-bold text-exam-ink text-lg mb-1.5">{step.label}</h3>
        <p className="font-body text-slip-mist text-sm leading-relaxed max-w-md">{step.description}</p>
      </motion.div>
    </div>
  );
}

function StepColumn({
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
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-5">
        <StepBadge index={index} progress={progress} reduceMotion={reduceMotion} size="w-14 h-14" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      >
        <h3 className="font-slip-display font-bold text-exam-ink text-lg mb-1.5">{step.label}</h3>
        <p className="font-body text-slip-mist text-sm leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

function VerticalPath({ reduceMotion }: { reduceMotion: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.8", "end 0.55"] });
  const fillProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 40 });
  const planeTop = useTransform(fillProgress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(fillProgress, [0, 0.02, 0.96, 1], [0, 1, 1, 0]);

  return (
    <div>
      <div ref={trackRef} className="relative max-w-2xl">
        <div className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-exam-ink/10" aria-hidden="true" />
        <motion.div
          style={{ scaleY: reduceMotion ? 1 : fillProgress }}
          className="absolute top-0 bottom-0 left-[23px] w-[2px] bg-exam-green origin-top"
          aria-hidden="true"
        />
        {!reduceMotion && (
          <motion.div
            style={{ top: planeTop, opacity: planeOpacity }}
            className="absolute left-[23px] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <TravelMarker rotateClass="rotate-90" />
          </motion.div>
        )}

        {STEPS.map((step, i) => (
          <StepRow key={step.label} step={step} index={i} progress={fillProgress} reduceMotion={reduceMotion} />
        ))}
      </div>

      <div className="max-w-2xl flex justify-start mt-4">
        <JourneyCta />
      </div>
    </div>
  );
}

function HorizontalPath({ reduceMotion }: { reduceMotion: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.8", "end 0.55"] });
  const fillProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 40 });
  const planeLeft = useTransform(fillProgress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(fillProgress, [0, 0.02, 0.96, 1], [0, 1, 1, 0]);

  return (
    <div>
      <div ref={trackRef} className="relative">
        <div className="absolute top-7 left-0 right-0 h-[2px] bg-exam-ink/10" aria-hidden="true" />
        <motion.div
          style={{ scaleX: reduceMotion ? 1 : fillProgress, transformOrigin: "left" }}
          className="absolute top-7 left-0 right-0 h-[2px] bg-exam-green"
          aria-hidden="true"
        />
        {!reduceMotion && (
          <motion.div
            style={{ left: planeLeft, opacity: planeOpacity }}
            className="absolute top-7 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <TravelMarker />
          </motion.div>
        )}

        <div className="grid grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-14">
          {STEPS.map((step, i) => (
            <StepColumn key={step.label} step={step} index={i} progress={fillProgress} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <JourneyCta />
      </div>
    </div>
  );
}

function JourneyCta() {
  return (
    <Link
      href="/apply-now"
      className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97]"
    >
      Start your journey today
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export default function SuccessPathNew() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Student journey</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            Six steps, one consultant, start to finish.
          </h2>
        </div>

        <div className="lg:hidden">
          <VerticalPath reduceMotion={reduceMotion} />
        </div>
        <div className="hidden lg:block">
          <HorizontalPath reduceMotion={reduceMotion} />
        </div>
      </ContainerNew>
    </section>
  );
}
