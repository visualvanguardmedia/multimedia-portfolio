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
    <section id="about" className="py-20 sm:py-28 bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-ghost mb-6 tracking-tight">
            {aboutContent.heading}
          </h2>
          <p className="text-lg sm:text-xl text-ghost/70 max-w-3xl mx-auto leading-relaxed">
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
              className="px-4 py-2 border border-ghost/15 rounded-full text-sm text-ghost/60 hover:border-accent hover:text-ghost transition-colors"
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
          <p className="text-xs uppercase tracking-[0.2em] text-ghost/40 font-mono mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {aboutContent.clients.map((client: string) => (
              <span
                key={client}
                className="text-ghost/60 text-sm sm:text-base font-medium hover:text-accent transition-colors"
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
          <div className="bg-void/60 border border-ghost/10 rounded-[2rem] p-8 sm:p-10 relative">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <blockquote className="text-lg sm:text-xl text-ghost font-serif italic leading-relaxed mb-6">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-ghost font-semibold">{current.name}</p>
                  <p className="text-ghost/50 text-sm">
                    {current.role}, {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-ghost/40 hover:text-ghost transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-ghost/40 hover:text-ghost transition-colors"
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
                    ? 'bg-ghost w-4'
                    : 'bg-ghost/20 hover:bg-ghost/40'
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
