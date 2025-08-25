'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Star, TrendingUp } from 'lucide-react';
import { experience } from '@/data/portfolio';

const Experience: React.FC = () => {
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

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
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
            Professional Experience
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            A decade of professional multimedia production experience, 
            building lasting relationships and delivering exceptional results.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              )}
              
              <div className="flex items-start gap-8 mb-16">
                {/* Timeline Dot */}
                <motion.div
                  variants={slideInLeft}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10"
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  variants={fadeInUp}
                  className="flex-1 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-300 mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Logo Placeholder */}
                    <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-slate-300 text-sm hover:border-blue-500 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Highlights */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-20"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-white text-center mb-12"
          >
            Career Highlights
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">10+</div>
              <div className="text-slate-300">Years Experience</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-600/30 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">150+</div>
              <div className="text-slate-300">Projects Delivered</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-600/30 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-300">Client Retention</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-600/30 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">500K+</div>
              <div className="text-slate-300">Video Views</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            Let&rsquo;s combine our experience with your vision to create something extraordinary.
              Get in touch to discuss your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
