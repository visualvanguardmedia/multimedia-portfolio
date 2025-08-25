'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, Users, Video } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { companyMetrics } from '@/data/portfolio';
import { smoothScrollTo } from '@/lib/utils';

const Hero: React.FC = () => {
  const handleWatchReel = () => {
    smoothScrollTo('#portfolio');
  };

  const handleGetInTouch = () => {
    smoothScrollTo('#contact');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/20 to-orange-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-teal-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/12 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-400/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl">
              <Image
                src="/images/profile/jim-profile-placeholder.svg"
                alt="Jim Elli - MultiMedia Producer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Jim Elli
            </h1>
            <p className="text-xl md:text-2xl text-teal-400 font-medium mb-4">
              MultiMedia Producer
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative h-12 md:h-16 w-auto">
              <Image
                src="/logos/visual-vanguard-logo.svg"
                alt="Visual Vanguard Media"
                width={240}
                height={64}
                className="h-12 md:h-16 w-auto brightness-0 invert drop-shadow-lg opacity-80"
                priority
              />
            </div>
          </motion.div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional video production, cinematography, and color grading services 
            that elevate your story and captivate your audience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleWatchReel}
            className="group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Our Reel
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleGetInTouch}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-teal-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {companyMetrics.projectsCompleted}+
            </div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {companyMetrics.clientSatisfaction}
            </div>
            <div className="text-sm text-slate-400">Client Rating</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {companyMetrics.yearsExperience}+
            </div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Play className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {companyMetrics.totalVideoViews}
            </div>
            <div className="text-sm text-slate-400">Total Views</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
