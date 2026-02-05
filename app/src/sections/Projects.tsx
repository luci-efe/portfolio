import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Shield, Zap, MessageSquare, Database, Cloud, Code } from 'lucide-react';
import { Card3D } from '@/components/ui/Card3D';
import { SkillBadge } from '@/components/ui/SkillBadge';

interface Project {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  category: 'enterprise' | 'startup' | 'academic';
  icon: React.ElementType;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  // Enterprise Projects
  {
    title: 'AI Voicebots',
    description: 'Intelligent voice agents for customer service automation with natural language processing and real-time sentiment analysis.',
    metrics: '6 bots | 500+ calls/month | 60% cost reduction',
    tags: ['Python', 'PostgreSQL', 'OpenAI', 'REST APIs'],
    category: 'enterprise',
    icon: Bot,
    link: '#',
  },
  {
    title: 'Insurance Pipeline',
    description: 'Automated data processing pipeline for insurance claims using Jaccard similarity algorithm for record matching.',
    metrics: '300K records | 80% accuracy | Jaccard algorithm',
    tags: ['Python', 'PostgreSQL', 'Data Processing'],
    category: 'enterprise',
    icon: Database,
    link: '#',
  },
  {
    title: 'Medical Chatbot',
    description: 'AI-powered appointment scheduling and lead qualification system for healthcare providers.',
    metrics: 'High-quality leads | 24/7 availability',
    tags: ['OpenAI', 'Node.js', 'React'],
    category: 'enterprise',
    icon: MessageSquare,
    link: '#',
  },
  // Startup Projects
  {
    title: 'SpecSafe',
    description: 'AI-powered test generation platform that automatically creates TypeScript and Vitest test cases from code analysis.',
    metrics: 'AI test generation | TypeScript/Vitest',
    tags: ['TypeScript', 'React', 'OpenAI'],
    category: 'startup',
    icon: Shield,
    github: 'https://github.com/luci-efe',
  },
  {
    title: 'AI Platform',
    description: 'Cloud-native AI automation platform built with Cloudflare Workers and Mastra framework.',
    metrics: '99.5% cost reduction | Cloudflare + Mastra',
    tags: ['TypeScript', 'Cloudflare', 'Mastra'],
    category: 'startup',
    icon: Cloud,
    link: '#',
  },
  {
    title: 'Automation Tools',
    description: 'Suite of voice agents and workflow automation tools for small businesses.',
    metrics: 'Voice agents | Workflow automation',
    tags: ['Python', 'React', 'Mastra'],
    category: 'startup',
    icon: Zap,
    github: 'https://github.com/luci-efe',
  },
  // Academic Projects
  {
    title: 'Data Structures',
    description: 'Advanced algorithms implementation including graphs, trees, and dynamic programming solutions.',
    metrics: 'Advanced algorithms implementation',
    tags: ['Python', 'Algorithms'],
    category: 'academic',
    icon: Code,
    github: 'https://github.com/luci-efe',
  },
  {
    title: 'Database Systems',
    description: 'PostgreSQL optimization project with query analysis and indexing strategies.',
    metrics: 'PostgreSQL optimization',
    tags: ['SQL', 'PostgreSQL'],
    category: 'academic',
    icon: Database,
    github: 'https://github.com/luci-efe',
  },
];

const categoryLabels = {
  enterprise: { label: 'Enterprise', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
  startup: { label: 'Startup', color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
  academic: { label: 'Academic', color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
};

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects spanning enterprise solutions, startup innovations, 
            and academic research in AI and software engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const categoryStyle = categoryLabels[project.category];
            
            return (
              <Card3D
                key={project.title}
                className="h-full"
                intensity={8}
                glowColor={
                  project.category === 'enterprise'
                    ? 'rgba(6, 182, 212, 0.3)'
                    : project.category === 'startup'
                    ? 'rgba(249, 115, 22, 0.3)'
                    : 'rgba(16, 185, 129, 0.3)'
                }
              >
                <motion.div
                  className="glass-card rounded-2xl p-6 h-full flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${categoryStyle.bgColor} w-fit mb-4`}>
                    <project.icon size={14} className={categoryStyle.color} />
                    <span className={`text-xs font-medium ${categoryStyle.color}`}>
                      {categoryStyle.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-white/5">
                    <Zap size={16} className="text-yellow-400" />
                    <span className="text-sm text-slate-300">{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <SkillBadge key={tag} variant={project.category}>
                        {tag}
                      </SkillBadge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink size={16} />
                        View Project
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <Github size={16} />
                        Source
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
