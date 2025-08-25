'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Palette, Headphones, Award } from 'lucide-react';
import { companyMetrics } from '@/data/portfolio';

const About: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Video Production',
      description: 'End-to-end video production services from concept to delivery, including multi-camera setups, professional lighting, and expert direction.',
      color: 'text-blue-400'
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description: 'Professional color correction and creative grading using industry-standard tools like DaVinci Resolve to enhance your visual story.',
      color: 'text-purple-400'
    },
    {
      icon: Headphones,
      title: 'Audio Production',
      description: 'Complete audio solutions including podcast production, sound design, and professional audio engineering for pristine sound quality.',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Creative Direction',
      description: 'Strategic creative vision and artistic direction that aligns with your brand goals and resonates with your target audience.',
      color: 'text-orange-400'
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
            About Visual Vanguard
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            We are a full-service multimedia production company dedicated to bringing your vision to life 
            through exceptional storytelling and technical excellence.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            With over {companyMetrics.yearsExperience} years of experience and {companyMetrics.projectsCompleted}+ successful projects, 
            we specialize in documentary production, commercial content, creative films, and podcast creation.
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
            Our Impact
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

        {/* Mission Statement */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-slate-300 italic max-w-4xl mx-auto">
            &ldquo;We believe every story deserves to be told with cinematic excellence. 
            Our mission is to transform your vision into compelling visual narratives 
            that inspire, inform, and impact your audience.&rdquo;
          </blockquote>
          <cite className="block text-slate-400 mt-6 not-italic">
            — Visual Vanguard Media Team
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
