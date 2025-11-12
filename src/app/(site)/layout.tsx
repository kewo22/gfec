
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SocialIcon } from 'react-social-icons';

import Footer from "./_components/footer";
import NavigationNew from "./_components/navigation-new";

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
      <main>{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
      <div className='fixed z-[999999999] bottom-5 right-5'>
        <SocialIcon network="whatsapp" url="https://wa.me/+94773889161" target="_blank" />
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