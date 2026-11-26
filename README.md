# Zhengrong Jia — Academic Website

[![Live Site](https://img.shields.io/badge/Live%20Site-zr--jia.github.io-1a3a5c?style=flat-square&logo=github)](https://zr-jia.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-3.9-red?style=flat-square&logo=jekyll)](https://jekyllrb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

Personal academic website for **Zhengrong Jia** (https://zr-jia.github.io), built with Jekyll and vanilla CSS/JS.

---

## Pages

| Route | Source | Description |
|---|---|---|
| `/` | `_pages/index.md` | Profile, research focus, publications, GitHub activity, and news |
| `/publications/` | `_pages/publications.md` | Peer-reviewed publications (`_publications/`) |
| `/publications/<slug>/` | `_publications/<slug>.md` | Paper details, results, and citation modal |
| `/presentations/` | `_pages/presentations.md` | Conference slides and posters (`/slides/` redirects here) |
| `/gallery/` | `_pages/gallery.md` | Conference photos |
| `/commentary/` | `_pages/commentary.md` | Research commentary (`_posts/`) |
| `/cv/` | `_pages/cv.md` | Web CV and downloadable PDF (`assets/papers/CV_ZhengRong_JIA.pdf`) |

---

## Structure

```text
.
├── _config.yml           # Site configuration and collections
├── _includes/            # Navbar, footer, publication card, citation modal
├── _layouts/             # Base, page, post, and publication layouts
├── _pages/               # Top-level pages
├── _publications/        # Paper entries (copy 0000-template.md for new papers)
├── _posts/               # Commentary posts (YYYY-MM-DD-slug.md)
└── assets/               # CSS, JS, images, PDF CV, posters, and slides
```

---

## Local Development

Requires Ruby ≤ 3.1 for the pinned `github-pages` gem set. Pushing to `main` deploys automatically via GitHub Pages.

```bash
bundle install
bundle exec jekyll serve --port 4000
```

- **Add a paper:** Copy `_publications/0000-template.md`, fill in the front matter, and remove `published: false`. Keep `future: true` in `_config.yml` so accepted papers with upcoming conference dates are built.
- **Compile slides:** `marp assets/slides/<CONF>/<deck>.md --html --allow-local-files -o assets/slides_html/<CONF>.html`

---

## License

MIT © 2026 Zhengrong Jia
