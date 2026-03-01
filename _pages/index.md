---
layout: default
permalink: /
title: "Zheng Rong JIA"
---

<div class="container">

  <!-- Row 1: Profile + Stats -->
  <div class="bento-grid">

    <!-- Profile Card -->
    <div class="bento-card bento-span-2">
      <div class="hero-card">
        <div class="hero-avatar">ZR</div>
        <div class="hero-info">
          <h1>Zheng Rong JIA</h1>
          <p class="hero-subtitle">AI Researcher · Incoming MPhil Candidate (2026)</p>
          <p class="hero-bio">
            I specialize in <strong>Clinical AI</strong> and <strong>Deep Learning</strong>, developing trustworthy models for critical healthcare applications. 
            Recently, I developed a novel <strong>Dual-Tower Transformer</strong> for stroke mortality prediction, demonstrating superior performance over neural baselines.
            With a solid foundation in Software Engineering, I am dedicated to bridging the gap between theoretical AI and real-world medical impact.
          </p>
          <div class="social-icons">
            <a href="https://github.com/ZR-JIA" class="social-icon" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/zhengrong-jia-866456374" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://orcid.org/0009-0007-8829-6713" class="social-icon" aria-label="ORCID"><i class="fab fa-orcid"></i></a>
            <a href="mailto:zhengrong.jia.academic@gmail.com" class="social-icon" aria-label="Email"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Card -->
    <div class="bento-card">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--color-accent-soft);color:var(--color-primary);">
          <i class="fas fa-chart-bar"></i>
        </div>
        <span class="bento-card-title">Impact</span>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">1</div>
          <div class="stat-label">Top-Tier Paper</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">0.617</div>
          <div class="stat-label">AUPRC Score</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">+14%</div>
          <div class="stat-label">vs Baselines</div>
        </div>
      </div>
      <a href="https://orcid.org/0009-0007-8829-6713" style="display:inline-flex;align-items:center;gap:6px;font-family:'Inter',sans-serif;font-size:12px;font-weight:500;color:var(--color-primary-light);margin-top:14px;text-decoration:none;">
        <i class="fab fa-orcid" style="font-size:16px;color:#a6ce39;"></i> orcid.org/0009-0007-8829-6713
      </a>
    </div>

    <!-- Tech Stack Card -->
    <div class="bento-card bento-span-2">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-ai-bg);color:var(--tag-ai);">
          <i class="fas fa-code"></i>
        </div>
        <span class="bento-card-title">Technical Arsenal</span>
      </div>
      <div class="tag-cloud">
        {% for skill in site.data.skills %}
          <span class="tag-chip {{ skill.class }}" {% if skill.weight %}style="font-weight:{{ skill.weight }};font-size:{{ skill.size }};"{% endif %}>
            {{ skill.name }}
          </span>
        {% endfor %}
      </div>
      <div style="margin-top:14px;display:flex;gap:16px;flex-wrap:wrap;">
        <span style="font-family:'Inter',sans-serif;font-size:11px;display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--tag-ai);display:inline-block;"></span> AI / ML</span>
        <span style="font-family:'Inter',sans-serif;font-size:11px;display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--tag-data);display:inline-block;"></span> Data</span>
        <span style="font-family:'Inter',sans-serif;font-size:11px;display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--tag-backend);display:inline-block;"></span> Languages</span>
        <span style="font-family:'Inter',sans-serif;font-size:11px;display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--tag-frontend);display:inline-block;"></span> Web</span>
        <span style="font-family:'Inter',sans-serif;font-size:11px;display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--tag-tools);display:inline-block;"></span> Tools</span>
      </div>
    </div>

    <!-- Education Card -->
    <div class="bento-card">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-backend-bg);color:var(--tag-backend);">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <span class="bento-card-title">Education</span>
      </div>
      <div class="edu-item">
        <div class="edu-icon"><i class="fas fa-university"></i></div>
        <div class="edu-details">
          <h3>B.Sc. Software Engineering</h3>
          <p class="edu-school">Macau University of Science and Technology</p>
          <p class="edu-year">Graduated Aug 2025</p>
        </div>
      </div>
    </div>

    <!-- Recent News Card -->
    <div class="bento-card bento-span-2">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-frontend-bg);color:var(--tag-frontend);">
          <i class="fas fa-bolt"></i>
        </div>
        <span class="bento-card-title">Latest Updates</span>
      </div>
      <ul class="news-list">
        <li class="news-item">
          <span class="news-date">2026</span>
          <span class="news-text">Finalizing the open-source release of the <strong>DT-Transformer</strong> framework for reproducible clinical AI research.</span>
        </li>
        <li class="news-item">
          <span class="news-date">2026</span>
          <span class="news-text">Applying for MPhil programmes in Australia (2026–2028), focusing on trustworthy deep learning systems.</span>
        </li>
        <li class="news-item">
          <span class="news-date">2026</span>
          <span class="news-text"><strong>Paper Accepted at CCAI 2026:</strong> <em>"Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework"</em> (Upcoming: May 2026).</span>
        </li>
        <li class="news-item">
          <span class="news-date">2025</span>
          <span class="news-text">Earned B.Sc. in Software Engineering from Macau University of Science and Technology.</span>
        </li>
        <li class="news-item">
          <span class="news-date">2024</span>
          <span class="news-text">Completed high-impact MLE internship at <strong>China Southern Power Grid AI</strong>, achieving a perfect evaluation score.</span>
        </li>
      </ul>
    </div>

    <!-- GitHub Activity Card -->
    <div class="bento-card">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-tools-bg);color:var(--tag-tools);">
          <i class="fab fa-github"></i>
        </div>
        <span class="bento-card-title">Open Source</span>
      </div>
      <div class="github-graph">
        <img src="https://ghchart.rshah.org/1a3a5c/ZR-JIA" alt="GitHub Contribution Graph" />
        <a href="https://github.com/ZR-JIA" class="github-graph-link">
          <i class="fab fa-github"></i> View Profile
        </a>
      </div>
    </div>

    <!-- Featured Publication -->
    <div class="bento-card">
      <div class="project-card">
        <div class="bento-card-header">
          <div class="bento-card-icon" style="background:var(--tag-ai-bg);color:var(--tag-ai);">
            <i class="fas fa-file-alt"></i>
          </div>
          <span class="bento-card-title">Featured Research</span>
        </div>
        <h3>DT-Transformer for Stroke Mortality</h3>
        <p>A novel Dual-Tower Transformer architecture achieving <strong>0.6171 AUPRC</strong> on eICU data, outperforming neural baselines by <strong>14.4%</strong>. Includes an Adaptive Runtime Safeguard for stable inference.</p>
        <div class="project-tags">
          <span class="project-tag">Transformer</span>
          <span class="project-tag">eICU</span>
          <span class="project-tag">Clinical AI</span>
        </div>
        <div class="project-links">
          <a href="/publications/" class="btn btn-primary"><i class="fas fa-arrow-right"></i> Read More</a>
        </div>
      </div>
    </div>

    <!-- Experience Card -->
    <div class="bento-card">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-data-bg);color:var(--tag-data);">
          <i class="fas fa-briefcase"></i>
        </div>
        <span class="bento-card-title">Experience</span>
      </div>
      <div class="edu-item">
        <div class="edu-icon"><i class="fas fa-robot"></i></div>
        <div class="edu-details">
          <h3>MLE Intern</h3>
          <p class="edu-school">China Southern Power Grid AI</p>
          <p class="edu-year">Jul – Aug 2024 · Guangzhou</p>
        </div>
      </div>
    </div>

  </div>
</div>
