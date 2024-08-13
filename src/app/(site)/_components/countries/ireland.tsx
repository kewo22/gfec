import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function Ireland() {
    return (
        <div className="">
            <div className="bg-ireland-banner bg-center bg-cover w-full h-60 grid place-items-center">
                <Typography
                    variant="h1"
                    className="text-white tracking-wider shadow-2xl"
                >
                    Ireland
                </Typography>
            </div>

            <div className="p-10">
                <Typography className="text-justify sm:text-left">
                    Studying in Ireland offers top-tier education with a vibrant culture, English language immersion, and innovation opportunities. The country&apos;s friendly and safe environment, diverse scholarship options, and breathtaking landscapes make it an attractive choice for international students. With renowned universities, tech industry presence, and strong focus on research, Ireland provides a conducive environment for academic and personal growth. Students can engage in cultural exchange, build global networks, and explore the country&apos;s rich heritage while enjoying outdoor activities and forming lasting connections. Choosing Ireland as a study destination promises an enriching and transformative educational experience.
                </Typography>
            </div>
        </div>
    );
}
