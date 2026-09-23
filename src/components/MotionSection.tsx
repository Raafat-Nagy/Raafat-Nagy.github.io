import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface MotionSectionProps {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * Section wrapper: consistent vertical rhythm + a subtle scroll reveal.
 * Heavy layout styling goes on `innerClassName` (the width container).
 */
export function MotionSection({
  id,
  labelledBy,
  children,
  className,
  innerClassName,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-14 sm:py-20', className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn('mx-auto max-w-6xl px-4 sm:px-6', innerClassName)}>{children}</div>
    </motion.section>
  );
}
