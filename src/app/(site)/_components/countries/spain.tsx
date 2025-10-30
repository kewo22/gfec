import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";

export default function Spain(props: CountryProps) {
  const { foundCountry } = props;
  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

  const benefits = [
    {
      title: "Affordable Tuition & Living Costs",
      description: "Compared to many Western European countries, Spain offers more accessible tuition fees and cost of living, making it a budget-friendly option for international students."
    },
    {
      title: "English-Taught Programs",
      description: "Many universities offer Bachelor's and Master's programs in English, especially in Business, Engineering, and Tourism Management."
    },
    {
      title: "Part-Time Work Opportunities",
      description: "International students can work up to 20 hours per week during the semester, gaining valuable work experience alongside studies."
    },
    {
      title: "Vibrant Student Life",
      description: "Spain's welcoming atmosphere, festivals, and active student culture ensure a memorable university experience."
    },
    {
      title: "Post-Study Options",
      description: "Graduates can explore employment options or transition into further education or internships across Europe."
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          Spain is rapidly becoming one of the most popular study destinations in Europe, known for its vibrant culture, affordable living, and high-quality education. With a rich history, world-famous cuisine, and globally ranked universities, Spain offers students a well-rounded academic and cultural experience. From sun-kissed Mediterranean cities to centuries-old universities, Spain offers both tradition and innovation in education.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl mx-auto pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the Spain?" />
      </div>
    </div>
  );
}
