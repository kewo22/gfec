"use client";

import React, { useState } from "react";

import { UNIVERSITIES } from "../_constants/countries.constants";
import UniversityPartnerItem from "./uni-item";
import ContainerNew from "./layouts/container-new";

export type UniversityPartnersGridProps = {
  countryFilter?: string;
};

const UniversityPartnersGrid = (props: UniversityPartnersGridProps) => {
  const { countryFilter = "all" } = props;

  const [filter, setFilter] = useState(countryFilter);

  const universities = [...UNIVERSITIES];

  const filters = [
    { key: "all", label: "All", count: universities.length },
    { key: "united_kingdom", label: "UK", count: universities.filter((u) => u.category === "united_kingdom").length },
    { key: "australia", label: "Australia", count: universities.filter((u) => u.category === "australia").length },
    { key: "ireland", label: "Ireland", count: universities.filter((u) => u.category === "ireland").length },
    { key: "uae", label: "UAE", count: universities.filter((u) => u.category === "uae").length },
    { key: "malta", label: "Malta", count: universities.filter((u) => u.category === "malta").length },
    { key: "germany", label: "Germany", count: universities.filter((u) => u.category === "germany").length },
    { key: "france", label: "France", count: universities.filter((u) => u.category === "france").length },
    { key: "spain", label: "Spain", count: universities.filter((u) => u.category === "spain").length },
    { key: "singapore", label: "Singapore", count: universities.filter((u) => u.category === "singapore").length },
  ].filter((f) => f.key === "all" || f.count > 0);

  const filteredUniversities =
    filter === "all" ? universities : universities.filter((university) => university.category === filter);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-10">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">University partners</p>
          <h2 className="font-display font-bold text-navy text-3xl lg:text-[44px] leading-[1.1]">
            Real universities. Direct partnerships.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-display transition-all duration-300 cursor-pointer border ${filter === filterItem.key
                ? "bg-navy text-paper border-navy"
                : "bg-transparent text-navy/70 border-hairline hover:border-navy/40"
                }`}
            >
              {filterItem.label} ({filterItem.count})
            </button>
          ))}
        </div>

        <UniversityPartnerItem universities={filteredUniversities} countryFilter={filter} />
      </ContainerNew>
    </section>
  );
};

export default UniversityPartnersGrid;
