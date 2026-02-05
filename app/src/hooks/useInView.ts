import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T | null>;
  isInView: boolean;
  hasBeenInView: boolean;
}

export const useInView = <T extends HTMLElement = HTMLElement>({
  threshold = 0.2,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseInViewOptions = {}): UseInViewReturn<T> => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView, hasBeenInView };
};
