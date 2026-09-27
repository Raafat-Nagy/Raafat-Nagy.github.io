import type { ProjectCategory } from '../types/project';
import { cn } from '../utils/cn';

/*
 * Image-less project visuals.
 *
 * Projects without a YouTube demo get NO screenshot and NO generic placeholder
 * artwork. Instead, a category-branded band made of real, honest content:
 * a minimal category icon, the category label, and a small technical motif
 * that differs per category. Variation comes from the data (category, title,
 * technologies) — never from invented imagery.
 */

// ---------------------------------------------------------------------------
// Category icon (24x24 stroke icon)
// ---------------------------------------------------------------------------

interface CategoryVisualProps {
  category: ProjectCategory;
  className?: string;
}

function CategoryGlyph({ category }: { category: ProjectCategory }) {
  switch (category) {
    case 'Computer Vision':
      // Eye
      return (
        <>
          <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      );
    case 'NLP / RAG':
      // Chat bubble with text lines
      return (
        <>
          <path d="M4 5h16v10.5H9.5L4 19.5V5Z" />
          <path d="M8 9h8M8 12h5" />
        </>
      );
    case 'Deep Learning':
      // Stacked layers
      return (
        <>
          <path d="M12 3 20 7.5 12 12 4 7.5 12 3Z" />
          <path d="m4 12 8 4.5L20 12" />
          <path d="m4 16.5 8 4.5 8-4.5" />
        </>
      );
    case 'Machine Learning':
      // Connected nodes
      return (
        <>
          <circle cx="5" cy="5.5" r="2" />
          <circle cx="19" cy="7" r="2" />
          <circle cx="8" cy="18.5" r="2" />
          <circle cx="19.5" cy="17.5" r="2" />
          <path d="m6.8 6.2 10.5.5M6.2 7.2l1.2 9.5M18.9 8.9l.3 6.7M10 17.9l7.6-.3" />
        </>
      );
    case 'Time Series':
      // Axes + zigzag series
      return (
        <>
          <path d="M4 4v15.5H20" />
          <path d="m7 14 3.5-5 3 3 4.5-6.5" />
        </>
      );
  }
}

export function CategoryIcon({ category, className }: CategoryVisualProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <CategoryGlyph category={category} />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Category motif — a tiny decorative technical mark, distinct per category
// ---------------------------------------------------------------------------

function MotifGlyph({ category }: { category: ProjectCategory }) {
  switch (category) {
    case 'Computer Vision':
      // Bounding box with center point
      return (
        <>
          <rect x="14" y="2.5" width="20" height="15" rx="2" />
          <circle cx="24" cy="10" r="2" />
        </>
      );
    case 'NLP / RAG':
      // Retrieval graph: one query node fanning into documents
      return (
        <>
          <circle cx="6" cy="10" r="2.4" />
          <circle cx="40" cy="4" r="2.4" />
          <circle cx="40" cy="16" r="2.4" />
          <circle cx="26" cy="10" r="1.4" />
          <path d="m8.2 9 15.6.6M8.4 10.6 37.5 15M8.4 9.4 37.6 4.8" />
        </>
      );
    case 'Deep Learning':
      // Chevrons (depth)
      return (
        <>
          <path d="m6 3.5 18 5.5L42 3.5" />
          <path d="m6 10 18 5.5L42 10" />
          <path d="m6 16.5 18 5.5 18-5.5" />
        </>
      );
    case 'Machine Learning':
      // Scatter of sample points
      return (
        <>
          <circle cx="6" cy="15" r="1.5" />
          <circle cx="14" cy="7.5" r="1.5" />
          <circle cx="22" cy="13.5" r="1.5" />
          <circle cx="30" cy="5.5" r="1.5" />
          <circle cx="38" cy="11.5" r="1.5" />
          <circle cx="44" cy="16.5" r="1.5" />
        </>
      );
    case 'Time Series':
      // Single series line
      return <path d="M4 16 12 8l7 4.5L27 4l8 6 9-4.5" />;
  }
}

function CategoryMotif({ category, className }: CategoryVisualProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <MotifGlyph category={category} />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Image-less card header — replaces the media slot of a project card
// ---------------------------------------------------------------------------

export function ImagelessCardHeader({ category }: { category: ProjectCategory }) {
  return (
    <div className="relative flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-surface px-5 py-4">
      {/* Faint technical grid, fading out to the right */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_right,black_20%,transparent_75%)]"
      />
      <div className="relative flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-raised text-accent">
          <CategoryIcon category={category} className="h-[18px] w-[18px]" />
        </span>
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          {category}
        </p>
      </div>
      <CategoryMotif category={category} className="relative h-5 w-12 text-accent/45" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Image-less showcase — media-slot panel for a featured project without video
// ---------------------------------------------------------------------------

export function ImagelessShowcase({
  category,
  className,
}: {
  category: ProjectCategory;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-line bg-surface',
        className,
      )}
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"
      />
      <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-4">
        <span className="grid h-16 w-16 place-items-center rounded-xl border border-line bg-raised text-accent">
          <CategoryIcon category={category} className="h-8 w-8" />
        </span>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-accent">
          {category}
        </p>
        <CategoryMotif category={category} className="h-6 w-14 text-accent/45" />
      </div>
    </div>
  );
}
