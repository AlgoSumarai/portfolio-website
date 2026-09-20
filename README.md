# Sennelo Mulanga Gundo — engineering portfolio

Recruiter-first portfolio authored with React and Vite, deployed under `/portfolio-website/` on GitHub Pages.

## Development

```sh
npm ci
npm run dev
```

## Validate and preview

```sh
npm run lint
npm run build
npm run check
npm run preview
```

The build first compiles the React application, then `scripts/prerender.mjs` renders the same components into the production HTML. Native links and `<details>` disclosures provide all interactions, so the production page needs no client JavaScript. Development still uses React and Vite HMR. If future features require React state or event handlers, add hydration before shipping those features; the current prerender deliberately removes the client entry script.

## Content and structure

- `src/data/portfolio.js`: professional details, project case studies, skills and experience.
- `src/pages/Home.jsx`: hero, professional snapshot, projects, experience, skills, education, approach and contact sections.
- `src/components/ProjectCard.jsx`: reusable project overview and native expandable case study.
- `src/components/Header.jsx`: persistent navigation with visible mobile links.
- `src/index.css`: responsive design, focus styles, reduced motion and print rules.
- `public/Sennelo_Mulanga_CV.pdf`: original supplied resume, available to view/download.
- `public/images/`: optimised portrait, actual AlgoDojo screenshot and social preview.
- `index.html`: SEO, social metadata and Person structured data.
- `docs/redesign-audit.md`: source evidence, audit and implementation decisions.

Keep CV dates, contact details and project claims consistent when updating content. Distinguish in-development work from deployed services. Case studies use descriptive fragment URLs such as `#chess-lens`; they do not require routing or a server fallback. The sitemap lists the single canonical page.

The robots file is served beneath the GitHub Pages project path. A domain-wide `/robots.txt` can only be controlled by the owner’s root Pages site; this project cannot override it.

## Deploy

```sh
npm run deploy
```

This builds and publishes `dist` with the existing `gh-pages` setup. Local redesign work does not automatically publish the site.
