import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
  variant?: 'cube' | 'sphere' | 'pyramid' | 'ring';
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  variant = 'cube',
  size = 80,
  color = 'rgba(99, 102, 241, 0.3)',
  className = '',
  delay = 0,
  duration = 6,
}) => {
  const shapes = {
    cube: (
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-white/20"
            style={{
              background: color,
              transform: [
                'rotateY(0deg) translateZ(' + size / 2 + 'px)',
                'rotateY(180deg) translateZ(' + size / 2 + 'px)',
                'rotateY(90deg) translateZ(' + size / 2 + 'px)',
                'rotateY(-90deg) translateZ(' + size / 2 + 'px)',
                'rotateX(90deg) translateZ(' + size / 2 + 'px)',
                'rotateX(-90deg) translateZ(' + size / 2 + 'px)',
              ][i],
            }}
          />
        ))}
      </div>
    ),
    sphere: (
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
          boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.3), 0 0 30px ${color}`,
        }}
      />
    ),
    pyramid: (
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute border-l border-r border-b border-white/20"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size * 0.866}px solid ${color}`,
              transformOrigin: 'bottom',
              transform: `rotateY(${i * 90}deg) rotateX(30deg) translateZ(${size / 4}px)`,
            }}
          />
        ))}
      </div>
    ),
    ring: (
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          border: `3px solid ${color}`,
          boxShadow: `0 0 20px ${color}, inset 0 0 20px ${color}`,
        }}
      />
    ),
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [-20, 20, -20],
        rotateX: [0, 10, 0],
        rotateY: [0, 15, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: duration * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {shapes[variant]}
      </motion.div>
    </motion.div>
  );
};
