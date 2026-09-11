"use client";

import {
  ListChecks,
  Building2,
  FileCheck2,
  Wallet,
  ShieldCheck,
  PlaneTakeoff,
  Home,
  Stamp,
  Check,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

import ContainerNew from "./layouts/container-new";

const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_CAP = 6;

const SERVICES = [
  {
    icon: ListChecks,
    title: "Program Selection",
    description:
      "Explore a wide range of study programs tailored to your career goals and academic interests.",
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Choose from top universities across the globe to find the right fit for your future.",
  },
  {
    icon: FileCheck2,
    title: "Offers & Admissions",
    description: "Get access to exclusive admission discounts and personalized application support.",
  },
  {
    icon: Wallet,
    title: "Financial Guidance",
    description: "Receive expert advice on budgeting, scholarships, and making your education affordable.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Processing Assistance",
    description: "We guide you through every step of your student visa application with ease and accuracy.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Briefing",
    description: "Be fully prepared before you fly — get practical tips, cultural insights, and travel guidance.",
  },
  {
    icon: Home,
    title: "Accommodation Guidance",
    description: "Find safe and convenient student housing options near your campus with our help.",
  },
  {
    icon: Stamp,
    title: "Immigration Guidance",
    description: "Understand immigration policies and procedures with reliable, up-to-date support and Q&A.",
  },
];

export default function WhatGfecOffers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: remarkRef, inView: remarkInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-exam-ink py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="max-w-2xl mb-14">
          <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
            Your file, itemized.
          </h2>
          <p className="font-body text-gazette/55 mt-4 max-w-xl leading-relaxed">
            Eight services, one consultant carrying your file through all of them — from your
            first program search to the day you land.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={{ transitionDelay: `${Math.min(i, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS}ms` }}
              className={`reveal-card ${inView ? "reveal-card-in" : ""} group relative bg-gazette/5 border border-gazette/10 rounded-sm p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-gazette/[0.07] hover:border-exam-gold/50 hover:shadow-[0_16px_36px_-16px_rgba(201,151,46,0.35)]`}
            >
              <div className="flex items-start justify-between mb-6">
                <service.icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-exam-gold transition-transform duration-300 group-hover:scale-110"
                />
                <span className="slip-mono text-[10px] text-gazette/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-slip-display font-bold text-gazette text-base mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="font-body text-gazette/55 text-sm leading-relaxed">{service.description}</p>

              <div className="mt-4 flex items-center gap-1.5 text-exam-gold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <Check size={12} strokeWidth={3} />
                <span className="slip-mono text-[10px] tracking-wider">INCLUDED IN YOUR FILE</span>
              </div>
            </div>
          ))}
        </div>

        <div ref={remarkRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div
            className={`reveal-card transition-opacity duration-500 ${remarkInView ? "reveal-card-in" : ""} bg-gazette/5 border border-gazette/10 rounded-sm p-8`}
          >
            <p className="slip-mono text-exam-gold text-xs uppercase mb-4">Remark 01</p>
            <h3 className="font-slip-display font-bold text-gazette text-xl mb-3">
              Start your global education journey with confidence
            </h3>
            <p className="font-body text-gazette/60 leading-relaxed">
              Whether you&apos;re dreaming of studying in the UK, Malta, Germany, or Dubai — GFEC
              is here to guide you every step of the way. Our expert counselors are partnered
              with leading global universities to offer trusted advice, step-by-step application
              support, and a clear pathway to success.
            </p>
          </div>
          <div
            style={{ transitionDelay: "90ms" }}
            className={`reveal-card transition-opacity duration-500 ${remarkInView ? "reveal-card-in" : ""} bg-gazette/5 border border-gazette/10 rounded-sm p-8`}
          >
            <p className="slip-mono text-exam-gold text-xs uppercase mb-4">Remark 02</p>
            <h3 className="font-slip-display font-bold text-gazette text-xl mb-3">
              Admissions &amp; visa expertise you can trust
            </h3>
            <p className="font-body text-gazette/60 leading-relaxed">
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
