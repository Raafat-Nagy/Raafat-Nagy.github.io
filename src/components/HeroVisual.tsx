import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../utils/cn';

function DetectionBox({
  className,
  label,
  score,
}: {
  className?: string;
  label: string;
  score: string;
}) {
  return (
    <div className={cn('absolute hidden md:block', className)}>
      <div className="relative h-full w-full">
        {/* Corner brackets */}
        <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent/70" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-accent/70" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-accent/70" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent/70" />
        {/* Label */}
        <span className="absolute -top-6 left-0 flex w-max items-center gap-1.5 rounded-sm bg-accent/15 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-accent">
          {label}
          <span className="opacity-70">{score}</span>
        </span>
      </div>
    </div>
  );
}

/**
 * Decorative AI/CV backdrop: a dimmed technical grid, two "detections",
 * a node path and one slow scan line. Purely presentational.
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Technical grid, faded towards the edges */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_75%)]" />

      {/* Soft accent tint */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      {/* CV annotations */}
      <DetectionBox className="left-[7%] top-[30%] h-24 w-36" label="person" score="0.98" />
      <DetectionBox className="bottom-[26%] right-[8%] h-20 w-28" label="model.ai" score="0.94" />

      {/* Node path */}
      <svg
        className="absolute right-[16%] top-[22%] hidden h-40 w-40 text-accent/40 lg:block"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="M20 140 70 80l40 20 30-70" stroke="currentColor" strokeDasharray="3 5" />
        <circle cx="20" cy="140" r="3" fill="currentColor" />
        <circle cx="70" cy="80" r="3" fill="currentColor" />
        <circle cx="110" cy="100" r="3" fill="currentColor" />
        <circle cx="140" cy="30" r="3" fill="currentColor" />
      </svg>

      {/* Scan line */}
      {!reduceMotion && (
        <motion.div
          className="absolute inset-x-[15%] h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ top: '14%' }}
          animate={{ top: ['14%', '82%', '14%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}
