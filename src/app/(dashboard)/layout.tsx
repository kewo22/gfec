import { Ubuntu } from "next/font/google";

// import "../globals.css";
import type { Metadata } from "next";

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
      <body
        className={`${ubuntu.className} h-screen w-screen overflow-hidden flex flex-row gap-2 bg-slate-50 p-2`}
      >
        <aside className="h-full overflow-hidden flex-[0_0_180px] bg-amber-200 rounded-lg">
          wqddw
        </aside>
        <main className="flex-grow bg-amber-100 rounded-lg">{children}</main>
      </body>
    </html>
  );
}


{/* <Image
            src="/GFEC-Trans.png"
            alt="Next.js Logo"
            width={210}
            height={160}
            priority
            className="!hidden lg:!block mx-auto"
          /> */}