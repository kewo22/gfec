"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';


import Image from 'next/image';
import { UNIVERSITIES } from '../_constants/countries.constants';


const UniversityPartnersGrid = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<number>(0);

  const universities = [...UNIVERSITIES]

  const filters = [
    { key: 'all', label: 'All Universities', count: universities.length },
    { key: 'uae', label: 'UAE', count: universities.filter(u => u.category === 'uae').length },
    { key: 'uk', label: 'UK', count: universities.filter(u => u.category === 'uk').length },
    { key: 'france', label: 'France', count: universities.filter(u => u.category === 'france').length },
    { key: 'germany', label: 'Germany', count: universities.filter(u => u.category === 'germany').length },
    { key: 'spain', label: 'Spain', count: universities.filter(u => u.category === 'spain').length },
    { key: 'malta', label: 'Malta', count: universities.filter(u => u.category === 'malta').length },
  ];

  const filteredUniversities = filter === 'all'
    ? universities
    : universities.filter(university => university.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our University Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We've partnered with world-renowned institutions to provide you with exceptional educational opportunities across the globe.
          </p>
          {/* <div className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block text-sm font-semibold">
            {universities.length}+ Partner Universities
          </div> */}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === filterItem.key
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
            >
              {filterItem.label} ({filterItem.count})
            </button>
          ))}
        </motion.div>

        {/* Universities Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter} // Re-trigger animation when filter changes
        >
          {filteredUniversities.map((university) => (
            <motion.div
              key={university.id}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredId(university.id)}
              onHoverEnd={() => setHoveredId(0)}
              className="relative"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full"
              >
                {/* University Logo/Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={university.logo}
                    alt={university.name}
                    fill
                    priority
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Ranking Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      {university.ranking}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 truncate" title={university.name}>
                      {university.name}
                    </h3>

                    <div className="flex items-center text-gray-600 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{university.country}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Est. {university.established}</span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Popular Programs:</p>
                      <div className="flex flex-wrap gap-1">
                        {university.programs.slice(0, 2).map((program, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
                          >
                            {program}
                          </span>
                        ))}
                        {university.programs.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{university.programs.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="w-full bg-secondary text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-blue-600/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === university.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600 text-sm">Partner Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default UniversityPartnersGrid;