import { Ubuntu } from "next/font/google";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Navigation from "./_components/navigation";
import Footer from "./_components/footer";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={ubuntu.className}>
        <Navigation />
        <main className="">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
