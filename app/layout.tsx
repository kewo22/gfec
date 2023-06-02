"use client";
import { Ubuntu } from "@next/font/google";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Navigation from "./navigation-3";

library.add(fas);

import "./globals.css";
import Footer from "./components/footer";

const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* from-gray-100 to-gray-200 */}
      {/* `${ubuntu.className} text-accent h-full bg-gradient-to-b ` */}
      <body className={`${ubuntu.className}`}>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
