'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Breakthrough News YouTube', value: '20K → 1M', detail: 'subscribers' },
  { label: 'MintPress News YouTube', value: '40K → 101K', detail: 'subscribers' },
  { label: 'Reactive Training Systems', value: '0 → 25K / 26K', detail: 'IG / YouTube' },
  { label: 'Rookie Run Club PT', value: '0 → 15K', detail: 'Instagram' },
  { label: 'Zao Strength Revenue', value: '$0 → $100K', detail: 'via social media' },
];

const GrowthMetrics: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white mb-3">
            Growth Track Record
          </h2>
          <p className="text-slate-400 text-base">
            Channels and brands I&apos;ve helped build through content strategy and hands-on production.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-white/10 rounded-lg p-6 text-center hover:border-[var(--warm-accent)]/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-wider mb-3">
                {metric.detail}
              </div>
              <div className="text-sm text-slate-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;
