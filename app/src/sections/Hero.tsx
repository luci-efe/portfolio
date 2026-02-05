import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown, Download, FolderGit2 } from 'lucide-react';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { FloatingShape } from '@/components/ui/FloatingShape';
import { MagneticButton } from '@/components/ui/MagneticButton';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh"
    >
      {/* Floating Shapes */}
      <FloatingShape
        variant="cube"
        size={100}
        color="rgba(99, 102, 241, 0.2)"
        className="top-[15%] left-[10%]"
        delay={0}
      />
      <FloatingShape
        variant="sphere"
        size={60}
        color="rgba(6, 182, 212, 0.25)"
        className="top-[25%] right-[15%]"
        delay={2}
        duration={7}
      />
      <FloatingShape
        variant="ring"
        size={80}
        color="rgba(249, 115, 22, 0.2)"
        className="bottom-[20%] left-[20%]"
        delay={4}
        duration={8}
      />
      <FloatingShape
        variant="pyramid"
        size={70}
        color="rgba(99, 102, 241, 0.15)"
        className="bottom-[30%] right-[10%]"
        delay={1}
        duration={6}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Location Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MapPin size={16} className="text-cyan-400" />
          <span className="text-sm text-slate-300">Guadalajara, México</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gradient">Fernando Ramos</span>
        </motion.h1>

        {/* Subtitle with Typewriter */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-4 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TypewriterText
            text="Software Developer & AI Engineer"
            speed={60}
            delay={800}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building intelligent systems that transform businesses. 
          Specialized in AI automation, voice agents, and scalable cloud architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MagneticButton variant="primary" onClick={scrollToProjects}>
            <FolderGit2 size={18} className="inline mr-2" />
            View Projects
          </MagneticButton>
          <a
            href="/Fernando_Ramos_CV.pdf"
            download="Fernando_Ramos_CV.pdf"
            className="inline-flex"
          >
            <MagneticButton variant="secondary">
              <Download size={18} className="inline mr-2" />
              Download CV
            </MagneticButton>
          </a>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: '2.5+', label: 'Years Experience' },
            { value: '8+', label: 'Projects' },
            { value: '300K+', label: 'Records Processed' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-slate-500 cursor-pointer"
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
