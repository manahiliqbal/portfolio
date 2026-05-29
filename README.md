# ✦ Manahil Iqbal — Portfolio

A personal portfolio dressed like a notebook page: ruled lines, margin doodles, and a little personality between the professional sections.

Built with **React** and **Vite**. Content lives in one data file so copy updates stay painless.

## Stack

- React 19
- Vite 6
- Plain CSS (notebook theme, no UI framework)

## Features

- Full-page sections with smooth scroll navigation
- Sticky nav with active-section highlighting
- Notebook surfaces: ruled paper, margin line, pins, stickers, and stars
- Responsive layout with mobile-friendly decor and nav
- Content driven by `src/data/portfolioData.js`

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints ([http://localhost:5173](http://localhost:5173)).

### Production build

```bash
npm run build
npm run preview
```

Static output goes to `dist/`.

## Deploy

### Vercel (recommended)

1. Push to GitHub and import the repo in [Vercel](https://vercel.com).
2. Framework preset: **Vite** (or use the included `vercel.json`).
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy. `dist/` is generated at build time — you don’t commit it.

## Project layout

| Path | Purpose |
|------|---------|
| `src/components/Portfolio.jsx` | Page sections and layout |
| `src/components/SiteNav.jsx` | Header nav + mobile menu |
| `src/components/NotebookDecor.jsx` | Stars, pins, stickers per section |
| `src/data/portfolioData.js` | Bio, experience, projects, contact |
| `src/data/sectionDecors.js` | Decoration placement per section |
| `src/styles/portfolio.css` | Main notebook styles |
| `src/styles/decorations.css` | Decor animations and stickers |
| `public/favicon.svg` | Tab icon (gold star on cream) |
| `manahil_notebook_portfolio.html` | Original static mockup (reference) |

## Customize

Edit **`src/data/portfolioData.js`** for text, links, and section copy.  
Tweak colors in **`src/index.css`** (`--accent` and related variables).  
Adjust stickers and pins in **`src/data/sectionDecors.js`**.

---

*Manahil Iqbal · AI Engineer · Lahore*
