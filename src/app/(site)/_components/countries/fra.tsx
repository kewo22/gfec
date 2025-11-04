import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";

export default function Fra(props: CountryProps) {
  const { foundCountry } = props;
  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

  const benefits: DestinationBulletPoints[] = [
    {
      title: "Affordable Education",
      description: "Public universities offer subsidized tuition for international students, while scholarships are widely available from the French government."
    },
    {
      title: "Top Business & Fashion Schools",
      description: "France is home to world-renowned institutions in Business, Luxury Brand Management, Fashion Design, and Culinary Arts."
    },
    {
      title: "Work While Studying",
      description: "International students can work part-time for up to 964 hours per year to support their studies."
    },
    {
      title: "Cultural Immersion & Language Skills",
      description: "GWhile many programs are offered in English, living in France allows students to immerse themselves in the language and culture."
    },
    {
      title: "Gateway to the EU Job Market",
      description: "Graduates can explore a wide range of job opportunities across the European Union, with post-study stay options available."
    },
  ];


  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          France is globally recognized for its contribution to arts, fashion, philosophy, and science—and its higher education system is no exception. With some of the world&apos;s top-ranked universities and business schools, France offers an academic journey rich in quality, culture, and career potential.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the France?" />
      </div>

    </div>
  );
}
