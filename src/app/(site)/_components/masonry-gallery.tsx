'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

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

type GalleryImage = {
  id: number;
  src: typeof agentMeetup1;
  alt: string;
  width: number;
  height: number;
  categoryId: string;
  category: string;
};

const IMAGES: GalleryImage[] = [
  { id: 1, src: agentMeetup1, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 2, src: agentMeetup2, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 3, src: agentMeetup3, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 4, src: agentMeetup4, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 5, src: agentMeetup5, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 6, src: agentMeetup6, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 7, src: agentMeetup7, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 8, src: agentMeetup8, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 9, src: agentMeetup9, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 10, src: agentMeetup10, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 11, src: agentMeetup11, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 12, src: agentMeetup12, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 13, src: agentMeetup13, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 15, src: agentMeetup15, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 16, src: agentMeetup16, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 17, src: agentMeetup17, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 18, src: agentMeetup18, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 19, src: agentMeetup19, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },
  { id: 20, src: agentMeetup20, alt: 'GFEC agent meetup event', width: 400, height: 600, categoryId: 'Agent_Meetup', category: 'Agent Meetup' },

  { id: 21, src: gdeu1, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 22, src: gdeu2, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 23, src: gdeu3, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 24, src: gdeu4, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 25, src: gdeu5, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 26, src: gdeu6, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },
  { id: 27, src: gdeu7, alt: 'GFEC at GDEU education fair', width: 400, height: 600, categoryId: 'GDEU', category: 'GDEU' },

  { id: 29, src: opGrandbell1, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 30, src: opGrandbell2, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 31, src: opGrandbell3, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 32, src: opGrandbell4, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 33, src: opGrandbell5, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 34, src: opGrandbell6, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 35, src: opGrandbell7, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 36, src: opGrandbell8, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 37, src: opGrandbell9, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 38, src: opGrandbell10, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 39, src: opGrandbell11, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },
  { id: 40, src: opGrandbell12, alt: 'GFEC open day at Granbell', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday 2025, Granbell' },

  { id: 41, src: openDay1, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 42, src: openDay2, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 43, src: openDay3, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 44, src: openDay4, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 45, src: openDay5, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 46, src: openDay6, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 47, src: openDay7, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 48, src: openDay8, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 49, src: openDay9, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 50, src: openDay10, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 51, src: openDay11, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 52, src: openDay12, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 53, src: openDay13, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 54, src: openDay14, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 55, src: openDay15, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 56, src: openDay16, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 57, src: openDay17, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 58, src: openDay18, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 59, src: openDay19, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },
  { id: 60, src: openDay20, alt: 'GFEC open day event', width: 400, height: 600, categoryId: 'Openday_2025', category: 'Openday' },

  { id: 61, src: stu1, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 62, src: stu4, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 63, src: stu5, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 64, src: stu6, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 65, src: stu7, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 66, src: stu8, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 67, src: stu2, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 68, src: stu9, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 69, src: stu10, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 70, src: stu11, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 71, src: stu12, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 72, src: stu3, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
  { id: 73, src: stu13, alt: 'GFEC student experience', width: 400, height: 600, categoryId: 'student', category: 'Student' },
];

const CATEGORIES = [
  { id: 'all', name: 'All', count: IMAGES.length },
  { id: 'Agent_Meetup', name: 'Agent Meetup', count: IMAGES.filter((img) => img.categoryId === 'Agent_Meetup').length },
  { id: 'GDEU', name: 'GDEU', count: IMAGES.filter((img) => img.categoryId === 'GDEU').length },
  { id: 'Openday_2025', name: 'Openday 2025', count: IMAGES.filter((img) => img.categoryId === 'Openday_2025').length },
  { id: 'student', name: 'Students', count: IMAGES.filter((img) => img.categoryId === 'student').length },
];

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [columns, setColumns] = useState(4);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filteredImages = activeFilter === 'all' ? IMAGES : IMAGES.filter((image) => image.categoryId === activeFilter);

  const distributeImages = () => {
    const cols: GalleryImage[][] = Array.from({ length: columns }, () => []);
    const colHeights: number[] = Array.from({ length: columns }, () => 0);

    filteredImages.forEach((image) => {
      const shortestCol = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestCol].push(image);
      colHeights[shortestCol] += image.height;
    });

    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium font-display transition-all duration-300 cursor-pointer border ${activeFilter === category.id
              ? 'bg-navy text-paper border-navy'
              : 'bg-transparent text-navy/70 border-hairline hover:border-navy/40'
              }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        {imageColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 space-y-4">
            {column.map((image) => (
              <button
                type="button"
                key={image.id}
                className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-surface block w-full text-left"
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
                />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-navy-deep/80 text-paper text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-deep to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-body text-paper text-sm">{image.alt}</p>
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-navy-deep/85" />

            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-surface rounded-sm overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 bg-navy-deep/60 hover:bg-navy-deep/80 rounded-full transition-all text-paper cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
