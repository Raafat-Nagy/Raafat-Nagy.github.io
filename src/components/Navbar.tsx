import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/site';
import { useHashScroll } from '../hooks/useHashScroll';
import { useNavClick } from '../hooks/useNavClick';
import { cn } from '../utils/cn';
import { openCvModal } from '../utils/cv';
import { homeHref, navHref } from '../utils/links';
import { FileTextIcon, GitHubIcon } from './Icons';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = useNavClick();

  // Arriving at '/#about' from another page: scroll once the section exists.
  useHashScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href={homeHref('#top')}
          onClick={(event) => handleNavClick(event, homeHref('#top'))}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
            R
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Raafat Nagy<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={navHref(link.href)}
                  onClick={(event) => handleNavClick(event, navHref(link.href))}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground sm:grid"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={openCvModal}
            aria-label="View CV"
            className="hidden h-9 items-center gap-1.5 rounded-md border border-line bg-surface px-3.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground sm:inline-flex"
          >
            <FileTextIcon className="h-4 w-4" />
            CV
          </button>
          <ThemeToggle />

          {/* Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface text-foreground md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform duration-200',
                  menuOpen && 'top-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-0.5 w-4 bg-current transition-transform duration-200',
                  menuOpen && 'bottom-1.5 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
