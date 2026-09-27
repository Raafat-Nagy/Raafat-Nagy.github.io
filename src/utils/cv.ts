/**
 * Opens the in-site CV viewer from anywhere (Navbar, MobileMenu, Hero …)
 * without prop drilling or extra state — the CvModal listens for this event.
 */
export const OPEN_CV_EVENT = 'portfolio:open-cv';

export function openCvModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_CV_EVENT));
  }
}
