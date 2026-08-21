---
layout: default
permalink: /
title: "Zheng Rong JIA"
description: "Independent AI researcher specializing in Clinical AI and deep learning on electronic health records. First author, CCAI 2026."
---

<div class="container">

  <!-- ── Hero ─────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-left">
      <h1 class="hero-name">Zheng Rong JIA</h1>
      <p class="hero-slogan">I learn for the future.</p>
      <div class="hero-identity">
        <span class="hero-tag">Medical AI</span>
        <span class="hero-tag">Predictive Modeling</span>
        <span class="hero-tag">Independent Researcher</span>
      </div>
      <p class="hero-edu">B.Sc. Software Engineering &middot; Macau University of Science and Technology, 2025</p>
      <div class="hero-links">
        <a href="mailto:zhengrong.jia.academic@gmail.com" class="hero-link"><i class="fas fa-envelope"></i> Email</a>
        <a href="https://scholar.google.com/citations?user=juPceOgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fas fa-graduation-cap"></i> Scholar</a>
        <a href="https://github.com/ZR-JIA" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/zhengrong-jia-866456374" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://orcid.org/0009-0007-8829-6713" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-orcid"></i> ORCID</a>
        <a href="/cv/" class="hero-link"><i class="fas fa-file-alt"></i> CV</a>
      </div>
    </div>
    <div class="hero-right">
      <img src="/assets/images/avatar.jpg" alt="Zheng Rong JIA" class="hero-portrait" width="148" height="148">
    </div>
  </section>

  <!-- ── Research Interests ─────────────────────── -->
  <section class="content-section">
    <p class="section-label">Research Interests</p>
    <div class="interests-grid">
      <div class="interest-card">
        <div class="interest-icon"><i class="fas fa-heartbeat"></i></div>
        <p class="interest-title">Medical AI</p>
        <p class="interest-desc">Deep learning on EHR data for ICU risk stratification and clinical decision support</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><i class="fas fa-chart-line"></i></div>
        <p class="interest-title">Predictive Modeling</p>
        <p class="interest-desc">Transformer-based temporal models for early warning systems in critical care</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><i class="fas fa-database"></i></div>
        <p class="interest-title">Health Informatics</p>
        <p class="interest-desc">Multicenter clinical databases, missing-data-aware architectures, reproducible pipelines</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><i class="fas fa-brain"></i></div>
        <p class="interest-title">Explainable AI</p>
        <p class="interest-desc">Attention-based saliency and faithfulness evaluation for clinical interpretability</p>
      </div>
      <div class="interest-card">
        <div class="interest-icon"><i class="fas fa-dna"></i></div>
        <p class="interest-title">Digital Biomarkers</p>
        <p class="interest-desc">Feature importance analysis and physiological signal modeling for mortality prediction</p>
      </div>
    </div>
  </section>

  <!-- ── Publications ───────────────────────────── -->
  <section class="content-section">
    <p class="section-label">Publications</p>
    {%- assign pubs = site.publications | sort: "date" | reverse -%}
    {%- for pub in pubs limit: 2 %}
    {% include pub-card.html publication=pub %}
    {%- endfor %}
  </section>

  <!-- ── News ───────────────────────────────────── -->
  <section class="content-section">
    <p class="section-label">News</p>
    <ul class="news-list">
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Received Best Industrial Paper Award &amp; Best Presentation Award at <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> &mdash; Nanjing.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Attended <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> in Nanjing &mdash; delivered oral presentation of <em>DT-Transformer for Stroke Mortality Prediction</em>. <a href="/slides/">Slides</a> and <a href="/gallery/">photos</a> now available.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 2026</span>
        <span class="news-text">Released the <strong>DT-Transformer</strong> framework open-source for reproducible clinical AI research &mdash; <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke" target="_blank" rel="noopener noreferrer">training pipeline</a> and <a href="https://github.com/ZR-JIA/Data-Preprocessing-for-eICU" target="_blank" rel="noopener noreferrer">data preprocessing pipeline</a>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">Feb 2, 2026</span>
        <span class="news-text"><strong>Paper accepted at <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> &mdash; <em>Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</em>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">Aug 2025</span>
        <span class="news-text">Earned B.Sc. in Software Engineering from Macau University of Science and Technology.</span>
      </li>
    </ul>
  </section>

  <!-- ── About ──────────────────────────────────── -->
  <section class="content-section">
    <p class="section-label">About</p>
    <div class="philosophy-block">
      <p class="philosophy-text">I am drawn to problems where machine learning meets real clinical stakes — where a model's failure is not an accuracy number but a missed diagnosis. My work focuses on building deep learning systems for electronic health records that are not only accurate, but interpretable and honest about their limits. I believe the most durable research is reproducible, open, and built with the long game in mind.</p>
    </div>
  </section>

</div>

{%- for pub in pubs limit: 2 %}
{% include cite-source.html publication=pub %}
{%- endfor %}
{% include cite-modal.html %}
