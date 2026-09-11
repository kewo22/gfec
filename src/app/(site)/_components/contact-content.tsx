"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { GFEC_GOOGLE_MAPS_URL } from "../_constants/google-maps.constants";
import ContainerNew from "./layouts/container-new";
import Breadcrumbs from "./breadcrumbs";
import { ResultSeal } from "./hero-result-slip";
import NavSocial from "./nav-social";
import GfecMap from "./gfec-map";
import GetInTouchSlipForm from "./get-in-touch-slip-form";

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:border-exam-gold/50 hover:shadow-[0_16px_36px_-16px_rgba(201,151,46,0.35)]";

type ContactContentProps = {
  phoneNos: string[];
  emails: string[];
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
};

export default function ContactContent({
  phoneNos,
  emails,
  addressLine1,
  addressLine2,
  addressLine3,
}: ContactContentProps) {
  const INFO_CARDS = [
    { icon: Phone, label: "Phone", items: phoneNos.map((p) => ({ text: p, href: `tel:${p}` })) },
    { icon: Mail, label: "Email", items: emails.map((e) => ({ text: e, href: `mailto:${e}` })) },
    {
      icon: MapPin,
      label: "Address",
      items: [{ text: `${addressLine1}, ${addressLine2}, ${addressLine3}`, href: GFEC_GOOGLE_MAPS_URL, external: true }],
    },
    {
      icon: Clock,
      label: "Office hours",
      items: [{ text: "Mon–Fri: 9:00 AM – 5:00 PM" }, { text: "Sat: 9:00 AM – 1:00 PM" }, { text: "Sunday: Closed" }],
    },
  ];

  return (
    <div className="bg-gazette">
      <section className="relative w-full bg-gazette overflow-hidden">
        <ContainerNew className="relative max-w-[1600px] mx-auto px-5 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20">
          <div className="text-exam-ink">
            <Breadcrumbs items={[{ label: "Contact" }]} />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-8 lg:mt-12">
            <div>
              <p className="slip-mono text-exam-navy text-xs uppercase tracking-wider mb-3">Get in touch</p>
              <h1 className="font-slip-display font-bold text-exam-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] max-w-3xl">
                Let&apos;s get your file started.
              </h1>
              <p className="font-body text-slip-mist text-lg mt-5 max-w-xl leading-relaxed">
                Have questions about studying abroad? Book a free consultation, or reach us directly — every
                enquiry is reviewed by a consultant, by hand.
              </p>
            </div>

            <div className="hidden lg:block shrink-0">
              <ResultSeal
                className="w-[140px] h-[140px]"
                ringText="GFEC · COLOMBO · CONSULTATION REGISTER ·"
                centerLine1="OPEN"
                centerLine2="FOR ENQUIRIES"
                pathId="contact-seal-ring"
              />
            </div>
          </div>
        </ContainerNew>
        <div className="slip-rule" />
      </section>

      <section className="bg-gazette py-16 lg:py-24">
        <ContainerNew className="px-5 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {INFO_CARDS.map((card, i) => (
              <div
                key={card.label}
                className={`bg-slip-surface border border-slip-rule rounded-sm p-7 flex flex-col items-center text-center gap-3 ${CARD_HOVER}`}
              >
                <span className="slip-mono text-exam-ink/30 text-xs self-start">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-full bg-exam-ink flex items-center justify-center -mt-2">
                  <card.icon size={20} className="text-exam-gold" />
                </div>
                <p className="font-slip-display font-bold text-exam-ink text-sm uppercase tracking-wide">
                  {card.label}
                </p>
                <div className="flex flex-col gap-0.5">
                  {card.items.map((item, j) =>
                    "href" in item && item.href ? (
                      <a
                        key={j}
                        href={item.href}
                        target={"external" in item && item.external ? "_blank" : undefined}
                        rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                        className="font-body text-slip-mist text-sm hover:text-exam-navy transition-colors break-all"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p key={j} className="font-body text-slip-mist text-sm">
                        {item.text}
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-10 pb-2">
            <NavSocial variant="solid" wrapperClass="flex flex-row gap-4 items-center" />
          </div>
        </ContainerNew>
      </section>

      <GfecMap />

      <section id="get-in-touch-container" className="bg-exam-ink py-20 lg:py-28">
        <ContainerNew className="px-5 lg:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <p className="slip-mono text-exam-gold text-xs uppercase tracking-wider mb-3">
              Book my consultation
            </p>
            <h2 className="font-slip-display font-bold text-gazette text-3xl lg:text-[44px] leading-[1.1]">
              Tell us about your plans
            </h2>
          </div>
          <GetInTouchSlipForm />
        </ContainerNew>
      </section>
    </div>
  );
}
