import type { Metadata } from "next";

import ContactContent from "../_components/contact-content";

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactContent
        emails={emails}
        phoneNos={phoneNos}
        addressLine1={addressLine1}
        addressLine2={addressLine2}
        addressLine3={addressLine3}
      />
    </>
  );
}
