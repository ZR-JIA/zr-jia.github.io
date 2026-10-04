---
layout: default
permalink: /
title: "Zheng Rong JIA"
description: "AI researcher specializing in Clinical AI and deep learning on electronic health records. First author, CCAI 2026 (published in IEEE Xplore) and PRICAI 2026 (short paper, accepted)."
---

<div class="container">

  <!-- ── Hero ─────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-left">
      <h1 class="hero-name">Zheng Rong JIA</h1>
      <p class="hero-slogan">I learn for the future.</p>
      <div class="hero-roles">
        <div class="hero-role">
          <p class="hero-role-label">MSc Student</p>
          <p class="hero-role-value"><a href="https://www.apu.edu.my/" target="_blank" rel="noopener noreferrer">Asia Pacific University</a></p>
        </div>
        <div class="hero-role">
          <p class="hero-role-label">Young Ambassador &amp; Researcher</p>
          <p class="hero-role-value"><a href="https://aae.com.hk/" target="_blank" rel="noopener noreferrer">Asia AI Education &amp; Future Technology Association</a></p>
        </div>
        <div class="hero-role">
          <p class="hero-role-label">Research Focus</p>
          <p class="hero-role-value">Clinical Prediction &middot; Trustworthy Clinical AI &middot; Reproducible Pipelines</p>
        </div>
      </div>
      <div class="hero-links">
        <a href="mailto:zhengrong.jia.academic@gmail.com" class="hero-link"><i class="fas fa-envelope"></i> Email</a>
        <a href="https://scholar.google.com/citations?user=juPceOgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fas fa-graduation-cap"></i> Scholar</a>
        <a href="https://github.com/ZR-JIA" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://www.linkedin.com/in/zhengrong-jia-866456374" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://orcid.org/0009-0007-8829-6713" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-orcid"></i> ORCID</a>
        <a href="https://www.researchgate.net/profile/Zhengrong-Jia-2" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-researchgate"></i> ResearchGate</a>
        <a href="https://www.webofscience.com/wos/author/record/RFS-2719-2026" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="ai ai-clarivate"></i> Web of Science</a>
        <a href="https://www.scopus.com/authid/detail.uri?authorId=60820100100" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="ai ai-scopus"></i> Scopus</a>
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
        <p class="interest-title">Clinical Prediction</p>
        <p class="interest-desc">Deep learning on electronic health records for ICU risk stratification and mortality prediction</p>
      </div>
      <div class="interest-card">
        <p class="interest-title">Trustworthy Clinical AI</p>
        <p class="interest-desc">Inference-time safeguards against physiological outliers, and attention-based interpretability a clinician can check</p>
      </div>
      <div class="interest-card">
        <p class="interest-title">Reproducible Pipelines</p>
        <p class="interest-desc">Multicenter clinical databases, leakage-free cohort pipelines, and open code</p>
      </div>
    </div>
  </section>

  <!-- ── Publications ───────────────────────────── -->
  <section class="content-section">
    <p class="section-label">Publications</p>
    {%- assign pubs = site.publications | sort: "date" | reverse -%}
    <div class="pub-list">
      {%- for pub in pubs limit: 2 %}
      {% include pub-card.html publication=pub %}
      {%- endfor %}
    </div>
  </section>

  <!-- ── News ───────────────────────────────────── -->
  <section class="content-section">
    <p class="section-label">News</p>
    <ul class="news-list">
      <li class="news-item">
        <span class="news-date">Aug 19, 2026</span>
        <span class="news-text"><strong>Short paper accepted at <a href="https://2026.pricai.org/" target="_blank" rel="noopener noreferrer">PRICAI 2026</a></strong> &mdash; <em>DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality</em>. <a href="/publications/dualtower-ft-pricai/">Details</a>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">Jul 15, 2026</span>
        <span class="news-text">Reviewed four submissions for <a href="https://2026.pricai.org/" target="_blank" rel="noopener noreferrer">PRICAI 2026</a> and was invited to serve on its <strong>Program Committee</strong>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Received Best Industrial Paper Award &amp; Best Presentation Award at <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> &mdash; Nanjing.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Attended <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> in Nanjing &mdash; delivered an oral presentation of <em>Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</em>. <a href="/slides/">Slides</a> and <a href="/gallery/">photos</a> now available.</span>
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
      <p class="philosophy-text">When machine learning meets <strong>real clinical stakes</strong>, a model's failure is not an accuracy number but <strong>a missed diagnosis</strong>. Those are the problems I am drawn to. My work focuses on building deep learning systems for electronic health records that are not only accurate, but <strong>interpretable and honest about their limits</strong>. I believe the most durable research is <strong>reproducible, open</strong>, and built with the long game in mind.</p>
    </div>
  </section>

</div>

{%- for pub in pubs limit: 2 %}
{% include cite-source.html publication=pub %}
{%- endfor %}
{% include cite-modal.html %}
