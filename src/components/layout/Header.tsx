'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          if (!navRef.current) return;
          if (self.progress > 0) {
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(16px)',
              borderColor: 'rgba(240, 240, 240, 0.1)',
              duration: 0.3,
              ease: 'power2.out',
            });
          } else {
            gsap.to(navRef.current, {
              backgroundColor: 'transparent',
              backdropFilter: 'blur(0px)',
              borderColor: 'transparent',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-[3rem] border border-transparent transition-all duration-300 w-[90%] max-w-4xl"
    >
      <div className="font-sans font-bold text-lg tracking-tight uppercase text-ghost">
        Visual Vanguard
      </div>
      <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-ghost">
        <button onClick={() => scrollTo('#work')} className="hover:-translate-y-[1px] transition-transform">Work</button>
        <button onClick={() => scrollTo('#photography')} className="hover:-translate-y-[1px] transition-transform">Photography</button>
        <button onClick={() => scrollTo('#about')} className="hover:-translate-y-[1px] transition-transform">About</button>
      </div>
      <button
        onClick={() => scrollTo('#contact')}
        className="relative overflow-hidden group bg-accent text-primary px-5 py-2 rounded-[2rem] font-sans text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform duration-300"
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        <span className="relative z-10 transition-colors group-hover:text-void">Let&apos;s Talk</span>
        <span className="absolute inset-0 bg-ghost translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
      </button>
    </nav>
  );
};

export default Header;
