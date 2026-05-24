# Zheng Rong JIA — Academic Website

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-zr--jia.github.io-1a3a5c?style=flat-square&logo=github)](https://zr-jia.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-3.9-red?style=flat-square&logo=jekyll)](https://jekyllrb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

Personal academic website for **Zheng Rong JIA**, AI researcher in Clinical Deep Learning. Built with Jekyll and a custom academic design system — no third-party UI frameworks.

**Live:** https://zr-jia.github.io

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `_pages/index.md` | Homepage: profile, publications, news, research interests |
| `/publications/` | `_pages/publications.md` | Papers, results table, BibTeX |
| `/slides/` | `_pages/slides.md` | Presentation slides with embedded Marp viewer |
| `/commentary/` | `_pages/commentary.md` | Research commentary listing |
| `/commentary/YYYY/MM/DD/slug/` | `_posts/YYYY-MM-DD-slug.md` | Individual commentary post |
| `/cv/` | `_pages/cv.md` | Full curriculum vitae with PDF download |

---

## Project Structure

```
.
├── _config.yml            # Site config: title, URL, GA4, plugins
├── Gemfile                # Ruby gem dependencies
├── site.webmanifest       # PWA manifest (home screen icon)
├── _data/
│   ├── navigation.yml     # Navbar links
│   └── skills.yml         # Tech stack tags
├── _includes/
│   ├── navbar.html        # Top navigation bar
│   └── footer.html        # Footer
├── _layouts/
│   ├── default.html       # Base layout (GA4, OG tags, JSON-LD schema)
│   ├── page.html          # Generic page layout
│   └── post.html          # Commentary post layout
├── _pages/
│   ├── index.md
│   ├── publications.md
│   ├── slides.md
│   ├── commentary.md      # Commentary listing page
│   ├── cv.md
│   └── 404.md
├── _posts/                # Commentary articles (YYYY-MM-DD-slug.md)
├── assets/
│   ├── css/main.css       # Design system (tokens, layout, components)
│   ├── js/main.js         # Dark mode toggle, interactions
│   ├── images/            # avatar.jpg, og-image.png, favicons
│   ├── papers/            # CV PDF (tracked in git)
│   ├── slides/            # Marp source files and assets (excluded from Jekyll build)
│   └── slides_html/       # Compiled Marp HTML (served by GitHub Pages)
└── README.md
```

---

## Local Development

**Requirements:** Ruby ≥ 2.7, Bundler

```bash
# 1. Install dependencies
gem install bundler
bundle install

# 2. Start dev server
bundle exec jekyll serve --port 4000
# → http://localhost:4000

# 3. Production build
bundle exec jekyll build
# → output in _site/
```

---

## Commentary Workflow

New posts go in `_posts/` with filename `YYYY-MM-DD-slug.md`:

```markdown
---
layout: post
title: "Your Title"
date: 2026-05-24
tags: [clinical-ai]
excerpt: "One-sentence summary shown on the listing page."
---

Article body here...
```

Jekyll auto-generates the URL `/commentary/YYYY/MM/DD/slug/`.

---

## Slides Workflow

Presentations are authored in Markdown using [Marp](https://marp.app) and compiled to a self-contained HTML for embedding.

```bash
# Compile Marp source to self-contained HTML
marp assets/slides/CCAI2026/CCAI2026_Presentation.md \
     --html --allow-local-files \
     -o assets/slides_html/CCAI2026.html
```

Source files live in `assets/slides/` (excluded from Jekyll). Compiled HTML lives in `assets/slides_html/` (served and embedded via iframe).

---

## Deployment

Pushing to `main` triggers automatic GitHub Pages deployment.

```bash
git add .
git commit -m "your message"
git push origin main
# → live in ~1-2 minutes at https://zr-jia.github.io
```

---

## Design System

The site uses a custom academic layout with CSS custom properties (design tokens).

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1a3a5c` | Headings, accents |
| `--color-surface` | `#ffffff` | Card backgrounds |
| `--color-bg` | `#f2f2f7` | Page background |

Dark mode is supported via `[data-theme="dark"]` and toggled by `assets/js/main.js`.

---

## Customisation

| What | Where |
|---|---|
| Profile text & bio | `_pages/index.md` |
| Navigation links | `_data/navigation.yml` |
| CV content | `_pages/cv.md` |
| CV PDF | Replace `assets/papers/CV_ZhengRong_JIA.pdf` |
| Publications | `_pages/publications.md` |
| Avatar photo | `assets/images/avatar.jpg` (400×400 recommended) |
| Social share image | `assets/images/og-image.png` (1200×630) |
| Site URL / GA4 ID | `_config.yml` |

---

## License

MIT © 2026 Zheng Rong JIA
