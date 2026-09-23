import { useEffect, useRef } from 'react';
import { cvDownloadUrl, cvEmbedUrl, site } from '../data/site';
import { DownloadIcon, ExternalLinkIcon, FileTextIcon, XMarkIcon } from './Icons';

interface CvViewerProps {
  /** Modal dismisses itself; the standalone /cv page returns to the homepage. */
  onClose: () => void;
}

/**
 * Full-screen CV viewer shared by the in-portfolio modal and the /cv page.
 * The Google Drive file stays the source of truth — replacing it updates
 * the embed and the download automatically.
 */
export function CvViewer({ onClose }: CvViewerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex h-dvh w-dvw flex-col overflow-hidden bg-surface">
      <header className="flex items-center gap-3 border-b border-line bg-raised/60 px-4 py-3 sm:px-5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent-strong dark:text-accent">
          <FileTextIcon className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">CV</p>
          <p className="truncate text-xs text-muted">{site.name} — AI Engineer</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={cvDownloadUrl}
            download
            aria-label="Download CV"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <DownloadIcon className="h-4 w-4" />
          </a>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CV in Google Drive"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close CV viewer"
            className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      </header>

      <iframe
        src={cvEmbedUrl}
        title={`${site.name} — Curriculum Vitae`}
        className="min-h-0 w-full flex-1 bg-raised"
        allow="autoplay"
      />
    </div>
  );
}
