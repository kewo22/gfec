import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Start your application with GFEC to study abroad — fast, guided admissions support for Sri Lankan students.",
  alternates: { canonical: "https://gfeconsultancy.com/apply-now" },
};

export default function ApplyNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
