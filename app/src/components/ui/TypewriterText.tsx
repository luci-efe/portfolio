import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 80,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
}) => {
  const { displayText, isComplete } = useTypewriter(text, speed, delay);

  React.useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <motion.span
          className="typewriter-cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
};
