import { Check } from "lucide-react";

import ContainerNew from "./layouts/container-new";
import FlipValue from "./flip-value";

const STATS = [
  { value: "14", label: "Countries" },
  { value: "600+", label: "University partners" },
  { value: "150+", label: "Courses" },
  { value: "30+", label: "Students guided" },
];

export default function SummaryCounterGroup() {
  return (
    <section className="bg-exam-ink py-16 lg:py-20">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-12 xl:gap-20">
          <div className="w-full xl:w-[420px] shrink-0 text-center xl:text-left">
            <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-4xl leading-tight mb-4">
              Verified since 2021 — trusted visa &amp; admissions guidance for Sri Lankan
              students.
            </h2>
            <p className="font-body text-gazette/65 leading-relaxed">
              We understand that the prospect of higher education can be daunting, but with our
              help, you can confidently navigate the college and university landscape. Our
              counselors have years of experience helping students identify the right path
              forward.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gazette/10 flex-1 rounded-sm overflow-hidden">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-exam-ink px-6 py-8 flex flex-col items-center justify-center text-center gap-2"
              >
                <span className="slip-mono text-[10px] text-gazette/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
  );
}
