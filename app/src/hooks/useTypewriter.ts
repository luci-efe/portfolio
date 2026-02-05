import { useState, useEffect } from 'react';

interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
  isTyping: boolean;
}

export const useTypewriter = (
  text: string,
  speed: number = 80,
  delay: number = 0
): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;
    
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, hasStarted]);

  return { displayText, isComplete, isTyping };
};
