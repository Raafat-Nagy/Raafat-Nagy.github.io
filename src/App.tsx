import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CvModal } from './components/CvModal';
import { Education } from './components/Education';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Technologies } from './components/Technologies';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#featured"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-on-accent"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Technologies />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CvModal />
    </MotionConfig>
  );
}
