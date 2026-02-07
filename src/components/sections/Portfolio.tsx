'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import VideoModal from '@/components/portfolio/VideoModal';
import { portfolioVideos } from '@/data/portfolio';
import { PortfolioVideo } from '@/types';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // Get unique categories — include all
  const categories = ['All', ...Array.from(new Set(
    portfolioVideos.map(video => video.category)
  ))];

  // Filter videos
  const filteredVideos = useMemo(() => {
    let filtered = [...portfolioVideos];

    if (activeFilter !== 'All') {
      filtered = filtered.filter(video => video.category === activeFilter);
    }

    // Featured first, then by year
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.year - a.year;
    });

    return filtered;
  }, [activeFilter]);

  const handleVideoClick = (video: PortfolioVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From long-form documentaries to fast-paced social content and commercial spots.
          </p>
        </motion.div>

        {/* Minimal category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`text-sm uppercase tracking-wider transition-all pb-1 border-b-2 ${
                activeFilter === category
                  ? 'text-white border-white'
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <PortfolioCard
                  video={video}
                  onClick={handleVideoClick}
                  className="h-full"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-400 text-lg">
              No projects in this category yet.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-white hover:text-[var(--warm-accent)] text-sm underline underline-offset-4"
            >
              View all work
            </button>
          </motion.div>
        )}
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

export default Portfolio;
