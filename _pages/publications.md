---
layout: default
permalink: /publications/
title: "Publications"
description: "Research publications by Zheng Rong JIA, including the DT-Transformer paper on stroke mortality prediction accepted at CCAI 2026."
---

<div class="container">
  <div class="page-header">
    <h1>Publications & Research</h1>
  </div>

  <div class="page-sections">

    <section class="content-section">
      <p class="section-label">Conference Paper · CCAI 2026</p>

      <p class="pub-detail-title">Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework</p>
      <p class="pub-detail-authors"><strong>Zhengrong Jia*</strong>, Kwong-Cheong Wong* &nbsp;<span style="display:inline-block;background:#f0c040;color:#5a3e00;font-size:12px;font-weight:700;padding:2px 8px;border-radius:3px;vertical-align:middle;">&#9733; Best Industrial Paper</span> <span style="display:inline-block;background:#f0c040;color:#5a3e00;font-size:12px;font-weight:700;padding:2px 8px;border-radius:3px;vertical-align:middle;">&#9733; Best Presentation</span></p>
      <p class="pub-detail-venue">The 6th International Conference on Computer Communication and Artificial Intelligence (CCAI), 2026</p>

      <div class="pub-detail-actions">
        <a href="https://drive.google.com/file/d/1ql4aXufCbLLJQqCM2kk7jSLS4_68LIUR/view?usp=sharing" class="btn btn-primary" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i> PDF (Preprint)</a>
        <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke" class="btn btn-outline" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>
        <a href="/slides/" class="btn btn-outline"><i class="fas fa-file-powerpoint"></i> Slides</a>
        <a href="https://orcid.org/0009-0007-8829-6713" class="btn btn-outline" target="_blank" rel="noopener noreferrer"><i class="fab fa-orcid"></i> ORCID</a>
        <a href="https://scholar.google.com/citations?user=juPceOgAAAAJ&hl=en" class="btn btn-outline" target="_blank" rel="noopener noreferrer"><i class="fas fa-graduation-cap"></i> Scholar</a>
      </div>

      <div class="abstract-block">
        <p>We propose a novel Dual-Tower Transformer (DT-Transformer) for stroke mortality prediction on the multicenter eICU Collaborative Research Database. The decoupled architecture processes categorical demographics and numerical vitals through separate tower pathways, each equipped with Self-Attention, before fusing representations for final prediction. The model achieves an AUPRC of 0.6171 &mdash; a 14.4% improvement over the strongest neural baseline. An Adaptive Runtime Safeguard is integrated for inference stability against physiological outliers, and attention map visualizations provide clinical interpretability.</p>
      </div>
    </section>

    <section class="content-section">
      <p class="section-label">Baseline Comparison</p>
      <table class="pub-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>AUROC</th>
            <th>AUPRC</th>
          </tr>
        </thead>
        <tbody>
          <tr class="pub-table-highlight">
            <td>DT-Transformer (ours)</td>
            <td>0.8848 &plusmn; 0.0034</td>
            <td>0.6171 &plusmn; 0.0058</td>
          </tr>
          <tr>
            <td>XGBoost</td>
            <td>0.8908</td>
            <td>0.6467</td>
          </tr>
          <tr>
            <td>Random Forest</td>
            <td>0.8806</td>
            <td>0.6236</td>
          </tr>
          <tr>
            <td>Neural Network</td>
            <td>0.8582 &plusmn; 0.0018</td>
            <td>0.5394 &plusmn; 0.0054</td>
          </tr>
          <tr>
            <td>Standard Transformer</td>
            <td>0.8457 &plusmn; 0.0129</td>
            <td>0.5279 &plusmn; 0.0195</td>
          </tr>
          <tr>
            <td>Standard MLP</td>
            <td>0.8534 &plusmn; 0.0058</td>
            <td>0.5170 &plusmn; 0.0081</td>
          </tr>
        </tbody>
      </table>
      <p style="font-family:'Inter',sans-serif;font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">All reported metrics use 5-fold stratified cross-validation. XGBoost and Random Forest use single-run evaluation.</p>
    </section>

    <section class="content-section">
      <p class="section-label">Architecture & Methodology</p>
      <ul style="font-size:14px;color:var(--color-text-secondary);padding-left:20px;line-height:1.9;">
        <li><strong>Dual-Tower Design</strong> &mdash; Separate encoding pathways for categorical (demographics) and numerical (vitals) features</li>
        <li><strong>Self-Attention Layers</strong> &mdash; Each tower applies multi-head Self-Attention for intra-modality feature interaction</li>
        <li><strong>Late Fusion</strong> &mdash; Tower outputs concatenated before classification head</li>
        <li><strong>Adaptive Runtime Safeguard</strong> &mdash; Detects out-of-distribution inputs at inference time for clinical safety</li>
        <li><strong>Attention Visualization</strong> &mdash; Heatmaps over input features for clinical interpretability</li>
      </ul>
      <p style="font-family:'Inter',sans-serif;font-size:13px;color:var(--color-text-tertiary);margin-top:14px;">Stack: Python · PyTorch · Scikit-learn · XGBoost · Pandas · NumPy</p>
    </section>

    <section class="content-section">
      <p class="section-label">Dataset & Reproducibility</p>
      <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;">
        <strong>eICU Collaborative Research Database</strong> &mdash; Multicenter critical care database (200,859 admissions, 208 hospitals). Stroke cohort extracted with ICD-9 codes 430&ndash;438. Features: demographics, vitals, lab values, GCS scores. Access via <a href="https://eicu-crd.mit.edu/" target="_blank" rel="noopener noreferrer">PhysioNet credentialed access</a>.
      </p>
      <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
        Open-source implementation at <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke" target="_blank" rel="noopener noreferrer">github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke</a>. Repository includes PyTorch model, data preprocessing pipeline, 5-fold cross-validation scripts, and attention visualization tools.
      </p>
    </section>

    <section class="content-section">
      <p class="section-label">How to Cite</p>
      <div class="code-block"><pre>@inproceedings{jia2026dttransformer,
  title     = {Deep Learning for Stroke Mortality Prediction
               in eICU: A Dual-Tower Transformer Framework},
  author    = {Jia, Zhengrong and Wong, Kwong-Cheong},
  booktitle = {Proceedings of the 6th International Conference on
               Computer Communication and Artificial Intelligence (CCAI)},
  year      = {2026},
  note      = {Accepted Feb 2, 2026; Presented at CCAI 2026, May 24, 2026}
}</pre></div>
    </section>

  </div>
</div>
