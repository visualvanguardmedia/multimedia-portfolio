'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Reveal
      gsap.fromTo(
        '.reveal-line',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-content',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-40 overflow-hidden bg-void flex items-center justify-center min-h-[80vh]"
    >
      <div className="absolute inset-0 w-full h-full parallax-bg overflow-hidden">
        <img
          src="/images/uploads/frozen-eyelashes.png"
          alt="Documentary still — ICE OUT"
          className="w-full h-[130%] object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center philosophy-content">
        <p className="reveal-line font-sans text-xl md:text-2xl text-ghost/50 mb-8 max-w-2xl mx-auto leading-relaxed">
          Most films focus on manufactured perfection.
        </p>
        <h2 className="reveal-line font-serif italic text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] text-ghost">
          My work focuses on{' '}
          <span className="text-accent underline decoration-1 underline-offset-8">
            authentic
          </span>{' '}
          human connection.
        </h2>
      </div>
    </section>
  );
};

export default Philosophy;
