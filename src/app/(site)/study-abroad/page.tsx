"use client";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import {
    COUNTRIES,
    PRE_SELECTED_COUNTRY,
} from "../_constants/countries.constants";
import { Country } from "../_types/country";

import { Typography } from "@/app/_components/ui/typography";

import StudyAbroadBannerImage from "../../../../public/comp/study-abroad-banner.webp";
import Image from "next/image";

// import Container from "../_components/layouts/container";
// import SectionTitle from "../_components/section-title";
// import Aus from "../_components/countries/aus";
// import Uk from "../_components/countries/uk";
// import Can from "../_components/countries/can";
// import Fin from "../_components/countries/fin";
// import Bel from "../_components/countries/bel";
// import Ger from "../_components/countries/ger";
// import Ita from "../_components/countries/ita";
// import Swe from "../_components/countries/swe";
// import Rus from "../_components/countries/rus";
// import Fra from "../_components/countries/fra";
// import Ned from "../_components/countries/ned";
// import Lat from "../_components/countries/lat";
// import Swi from "../_components/countries/swi";
// import Dxb from "../_components/countries/dxb";
// import Malta from "../_components/countries/malta";
// import Spain from "../_components/countries/spain";
// import Ireland from "../_components/countries/ireland";
// import ContainerNew from "../_components/layouts/container-new";
import germany from "../../../../public/comp/germany.webp";
import { TypewriterEffect } from "../_components/typewriter-effect";
import { SequentialTextFade } from "../_components/sequence-fade";
import SectionTitle from "../_components/section-title";
import ParticleButton from "@/app/_components/ui/particle-btn";
import Link from "next/link";
import { it } from "node:test";

export default function StudyAbroad() {
    const [selectedCountry, setSelectedCountry] = useState(PRE_SELECTED_COUNTRY);
    const [isHeaderTextAnimationComplete, setIsHeaderTextAnimationComplete] = useState(false);

    const COUNTRIES_DATA = COUNTRIES;
    const countryNames = ['', ...COUNTRIES_DATA.map(country => country.country)];

    const onCountryClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const onComplete = () => {
        setTimeout(() => {
            setIsHeaderTextAnimationComplete(true)
        }, 500);
    };

    return (
        <section className="bg-slate-100">
            <div className="w-full h-[600px] overflow-hidden flex items-center justify-center relative">
                <Image
                    src={StudyAbroadBannerImage}
                    alt="StudyAbroadBannerImage"
                    priority
                    className="min-w-full h-full object-cover object-center"
                    width={1200}
                    height={400}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] bg-black/50 h-full w-full flex flex-col items-center justify-center gap-2">
                    <TypewriterEffect text="Explore Destinations" loop={false} showCursor={false} className='text-white text-center' variant="h1" onComplete={onComplete} />
                    <SequentialTextFade
                        direction="up"
                        texts={countryNames}
                        interval={2500}
                        typographyClass="text-white"
                        className={`${isHeaderTextAnimationComplete ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in duration-500`}
                    />
                </div>
            </div>


            <div className="p-4 max-w-7xl mx-auto py-20">
                <SectionTitle title="Explore You Dream Destination" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {COUNTRIES_DATA.map((item, index) => (
                        <div key={`study-abroad-country-${index}`} className="bg-white rounded-xl flex flex-col">
                            <div className="relative h-64">
                                <Image
                                    src={item.image}
                                    alt={`${index}_${item.country}`}
                                    fill
                                    priority
                                    className="rounded-t-xl w-full h-full object-cover !relative"
                                />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {item.country}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col gap-6 justify-between">
                                <Typography variant='p' className='leading-relaxed'>
                                    {item.description}
                                </Typography>
                                <Link
                                    // className="text-base pb-2"
                                    // className={`${defaultNavLinkClassName} ${item.isActive && "!bg-secondary"
                                    //   }`}
                                    href={`/study-abroad/${item.route}`}
                                >
                                    <ParticleButton size='xs' customClass='capitalize font-bold tracking-wider'>Learn More</ParticleButton>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
