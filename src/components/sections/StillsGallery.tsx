'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stills, Still } from '@/data/stills';
import MobileModalManager from '@/components/ui/MobileModalManager';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type StillsShoot = {
  project: string;
  category?: Still['category'];
  hero: Still;
  stills: Still[];
};

function buildShoots(items: Still[]): StillsShoot[] {
  const map = new Map<string, Still[]>();
  for (const s of items) {
    const key = s.project;
    map.set(key, [...(map.get(key) ?? []), s]);
  }

  const shoots: StillsShoot[] = [];
  for (const [project, group] of map.entries()) {
    const hero = group.find((s) => s.featured) ?? group[0];
    shoots.push({
      project,
      category: hero.category,
      hero,
      stills: group,
    });
  }

  // Keep original order based on first appearance in stills.json
  shoots.sort((a, b) => items.findIndex((s) => s.project === a.project) - items.findIndex((s) => s.project === b.project));
  return shoots;
}

const StillsGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const shoots = useMemo(() => buildShoots(stills as Still[]), []);

  const [activeShoot, setActiveShoot] = useState<StillsShoot | null>(null);
  const isModalOpen = Boolean(activeShoot);

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
  }, [shoots.length]);

  return (
    <section ref={sectionRef} id="photography" className="relative bg-void overflow-hidden">
      <MobileModalManager
        isOpen={isModalOpen}
        onClose={() => setActiveShoot(null)}
        enableSwipeClose={true}
        id="stills-shoot-modal"
        ariaLabel={activeShoot ? `${activeShoot.project} — full shoot` : 'Full shoot'}
        modalClassName="max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={() => setActiveShoot(null)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-void/70 hover:bg-void/90 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-ghost/40 backdrop-blur-sm border border-ghost/10"
          aria-label="Close photo shoot"
        >
          <X className="w-5 h-5 text-ghost" />
        </button>

        <div className="p-6" data-scrollable="true">
          <div className="mb-6 pr-10">
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">Full Shoot</p>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-ghost tracking-tight">
              {activeShoot?.project}
            </h3>
            <p className="text-ghost/50 mt-2">
              {activeShoot?.stills.length ?? 0} frames
              {activeShoot?.category ? ` · ${activeShoot.category}` : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(activeShoot?.stills ?? []).map((s) => (
              <div
                key={s.id}
                className="relative aspect-[3/2] rounded-[1.5rem] overflow-hidden bg-primary border border-ghost/10"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 45vw"
                  unoptimized={s.src.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-ghost text-sm font-medium">{s.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MobileModalManager>

      {/* Header */}
      <div className="px-6 pt-20 pb-8 md:absolute md:top-0 md:left-0 md:w-full md:z-10 md:pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-ghost tracking-tight">
              Stills &amp; Tabletop
            </h2>
            <p className="text-ghost/50 text-lg mt-2">
              One hero frame from each shoot — click to view the full set.
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

        {shoots.map((shoot, index) => (
          <button
            key={shoot.project}
            onClick={() => setActiveShoot(shoot)}
            className="still-card snap-center group relative flex-shrink-0 rounded-[2rem] overflow-hidden bg-primary border border-ghost/10 shadow-2xl w-[85vw] sm:w-[70vw] md:w-[55vw] md:max-w-[800px] h-[60vh] md:h-[70vh] text-left"
            aria-label={`View full shoot: ${shoot.project}`}
          >
            <Image
              src={shoot.hero.src}
              alt={shoot.hero.alt}
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              sizes="(max-width: 768px) 85vw, 55vw"
              unoptimized={shoot.hero.src.startsWith('http')}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 mb-3 text-[10px] uppercase font-mono tracking-widest border border-ghost/20 rounded-full text-ghost/70">
                {shoot.category ?? 'Frame'} · {shoot.stills.length}
              </span>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-ghost mb-1">
                {shoot.project}
              </h3>
              <p className="font-sans text-sm text-ghost/50 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {shoot.hero.alt}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ghost/50 mt-3">
                Tap to view full shoot
              </p>
            </div>

            <div className="absolute top-6 right-6 font-mono text-ghost/15 text-6xl font-bold">
              {String(index + 1).padStart(2, '0')}
            </div>
          </button>
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
