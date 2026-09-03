import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { COUNTRIES } from "../_constants/countries.constants";
import ContainerNew from "../_components/layouts/container-new";
import Breadcrumbs from "../_components/breadcrumbs";

export const metadata: Metadata = {
  title: "Study Abroad from Sri Lanka",
  description:
    "Explore study destinations across 10 countries — Australia, the UK, Ireland, Germany, France, Spain, the UAE, Malta, Singapore, and South Korea — with GFEC's guidance every step of the way.",
  alternates: { canonical: "https://gfeconsultancy.com/study-abroad" },
};

export default function StudyAbroad() {
  return (
    <div className="bg-paper">
      <section className="relative w-full min-h-[380px] flex items-end overflow-hidden bg-navy-deep">
        <Image
          src={COUNTRIES[0].image}
          alt="Study abroad destinations"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/50" />

        <ContainerNew className="relative z-10 px-5 lg:px-12 pb-12 pt-28 text-paper">
          <Breadcrumbs items={[{ label: "Study Abroad" }]} />
          <p className="ledger-ref text-gold text-xs uppercase mt-6 mb-3">Study destinations</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
            Choose where your future takes you.
          </h1>
          <p className="font-body text-paper/75 text-lg mt-5 max-w-xl">
            Ten countries, real partner universities, and one consultant guiding you through every option.
          </p>
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <Link
                key={country.id}
                href={`/study-abroad/${country.route}`}
                className="group relative aspect-[4/5] rounded-sm overflow-hidden"
              >
                <Image
                  src={country.image}
                  alt={country.country}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <Image src={country.flag} alt="" width={22} height={16} className="rounded-[2px] shadow" />
                  <span className="ledger-ref text-paper/80 text-[11px] uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="font-display font-bold text-paper text-2xl mb-2">{country.country}</h2>
                  <p className="font-body text-paper/75 text-sm leading-relaxed line-clamp-2 mb-4">
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

      <section className="bg-navy py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12 text-center">
          <p className="ledger-ref text-gold text-xs uppercase mb-4">Not sure yet?</p>
          <h2 className="font-display font-bold text-paper text-3xl lg:text-4xl max-w-2xl mx-auto mb-4">
            Not sure which country is right for you?
          </h2>
          <p className="font-body text-paper/70 max-w-xl mx-auto mb-8">
            Our consultants can help you compare destinations based on your education goals, career plans, and
            personal preferences.
          </p>
          <Link
            href="/contact#get-in-touch-container"
            className="group inline-flex items-center gap-2 bg-gold text-navy-deep font-display font-semibold text-base px-8 py-4 rounded-sm"
          >
            Talk to a consultant
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
