import { motion } from 'framer-motion';
import { site } from '../data/site';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-14 sm:py-20">
      {/* subtle technical backdrop */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-2xl px-4 text-center sm:px-6"
      >
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
          {'// '}Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Let&apos;s build something{' '}
          <span className="text-accent-strong dark:text-accent">intelligent</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          Want to talk about AI systems, computer vision, or a project idea? The fastest way to
          reach me is email.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent-strong px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent dark:text-on-accent"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
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
        </div>
      </motion.div>
    </section>
  );
}
