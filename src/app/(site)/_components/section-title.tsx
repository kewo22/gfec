"use client";

import { Typography } from "@/app/_components/ui/typography";
import AnimatedSectionBorder from "./animated-section-border";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title } = props;
  return (
    <div className="relative w-fit mx-auto mb-10 text-center">
      <Typography variant="h2" className="text-secondary">
        {title}
      </Typography>
      <AnimatedSectionBorder />
    </div>
  );
}
