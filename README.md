# Personal GitHub Pages Website

A Jekyll-based personal website using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme. Designed as a professional hub integrating GitHub, LinkedIn, ORCID, and Google Scholar.

## Structure

```
├── _config.yml          # Site configuration (author, links, theme)
├── _data/
│   └── navigation.yml   # Navigation bar + external profile links
├── _pages/
│   ├── index.md          # Homepage (About, Tech Stack, Latest Research)
│   ├── publications.md   # Academic publications (ORCID aggregation)
│   ├── projects.md       # Projects with [Code] and [Slides] links
│   ├── slides.md         # Slides collection listing
│   └── blog.md           # Blog posts listing
├── _slides/              # Presentation content (Markdown)
├── _projects/            # Project detail pages
├── _posts/               # Blog posts
├── assets/
│   ├── images/           # Avatar, teasers, etc.
│   ├── slides/           # PDF slide files
│   └── papers/           # PDF paper files
├── Gemfile               # Ruby dependencies
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

### 3. Customize
1. Edit `_config.yml` — Replace all `yourusername`, `Your Name`, and placeholder URLs
2. Add your avatar to `assets/images/avatar.jpg`
3. Update `_pages/publications.md` with your real papers
4. Update `_pages/projects.md` with your real projects
5. Add slide PDFs to `assets/slides/`

### 4. Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial professional release: Integrated Website with ORCID, LinkedIn, and GitHub"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

## Customization Notes

- **Theme skin:** Change `minimal_mistakes_skin` in `_config.yml` (options: default, air, aqua, contrast, dark, dirt, neon, mint, plum, sunrise)
- **Sidebar links:** Edit `author.links` in `_config.yml`
- **Navigation:** Edit `_data/navigation.yml`
- **Add a new project:** Create a new `.md` file in `_projects/`
- **Add a new slide:** Create a new `.md` file in `_slides/`
- **Add a blog post:** Create a new `.md` file in `_posts/` with format `YYYY-MM-DD-title.md`
