# Zheng Rong JIA — Academic Website

[![GitHub Pages](https://img.shields.io/badge/Live%20Site-jiazhengrong.com-1a3a5c?style=flat-square&logo=github)](https://jiazhengrong.com)
[![Jekyll](https://img.shields.io/badge/Jekyll-3.9-red?style=flat-square&logo=jekyll)](https://jekyllrb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

Personal academic website for **Zheng Rong JIA**, AI researcher in Clinical Deep Learning. Built with Jekyll and a custom academic design system — no third-party UI frameworks.

**Live:** https://jiazhengrong.com

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `_pages/index.md` | Homepage: profile, publications, news, research interests |
| `/publications/` | `_pages/publications.md` | Publication list (generated from `_publications/`) |
| `/publications/<slug>/` | `_publications/<slug>.md` | Individual paper: abstract, results, methodology |
| `/slides/` | `_pages/slides.md` | Presentation slides with embedded Marp viewer |
| `/gallery/` | `_pages/gallery.md` | Conference photo carousel |
| `/commentary/` | `_pages/commentary.md` | Research commentary listing |
| `/YYYY/MM/DD/slug.html` | `_posts/YYYY-MM-DD-slug.md` | Individual commentary post |
| `/cv/` | `_pages/cv.md` | Full curriculum vitae with PDF download |

---

## Project Structure

```
.
├── _config.yml            # Site config: title, URL, GA4, plugins, collections
├── Gemfile                # Ruby gem dependencies
├── site.webmanifest       # PWA manifest
├── _includes/
│   ├── navbar.html        # Top navigation bar (hardcoded — edit directly)
│   ├── footer.html        # Footer
│   ├── pub-card.html      # Publication card (homepage + list page)
│   ├── cite-source.html   # Hidden citation payload (IEEE / BibTeX / RIS)
│   └── cite-modal.html    # "Cite This Paper" dialog
├── _layouts/
│   ├── default.html       # Base layout (GA4, OG tags, JSON-LD schema)
│   ├── page.html          # Generic page layout
│   ├── post.html          # Commentary post layout
│   └── publication.html   # Paper detail page layout
├── _publications/         # One file per paper (drives list, detail page, Cite dialog)
│   ├── dualtower-ft-pricai.md
│   ├── dt-transformer-eicu-stroke.md
│   └── 0000-template.md   # published: false — copy this to add a paper
├── _pages/
│   ├── index.md
│   ├── publications.md    # list page (loops over _publications)
│   ├── slides.md
│   ├── gallery.md         # Photo carousel page
│   ├── commentary.md      # Commentary listing page
│   ├── cv.md
│   └── 404.md
├── _posts/                # Commentary articles (YYYY-MM-DD-slug.md)
├── assets/
│   ├── css/main.css       # Design system (tokens, layout, components)
│   ├── js/main.js         # Dark mode, mobile nav, Cite dialog
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

> **Note:** the pinned `github-pages` gem set needs an older Ruby. On Ruby 3.2+
> the build fails with `undefined method 'tainted?'` (removed from Ruby, still
> called by liquid 4.0.3). Use a version manager (`rbenv`, `asdf`) to run Ruby
> 3.1 or earlier locally. GitHub Pages builds on its own environment, so this
> only affects local preview.

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

Jekyll generates the URL `/YYYY/MM/DD/slug.html` — its built-in `date` default,
since no `permalink:` is configured. To nest posts under `/commentary/` instead,
add `permalink: /commentary/:year/:month/:day/:title/` to `_config.yml`.

Set `published: false` while drafting, or keep the file in `_drafts/` — anything
in `_posts/` with a past date is built and goes live on the next push.

---

## Publications Workflow

Each paper is one file in `_publications/`. The filename becomes the URL:
`_publications/my-paper.md` → `/publications/my-paper/`.

```bash
cp _publications/0000-template.md _publications/my-paper.md
```

Fill in the front matter, then delete the `published: false` line. Adding that
one file updates **all** of these automatically:

- the card on the homepage (newest two)
- the `/publications/` list
- its own detail page
- `sitemap.xml`

### Citations

Paste the three citation strings straight from the publisher's "Cite This"
export. Use `>-` for the one-line IEEE reference and `|` for BibTeX and RIS so
their line breaks survive into the clipboard.

**The Cite button only appears once `citation_ieee` is filled in.** Leave the
citation fields out for a paper that is accepted but not yet published — no one
can then copy a citation that is still going to change.

### Papers not yet published

Use `status:` (e.g. `"Accepted &middot; Short Paper"`) to show a badge on the
card and detail page, and omit `pages`, `doi`, and `url_official` until the
proceedings exist.

`_config.yml` sets **`future: true`** for exactly this case. Papers are sorted by
`date:`, which for an accepted paper is the *upcoming* conference date — and
Jekyll drops future-dated documents from the build unless `future` is on. Do not
remove that setting or accepted papers will silently vanish from the site.

The body of the file is the detail page — use `<section class="content-section">`
blocks with a `<p class="section-label">` heading, matching the other pages.

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
| Publications | `_publications/*.md` (one file per paper) |
| Conference photos | `assets/images/ccai2026/` |
| Avatar photo | `assets/images/avatar.jpg` (400×400 recommended) |
| Social share image | `assets/images/og-image.png` (1200×630) |
| Site URL / GA4 ID | `_config.yml` |

---

## License

MIT © 2026 Zheng Rong JIA
