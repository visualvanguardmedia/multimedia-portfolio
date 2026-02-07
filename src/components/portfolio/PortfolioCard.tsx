'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { PortfolioVideo } from '@/types';
import { cn, formatDuration } from '@/lib/utils';

interface PortfolioCardProps {
  video: PortfolioVideo;
  onClick: (video: PortfolioVideo) => void;
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  video, 
  onClick, 
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    onClick(video);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(video);
    }
  };

  return (
    <article 
      className={cn(
      'group bg-slate-900/50 rounded-lg overflow-hidden border border-slate-800 hover:border-slate-600 transition-all transform hover:scale-[1.01] cursor-pointer focus-within:ring-2 focus-within:ring-white/30 focus-within:ring-offset-2 focus-within:ring-offset-slate-950',
        className
      )}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`Play video: ${video.title}`}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video bg-slate-800">
        {!imageError ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className={cn(
              'object-cover transition-all duration-300 group-hover:scale-105',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <div className="text-center">
              <Play className="w-12 h-12 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-500 text-sm">Thumbnail unavailable</p>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-slate-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Play className="w-7 h-7 text-white ml-0.5" />
          </div>
        </div>

        {/* Video duration */}
        {video.duration && (
          <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-xs text-white/80 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 rounded text-xs font-medium bg-black/60 text-white/80 backdrop-blur-sm">
            {video.category}
          </span>
        </div>
      </div>

      {/* Minimal details */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-white mb-1 line-clamp-1 group-hover:text-[var(--warm-accent)] transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="line-clamp-1">{video.role}</span>
          {video.client && (
            <span className="text-slate-600 line-clamp-1 ml-2 flex-shrink-0">
              {video.client}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
