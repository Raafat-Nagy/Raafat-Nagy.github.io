import { motion } from 'framer-motion';
import { education } from '../data/education';
import { MotionSection } from './MotionSection';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <MotionSection id="education" labelledBy="education-heading">
      <SectionHeading id="education-heading" eyebrow="Education" title="Education & training" />

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((entry, index) => (
          <motion.article
            key={entry.institution}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            className="rounded-xl border border-line bg-raised p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              {entry.period}
            </p>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
              {entry.institution}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.program}</p>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}
