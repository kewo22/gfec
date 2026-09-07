
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, JetBrains_Mono, Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SocialIcon } from 'react-social-icons';

import Footer from "./_components/footer";
import NavigationNew from "./_components/navigation-new";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["500"],
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GFEC | Study Abroad Consultancy in Sri Lanka",
    template: "%s | GFEC",
  },
  description:
    "GFEC helps students in Sri Lanka study abroad. We partner with universities worldwide for visa, admissions, and relocation support.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "GFEC — Gordon Foreign Education Consultancy",
  alternateName: "GFE Consultancy",
  url: "https://gfeconsultancy.com",
  logo: "https://gfeconsultancy.com/comp/GFEC-Trans.png",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "408 (3rd Floor), Galle Road",
    addressLocality: "Colombo 3",
    addressCountry: "LK",
  },
  sameAs: ["https://facebook.com", "https://instagram.com", "https://linkedin.com"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GFEC",
  url: "https://gfeconsultancy.com",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${plusJakarta.variable} ${manrope.variable} ${jetbrainsMono.variable} ${courierPrime.variable} font-body bg-paper text-ink`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <NavigationNew className='sticky top-0 left-0 w-full z-50' />
      <main>{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
      <div className='fixed z-[999999999] bottom-5 right-5'>
        <SocialIcon network="whatsapp" url="https://wa.me/+94771789038" target="_blank" />
      </div>
    </div>
  );
}

// need suppressHydrationWarning ??
// <html lang="en" >
//   <body suppressHydrationWarning>
//     {/* <PromoPopUp /> */}
//     {/* <NavigationNew /> */}
//     <HeroNew />
//     <main className="">{children}</main>
//     {/* <Navigation />
//     <Footer />
//     <Analytics />
//     <SpeedInsights /> */}
//   </body>
// </html>