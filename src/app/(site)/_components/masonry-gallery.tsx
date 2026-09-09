'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import { IMAGES, type GalleryImage } from "../_constants/gallery-images";

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
