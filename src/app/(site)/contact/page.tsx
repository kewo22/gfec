import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import GfecMap from "../_components/gfec-map";
import GetInTouch from "../_components/get-in-touch";
import ContainerNew from "../_components/layouts/container-new";
import Breadcrumbs from "../_components/breadcrumbs";
import NavSocial from "../_components/nav-social";

export const metadata: Metadata = {
  title: "Contact GFEC",
  description:
    "Book a free study abroad consultation with GFEC in Colombo. Call 0112271854, email info@gfeconsultancy.com, or visit us at Galle Road, Colombo 3.",
  alternates: { canonical: "https://gfeconsultancy.com/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GFEC — Gordon Foreign Education Consultancy",
  image: "https://gfeconsultancy.com/comp/GFEC-Trans.png",
  telephone: "0112271854",
  email: "info@gfeconsultancy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "408 (3rd Floor), Galle Road",
    addressLocality: "Colombo 3",
    addressCountry: "LK",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
};

export default function Contact() {
  const emails = (process.env.NEXT_PUBLIC_EMAILS || process.env.EMAILS || "info@gfeconsultancy.com")?.split(",");
  const phoneNos = (process.env.NEXT_PUBLIC_PHONE || process.env.PHONE || "0112271854")?.split(",");
  const addressLine1 = process.env.NEXT_PUBLIC_ADDRESS_LINE_1 || process.env.ADDRESS_LINE_1 || "408 (3rd Floor)";
  const addressLine2 = process.env.NEXT_PUBLIC_ADDRESS_LINE_2 || process.env.ADDRESS_LINE_2 || "Galle Road";
  const addressLine3 = process.env.NEXT_PUBLIC_ADDRESS_LINE_3 || process.env.ADDRESS_LINE_3 || "Colombo 3";

  const INFO_CARDS = [
    { icon: Phone, label: "Phone", items: phoneNos.map((p) => ({ text: p, href: `tel:${p}` })) },
    { icon: Mail, label: "Email", items: emails.map((e) => ({ text: e, href: `mailto:${e}` })) },
    { icon: MapPin, label: "Address", items: [{ text: `${addressLine1}, ${addressLine2}, ${addressLine3}` }] },
    {
      icon: Clock,
      label: "Office hours",
      items: [{ text: "Mon–Fri: 9:00 AM – 5:00 PM" }, { text: "Sat: 9:00 AM – 1:00 PM" }, { text: "Sunday: Closed" }],
    },
  ];

  return (
    <div className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-navy py-16 lg:py-20">
        <ContainerNew className="px-5 lg:px-12 text-paper">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <p className="ledger-ref text-gold text-xs uppercase mt-6 mb-3">Get in touch</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] max-w-xl">
            Let&apos;s plan your global future.
          </h1>
          <p className="font-body text-paper/70 text-lg mt-5 max-w-xl">
            Have questions about studying abroad? Our consultants are ready to help.
          </p>
        </ContainerNew>
      </section>

      <ContainerNew className="px-5 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-sm overflow-hidden -mt-8 relative z-10">
          {INFO_CARDS.map((card) => (
            <div key={card.label} className="ledger-card bg-surface p-7 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                <card.icon size={20} className="text-gold" />
              </div>
              <p className="font-display font-semibold text-navy text-sm uppercase tracking-wide">{card.label}</p>
              <div className="flex flex-col gap-0.5">
                {card.items.map((item, i) =>
                  "href" in item && item.href ? (
                    <a key={i} href={item.href} className="font-body text-mist text-sm hover:text-royal transition-colors break-all">
                      {item.text}
                    </a>
                  ) : (
                    <p key={i} className="font-body text-mist text-sm">
                      {item.text}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-10 pb-4">
          <NavSocial iconClass="text-navy hover:text-royal transition-colors" wrapperClass="flex flex-row gap-8 items-center" />
        </div>
      </ContainerNew>

      <GfecMap />

      <div id="get-in-touch-container">
        <GetInTouch />
      </div>
    </div>
  );
}
