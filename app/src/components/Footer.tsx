import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.span
              className="text-2xl font-bold text-gradient block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Fernando Ramos
            </motion.span>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/luci-efe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/fernando-ramos-654514262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:lramirez.ramos@iteso.mx"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-violet-500 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Made with love */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-slate-600 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Guadalajara, México
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
