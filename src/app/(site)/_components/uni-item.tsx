"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

import ParticleButton from "@/app/_components/ui/particle-btn";
import { University } from "../_types/country";

export type UniversityPartnerItemProps = {
  universities: University[];
  countryFilter: string;
};

const UniversityPartnerItem = (props: UniversityPartnerItemProps) => {
  const { universities, countryFilter } = props;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={false}
      key={countryFilter}
    >
      {universities.map((university) => (
        <div key={university.id} className="ledger-card rounded-sm overflow-hidden flex flex-col">
          <div className="relative h-40 overflow-hidden bg-navy">
            <Image
              src={university.logo}
              alt={university.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display font-semibold text-navy text-lg mb-3 line-clamp-2" title={university.name}>
              {university.name}
            </h3>

            <div className="flex items-center gap-2 text-mist text-sm mb-1.5">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>{university.country}</span>
            </div>
            <div className="flex items-center gap-2 text-mist text-sm mb-4">
              <CalendarDays size={14} className="text-gold shrink-0" />
              <span className="ledger-ref">Est. {university.established}</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-1.5">
              {university.programs.slice(0, 2).map((program) => (
                <span key={program} className="bg-royal/10 text-royal px-2 py-1 rounded-sm text-xs font-medium">
                  {program}
                </span>
              ))}
              {university.programs.length > 2 && (
                <span className="bg-hairline text-mist px-2 py-1 rounded-sm text-xs font-medium">
                  +{university.programs.length - 2} more
                </span>
              )}
            </div>

            <ParticleButton size="xs" customClass="mt-auto w-full capitalize">
              Learn More
            </ParticleButton>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default UniversityPartnerItem;
