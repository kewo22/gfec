import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, ShieldAlert } from "lucide-react";

import { Country, University } from "../_types/country";
import { DestinationContent } from "../_constants/destination-content.constants";
import { COUNTRIES } from "../_constants/countries.constants";
import Breadcrumbs from "./breadcrumbs";
import UniversityPartnerItem from "./uni-item";
import ContainerNew from "./layouts/container-new";
import DestinationFaq from "./destination-faq";

type DestinationTemplateProps = {
  country: Country;
  content: DestinationContent;
  universities: University[];
};

export default function DestinationTemplate({ country, content, universities }: DestinationTemplateProps) {
  const establishedYears = universities.map((u) => parseInt(u.established, 10)).filter((n) => !Number.isNaN(n));
  const oldestYear = establishedYears.length ? Math.min(...establishedYears) : null;
  const popularPrograms = Array.from(new Set(universities.flatMap((u) => u.programs))).slice(0, 6);

  const otherDestinations = COUNTRIES.filter((c) => c.id !== country.id).slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative w-full min-h-[420px] flex items-end overflow-hidden bg-navy-deep">
        <Image src={country.image} alt={`Study in ${country.country}`} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/35" />

        <ContainerNew className="relative z-10 px-5 lg:px-12 pb-10 pt-28 text-paper">
          <Breadcrumbs items={[{ label: "Study Abroad", href: "/study-abroad" }, { label: country.country }]} />
          <div className="flex items-center gap-3 mt-6 mb-4">
            <Image src={country.flag} alt="" width={32} height={22} className="rounded-[2px] shadow" />
            <span className="ledger-ref text-gold text-xs uppercase">Destination file — {country.country}</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Study in {country.country}
          </h1>
          <a
            href="#universities"
            className="group inline-flex items-center gap-2 bg-gold text-navy-deep font-display font-semibold text-sm px-6 py-3.5 rounded-sm mt-8"
          >
            Explore {country.country} universities
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image src={country.image} alt={country.country} fill className="object-cover" />
            </div>
            <div>
              <p className="ledger-ref text-gold text-xs uppercase mb-3">Country overview</p>
              <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-5">
                Why study in {country.country} from Sri Lanka?
              </h2>
              {content.intro.map((paragraph, i) => (
                <p key={i} className="font-body text-ink/80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {(universities.length > 0 || popularPrograms.length > 0) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-hairline rounded-sm overflow-hidden mt-14">
              <div className="bg-surface p-6 flex flex-col items-center text-center gap-2">
                <GraduationCap size={22} className="text-gold" />
                <span className="font-display font-bold text-navy text-2xl">{universities.length}</span>
                <span className="font-body text-mist text-sm">Partner universities</span>
              </div>
              <div className="bg-surface p-6 flex flex-col items-center text-center gap-2">
                <BookOpen size={22} className="text-gold" />
                <span className="font-display font-bold text-navy text-2xl">{popularPrograms.length}+</span>
                <span className="font-body text-mist text-sm">Popular study areas</span>
              </div>
              {oldestYear && (
                <div className="bg-surface p-6 flex flex-col items-center text-center gap-2 col-span-2 sm:col-span-1">
                  <span className="ledger-ref text-gold text-2xl font-bold">Est. {oldestYear}</span>
                  <span className="font-body text-mist text-sm">Oldest partner institution</span>
                </div>
              )}
            </div>
          )}
        </ContainerNew>
      </section>

      <section id="universities" className="bg-surface py-16 lg:py-20 scroll-mt-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Universities</p>
          <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-10">
            {country.country} universities GFEC works with
          </h2>
          {universities.length > 0 ? (
            <UniversityPartnerItem universities={universities} countryFilter={country.id} />
          ) : (
            <p className="font-body text-mist">
              We&apos;re expanding our partner network in {country.country} — talk to a consultant for the latest options.
            </p>
          )}
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Why choose {country.country}?</p>
          <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-10 max-w-2xl">
            Benefits worth weighing before you apply.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-hairline">
            {content.benefits.map((benefit, i) => (
              <div key={benefit.title} className="border-r border-b border-hairline p-7">
                <span className="ledger-ref text-gold text-sm block mb-4">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-semibold text-navy text-base mb-2">{benefit.title}</h3>
                <p className="font-body text-mist text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 mt-8 p-5 bg-paper-warm rounded-sm border border-hairline max-w-3xl">
            <ShieldAlert size={18} className="text-caution shrink-0 mt-0.5" />
            <p className="font-body text-ink/70 text-sm leading-relaxed">
              Visa, work-right, and permanent residency rules can change. Please verify current immigration
              requirements with official government sources — your GFEC consultant can help you check the latest
              position before you apply.
            </p>
          </div>
        </ContainerNew>
      </section>

      {content.faqs.length > 0 && (
        <section className="bg-surface py-16 lg:py-20">
          <ContainerNew className="px-5 lg:px-12 max-w-3xl">
            <p className="ledger-ref text-gold text-xs uppercase mb-3">FAQs</p>
            <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-8">
              Frequently asked questions
            </h2>
            <DestinationFaq faqs={content.faqs} />
          </ContainerNew>
        </section>
      )}

      <section className="py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Keep exploring</p>
          <h2 className="font-display font-bold text-navy text-2xl mb-8">Other destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherDestinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/study-abroad/${dest.route}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden"
              >
                <Image src={dest.image} alt={dest.country} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                <span className="absolute bottom-4 left-4 font-display font-semibold text-paper">{dest.country}</span>
              </Link>
            ))}
          </div>
        </ContainerNew>
      </section>

      <section className="bg-navy-deep relative">
        <div className="stitch-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20 text-center">
          <h2 className="font-display font-bold text-paper text-3xl lg:text-4xl mb-4">
            Thinking about studying in {country.country}?
          </h2>
          <p className="font-body text-paper/70 mb-8 max-w-xl mx-auto">
            Talk to a GFEC consultant about your options, costs, and next steps.
          </p>
          <Link
            href="/contact#get-in-touch-container"
            className="group inline-flex items-center gap-2 bg-gold text-navy-deep font-display font-semibold text-base px-8 py-4 rounded-sm"
          >
            Speak with a consultant
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
