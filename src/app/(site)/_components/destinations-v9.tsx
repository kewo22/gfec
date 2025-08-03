"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { COUNTRIES } from '../_constants/countries.constants';
import SectionTitle from './section-title';
import { Typography } from '@/app/_components/ui/typography';

const ScrollAnimationSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  // Sample data array - replace with your actual country data
  // const contentData = [
  //   {
  //     image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=400&fit=crop',
  //     title: 'United Kingdom',
  //     description: 'Discover world-class universities and rich cultural heritage. Study in the birthplace of the English language with globally recognized degrees and diverse academic opportunities.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=500&h=400&fit=crop',
  //     title: 'Malta',
  //     description: 'Experience Mediterranean charm while studying in English. Enjoy a safe, sunny island nation with European education standards and a vibrant international student community.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop',
  //     title: 'Dubai (UAE)',
  //     description: 'Study in a modern global hub where East meets West. Access cutting-edge facilities, multicultural campuses, and excellent career opportunities in the heart of the Middle East.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&h=400&fit=crop',
  //     title: 'Spain',
  //     description: 'Immerse yourself in vibrant culture while pursuing quality education. Learn in a country known for its warm hospitality, beautiful landscapes, and growing international programs.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=400&fit=crop',
  //     title: 'France',
  //     description: 'Study in the land of innovation and art. Experience world-renowned education, rich history, and cultural diversity while building your future in the heart of Europe.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=400&fit=crop',
  //     title: 'Germany',
  //     description: 'Access top-tier engineering and technology programs. Study in Europe\'s economic powerhouse with excellent research facilities, affordable education, and strong industry connections.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=500&h=400&fit=crop',
  //     title: 'South Korea',
  //     description: 'Explore advanced technology and rich traditions. Study in Asia\'s education leader with modern campuses, innovative programs, and growing global influence in technology and culture.',
  //   }
  // ];
  const contentData = COUNTRIES;


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Listen to scroll progress and update active index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (contentData.length - 1));
    if (newIndex !== activeIndex) {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    }
  });

  const slideVariants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: any) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <>
      {/* Main scroll section - height based on number of items */}
      <div ref={containerRef} className="relative" style={{ height: `${contentData.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
          <div className="w-full max-w-6xl mx-auto px-8">

            {/* Fixed Section Title */}
            <SectionTitle title="Explore You Dream Destination" />
            {/* <div className="text-center mb-16">
              <h1 className="text-6xl font-bold text-gray-900">
                Study Destinations
              </h1>
            </div> */}

            {/* Content Container - Fixed 600px height */}
            <div className="relative h-[600px] flex items-center justify-center">

              {/* Current active item */}
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex items-center justify-center w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl w-full">
                  {/* Image */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={contentData[activeIndex].image}
                        alt={contentData[activeIndex].country}
                        fill
                        priority
                        className="rounded-xl w-full h-full object-cover !relative"
                      />
                      {/* <img
                        src={contentData[activeIndex].image}
                        alt={contentData[activeIndex].title}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                    <Typography variant="h2">{contentData[activeIndex].country}</Typography>
                    <Typography variant="p">{contentData[activeIndex].description}</Typography>
                    {/* <h2 className="text-4xl font-bold text-gray-900">
                      {contentData[activeIndex].country}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {contentData[activeIndex].description}
                    </p> */}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {contentData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-gray-700' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Country counter */}
            <div className="absolute top-8 right-8 text-gray-500 text-sm font-medium">
              {activeIndex + 1} / {contentData.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimationSection;