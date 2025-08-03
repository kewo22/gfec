"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from './section-title';
import { COUNTRIES } from '../_constants/countries.constants';
import Image from 'next/image';
import { Typography } from '@/app/_components/ui/typography';

const ScrollAnimationSection = () => {
  const containerRef = useRef(null);

  // Sample data array
  // const contentData1 = [
  //   {
  //     image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=400&fit=crop',
  //     title: 'Australia',
  //     description: 'Explore breathtaking mountain landscapes and discover hidden trails that lead to spectacular views.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
  //     title: 'Ocean Depths',
  //     description: 'Dive into the mysterious world beneath the waves and encounter marine life in their natural habitat.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop',
  //     title: 'Forest Whispers',
  //     description: 'Listen to the ancient stories told by towering trees in pristine wilderness areas.',
  //   },
  //   {
  //     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
  //     title: 'Desert Mirages',
  //     description: 'Experience the raw beauty and endless horizons of vast desert landscapes.',
  //   }
  // ];

  const contentData = COUNTRIES;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });



  // Create transforms for all items at the component level
  const itemTransforms = contentData.map((_, index) => {
    const itemStart = index / contentData.length;
    const itemEnd = (index + 1) / contentData.length;
    const transitionDuration = 0.05; // 15% of each item's scroll time for transitions

    // Current item coming in
    const fadeInStart = itemStart;
    const fadeInEnd = itemStart + transitionDuration;

    // Current item going out  
    const fadeOutStart = itemEnd - transitionDuration;
    const fadeOutEnd = itemEnd;

    return {
      opacity: useTransform(
        scrollYProgress,
        [fadeInStart - 0.05, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, fadeOutEnd + 0.05],
        [0, 0, 1, 1, 0, 0]
      ),
      scale: useTransform(
        scrollYProgress,
        [fadeInStart - 0.05, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, fadeOutEnd + 0.05],
        [0.9, 0.9, 1, 1, 0.9, 0.9]
      ),
      y: useTransform(
        scrollYProgress,
        [fadeInStart - 0.05, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, fadeOutEnd + 0.05],
        [30, 30, 0, 0, -30, -30]
      ),
      // Add rotation for more dynamic transition
      rotateX: useTransform(
        scrollYProgress,
        [fadeInStart - 0.05, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd, fadeOutEnd + 0.05],
        [10, 10, 0, 0, -10, -10]
      )
    };
  });

  return (
    <>
      {/* Main scroll section - height based on number of items */}
      <div ref={containerRef} className="relative" style={{ height: `${contentData.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white">
          <div className="w-full max-w-6xl mx-auto px-8">

            {/* Fixed Section Title */}
            <div className="text-center mb-16">
              <SectionTitle title="Explore You Dream Destination" />

              {/* <h1 className="text-6xl font-bold text-gray-900">
                Section Title
              </h1> */}
            </div>

            {/* Content Container - Fixed 600px height */}
            <div className="relative h-[600px] flex items-center justify-center">

              {/* Render all items with individual animations */}
              {contentData.map((item, index) => {
                const transforms = itemTransforms[index];

                return (
                  <motion.div
                    key={index}
                    style={{
                      opacity: transforms.opacity,
                      scale: transforms.scale,
                      y: transforms.y,
                      rotateX: transforms.rotateX
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl w-full">
                      {/* Image */}
                      <div className="flex items-center justify-center">
                        <div className="w-full max-w-md h-96 rounded-lg overflow-hidden shadow-xl">
                          <Image
                            src={item.image}
                            alt={`item-${item.image}`}
                            fill
                            priority
                            className="rounded-xl w-full h-full object-cover !relative"
                          />

                          {/* <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          /> */}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                        <Typography variant="h2">{item.country}</Typography>
                        <Typography variant="p">{item.description}</Typography>
                        {/* <h2 className="text-4xl font-bold text-gray-900"> */}
                        {/* {item.title} */}
                        {/* {item.country} */}
                        {/* </h2> */}
                        {/* <p className="text-lg font-bold text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                          {item.description}
                        </p> */}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {contentData.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                    style={{
                      backgroundColor: useTransform(
                        scrollYProgress,
                        [index / contentData.length, (index + 1) / contentData.length],
                        ["#d1d5db", "#374151"]
                      )
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimationSection;