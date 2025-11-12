import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";
import DestinationBulletPointsAnimComp from "../destination-bullet-points-amin-comp";

export default function Aus(props: CountryProps) {
  const { foundCountry } = props;
  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

  const benefits = [
    {
      title: "Top-Tier Universities & Global Recognition",
      description: "Study at top-ranked Australian universities offering globally recognized qualifications."
    },
    {
      title: "Work & Stay Opportunities",
      description: "Earn while you study and enjoy post-study work rights through the Temporary Graduate Visa (Subclass 485)."
    },
    {
      title: "Pathway to Permanent Residency",
      description: "Build your career in Australia with study programs that can lead to PR opportunities."
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify leading-normal! sm:leading-8!">
          Australia is a vast and diverse country known for its stunning natural landscapes, unique wildlife, and vibrant cities. As both a continent and a nation, it features everything from golden beaches and tropical rainforests to arid deserts and snowy mountains. Major cities like Sydney, Melbourne, and Brisbane blend modern living with laid-back charm, while iconic landmarks such as the Sydney Opera House, the Great Barrier Reef, and Uluru highlight the country&apos;s natural and cultural beauty. With its friendly people, outdoor lifestyle, and rich Indigenous heritage, Australia is a land of adventure and opportunity.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose Australia?" />
      </div>
    </div>
  );
}
