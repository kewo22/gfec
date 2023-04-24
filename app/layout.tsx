"use client";
import Navigation from "./navigation";
import { Ubuntu } from "@next/font/google";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import "./globals.css";
// import Footer from "./components/footer";
import Footer2 from "./components/footer-2";

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
      <body
        className={`${ubuntu.className} text-accent h-full bg-gradient-to-b `}
      >
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <Navigation />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
