import type { Metadata } from "next";
import Script from "next/script";

import { Abel } from "next/font/google";


import "./globals.css";

const abel = Abel({
  weight: "400",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "GFEC | Gordon Foreign Education Consultancy",
  description:
    "GFEC helps students in Sri Lanka study abroad. We partner with universities worldwide for visa, admissions, and relocation support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VGW6MGB10Q" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VGW6MGB10Q');
        `}
      </Script>
      <body className={abel.className}>{children}</body>
    </html>
  );
}
