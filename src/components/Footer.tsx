import { site } from '../data/site';
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-muted sm:text-left">
          <span className="font-semibold text-foreground">Raafat Nagy</span> — AI Engineer
          <span className="mx-2 text-line" aria-hidden="true">
            ·
          </span>
          © {year}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Send an email"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
