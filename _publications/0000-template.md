---
published: false        # flip to true (or delete this line) to publish
# ---------------------------------------------------------------------------
# Copy this file to _publications/<slug>.md — the filename becomes the URL:
#   _publications/my-paper.md  ->  /publications/my-paper/
# Everything below feeds the card, the detail page, and the Cite dialog.
# ---------------------------------------------------------------------------

title: "Full Paper Title As Published"
description: "One sentence for search engines and social cards."
authors: "Firstname Lastname*, Coauthor Name*"          # plain text, used nowhere visible
authors_html: "<strong>Firstname Lastname</strong><sup>*</sup>, Coauthor Name<sup>*</sup>"
venue: "2026 Nth International Conference on Something (ABBR)"   # official proceedings title
venue_short: "ABBR 2026"                                # badge on the card
venue_card: "Conference Name &middot; City, Month Year"  # one-line venue for the card
location: "City, Country"
date: 2026-01-01                                        # controls sort order (newest first)
date_display: "January 1&ndash;3, 2026"
pages: "1&ndash;8"                                       # omit if not yet paginated
doi: "10.1109/XXXXX"                                    # omit if not yet assigned
url_official: "https://ieeexplore.ieee.org/document/XXXXXXXX/"
status: ""                                              # e.g. "Accepted" / "In Press" — omit when published

awards:                                                 # omit the key entirely if none
  - "Best Paper"

links:                                                  # first entry gets the solid button
  - { label: "IEEE Xplore", icon: "fas fa-external-link-alt", url: "https://...", primary: true }
  - { label: "Code",        icon: "fab fa-github",            url: "https://github.com/..." }

# Citation strings — paste straight from the publisher's "Cite This" export.
# Use `>-` for the one-line IEEE reference and `|` for BibTeX/RIS to keep line breaks.
citation_ieee: >-
  A. Author and B. Author, "Title," Proceedings, City, Country, 2026, pp. 1-8,
  doi: 10.1109/XXXXX.
citation_bibtex: |
  @INPROCEEDINGS{XXXXXXXX,
    author={Author, A. and Author, B.},
    booktitle={Proceedings},
    title={Title},
    year={2026},
    pages={1-8},
    doi={10.1109/XXXXX}}
citation_ris: |
  TY  - CONF
  TI  - Title
  T2  - Proceedings
  SP  - 1
  EP  - 8
  AU  - A. Author
  PY  - 2026
  DO  - 10.1109/XXXXX
  ER  -
---

<!-- Body = the detail page. Use as many .content-section blocks as the paper needs. -->

<section class="content-section">
  <p class="section-label">Abstract</p>
  <div class="abstract-block">
    <p>Abstract text.</p>
  </div>
</section>
