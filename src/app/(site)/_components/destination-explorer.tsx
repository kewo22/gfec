"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { COUNTRIES } from "../_constants/countries.constants";
import ContainerNew from "./layouts/container-new";
import FlipValue from "./flip-value";

const REVEAL_STAGGER_MS = 70;
const REVEAL_STAGGER_CAP = 6;

const CARD_WIDTH =
  "w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]";

export default function DestinationExplorer() {
  const { ref: revealRef, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ widthPct: 100, leftPct: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const nudgedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const dragMovedRef = useRef(false);

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      revealRef(node);
      scrollerRef.current = node;
    },
    [revealRef],
  );

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const widthPct = Math.min(100, (el.clientWidth / el.scrollWidth) * 100);
    const leftPct = max > 0 ? (el.scrollLeft / max) * (100 - widthPct) : 0;
    setThumb({ widthPct, leftPct });
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < max - 8);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  useEffect(() => {
    if (!inView || nudgedRef.current) return;
    nudgedRef.current = true;
    const el = scrollerRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nudgeTimer = window.setTimeout(() => {
      el.scrollTo({ left: 56, behavior: "smooth" });
      const returnTimer = window.setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 550);
      return () => window.clearTimeout(returnTimer);
    }, 600);
    return () => window.clearTimeout(nudgeTimer);
  }, [inView]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.92, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el || e.button !== 0) return;
    setIsDragging(true);
    dragMovedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollLeftRef.current = el.scrollLeft;
  };

  useEffect(() => {
    if (!isDragging) return;
    const el = scrollerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStartXRef.current;
      if (Math.abs(dx) > 4) dragMovedRef.current = true;
      el.scrollLeft = dragStartScrollLeftRef.current - dx;
    };
    const onMouseUp = () => {
      setIsDragging(false);
      if (dragMovedRef.current) {
        window.setTimeout(() => {
          dragMovedRef.current = false;
        }, 150);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      dragMovedRef.current = false;
    }
  };

  return (
    <section className="bg-gazette py-20 lg:py-28">
      <ContainerNew className="px-5 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-slip-display font-bold text-exam-ink text-3xl lg:text-[44px] leading-[1.1]">
              Ten countries. One register.
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/study-abroad"
              className="group font-slip-display font-bold text-exam-navy hover:text-exam-navy-deep text-sm uppercase tracking-wide flex items-center gap-1.5"
            >
              View all destinations
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <div className="hidden sm:flex items-center rounded-sm border border-exam-ink/15 overflow-hidden">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll to previous destinations"
                className="w-9 h-9 flex items-center justify-center text-exam-ink/70 hover:text-exam-ink hover:bg-exam-ink/5 transition-colors border-r border-exam-ink/15 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                disabled={!canScrollRight}
                aria-label="Scroll to next destinations"
                className="w-9 h-9 flex items-center justify-center text-exam-ink/70 hover:text-exam-ink hover:bg-exam-ink/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={setRefs}
          onScroll={updateScrollState}
          onMouseDown={handleMouseDown}
          onClickCapture={handleClickCapture}
          onDragStart={(e) => e.preventDefault()}
          className={`flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-none select-none ${isDragging ? "snap-none cursor-grabbing" : "snap-x snap-mandatory cursor-grab"}`}
        >
          {COUNTRIES.map((country, i) => {
            const delay = Math.min(i, REVEAL_STAGGER_CAP) * REVEAL_STAGGER_MS;
            return (
              <Link
                key={country.id}
                href={`/study-abroad/${country.route}`}
                style={{ transitionDelay: `${delay}ms` }}
                draggable={false}
                className={`dest-card ${inView ? "dest-card-in" : ""} group relative shrink-0 ${CARD_WIDTH} aspect-[3/4] rounded-sm overflow-hidden snap-start border border-transparent transition-colors duration-300 hover:border-exam-gold/60 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              >
                <Image
                  src={country.image}
                  alt={country.country}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 34vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-exam-ink via-exam-ink/25 to-transparent" />
                <div className="absolute inset-0 bg-exam-ink/0 group-hover:bg-exam-ink/20 transition-colors duration-500" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <Image src={country.flag} alt="" width={22} height={16} className="rounded-[2px] shadow" />
                  <FlipValue
                    value={String(i + 1).padStart(2, "0")}
                    delayMs={delay + 300}
                    className="slip-mono text-gazette/85 text-[11px] uppercase"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-slip-display font-bold text-gazette text-2xl mb-2">{country.country}</h3>
                  <p className="font-body text-gazette/75 text-sm leading-relaxed line-clamp-2 mb-4 max-w-[90%]">
                    {country.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-slip-display font-bold text-exam-gold text-sm uppercase tracking-wide">
                    Explore
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative h-[2px] bg-exam-ink/10 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 bg-exam-navy rounded-full"
            style={{ width: `${thumb.widthPct}%`, left: `${thumb.leftPct}%` }}
          />
        </div>
      </ContainerNew>
    </section>
  );
}
