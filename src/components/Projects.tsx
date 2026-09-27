import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { getProjectCounts, getProjectsByFilter } from '../data/projects';
import type { ProjectFilter } from '../types/project';
import { MotionSection } from './MotionSection';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const counts = useMemo(getProjectCounts, []);
  const visibleProjects = useMemo(() => getProjectsByFilter(filter), [filter]);

  return (
    <MotionSection
      id="projects"
      labelledBy="projects-heading"
      className="border-y border-line bg-surface"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="Archive"
        title="All projects"
        description="The complete project explorer — filter by domain. Every project links back to its public repository; demos and live apps are included where they exist."
      />

      <ProjectFilters active={filter} counts={counts} onChange={setFilter} />

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </MotionSection>
  );
}
