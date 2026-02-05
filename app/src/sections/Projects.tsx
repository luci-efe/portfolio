import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Shield, Zap, MessageSquare, Database, Cloud, Code, Phone, Car, Wrench, Sparkles, LineChart } from 'lucide-react';
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
  // Enterprise Projects - Tendencia Systems
  {
    title: 'AI Voicebots - Teruya & Sterling',
    description: 'Bilingual voice agents (EN/ES) for Florida law firm handling new client intake, collections, and reception. Integrated with Vapi, OpenAI, Twilio, and Zoho CRM for seamless workflow automation.',
    metrics: '6 bots | 700+ calls/month (40% of firm volume) | 60% cost reduction',
    tags: ['Vapi', 'OpenAI', 'n8n', 'Twilio', 'ElevenLabs', 'Zoho CRM', 'Supabase'],
    category: 'enterprise',
    icon: Phone,
    link: '#',
    github: 'https://github.com/luci-efe/teruya-voicebots',
  },
  {
    title: 'Insurance Quote System',
    description: 'Revolutionary RAG-based vehicle matching system processing 300K+ records across 11 insurance APIs. Replaced failed ETL approach with vector embeddings and semantic search, reducing query time from minutes to seconds.',
    metrics: '300K+ records | 80%+ accuracy | 11 providers integrated',
    tags: ['Python', 'PostgreSQL', 'Vector Embeddings', 'RAG', 'n8n', 'Microsoft SQL Server'],
    category: 'enterprise',
    icon: Car,
    link: '#',
  },
  {
    title: 'Medical Center Lead Gen',
    description: 'WhatsApp chatbot for Sta. Austin Medical Center in Querétaro. Automated lead qualification, onboarding, and appointment scheduling, delivering hot leads to sales team daily.',
    metrics: 'Daily qualified leads | 24/7 availability | Zero scope creep delivery',
    tags: ['n8n', 'Supabase', 'HubSpot', 'Google Cloud', 'Digital Ocean'],
    category: 'enterprise',
    icon: MessageSquare,
    link: '#',
    github: 'https://github.com/luci-efe/staustin-chatbot',
  },
  // Startup Projects - Agentic Engineering
  {
    title: 'Agentic Engineering',
    description: 'AI automation agency landing page. Combines cutting-edge AI technology with expert software development to deliver solutions that push boundaries.',
    metrics: 'Live site | Modern design | AI-focused branding',
    tags: ['React', 'TypeScript', 'Cloudflare', 'Modern UI'],
    category: 'startup',
    icon: Sparkles,
    link: 'https://agenticengineering.agency/',
  },
  {
    title: 'Chatbot Demos',
    description: 'Interactive demos showcasing various AI chatbot implementations and voice agents for different business use cases.',
    metrics: 'Live demos | Multiple bot types | Interactive showcase',
    tags: ['React', 'AI Integration', 'Voice Agents', 'Chatbots'],
    category: 'startup',
    icon: Bot,
    link: 'https://agenticengineering.online/',
  },
  {
    title: 'SpecSafe',
    description: 'AI-powered test generation framework that automatically creates TypeScript and Vitest test cases from code analysis. Implements Spec-Driven Development and TDD workflows.',
    metrics: 'AI test generation | TypeScript/Vitest | Open Source',
    tags: ['TypeScript', 'Vitest', 'AI', 'Open Source', 'Spec-Driven Development'],
    category: 'startup',
    icon: Shield,
    github: 'https://github.com/Agentic-Engineering-Agency/specsafe',
  },
  {
    title: 'Defade.app',
    description: 'B2C product for AI-powered automation (currently in pre-seed stage, ~10 users). Part of Agentic Engineering portfolio.',
    metrics: '~10 users | Pre-seed stage | In development',
    tags: ['React', 'TypeScript', 'AI', 'Cloudflare'],
    category: 'startup',
    icon: Zap,
    link: 'https://defade.app/',
  },
  {
    title: 'Price Genius',
    description: 'AI-powered price comparison and optimization tool (work in progress, advancing development).',
    metrics: 'In development | Price optimization | AI-driven',
    tags: ['React', 'TypeScript', 'AI', 'Data Analysis'],
    category: 'startup',
    icon: LineChart,
    link: 'https://pricegenius.org/',
  },
  // Academic Projects - ITESO
  {
    title: 'ReparaYa',
    description: 'Full-stack platform connecting contractors with homeowners needing domestic services. Built solo in 2 weeks when team failed to contribute. Validated "AI Orchestrator" concept using multiple AI agents for complete development.',
    metrics: 'Solo project | 2 weeks delivery | AI-orchestrated development',
    tags: ['Next.js', 'Vercel', 'PostgreSQL', 'AI Orchestration'],
    category: 'academic',
    icon: Wrench,
    link: 'https://repara-ya-mu.vercel.app/',
    github: 'https://github.com/luci-efe/ReparaYa',
  },
  {
    title: 'Data Structures',
    description: 'Advanced algorithms implementation including complex data processing, graph algorithms, and optimization solutions for academic coursework.',
    metrics: 'Advanced algorithms | Optimized solutions',
    tags: ['Python', 'Algorithms', 'Data Structures'],
    category: 'academic',
    icon: Code,
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
            A selection of projects spanning enterprise solutions at Tendencia Systems, 
            startup innovations at Agentic Engineering, and academic research at ITESO.
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
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${categoryStyle.bgColor} flex items-center justify-center`}>
                      <project.icon size={24} className={categoryStyle.color} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryStyle.bgColor} ${categoryStyle.color}`}>
                      {categoryStyle.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-cyan-400 font-medium">{project.metrics}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <SkillBadge key={tag} variant="small">
                        {tag}
                      </SkillBadge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
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
