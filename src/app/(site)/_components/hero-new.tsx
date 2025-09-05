// "use client";

"use client"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
// import { motion } from "motion/react"
import Image from "next/image";
import { COUNTRIES } from "../_constants/countries.constants";
import { TextFade } from "./text-fade";
import { Typography } from "@/app/_components/ui/typography";
import { SequentialTextFade } from "./sequence-fade";
import { FullscreenImageSlider } from "./full-screen-image-slider";
import NavigationNew from "./navigation-new";

export default function HeroNew() {

  const images = [
    {
      src: "/new/slider02.jpg",
      alt: "Beautiful landscape with mountains"
    },
    {
      src: "https://fastly.picsum.photos/id/237/1920/1080.jpg?hmac=1hPzsubx1j8fMddzUgP5NbuX2rNLOEaQML1rD_g1C5Y",
      alt: "Urban cityscape at night"
    },
    {
      src: "https://fastly.picsum.photos/id/1/1920/1080.jpg?hmac=F3y4Fj0qI8heo51givSFTbNc8P5g1eR8ztnE7zDiVDg",
      alt: "Serene beach at sunset"
    },
    {
      src: "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
      alt: "Dense forest with sunlight streaming through trees"
    }
  ];

  const [index, setIndex] = useState(0)
  const [indexEeee, setEeeIndex] = useState(0)

  const words = ["UK", "Malta", "Dubai", "Spain", "Canada", "Germany", "France"];
  const text = "Study with GFEC in";

  const texts = ['Your success journey start with us!', 'Better Choices for a better future', 'Build your application portfolio with our experts'];

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
    // <Image
    //   src={COUNTRIES[0].image}
    //   alt={`country-${COUNTRIES[0].image}`}
    //   fill
    //   priority
    //   className="rounded-xl"
    // />
    // <div className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center justify-center mx-auto mt-48">
    //   {text}&nbsp;
    //   <AnimatePresence mode="wait">
    //     <motion.p
    //       key={words[index]}
    //       initial={{ opacity: 0, y: -40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       exit={{ opacity: 0, y: 40 }}
    //       transition={{ duration: 0.5 }}
    //       className="min-w-[222px] text-left"
    //     >
    //       {words[index]}
    //     </motion.p>
    //   </AnimatePresence>
    // </div>

    // <TextFade
    //   direction="up"
    // >
    //   <Typography
    //     variant="h1"
    //     className=""
    //   >
    //     Start your success journey with GFEC!
    //   </Typography>
    //   <Typography
    //     variant="h1"
    //     className=""
    //   >
    //     GFEC Great
    //   </Typography>
    //   <Typography
    //     variant="h1"
    //     className=""
    //   >
    //     In Srilanka
    //   </Typography>
    // </TextFade>

    // <SequentialTextFade
    //   direction="up"
    //   texts={texts}
    //   interval={2000} // Change text every 2 seconds
    // />

    <div>
      {/* className='fixed top-0 left-0 w-full z-[1]' */}
      {/* <NavigationNew className='sticky top-0 left-0 w-full z-50' /> */}
      <FullscreenImageSlider
        images={images}
        autoPlay={true}
        interval={5000}
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
        <SequentialTextFade
          direction="up"
          texts={texts}
          interval={5000} // Change text every 5 seconds
          typographyClass="text-white"
        />
      </div>
    </div>
  )
}