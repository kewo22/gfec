import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp from "../destination-bullet-points-amin-comp";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";

export default function Dxb(props: CountryProps) {

  const { foundCountry } = props;
  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);


  const benefits = [
    {
      title: "International Campuses of Top Global Universities",
      description: "Dubai hosts campuses from countries like the UK, Australia, and India, offering globally recognized degrees in a central location."
    },
    {
      title: "Work While Studying & Career-Oriented Programs",
      description: "Students are allowed to work part-time, and many institutions offer internship-integrated degrees, increasing employability."
    },
    {
      title: "Strategic Location & Business Hub",
      description: "Dubai connects East and West, making it a business and cultural hub—ideal for networking and post-study opportunities."
    },
    {
      title: "Tax-Free Salaries & Growing Job Market",
      description: "Graduates benefit from tax-free income and job opportunities in fields like tech, business, and hospitality."
    },
    {
      title: "Modern Campus Facilities & Student Lifestyle",
      description: "From futuristic campuses to vibrant city life, Dubai offers a unique blend of academics, lifestyle, and innovation."
    },
    {
      title: "Flexible Study Options",
      description: "Institutions in Dubai offer foundation, diploma, undergraduate, and postgraduate pathways with various entry levels and visa assistance."
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          Dubai is quickly becoming an education hub for international students with its world-class infrastructure, international university campuses, and dynamic lifestyle. The city offers a unique opportunity to study in one of the fastest-growing economies, blending academic excellence with career potential.
          With a wide range of globally recognized programs and top-tier facilities, Dubai is the gateway to education in the Middle East with a global impact.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl mx-auto pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the Dubai?" />
      </div>
    </div>
  );
}
