import { useState, useEffect, useRef, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

interface UseMousePositionReturn {
  mousePosition: MousePosition;
  elementRef: React.RefObject<HTMLElement | null>;
}

export const useMousePosition = (
  trackInElement: boolean = false
): UseMousePositionReturn => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  
  const elementRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const now = performance.now();
    
    // Throttle to ~60fps
    if (now - lastUpdateRef.current < 16) return;
    lastUpdateRef.current = now;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (trackInElement && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const normalizedX = (x / rect.width - 0.5) * 2;
        const normalizedY = (y / rect.height - 0.5) * 2;

        setMousePosition({
          x,
          y,
          normalizedX,
          normalizedY,
        });
      } else {
        const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
        const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

        setMousePosition({
          x: event.clientX,
          y: event.clientY,
          normalizedX,
          normalizedY,
        });
      }
    });
  }, [trackInElement]);

  useEffect(() => {
    const element = trackInElement ? elementRef.current : window;
    
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as EventListener);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [trackInElement, handleMouseMove]);

  return { mousePosition, elementRef };
};
