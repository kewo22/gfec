"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Handshake,
  type LucideIcon,
  UserRound,
  X,
} from "lucide-react";

import { IMAGES, type GalleryImage } from "../_constants/gallery-images";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Agent_Meetup: Handshake,
  GDEU: GraduationCap,
  Openday_2025: CalendarDays,
  student: UserRound,
};

const CATEGORIES = [
  { id: "Agent_Meetup", name: "Agent Meetup", count: IMAGES.filter((img) => img.categoryId === "Agent_Meetup").length },
  { id: "GDEU", name: "GDEU", count: IMAGES.filter((img) => img.categoryId === "GDEU").length },
  { id: "Openday_2025", name: "Openday 2025", count: IMAGES.filter((img) => img.categoryId === "Openday_2025").length },
  { id: "student", name: "Students", count: IMAGES.filter((img) => img.categoryId === "student").length },
];

const REVEAL_STAGGER_MS = 40;
const REVEAL_STAGGER_CAP = 14;

export default function MasonryGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [openedFromId, setOpenedFromId] = useState<number | null>(null);
  const [columns, setColumns] = useState(4);
  const [activeFilter, setActiveFilter] = useState(CATEGORIES[0].id);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;

  const openImage = (id: number) => {
    setOpenedFromId(id);
    setSelectedId(id);
  };

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 20);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredImages = IMAGES.filter((image) => image.categoryId === activeFilter);
  const selectedIndex = selectedId === null ? -1 : filteredImages.findIndex((img) => img.id === selectedId);
  const selectedImage = selectedIndex >= 0 ? filteredImages[selectedIndex] : null;

  const showRelative = useCallback(
    (delta: number) => {
      if (selectedIndex < 0) return;
      const next = (selectedIndex + delta + filteredImages.length) % filteredImages.length;
      setSelectedId(filteredImages[next].id);
    },
    [selectedIndex, filteredImages],
  );

  useEffect(() => {
    if (selectedId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") showRelative(1);
      if (e.key === "ArrowLeft") showRelative(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, showRelative]);

  const distributeImages = () => {
    const cols: { image: GalleryImage; flatIndex: number }[][] = Array.from({ length: columns }, () => []);
    const colHeights: number[] = Array.from({ length: columns }, () => 0);

    filteredImages.forEach((image, flatIndex) => {
      const shortestCol = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestCol].push({ image, flatIndex });
      colHeights[shortestCol] += image.height;
    });

    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => {
          const active = activeFilter === category.id;
          const Icon = CATEGORY_ICONS[category.id];
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveFilter(category.id)}
              className={`slip-mono text-[11px] uppercase tracking-wide px-4 py-2 rounded-sm border transition-colors duration-200 inline-flex items-center gap-1.5 ${
                active
                  ? "bg-exam-ink border-exam-ink text-gazette"
                  : "border-exam-ink/15 text-exam-ink/70 hover:border-exam-green-bright/50 hover:text-exam-ink"
              }`}
            >
              {Icon && <Icon size={12} className={active ? "text-exam-green-bright" : "text-exam-ink/40"} />}
              {category.name}
              <span className={active ? "text-gazette/50" : "text-exam-ink/40"}>({category.count})</span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-4">
        {imageColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex-1 space-y-4">
            {column.map(({ image, flatIndex }) => {
              const Icon = CATEGORY_ICONS[image.categoryId];
              const delay = Math.min(flatIndex, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS;
              return (
                <div
                  key={image.id}
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`reveal-card ${mounted ? "reveal-card-in" : ""} transition-all duration-500`}
                >
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-sm border border-exam-ink/10 bg-slip-surface hover:border-exam-green-bright/50 transition-colors duration-300 block w-full text-left"
                    onClick={() => openImage(image.id)}
                  >
                    <motion.div
                      layout={!reduceMotion}
                      layoutId={reduceMotion ? undefined : `gallery-photo-${image.id}`}
                      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                      transition={{
                        layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                        scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full h-auto object-cover"
                        priority={image.id <= 4}
                        placeholder="blur"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-exam-ink/80 via-exam-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <span className="slip-mono text-[10px] text-gazette bg-exam-ink/70 px-2 py-1 rounded-sm">
                        {String(image.id).padStart(3, "0")}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="slip-mono text-[9px] uppercase tracking-wide text-gazette bg-exam-ink/70 px-2 py-1 rounded-sm inline-flex items-center gap-1">
                        {Icon && <Icon size={10} className="text-exam-green-bright" />}
                        {image.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="font-body text-gazette text-xs leading-snug">{image.alt}</p>
                    </div>
                  </button>
                </div>
              );
            })}
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
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedId(null)}
          >
            <div className="absolute inset-0 bg-exam-ink/90" />

            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] bg-slip-surface border border-slip-rule rounded-sm overflow-hidden flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.15 }}
                className="flex items-center justify-between px-5 py-3 border-b border-slip-rule shrink-0"
              >
                <div className="flex items-center gap-2">
                  <span className="slip-mono text-[11px] text-exam-green">
                    {`EXHIBIT ${String(selectedImage.id).padStart(3, "0")}`}
                  </span>
                  <span className="slip-mono text-[10px] uppercase tracking-wide text-slip-mist">
                    {selectedImage.category}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  className="p-1.5 -mr-1.5 text-exam-ink/60 hover:text-exam-ink transition-colors cursor-pointer"
                  onClick={() => setSelectedId(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>

              <div className="relative flex-1 min-h-0 flex items-center justify-center bg-exam-ink/[0.03]">
                <motion.div
                  layout={!reduceMotion}
                  layoutId={reduceMotion ? undefined : `gallery-photo-${openedFromId}`}
                  transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
                  className="max-w-full max-h-[65vh]"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={selectedImage.id}
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        width={selectedImage.width}
                        height={selectedImage.height}
                        className="w-auto h-auto max-w-full max-h-[65vh] object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {filteredImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous exhibit"
                      onClick={() => showRelative(-1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-exam-ink/70 hover:bg-exam-ink text-gazette flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next exhibit"
                      onClick={() => showRelative(1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-exam-ink/70 hover:bg-exam-ink text-gazette flex items-center justify-center transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              <div className="px-5 py-3 border-t border-slip-rule shrink-0">
                <p className="font-body text-exam-ink/80 text-sm">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
