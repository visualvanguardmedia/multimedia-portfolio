'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: Array<{ label: string; id: string }> = [
    { label: 'Work', id: '#work' },
    { label: 'Photography', id: '#photography' },
    { label: 'Process', id: '#process' },
    { label: 'About', id: '#about' },
  ];

  return (
    <>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-void/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-6 z-50 px-6" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-ghost/10 bg-primary/70 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ghost/10">
              <span className="font-sans font-bold tracking-tight uppercase text-ghost">Visual Vanguard</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-ghost/15 flex items-center justify-center text-ghost/80 hover:text-ghost hover:border-ghost/30 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollTo(item.id);
                    }}
                    className="text-left px-4 py-3 rounded-xl border border-ghost/10 text-ghost/80 hover:text-ghost hover:border-ghost/30 hover:-translate-y-[1px] transition-all font-sans tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollTo('#contact');
                }}
                className="mt-6 w-full relative overflow-hidden group bg-accent text-primary px-5 py-3 rounded-[2rem] font-sans text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform duration-300"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              >
                <span className="relative z-10 transition-colors group-hover:text-void">Let&apos;s Talk</span>
                <span className="absolute inset-0 bg-ghost translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
              </button>
            </div>
          </div>
        </div>
      )}

      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-[3rem] border border-transparent transition-all duration-300 w-[90%] max-w-4xl"
      >
        <div className="font-sans font-bold text-lg tracking-tight uppercase text-ghost">Visual Vanguard</div>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-ghost">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:-translate-y-[1px] transition-transform"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-full border border-ghost/15 flex items-center justify-center text-ghost/80 hover:text-ghost hover:border-ghost/30 transition-colors"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="relative overflow-hidden group bg-accent text-primary px-5 py-2 rounded-[2rem] font-sans text-sm font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span className="relative z-10 transition-colors group-hover:text-void">Let&apos;s Talk</span>
            <span className="absolute inset-0 bg-ghost translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
