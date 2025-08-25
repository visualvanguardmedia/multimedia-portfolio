'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Headphones, Palette, Settings } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { Skill } from '@/types';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Video Production',
      icon: Video,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20'
    },
    {
      name: 'Audio Production',
      icon: Headphones,
      color: 'text-green-400',
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-600/20'
    },
    {
      name: 'Design & Graphics',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-600/20'
    },
    {
      name: 'Technical',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-600/20'
    }
  ];

  const getSkillsByCategory = (categoryName: string): Skill[] => {
    return skills.filter(skill => skill.category === categoryName);
  };

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-200 font-medium">{skill.name}</span>
          <span className="text-slate-400 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    );
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
            Mastery across the full spectrum of multimedia production, 
            from technical execution to creative vision.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const categorySkills = getSkillsByCategory(category.name);
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-8 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications/Awards Section */}
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
                {skills.filter(s => s.level >= 95).length}
              </div>
              <div className="text-slate-300">Expert Level Skills</div>
              <div className="text-sm text-slate-400 mt-1">95%+ Proficiency</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {skills.length}
              </div>
              <div className="text-slate-300">Core Competencies</div>
              <div className="text-sm text-slate-400 mt-1">Across 4 Categories</div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-slate-300">Average Proficiency</div>
              <div className="text-sm text-slate-400 mt-1">Across All Skills</div>
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
    </section>
  );
};

export default Skills;
