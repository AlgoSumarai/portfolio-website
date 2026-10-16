# Sennelo Mulanga Gundo — Portfolio

- Profile, skills, FAQs, experience and education: `src/data/portfolio.ts`
- Project case studies: `src/content/*.md`
- Project screenshots and technical diagrams: `src/content/images/projects/`
- Downloadable CV: `public/Sennelo_Mulanga_CV.pdf`

Run `npm run dev` and open `http://localhost:4321/portfolio-website/` for local
development. Run `npm run build` for the static build in `dist/`, then
`npm run preview` to preview it at the same path.

## GitHub Pages deployment

The site is hosted at `https://algosumarai.github.io/portfolio-website/`.
`astro.config.mjs` sets Astro's top-level `site` and `base` options so generated
assets, canonical URLs and the sitemap use that address. `vite.base` and the
`homepage` field in `package.json` do not configure Astro's deployment base.

In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
The workflow in `.github/workflows/deploy.yml` builds and publishes the site on
every push to `main`, or when run manually from the Actions tab. No manual build
or `gh-pages` branch update is required.

Use the shared `Link` component for navigation and downloads. For other local
URLs (such as head links), use `withBase` from `src/utils/withBase.ts`; it reads
Astro's `BASE_URL` and leaves external URLs and already-prefixed paths intact.

If the deployment address changes, update Astro's `base` along with `site`
(or set `SITE_URL` to override the site's origin). For a custom domain hosted at
the root, set `base: "/"`.

## Original template

Grunge - Free Tailwind CSS & Astro Portfolio Website Template
#### Preview

 - [Demo](https://themewagon.github.io/grunge/)

#### Download
 - [Download from ThemeWagon](https://themewagon.com/themes/grunge/)

## Getting Started

1. Clone Repository
```
git clone https://github.com/themewagon/grunge.git
```
2. Install Dependencies
```
npm i
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Author 
```
Design and code is completely written by Jess Gaspar and development team. 
```

## License

 - Design and Code is Copyright &copy; <a href="https://github.com/jessgaspardev" target="_blank">Jess Gaspar</a>
 - Licensed cover under [MIT]
 - Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
