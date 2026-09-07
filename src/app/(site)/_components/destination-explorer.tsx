"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { COUNTRIES } from "../_constants/countries.constants";
import ContainerNew from "./layouts/container-new";
import FlipValue from "./flip-value";

const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_CAP = 6;

export default function DestinationExplorer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
              Ten countries. One register.
            </h2>
          </div>
          <Link
            href="/study-abroad"
            className="group font-slip-display font-bold text-exam-green hover:text-exam-green-deep text-sm uppercase tracking-wide flex items-center gap-1.5 shrink-0"
          >
            View all destinations
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div
          ref={ref}
          className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none"
        >
          {COUNTRIES.map((country, i) => {
            const delay = Math.min(i, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS;
            return (
              <Link
                key={country.id}
                href={`/study-abroad/${country.route}`}
                style={{ transitionDelay: `${delay}ms` }}
                className={`dest-card ${inView ? "dest-card-in" : ""} group relative shrink-0 w-[78vw] sm:w-[340px] lg:w-auto aspect-[3/4] rounded-sm overflow-hidden snap-start border border-transparent transition-colors duration-300 hover:border-exam-green-bright/60`}
              >
                <Image
                  src={country.image}
                  alt={country.country}
                  fill
                  sizes="(max-width: 1024px) 78vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-exam-ink via-exam-ink/25 to-transparent" />
                <div className="absolute inset-0 bg-exam-ink/0 group-hover:bg-exam-ink/20 transition-colors duration-500" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <Image src={country.flag} alt="" width={22} height={16} className="rounded-[2px] shadow" />
                  <FlipValue
                    value={String(i + 1).padStart(2, "0")}
                    delayMs={delay + 300}
                    className="slip-mono text-gazette/85 text-[11px] uppercase"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-slip-display font-bold text-gazette text-2xl mb-2">{country.country}</h3>
                  <p className="font-body text-gazette/75 text-sm leading-relaxed line-clamp-2 mb-4 max-w-[90%]">
                    {country.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-slip-display font-bold text-exam-green-bright text-sm uppercase tracking-wide">
                    Explore
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </ContainerNew>
    </section>
  );
}
