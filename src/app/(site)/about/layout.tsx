import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GFEC",
  description:
    "Learn about Gordon Foreign Education Consultancy and our mission to help Sri Lankan students study abroad.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
