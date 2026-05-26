import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const SkillBadge: React.FC<BadgeProps> = ({ children, className = '', icon }) => {
  return (
    <span className={`badge-tech inline-flex items-center gap-1.5 ${className}`}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};
