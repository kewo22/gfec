"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { COUNTRIES } from '../_constants/countries.constants';
import Image from 'next/image';

const DestinationsMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<any>(null);

  const contentData = COUNTRIES;

  // Handle scroll to update active index
  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : contentData.length - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < contentData.length - 1 ? activeIndex + 1 : 0;
    goToSlide(newIndex);
  };

  // Touch/drag handlers
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(handleScroll, 100);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore world-class education opportunities across the globe
          </p>
        </div> */}

        {/* Carousel Container */}
        <div className="relative">

          {/* Navigation Arrows - Hidden on mobile */}
          {/* <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* <button
            onClick={goToNext}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                className="flex-none w-full snap-center px-2 md:px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                  {/* Mobile Layout - Stacked */}
                  <div className="">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={`${index}_${item.country}`}
                        fill
                        priority
                        className="rounded-xl w-full h-full object-cover !relative"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {item.country}
                        </h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed text-base">
                        {item.description}
                      </p>
                      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Desktop Layout - Side by side */}
                  {/* <div className="hidden md:flex">
                    <div className="w-1/2 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="w-1/2 p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        {item.description}
                      </p>
                      <button className="self-start bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium">
                        Learn More
                      </button>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex
                ? 'bg-primary'
                : 'bg-secondary hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden justify-center mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to explore more destinations
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          {activeIndex + 1} of {contentData.length}
        </div>
      </div>
    </div>
  );
};

export default DestinationsMobile;