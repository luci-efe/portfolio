import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';
// MagneticButton imported for future use

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lramirez.ramos@iteso.mx',
    href: 'mailto:lramirez.ramos@iteso.mx',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+52 33 2241 2595',
    href: 'tel:+523322412595',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Guadalajara, México',
    href: '#',
    color: 'from-orange-500 to-amber-500',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fernando-ramos-654514262',
    color: 'hover:text-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/luci-efe',
    color: 'hover:text-white',
  },
];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi, 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p className="text-sm text-slate-500 mb-4">Social Links</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 ${social.color} hover:bg-white/10 transition-all`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500'
                  }`}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
