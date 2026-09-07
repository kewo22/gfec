import { Compass, Globe2, HeartHandshake, ShieldCheck, Wallet, PlaneTakeoff } from "lucide-react";

import ContainerNew from "./layouts/container-new";

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

export default function WhyGfec() {
  const [featured, ...rest] = HIGHLIGHTS;

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
            More than admissions. Every file gets a personal verdict.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 lg:row-span-2 bg-exam-ink rounded-sm p-8 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[420px]">
            <div className="flex items-start justify-between">
              <featured.icon size={36} className="text-exam-green-bright" strokeWidth={1.5} />
              <span className="slip-mono text-[10px] text-gazette/35">01</span>
            </div>
            <div>
              <h3 className="font-slip-display font-bold text-gazette text-2xl mb-3">{featured.title}</h3>
              <p className="font-body text-gazette/65 leading-relaxed">{featured.description}</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slip-rule rounded-sm overflow-hidden">
            {rest.map((item, i) => (
              <div key={item.title} className="bg-slip-surface p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <item.icon size={26} className="text-exam-green" strokeWidth={1.5} />
                  <span className="slip-mono text-[10px] text-slip-mist/60">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-slip-display font-bold text-exam-ink text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-slip-mist text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerNew>
    </section>
  );
}
