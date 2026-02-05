import React from 'react';
import { motion } from 'framer-motion';

type BadgeVariant = 'tech' | 'enterprise' | 'startup' | 'academic' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: React.ReactNode;
}

export const SkillBadge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  icon,
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    tech: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    enterprise: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    startup: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    academic: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    default: 'bg-white/5 text-slate-400 border-white/10',
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="text-xs">{icon}</span>}
      {children}
    </motion.span>
  );
};
