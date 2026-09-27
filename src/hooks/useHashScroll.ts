import { useEffect } from 'react';
import { scrollToAnchor } from '../utils/links';

/**
 * Scrolls to `location.hash` once the target section has actually rendered.
 *
 * Arriving from another page (e.g. /projects/ -> /#about) the browser tries to
 * jump to the hash while the document is still an empty `#root`: the section
 * does not exist yet, the jump silently fails, and the visitor lands at the top
 * of the homepage — needing a second click to finally reach the section.
 *
 * This retries on each animation frame until the element exists (or the budget
 * runs out), so a single click always lands on the right section.
 */
export function useHashScroll(maxWaitMs = 2000) {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === '#top') return;

    let frame = 0;
    const deadline = performance.now() + maxWaitMs;

    const attempt = () => {
      // 'auto' on arrival: land directly on the section, no long smooth scroll
      // from the top of a page the visitor never intended to see.
      if (scrollToAnchor(hash, 'auto')) return;
      if (performance.now() < deadline) frame = requestAnimationFrame(attempt);
    };

    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [maxWaitMs]);
}
