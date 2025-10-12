"use client";

import { TypewriterEffect } from "../../_components/typewriter-effect";
import { useParams } from "next/navigation";
import { COUNTRIES, UNIVERSITIES } from "../../_constants/countries.constants";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Uk from "../../_components/countries/uk";
import Ger from "../../_components/countries/ger";
import Fra from "../../_components/countries/fra";
import Dxb from "../../_components/countries/dxb";
import Malta from "../../_components/countries/malta";
import Spain from "../../_components/countries/spain";
import Sk from "../../_components/countries/sk";
import UniversityPartnerItem from "../../_components/uni-item";

type DestinationPageParams = {
    country: string;
};

export default function DestinationPage() {
    const { country } = useParams<DestinationPageParams>();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const foundCountry = COUNTRIES.find(_country => _country.route.toLowerCase() === country.toLowerCase());

    const filteredUniversities = UNIVERSITIES.filter(university => university.category === foundCountry?.id);

    if (!foundCountry) {
        return <><h1>Country not found</h1></>
    }

    const handleMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <section className="bg-slate-100">
            <motion.div
                className="relative w-full h-[400px] overflow-hidden cursor-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
            >
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{
                        scale: [1.1, 1.05, 1.1],
                        x: mousePosition.x * -20,
                        y: mousePosition.y * -15
                    }}
                    transition={{
                        scale: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        x: {
                            duration: 0.5,
                            ease: "easeOut"
                        },
                        y: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }}
                >
                    <div className="w-full h-full" style={{ transform: 'scale(1)' }}>
                        <Image
                            src={foundCountry.image}
                            alt="Parallax Banner"
                            fill
                            className="object-cover"
                            style={{
                                objectPosition: 'center center'
                            }}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </div>


                </motion.div>

                {/* Gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                />

                {/* Content */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="text-center text-white">
                        <motion.h1
                            className="text-6xl font-bold mb-4 uppercase"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                        >
                            {`STUDY IN ${foundCountry.country}`}
                        </motion.h1>
                        {/* <motion.p
                            className="text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            Learn more
                        </motion.p> */}
                        {/* <motion.div
                            className="mt-4 text-sm opacity-75"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            Move your mouse to explore the image
                        </motion.div> */}
                    </div>
                </motion.div>

                {/* Mouse follower indicator - COMMENTED BECAUSE ITS NOT VISIBLE */}
                {/* <motion.div
                    className="absolute w-4 h-4 bg-white/30 rounded-full pointer-events-none"
                    animate={{
                        x: mousePosition.x * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                        y: mousePosition.y * 384, // Banner height
                    }}
                    transition={{ duration: 0.1 }}
                    style={{ translateX: '-50%', translateY: '-50%' }}
                /> */}
            </motion.div>

            <div className="max-w-7xl mx-auto py-20">
                {foundCountry.id === "united_kingdom" && <Uk />}
                {foundCountry.id === "germany" && <Ger />}
                {foundCountry.id === "france" && <Fra />}
                {foundCountry.id === "uae" && <Dxb />}
                {foundCountry.id === "malta" && <Malta />}
                {foundCountry.id === "spain" && <Spain />}
                {foundCountry.id === "south_korea" && <Sk />}
            </div>

            {/* Universities Grid */}

            <div className="px-10 xl:px-0 max-w-7xl mx-auto pb-20">
                <UniversityPartnerItem universities={filteredUniversities} countryFilter={foundCountry.id} />
            </div>
        </section>
    )
}