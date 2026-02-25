import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { PortfolioVideo } from '@/types';

interface PortfolioCardProps {
    video: PortfolioVideo;
    onClick: (video: PortfolioVideo) => void;
    className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ video, onClick, className = '' }) => {
    return (
        <div
            onClick={() => onClick(video)}
            className={`group relative cursor-pointer overflow-hidden aspect-video bg-neutral-900 ${className}`}
        >
            {/* Thumbnail */}
            <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6">

                {/* Play Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20">
                        <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                </div>

                {/* Info - slides up slightly on hover */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <p className="text-white/70 text-xs tracking-[0.2em] font-light uppercase mb-2">
                        {video.category}
                    </p>
                    <h3 className="text-ghost text-xl font-sans font-bold tracking-tight">
                        {video.title}
                    </h3>
                    <p className="text-ghost/50 text-sm mt-2 font-light">
                        {video.role}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
