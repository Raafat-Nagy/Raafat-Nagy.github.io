import type { Variants } from 'framer-motion';

/** Shared easing curve for a smooth, professional feel. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Staggered container for entrance animations. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Single item inside a `staggerContainer`. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/** Section-level reveal while scrolling. */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export { EASE };
