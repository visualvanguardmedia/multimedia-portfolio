'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import VideoModal from '@/components/portfolio/VideoModal';
import { portfolioVideos } from '@/data/portfolio';
import { PortfolioVideo } from '@/types';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sort: featured first, then by year
  const sortedVideos = [...portfolioVideos].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });

  const handleVideoClick = (video: PortfolioVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-ghost mb-4 tracking-tight">
            Direction &amp; Post
          </h2>
          <p className="text-ghost/50 max-w-2xl mx-auto text-lg font-light tracking-wide">
            Cinematography, Studio Stop Motion, and Editorial across documentary, commercial, and social formats.
          </p>
        </motion.div>

        {/* Portfolio Grid — Cinematic borderless */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {sortedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <PortfolioCard
                video={video}
                onClick={handleVideoClick}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
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
