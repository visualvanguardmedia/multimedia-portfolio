'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 bg-primary overflow-hidden flex flex-col items-center justify-center min-h-[60vh] text-center border-t border-ghost/5"
    >
      {/* Background texture */}
      <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay">
        <img
          src="/images/uploads/wide-march-2.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <span className="font-mono text-sm tracking-widest text-accent uppercase mb-8 block">
          Next Steps
        </span>
        <h2 className="font-serif italic text-6xl md:text-8xl mb-12 text-ghost">
          Let&rsquo;s Create <br />Together.
        </h2>

        <a
          href="mailto:jim@visualvanguardmedia.com"
          className="relative overflow-hidden group inline-block bg-accent text-primary px-10 py-5 rounded-[3rem] font-sans text-lg font-bold uppercase tracking-wider hover:scale-[1.03] transition-transform duration-300 shadow-2xl"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        >
          <span className="relative z-10 transition-colors group-hover:text-ghost">Initiate Project</span>
          <span className="absolute inset-0 bg-void translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
