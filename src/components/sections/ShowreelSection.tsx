'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import YouTube, { YouTubeProps } from 'react-youtube';

const ShowreelSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onReady: YouTubeProps['onReady'] = () => {
    setIsLoading(false);
  };

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <section id="showreel" className="relative bg-slate-950 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-3">
            2025 Reel
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-[0.15em]">
            Editorial & Color Grading Showcase
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-lg overflow-hidden border border-slate-800 shadow-2xl shadow-black/50"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500" />
                <span className="text-slate-400 text-sm">Loading reel...</span>
              </div>
            </div>
          )}
          <YouTube
            videoId="Hhpvn-LIu-w"
            opts={opts}
            onReady={onReady}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowreelSection;
