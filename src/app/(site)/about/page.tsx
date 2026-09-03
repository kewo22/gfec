import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

import ContainerNew from "../_components/layouts/container-new";
import Breadcrumbs from "../_components/breadcrumbs";

export const metadata: Metadata = {
  title: "About GFEC",
  description:
    "GFEC is a Colombo-based study abroad consultancy helping Sri Lankan students since 2021 — personalized guidance, comprehensive support, and unwavering commitment from program selection to departure.",
  alternates: { canonical: "https://gfeconsultancy.com/about" },
};

const PILLARS = [
  {
    icon: Compass,
    title: "Personalized Guidance",
    description:
      "We believe in tailoring our services to meet your unique needs, providing individualized guidance to help you make informed decisions about your study abroad plans.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Support",
    description:
      "We offer end-to-end assistance, covering everything from university selection to visa processing, ensuring you receive comprehensive support throughout your educational journey.",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Commitment",
    description:
      "Our dedication knows no bounds. We are committed to going the extra mile, ensuring your satisfaction and success by providing the highest level of service and support at all times.",
  },
];

export default function About() {
  return (
    <div className="bg-paper">
      <section className="relative w-full min-h-[380px] flex items-end overflow-hidden bg-navy-deep">
        <Image src="/comp/about-1.webp" alt="GFEC team and students" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/50" />

        <ContainerNew className="relative z-10 px-5 lg:px-12 pb-12 pt-28 text-paper">
          <Breadcrumbs items={[{ label: "About GFEC" }]} />
          <p className="ledger-ref text-gold text-xs uppercase mt-6 mb-3">About GFEC</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
            Helping Sri Lankan students build global futures.
          </h1>
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex gap-5">
              <div className="relative w-1/2 aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/comp/about-1.webp" alt="GFEC consultation" fill className="object-cover" />
              </div>
              <div className="relative w-1/2 aspect-[3/4] rounded-sm overflow-hidden mt-10">
                <Image src="/comp/about-2.webp" alt="GFEC students" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p className="ledger-ref text-gold text-xs uppercase mb-3">Our story</p>
              <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-5">
                A leading visa &amp; immigration consultancy
              </h2>
              <p className="font-body text-ink/80 leading-relaxed mb-4">
                We believe that access to quality education is a fundamental right, and we&apos;re proud to be part
                of a community of organizations that share this vision.
              </p>
              <p className="font-body text-ink/80 leading-relaxed mb-4">
                As a leading overseas educational consultation service provider in Sri Lanka, we understand the
                importance of providing reliable and comprehensive guidance to students who are looking to pursue
                higher education abroad. We recognize that studying overseas can be a daunting prospect, with
                numerous challenges and uncertainties that can make the process overwhelming.
              </p>
              <p className="font-body text-ink/80 leading-relaxed">
                At GFEC, we&apos;re driven by a passion for education and a commitment to ensuring that every
                student has access to the best possible opportunities to achieve their goals.
              </p>
            </div>
          </div>
        </ContainerNew>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15 rounded-sm overflow-hidden">
            <div className="bg-navy p-8 lg:p-12">
              <Image src="/vision.png" alt="" width={56} height={56} className="mb-6" />
              <p className="ledger-ref text-gold text-xs uppercase mb-3">Our vision</p>
              <p className="font-display font-semibold text-paper text-xl lg:text-2xl leading-snug">
                To be a market leader and most reliable organization in International Education Consultation
                Services in Sri Lanka.
              </p>
            </div>
            <div className="bg-navy p-8 lg:p-12">
              <Image src="/mission.png" alt="" width={56} height={56} className="mb-6" />
              <p className="ledger-ref text-gold text-xs uppercase mb-3">Our mission</p>
              <p className="font-display font-semibold text-paper text-xl lg:text-2xl leading-snug">
                To provide accurate information, professional service, and maintain the highest level of success
                in international education student enrollments.
              </p>
            </div>
          </div>
        </ContainerNew>
      </section>

      <section className="py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <p className="ledger-ref text-gold text-xs uppercase mb-3">Our approach</p>
          <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-10 max-w-xl">
            Three pillars behind every student file we handle.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="ledger-card rounded-sm p-8">
                <span className="ledger-ref text-gold text-xs block mb-6">{String(i + 1).padStart(2, "0")}</span>
                <pillar.icon size={30} className="text-royal mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-navy text-lg mb-3">{pillar.title}</h3>
                <p className="font-body text-mist text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </ContainerNew>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="max-w-2xl">
            <p className="ledger-ref text-gold text-xs uppercase mb-3">Why students choose GFEC</p>
            <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-5">
              Clarity and confidence, from a consultant who knows your file.
            </h2>
            <p className="font-body text-ink/75 leading-relaxed">
              Choosing to study abroad is one of the biggest decisions a student and their family will make. We
              exist to make that decision less overwhelming — clear guidance instead of guesswork, one consultant
              who knows your situation instead of a call centre, and honest answers about what&apos;s realistic
              for your goals and budget. That&apos;s the confidence we aim to give every student who walks through
              our door.
            </p>
          </div>
        </ContainerNew>
      </section>

      <section className="bg-navy-deep relative">
        <div className="stitch-rule" />
        <ContainerNew className="px-5 lg:px-12 py-16 lg:py-20 text-center">
          <h2 className="font-display font-bold text-paper text-3xl lg:text-4xl mb-4 max-w-2xl mx-auto">
            Ready to start your international education journey?
          </h2>
          <Link
            href="/contact#get-in-touch-container"
            className="group inline-flex items-center gap-2 bg-gold text-navy-deep font-display font-semibold text-base px-8 py-4 rounded-sm mt-6"
          >
            Book a Free Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ContainerNew>
      </section>
    </div>
  );
}
