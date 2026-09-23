import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

for (const [name, entry] of [['main','src/main.tsx'],['projects','src/projects-main.tsx'],['cv','src/cv-main.tsx']]) {
  await build({
    logLevel: 'error',
    configFile: false,
    define: { 'process.env.NODE_ENV': '"production"' },
    plugins: [react(), tailwindcss()],
    build: {
      write: true,
      minify: false,
      outDir: 'scripts/.harness',
      emptyOutDir: false,
      cssCodeSplit: false,
      lib: { entry: path.resolve(entry), formats: ['iife'], name: 'Harness'+name, fileName: () => `${name}.js` },
    },
  });
}
console.log('harness built');
