import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import SideNav from "./_components/side-nav";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "GFEC | ADMIN",
  description: "GFEC ADMIN",
};

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession();


  return (
    <SessionProvider session={session}>
      <div className="min-h-screen max-h-screen w-screen overflow-hidden flex flex-row gap-5 bg-alice-blue p-5">
        <SideNav />
        <main className="flex-grow bg-white rounded-lg shadow-lg h-auto">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
