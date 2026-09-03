import ContainerNew from "./layouts/container-new";

const SERVICES = [
  {
    title: "Program Selection",
    description:
      "Explore a wide range of study programs tailored to your career goals and academic interests.",
  },
  {
    title: "University Selection",
    description: "Choose from top universities across the globe to find the right fit for your future.",
  },
  {
    title: "Offers & Admissions",
    description: "Get access to exclusive admission discounts and personalized application support.",
  },
  {
    title: "Financial Guidance",
    description: "Receive expert advice on budgeting, scholarships, and making your education affordable.",
  },
  {
    title: "Visa Processing Assistance",
    description: "We guide you through every step of your student visa application with ease and accuracy.",
  },
  {
    title: "Pre-Departure Briefing",
    description: "Be fully prepared before you fly — get practical tips, cultural insights, and travel guidance.",
  },
  {
    title: "Accommodation Guidance",
    description: "Find safe and convenient student housing options near your campus with our help.",
  },
  {
    title: "Immigration Guidance",
    description: "Understand immigration policies and procedures with reliable, up-to-date support and Q&A.",
  },
];

export default function WhatGfecOffers() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="ledger-ref text-gold text-xs uppercase mb-3">What GFEC offers</p>
            <h2 className="font-display font-bold text-navy text-3xl lg:text-[44px] leading-[1.1]">
              Your journey, handled at every stage.
            </h2>
          </div>
          <p className="font-body text-mist max-w-md">
            Eight services, one consultant carrying your file through all of them — from your
            first program search to the day you land.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-hairline">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="border-r border-b border-hairline p-7 group hover:bg-paper transition-colors">
              <span className="ledger-ref text-gold text-sm block mb-6">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display font-semibold text-navy text-lg mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="font-body text-mist text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="ledger-card rounded-sm p-8">
            <p className="ledger-ref text-gold text-xs uppercase mb-4">Note 01</p>
            <h3 className="font-display font-bold text-navy text-xl mb-3">
              Start your global education journey with confidence
            </h3>
            <p className="font-body text-ink/75 leading-relaxed">
              Whether you&apos;re dreaming of studying in the UK, Malta, Germany, or Dubai — GFEC
              is here to guide you every step of the way. Our expert counselors are partnered
              with leading global universities to offer trusted advice, step-by-step application
              support, and a clear pathway to success.
            </p>
          </div>
          <div className="ledger-card rounded-sm p-8">
            <p className="ledger-ref text-gold text-xs uppercase mb-4">Note 02</p>
            <h3 className="font-display font-bold text-navy text-xl mb-3">
              Admissions &amp; visa expertise you can trust
            </h3>
            <p className="font-body text-ink/75 leading-relaxed">
              Navigating international education can be overwhelming — but not with GFEC. With
              years of experience helping Sri Lankan students study abroad, our counselors
              provide personalized support tailored to your academic goals and budget, from
              selecting the right course to securing your visa.
            </p>
          </div>
        </div>
      </ContainerNew>
    </section>
  );
}
