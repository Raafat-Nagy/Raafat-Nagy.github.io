import { motion } from 'framer-motion';
import { useState } from 'react';
import { featuredProjects } from '../data/projects';
import type { Project } from '../types/project';
import { cn } from '../utils/cn';
import { projectsPageHref } from '../utils/links';
import { ArrowRightIcon } from './Icons';
import { ImagelessShowcase } from './ImagelessProject';
import { ProjectLinks } from './ProjectLinks';
import { ProjectThumb } from './ProjectThumb';
import { SectionHeading } from './SectionHeading';

export function FeaturedProjects() {
  return (
    <section id="featured" aria-labelledby="featured-heading" className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="featured-heading"
          eyebrow="Selected work"
          title="Featured projects"
          description="End-to-end AI systems — from model to deployed application — that best represent how I design and ship."
        />

        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Link to the full archive on the dedicated /projects page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <a
            href={projectsPageHref}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface/70 px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            View All Projects
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectRow({ project, index }: { project: Project; index: number }) {
  const [thumbFailed, setThumbFailed] = useState(false);
  const reversed = index % 2 === 1;
  const hasMedia = Boolean(project.image) || Boolean(project.videoId);
  const showThumb = hasMedia && !thumbFailed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12"
    >
      {/* Media: local screenshot or YouTube thumbnail, or the image-less showcase as the honest fallback */}
      {showThumb ? (
        <a
          href={project.links[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — open ${project.links[0]?.type === 'demo' ? 'demo' : 'repository'}`}
          className={cn(
            'block overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-accent/50',
            reversed && 'sm:order-2',
          )}
        >
          <ProjectThumb
            title={project.title}
            localImage={project.image}
            videoId={project.videoId}
            maxres={project.thumbMaxres}
            fit="contain"
            eager={index < 2}
            onLoadError={() => setThumbFailed(true)}
            className="aspect-[16/10]"
          />
        </a>
      ) : (
        <ImagelessShowcase
          category={project.category}
          className={cn('shadow-2xl shadow-black/10', reversed && 'sm:order-2')}
        />
      )}

      {/* Content */}
      <div className={cn(reversed && 'sm:order-1')}>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {String(index + 1).padStart(2, '0')} — {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ProjectLinks links={project.links} className="mt-7" />
      </div>
    </motion.article>
  );
}
