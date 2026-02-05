import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpReturn {
  count: number;
  countRef: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
  hasAnimated: boolean;
}

export const useCountUp = (
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
): UseCountUpReturn => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback((startTime: number, endValue: number, durationMs: number) => {
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame((time) => step(time));
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };

    rafRef.current = requestAnimationFrame((time) => step(time));
  }, []);

  useEffect(() => {
    if (!startOnView) {
      animate(performance.now(), end, duration);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          animate(performance.now(), end, duration);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, startOnView, hasAnimated, animate]);

  return { count, countRef, isInView, hasAnimated };
};
