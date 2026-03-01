---
layout: default
permalink: /publications/
title: "Publications"
---

<div class="container">
  <div class="page-header">
    <h1>Publications & Research</h1>
  </div>

  <div class="bento-grid">

    <!-- Paper Card: Citation & Abstract -->
    <div class="bento-card bento-span-3">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-ai-bg);color:var(--tag-ai);">
          <i class="fas fa-book"></i>
        </div>
        <span class="bento-card-title">Conference Paper &middot; CCAI 2026</span>
      </div>

      <h2 style="font-size:20px;margin-bottom:8px;color:var(--color-text);">Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</h2>

      <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.5;margin-bottom:4px;">
        <strong>Zhengrong Jia*</strong>, Kwong-Cheong Wong*
      </p>
      <p style="font-size:14px;color:var(--color-text-tertiary);font-style:italic;margin-bottom:16px;">
        The 6th International Conference on Computer Communication and Artificial Intelligence (CCAI), 2026
      </p>

      <div style="background:var(--color-bg);border-radius:var(--radius-sm);padding:16px 20px;margin-bottom:16px;">
        <p style="font-size:13px;font-family:'Inter',sans-serif;font-weight:600;color:var(--color-primary);margin-bottom:6px;">Abstract</p>
        <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.7;">
          We propose a novel Dual-Tower Transformer (DT-Transformer) for stroke mortality prediction on the multicenter eICU Collaborative Research Database. The decoupled architecture processes categorical demographics and numerical vitals through separate tower pathways, each equipped with Self-Attention, before fusing representations for final prediction. The model achieves an AUPRC of 0.6171 &mdash; a 14.4% improvement over the strongest neural baseline. An Adaptive Runtime Safeguard is integrated for inference stability against physiological outliers, and attention map visualizations provide clinical interpretability.
        </p>
      </div>

      <div class="pub-links" style="flex-wrap:wrap;">
        <a href="#" class="btn btn-outline"><i class="fas fa-file-pdf"></i> Preprint (coming soon)</a>
        <a href="https://github.com/ZR-JIA" class="btn btn-outline"><i class="fab fa-github"></i> Code (coming soon)</a>
        <a href="/slides/" class="btn btn-outline"><i class="fas fa-file-powerpoint"></i> Slides</a>
        <a href="https://orcid.org/0009-0007-8829-6713" class="btn btn-outline"><i class="fab fa-orcid"></i> ORCID</a>
        <a href="https://scholar.google.com" class="btn btn-outline"><i class="fas fa-graduation-cap"></i> Google Scholar</a>
      </div>
    </div>

    <!-- Key Results Card -->
    <div class="bento-card">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--color-accent-soft);color:var(--color-primary);">
          <i class="fas fa-chart-bar"></i>
        </div>
        <span class="bento-card-title">Key Results</span>
      </div>
      <div class="stats-grid" style="grid-template-columns:1fr;gap:20px;text-align:left;">
        <div class="stat-item" style="text-align:center;">
          <div class="stat-number">0.6171</div>
          <div class="stat-label">AUPRC (std 0.006)</div>
        </div>
        <div class="stat-item" style="text-align:center;">
          <div class="stat-number">14.4%</div>
          <div class="stat-label">vs Strongest Neural Baseline</div>
        </div>
        <div class="stat-item" style="text-align:center;">
          <div class="stat-number">5-Fold</div>
          <div class="stat-label">Cross-Validation</div>
        </div>
      </div>
    </div>

    <!-- Architecture & Methodology Card -->
    <div class="bento-card bento-span-2">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-tools-bg);color:var(--tag-tools);">
          <i class="fas fa-project-diagram"></i>
        </div>
        <span class="bento-card-title">Architecture & Methodology</span>
      </div>
      <ul style="font-size:14px;color:var(--color-text-secondary);padding-left:20px;line-height:2;">
        <li><strong>Dual-Tower Design</strong> &mdash; Separate encoding pathways for categorical (demographics) and numerical (vitals) features</li>
        <li><strong>Self-Attention Layers</strong> &mdash; Each tower applies multi-head Self-Attention for intra-modality feature interaction</li>
        <li><strong>Late Fusion</strong> &mdash; Tower outputs concatenated before classification head</li>
        <li><strong>Adaptive Runtime Safeguard</strong> &mdash; Detects out-of-distribution inputs at inference time for clinical safety</li>
        <li><strong>Attention Visualization</strong> &mdash; Heatmaps over input features for clinical interpretability</li>
      </ul>
      <div class="project-tags" style="margin-top:16px;">
        <span class="project-tag">Python</span>
        <span class="project-tag">Transformer</span>
        <span class="project-tag">Self-Attention</span>
        <span class="project-tag">eICU</span>
        <span class="project-tag">XGBoost</span>
        <span class="project-tag">PyTorch</span>
        <span class="project-tag">Scikit-learn</span>
      </div>
    </div>

    <!-- Dataset & Reproducibility Card -->
    <div class="bento-card bento-span-3">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-backend-bg);color:var(--tag-backend);">
          <i class="fas fa-database"></i>
        </div>
        <span class="bento-card-title">Dataset & Reproducibility</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <div>
          <h4 style="font-family:'Inter',sans-serif;font-size:14px;color:var(--color-primary);margin-bottom:8px;"><i class="fas fa-database" style="margin-right:6px;"></i> eICU Collaborative Research Database</h4>
          <ul style="font-size:13px;color:var(--color-text-secondary);padding-left:18px;line-height:1.8;">
            <li>Multicenter critical care database (200,859 admissions, 208 hospitals)</li>
            <li>Stroke cohort extracted with ICD-9 codes 430–438</li>
            <li>Features: demographics, vitals, lab values, GCS scores</li>
            <li>Access via <a href="https://eicu-crd.mit.edu/" style="color:var(--color-primary-light);">PhysioNet credentialed access</a></li>
          </ul>
        </div>
        <div>
          <h4 style="font-family:'Inter',sans-serif;font-size:14px;color:var(--color-primary);margin-bottom:8px;"><i class="fab fa-github" style="margin-right:6px;"></i> Code Repository</h4>
          <p style="font-size:13px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:8px;">
            Source code, training scripts, and evaluation pipeline will be released upon publication. Repository will include:
          </p>
          <ul style="font-size:13px;color:var(--color-text-secondary);padding-left:18px;line-height:1.8;">
            <li>PyTorch model implementation</li>
            <li>Data preprocessing pipeline</li>
            <li>5-fold cross-validation scripts</li>
            <li>Attention visualization tools</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- BibTeX Citation Card -->
    <div class="bento-card bento-span-3">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--color-accent-soft);color:var(--color-primary);">
          <i class="fas fa-quote-left"></i>
        </div>
        <span class="bento-card-title">How to Cite</span>
      </div>
      <p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:12px;">If you find this work useful, please cite:</p>
      <div style="background:var(--color-bg);border-radius:var(--radius-sm);padding:16px 20px;font-family:'Courier New',monospace;font-size:13px;line-height:1.7;color:var(--color-text-secondary);overflow-x:auto;">
        <pre style="margin:0;white-space:pre-wrap;">@inproceedings{jia2026dttransformer,
  title     = {Deep Learning for Stroke Mortality Prediction
               in eICU: A Dual-Tower Transformer Framework},
  author    = {Jia, Zhengrong and Wong, Kwong-Cheong},
  booktitle = {Proceedings of the 6th International Conference on
               Computer Communication and Artificial Intelligence (CCAI)},
  year      = {2026},
  note      = {Accepted. To appear in May 2026}
}</pre>
      </div>
    </div>

    <!-- Baselines Comparison Card -->
    <div class="bento-card bento-span-3">
      <div class="bento-card-header">
        <div class="bento-card-icon" style="background:var(--tag-data-bg);color:var(--tag-data);">
          <i class="fas fa-table"></i>
        </div>
        <span class="bento-card-title">Baseline Comparison</span>
      </div>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:2px solid var(--color-border);">
              <th style="text-align:left;padding:10px 14px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;">Model</th>
              <th style="text-align:center;padding:10px 14px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;">AUROC</th>
              <th style="text-align:center;padding:10px 14px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;">AUPRC</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--color-border);background:var(--color-accent-soft);">
              <td style="padding:10px 14px;font-weight:600;color:var(--color-primary);"><i class="fas fa-star" style="color:var(--color-accent);margin-right:6px;"></i>DT-Transformer</td>
              <td style="text-align:center;padding:10px 14px;font-weight:600;color:var(--color-primary);">0.8848 &plusmn; 0.0034</td>
              <td style="text-align:center;padding:10px 14px;font-weight:600;color:var(--color-primary);">0.6171 &plusmn; 0.0058</td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-border);">
              <td style="padding:10px 14px;color:var(--color-text-secondary);">XGBoost</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.8908</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.6467</td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-border);">
              <td style="padding:10px 14px;color:var(--color-text-secondary);">Random Forest</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.8806</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.6236</td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-border);">
              <td style="padding:10px 14px;color:var(--color-text-secondary);">NN (Neural Network)</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.8582 &plusmn; 0.0018</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.5394 &plusmn; 0.0054</td>
            </tr>
            <tr style="border-bottom:1px solid var(--color-border);">
              <td style="padding:10px 14px;color:var(--color-text-secondary);">Standard Transformer</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.8457 &plusmn; 0.0129</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.5279 &plusmn; 0.0195</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;color:var(--color-text-secondary);">Standard MLP</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.8534 &plusmn; 0.0058</td>
              <td style="text-align:center;padding:10px 14px;color:var(--color-text-secondary);">0.5170 &plusmn; 0.0081</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</div>
