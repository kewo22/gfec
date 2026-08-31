'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Download, Share2 } from 'lucide-react';
import { Typography } from '@/app/_components/ui/typography';

import agentMeetup1 from "../../../../public/comp/events/agent_meetup/agent-meetup-1.webp";
import agentMeetup2 from "../../../../public/comp/events/agent_meetup/agent-meetup-2.webp";
import agentMeetup3 from "../../../../public/comp/events/agent_meetup/agent-meetup-3.webp";
import agentMeetup4 from "../../../../public/comp/events/agent_meetup/agent-meetup-4.webp";
import agentMeetup5 from "../../../../public/comp/events/agent_meetup/agent-meetup-5.webp";
import agentMeetup6 from "../../../../public/comp/events/agent_meetup/agent-meetup-6.webp";
import agentMeetup7 from "../../../../public/comp/events/agent_meetup/agent-meetup-7.webp";
import agentMeetup8 from "../../../../public/comp/events/agent_meetup/agent-meetup-8.webp";
import agentMeetup9 from "../../../../public/comp/events/agent_meetup/agent-meetup-9.webp";
import agentMeetup10 from "../../../../public/comp/events/agent_meetup/agent-meetup-10.webp";
import agentMeetup11 from "../../../../public/comp/events/agent_meetup/agent-meetup-11.webp";
import agentMeetup12 from "../../../../public/comp/events/agent_meetup/agent-meetup-12.webp";
import agentMeetup13 from "../../../../public/comp/events/agent_meetup/agent-meetup-13.webp";
import agentMeetup15 from "../../../../public/comp/events/agent_meetup/agent-meetup-15.webp";
import agentMeetup16 from "../../../../public/comp/events/agent_meetup/agent-meetup-16.webp";
import agentMeetup17 from "../../../../public/comp/events/agent_meetup/agent-meetup-17.webp";
import agentMeetup18 from "../../../../public/comp/events/agent_meetup/agent-meetup-18.webp";
import agentMeetup19 from "../../../../public/comp/events/agent_meetup/agent-meetup-19.webp";
import agentMeetup20 from "../../../../public/comp/events/agent_meetup/agent-meetup-20.webp";

import gdeu1 from "../../../../public/comp/events/gdeu/GDEU-1.webp";
import gdeu2 from "../../../../public/comp/events/gdeu/GDEU-2.webp";
import gdeu3 from "../../../../public/comp/events/gdeu/GDEU-3.webp";
import gdeu4 from "../../../../public/comp/events/gdeu/GDEU-4.webp";
import gdeu5 from "../../../../public/comp/events/gdeu/GDEU-5.webp";
import gdeu6 from "../../../../public/comp/events/gdeu/GDEU-6.webp";
import gdeu7 from "../../../../public/comp/events/gdeu/GDEU-7.webp";

import opGrandbell1 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-1.webp";
import opGrandbell2 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-2.webp";
import opGrandbell3 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-3.webp";
import opGrandbell4 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-4.webp";
import opGrandbell5 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-5.webp";
import opGrandbell6 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-6.webp";
import opGrandbell7 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-7.webp";
import opGrandbell8 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-8.webp";
import opGrandbell9 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-9.webp";
import opGrandbell10 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-10.webp";
import opGrandbell11 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-11.webp";
import opGrandbell12 from "../../../../public/comp/events/open_day/grandbell/open-da-granbell-12.webp";

import openDay1 from "../../../../public/comp/events/open_day/openday-1.webp";
import openDay2 from "../../../../public/comp/events/open_day/openday-2.webp";
import openDay3 from "../../../../public/comp/events/open_day/openday-3.webp";
import openDay4 from "../../../../public/comp/events/open_day/openday-4.webp";
import openDay5 from "../../../../public/comp/events/open_day/openday-5.webp";
import openDay6 from "../../../../public/comp/events/open_day/openday-6.webp";
import openDay7 from "../../../../public/comp/events/open_day/openday-7.webp";
import openDay8 from "../../../../public/comp/events/open_day/openday-8.webp";
import openDay9 from "../../../../public/comp/events/open_day/openday-9.webp";
import openDay10 from "../../../../public/comp/events/open_day/openday-10.webp";
import openDay11 from "../../../../public/comp/events/open_day/openday-11.webp";
import openDay12 from "../../../../public/comp/events/open_day/openday-12.webp";
import openDay13 from "../../../../public/comp/events/open_day/openday-13.webp";
import openDay14 from "../../../../public/comp/events/open_day/openday-14.webp";
import openDay15 from "../../../../public/comp/events/open_day/openday-15.webp";
import openDay16 from "../../../../public/comp/events/open_day/openday-16.webp";
import openDay17 from "../../../../public/comp/events/open_day/openday-17.webp";
import openDay18 from "../../../../public/comp/events/open_day/openday-18.webp";
import openDay19 from "../../../../public/comp/events/open_day/openday-19.webp";
import openDay20 from "../../../../public/comp/events/open_day/openday-20.webp";

import stu1 from "../../../../public/comp/events/students/stu-1.webp";
import stu2 from "../../../../public/comp/events/students/stu-2.webp";
import stu3 from "../../../../public/comp/events/students/stu-3.webp";
import stu4 from "../../../../public/comp/events/students/stu-4.webp";
import stu5 from "../../../../public/comp/events/students/stu-5.webp";
import stu6 from "../../../../public/comp/events/students/stu-6.webp";
import stu7 from "../../../../public/comp/events/students/stu-7.webp";
import stu8 from "../../../../public/comp/events/students/stu-8.webp";
import stu9 from "../../../../public/comp/events/students/stu-9.webp";
import stu10 from "../../../../public/comp/events/students/stu-10.webp";
import stu11 from "../../../../public/comp/events/students/stu-11.webp";
import stu12 from "../../../../public/comp/events/students/stu-12.webp";
import stu13 from "../../../../public/comp/events/students/stu-13.webp";

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [columns, setColumns] = useState(4);
  const [activeFilter, setActiveFilter] = useState<any>('all');
  // const [filteredImages, setFilteredImages] = useState<any>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const images = [
    { id: 1, src: agentMeetup1, alt: 'agentMeetup1', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 2, src: agentMeetup2, alt: 'agentMeetup2', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 3, src: agentMeetup3, alt: 'agentMeetup3', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 4, src: agentMeetup4, alt: 'agentMeetup4', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 5, src: agentMeetup5, alt: 'agentMeetup5', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 6, src: agentMeetup6, alt: 'agentMeetup6', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 7, src: agentMeetup7, alt: 'agentMeetup7', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 8, src: agentMeetup8, alt: 'agentMeetup8', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 9, src: agentMeetup9, alt: 'agentMeetup9', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 10, src: agentMeetup10, alt: 'agentMeetup10', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 11, src: agentMeetup11, alt: 'agentMeetup11', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 12, src: agentMeetup12, alt: 'agentMeetup12', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 13, src: agentMeetup13, alt: 'agentMeetup13', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 15, src: agentMeetup15, alt: 'agentMeetup15', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 16, src: agentMeetup16, alt: 'agentMeetup16', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 17, src: agentMeetup17, alt: 'agentMeetup17', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 18, src: agentMeetup18, alt: 'agentMeetup18', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 19, src: agentMeetup19, alt: 'agentMeetup19', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
    { id: 20, src: agentMeetup20, alt: 'agentMeetup20', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },

    { id: 21, src: gdeu1, alt: 'gdeu1', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 22, src: gdeu2, alt: 'gdeu2', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 23, src: gdeu3, alt: 'gdeu3', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 24, src: gdeu4, alt: 'gdeu4', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 25, src: gdeu5, alt: 'gdeu5', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 26, src: gdeu6, alt: 'gdeu6', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
    { id: 27, src: gdeu7, alt: 'gdeu7', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },

    { id: 29, src: opGrandbell1, alt: 'opGrandbell1', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 30, src: opGrandbell2, alt: 'opGrandbell2', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 31, src: opGrandbell3, alt: 'opGrandbell3', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 32, src: opGrandbell4, alt: 'opGrandbell4', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 33, src: opGrandbell5, alt: 'opGrandbell5', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 34, src: opGrandbell6, alt: 'opGrandbell6', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 35, src: opGrandbell7, alt: 'opGrandbell7', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 36, src: opGrandbell8, alt: 'opGrandbell8', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 37, src: opGrandbell9, alt: 'opGrandbell9', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 38, src: opGrandbell10, alt: 'opGrandbell10', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 39, src: opGrandbell11, alt: 'opGrandbell11', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
    { id: 40, src: opGrandbell12, alt: 'opGrandbell12', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },

    { id: 41, src: openDay1, alt: 'openDay1', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 42, src: openDay2, alt: 'openDay2', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 43, src: openDay3, alt: 'openDay3', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 44, src: openDay4, alt: 'openDay4', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 45, src: openDay5, alt: 'openDay5', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 46, src: openDay6, alt: 'openDay6', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 47, src: openDay7, alt: 'openDay7', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 48, src: openDay8, alt: 'openDay8', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 49, src: openDay9, alt: 'openDay9', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 50, src: openDay10, alt: 'openDay10', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 51, src: openDay11, alt: 'openDay11', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 52, src: openDay12, alt: 'openDay12', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 53, src: openDay13, alt: 'openDay13', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 54, src: openDay14, alt: 'openDay14', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 55, src: openDay15, alt: 'openDay15', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 56, src: openDay16, alt: 'openDay16', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 57, src: openDay17, alt: 'openDay17', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 58, src: openDay18, alt: 'openDay18', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 59, src: openDay19, alt: 'openDay19', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
    { id: 60, src: openDay20, alt: 'openDay20', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },

    { id: 61, src: stu1, alt: 'openDay1', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 62, src: stu4, alt: 'openDay4', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 63, src: stu5, alt: 'openDay5', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 64, src: stu6, alt: 'openDay6', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 65, src: stu7, alt: 'openDay7', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 66, src: stu8, alt: 'openDay8', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 67, src: stu2, alt: 'openDay2', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 68, src: stu9, alt: 'openDay9', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 69, src: stu10, alt: 'openDay10', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 70, src: stu11, alt: 'openDay11', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 71, src: stu12, alt: 'openDay12', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 72, src: stu3, alt: 'openDay3', width: 400, height: 600, categoryId: 'student', category: 'Student' },
    { id: 73, src: stu13, alt: 'openDay13', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All', count: images.length },
    { id: 'Agent_Meetup', name: 'Agent Meetup', count: images.filter(img => img.categoryId === 'Agent_Meetup').length },
    { id: 'GDEU', name: 'GDEU', count: images.filter(img => img.categoryId === 'GDEU').length },
    { id: 'Openday_2025', name: 'Openday 2025', count: images.filter(img => img.categoryId === 'Openday_2025').length },
    { id: 'student', name: 'Students', count: images.filter(img => img.categoryId === 'student').length },
  ];

  // Adjust columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // // Filter images based on active filter
  // useEffect(() => {
  //   if (activeFilter === 'all') {
  //     setFilteredImages(images);
  //   } else {
  //     setFilteredImages(images.filter(image => image.categoryId === activeFilter));
  //   }
  // }, [activeFilter]);

  // // Initialize filtered images
  // useEffect(() => {
  //   setFilteredImages(images);
  // }, []);

  // Filter images based on active filter (computed, not state)
  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(image => image.categoryId === activeFilter);

  // Initialize after mount to trigger animations
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Distribute images across columns for masonry layout
  const distributeImages = () => {
    const cols: any = Array.from({ length: columns }, () => []);
    const colHeights: any = Array.from({ length: columns }, () => 0);

    filteredImages.forEach((image: any) => {
      const shortestCol = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestCol].push(image);
      colHeights[shortestCol] += image.height;
    });

    return cols;
  };

  const imageColumns = distributeImages();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      backdropFilter: "blur(0px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      backdropFilter: "blur(10px)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      backdropFilter: "blur(0px)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4">
      {/* Header */}
      <motion.div
        className="text-center my-10 lg:my-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant='h1' className="text-primary">
          Explore Our Photo Gallery
        </Typography>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeFilter === category.id
              ? 'bg-linear-to-r from-primary to-secondary text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
              }`}
            whileHover={{ scale: activeFilter === category.id ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center space-x-2">
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === category.id
                ? 'bg-white bg-opacity-20 text-secondary'
                : 'bg-gray-100 text-gray-500'
                }`}>
                {category.count}
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInitialized ? "visible" : "hidden"}
          exit="hidden"
        >
          <div className="flex gap-4">
            {imageColumns.map((column: any, colIndex: any) => (
              <div key={colIndex} className="flex-1 space-y-4">
                {column.map((image: any) => (
                  <motion.div
                    key={image.id}
                    variants={imageVariants}
                    layout
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                    whileHover={{
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={image.id <= 4}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-black bg-opacity-70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
                        >
                          <Heart className="w-5 h-5 text-red-500" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
                        >
                          <Download className="w-5 h-5 text-gray-700" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
                        >
                          <Share2 className="w-5 h-5 text-blue-500" />
                        </motion.button>
                      </div>
                    </div> */}

                    {/* Image info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-80" />

            {/* Modal content */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              layoutId={`image-${selectedImage.id}`}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />

              {/* Image details */}
              {/* <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-gray-600 mb-4">
                  A beautiful image captured with stunning detail and composition.
                </p>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Like</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </motion.button>
                </div>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;