"use client"
import { useEffect, useState } from "react";

import aus from "../../../../public/comp/hero-banner/aus.webp";
import dxb from "../../../../public/comp/hero-banner/dxb.webp";
import france from "../../../../public/comp/hero-banner/france.webp";
import germany from "../../../../public/comp/hero-banner/germany.webp";
import malta from "../../../../public/comp/hero-banner/malta.webp";
import singapore from "../../../../public/comp/hero-banner/singapore.webp";
import spain from "../../../../public/comp/hero-banner/spain.webp";
import south_korea from "../../../../public/comp/hero-banner/south-korea.webp";
import uk from "../../../../public/comp/hero-banner/uk.webp";
import { TextFade } from "./text-fade";
import { Typography } from "@/app/_components/ui/typography";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";


export default function HeroNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: uk,
      alt: "United Kingdom",
      description: "A blend of tradition and innovation in education"
    },
    {
      src: aus,
      alt: "Australia",
      description: "Where academic excellence meets endless adventure"
    },
    {
      src: dxb,
      alt: "Dubai",
      description: "Innovation and luxury in the heart of the Middle East"
    },
    {
      src: france,
      alt: "France",
      description: "Embrace culture, art, and world-class education"
    },
    {
      src: germany,
      alt: "Germany",
      description: "Engineering excellence and tuition-free opportunities"
    },
    {
      src: malta,
      alt: "Malta",
      description: "Mediterranean paradise with English-taught programs"
    },
    {
      src: singapore,
      alt: "Singapore",
      description: "Asia's gateway to cutting-edge technology and business"
    },
    {
      src: spain,
      alt: "Spain",
      description: "Rich heritage meets modern innovation and vibrant life"
    },
    {
      src: south_korea,
      alt: "South Korea",
      description: "K-culture hub with leading technology and research"
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[400px] xl:h-[800px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-white z-10 px-4"
            >
              <Typography variant="h1" className="mb-4">
                {images[currentIndex].alt}
              </Typography>
              <Typography variant="h4" className="mx-auto tracking-wider">
                {images[currentIndex].description}
              </Typography>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}