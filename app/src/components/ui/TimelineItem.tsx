import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="glass-card p-6 rounded-2xl inline-block max-w-md"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm font-medium text-cyan-400">{period}</span>
          <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
          <p className="text-violet-400 font-medium">{company}</p>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed">{description}</p>
        </motion.div>
      </div>

      {/* Center Node */}
      <div className="relative flex-shrink-0">
        <motion.div
          className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-violet-500/50"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1" />
    </motion.div>
  );
};
