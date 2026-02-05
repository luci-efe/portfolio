import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatter?: (value: number) => string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  formatter,
}) => {
  const { count, countRef } = useCountUp(end, duration);

  const displayValue = formatter ? formatter(count) : count.toLocaleString();

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </div>
  );
};
