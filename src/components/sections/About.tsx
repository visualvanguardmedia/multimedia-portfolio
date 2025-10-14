'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Headphones, Award } from 'lucide-react';
import { companyMetrics } from '@/data/portfolio';

const About: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Video Editing & Post-Production',
      description: 'Expert editing across long-form, short-form, and social content using Adobe Premiere Pro and DaVinci Resolve with efficient workflow management and creative problem-solving.',
      color: 'text-blue-400'
    },
    {
      icon: Palette,
      title: 'Motion Graphics & VFX',
      description: 'Dynamic motion graphics and visual effects using Adobe After Effects and Fusion, creating engaging animations and polished graphics for diverse content needs.',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Color Grading & Finishing',
      description: 'Professional color correction and creative grading using DaVinci Resolve, delivering cinematic visuals and consistent brand aesthetics across all deliverables.',
      color: 'text-orange-400'
    },
    {
      icon: Headphones,
      title: 'Audio Post-Production',
      description: 'Complete audio post solutions including mixing, sound design, and VO recording using DaVinci Resolve Fairlight and Pro Tools for broadcast-quality results.',
      color: 'text-green-400'
    }
  ];

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

  return (
    <section id="about" className="py-20 bg-slate-800/50">
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
            About Jim Elli
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            I&apos;m a passionate Senior Editor dedicated to crafting compelling stories 
            through precise editing, creative collaboration, and post-production excellence.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            With over {companyMetrics.yearsExperience} years of editorial experience and {companyMetrics.projectsCompleted}+ successful projects, 
            I specialize in long-form documentaries, short-form social content, commercial videos, and creative storytelling through Visual Vanguard Media.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-slate-600"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-white text-center mb-8"
          >
            My Impact
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {companyMetrics.projectsCompleted}+
              </div>
              <div className="text-slate-300 text-sm">
                Projects Delivered
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {companyMetrics.clientSatisfaction}/5
              </div>
              <div className="text-slate-300 text-sm">
                Client Satisfaction
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {companyMetrics.totalVideoViews}
              </div>
              <div className="text-slate-300 text-sm">
                Total Video Views
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                +{companyMetrics.avgEngagementIncrease}%
              </div>
              <div className="text-slate-300 text-sm">
                Avg. Engagement Boost
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
