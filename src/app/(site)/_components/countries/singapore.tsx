import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";
import DestinationBulletPointsAnimComp from "../destination-bullet-points-amin-comp";

export default function Singapore(props: CountryProps) {
    const { foundCountry } = props;
    const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

    const benefits = [
        {
            title: "World Class Education",
            description: "Study at globally recognized universities known for academic excellence."
        },
        {
            title: "Safe Modern & Multicultural ",
            description: "Experience a safe, vibrant city with a rich blend of cultures and traditions."
        },
        {
            title: "Pathway Programs & Career Opportunities",
            description: "Access pathway programs and strong career prospects in a thriving economy."
        },
    ];


    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
                <Typography variant="p" className="text-justify leading-normal! sm:leading-8!">
                    Singapore is a vibrant island city-state in Southeast Asia, known for its modern skyline, lush green spaces, and cultural diversity. Blending Chinese, Malay, Indian, and Western influences, it offers a unique mix of traditions and innovation. Renowned for its cleanliness, safety, and efficient infrastructure, Singapore is also a global financial hub and a popular travel destination, home to landmarks like Marina Bay Sands, Gardens by the Bay, and Sentosa Island. Despite its small size, Singapore stands out as one of the world’s most dynamic and forward-thinking nations.
                </Typography>
            </div>

            <div className="px-10 xl:px-0 max-w-7xl pb-20">
                <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
            </div>

            <div className="px-10 xl:px-0">
                <DestinationBulletPointsAnimComp list={benefits} title="Why Choose Ireland?" />
            </div>
        </div>
    );
}
