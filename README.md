# Zheng Rong JIA — Personal Website

A Jekyll-based personal academic website. Designed as a professional hub integrating GitHub, LinkedIn, ORCID, and Google Scholar.

**Live site:** [https://zr-jia.github.io](https://zr-jia.github.io)

## Structure

```
├── _config.yml            # Site configuration (title, URL, plugins)
├── Gemfile                # Ruby dependencies
├── favicon.ico            # Browser tab icon
├── site.webmanifest       # PWA / Android home screen manifest
├── _data/
│   ├── navigation.yml     # Navigation bar + external profile links
│   └── skills.yml         # Tech stack data (used on homepage)
├── _includes/
│   ├── navbar.html        # Navigation bar component
│   └── footer.html        # Footer component
├── _layouts/
│   ├── default.html       # Base layout (includes GA4, OG tags, JSON-LD)
│   └── page.html          # Page layout
├── _pages/
│   ├── index.md           # Homepage (Profile, Tech Stack, Latest Research)
│   ├── publications.md    # Publications & Research
│   ├── slides.md          # Slides & Presentations
│   ├── cv.md              # Curriculum Vitae
│   └── 404.md             # Custom 404 page
├── assets/
│   ├── css/main.css       # Stylesheet
│   ├── js/main.js         # JavaScript
│   ├── images/
│   │   ├── avatar.jpg     # Profile photo (400×400)
│   │   ├── og-image.png   # Social share preview (1200×630)
│   │   └── favicon-*.png  # Favicon variants
│   ├── papers/            # PDF paper files
│   └── slides/            # PDF slide files
└── README.md
```

## Quick Start

### 1. Install dependencies
```bash
gem install bundler
bundle install
```

### 2. Local preview
```bash
bundle exec jekyll serve
```
Visit [http://localhost:4000](http://localhost:4000)

### 3. Deploy to GitHub Pages
```bash
git add .
git commit -m "Update site"
git push origin main
```

## Customization Notes

- **Navigation:** Edit `_data/navigation.yml`
- **Tech stack tags:** Edit `_data/skills.yml`
- **Add/edit a page:** Create or modify `.md` files in `_pages/`
- **Add papers/slides:** Place PDF files in `assets/papers/` or `assets/slides/`
