import { Abel } from "next/font/google";

// Alef, Josefin_Sans, Dosis, Abel

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navigation from "./_components/navigation";
import Footer from "./_components/footer";
import PromoPopUp from "./_components/promo-popup";
import HeroNew from "./_components/hero-new";
import NavigationNew from "./_components/navigation-new";

// const dddddddddddddddddd = Abel({
//   weight: "400",
//   subsets: ['latin']
// });

export const metadata: Metadata = {
  title: "GFEC",
  description: "GFEC DESC",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavigationNew className='sticky top-0 left-0 w-full z-50' />
      <HeroNew />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// <html lang="en" suppressHydrationWarning>
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