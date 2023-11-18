import { Ubuntu } from "next/font/google";

// import "../globals.css";
import type { Metadata } from "next";

import SideNav from "./_components/side-nav";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GFEC | ADMIN",
  description: "GFEC ADMIN",
};

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <div className="min-h-screen max-h-screen w-screen overflow-hidden flex flex-row gap-5 bg-alice-blue p-5">
          <SideNav />
          <main className="flex-grow bg-white rounded-lg shadow-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
