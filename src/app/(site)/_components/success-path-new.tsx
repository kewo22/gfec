"use client";

import { useRouter } from "next/navigation";

import ContainerNew from "./layouts/container-new";
import ParticleButton from "@/app/_components/ui/particle-btn";

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

export default function SuccessPathNew() {
  const router = useRouter();

  const onStartJourneyClick = () => {
    router.push("/apply-now");
  };

  return (
    <section className="bg-paper py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Student journey</p>
          <h2 className="font-display font-bold text-navy text-3xl lg:text-[44px] leading-[1.1]">
            Six steps, one consultant, start to finish.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-[2px] bg-hairline">
            <div className="stitch-rule" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {STEPS.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-start">
                <div className="relative z-10 w-11 h-11 rounded-full bg-navy text-paper font-display font-bold text-sm flex items-center justify-center mb-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{step.label}</h3>
                <p className="font-body text-mist text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <ParticleButton size="md" customClass="capitalize font-bold tracking-wider" onClick={onStartJourneyClick}>
            Start your journey today
          </ParticleButton>
        </div>
      </ContainerNew>
    </section>
  );
}
