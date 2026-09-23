import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { OPEN_CV_EVENT } from '../utils/cv';
import { CvViewer } from './CvViewer';

/**
 * In-site CV viewer: opens the shared fullscreen viewer inside a dialog,
 * so visitors never leave the portfolio. The Drive file stays the source of
 * truth — replacing it on Drive updates the embed (and download) automatically.
 *
 * Opened by dispatching OPEN_CV_EVENT (see utils/cv) — no props or context.
 * Closes via the X button, the Escape key, or clicking the backdrop.
 */
export function CvModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_CV_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CV_EVENT, handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Curriculum Vitae"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <CvViewer onClose={() => setOpen(false)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
