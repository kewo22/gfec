"use client";

import React, { useState } from "react";

import { twMerge } from "tailwind-merge";

import {
    COUNTRIES,
    PRE_SELECTED_COUNTRY,
} from "../_constants/countries.constants";
import { Country } from "../_types/country";

import { Typography } from "@/app/_components/ui/typography";

import uk from "../../../../public/comp/uk.webp";
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

export default function StudyAbroad() {
    const [selectedCountry, setSelectedCountry] = useState(PRE_SELECTED_COUNTRY);

    const onCountryClick = (country: Country) => {
        setSelectedCountry(country);
    };

    return (
        <section className="bg-slate-100">
            <div className="h-[400px] overflow-hidden relative">
                <Image
                    src={germany}
                    alt='qwd'
                    fill
                    priority
                    className="w-full h-full object-cover !relative"
                />
                <div className="text-white tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                    <TypewriterEffect text="STUDY IN FRANCE" loop={false} showCursor={false} />
                </div>
                {/* <Typography
                    variant="h1"
                    className="text-white tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
                >
                    STUDY IN FRANCE
                </Typography>*/}
            </div>



            {/* <div className="bg-southkorea-banner bg-center bg-cover w-full h-[300px] max-h-[300px] grid place-items-center">
                <Typography
                    variant="h1"
                    className="text-white tracking-wider"
                >
                    STUDY IN FRANCE
                </Typography>
            </div> */}


            <div className="p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium dicta consequuntur magnam aliquid! Sunt amet aut dignissimos similique, numquam quasi totam reprehenderit fuga, distinctio quos architecto velit quibusdam non odio quo vero libero? Vero repudiandae voluptates nihil ullam, dolores aperiam aspernatur animi accusamus hic quaerat molestias, fuga rerum facere nesciunt illum, magni totam eius? Quos, animi, nulla enim, quod natus maiores placeat neque quidem deserunt quibusdam eius aut consequuntur? Doloremque eum consequatur ipsa optio, tempore ducimus, neque aperiam a voluptas nostrum impedit dolorum? Voluptates, ducimus. Eligendi cum, quisquam officia dolore cumque odio! Consequuntur, assumenda. Eius, maxime illo a explicabo debitis deserunt aliquam ut tempore unde molestias facilis incidunt soluta ipsum fugiat facere tempora corrupti quibusdam, quia consequatur! Dolore expedita, tempore tempora, officiis rem nulla libero fugiat quam voluptatem porro voluptatibus culpa ut beatae dolor ab quos maxime maiores illum quod nihil autem et. Eaque corporis tempora inventore repellat neque atque, adipisci obcaecati tempore doloremque voluptas ipsum blanditiis libero commodi unde reiciendis reprehenderit earum possimus facilis! Veritatis possimus sequi eos, minus obcaecati nesciunt quia numquam quis vel facere voluptatum commodi dicta ipsum velit deleniti amet deserunt delectus minima, laudantium temporibus placeat? Dolore corrupti dignissimos delectus nihil animi officia iure autem. Quisquam, quia. Ratione, similique. Praesentium placeat delectus nobis deserunt enim amet ut, beatae ipsa asperiores dignissimos perspiciatis, quidem corporis numquam quia saepe? Quia itaque recusandae numquam soluta rem tenetur voluptatibus, odit iste in placeat dolores dolore, nemo tempore beatae. Nisi vero aut in quibusdam laborum veniam eos similique ullam porro laudantium exercitationem velit facilis nostrum, at voluptatibus eaque odio illum dignissimos eum unde deleniti, voluptates dolores atque quo? Porro, aliquid dolore earum temporibus beatae reprehenderit tempora in. Cumque vitae ea debitis ducimus nulla sunt impedit quae inventore qui unde. Omnis velit tempora facilis doloremque molestias, cupiditate laboriosam aperiam! Dolorum consequuntur magnam, libero impedit inventore, asperiores officia eligendi a possimus ex veritatis, neque optio tenetur maxime aliquid repudiandae? Assumenda blanditiis quisquam, fuga, quasi, iste corporis esse maxime consequuntur dolorum facilis voluptatem quam optio eius non? Optio accusamus non necessitatibus error? Laudantium saepe quo consequuntur, culpa libero nihil dicta eligendi. Fugit unde at recusandae architecto mollitia accusantium corrupti quo eius. Tempore ab minima aut enim. Esse nam, quae, obcaecati nostrum aliquam eius earum facilis, eligendi quod dicta iusto minima laboriosam? Exercitationem voluptatibus alias at expedita dolor ratione voluptate deleniti dolores repellat, rerum eum est veritatis obcaecati culpa totam eaque architecto laboriosam. Minima assumenda officia ipsam quasi quos provident. Maxime aspernatur similique reprehenderit eaque quibusdam sequi vitae quaerat nemo sed, mollitia est quae pariatur architecto. Culpa distinctio deserunt quod sequi impedit? Facere culpa omnis est quod amet expedita eaque eius beatae assumenda. Quasi, ea sequi quas eos ipsam sit dicta esse accusantium libero incidunt, facilis cumque suscipit, a vel tenetur modi quidem expedita ullam aliquam debitis rerum eum. Reiciendis, fugit aperiam accusamus nesciunt exercitationem architecto omnis perferendis saepe iste sapiente ipsam cumque quaerat sit explicabo delectus suscipit, maxime pariatur quis officiis aliquam iure, repellendus facere magnam inventore. Nostrum omnis quasi voluptatibus dolorem reiciendis?
            </div>

        </section>
    );
}
