'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { magneticEffect } from '@/lib/utils/animations';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticButton = ({
  children,
  className = '',
  strength = 0.5,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const cleanup = magneticEffect(button, strength);
    return cleanup;
  }, [strength]);

  return (
    <div ref={buttonRef} className={className}>
      {children}
    </div>
  );
};
