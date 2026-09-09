"use client";

import Link from "next/link";
import { Compass, HeartHandshake, ShieldCheck, Telescope, Target, Check, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import ContainerNew from "./layouts/container-new";
import Breadcrumbs from "./breadcrumbs";
import { ResultSeal } from "./hero-result-slip";
import FlipValue from "./flip-value";
import AboutTimeline from "./about-timeline";
import AboutUniversities from "./about-universities";
import AboutTeam from "./about-team";

const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_CAP = 6;

const STATS = [
  { value: "14", label: "Countries" },
  { value: "600+", label: "University partners" },
  { value: "150+", label: "Courses" },
  { value: "30+", label: "Students guided" },
];

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:border-exam-green-bright/50 hover:shadow-[0_16px_36px_-16px_rgba(71,181,121,0.35)]";

const COMMITMENTS = [
  {
    icon: Telescope,
    label: "Our vision",
    statement:
      "To be the most trusted name in international education consultation in Sri Lanka — the practice families recommend to each other.",
  },
  {
    icon: Target,
    label: "Our mission",
    statement:
      "To give every student accurate information, professional service, and a straight path to enrollment, handled by one consultant from first meeting to departure.",
  },
];

const PILLARS = [
  {
    icon: Compass,
    title: "Personalized Guidance",
    description:
      "Your file is built around your goals, budget, and grades — not a generic checklist we run every student through.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Support",
    description:
      "One consultant carries your file end to end: university selection, applications, financial guidance, and visa processing.",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Commitment",
    description:
      "We stay on your file until you land — with the same consultant, the same standard of service, from day one to departure.",
  },
];

const WHY_CHOOSE = [
  "Clear guidance instead of guesswork",
  "One consultant who knows your file — not a call centre",
  "Honest answers about what's realistic for your goals and budget",
];

function RevealGroup({
  children,
  className = "",
  threshold = 0.15,
}: {
  children: (inView: boolean) => React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  return (
    <div ref={ref} className={className}>
      {children(inView)}
    </div>
  );
}

export default function AboutContent() {
  return (
    <div className="bg-gazette">
      <section className="relative w-full bg-gazette overflow-hidden">
        <ContainerNew className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="text-exam-ink">
            <Breadcrumbs items={[{ label: "About GFEC" }]} />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8 lg:mt-12">
            <div>
              <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">About GFEC</p>
              <h1 className="font-slip-display font-bold text-exam-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] max-w-3xl">
                Helping Sri Lankan students build global futures.
              </h1>
            </div>
            <div className="hidden lg:block shrink-0">
              <ResultSeal
                className="w-[140px] h-[140px]"
                ringText="GFEC · COLOMBO · ABOUT OUR PRACTICE ·"
                centerLine1="REGISTERED"
                centerLine2="EST. 2021"
                pathId="about-seal-ring"
              />
            </div>
          </div>
        </ContainerNew>
        <div className="slip-rule" />
      </section>

      <section className="bg-gazette py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Our story</p>
              <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-5">
                A leading visa &amp; immigration consultancy
              </h2>
              <p className="font-body text-slip-mist leading-relaxed mb-4">
                We believe access to quality education is a fundamental right, and we&apos;re proud to stand
                alongside a community of organizations that share that vision.
              </p>
              <p className="font-body text-slip-mist leading-relaxed mb-4">
                Studying overseas can be daunting — the options, the paperwork, the uncertainty. As a leading
                overseas education consultancy in Sri Lanka, we exist to cut through that and give students a
                clear, reliable path to the university that actually fits them.
              </p>
              <p className="font-body text-slip-mist leading-relaxed">
                At GFEC, that&apos;s the whole practice: a passion for education, and a commitment to making sure
                every student gets a real shot at their goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-exam-ink/10 rounded-sm overflow-hidden border border-exam-ink/10">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-exam-ink px-6 py-8 flex flex-col items-center justify-center text-center gap-2"
                >
                  <span className="slip-mono text-[10px] text-gazette/40">{String(i + 1).padStart(2, "0")}</span>
                  <FlipValue
                    value={stat.value}
                    delayMs={i * 100}
                    className="slip-mono text-exam-green-bright font-bold text-4xl sm:text-5xl"
                  />
                  <p className="font-body text-gazette/60 text-sm">{stat.label}</p>
                  <span className="flex items-center gap-1 text-exam-green-bright">
                    <Check size={12} strokeWidth={3} />
                    <span className="slip-mono text-[9px] tracking-wider">PASS</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ContainerNew>
      </section>

      <AboutTimeline />

      <section className="bg-exam-ink py-20 lg:py-28">
        <ContainerNew className="px-5 lg:px-12">
          <div className="max-w-2xl mb-14">
            <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wider mb-3">
              Our commitments
            </p>
            <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
              Two statements. One standard we hold ourselves to.
            </h2>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" threshold={0.2}>
            {(inView) =>
              COMMITMENTS.map((item, i) => (
                <div
                  key={item.label}
                  style={{ transitionDelay: `${i * REVEAL_STAGGER_MS}ms` }}
                  className={`reveal-card ${inView ? "reveal-card-in" : ""} bg-gazette/5 border border-gazette/10 rounded-sm p-8 lg:p-10`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <item.icon size={32} strokeWidth={1.5} className="text-exam-green-bright" />
                    <span className="slip-mono text-[10px] text-gazette/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wide mb-3">
                    {item.label}
                  </p>
                  <p className="font-slip-display font-bold text-gazette text-xl lg:text-2xl leading-snug">
                    {item.statement}
                  </p>
                </div>
              ))
            }
          </RevealGroup>
        </ContainerNew>
      </section>

      <section className="bg-gazette py-20 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Our approach</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-2xl lg:text-3xl mb-10 max-w-xl">
            Three pillars behind every student file we handle.
          </h2>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {(inView) =>
              PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  style={{ transitionDelay: `${Math.min(i, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS}ms` }}
                  className={`reveal-card ${inView ? "reveal-card-in" : ""} bg-slip-surface border border-slip-rule rounded-sm p-8 ${CARD_HOVER}`}
                >
                  <span className="slip-mono text-exam-ink/30 text-xs block mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <pillar.icon size={30} className="text-exam-green-bright mb-4" strokeWidth={1.5} />
                  <h3 className="font-slip-display font-bold text-exam-ink text-lg mb-3">{pillar.title}</h3>
                  <p className="font-body text-slip-mist text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))
            }
          </RevealGroup>
        </ContainerNew>
      </section>

      <AboutUniversities />

      <AboutTeam />

      <section className="bg-exam-ink py-20 lg:py-28">
        <ContainerNew className="px-5 lg:px-12">
          <div className="max-w-2xl mb-10">
            <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wider mb-3">
              Why students choose GFEC
            </p>
            <h2 className="font-slip-display font-bold text-gazette text-2xl lg:text-3xl mb-5">
              Clarity and confidence, from a consultant who knows your file.
            </h2>
            <p className="font-body text-gazette/60 leading-relaxed">
              Choosing to study abroad is one of the biggest decisions a student and their family will make. We
              exist to make that decision less overwhelming.
            </p>
          </div>

          <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10" threshold={0.2}>
            {(inView) =>
              WHY_CHOOSE.map((point, i) => (
                <div
                  key={point}
                  style={{ transitionDelay: `${i * REVEAL_STAGGER_MS}ms` }}
                  className={`reveal-card ${inView ? "reveal-card-in" : ""} flex items-start gap-3 bg-gazette/5 border border-gazette/10 rounded-sm p-6`}
                >
                  <Check size={16} strokeWidth={3} className="text-exam-green-bright shrink-0 mt-0.5" />
                  <p className="font-body text-gazette/85 text-sm leading-relaxed">{point}</p>
                </div>
              ))
            }
          </RevealGroup>

          <p className="font-body text-gazette/60 leading-relaxed max-w-2xl">
            That&apos;s the confidence we aim to give every student who walks through our door.
          </p>
        </ContainerNew>
      </section>

      <section className="bg-exam-ink relative">
        <div className="slip-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20 text-center">
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to start your international education journey?
          </h2>
          <Link
            href="/contact#get-in-touch-container"
            className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm inline-flex items-center gap-2 transition-transform active:scale-[0.97]"
          >
            Book a Free Consultation
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
