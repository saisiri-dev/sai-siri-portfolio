# Sai Siri Kudaravalli — Portfolio

Personal portfolio website for **Sai Siri Kudaravalli**, a B.Tech Computer Science
student and aspiring Software Engineer. Built with React, Vite, and Tailwind CSS.

All content is sourced directly from the resume — no fabricated experience,
projects, metrics, or skills.

## Features

- Hero, About, Skills, Experience, Projects, Education, Research,
  Certifications, Achievements, and Contact sections
- Sticky, responsive navigation with a mobile menu
- Project cards that only show GitHub/Demo buttons once real URLs are added
- "Download resume" button linking to a static PDF
- Centralized content file (`src/data/portfolio.js`) — edit once, updates everywhere
- Responsive from mobile to desktop, keyboard-focus styles, reduced-motion support
- SEO meta tags and Open Graph tags in `index.html`

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project structure

```
sai-siri-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            ← add your resume PDF here (see below)
├── src/
│   ├── components/           # Nav, Footer, SectionHeading
│   ├── sections/             # One file per page section
│   ├── data/
│   │   └── portfolio.js      # ← single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Install

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a production-ready site into `dist/`. Preview it locally with:

```bash
npm run preview
```

## What to edit before publishing

1. **Resume PDF** — place your final resume as `public/resume.pdf`. The
   "Download resume" button already links to `/resume.pdf`; nothing else to change.
2. **Project links** — open `src/data/portfolio.js` and find the
   `Automated Network Request Management` project. Replace:
   - `GITHUB_PROJECT_URL` → your real GitHub repository URL
   - `PROJECT_DEMO_URL` → your real demo URL (or leave as `null` if there is no demo)
   The GitHub/Demo buttons only appear once these are real URLs.
3. **Any other content changes** (new project, updated CGPA, new certification)
   — everything lives in `src/data/portfolio.js`, so you only edit one file.

## Deploy to GitHub Pages

### 1. Create a GitHub repository

- Go to [github.com/new](https://github.com/new)
- Name it, for example, `portfolio`
- Keep it **Public** (required for free GitHub Pages) and don't initialize with a README
- Click **Create repository**

### 2. Push this project

From inside the `sai-siri-portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/saisiri-dev/portfolio.git
git push -u origin main
```

(Replace the URL with the one GitHub shows you after creating the repository.)

### 3. Set the Vite base path

Open `vite.config.js` and make sure `base` matches your repository name exactly:

```js
base: '/portfolio/',
```

If your repository is named `saisiri-dev.github.io` (a user/organization site),
set `base: '/'` instead.

### 4. Turn on GitHub Pages

- In your repository, go to **Settings → Pages**
- Under **Build and deployment**, set **Source** to **GitHub Actions**

That's it — the included workflow (`.github/workflows/deploy.yml`) will build
and deploy automatically on every push to `main`.

### 5. Get your live URL

After the "Deploy to GitHub Pages" workflow finishes (check the **Actions** tab),
your site will be live at:

```
https://saisiri-dev.github.io/portfolio/
```

### Alternative: manual deploy with gh-pages

If you'd rather deploy manually instead of using GitHub Actions:

```bash
npm run deploy
```

This uses the `gh-pages` package (already in `package.json`) to push the
`dist/` folder to a `gh-pages` branch. Then in **Settings → Pages**, set
**Source** to **Deploy from a branch** and select the `gh-pages` branch.

## Remaining placeholders to replace

- `public/resume.pdf` — not included; add your real PDF
- `GITHUB_PROJECT_URL` and `PROJECT_DEMO_URL` in `src/data/portfolio.js`
- `base` in `vite.config.js` — set to your actual repository name
