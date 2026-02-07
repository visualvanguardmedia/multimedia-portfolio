'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';
import aboutContent from '../../../content/about.json';

const About: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[testimonialIndex];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-6">
            {aboutContent.heading}
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {aboutContent.bio}
          </p>
        </motion.div>

        {/* Services tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {aboutContent.services.map((service: string) => (
            <span
              key={service}
              className="px-4 py-2 border border-slate-700 rounded-full text-sm text-slate-400 hover:border-slate-500 hover:text-white transition-colors"
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {aboutContent.clients.map((client: string) => (
              <span
                key={client}
                className="text-slate-400 text-sm sm:text-base font-medium hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Compact testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-8 sm:p-10 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-[var(--warm-accent)]/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <blockquote className="text-lg sm:text-xl text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-white font-semibold">{current.name}</p>
                  <p className="text-slate-500 text-sm">
                    {current.role}, {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === testimonialIndex
                    ? 'bg-white w-4'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
