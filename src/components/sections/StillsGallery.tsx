'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stills } from '@/data/stills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Interleave stills so no two consecutive images share the same project.
 * Highlights diverse skills rather than batching by category.
 */
function interleaveStills(items: typeof stills) {
  const buckets: Record<string, typeof stills> = {};
  for (const s of items) {
    const key = s.project;
    if (!buckets[key]) buckets[key] = [];
    buckets[key].push(s);
  }

  const keys = Object.keys(buckets).sort((a, b) => buckets[b].length - buckets[a].length);
  const result: typeof stills = [];
  let lastProject = '';

  while (keys.some((k) => buckets[k].length > 0)) {
    let placed = false;
    for (const key of keys) {
      if (buckets[key].length > 0 && key !== lastProject) {
        result.push(buckets[key].shift()!);
        lastProject = key;
        placed = true;
        break;
      }
    }
    if (!placed) {
      for (const key of keys) {
        if (buckets[key].length > 0) {
          result.push(buckets[key].shift()!);
          lastProject = key;
          break;
        }
      }
    }
  }

  return result;
}

const StillsGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const interleaved = useMemo(() => interleaveStills([...stills]), []);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop || reduceMotion) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const scrollWidth = track.scrollWidth - window.innerWidth;

      if (scrollWidth <= 0) return;

      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [interleaved]);

  return (
    <section ref={sectionRef} id="photography" className="relative bg-void overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-20 pb-8 md:absolute md:top-0 md:left-0 md:w-full md:z-10 md:pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-ghost tracking-tight">
              Stills &amp; Tabletop
            </h2>
            <p className="text-ghost/50 text-lg mt-2">
              Product, portrait, and selected frames — captured and finished for brand use.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-ghost/30 font-mono text-xs uppercase tracking-widest">
            <span>Scroll</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Track: desktop = scroll-triggered, mobile = swipeable snap carousel */}
      <div
        ref={trackRef}
        className="flex items-center gap-6 md:gap-8 px-6 md:h-screen md:pt-[8rem] h-[72vh] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth momentum-scroll"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="hidden md:block flex-shrink-0 w-[30vw]" />

        {interleaved.map((still, index) => (
          <div
            key={still.id}
            className="still-card snap-center group relative flex-shrink-0 rounded-[2rem] overflow-hidden bg-primary border border-ghost/10 shadow-2xl w-[85vw] sm:w-[70vw] md:w-[55vw] md:max-w-[800px] h-[60vh] md:h-[70vh]"
          >
            <Image
              src={still.src}
              alt={still.alt}
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              sizes="(max-width: 768px) 85vw, 55vw"
              unoptimized={still.src.startsWith('http')}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 mb-3 text-[10px] uppercase font-mono tracking-widest border border-ghost/20 rounded-full text-ghost/70">
                {still.category ?? 'Frame'}
              </span>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-ghost mb-1">
                {still.project}
              </h3>
              <p className="font-sans text-sm text-ghost/50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {still.alt}
              </p>
            </div>

            <div className="absolute top-6 right-6 font-mono text-ghost/15 text-6xl font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}

        <div className="hidden md:block flex-shrink-0 w-[20vw]" />
      </div>

      {/* Competency pills */}
      <div className="px-6 pb-12 md:absolute md:bottom-0 md:left-0 md:w-full md:z-10 md:pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-start gap-3">
          {['Sony FX6', 'Stop Motion', 'Studio Tabletop', 'Adobe Premiere / Photoshop'].map((label) => (
            <span
              key={label}
              className="px-4 py-2 border border-ghost/10 rounded-full text-[10px] uppercase tracking-widest text-ghost/40 font-mono backdrop-blur-sm bg-void/40"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StillsGallery;
