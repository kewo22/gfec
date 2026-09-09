import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import FlipValue from "./flip-value";

const FILE_SUMMARY = [
  { label: "Countries covered", value: "14" },
  { label: "University partners", value: "600+" },
  { label: "Courses available", value: "150+" },
  { label: "Students guided", value: "30+" },
];

export function ResultSeal({
  className = "w-[168px] h-[168px]",
  ringText = "GFEC · COLOMBO · EST. 2021 · VERIFIED FILE ·",
  centerLine1 = "APPROVED",
  centerLine2 = "FOR STUDY ABROAD",
  pathId = "seal-ring-path",
}: {
  className?: string;
  ringText?: string;
  centerLine1?: string;
  centerLine2?: string;
  pathId?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`-rotate-[9deg] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="var(--color-stamp-red)" strokeWidth="2.5" opacity="0.9" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-stamp-red)" strokeWidth="1.5" opacity="0.75" />
      <text fill="var(--color-stamp-red)" fontFamily="var(--font-slip-display)" fontSize="11.5" letterSpacing="3" opacity="0.95">
        <textPath href={`#${pathId}`} startOffset="2%">
          {ringText}
        </textPath>
      </text>
      <circle cx="100" cy="100" r="46" fill="none" stroke="var(--color-stamp-red)" strokeWidth="2" opacity="0.9" />
      <text
        x="100"
        y="98"
        textAnchor="middle"
        fill="var(--color-stamp-red)"
        fontFamily="var(--font-slip-display)"
        fontWeight="700"
        fontSize="21"
        letterSpacing="1"
      >
        {centerLine1}
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="var(--color-stamp-red)"
        fontFamily="var(--font-slip-display)"
        fontSize="10"
        letterSpacing="2"
        opacity="0.85"
      >
        {centerLine2}
      </text>
    </svg>
  );
}

export default function HeroResultSlip() {
  return (
    <section className="relative w-full bg-gazette overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-24 flex flex-col lg:flex-row items-center gap-14">
        <div className="relative w-full lg:w-[56%]">
          <div className="mb-6 lg:hidden">
            <ResultSeal className="w-[88px] h-[88px]" />
          </div>
          <div className="hidden lg:block absolute -top-10 right-0 z-10">
            <ResultSeal />
          </div>

          <h1 className="font-slip-display font-bold text-exam-ink text-[38px] leading-[1.12] sm:text-[52px] lg:text-[62px] tracking-tight lg:max-w-2xl lg:pr-40">
            You. Qualified. Approved.
          </h1>

          <p className="font-body text-slip-mist text-lg lg:text-xl mt-6 max-w-xl leading-relaxed">
            GFEC has personally guided Sri Lankan students from program selection to visa
            approval since 2021. Your file is reviewed by hand, verified against real
            university partners, and carried through to departure.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              href="/contact#get-in-touch-container"
              className="group relative overflow-hidden bg-stamp-red text-slip-surface font-slip-display font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-sm flex items-center gap-2 transition-transform active:scale-[0.97]"
            >
              Register Your File
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/study-abroad"
              className="group font-slip-display font-bold text-exam-ink text-sm tracking-wide uppercase px-1 py-4 flex items-center gap-2 border-b-2 border-exam-ink/25 hover:border-exam-green transition-colors"
            >
              Browse the Register
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[40%] lg:ml-auto">
          <div className="bg-slip-surface border border-slip-rule rounded-sm p-7 lg:p-8 shadow-[var(--shadow-slip-card)]">
            <p className="font-slip-display font-bold text-exam-ink text-sm uppercase tracking-wide">
              Student File — Summary
            </p>
            <p className="font-body text-slip-mist text-sm mt-1 mb-5">
              Verified totals, updated as our practice grows.
            </p>

            <div className="slip-register">
              {FILE_SUMMARY.map((row, i) => (
                <div key={row.label} className="flex items-center gap-3 py-3">
                  <span className="slip-mono text-xs text-slip-mist w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm text-exam-ink/85 flex-1">{row.label}</span>
                  <span className="slip-mono text-exam-green font-bold text-base">
                    <FlipValue value={row.value} delayMs={i * 120} />
                  </span>
                  <span className="flex items-center gap-1 text-exam-green shrink-0">
                    <Check size={14} strokeWidth={3} />
                    <span className="slip-mono text-[10px] tracking-wider">PASS</span>
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-slip-display font-bold text-xs uppercase tracking-wide text-exam-green hover:text-exam-green-deep transition-colors"
            >
              More about GFEC
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <div className="slip-rule" />
    </section>
  );
}
