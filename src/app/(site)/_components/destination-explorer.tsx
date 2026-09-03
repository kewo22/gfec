import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { COUNTRIES } from "../_constants/countries.constants";
import ContainerNew from "./layouts/container-new";

export default function DestinationExplorer() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="ledger-ref text-gold text-xs uppercase mb-3">Study destinations</p>
            <h2 className="font-display font-bold text-navy text-3xl lg:text-[44px] leading-[1.1]">
              Explore your dream destination.
            </h2>
          </div>
          <Link
            href="/study-abroad"
            className="group font-display font-semibold text-royal hover:text-navy text-base flex items-center gap-1.5 shrink-0"
          >
            View all destinations
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none">
          {COUNTRIES.map((country) => (
            <Link
              key={country.id}
              href={`/study-abroad/${country.route}`}
              className="group relative shrink-0 w-[78vw] sm:w-[340px] lg:w-auto aspect-[3/4] rounded-sm overflow-hidden snap-start"
            >
              <Image
                src={country.image}
                alt={country.country}
                fill
                sizes="(max-width: 1024px) 78vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent" />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/20 transition-colors duration-500" />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <Image src={country.flag} alt="" width={22} height={16} className="rounded-[2px] shadow" />
                <span className="ledger-ref text-paper/80 text-[11px] uppercase">{String(COUNTRIES.indexOf(country) + 1).padStart(2, "0")}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display font-bold text-paper text-2xl mb-2">{country.country}</h3>
                <p className="font-body text-paper/75 text-sm leading-relaxed line-clamp-2 mb-4 max-w-[90%]">
                  {country.description}
                </p>
                <span className="inline-flex items-center gap-1.5 font-display font-semibold text-gold text-sm">
                  Explore
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </ContainerNew>
    </section>
  );
}
