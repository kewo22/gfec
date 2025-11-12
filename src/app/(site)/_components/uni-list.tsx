"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { UNIVERSITIES } from '../_constants/countries.constants';
import UniversityPartnerItem from './uni-item';

export type UniversityPartnersGridProps = {
  countryFilter?: string
}

const UniversityPartnersGrid = (props: UniversityPartnersGridProps) => {

  const { countryFilter = 'all' } = props;

  const [filter, setFilter] = useState(countryFilter);

  const universities = [...UNIVERSITIES]

  const filters = [
    { key: 'all', label: 'All Universities', count: universities.length },
    { key: 'uae', label: 'UAE', count: universities.filter(u => u.category === 'uae').length },
    { key: 'united_kingdom', label: 'UK', count: universities.filter(u => u.category === 'united_kingdom').length },
    { key: 'france', label: 'France', count: universities.filter(u => u.category === 'france').length },
    { key: 'germany', label: 'Germany', count: universities.filter(u => u.category === 'germany').length },
    { key: 'spain', label: 'Spain', count: universities.filter(u => u.category === 'spain').length },
    { key: 'malta', label: 'Malta', count: universities.filter(u => u.category === 'malta').length },
    { key: 'australia', label: 'Australia', count: universities.filter(u => u.category === 'australia').length },
    { key: 'ireland', label: 'Ireland', count: universities.filter(u => u.category === 'ireland').length },
    { key: 'singapore', label: 'Singapore', count: universities.filter(u => u.category === 'singapore').length },
  ];

  const filteredUniversities = filter === countryFilter ? universities : universities.filter(university => university.category === filter);

  return (
    <div className="min-h-screen py-16">
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
            We&apos;ve partnered with world-renowned institutions to provide you with exceptional educational opportunities across the globe.
          </p>
          {/* <div className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block text-sm font-semibold">
            {universities.length}+ Partner Universities
          </div> */}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${filter === filterItem.key
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
            >
              {filterItem.label} ({filterItem.count})
            </button>
          ))}
        </motion.div>

        {/* Universities Grid */}
        <UniversityPartnerItem universities={filteredUniversities} countryFilter={filter} />

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