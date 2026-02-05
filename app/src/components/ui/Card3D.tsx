import React, { useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  intensity = 10,
  glowColor = 'rgba(99, 102, 241, 0.3)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`relative ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor} 0%, transparent 50%)`,
          opacity: isHovered ? 0.6 : 0,
        }}
      />
      {children}
    </motion.div>
  );
};
