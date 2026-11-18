import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { getProjectCounts, getProjectsByFilter } from '../data/projects';
import type { ProjectFilter } from '../types/project';
import { MotionSection } from './MotionSection';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import { SearchIcon, XMarkIcon } from './Icons';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [query, setQuery] = useState('');
  const counts = useMemo(() => getProjectCounts(query), [query]);
  const visibleProjects = useMemo(
    () => getProjectsByFilter(filter, query),
    [filter, query],
  );

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

      <div className="flex flex-col gap-4">
        <div className="relative max-w-md">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setQuery('');
            }}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="h-10 w-full rounded-full border border-line bg-background pl-10 pr-10 text-sm text-foreground placeholder:text-muted focus:border-accent/60 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:text-foreground"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <ProjectFilters active={filter} counts={counts} onChange={setFilter} />
      </div>

      {visibleProjects.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-3 text-sm text-muted">
          <p>No projects match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilter('All');
            }}
            className="rounded-full border border-line px-4 py-1.5 text-foreground hover:border-foreground/30"
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </MotionSection>
  );
}
