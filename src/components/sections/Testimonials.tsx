'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-slate-400'
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Don&rsquo;t just take our word for it. Here&rsquo;s what our clients say about
            working with Visual Vanguard Media.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Quote className="w-6 h-6 text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex gap-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-light text-slate-100 text-center mb-8 leading-relaxed italic">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-slate-400 mb-2">
                  {currentTestimonial.role}
                </p>
                <p className="text-blue-400 font-semibold">
                  {currentTestimonial.company}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
        {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-slate-300 text-lg mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-400">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-20 text-center"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-white mb-12"
          >
            Client Satisfaction Metrics
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-600/30 rounded-xl p-8"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">
                {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}
              </div>
              <div className="text-slate-300 mb-2">Average Rating</div>
              <div className="flex justify-center gap-1">
                {renderStars(Math.round(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-xl p-8"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {testimonials.filter(t => t.rating === 5).length}
              </div>
              <div className="text-slate-300 mb-2">5-Star Reviews</div>
              <div className="text-sm text-slate-400">
                Out of {testimonials.length} total reviews
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-600/30 rounded-xl p-8"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">
                98%
              </div>
              <div className="text-slate-300 mb-2">Client Retention</div>
              <div className="text-sm text-slate-400">
                Clients who return for more projects
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-6">
            Ready to become our next success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
