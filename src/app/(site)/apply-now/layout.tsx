import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now | GFEC",
  description:
    "Start your application with GFEC to study abroad — fast, guided admissions support for Sri Lankan students.",
};

export default function ApplyNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
