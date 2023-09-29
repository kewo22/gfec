import { Typography } from "@/app/_components/ui/typography";
import React from "react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title } = props;
  return (
    <div className="relative inline-block mb-10">
      <Typography variant="h2" className="text-secondary">
        {title}
      </Typography>
      <div className="section-title__border-box relative block h-[3px] w-1/2 bg-primary mt-3 mx-auto mb-0"></div>
    </div>
  );
}
