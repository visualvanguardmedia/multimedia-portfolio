'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-slate-950" />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-6"
        >
          {heroContent.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 tracking-[0.2em] uppercase font-light mb-4"
        >
          {heroContent.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-12"
        >
          {heroContent.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => smoothScrollTo('#portfolio')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => smoothScrollTo('#contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Work types */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          {['YouTube Growth', 'Social Strategy', 'Brand Partnerships', 'Team Leadership', 'Content Production'].map((type, i) => (
            <span
              key={type}
              className="text-xs sm:text-sm text-white/50 uppercase tracking-[0.15em] flex items-center gap-3 sm:gap-4"
            >
              {i > 0 && <span className="text-white/20">·</span>}
              {type}
            </span>
          ))}
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-2 mt-10"
        >
          {heroStills.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
