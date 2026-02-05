import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Server,
  Container,
  Workflow,
  Shield,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Oracle Cloud', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Cloudflare', level: 90 },
      { name: 'Vercel', level: 85 },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'OpenAI', level: 95 },
      { name: 'Anthropic', level: 85 },
      { name: 'LangChain', level: 80 },
      { name: 'Mastra', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    icon: Container,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Terraform', level: 75 },
      { name: 'CI/CD', level: 80 },
    ],
  },
];

const additionalSkills = [
  { name: 'React', icon: Layers },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Linux', icon: Terminal },
  { name: 'Security', icon: Shield },
  { name: 'System Design', icon: Cpu },
  { name: 'Agile', icon: Workflow },
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
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Additional Tools & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <skill.icon
                  size={20}
                  className="text-slate-400 group-hover:text-cyan-400 transition-colors"
                />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
