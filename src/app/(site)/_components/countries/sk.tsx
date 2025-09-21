import React from "react";

import { Typography } from "@/app/_components/ui/typography";
import DestinationBulletPointsAnimComp, { DestinationBulletPoints } from "../destination-bullet-points-amin-comp";

export default function Sk() {
    const benefits = [
        {
            title: "Top-Tier Universities & Global Recognition",
            description: "Universities like Seoul National University, Korea University, and Yonsei University are globally recognized for excellence in STEM, business, and arts."
        },
        {
            title: "Scholarship Opportunities",
            description: "Many institutions and government bodies offer generous scholarships for international students, covering tuition and living expenses."
        },
        {
            title: "Technology & Innovation Hub",
            description: "South Korea is a global leader in IT, robotics, AI, and engineering—making it an ideal destination for tech-focused students."
        },
        {
            title: "Affordable Tuition & Living Costs",
            description: "Compared to Western countries, South Korea offers excellent education at a lower cost."
        },
        {
            title: "Vibrant Culture & K-Wave Influence",
            description: "Study in a country where K-pop, K-dramas, fashion, and food are part of everyday life. It's a cultural experience like no other."
        },
        {
            title: "Part-Time Work & Job Opportunities",
            description: "International students can work part-time during their studies and are eligible for job-seeking visas post-graduation."
        },
        {
            title: "Safe & Student-Friendly Cities",
            description: "South Korea boasts some of the world's most modern and secure cities, with excellent transport, healthcare, and student facilities."
        }
    ];
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col sm:flex-row gap-20 px-10 xl:px-0">
                <Typography variant="p" className="text-justify !leading-normal sm:!leading-8">
                    South Korea is quickly becoming one of Asia's top study destinations, known for its world-class universities, cutting-edge technology, and global influence in culture and entertainment. With an increasing number of English-taught programs and a growing international student population, Korea offers a dynamic and unique educational experience.
                    Students in South Korea not only benefit from academic excellence but also immerse themselves in a culture known for innovation, discipline, and creativity.
                </Typography>
            </div>

            <div className="px-10 xl:px-0">
                <DestinationBulletPointsAnimComp list={benefits} title="Why Choose the South Korea?" />
            </div>
        </div>
    );
}
