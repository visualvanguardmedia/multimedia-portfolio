'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Palette, Monitor } from 'lucide-react';

const highlights = [
  {
    icon: Video,
    label: 'Video Editing & Post',
    color: 'text-blue-400',
    items: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Multi-cam', 'Audio Post'],
  },
  {
    icon: Camera,
    label: 'Studio & Photography',
    color: 'text-cyan-400',
    items: ['Tabletop / Product', 'Portraits & Headshots', 'Stop Motion', 'Shoot Planning'],
  },
  {
    icon: Palette,
    label: 'Color & Finishing',
    color: 'text-orange-400',
    items: ['Color Grading', 'Look Development', 'Retouching', 'Photoshop'],
  },
  {
    icon: Monitor,
    label: 'Live & Motion',
    color: 'text-purple-400',
    items: ['OBS Studio', 'Live Streaming', 'Motion Graphics', 'Fusion'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-16 sm:py-20 bg-slate-800/30">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
          What I Do
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          End-to-end production — from studio shoot to final delivery.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6"
            >
              <Icon className={`w-6 h-6 ${h.color} mb-4`} />
              <h3 className="text-white font-semibold mb-3">{h.label}</h3>
              <ul className="space-y-1.5">
                {h.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
