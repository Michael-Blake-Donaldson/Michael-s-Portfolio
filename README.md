# Michael Donaldson Portfolio

Michael Donaldson's public software engineering portfolio, built with Next.js,
React, TypeScript, and Three.js.

This site is a static portfolio. It has no account system, sign-in flow,
database, private dashboard, or ChatGPT authentication. Every visitor can browse
the same public content.

## Local Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm test
npm run build:pages
```

`npm run build` exports the site to `out/`. `npm run build:pages` also applies
the repository path used by the production GitHub Pages URL.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the
portfolio whenever `main` is updated. In the GitHub repository, set
**Settings > Pages > Build and deployment > Source** to **GitHub Actions**.

Production URL:
[michael-blake-donaldson.github.io/Michael-s-Portfolio](https://michael-blake-donaldson.github.io/Michael-s-Portfolio/)

The deployment supplies these build-time variables:

- `NEXT_PUBLIC_BASE_PATH`: the repository path used by project Pages
- `NEXT_PUBLIC_SITE_URL`: the complete public URL used in SEO and social metadata
