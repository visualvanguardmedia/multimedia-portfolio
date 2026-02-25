'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { smoothScrollTo } from '@/lib/utils';
import heroContent from '../../../content/hero.json';

const INTERVAL = 5000;

const Hero: React.FC = () => {
  const heroStills = heroContent.stills;
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroStills.length);
  }, [heroStills.length]);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] overflow-hidden bg-void flex items-end"
    >
      {/* Background stills carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: INTERVAL / 1000 + 1.2, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroStills[current].src}
            alt={heroStills[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark scrim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content — bottom-aligned cinematic layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-accent text-xs md:text-sm tracking-widest uppercase mb-6"
        >
          Directed by {heroContent.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="text-ghost leading-[0.9] mb-8"
        >
          <span className="block font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">Authenticity</span>
          <span className="block font-serif italic text-6xl md:text-8xl lg:text-[10rem] md:ml-12 text-accent">in motion.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4"
        >
          <button
            onClick={() => smoothScrollTo('#work')}
            className="relative overflow-hidden group bg-ghost text-void px-8 py-4 rounded-[3rem] font-sans text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform duration-300 shadow-xl"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span className="relative z-10 transition-colors group-hover:text-primary">View My Work</span>
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
          </button>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-2 mt-12"
        >
          {heroStills.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-ghost' : 'w-4 bg-ghost/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
