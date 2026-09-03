import React from "react";

import ContainerNew from "./layouts/container-new";
import SummaryCounter from "./summary-counter";

const STATS = [
  { max: 14, suffix: false, label: "Countries" },
  { max: 600, suffix: true, label: "University partners" },
  { max: 150, suffix: true, label: "Courses" },
  { max: 30, suffix: true, label: "Students guided" },
];

export default function SummaryCounterGroup() {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-12 xl:gap-20">
          <div className="w-full xl:w-[420px] shrink-0 text-center xl:text-left">
            <p className="ledger-ref text-gold text-xs uppercase mb-4">Est. 2021 — Colombo, Sri Lanka</p>
            <h2 className="font-display font-bold text-paper text-3xl lg:text-4xl leading-tight mb-4">
              Providing trusted visa &amp; admissions guidance since 2021
            </h2>
            <p className="font-body text-paper/70 leading-relaxed">
              We understand that the prospect of higher education can be daunting, but with our
              help, you can confidently navigate the college and university landscape. Our
              counselors have years of experience helping students identify the right path
              forward.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15 flex-1 rounded-sm overflow-hidden">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-navy px-6 py-8 flex flex-col items-center justify-center text-center">
                <SummaryCounter
                  maxCount={stat.max}
                  className="text-gold font-display font-bold text-4xl sm:text-5xl"
                  plusIconClassName={stat.suffix ? "text-gold font-display font-bold text-3xl sm:text-4xl" : undefined}
                />
                <p className="font-body text-paper/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerNew>
    </section>
  );
}
