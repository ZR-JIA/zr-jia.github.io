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
| `/gallery/` | `_pages/gallery.md` | Conference photo carousel |
| `/commentary/` | `_pages/commentary.md` | Research commentary listing |
| `/commentary/YYYY/MM/DD/slug/` | `_posts/YYYY-MM-DD-slug.md` | Individual commentary post |
| `/cv/` | `_pages/cv.md` | Full curriculum vitae with PDF download |

---

## Project Structure

```
.
├── _config.yml            # Site config: title, URL, GA4, plugins
├── Gemfile                # Ruby gem dependencies
├── site.webmanifest       # PWA manifest
├── _includes/
│   ├── navbar.html        # Top navigation bar (hardcoded — edit directly)
│   └── footer.html        # Footer
├── _layouts/
│   ├── default.html       # Base layout (GA4, OG tags, JSON-LD schema)
│   ├── page.html          # Generic page layout
│   └── post.html          # Commentary post layout
├── _pages/
│   ├── index.md
│   ├── publications.md
│   ├── slides.md
│   ├── gallery.md         # Photo carousel page
│   ├── commentary.md      # Commentary listing page
│   ├── cv.md
│   └── 404.md
├── _posts/                # Commentary articles (YYYY-MM-DD-slug.md)
├── assets/
│   ├── css/main.css       # Design system (tokens, layout, components)
│   ├── js/main.js         # Dark mode toggle, interactions
│   ├── images/
│   │   ├── ccai2026/      # CCAI 2026 conference photos
│   │   └── ...            # avatar, og-image, favicons
│   ├── papers/            # CV PDF (tracked in git)
│   ├── slides/            # Marp source files (excluded from Jekyll build)
│   └── slides_html/       # Compiled Marp HTML (served via iframe)
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
marp assets/slides/CCAI2026/CCAI2026_Presentation.md \
     --html --allow-local-files \
     -o assets/slides_html/CCAI2026.html
```

Source files live in `assets/slides/` (excluded from Jekyll). Compiled HTML lives in `assets/slides_html/` (served and embedded via iframe).

---

## Deployment

Pushing to `main` triggers automatic GitHub Pages deployment (~1–2 min).

```bash
git push origin main
```

---

## Design System

Custom CSS with design tokens in `assets/css/main.css`.

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#2c4a6e` | Links, active states, borders |
| `--color-bg` | `#f9f8f5` | Page background |
| `--color-text` | `#1c1c1c` | Body text |

Dark mode via `[data-theme="dark"]`, toggled by `assets/js/main.js`.

---

## Customisation

| What | Where |
|---|---|
| Profile text & bio | `_pages/index.md` |
| Navigation links | `_includes/navbar.html` (hardcoded) |
| CV content | `_pages/cv.md` |
| CV PDF | Replace `assets/papers/CV_ZhengRong_JIA.pdf` |
| Publications | `_pages/publications.md` |
| Conference photos | `assets/images/ccai2026/` |
| Avatar photo | `assets/images/avatar.jpg` (400×400 recommended) |
| Social share image | `assets/images/og-image.png` (1200×630) |
| Site URL / GA4 ID | `_config.yml` |

---

## License

MIT © 2026 Zheng Rong JIA
