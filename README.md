# Manahil Iqbal — Notebook Portfolio (React)

A notebook-style portfolio built with React and Vite, converted from the original HTML mockup.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The static site output is in `dist/`.

## Deploy on Vercel

1. Push this repo to GitHub and import it in [Vercel](https://vercel.com).
2. **Root Directory** should be the folder that contains `package.json` (repo root if the app is at the top level).
3. Vercel should auto-detect **Vite**. If not, set:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. This repo includes `vercel.json` with those settings — redeploy after pulling the latest commit.

`dist/` is gitignored on purpose; Vercel creates it during the build. You do not need to commit `dist/`.

## Project structure

- `src/components/Portfolio.jsx` — full-page layout and sections
- `src/components/SiteNav.jsx` — sticky nav with scroll spy
- `src/data/portfolioData.js` — all portfolio content
- `src/styles/portfolio.css` — notebook-themed styles
- `manahil_notebook_portfolio.html` — original HTML reference
