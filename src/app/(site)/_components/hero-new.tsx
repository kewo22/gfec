"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

import aus from "../../../../public/comp/hero-banner/aus.webp";
import dxb from "../../../../public/comp/hero-banner/dxb.webp";
import france from "../../../../public/comp/hero-banner/france.webp";
import germany from "../../../../public/comp/hero-banner/germany.webp";
import malta from "../../../../public/comp/hero-banner/malta.webp";
import singapore from "../../../../public/comp/hero-banner/singapore.webp";
import spain from "../../../../public/comp/hero-banner/spain.webp";
import south_korea from "../../../../public/comp/hero-banner/south-korea.webp";
import uk from "../../../../public/comp/hero-banner/uk.webp";

const SLIDES = [
  { src: uk, alt: "A student in the United Kingdom" },
  { src: aus, alt: "A student in Australia" },
  { src: dxb, alt: "A student in the UAE" },
  { src: france, alt: "A student in France" },
  { src: germany, alt: "A student in Germany" },
  { src: malta, alt: "A student in Malta" },
  { src: singapore, alt: "A student in Singapore" },
  { src: spain, alt: "A student in Spain" },
  { src: south_korea, alt: "A student in South Korea" },
];

const LEDGER_STATS = [
  { label: "Countries", value: "14" },
  { label: "University partners", value: "600+" },
  { label: "Courses", value: "150+" },
  { label: "Students guided", value: "30+" },
];

export default function HeroNew() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onStartJourneyClick = () => {
    router.push("/contact#get-in-touch-container");
  };

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[760px] overflow-hidden bg-navy-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[currentIndex].src}
            alt={SLIDES[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-24 min-h-[640px] lg:min-h-[760px] flex flex-col lg:flex-row items-center gap-14">
        <div className="w-full lg:w-[58%]">
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ledger-ref text-gold text-xs mb-6 uppercase"
          >
            GFEC — Est. 2021, Colombo
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-paper text-[42px] leading-[1.08] sm:text-[56px] lg:text-[68px] tracking-tight"
          >
            Turn your study abroad dreams into reality.
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-paper/80 text-lg lg:text-xl mt-6 max-w-xl leading-relaxed"
          >
            From choosing the right university to navigating your visa journey, GFEC supports
            you every step of the way.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            <button
              type="button"
              onClick={onStartJourneyClick}
              className="group relative overflow-hidden bg-gold text-navy-deep font-display font-semibold text-base px-8 py-4 rounded-sm cursor-pointer flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="/study-abroad"
              className="group font-display font-semibold text-paper text-base px-2 py-4 flex items-center gap-2 border-b-2 border-paper/30 hover:border-gold transition-colors"
            >
              Explore Destinations
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="flex items-center gap-2 mt-12">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.alt}
                type="button"
                aria-label={`Show ${slide.alt}`}
                onClick={() => setCurrentIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? "w-8 bg-gold" : "w-3 bg-paper/30 hover:bg-paper/50"
                  }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-[38%] lg:ml-auto"
        >
          <div className="ledger-card rounded-sm p-7 lg:p-8 relative">
            <div className="absolute -top-3 left-7 bg-gold text-navy-deep font-display text-xs font-bold px-3 py-1 rounded-sm flex items-center gap-1.5">
              <MapPin size={12} />
              Student file
            </div>
            <p className="font-display font-bold text-navy text-lg mb-1 mt-2">
              Where GFEC has taken students
            </p>
            <p className="font-body text-mist text-sm mb-5">
              Real numbers, updated as our practice grows.
            </p>

            <div className="ledger-lines">
              {LEDGER_STATS.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between h-[35px]">
                  <span className="font-body text-sm text-ink/80">{stat.label}</span>
                  <span className="ledger-ref text-navy font-semibold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-royal hover:text-navy transition-colors"
            >
              More about GFEC
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
