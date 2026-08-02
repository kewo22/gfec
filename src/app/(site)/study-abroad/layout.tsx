import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Study Abroad Destinations | GFEC",
    description:
        "Explore the countries and universities GFEC partners with to help Sri Lankan students study abroad.",
};

export default function StudyAbroadLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}