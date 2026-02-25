'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );
      gsap.to('.ticker-track', {
        xPercent: -50, repeat: -1, duration: 15, ease: 'none',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight mb-4 text-ghost">Featured Work</h2>
        <p className="font-serif italic text-xl md:text-2xl text-ghost/70">Capabilities &amp; Highlights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Documentary */}
        <div className="feature-card group relative flex flex-col justify-end overflow-hidden bg-primary border border-ghost/10 rounded-[2rem] shadow-2xl h-[400px] lg:h-[500px] cursor-pointer">
          <img src="https://i.ytimg.com/vi/c5in5xNJkk0/maxresdefault.jpg" alt="Data Centers Documentary" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-16 rounded-full border border-ghost/30 flex items-center justify-center backdrop-blur-md bg-void/30 pulse-glow">
              <svg className="w-6 h-6 ml-1 text-ghost" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="relative z-10 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase font-mono tracking-widest border border-ghost/20 rounded-full text-ghost/80">Documentary</span>
            <h3 className="font-sans font-bold text-2xl text-ghost mb-2">Hyperscale Data Centers</h3>
            <p className="font-sans text-sm text-ghost/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Investigative documentary — post-production, audio editing, story structure.</p>
          </div>
        </div>

        {/* Ticker */}
        <div className="feature-card flex flex-col justify-between overflow-hidden bg-primary border border-ghost/10 rounded-[2rem] shadow-2xl h-[400px] lg:h-[500px]">
          <div className="p-8 pb-0">
            <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase font-mono tracking-widest border border-ghost/20 rounded-full text-ghost/80">Technique</span>
            <h3 className="font-sans font-bold text-2xl mb-2 text-ghost">Stop Motion &amp; Studio</h3>
            <p className="font-sans text-sm text-ghost/60">Meticulous frame-by-frame orchestration and tabletop product capture.</p>
          </div>
          <div className="relative h-48 w-full overflow-hidden bg-void/50 mt-auto flex items-center border-t border-ghost/5">
            <div className="ticker-track flex whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 px-6">
                  <span className="font-serif italic text-4xl text-ghost/30">Visual Vanguard</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-sans font-bold text-2xl text-ghost/80 uppercase tracking-widest">Studio Production</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-sm tracking-widest text-ghost/40">TABLETOP • PRODUCT • STOP MOTION</span>
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studio Photography */}
        <div className="feature-card group relative flex flex-col justify-end overflow-hidden bg-primary border border-ghost/10 rounded-[2rem] shadow-2xl h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 w-full h-full">
            <img src="/images/photography/nike-savaleos-detail.jpg" alt="Nike Product" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <img src="/images/photography/cann-product-hero.jpg" alt="CANN Product" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-screen" />
            <div className="absolute inset-0 bg-void/40 group-hover:bg-void/10 transition-colors duration-700" />
          </div>
          <div className="relative z-10 p-8">
            <span className="inline-block px-3 py-1 mb-4 text-[10px] uppercase font-mono tracking-widest border border-ghost/20 rounded-full text-ghost/80">Behind the Lens</span>
            <h3 className="font-sans font-bold text-2xl mb-2 text-ghost">Studio Photography</h3>
            <p className="font-sans text-sm text-ghost/60">Crafting light and shadow for absolute precision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
