"use client";

import { UserRound } from "lucide-react";
import { useInView } from "react-intersection-observer";

import ContainerNew from "./layouts/container-new";

const REVEAL_STAGGER_MS = 70;

// Role-only placeholders — no real staff names or photos were provided, so
// this deliberately avoids inventing people. Swap in real bios and photos
// whenever they're ready; the layout is built to take them as-is.
const ROLES = [
  { title: "Founder & Principal Consultant" },
  { title: "Head of Admissions" },
  { title: "Visa & Immigration Lead" },
  { title: "Student Success Manager" },
];

export default function AboutTeam() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <p className="slip-mono text-exam-green text-xs uppercase tracking-wider mb-3">Team members</p>
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            The consultants behind your file.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ROLES.map((role, i) => (
            <div
              key={role.title}
              style={{ transitionDelay: `${i * REVEAL_STAGGER_MS}ms` }}
              className={`reveal-card ${inView ? "reveal-card-in" : ""} group bg-slip-surface border border-slip-rule rounded-sm p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-exam-green-bright/50 hover:shadow-[0_16px_36px_-16px_rgba(71,181,121,0.35)]`}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-exam-ink flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <UserRound size={26} strokeWidth={1.5} className="text-exam-green-bright" />
              </div>
              <h3 className="font-slip-display font-bold text-exam-ink text-sm leading-snug">{role.title}</h3>
            </div>
          ))}
        </div>
      </ContainerNew>
    </section>
  );
}
