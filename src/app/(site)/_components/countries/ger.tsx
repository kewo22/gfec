import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";

export default function Ger() {
  const benefits: DestinationBulletPoints[] = [
    {
      title: "Industry-Focused Education",
      description: "German universities emphasize hands-on learning and close ties with global industries—offering students access to internships, projects, and real-world training."
    },
    {
      title: "Post-Study Work Visa",
      description: "Students graduating from German institutions are eligible for an 18-month post-study work visa, allowing ample time to find employment in their field of study."
    },
    {
      title: "English-Taught Programs",
      description: "Germany offers a wide range of Bachelor's and Master's programs in English, especially in areas like Business, IT, and Engineering."
    },
    {
      title: "Innovation & Research Hub",
      description: "Germany leads Europe in research and development, providing cutting-edge facilities and opportunities for academic exploration."
    },
    {
      title: "Part-Time Work While Studying",
      description: "International students can work up to 20 hours per week during term time and full-time during holidays, helping support living expenses and gain real-world experience."
    },
    {
      title: "Safe, Multicultural Environment",
      description: "Home to over 400,000 international students, Germany offers a welcoming, modern, and student-friendly lifestyle with a high standard of living."
    },
  ];


  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          Germany is one of the most sought-after study destinations in Europe, known for its academic excellence, strong economy, and innovation-driven education system. Whether you&apos;re pursuing a career in engineering, business, technology, or research, Germany offers international students a globally respected education in a thriving professional environment.
        </Typography>
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the Germany?" />
      </div>
    </div>
  );
}
