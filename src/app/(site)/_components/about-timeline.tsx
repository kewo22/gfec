"use client";

import { useRef } from "react";
import { Check, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";

import ContainerNew from "./layouts/container-new";

// Placeholder milestones — no real company-history content was provided for
// this section, so these are structural stand-ins (short lorem text) ready
// to be swapped for GFEC's actual milestones later.
const MILESTONES = [
  { tag: "2021", title: "Milestone One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", done: true },
  { tag: "2022", title: "Milestone Two", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.", done: true },
  { tag: "2023", title: "Milestone Three", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", done: true },
  { tag: "2024", title: "Milestone Four", description: "Duis aute irure dolor in reprehenderit in voluptate velit.", done: true },
  { tag: "2025", title: "Milestone Five", description: "Excepteur sint occaecat cupidatat non proident sunt culpa.", done: true },
  { tag: "2026", title: "Milestone Five", description: "Excepteur sint occaecat cupidatat non proident sunt culpa.", done: false },
];

function MilestoneNode({ index, progress, done }: { index: number; progress: MotionValue<number>; done: boolean }) {
  const activateAt = index / (MILESTONES.length - 1);
  const windowStart = Math.max(0, activateAt - 0.09);
  const windowEnd = Math.min(1, activateAt + 0.02);

  const rawScale = useTransform(progress, [windowStart, windowEnd], [0.5, 1]);
  const opacity = useTransform(progress, [windowStart, windowEnd], [0, 1]);
  const scale = useSpring(rawScale, { stiffness: 420, damping: 16 });
  const ringColor = useTransform(
    progress,
    [windowStart, windowEnd],
    ["var(--color-slip-rule)", done ? "var(--color-exam-green)" : "var(--color-stamp-red)"],
  );

  return (
    <motion.div
      style={{ scale, opacity, borderColor: ringColor }}
      className="relative z-10 shrink-0 w-9 h-9 rounded-full bg-slip-surface border-2 flex items-center justify-center"
    >
      {done ? (
        <Check size={15} strokeWidth={3} className="text-exam-green" />
      ) : (
        <Clock size={14} strokeWidth={2.25} className="text-stamp-red" />
      )}
    </motion.div>
  );
}

export default function AboutTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.8", "end 0.6"] });
  const fillProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 40 });

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Milestones</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            A practice built one file at a time.
          </h2>
          <p className="font-body text-slip-mist mt-4">
            Placeholder timeline — swap these stages for GFEC&apos;s real milestones whenever you&apos;re ready.
          </p>
        </div>

        <div ref={trackRef} className="relative max-w-xl mx-auto">
          <div className="absolute top-4 bottom-4 left-[17px] w-[2px] bg-exam-ink/10" aria-hidden="true" />
          <motion.div
            style={{ scaleY: reduceMotion ? 1 : fillProgress }}
            className="absolute top-4 bottom-4 left-[17px] w-[2px] bg-exam-green origin-top"
            aria-hidden="true"
          />

          <ul className="space-y-10">
            {MILESTONES.map((milestone, i) => (
              <li key={milestone.title} className="relative flex items-start gap-5">
                <MilestoneNode index={i} progress={fillProgress} done={milestone.done} />
                <div className="pt-1">
                  <span className="slip-mono text-[10px] text-slip-mist/70 uppercase tracking-wider">
                    {milestone.tag}
                  </span>
                  <h3 className="font-slip-display font-bold text-exam-ink text-lg mt-1 mb-1.5">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-slip-mist text-sm leading-relaxed max-w-sm">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContainerNew>
    </section>
  );
}
