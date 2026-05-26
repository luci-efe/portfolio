import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRIMARY_EMAIL = 'fernando@agenticengineering.agency';
const SECONDARY_EMAIL = 'lramirez.ramos@iteso.mx';

interface EmailPickerProps {
  children: React.ReactNode;
  placement?: 'bottom' | 'top';
  className?: string;
}

export const EmailPicker: React.FC<EmailPickerProps> = ({
  children,
  placement = 'bottom',
  className,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popoverPositionClass =
    placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2';

  return (
    <div className={`relative inline-flex ${className ?? ''}`} ref={ref}>
      <div
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute right-0 z-50 ${popoverPositionClass} glass-card rounded-xl p-2 min-w-[280px] shadow-xl`}
            initial={{ opacity: 0, y: placement === 'top' ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: placement === 'top' ? 8 : -8 }}
            transition={{ duration: 0.15 }}
          >
            <p className="text-xs text-slate-500 px-3 py-1 mb-1">Choose email</p>
            <a
              href={`mailto:${PRIMARY_EMAIL}`}
              className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-white break-all">{PRIMARY_EMAIL}</span>
              <span className="text-xs text-amber-soft">Primary</span>
            </a>
            <a
              href={`mailto:${SECONDARY_EMAIL}`}
              className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-medium text-white break-all">{SECONDARY_EMAIL}</span>
              <span className="text-xs text-slate-500">Secondary (ITESO)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
