import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Cloud,
  Server,
  Layers,
  Award
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  skills: string[];
  highlight: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'React', 'Node.js'],
    highlight: 'TypeScript-first development',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-amber-500',
    skills: ['OpenAI', 'Anthropic', 'Mastra', 'LangChain', 'RAG', 'Vector Embeddings'],
    highlight: 'Mastra framework specialist',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'text-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    skills: ['Cloudflare', 'AWS', 'Azure', 'Vercel', 'Oracle Cloud', 'Digital Ocean'],
    highlight: '99.5% cost reduction architecture',
  },
  {
    title: 'DevOps & Tools',
    icon: Server,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['Docker', 'Terraform', 'CI/CD', 'GitHub Actions', 'Linux'],
    highlight: 'CI/CD automation expert',
  },
];

const additionalTools = [
  'Vapi', 'n8n', 'Twilio', 'ElevenLabs', 'Supabase', 'Convex', 
  'HubSpot', 'Zoho CRM', 'Git', 'Claude Code', 'OpenClaw'
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable, intelligent systems.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className={`text-sm ${category.color}`}>{category.highlight}</p>
                </div>
              </div>

              {/* Skills Cloud */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 text-slate-300 border border-white/10 hover:border-${category.color.split('-')[1]}-500/50 hover:text-white transition-all cursor-default`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Additional Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Layers size={14} className="text-slate-500" />
                <span className="text-sm text-slate-300">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <Award size={20} className="text-cyan-400" />
            <span className="text-slate-300">Certifications:</span>
            <span className="text-white font-medium">Google PM • IBM GenAI • Cisco CCNA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
