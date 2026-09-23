const BASE_URL = import.meta.env.BASE_URL || '/';

/** Sentinel href of the 'Home' nav entry (top of the homepage). */
export const HOME_ANCHOR = '#top';
/** Sentinel href of the 'Projects' nav entry (dedicated page, not a section). */
export const PROJECTS_ANCHOR = '#projects';

/** True when running on the standalone /projects page (multi-page build). */
export const isProjectsPage =
  typeof window !== 'undefined' &&
  /\/projects(\/)?(index\.html)?$/.test(window.location.pathname);

/** URL of the homepage root (base-aware, GitHub Pages safe). */
export const homePageHref = BASE_URL;

/** URL of the dedicated All Projects page (base-aware, GitHub Pages safe). */
export const projectsPageHref = `${BASE_URL}projects/`;

/**
 * Resolve a homepage anchor (#about …) for the current page:
 * stays a local anchor on the homepage, becomes '/#about' (back to the
 * homepage, then to the section) when rendered on the projects page.
 */
export function homeHref(anchor: string): string {
  if (!isProjectsPage) return anchor;
  // 'Home' has no section to scroll to — link to the bare homepage URL.
  return anchor === HOME_ANCHOR ? homePageHref : `${homePageHref}${anchor}`;
}

/**
 * Navbar/mobile resolver: the 'Projects' nav entry (#projects sentinel)
 * goes to the dedicated page from anywhere; every other entry is a
 * homepage anchor.
 *
 * Exception: already ON the projects page, 'Projects' stays an in-page anchor
 * so it scrolls to the section instead of reloading the current page.
 */
export function navHref(href: string): string {
  if (href === PROJECTS_ANCHOR) {
    return isProjectsPage ? PROJECTS_ANCHOR : projectsPageHref;
  }
  return homeHref(href);
}

/** True when an href is an in-page anchor ('#about') rather than a page URL. */
export function isAnchorHref(href: string): boolean {
  return href.startsWith('#');
}

/** Honour the visitor's reduced-motion preference for scripted scrolling. */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Scroll to the element matching a '#id' anchor.
 *
 * `#top` has no matching element on some pages, so it falls back to scrolling
 * to the very top. Returns false when the target does not exist yet (the page
 * is still mounting), so callers can retry.
 */
export function scrollToAnchor(anchor: string, requested: ScrollBehavior = 'smooth'): boolean {
  if (typeof document === 'undefined') return false;

  // CSS `scroll-behavior: auto` under prefers-reduced-motion does not apply to
  // scripted scrolls, so the preference is enforced here too.
  const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : requested;

  const id = anchor.replace(/^#/, '');
  const target = document.getElementById(id);

  if (!target) {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior });
      return true;
    }
    return false;
  }

  target.scrollIntoView({ behavior, block: 'start' });
  return true;
}
