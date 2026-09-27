import { MotionConfig } from 'framer-motion';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

/**
 * Dedicated /projects page (static second entry — no router needed).
 * Reuses the exact same Projects section (filters, grid, cards, motion)
 * that used to live on the homepage.
 */
export default function ProjectsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-on-accent"
      >
        Skip to projects
      </a>
      <Navbar />
      <main id="top" className="pt-16">
        <Projects />
      </main>
      <Footer />
      <CvModal />
    </MotionConfig>
  );
}
