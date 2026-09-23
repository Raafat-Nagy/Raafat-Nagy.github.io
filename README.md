# Raafat Nagy — AI Engineer Portfolio

Personal portfolio website of **Raafat Nagy**, an AI Engineer building practical,
end-to-end AI systems — from model development to deployed applications.

The site presents selected work, the full project archive, and the technologies
behind it. It is a fully static site with no backend.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool, static output
- **Tailwind CSS 4** — dark-first design with a light-mode toggle
- **Framer Motion** — subtle animations that respect `prefers-reduced-motion`

## Pages & Sections

| Route | Contents |
| --- | --- |
| `/` | Hero, Featured Projects, Technologies, About, Education, Contact |
| `/projects/` | The complete project archive, filterable by domain |
| `/cv/` | Standalone full-screen CV viewer |

Each route is a separate static entry point, so deep links and refreshes work
without a client-side router. The CV is also available from anywhere on the site
through an in-page viewer, with options to download it or open it in Google Drive.

## AI Areas Represented

The portfolio covers projects across five domains:

- **Computer Vision** — detection, tracking, recognition, segmentation and image retrieval
- **NLP / RAG** — retrieval-augmented assistants
- **Deep Learning** — CNNs, transfer learning, autoencoders
- **Machine Learning** — classification and prediction, including from-scratch implementations
- **Time-Series Forecasting** — forecasting models and applications

Each project links to its public repository, with demo videos and live apps where they exist.

## Project Content

All portfolio content lives in `src/data/` — projects, technologies, education and
site details. Adding or updating a project means editing `src/data/projects.ts` only;
every section renders from that data.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build    # type-checks with tsc, then bundles into dist/
npm run preview  # serve the production build locally
npm run test:nav # navigation checks against the built pages
```

## Deployment

The site is deployed as a **GitHub User Pages** site and served from the domain root.

Deployment is fully automated with **GitHub Actions**
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): every push to `main`
builds the site and publishes it to GitHub Pages. The only one-time repository
setting required is:

> **Settings → Pages → Source: GitHub Actions**

## Contact

Contact details and profile links are available in the **Contact** section of the
live site.
