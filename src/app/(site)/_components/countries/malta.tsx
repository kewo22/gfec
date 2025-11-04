import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";
import UniversityPartnerItem from "../uni-item";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";

export default function Malta(props: CountryProps) {

  const { foundCountry } = props;
  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

  const benefits = [
    {
      title: "UK-Accredited Degrees at Lower Cost",
      description: "Many institutions in Malta offer British qualifications at a significantly lower cost, with direct affiliation to UK universities."
    },
    {
      title: "Work While Studying & After Graduation",
      description: "Students can work 20 hours per week during study and apply for a work permit or residence extension after graduation."
    },
    {
      title: "Mild Weather & English-Speaking Country",
      description: "With English as one of the official languages, Malta offers easy communication and a smooth academic experience for international students."
    },
    {
      title: "Affordable Living & Tuition",
      description: "Tuition and living expenses are budget-friendly, especially compared to other EU nations."
    },
    {
      title: "Safe & Peaceful Environment",
      description: "As one of Europe's safest countries, Malta offers a calm, beautiful setting ideal for focused learning."
    },
    {
      title: "High Employability Rates",
      description: "Graduates from Malta's institutions often find opportunities within Europe, especially in business, IT, and hospitality."
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          Malta, a rising star in European education, offers internationally recognized qualifications through its collaboration with top UK and European institutions. Located in the heart of the Mediterranean, Malta blends quality education, a peaceful lifestyle, and affordability—making it a top pick for students seeking UK-standard education in a sunny, student-friendly environment.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the Malta?" />
      </div>
    </div>
  );
}
