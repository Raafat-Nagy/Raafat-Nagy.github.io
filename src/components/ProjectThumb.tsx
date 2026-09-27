import { useState } from 'react';
import { cn } from '../utils/cn';
import { publicAsset } from '../utils/asset';
import { youtubeThumbnail, type ThumbnailVariant } from '../utils/youtube';

/**
 * YouTube thumbnail cascade: try the best available official variant first,
 * then degrade. maxresdefault is only included when the parent confirms the
 * video actually has an HD branded thumbnail (Project.thumbMaxres). If every
 * variant fails, the parent is notified so the card can switch to its
 * image-less design — a broken <img> is never left on screen.
 */
const DEFAULT_CHAIN: ThumbnailVariant[] = ['hqdefault', 'mqdefault'];
const MAXRES_CHAIN: ThumbnailVariant[] = ['maxresdefault', ...DEFAULT_CHAIN];

interface ProjectThumbProps {
  title: string;
  /** Local screenshot path under public/ — takes priority over YouTube. */
  localImage?: string;
  videoId?: string;
  /** Video is verified to have a high-res branded maxresdefault thumbnail. */
  maxres?: boolean;
  /**
   * cover (default): fill the box, may crop — used in the compact grid cards.
   * contain: show the full image within the box, letterboxed on the dark
   * thumb background — used by Featured so branded artwork is never cropped.
   */
  fit?: 'cover' | 'contain';
  className?: string;
  /** Load eagerly for above-the-fold images (featured projects). */
  eager?: boolean;
  /** Called after the image (or every YouTube variant) failed to load. */
  onLoadError?: () => void;
}

/**
 * Project media, resolved with an honest priority:
 *   1. local real screenshot (provided by the project owner)
 *   2. official YouTube demo thumbnail (cache-busted, variant cascade)
 *   3. nothing → parent switches the card to its image-less design
 */
export function ProjectThumb({
  title,
  localImage,
  videoId,
  maxres = false,
  fit = 'cover',
  className,
  eager = false,
  onLoadError,
}: ProjectThumbProps) {
  const [variantIndex, setVariantIndex] = useState(0);
  const chain = maxres ? MAXRES_CHAIN : DEFAULT_CHAIN;

  const src = localImage
    ? publicAsset(localImage)
    : videoId
      ? youtubeThumbnail(videoId, chain[variantIndex])
      : undefined;

  const handleError = () => {
    if (localImage || !videoId || variantIndex >= chain.length - 1) {
      onLoadError?.();
    } else {
      setVariantIndex((index) => index + 1);
    }
  };

  if (!src) return null;

  return (
    <div className={cn('group/thumb relative overflow-hidden bg-[#0b0e13]', className)}>
      <img
        // Remount per variant so a stale error state can never stick to the <img>
        key={localImage ?? `${videoId}-${variantIndex}`}
        src={src}
        alt={localImage ? `${title} — screenshot` : `${title} — demo preview`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
        className={cn(
          'h-full w-full transition-transform duration-500 ease-out',
          fit === 'cover'
            ? 'object-cover group-hover/thumb:scale-[1.03]'
            : 'object-contain object-center',
        )}
      />
      {/* readability gradient + play hint for videos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
      />
      {videoId && (
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/55 text-white/90 backdrop-blur-sm transition-colors duration-300 group-hover/thumb:border-accent group-hover/thumb:text-accent"
        >
          <PlayGlyph className="ml-0.5 h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l11.1-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.03 1.03 0 0 0 8 5.14Z" />
    </svg>
  );
}
