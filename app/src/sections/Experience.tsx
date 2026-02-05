import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Shield, Rocket } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Co-founder & Lead Developer',
    company: 'Agentic Engineering',
    period: '2025 - Present',
    description: 'Building AI automation agency with 99.5% cost reduction architecture. Leading technical strategy and product development for AI-powered solutions.',
    icon: Rocket,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'AI Systems Developer & Technical PM',
    company: 'Tendencia Systems',
    period: '2024 - 2025',
    description: 'Delivered 6 AI voicebots processing 500+ calls/month. Architected insurance data pipeline handling 300K records with 80% accuracy.',
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Information Security Analyst',
    company: 'Eternal Data',
    period: '2023 - 2024',
    description: 'Vulnerability research for enterprise clients. Implemented security protocols and conducted penetration testing assessments.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Computer Systems Engineering',
    company: 'ITESO',
    period: '2022 - 2026',
    description: '8th semester, graduating December 2026. Focus on AI, software engineering, and distributed systems.',
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
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
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
