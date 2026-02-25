'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: '01',
    title: 'Development',
    desc: 'Finding the truth in the narrative. Unearthing the core aesthetic before the cameras roll.',
    visual: (
      <svg className="w-48 h-48 animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(240,240,240,0.2)" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
        <path
          d="M50 5 L50 40 M50 60 L50 95 M5 50 L40 50 M60 50 L95 50 M18 18 L35 35 M82 82 L65 65 M82 18 L65 35 M18 82 L35 65"
          stroke="rgba(240,240,240,0.2)"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Production',
    desc: 'Executing the vision with precision. A dance of light, shadow, and authentic performance.',
    visual: (
      <div className="relative w-48 h-48 overflow-hidden rounded-full border border-ghost/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-void" />
        <div className="absolute w-[200%] h-[20%] bg-accent/30 blur-xl animate-[pulse_3s_ease-in-out_infinite] rotate-45 transform origin-center" />
        <svg className="w-16 h-16 text-ghost relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Post-Production',
    desc: 'Refining the rhythm. Every cut, color grade, and sound design element must serve the emotion.',
    visual: (
      <div className="flex items-center justify-center gap-2 h-48">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-2 bg-accent rounded-full animate-pulse"
            style={{
              height: `${((i * 37 + 29) % 80) + 20}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: '1s',
            }}
          />
        ))}
      </div>
    ),
  },
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card') as HTMLElement[];

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=100%',
          endTrigger: cards[i + 1],
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'none',
          }),
          scrub: true,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative w-full bg-void">
      {steps.map((step, index) => (
        <div
          key={index}
          className="process-card h-screen w-full flex items-center justify-center sticky top-0 bg-void border-t border-ghost/5 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary opacity-50 mix-blend-multiply" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Visual Column */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              {step.visual}
            </div>

            {/* Text Column */}
            <div className="order-1 md:order-2">
              <span className="font-mono text-4xl text-accent/50 mb-6 block">{step.num}</span>
              <h3 className="font-sans font-bold text-4xl md:text-6xl mb-6 text-ghost">{step.title}</h3>
              <p className="font-sans text-lg md:text-xl text-ghost/60 max-w-lg leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Process;
