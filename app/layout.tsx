"use client";
/* eslint-disable @next/next/no-sync-scripts */
import Navigation from "./navigation";
import { Ubuntu } from "@next/font/google";

// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
  console.info(`VERSION - ${process.env.APP_VER}`)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${ubuntu.className} text-accent h-full bg-gradient-to-b from-gray-100 to-gray-200`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
