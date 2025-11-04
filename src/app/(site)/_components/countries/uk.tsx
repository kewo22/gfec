import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";
import UniversityPartnerItem from "../uni-item";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import { Country, CountryProps } from "../../_types/country";


export default function Uk(props: CountryProps) {

  const { foundCountry } = props;

  const benefits: DestinationBulletPoints[] = [
    {
      title: "Globally Recognized Qualifications",
      description: "UK degrees are respected across the world for their rigorous academic standards, equipping graduates with a competitive edge in the global job market."
    },
    {
      title: "Shorter Degree Duration",
      description: "Complete your Undergraduate Degree in 3 years and Postgraduate Degree in just 1 year, helping save both time and money."
    },
    {
      title: "IELTS Waiver & Foundation Programs",
      description: "Many universities offer IELTS waivers for students from English-speaking backgrounds or with previous English-medium education. Foundation and pre-sessional English programs are also available to help students transition smoothly."
    },
    {
      title: "Post-Study Work Opportunities",
      description: "Students can benefit from the Graduate Route Visa, which allows them to stay in the UK for 2 years (or 3 years for PhD holders) after graduation to seek employment."
    },
    {
      title: "Part-Time Work While Studying",
      description: "International students can work up to 20 hours per week during term time and full-time during holidays, helping support living expenses and gain real-world experience."
    },
    {
      title: "Multicultural Society & Safe Environment",
      description: "The UK welcomes thousands of international students every year, making it easy to find communities and support networks. Its student-friendly cities are safe, vibrant, and culturally rich."
    },
    {
      title: "Gateway to Europe",
      description: "Situated close to Europe, students can enjoy budget travel to explore nearby countries during holidays and breaks."
    }
  ];

  const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);


  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          The United Kingdom is a global leader in higher education, renowned for its academic excellence, world-class universities, and centuries-old tradition of scholarship. Home to prestigious institutions such as Oxford, Cambridge, and many top-ranking modern universities, the UK offers students an enriching academic journey with qualifications that are globally recognized and respected by employers and institutions alike.
        </Typography>

        <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
          The UK is not just about academics—its diverse and inclusive society, vibrant student communities, and dynamic cities make it a welcoming destination for students from all walks of life. Whether you’re walking through historic campuses, attending lectures from leading experts, or immersing yourself in the arts, culture, and innovation, studying in the UK offers a once-in-a-lifetime experience.
        </Typography>
      </div>

      <div className="px-10 xl:px-0 max-w-7xl pb-20">
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
      </div>

      <div className="px-10 xl:px-0">
        <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the UK?" />
      </div>
    </div>
  );
}
