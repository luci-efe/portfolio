import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Shield, Rocket } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ElementType;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Co-founder & Tech Lead',
    company: 'Agentic Engineering',
    period: 'May 2025 – Present',
    description: 'Co-founded AI automation agency focused on delivering cutting-edge solutions. Architected infrastructure achieving 99.5% cost reduction using Cloudflare + Convex + Mastra stack.',
    achievements: [
      'Designed and implemented Cloudflare + Convex + Mastra architecture (99.5% cost reduction)',
      'Leading team of 4 (2 co-founders + 2 developers)',
      'Developing SpecSafe: AI-driven test generation framework (TypeScript/Vitest)',
      'Building Defade.app (B2C product, ~10 users)',
      'Created Price Genius (price optimization tool, in development)',
      'In pre-seed stage, seeking investment to scale operations',
    ],
    icon: Rocket,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Software & AI Developer → Project Manager',
    company: 'Tendencia Systems',
    period: 'Nov 2024 – May 2025',
    description: 'Promoted from Developer to PM after demonstrating leadership. Delivered 3 major AI projects with 0 scope creep. Managed cross-functional team of 8 people.',
    achievements: [
      'AI Voicebots: 6 bilingual bots handling 700+ calls/month (40% of firm volume), 60% cost reduction',
      'Insurance Pipeline: Processed 300K+ records across 11 APIs using vector embeddings (80%+ accuracy)',
      'Medical Chatbot: Lead qualification system delivering daily hot leads',
      'Reduced scope creep by 60% through structured PM practices',
      'Led team of 8: 2 senior devs, 2 junior devs, DevOps, QA, and designer',
      'Highest revenue-generating project for the company',
    ],
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Information Security Analyst (Contractor)',
    company: 'Eternal Data',
    period: 'Oct 2024 – Feb 2026',
    description: 'Vulnerability research and assessment for enterprise clients. Developed automation scripts and security protocols. Applied risk mitigation mindset transferable to software development.',
    achievements: [
      'Key client: Cinépolis (major Mexican cinema chain)',
      'Developed Python/Shell scripts for vulnerability scanning automation',
      'Created tools for data transformation and automated report generation',
      'Implemented risk analysis frameworks applicable to secure software development',
      'Conducted penetration testing and security assessments',
    ],
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Computer Systems Engineering',
    company: 'ITESO',
    period: '2022 – 2026 (Graduating Dec 2026)',
    description: '8th semester, graduating December 2026. Focus on AI, software engineering, and distributed systems. Built ReparaYa platform solo in 2 weeks, validating "AI Orchestrator" concept.',
    achievements: [
      'ReparaYa: Full-stack contractor platform built solo in 2 weeks (Next.js, Vercel)',
      'Validated "AI Orchestrator" philosophy using multiple AI agents',
      'Experience with advanced algorithms and database optimization',
      'Leading class projects with AI-augmented development workflows',
    ],
    icon: GraduationCap,
    color: 'from-orange-500 to-amber-500',
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-orange-500"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.company}
                  className={`relative flex items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      className="glass-card rounded-2xl p-6 inline-block w-full md:max-w-md"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Period */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white mb-3`}>
                        {exp.period}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      
                      {/* Company */}
                      <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-3`}>
                        {exp.company}
                      </p>
                      
                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      
                      {/* Achievements */}
                      <ul className={`text-sm text-slate-300 space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex-shrink-0 z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
                    >
                      <exp.icon size={18} className="text-white" />
                    </motion.div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
