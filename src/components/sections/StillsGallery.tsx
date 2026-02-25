'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { stills, Still } from '@/data/stills';

const StillsGallery: React.FC = () => {
  const [selected, setSelected] = useState<Still | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(stills.map((s) => s.category ?? 'Frame')))];

  const filteredStills = useMemo(() => {
    if (activeFilter === 'All') return stills;
    return stills.filter((s) => (s.category ?? 'Frame') === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!selected) return;
    if (activeFilter === 'All') return;

    const selectedCategory = selected.category ?? 'Frame';
    if (selectedCategory !== activeFilter) setSelected(null);
  }, [activeFilter, selected]);

  const currentIndex = selected ? filteredStills.findIndex((s) => s.id === selected.id) : -1;

  const navigate = (direction: 1 | -1) => {
    if (currentIndex === -1) return;
    const next = (currentIndex + direction + filteredStills.length) % filteredStills.length;
    setSelected(filteredStills[next]);
  };

  return (
    <section id="photography" className="py-20 sm:py-28 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-ghost mb-4 tracking-tight">
            Stills &amp; Tabletop
          </h2>
          <p className="text-ghost/50 max-w-2xl mx-auto text-lg mb-8">
            Product, portrait, and selected frames — captured and finished for brand use.
          </p>

          {/* Competencies integrated into design based on job requirements */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="px-4 py-2 border border-ghost/20 rounded-full text-xs uppercase tracking-widest text-ghost/70 font-mono">Sony FX6</span>
            <span className="px-4 py-2 border border-ghost/20 rounded-full text-xs uppercase tracking-widest text-ghost/70 font-mono">Stop Motion</span>
            <span className="px-4 py-2 border border-ghost/20 rounded-full text-xs uppercase tracking-widest text-ghost/70 font-mono">Studio Tabletop</span>
            <span className="px-4 py-2 border border-ghost/20 rounded-full text-xs uppercase tracking-widest text-ghost/70 font-mono">Adobe Premiere / Photoshop</span>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`text-sm uppercase tracking-wider transition-all pb-1 border-b-2 font-sans ${activeFilter === category
                  ? 'text-ghost border-accent'
                  : 'text-ghost/40 border-transparent hover:text-ghost/70'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid — 2 cols on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {filteredStills.map((still, index) => (
            <motion.button
              key={still.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelected(still)}
              className="group relative aspect-[3/2] overflow-hidden bg-primary focus:outline-none focus:ring-2 focus:ring-ghost/30 focus:ring-offset-2 focus:ring-offset-void"
              aria-label={`View photo: ${still.alt}`}
            >
              <Image
                src={still.src}
                alt={still.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                unoptimized={still.src.startsWith('http')}
              />
              {/* Hover overlay with project name */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <span className="text-white text-xs sm:text-sm font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {still.project}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* No Results */}
        {filteredStills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-ghost/50 text-lg">No photos in this category yet.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-ghost hover:text-accent text-sm underline underline-offset-4"
            >
              View all
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[80vh] aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                unoptimized={selected.src.startsWith('http')}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="text-white text-sm font-medium">{selected.project}</p>
                <p className="text-white/60 text-xs">{selected.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StillsGallery;
