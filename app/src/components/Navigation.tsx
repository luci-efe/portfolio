import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3' : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FR
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://github.com/luci-efe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/fernando-ramos-654514262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:lramirez.ramos@iteso.mx"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-lg font-medium text-slate-300 hover:text-white transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/luci-efe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/fernando-ramos-654514262"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:lramirez.ramos@iteso.mx"
                    className="text-slate-400 hover:text-white"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
