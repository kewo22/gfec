"use client";

import { Compass, Globe2, HeartHandshake, ShieldCheck, Wallet, PlaneTakeoff } from "lucide-react";
import { useInView } from "react-intersection-observer";

import ContainerNew from "./layouts/container-new";

const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_CAP = 6;

const HIGHLIGHTS = [
  {
    icon: Compass,
    title: "Personalized Guidance",
    description:
      "Every student's file is handled one-to-one — your goals, budget, and grades shape the plan, not a generic checklist.",
    featured: true,
  },
  {
    icon: Globe2,
    title: "Global University Network",
    description: "Direct working relationships with partner universities across 10 countries.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    description: "From program selection to the day you land — one consultant, start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Assistance",
    description: "Documentation, interviews, and applications guided step by step.",
  },
  {
    icon: Wallet,
    title: "Financial Guidance",
    description: "Honest advice on budgeting and affordability for your family.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Support",
    description: "Practical briefings so nothing about departure day catches you off guard.",
  },
];

const CARD_HOVER =
  "group transition-all duration-300 hover:-translate-y-1 hover:border-exam-gold/50 hover:shadow-[0_16px_36px_-16px_rgba(201,151,46,0.35)]";

export default function WhyGfec() {
  const [featured, ...rest] = HIGHLIGHTS;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-exam-ink py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
            More than admissions. Every file gets a personal verdict.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className={`reveal-card ${inView ? "reveal-card-in" : ""} lg:col-span-1 lg:row-span-2 bg-gazette/[0.07] border border-gazette/10 rounded-sm p-8 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[420px] ${CARD_HOVER}`}
          >
            <div className="flex items-start justify-between">
              <featured.icon
                size={36}
                strokeWidth={1.5}
                className="text-exam-gold transition-transform duration-300 group-hover:scale-110"
              />
              <span className="slip-mono text-[10px] text-gazette/35">01</span>
            </div>
            <div>
              <h3 className="font-slip-display font-bold text-gazette text-2xl mb-3">{featured.title}</h3>
              <p className="font-body text-gazette/65 leading-relaxed">{featured.description}</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((item, i) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${Math.min(i + 1, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS}ms` }}
                className={`reveal-card ${inView ? "reveal-card-in" : ""} bg-gazette/5 border border-gazette/10 rounded-sm p-7 flex flex-col gap-4 ${CARD_HOVER}`}
              >
                <div className="flex items-start justify-between">
                  <item.icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-exam-gold transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="slip-mono text-[10px] text-gazette/35">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-slip-display font-bold text-gazette text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-gazette/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerNew>
    </section>
  );
}
