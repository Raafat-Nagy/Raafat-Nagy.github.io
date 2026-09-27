import { motion } from 'framer-motion';
import { technologyGroups } from '../data/technologies';
import { MotionSection } from './MotionSection';
import { SectionHeading } from './SectionHeading';

export function Technologies() {
  return (
    <MotionSection id="technologies" labelledBy="technologies-heading">
      <SectionHeading
        id="technologies-heading"
        eyebrow="Toolbox"
        title="Technologies"
        description="The tools and frameworks I use to design, build and ship AI systems — grouped by where they sit in the stack."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technologyGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
            className="rounded-xl border border-line bg-raised p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
