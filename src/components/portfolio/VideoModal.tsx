'use client';

import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { PortfolioVideo } from '@/types';
import Button from '@/components/ui/Button';
import MobileModalManager from '@/components/ui/MobileModalManager';
interface VideoModalProps {
  video: PortfolioVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when video changes
  React.useEffect(() => {
    if (video) {
      setIsLoading(true);
    }
  }, [video]);

  const onReady: YouTubeProps['onReady'] = () => {
    setIsLoading(false);
  };

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  if (!video) return null;

  return (
    <MobileModalManager
      isOpen={isOpen}
      onClose={onClose}
      enableSwipeClose={true}
      id="video-modal"
      ariaLabel={video.title}
      ariaDescribedBy="video-modal-description"
      modalClassName="max-h-[90vh] overflow-y-auto"
    >
      {/* Close button - positioned for mobile touch */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:-top-4 sm:-right-4 z-10 w-10 h-10 bg-slate-800/90 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
        aria-label="Close video modal"
      >
        <X className="w-5 h-5 text-white" />
      </button>

        {/* Video player */}
        <div className="relative aspect-video rounded-t-xl overflow-hidden bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400"></div>
                <span className="text-slate-300">Loading video...</span>
              </div>
            </div>
          )}
          
          {video.platform === 'youtube' && video.youtubeId ? (
            <YouTube
              videoId={video.youtubeId}
              opts={opts}
              onReady={onReady}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          ) : video.platform === 'instagram' && video.instagramUrl ? (
            <div className="relative w-full h-full bg-slate-800">
              {/* Instagram Reel Preview with Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${video.thumbnail})`,
                }}
              />
              
              {/* Instagram Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Instagram Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-2xl">
                    <div className="w-12 h-12 border-3 border-white rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">Instagram Reel</h3>
                  <p className="text-slate-200 mb-6 drop-shadow text-sm">Click to view on Instagram</p>
                  
                  <Button
                    variant="primary"
                    onClick={() => window.open(video.instagramUrl, '_blank')}
                    className="shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on Instagram
                  </Button>
                  
                  <p className="text-slate-300 text-xs mt-3 opacity-75">
                    Duration: {video.duration}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-800">
              <p className="text-slate-400">Video unavailable</p>
            </div>
          )}
        </div>

        {/* Video details */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h2 id="video-title" className="text-2xl font-bold text-white mb-2">
                {video.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full text-white/70">
                  {video.category}
                </span>
                <span>{video.role}</span>
                {video.client && <span>Client: {video.client}</span>}
                <span>{video.year}</span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                {video.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {video.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-slate-800 text-slate-300 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {video.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-md text-xs"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(
                  video.platform === 'youtube' ? video.youtubeUrl : video.instagramUrl, 
                  '_blank'
                )}
                className="whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {video.platform === 'youtube' ? 'View on YouTube' : 'View on Instagram'}
              </Button>
              
              {video.testimonial && (
                <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-600 max-w-md">
                  <blockquote className="text-slate-300 text-sm italic mb-2">
                    &ldquo;{video.testimonial.quote}&rdquo;
                  </blockquote>
                  <cite className="text-slate-400 text-xs not-italic">
                    — {video.testimonial.name}, {video.testimonial.role}
                    <br />
                    {video.testimonial.company}
                  </cite>
                </div>
              )}
            </div>
          </div>
        </div>
    </MobileModalManager>
  );
};

export default VideoModal;
