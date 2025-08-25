'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Clock, Eye, Star } from 'lucide-react';
import { PortfolioVideo } from '@/types';
import { cn, formatDuration } from '@/lib/utils';

interface PortfolioCardProps {
  video: PortfolioVideo;
  onClick: (video: PortfolioVideo) => void;
  className?: string;
  showDetails?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  video, 
  onClick, 
  className = '',
  showDetails = true 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Documentary':
        return 'bg-red-600/20 text-red-400 border-red-600/30';
      case 'Podcast':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'Commercial':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'Creative':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      case 'Showreel':
        return 'bg-orange-600/20 text-orange-400 border-orange-600/30';
      case 'Social Media':
        return 'bg-teal-600/20 text-teal-400 border-teal-600/30';
      default:
        return 'bg-slate-600/20 text-slate-400 border-slate-600/30';
    }
  };

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
        'group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900',
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
              'object-cover transition-opacity duration-300',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-700">
            <div className="text-center">
              <Play className="w-12 h-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Thumbnail unavailable</p>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Video duration */}
        {video.duration && (
          <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-md text-sm text-white flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Featured badge */}
        {video.featured && (
          <div className="absolute top-3 left-3 bg-yellow-600/90 px-2 py-1 rounded-md text-xs text-white font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className={cn(
            'px-2 py-1 rounded-md text-xs font-medium border',
            getCategoryColor(video.category)
          )}>
            {video.category}
          </span>
        </div>
      </div>

      {/* Video details */}
      {showDetails && (
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-3 line-clamp-2">
            {video.description}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
            <span>{video.role}</span>
            <span>{video.year}</span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {video.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-sm text-xs"
              >
                {tech}
              </span>
            ))}
            {video.technologies.length > 3 && (
              <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-sm text-xs">
                +{video.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {video.views && (
              <div className="flex items-center gap-1 text-blue-400 text-sm font-semibold">
                <Eye className="w-3 h-3" />
                {video.views}
              </div>
            )}
            
            {video.client && (
              <span className="text-slate-500 text-xs">
                {video.client}
              </span>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default PortfolioCard;
