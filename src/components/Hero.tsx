import { motion } from 'framer-motion';
import { fadeUpItem, staggerContainer } from '../animations/variants';
import { site } from '../data/site';
import { openCvModal } from '../utils/cv';
import { projectsPageHref } from '../utils/links';
import { FileTextIcon, GitHubIcon, LinkedInIcon } from './Icons';
import { HeroVisual } from './HeroVisual';

const DOMAIN_STATS = [
  ['Computer Vision', '09'],
  ['NLP / RAG', '01'],
  ['Deep Learning', '05'],
  ['Machine Learning', '03'],
  ['Time Series', '01'],
] as const;

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <HeroVisual />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-44"
      >
        <motion.p
          variants={fadeUpItem}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Building practical AI systems
        </motion.p>

        <motion.h1
          variants={fadeUpItem}
          className="mt-7 text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl"
        >
          Raafat Nagy
        </motion.h1>

        <motion.p
          variants={fadeUpItem}
          className="mt-4 font-mono text-sm font-medium tracking-[0.3em] text-accent sm:text-base"
        >
          AI ENGINEER
        </motion.p>

        <motion.p
          variants={fadeUpItem}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I build practical AI systems across{' '}
          <span className="text-foreground">Computer Vision</span>,{' '}
          <span className="text-foreground">NLP</span>, and{' '}
          <span className="text-foreground">LLM applications</span> — from model development to
          end-to-end deployment.
        </motion.p>

        <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={projectsPageHref}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent-strong px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent dark:text-on-accent"
          >
            View Projects
          </a>
          <button
            type="button"
            onClick={openCvModal}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface/70 px-5 text-sm font-semibold text-foreground backdrop-blur transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <FileTextIcon className="h-4 w-4" />
            View CV
          </button>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface/70 px-5 text-sm font-semibold text-foreground backdrop-blur transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface/70 px-5 text-sm font-semibold text-foreground backdrop-blur transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Domain summary strip */}
        <motion.ul
          variants={fadeUpItem}
          aria-label="Projects per domain"
          className="mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          {DOMAIN_STATS.map(([label, count]) => (
            <li key={label} className="flex items-center gap-2">
              <span className="text-accent">{count}</span>
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
