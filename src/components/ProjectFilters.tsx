import { PROJECT_FILTERS } from '../data/projects';
import type { ProjectFilter } from '../types/project';
import { cn } from '../utils/cn';

interface ProjectFiltersProps {
  active: ProjectFilter;
  counts: Record<ProjectFilter, number>;
  onChange: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ active, counts, onChange }: ProjectFiltersProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {PROJECT_FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              'inline-flex h-9 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors duration-200',
              isActive
                ? 'border-accent/60 bg-accent-soft text-accent-strong dark:text-accent'
                : 'border-line text-muted hover:border-foreground/30 hover:text-foreground',
            )}
          >
            {filter}
            <span className={cn('font-mono text-[11px]', isActive ? 'opacity-80' : 'opacity-60')}>
              {counts[filter]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
