// "use client";

"use client"
import { useEffect, useState } from "react";
import { SequentialTextFade } from "./sequence-fade";
import { FullscreenImageSlider } from "./full-screen-image-slider";
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


export default function HeroNew() {

  const images = [
    {
      src: aus,
      alt: "Australia"
    },
    {
      src: dxb,
      alt: "Dubai"
    },
    {
      src: france,
      alt: "France"
    },
    {
      src: germany,
      alt: "Germany"
    },
    {
      src: malta,
      alt: "Malta"
    },
    {
      src: singapore,
      alt: "Singapore"
    },
    {
      src: spain,
      alt: "Aus"
    },
    {
      src: south_korea,
      alt: "South Korea"
    },
  ];

  const [index, setIndex] = useState(0)
  const [indexEeee, setEeeIndex] = useState(0)

  const words = ["UK", "Malta", "Dubai", "Spain", "Canada", "Germany", "France"];
  const text = "Study with GFEC in";

  const texts = images.map(img => `Study with GFEC in ${img.alt}`);
  // const texts = ['Your success journey start with us!', 'Better Choices for a better future', 'Build your application portfolio with our experts'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 1 second
    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words.length])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setEeeIndex((prevIndex) => (prevIndex + 1) % eee.length)
  //   }, 2000) // Change word every 1 second
  //   // Clean up interval on unmount
  //   return () => clearInterval(interval)
  // }, [eee.length])

  return (



    <div>

      {/* <div className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center justify-center mx-auto mt-48">
        {text}&nbsp;
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.9 }}
            className="min-w-[222px] text-left"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div> */}


      {/* <TextFade
        direction="up"
      >
        <Typography
          variant="h1"
          className=""
        >
          Start your success journey with GFEC!
        </Typography>
        <Typography
          variant="h1"
          className=""
        >
          GFEC Great
        </Typography>
        <Typography
          variant="h1"
          className=""
        >
          In Srilanka
        </Typography>
      </TextFade> */}

      <FullscreenImageSlider
        images={images}
        autoPlay={true}
        interval={5000}
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
        <SequentialTextFade
          direction="up"
          texts={texts}
          interval={4000} // Change text every 4 seconds
          typographyClass="text-white"
        />
      </div>
    </div>
  )
}