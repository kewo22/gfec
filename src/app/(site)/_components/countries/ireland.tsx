import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import { CountryProps } from "../../_types/country";
import { UNIVERSITIES } from "../../_constants/countries.constants";
import UniversityPartnerItem from "../uni-item";
import DestinationBulletPointsAnimComp from "../destination-bullet-points-amin-comp";

export default function Ireland(props: CountryProps) {
    const { foundCountry } = props;
    const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

    const benefits = [
        {
            title: "The Silicon Valley of Europe",
            description: "Ireland is home to top global tech companies and innovation hubs."
        },
        {
            title: "Globally Recognized Education",
            description: "Study at world-ranked universities known for academic excellence."
        },
        {
            title: "Gateway to Europe",
            description: "Gain access to exciting career and travel opportunities across the European Union."
        },
    ];


    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
                <Typography variant="p" className="text-justify leading-normal! sm:leading-8!">
                    Ireland is a beautiful island nation in Western Europe, celebrated for its lush green landscapes, rich history, and warm, friendly people. Known as the “Emerald Isle,” it features rolling hills, dramatic coastlines, and charming villages. Ireland’s culture is deeply rooted in music, literature, and folklore, with famous writers like James Joyce and W.B. Yeats hailing from its shores. Dublin, the capital, is a lively city blending historic landmarks with modern culture. From ancient castles to cozy pubs, Ireland offers a captivating mix of natural beauty, heritage, and heartfelt hospitality.                </Typography>
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
