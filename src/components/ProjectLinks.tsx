import type { ProjectLink, ProjectLinkType } from '../types/project';
import { cn } from '../utils/cn';
import { ExternalLinkIcon, GitHubIcon, PlayIcon } from './Icons';

const LINK_LABELS: Record<ProjectLinkType, string> = {
  github: 'GitHub',
  demo: 'Demo',
  live: 'Live App',
};

function LinkGlyph({ type, className }: { type: ProjectLinkType; className?: string }) {
  switch (type) {
    case 'github':
      return <GitHubIcon className={className} />;
    case 'demo':
      return <PlayIcon className={className} />;
    case 'live':
      return <ExternalLinkIcon className={className} />;
  }
}

interface ProjectLinksProps {
  links: ProjectLink[];
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * GitHub / Demo / Live buttons for a project, rendered from its link list.
 * No fake links — only what exists in the data layer is rendered.
 */
export function ProjectLinks({ links, size = 'md', className }: ProjectLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((link) => (
        <a
          key={`${link.type}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md border font-medium transition-colors duration-200',
            size === 'sm' ? 'h-8 px-3 text-xs' : 'h-9 px-3.5 text-sm',
            link.type === 'github'
              ? 'border-line bg-raised text-foreground hover:border-foreground/40'
              : 'border-accent/45 text-accent-strong hover:bg-accent-soft dark:text-accent',
          )}
        >
          <LinkGlyph type={link.type} className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
          {LINK_LABELS[link.type]}
        </a>
      ))}
    </div>
  );
}
