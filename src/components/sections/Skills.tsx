'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Headphones, Settings } from 'lucide-react';
import { portfolioVideos } from '@/data/portfolio';
import { PortfolioVideo } from '@/types';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import VideoModal from '@/components/portfolio/VideoModal';

const Skills: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define skill categories with curated video examples that best demonstrate each skill
  const skillCategories = [
    {
      name: 'Long-Form Documentary & Interview Editing',
      icon: Video,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20',
      description: 'Long-form documentary and interview editing (10-60 min) with multi-camera workflows, story structure, and audio post-production',
      skills: ['Documentary Editing', 'Multi-Camera Editing', 'Story Structure', 'Audio Post-Production'],
      videos: portfolioVideos.filter(video => 
        ['18', '3'].includes(video.id) // Data Centers, FBI Interview
      )
    },
    {
      name: 'Short-Form Social Content',
      icon: Settings,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-600/20', 
      description: 'Fast-paced social media editing (15-60 sec) with motion graphics, beat-synced cutting, and vertical/square format optimization',
      skills: ['Social Media Editing', 'Fast-Paced Cutting', 'Motion Graphics/Text', 'Format Optimization'],
      videos: portfolioVideos.filter(video => 
        ['19', '7', '8', '10'].includes(video.id) // Malice Pizza, Portugal Marathon, Recovery Ad, Oficina Loba
      )
    },
    {
      name: 'Commercial & Digital Videos',
      icon: Video,
      color: 'text-green-400', 
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-600/20',
      description: 'Commercial and corporate video editing (2-10 min) with client collaboration, brand integration, and polished finishing',
      skills: ['Commercial Editing', 'Client Collaboration', 'Corporate Content', 'Brand Integration'],
      videos: portfolioVideos.filter(video => 
        ['6', '5', '14'].includes(video.id) // Garage Doors, The Pay Off, Motion Graphics
      )
    },
    {
      name: 'Color Grading & Finishing',
      icon: Headphones,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-600/20',
      description: 'Professional color correction and creative grading using DaVinci Resolve for cinematic visuals across all formats',
      skills: ['Color Grading', 'Color Correction', 'Look Development', 'DaVinci Resolve'],
      videos: portfolioVideos.filter(video => 
        ['13', '1', '5', '19'].includes(video.id) // Color Grading Showcase, Showreel, The Pay Off, Malice Pizza
      )
    }
  ];

  const handleVideoClick = (video: PortfolioVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
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

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Demonstrating mastery across the full spectrum of multimedia production 
            through curated examples of professional work.
          </motion.p>
        </motion.div>

        {/* Skill Categories with Video Examples */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-8 backdrop-blur-sm`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-300">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md text-sm border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Video Examples */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map((video, videoIndex) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: videoIndex * 0.1 }}
                    >
                      <PortfolioCard
                        video={video}
                        onClick={handleVideoClick}
                        className="h-full transform hover:scale-105 transition-transform duration-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Recognition */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-20 text-center"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-white mb-8"
          >
            Professional Recognition
          </motion.h3>
          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {skillCategories.length}
              </div>
              <div className="text-slate-300">Skill Categories</div>
              <div className="text-sm text-slate-400 mt-1">Professional Expertise</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {portfolioVideos.filter(v => v.featured).length}
              </div>
              <div className="text-slate-300">Featured Projects</div>
              <div className="text-sm text-slate-400 mt-1">Award-Winning Work</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                10+
              </div>
              <div className="text-slate-300">Years Experience</div>
              <div className="text-sm text-slate-400 mt-1">Industry Professional</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
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
            Technology Stack
          </motion.h3>
          <motion.div 
            variants={stagger}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {[
              'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Photoshop', 'Illustrator',
              'Media Encoder', 'Pro Tools', 'Audition', 'Fusion', 'Color Grading',
              'Motion Graphics', 'VFX Compositing', 'Multi-cam Editing', 'Audio Post-Production'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-300 text-sm hover:border-blue-500 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Skills;
