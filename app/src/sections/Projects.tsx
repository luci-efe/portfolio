import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Bot, Shield, Zap, MessageSquare, Code, Phone, Car, Wrench, Sparkles, LineChart, X } from 'lucide-react';
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
  showContact?: boolean;
}

const projects: Project[] = [
  // Startup Projects - Agentic Engineering (First)
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
    description: 'B2C AI-powered automation product for personal productivity. Early-stage product with active user testing and iteration.',
    metrics: '~10 active users | User testing | Product iteration',
    tags: ['React', 'TypeScript', 'AI', 'Cloudflare'],
    category: 'startup',
    icon: Zap,
    link: 'https://defade.app/',
  },
  {
    title: 'Price Genius',
    description: 'AI-powered price comparison and optimization tool. Deployed for testing but not yet production-ready.',
    metrics: 'Testing phase | Not production-ready | In development',
    tags: ['React', 'TypeScript', 'AI', 'Data Analysis'],
    category: 'startup',
    icon: LineChart,
    link: 'https://pricegenius.org/',
  },
  // Enterprise Projects - Tendencia Systems (Second)
  {
    title: 'AI Voicebots - Teruya & Sterling',
    description: 'Bilingual voice agents (EN/ES) for Florida law firm handling new client intake, collections, and reception. Integrated with Vapi, OpenAI, Twilio, and Zoho CRM for seamless workflow automation.',
    metrics: '6 bots | 700+ calls/month (40% of firm volume) | 60% cost reduction',
    tags: ['Vapi', 'OpenAI', 'n8n', 'Twilio', 'ElevenLabs', 'Zoho CRM', 'Supabase'],
    category: 'enterprise',
    icon: Phone,
    showContact: true,
  },
  {
    title: 'Insurance Quote System',
    description: 'Revolutionary RAG-based vehicle matching system processing 300K+ records across 11 insurance APIs. Replaced failed ETL approach with vector embeddings and semantic search.',
    metrics: '300K+ records | 80%+ accuracy | 11 providers integrated',
    tags: ['Python', 'PostgreSQL', 'Vector Embeddings', 'RAG', 'n8n', 'Microsoft SQL Server'],
    category: 'enterprise',
    icon: Car,
  },
  {
    title: 'Medical Center Lead Gen',
    description: 'WhatsApp chatbot for Sta. Austin Medical Center in Querétaro. Automated lead qualification, onboarding, and appointment scheduling, delivering hot leads to sales team daily.',
    metrics: 'Daily qualified leads | 24/7 availability | Zero scope creep delivery',
    tags: ['n8n', 'Supabase', 'HubSpot', 'Google Cloud', 'Digital Ocean'],
    category: 'enterprise',
    icon: MessageSquare,
    showContact: true,
  },
  {
    title: 'Autos Hitti Lead Gen',
    description: 'WhatsApp chatbot for car dealership capturing leads interested in buying vehicles. Qualifies prospects, completes onboarding, and schedules appointments with sales consultants when customers show interest in specific models or request to book.',
    metrics: 'Hundreds of leads monthly | Daily appointments scheduled | Hot lead delivery',
    tags: ['n8n', 'Supabase', 'WhatsApp API', 'Lead Qualification'],
    category: 'enterprise',
    icon: MessageSquare,
    showContact: true,
  },
  // Academic Projects - ITESO (Last)
  {
    title: 'ReparaYa',
    description: 'Full-stack platform connecting contractors with homeowners needing domestic services. Built solo in 2 weeks when team failed to contribute. Validated "AI Orchestrator" concept.',
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

const categoryConfig = {
  enterprise: { 
    label: 'Enterprise', 
    color: 'text-cyan-400', 
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    glowColor: 'rgba(6, 182, 212, 0.3)',
    description: 'Production systems at Tendencia Systems'
  },
  startup: { 
    label: 'Startup', 
    color: 'text-orange-400', 
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    description: 'Agentic Engineering products & experiments'
  },
  academic: { 
    label: 'Academic', 
    color: 'text-emerald-400', 
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    description: 'ITESO coursework & personal projects'
  },
};

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; projectTitle: string }> = ({ isOpen, onClose, projectTitle }) => {
  const isVoicebot = projectTitle.includes('Voicebots');
  const isAutosHitti = projectTitle.includes('Autos Hitti');
  
  const voicebotNumbers = [
    {
      pair: 'New Client / Nuevo Cliente',
      purpose: 'Opening new legal cases',
      en: '+1 (786) 530-2445',
      es: '+1 (786) 999-2571'
    },
    {
      pair: 'Collections / Cobranzas',
      purpose: 'Payment registration and billing inquiries',
      en: '+1 (786) 999-2458',
      es: '+1 (786) 999-2461'
    },
    {
      pair: 'Existing Client / Cliente Existente',
      purpose: 'Reception, case updates, and consultations',
      en: '+1 (786) 999-2463',
      es: '+1 (786) 999-2464'
    }
  ];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="glass-card rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              {isVoicebot ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI Voicebots - Teruya & Sterling
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Florida law firm voice agents. Call any number to experience the bots in action. Available 24/7.
                  </p>
                  
                  <div className="space-y-4">
                    {voicebotNumbers.map((bot, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <h4 className="text-lg font-semibold text-cyan-400 mb-1">{bot.pair}</h4>
                        <p className="text-sm text-slate-400 mb-3">{bot.purpose}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-3">
                          <a
                            href={`tel:${bot.en.replace(/[\s()-]/g, '')}`}
                            className="flex items-center gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                          >
                            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">EN</span>
                            <Phone size={16} className="text-blue-400" />
                            <span className="text-white font-medium">{bot.en}</span>
                          </a>
                          
                          <a
                            href={`tel:${bot.es.replace(/[\s()-]/g, '')}`}
                            className="flex items-center gap-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-colors"
                          >
                            <span className="text-xs font-medium text-orange-400 uppercase tracking-wider">ES</span>
                            <Phone size={16} className="text-orange-400" />
                            <span className="text-white font-medium">{bot.es}</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                    <p className="text-sm text-slate-400">
                      <strong className="text-cyan-400">Capabilities:</strong> New client intake, collections follow-up, case status inquiries, appointment scheduling, and general reception. All calls are logged to Zoho CRM with AI-generated summaries.
                    </p>
                  </div>
                </>
              ) : isAutosHitti ? (
                <>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    WhatsApp Chatbot
                  </h3>
                  <p className="text-slate-400 mb-6">Autos Hitti - Car Dealership</p>
                  
                  <a
                    href="https://wa.me/33341711743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors mb-6"
                  >
                    <MessageSquare size={24} className="text-emerald-400" />
                    <div>
                      <span className="text-white font-medium block text-lg">+52 33 4171 1743</span>
                      <span className="text-sm text-slate-400">Click to open WhatsApp</span>
                    </div>
                  </a>
                  
                  <div className="space-y-2 text-sm text-slate-400">
                    <p><strong className="text-emerald-400">Features:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Lead capture for car buyers</li>
                      <li>Vehicle model inquiries</li>
                      <li>Appointment scheduling with sales consultants</li>
                      <li>Hot lead delivery to sales team</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    WhatsApp Chatbot
                  </h3>
                  <p className="text-slate-400 mb-6">Sta. Austin Medical Center - Querétaro</p>
                  
                  <a
                    href="https://wa.me/4423864653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors mb-6"
                  >
                    <MessageSquare size={24} className="text-emerald-400" />
                    <div>
                      <span className="text-white font-medium block text-lg">+52 442 386 4653</span>
                      <span className="text-sm text-slate-400">Click to open WhatsApp</span>
                    </div>
                  </a>
                  
                  <div className="space-y-2 text-sm text-slate-400">
                    <p><strong className="text-emerald-400">Features:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Automated lead qualification</li>
                      <li>Appointment scheduling</li>
                      <li>Service information</li>
                      <li>Hot lead alerts to sales team</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);
  const config = categoryConfig[project.category];
  
  return (
    <>
      <Card3D className="h-full" intensity={8} glowColor={config.glowColor}>
        <motion.div
          className="glass-card rounded-2xl p-6 h-full flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center`}>
              <project.icon size={24} className={config.color} />
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${config.bgColor} ${config.color} border ${config.borderColor}`}>
              {config.label}
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
              <SkillBadge key={tag}>{tag}</SkillBadge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink size={16} />
                Visit Website
              </a>
            )}
            {project.showContact && (
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all"
              >
                <Phone size={16} />
                Try It
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </Card3D>
      
      <ContactModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        projectTitle={project.title}
      />
    </>
  );
};

export const Projects: React.FC = () => {
  const enterpriseProjects = projects.filter(p => p.category === 'enterprise');
  const startupProjects = projects.filter(p => p.category === 'startup');
  const academicProjects = projects.filter(p => p.category === 'academic');

  const renderCategory = (categoryProjects: Project[], categoryKey: 'enterprise' | 'startup' | 'academic') => {
    const config = categoryConfig[categoryKey];
    
    return (
      <div className="mb-16">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={`h-px flex-1 ${config.bgColor}`} />
          <div className="text-center">
            <h3 className={`text-2xl font-bold ${config.color}`}>{config.label}</h3>
            <p className="text-sm text-slate-500">{config.description}</p>
          </div>
          <div className={`h-px flex-1 ${config.bgColor}`} />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    );
  };

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
            A selection of projects spanning enterprise solutions, startup innovations, and academic research.
          </p>
        </motion.div>

        {/* Startup Section - Agentic Engineering */}
        {renderCategory(startupProjects, 'startup')}
        
        {/* Enterprise Section - Tendencia Systems */}
        {renderCategory(enterpriseProjects, 'enterprise')}
        
        {/* Academic Section - ITESO */}
        {renderCategory(academicProjects, 'academic')}
      </div>
    </section>
  );
};
