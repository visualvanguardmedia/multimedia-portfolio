'use client';

import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-void pt-20 pb-10 px-6 mt-[-4rem] rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-ghost/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h3 className="font-sans font-bold text-3xl uppercase tracking-tighter mb-2 text-ghost">
              Visual Vanguard
            </h3>
            <p className="font-serif italic text-xl text-ghost/60">
              Cinematic storytelling. <br />
              Authenticity in motion.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ghost/40 mb-6">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm tracking-wide">
              <li>
                <button onClick={() => scrollTo('#work')} className="text-ghost/70 hover:text-accent transition-colors">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="text-ghost/70 hover:text-accent transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="text-ghost/70 hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ghost/40 mb-6">Social</h4>
            <ul className="space-y-4 font-sans text-sm tracking-wide">
              <li>
                <a
                  href="https://www.instagram.com/visualvanguardmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ghost/70 hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/visualvanguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ghost/70 hover:text-accent transition-colors"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jimelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ghost/70 hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ghost/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-xs text-ghost/40">
            &copy; {new Date().getFullYear()} Visual Vanguard Media. All rights reserved.
          </p>

          <div className="flex items-center gap-3 bg-primary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-ghost/10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ghost/80">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
