"use client";

import React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

import { University } from "../_types/country";

export type UniversityPartnerItemProps = {
  universities: University[];
  countryFilter: string;
};

function UniversityCard({ university, index }: { university: University; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.03, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group bg-gazette border border-slip-rule rounded-sm overflow-hidden flex flex-col shadow-[var(--shadow-slip-card)]"
    >
      <div className="relative h-56 overflow-hidden bg-exam-ink">
        <Image src={university.logo} alt={university.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-exam-ink/90 via-exam-ink/15 to-transparent" />

        <div className="absolute top-3 right-3 w-20 h-20 rounded-full border-2 border-stamp-red bg-exam-ink/70 flex items-center justify-center rotate-[9deg] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out group-hover:rotate-[14deg] group-hover:scale-105">
          <span className="slip-mono text-stamp-red text-[9px] uppercase tracking-wider text-center leading-tight px-2">
            {university.ranking}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 -rotate-12 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[-8deg] pointer-events-none">
          <div className="w-20 h-20 rounded-full border-2 border-exam-gold/85 flex items-center justify-center bg-exam-ink/50">
            <span className="slip-mono text-exam-gold text-[9px] uppercase tracking-wider text-center leading-tight">
              Verified
              <br />
              Partner
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1" style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-slip-display font-bold text-exam-ink text-xl mb-3 line-clamp-2" title={university.name}>
          {university.name}
        </h3>

        <div className="flex items-center gap-2 text-slip-mist text-sm mb-1.5">
          <MapPin size={14} className="text-exam-navy shrink-0" />
          <span>{university.country}</span>
        </div>
        <div className="flex items-center gap-2 text-slip-mist text-sm mb-4">
          <CalendarDays size={14} className="text-exam-navy shrink-0" />
          <span className="slip-mono">Est. {university.established}</span>
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {university.programs.slice(0, 2).map((program) => (
            <span key={program} className="bg-exam-navy/10 text-exam-navy-deep px-2 py-1 rounded-sm text-xs font-medium">
              {program}
            </span>
          ))}
          {university.programs.length > 2 && (
            <span className="bg-slip-rule/40 text-slip-mist px-2 py-1 rounded-sm text-xs font-medium">
              +{university.programs.length - 2} more
            </span>
          )}
        </div>

        <button
          type="button"
          className="mt-auto w-full flex items-center justify-center gap-1.5 border border-exam-ink/25 rounded-sm py-2.5 font-slip-display font-bold text-xs uppercase tracking-wide text-exam-ink transition-colors duration-300 group-hover:bg-exam-ink group-hover:text-gazette group-hover:border-exam-ink"
        >
          View File
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

const UniversityPartnerItem = (props: UniversityPartnerItemProps) => {
  const { universities } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
      <AnimatePresence mode="popLayout">
        {universities.map((university, i) => (
          <UniversityCard key={university.id} university={university} index={i} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default UniversityPartnerItem;
