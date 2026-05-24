---
layout: default
permalink: /cv/
title: "CV"
description: "Curriculum Vitae of Zheng Rong JIA — AI researcher with expertise in deep learning, clinical AI, and full-stack engineering."
---

<div class="container">
  <div class="page-header">
    <h1>Curriculum Vitae</h1>
    <div class="page-header-actions">
      <a href="/assets/papers/CV_ZhengRong_JIA.pdf" target="_blank" class="btn btn-primary">
        <i class="fas fa-external-link-alt"></i> View PDF
      </a>
      <a href="/assets/papers/CV_ZhengRong_JIA.pdf" download="CV_ZhengRong_JIA.pdf" class="btn btn-outline">
        <i class="fas fa-download"></i> Download
      </a>
    </div>
  </div>

  <div class="page-sections">

    <section class="content-section">
      <p class="section-label">Education</p>
      <div class="cv-entries">
        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">B.Sc. Software Engineering</span>
            <span class="cv-entry-date">2021 – 2025</span>
          </div>
          <p class="cv-entry-org">Macau University of Science and Technology &mdash; Graduated Aug 2025</p>
          <div class="cv-entry-body" style="margin-top:6px;">
            <p>Data Structures &amp; Algorithms · Operating Systems · Computer Networks · Database Systems · Software Architecture &amp; Design Patterns · Machine Learning &amp; AI Fundamentals · Full-Stack Web Development · Cloud &amp; Distributed Systems</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Awards & Honors</p>
      <div class="cv-entries">
        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Best Industrial Paper Award</span>
            <span class="cv-entry-date">May 2026</span>
          </div>
          <p class="cv-entry-org"><a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a> &mdash; The 6th International Conference on Computer Communication and Artificial Intelligence, Nanjing</p>
        </div>
        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Best Presentation Award</span>
            <span class="cv-entry-date">May 2026</span>
          </div>
          <p class="cv-entry-org"><a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a> &mdash; The 6th International Conference on Computer Communication and Artificial Intelligence, Nanjing</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Research Experience</p>
      <div class="cv-entries">
        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Independent Researcher &mdash; Clinical AI</span>
            <span class="cv-entry-date">Aug 2025 – Present</span>
          </div>
          <p class="cv-entry-meta">Deep Learning on Tabular EHR Data · Stroke Mortality Prediction</p>
          <div class="cv-entry-body">
            <p>Designed and implemented a <strong>Dual-Tower Transformer (DT-Transformer)</strong> for in-hospital stroke mortality prediction using the multicenter eICU Collaborative Research Database. The architecture decouples categorical demographics from numerical vitals into separate encoding towers, achieving an <strong>AUPRC of 0.6171</strong> (std 0.006) — a <strong>14.4% relative improvement</strong> over the strongest neural baseline. An <strong>Adaptive Runtime Safeguard</strong> was integrated for out-of-distribution detection at inference time.</p>
            <ul>
              <li>Outperformed strongest neural baseline NN (AUPRC 0.5394) and Standard Transformer (0.5279); competitive with XGBoost (0.6467)</li>
              <li>Implemented attention map visualization for clinical interpretability of feature importance</li>
              <li>Paper accepted and presented at <strong>CCAI 2026</strong> (The 6th International Conference on Computer Communication and Artificial Intelligence, May 24, 2026)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Professional Experience</p>
      <div class="cv-entries">
        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Machine Learning Engineer Intern</span>
            <span class="cv-entry-date">Jul – Aug 2024</span>
          </div>
          <p class="cv-entry-org">China Southern Power Grid AI Technology Co., Ltd. &mdash; Guangzhou</p>
          <p class="cv-entry-meta">Python · PyTorch · YOLOv8 · OpenCV · Pandas · NumPy · Linux</p>
          <div class="cv-entry-body">
            <ul>
              <li>Developed a computer vision pipeline for power inspection robots to automate circuit breaker state recognition, replacing manual visual inspection on high-voltage lines</li>
              <li>Fine-tuned YOLOv8 on domain-specific power equipment imagery, achieving reliable detection across varying lighting and weather conditions</li>
              <li>Built and maintained a <strong>60 GB image dataset</strong> across Guangdong Province substations; standardized annotation formats and automated ingestion scripts</li>
              <li>Conducted fault-type EDA (Pandas / Matplotlib) to guide class-balanced sampling strategies</li>
              <li><strong>Outcome:</strong> Written commendation from supervising engineer; earned 100/100 on formal internship evaluation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Engineering Projects</p>
      <div class="cv-entries">

        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">DT-Transformer &mdash; Clinical AI Training Pipeline</span>
            <span class="cv-entry-date">2025 – Present</span>
          </div>
          <p class="cv-entry-meta">Python · PyTorch · Scikit-learn · Pandas · Docker · Linux</p>
          <div class="cv-entry-body">
            <ul>
              <li>Engineered an end-to-end ML pipeline from raw eICU CSV ingestion to model serialization, handling 200k+ patient records with reproducible preprocessing via custom DataLoader classes</li>
              <li>Modular architecture separating data, model, training, and evaluation layers for maintainability</li>
              <li>Stratified 5-fold cross-validation harness with automated metric logging (AUROC, AUPRC, F1) across all baselines</li>
              <li>Containerized full training environment with Docker; open-source release in preparation</li>
            </ul>
          </div>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Time-Series Prediction System &mdash; Undergraduate AI Project</span>
            <span class="cv-entry-date">2023 – 2024</span>
          </div>
          <p class="cv-entry-meta">Python · PyTorch · LSTM · GRU · MLP · Scikit-learn · Pandas · NumPy · Matplotlib</p>
          <div class="cv-entry-body">
            <ul>
              <li>Designed and trained LSTM, GRU, and vanilla RNN models; best LSTM configuration achieved <strong>1.42% MAPE</strong> on the held-out test set</li>
              <li>Built full preprocessing pipeline: missing-value imputation, normalization, sliding-window construction, leakage-free splits</li>
              <li>Benchmarked against MLP, Linear Regression, and XGBoost baselines with publication-quality visualizations (Matplotlib / Seaborn)</li>
              <li>Implemented early stopping, learning-rate scheduling, and gradient clipping to stabilize RNN training</li>
            </ul>
          </div>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">AI-Integrated Web Platform &mdash; B.Sc. Capstone</span>
            <span class="cv-entry-date">2024 – 2025</span>
          </div>
          <p class="cv-entry-meta">Vue.js · Java (Spring Boot) · REST API · SQL · Python · Scikit-learn · Docker</p>
          <div class="cv-entry-body">
            <ul>
              <li>Built a full-stack system with Vue.js SPA frontend, Java Spring Boot RESTful backend, and embedded Python ML microservice via REST</li>
              <li>Integrated trained Scikit-learn classification model for on-demand inference without re-training overhead</li>
              <li>JWT-based auth with role-based access control; deployed via Docker Compose on Linux server</li>
            </ul>
          </div>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <span class="cv-entry-title">Personal Academic Website &mdash; <a href="https://github.com/ZR-JIA" style="font-weight:500;font-size:13px;">github.com/ZR-JIA</a></span>
            <span class="cv-entry-date">2025 – Present</span>
          </div>
          <p class="cv-entry-meta">Jekyll · Liquid · CSS Custom Properties · JavaScript · GitHub Pages</p>
          <div class="cv-entry-body">
            <ul>
              <li>Custom responsive static site from scratch — zero third-party UI frameworks</li>
              <li>Component-based layout via Jekyll includes, Liquid templating, and CSS custom properties (design tokens)</li>
              <li>Automated deployment via GitHub Pages CI/CD; SEO metadata, structured data, sitemap, robots.txt</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Technical Skills</p>
      <div class="skills-table">
        <div class="skill-row">
          <span class="skill-category">Languages</span>
          <span class="skill-items">Python · Java · C / C++ · SQL · JavaScript</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">ML Frameworks</span>
          <span class="skill-items">PyTorch · Scikit-learn · XGBoost · YOLOv8 · NumPy · Pandas</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Architectures</span>
          <span class="skill-items">Transformer · LSTM · GRU · MLP · CNN (YOLO)</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Data & Viz</span>
          <span class="skill-items">Matplotlib · Seaborn · OpenCV</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">Web & Systems</span>
          <span class="skill-items">Vue.js · Spring Boot · REST API · HTML / CSS</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">DevOps & Tools</span>
          <span class="skill-items">Git · Docker · Linux · LaTeX</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Research Interests</p>
      <ul class="research-list">
        <li class="research-item">
          <p class="research-name">Clinical Predictive Modeling</p>
          <p class="research-desc">Transformer-based temporal modeling on longitudinal EHR data; early warning systems for ICU critical events with missing-data-aware architectures, building on prior work in stroke risk prediction (CCAI 2026).</p>
        </li>
        <li class="research-item">
          <p class="research-name">Medical Image Analysis</p>
          <p class="research-desc">Vision Transformer and hybrid CNN-ViT architectures for brain MRI segmentation; semi-supervised learning strategies to address annotation scarcity in radiology AI, with focus on multi-class lesion delineation.</p>
        </li>
        <li class="research-item">
          <p class="research-name">Explainable AI for Healthcare</p>
          <p class="research-desc">Faithfulness evaluation of attention-based saliency methods for deep radiology models; human-in-the-loop clinical validation frameworks bridging model accuracy and clinician trust in high-stakes diagnosis.</p>
        </li>
      </ul>
    </section>

    <section class="content-section">
      <p class="section-label">Languages</p>
      <div class="skills-table">
        <div class="skill-row">
          <span class="skill-category">Mandarin</span>
          <span class="skill-items">Fluent (Native)</span>
        </div>
        <div class="skill-row">
          <span class="skill-category">English</span>
          <span class="skill-items">Intermediate &mdash; academic reading &amp; writing proficient</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Contact</p>
      <div class="skills-table">
        <div class="skill-row">
          <span class="skill-category">Email</span>
          <span class="skill-items"><a href="mailto:zhengrong.jia.academic@gmail.com">zhengrong.jia.academic@gmail.com</a></span>
        </div>
        <div class="skill-row">
          <span class="skill-category">GitHub</span>
          <span class="skill-items"><a href="https://github.com/ZR-JIA" target="_blank" rel="noopener noreferrer">ZR-JIA</a></span>
        </div>
        <div class="skill-row">
          <span class="skill-category">LinkedIn</span>
          <span class="skill-items"><a href="https://www.linkedin.com/in/zhengrong-jia-866456374" target="_blank" rel="noopener noreferrer">Zheng Rong JIA</a></span>
        </div>
        <div class="skill-row">
          <span class="skill-category">ORCID</span>
          <span class="skill-items"><a href="https://orcid.org/0009-0007-8829-6713" target="_blank" rel="noopener noreferrer">0009-0007-8829-6713</a></span>
        </div>
      </div>
    </section>

  </div>
</div>
