---
layout: default
permalink: /
title: "Zhengrong Jia"
description: "AI researcher specializing in Clinical AI and deep learning for electronic health records. First author at CCAI 2026 (IEEE Xplore) and PRICAI 2026 (short paper)."
---

<div class="container">

  <!-- ── Hero ─────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-left">
      <h1 class="hero-name">Zhengrong Jia</h1>
      <p class="hero-slogan">It’s never too late to begin again.</p>
      <p class="hero-opportunity">Seeking MPhil and PhD positions for Fall 2027 entry.</p>
      <div class="hero-roles">
        <div class="hero-role">
          <p class="hero-role-label">MSc Student</p>
          <p class="hero-role-value"><a href="https://www.apu.edu.my/" target="_blank" rel="noopener noreferrer">Asia Pacific University</a> &middot; Aug 2026 – Aug 2027 (expected)</p>
        </div>
        <div class="hero-role">
          <p class="hero-role-label">Young Ambassador &amp; Researcher</p>
          <p class="hero-role-value"><a href="https://aae.com.hk/" target="_blank" rel="noopener noreferrer">Asia AI Education &amp; Future Technology Association</a></p>
        </div>
        <div class="hero-role">
          <p class="hero-role-label">Research Focus</p>
          <p class="hero-role-value">EHR-based Clinical Prediction &middot; Trustworthy Clinical AI &middot; Reproducible Pipelines</p>
        </div>
      </div>
      <div class="hero-links">
        <a href="#" data-mail="zhengrong[dot]jia[dot]academic[at]gmail[dot]com" class="hero-link"><i class="fas fa-envelope"></i> Email</a>
        <a href="/cv/" class="hero-link"><i class="fas fa-file-alt"></i> CV</a>
        <a href="https://scholar.google.com/citations?user=juPceOgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-google-scholar"></i> Google Scholar</a>
        <a href="https://github.com/ZR-JIA" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="https://orcid.org/0009-0007-8829-6713" target="_blank" rel="noopener noreferrer" class="hero-link"><i class="fab fa-orcid"></i> ORCID</a>
        <a href="https://ieeexplore.ieee.org/author/737514430667351" target="_blank" rel="noopener noreferrer" class="hero-link hero-link-more"><i class="ai ai-ieee"></i> IEEE Xplore</a>
        <a href="https://www.scopus.com/authid/detail.uri?authorId=60820100100" target="_blank" rel="noopener noreferrer" class="hero-link hero-link-more"><i class="ai ai-scopus"></i> Scopus</a>
        <a href="https://www.webofscience.com/wos/author/record/RFS-2719-2026" target="_blank" rel="noopener noreferrer" class="hero-link hero-link-more"><i class="ai ai-clarivate"></i> Web of Science</a>
        <a href="https://www.researchgate.net/profile/Zhengrong-Jia-2" target="_blank" rel="noopener noreferrer" class="hero-link hero-link-more"><i class="fab fa-researchgate"></i> ResearchGate</a>
        <a href="https://www.linkedin.com/in/zhengrong-jia-866456374" target="_blank" rel="noopener noreferrer" class="hero-link hero-link-more"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <button type="button" class="hero-link hero-more" aria-expanded="false"><span class="hero-more-label">More</span><i class="fas fa-chevron-down" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="hero-right">
      <img src="/assets/images/avatar.jpg" alt="Zhengrong Jia" class="hero-portrait" width="148" height="148">
    </div>
  </section>

  <!-- ── About ──────────────────────────────────── -->
  <section class="content-section" data-no-reveal>
    <p class="section-label">About</p>
    <div class="philosophy-block">
      <p class="philosophy-text">In critical care, a model failure is not an abstract drop in metrics; it can mean <strong>missing a deteriorating patient</strong>. That reality shapes the problems I work on. My research focuses on deep learning for electronic health records that holds up under messy hospital data, <strong>stays honest about its limits</strong>, and can be <strong>reproduced across cohorts</strong>.</p>
    </div>
  </section>

  <!-- ── Research Interests ─────────────────────── -->
  <section class="content-section" data-no-reveal>
    <p class="section-label">Research Interests</p>
    <div class="interests-grid">
      <div class="interest-card">
        <p class="interest-title">EHR-based Clinical Prediction</p>
        <p class="interest-desc">Deep learning on electronic health records for ICU risk stratification and mortality prediction.</p>
      </div>
      <div class="interest-card">
        <p class="interest-title">Trustworthy Clinical AI</p>
        <p class="interest-desc">Inference-time safeguards against malformed or out-of-range inputs, along with calibration and interpretability methods clinicians can audit.</p>
      </div>
      <div class="interest-card">
        <p class="interest-title">Reproducible Pipelines</p>
        <p class="interest-desc">Multicenter clinical databases, leakage-free cohort construction, and open-source implementations.</p>
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

  <!-- ── GitHub Activity ────────────────────────── -->
  <section class="content-section">
    <p class="section-label">GitHub Activity</p>
    <div class="gh-activity" data-user="ZR-JIA">
      <div class="gh-months" aria-hidden="true"></div>
      <svg class="gh-graph" role="img" aria-label="GitHub contributions over the last year"></svg>
      <div class="gh-foot">
        <p class="gh-total"><a href="https://github.com/ZR-JIA" target="_blank" rel="noopener noreferrer">ZR-JIA on GitHub</a></p>
        <p class="gh-legend" aria-hidden="true">Less <i class="gh-key gh-l0"></i><i class="gh-key gh-l1"></i><i class="gh-key gh-l2"></i><i class="gh-key gh-l3"></i><i class="gh-key gh-l4"></i> More</p>
      </div>
    </div>
  </section>

  <!-- ── News ───────────────────────────────────── -->
  <section class="content-section">
    <p class="section-label">News</p>
    <ul class="news-list" id="news-list" data-collapse-limit="5">
      <li class="news-item">
        <span class="news-date">Nov 16–20, 2026</span>
        <span class="news-text"><strong>Attended <a href="https://2026.pricai.org/" target="_blank" rel="noopener noreferrer">PRICAI 2026</a></strong> in Guangzhou and presented the poster for <em>DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality</em>. <a href="/assets/posters/PRICAI2026/PRICAI2026_DualTowerFT_Poster.pdf" target="_blank" rel="noopener noreferrer">Poster</a> and <a href="/gallery/">photos</a> are now available.</span>
      </li>
      <li class="news-item">
        <span class="news-date">Aug 19, 2026</span>
        <span class="news-text"><strong>Short paper accepted to <a href="https://2026.pricai.org/" target="_blank" rel="noopener noreferrer">PRICAI 2026</a>:</strong> <em>DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality</em>. <a href="/publications/dualtower-ft-pricai/">Details</a>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">Jul 15, 2026</span>
        <span class="news-text">Reviewed four submissions for <a href="https://2026.pricai.org/" target="_blank" rel="noopener noreferrer">PRICAI 2026</a> and was subsequently invited to join its <strong>Program Committee</strong>.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Received the Best Industrial Paper Award and the Best Presentation Award</strong> at <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a> in Nanjing.</span>
      </li>
      <li class="news-item">
        <span class="news-date">May 22–24, 2026</span>
        <span class="news-text"><strong>Attended <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></strong> in Nanjing and gave an oral presentation on <em>Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</em>. <a href="/presentations/">Slides</a> and <a href="/gallery/">photos</a> are now available.</span>
      </li>
      <li class="news-item news-item-extra">
        <span class="news-date">Feb 2, 2026</span>
        <span class="news-text"><strong>Paper accepted to <a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a>:</strong> <em>Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</em>.</span>
      </li>
      <li class="news-item news-item-extra">
        <span class="news-date">Aug 2025</span>
        <span class="news-text">Earned a B.Sc. in Software Engineering from Macau University of Science and Technology.</span>
      </li>
    </ul>
    <div class="news-actions">
      <button type="button" class="btn btn-outline news-toggle" aria-expanded="false" aria-controls="news-list">
        <span class="news-toggle-label">Show all</span><i class="fas fa-chevron-down" aria-hidden="true"></i>
      </button>
    </div>
  </section>

</div>

{%- for pub in pubs limit: 2 %}
{% include cite-source.html publication=pub %}
{%- endfor %}
{% include cite-modal.html %}
<script src="{{ '/assets/js/github-activity.js' | relative_url }}" defer></script>
