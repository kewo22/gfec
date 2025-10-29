'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Typography } from '@/app/_components/ui/typography';

export default function Contact() {

  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);


  // Initialize after mount to trigger animations
  useEffect(() => {
    setIsInitialized(true);
  }, []);


  const events = [
    {
      id: 1,
      title: 'UK University Fair 2025',
      date: '15 Nov 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Dubai Convention Center',
      category: 'fair',
      country: 'UK',
      image: '🇬🇧',
      description: 'Meet representatives from top UK universities including Oxford, Cambridge, Imperial College, and more.',
      attendees: 500,
      speakers: ['Dr. Sarah Johnson', 'Prof. Michael Brown'],
      spots: 150
    },
    {
      id: 2,
      title: 'Study in Canada Webinar',
      date: '20 Nov 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Online',
      category: 'webinar',
      country: 'Canada',
      image: '🇨🇦',
      description: 'Learn about Canadian education system, visa process, and scholarship opportunities.',
      attendees: 1000,
      speakers: ['Emily Carter', 'Immigration Expert'],
      spots: 'Unlimited'
    },
    {
      id: 3,
      title: 'IELTS Preparation Workshop',
      date: '22 Nov 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Dubai Office',
      category: 'workshop',
      country: 'General',
      image: '📚',
      description: 'Intensive IELTS preparation session covering all four modules with expert trainers.',
      attendees: 30,
      speakers: ['James Wilson - IELTS Trainer'],
      spots: 10
    },
    {
      id: 4,
      title: 'Australian Education Expo',
      date: '25 Nov 2025',
      time: '11:00 AM - 6:00 PM',
      location: 'Abu Dhabi',
      category: 'fair',
      country: 'Australia',
      image: '🇦🇺',
      description: 'Explore study opportunities in Australia with representatives from 40+ universities.',
      attendees: 800,
      speakers: ['Multiple University Reps'],
      spots: 200
    },
    {
      id: 5,
      title: 'Germany Scholarship Seminar',
      date: '28 Nov 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Online',
      category: 'seminar',
      country: 'Germany',
      image: '🇩🇪',
      description: 'Discover free education opportunities and scholarship programs in Germany.',
      attendees: 500,
      speakers: ['Dr. Klaus Mueller', 'DAAD Representative'],
      spots: 'Unlimited'
    },
    {
      id: 6,
      title: 'USA University Application Workshop',
      date: '1 Dec 2025',
      time: '3:00 PM - 6:00 PM',
      location: 'Dubai Office',
      category: 'workshop',
      country: 'USA',
      image: '🇺🇸',
      description: 'Step-by-step guidance on applying to US universities, SAT prep, and essay writing.',
      attendees: 40,
      speakers: ['Maria Rodriguez', 'College Counselor'],
      spots: 15
    },
    {
      id: 7,
      title: 'Study in Europe Info Session',
      date: '5 Dec 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Online',
      category: 'webinar',
      country: 'Europe',
      image: '🇪🇺',
      description: 'Explore study options across European countries including France, Spain, and Netherlands.',
      attendees: 600,
      speakers: ['European Education Expert'],
      spots: 'Unlimited'
    },
    {
      id: 8,
      title: 'Visa Interview Preparation',
      date: '8 Dec 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Dubai Office',
      category: 'workshop',
      country: 'General',
      image: '✈️',
      description: 'Mock visa interviews and expert tips to ace your student visa application.',
      attendees: 25,
      speakers: ['Immigration Consultant'],
      spots: 8
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: '🌍' },
    { id: 'fair', label: 'University Fairs', icon: '🎓' },
    { id: 'webinar', label: 'Webinars', icon: '💻' },
    { id: 'workshop', label: 'Workshops', icon: '📝' },
    { id: 'seminar', label: 'Seminars', icon: '🎤' }
  ];

  const filteredEvents = selectedFilter === 'all'
    ? events
    : events.filter(event => event.category === selectedFilter);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,  // Add 'as const' here
        stiffness: 100,
        damping: 15  // Also add damping for better spring animation
      }
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      {/* Header */}
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Join our events and take the next step in your study abroad journey
          </motion.p>
        </div>
      </motion.div> */}

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

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Filter Events</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedFilter === category.id
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
                }`}
              whileHover={{ scale: selectedFilter === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center space-x-2">
                <span>{category.label}</span>
                <span className="mr-2">{category.icon}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -8 }}
                animate={isInitialized ? "visible" : "hidden"}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-48 flex items-center justify-center text-8xl">
                  {event.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold capitalize">
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.country}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-purple-600">{event.spots}</span> spots left
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Register Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500">No events found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-64 flex items-center justify-center text-9xl relative">
                {selectedEvent.image}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold capitalize">
                    {selectedEvent.category}
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                    {selectedEvent.country}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedEvent.title}</h2>
                <div className="space-y-3 mb-6 grid grid-cols-2">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-xl">📅</span>
                    <span className="text-lg">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-xl">⏰</span>
                    <span className="text-lg">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-xl">📍</span>
                    <span className="text-lg">{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-3 text-xl">👥</span>
                    <span className="text-lg">{selectedEvent.attendees} expected attendees</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">About This Event</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Speakers</h3>
                  <div className="flex flex-row items-center gap-2">
                    {selectedEvent.speakers.map((speaker: any, index: number) => (
                      <span key={index} className="flex items-center text-gray-700">
                        <span className="mr-1">🎤</span>
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 mb-6">
                  <p className="text-center text-lg">
                    <span className="font-bold text-purple-600 text-2xl">{selectedEvent.spots}</span>
                    <span className="text-gray-700 ml-2">spots remaining</span>
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                >
                  Register for This Event
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us to schedule a personal consultation session</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
          >
            Book a Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
