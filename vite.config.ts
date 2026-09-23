import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Base path for GitHub Pages.
 *
 * This repository is deployed as a GitHub **User Pages** site
 * (https://raafat-nagy.github.io/), so the base is the root `/`.
 *
 * A fork deployed as a *project* site can override it without touching code:
 *
 *   BASE_PATH=/my-repo/ npm run build
 *
 * The GitHub Actions workflow in .github/workflows/deploy.yml passes the base
 * path reported by actions/configure-pages, which is "" for user sites and
 * "/<repo>" for project sites — both are normalised below.
 */
function normalizeBase(value: string | undefined): string {
  if (!value || value === '/' || value === '.') return '/';
  const trimmed = value.replace(/^\/*/, '/').replace(/\/*$/, '/');
  return trimmed;
}

const base = normalizeBase(process.env.BASE_PATH);

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Static multi-page build (no router needed):
      //   index.html           -> /            (homepage)
      //   projects/index.html  -> /projects/   (all-projects page)
      //   cv/index.html        -> /cv/         (standalone CV page)
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects/index.html', import.meta.url)),
        cv: fileURLToPath(new URL('./cv/index.html', import.meta.url)),
      },
    },
  },
});
