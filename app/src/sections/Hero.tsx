import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';

const TERMINAL_LINES: { kind: 'prompt' | 'output' | 'comment'; text: string }[] = [
  { kind: 'prompt', text: 'whoami' },
  { kind: 'output', text: 'Computer Systems Engineer · Co-Founder, Agentic Engineering' },
  { kind: 'prompt', text: 'cat ~/focus.md' },
  {
    kind: 'output',
    text: 'Production AI systems · legal AI · open-source agent tooling',
  },
  { kind: 'comment', text: 'multi-agent orchestration · secure infrastructure · human oversight' },
];

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 h-[60vh] w-[60vw] bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mono-kicker">// JALISCO, MX</span>
              <span className="h-px w-10 bg-amber-500/60" />
              <span className="mono-meta">Available for collaboration</span>
            </motion.div>

            <motion.h1
              className="display-hero ink mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Fernando <em className="italic text-amber-soft">Ramos</em>.
            </motion.h1>

            <motion.p
              className="font-serif-display text-2xl sm:text-3xl ink-dim leading-snug mb-8 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Computer Systems Engineer · Co-Founder, <span className="ink">Agentic Engineering</span>.
            </motion.p>

            <motion.p
              className="max-w-xl ink-dim leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Building <span className="ink">production AI systems</span>, legal AI products, and open-source tooling for autonomous engineering — multi-agent orchestration, secure infrastructure, and human oversight at the core.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button onClick={scrollToProjects} className="btn-primary inline-flex items-center gap-2">
                See selected work
                <ArrowRight size={16} />
              </button>
              <a
                href="/Fernando_Ramos_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                View CV
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-10 gap-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {[
                { value: '3+', label: 'years shipping', meta: 'eternal data → ai' },
                { value: '700+', label: 'calls/mo automated', meta: 'voicebot fleet @ tendencia' },
                { value: '2', label: 'OSS tools published', meta: 'specsafe · ultimate harness' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif-display text-4xl ink leading-none">{stat.value}</div>
                  <div className="mono-meta mt-2">{stat.label}</div>
                  <div className="mono-meta text-[10px] opacity-70">{stat.meta}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block mt-12 lg:mt-0"
          >
            <div className="terminal-block p-0 overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-2.5 border-b hairline">
                <span className="w-2 h-2 bg-amber-500" />
                <span className="mono-meta flex-1">~/fernando/portfolio</span>
                <span className="mono-meta text-[10px] ink-faint">v2.6.0 · live</span>
              </div>

              <div className="p-6 space-y-2.5 text-[13.5px] leading-relaxed">
                {TERMINAL_LINES.map((line, i) => {
                  if (line.kind === 'prompt') {
                    return (
                      <div key={i} className="flex gap-2">
                        <span className="text-amber select-none">$</span>
                        <span className="ink">{line.text}</span>
                      </div>
                    );
                  }
                  if (line.kind === 'comment') {
                    return (
                      <div key={i} className="ink-faint">
                        <span className="select-none"># </span>
                        {line.text}
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="ink-dim pl-3.5">
                      {line.text}
                    </div>
                  );
                })}
                <div className="flex gap-2 pt-1">
                  <span className="text-amber select-none">$</span>
                  <span className="caret" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between mono-meta">
              <span>uptime · 3y 0mo</span>
              <span>stack · ts · tanstack · cloudflare · sql</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 ink-faint hover:text-amber transition-colors flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
      >
        <span className="mono-meta text-[10px]">scroll ↓</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
};
