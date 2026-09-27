import { CvViewer } from './components/CvViewer';

/**
 * Standalone /cv page (static entry — no router, not linked from the navbar).
 * Renders the same fullscreen viewer as the in-portfolio modal. Close and
 * Escape return to the portfolio homepage.
 */
export default function CvPage() {
  const homeHref = import.meta.env.BASE_URL || '/';

  return <CvViewer onClose={() => window.location.assign(homeHref)} />;
}
