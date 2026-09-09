"use client";

import Image from "next/image";

import { UNIVERSITIES } from "../_constants/countries.constants";
import ContainerNew from "./layouts/container-new";

// Split into two lanes so they can scroll opposite directions.
const LANE_A = UNIVERSITIES.filter((_, i) => i % 2 === 0);
const LANE_B = UNIVERSITIES.filter((_, i) => i % 2 === 1);

function MarqueeLane({ universities, reverse }: { universities: typeof UNIVERSITIES; reverse?: boolean }) {
  const doubled = [...universities, ...universities];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex gap-4 shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} hover:[animation-play-state:paused]`}
      >
        {doubled.map((uni, i) => (
          <div
            key={`${uni.id}-${i}`}
            className="group flex items-center gap-3 shrink-0 bg-slip-surface border border-slip-rule rounded-sm pl-3 pr-5 py-3 w-72"
          >
            <div className="relative w-11 h-11 rounded-sm overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
              <Image src={uni.logo} alt="" fill sizes="44px" className="object-cover" />
            </div>
            <div className="min-w-0">
              <p className="font-slip-display font-bold text-exam-ink text-sm leading-snug truncate">{uni.name}</p>
              <p className="slip-mono text-slip-mist text-[10px] uppercase tracking-wide truncate">{uni.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutUniversities() {
  return (
    <section className="bg-exam-ink py-20 lg:py-28 overflow-hidden">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <p className="slip-mono text-exam-green-bright text-xs uppercase tracking-wider mb-3">
            University partners
          </p>
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
            Real relationships with {UNIVERSITIES.length} partner campuses.
          </h2>
        </div>
      </ContainerNew>

      <div className="space-y-4">
        <MarqueeLane universities={LANE_A} />
        <MarqueeLane universities={LANE_B} reverse />
      </div>
    </section>
  );
}
