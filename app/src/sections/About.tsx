import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Cloud, Server, Terminal } from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';
import { useInView } from '@/hooks/useInView';

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 300, suffix: 'K+', label: 'Records Processed' },
];

const techStack = [
  { name: 'React', icon: Code2, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: Terminal, color: 'text-blue-400' },
  { name: 'Python', icon: Code2, color: 'text-yellow-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-emerald-400' },
  { name: 'OpenAI', icon: Brain, color: 'text-violet-400' },
  { name: 'Docker', icon: Server, color: 'text-blue-500' },
  { name: 'Cloudflare', icon: Cloud, color: 'text-orange-400' },
  { name: 'AWS', icon: Cloud, color: 'text-amber-400' },
];

export const About: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Passionate about <span className="text-gradient">AI & Automation</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {isInView ? (
                  <CountUp
                    end={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Co-founder of <span className="text-violet-400">Agentic Engineering</span>
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a Software Developer and AI Engineer based in Guadalajara, México, 
                  with a passion for building intelligent systems that transform businesses 
                  and improve people's lives.
                </p>
                <p>
                  As co-founder of Agentic Engineering, I lead the development of AI automation 
                  solutions that have achieved up to <span className="text-cyan-400 font-semibold">99.5% cost reduction</span> for our clients.
                </p>
                <p>
                  My expertise spans from developing AI voicebots processing 500+ calls monthly 
                  to architecting cloud-native solutions that handle millions of records with 
                  enterprise-grade security and reliability.
                </p>
                <p>
                  Currently completing my Computer Systems Engineering degree at ITESO, 
                  graduating in December 2026.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <tech.icon
                      size={28}
                      className={`${tech.color} transition-transform group-hover:scale-110`}
                    />
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
