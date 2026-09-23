import { useCallback, type MouseEvent } from 'react';
import { isAnchorHref, scrollToAnchor } from '../utils/links';

interface UseNavClickOptions {
  /** Called right after a click is handled — used to close the mobile menu. */
  onNavigate?: () => void;
  /**
   * Delay (ms) before scrolling, giving a closing mobile menu time to collapse
   * so the scroll target's final position is measured correctly.
   */
  scrollDelay?: number;
}

/**
 * Click handler for navigation entries.
 *
 * In-page anchors are scrolled programmatically instead of relying on the
 * browser's default hash jump: the default jump is measured before a closing
 * mobile menu has collapsed (and competes with it), which left the page
 * sitting still and the menu stuck open. The hash is still written to the URL
 * so the address bar and history stay correct.
 *
 * Cross-page links ('/', '/projects/', '/#about') keep their normal browser
 * navigation — only the menu is closed.
 */
export function useNavClick({ onNavigate, scrollDelay = 0 }: UseNavClickOptions = {}) {
  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      // Let the browser handle modified clicks (new tab/window) untouched.
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (!isAnchorHref(href)) {
        // Cross-page navigation: close the menu, let the browser navigate.
        onNavigate?.();
        return;
      }

      event.preventDefault();
      onNavigate?.();

      const scroll = () => {
        scrollToAnchor(href);
        // Keep the URL in sync without triggering a second (jumpy) hash scroll.
        // Preserve the current path (and query) so '/projects/#projects' never
        // collapses to a bare '#projects' against the wrong page.
        const { pathname, search } = window.location;
        const url = href === '#top' ? `${pathname}${search}` : `${pathname}${search}${href}`;
        window.history.replaceState(null, '', url);
      };

      if (scrollDelay > 0) window.setTimeout(scroll, scrollDelay);
      else scroll();
    },
    [onNavigate, scrollDelay],
  );
}
