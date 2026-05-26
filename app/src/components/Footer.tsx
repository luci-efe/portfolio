import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { EmailPicker } from '@/components/ui/EmailPicker';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.span
              className="font-serif-display text-2xl ink block mb-1"
              whileHover={{ scale: 1.02 }}
            >
              Fernando Ramos
            </motion.span>
            <p className="mono-meta">
              © {new Date().getFullYear()} · built solo · view source on github
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/luci-efe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border hairline flex items-center justify-center ink-dim hover:text-amber hover:border-amber-500/50 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/fernando-ramos-654514262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border hairline flex items-center justify-center ink-dim hover:text-amber hover:border-amber-500/50 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <EmailPicker placement="top">
              <motion.div
                className="w-10 h-10 rounded-md border hairline flex items-center justify-center ink-dim hover:text-amber hover:border-amber-500/50 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.div>
            </EmailPicker>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="font-mono-ui px-4 py-2 rounded-md border hairline ink-dim hover:text-amber hover:border-amber-500/50 flex items-center justify-center text-xs uppercase tracking-[0.18em] transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowUp size={14} className="mr-2" />
            top
          </motion.button>
        </div>

      </div>
    </footer>
  );
};
