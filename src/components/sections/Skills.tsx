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
      name: 'Cinematography & Color Grading',
      icon: Video,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20',
      description: 'Professional camera work, lighting design, and advanced color correction techniques',
      skills: ['Director of Photography', 'Color Grading', 'Visual Storytelling', 'Camera Operation'],
      videos: portfolioVideos.filter(video => 
        ['1', '3', '5', '13'].includes(video.id) // Showreel, FBI Interview, Powerlifting Film, Color Grading Showcase
      )
    },
    {
      name: 'Documentary & Interview Production',
      icon: Video,
      color: 'text-green-400', 
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-600/20',
      description: 'Multi-camera setups, professional interviews, and long-form content production',
      skills: ['Multi-Camera Production', 'Interview Techniques', 'Documentary Filmmaking', 'Lighting Design'],
      videos: portfolioVideos.filter(video => 
        ['3', '6', '15', '16'].includes(video.id) // FBI Interview, Garage Doors, MindBlown Podcast, Advanced Interview
      )
    },
    {
      name: 'Audio Production & Podcasting',
      icon: Headphones,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/10', 
      borderColor: 'border-purple-600/20',
      description: 'Professional audio engineering, podcast production, and multi-track recording',
      skills: ['Audio Engineering', 'Podcast Production', 'Sound Design', 'Multi-track Recording'],
      videos: portfolioVideos.filter(video => 
        ['4', '12'].includes(video.id) // Powerlifting podcast, Professional Podcast Interview
      )
    },
    {
      name: 'Motion Graphics & Creative Design',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-600/20', 
      description: 'Brand-focused content creation, motion graphics, and visual design systems',
      skills: ['Motion Graphics', 'Brand Design', 'Creative Direction', 'Visual Effects'],
      videos: portfolioVideos.filter(video => 
        ['6', '7', '8', '11', '14', '17'].includes(video.id) // Commercial + Social media + Motion Graphics + Branding
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
                    {category.skills.map((skill, skillIndex) => (
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
              'DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Photoshop', 
              'Pro Tools', 'Audition', 'Final Cut Pro', 'Logic Pro', 'Cinema 4D',
              'RED Camera', 'Sony FX6', 'Blackmagic', 'Color Grading', 'Multi-cam Production'
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
