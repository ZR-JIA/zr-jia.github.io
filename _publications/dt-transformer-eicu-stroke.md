---
title: "Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework"
description: "DT-Transformer, a dual-tower Transformer for stroke mortality prediction on the multicenter eICU database. Best Industrial Paper Award and Best Presentation Award at CCAI 2026."
authors: "Zhengrong Jia*, Kwong-Cheong Wong*"
authors_html: "<strong>Zhengrong Jia</strong><sup>*</sup>, Kwong-Cheong Wong<sup>*</sup>"
venue: "2026 6th International Conference on Computer Communication and Artificial Intelligence (CCAI)"
venue_short: "CCAI 2026"
venue_card: "2026 6th International Conference on Computer Communication and Artificial Intelligence (CCAI) &middot; Nanjing, May 2026"
location: "Nanjing, China"
date: 2026-05-22
date_display: "May 22&ndash;24, 2026"
pages: "76&ndash;81"
doi: "10.1109/CCAI69603.2026.11641950"
url_official: "https://ieeexplore.ieee.org/document/11641950/"
awards:
  - "Best Industrial Paper Award"
  - "Best Presentation Award"
links:
  - { label: "IEEE Xplore",   icon: "fas fa-external-link-alt",  url: "https://ieeexplore.ieee.org/document/11641950/", primary: true }
  - { label: "Code",          icon: "fab fa-github",             url: "https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke" }
  - { label: "Data Pipeline", icon: "fab fa-github",             url: "https://github.com/ZR-JIA/Data-Preprocessing-for-eICU" }
  - { label: "Slides",        icon: "fas fa-file-powerpoint",    url: "/slides/" }
citation_ieee: >-
  Z. Jia and K.-C. Wong, "Deep Learning for Stroke Mortality Prediction in eICU:
  A Dual-Tower Transformer Framework," 2026 6th International Conference on Computer
  Communication and Artificial Intelligence (CCAI), Nanjing, China, 2026, pp. 76-81,
  doi: 10.1109/CCAI69603.2026.11641950.
citation_bibtex: |
  @INPROCEEDINGS{11641950,
    author={Jia, Zhengrong and Wong, Kwong-Cheong},
    booktitle={2026 6th International Conference on Computer Communication and Artificial Intelligence (CCAI)},
    title={Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework},
    year={2026},
    volume={},
    number={},
    pages={76-81},
    doi={10.1109/CCAI69603.2026.11641950}}
citation_ris: |
  TY  - CONF
  TI  - Deep Learning for Stroke Mortality Prediction in eICU: A Dual-Tower Transformer Framework
  T2  - 2026 6th International Conference on Computer Communication and Artificial Intelligence (CCAI)
  SP  - 76
  EP  - 81
  AU  - Z. Jia
  AU  - K. -C. Wong
  PY  - 2026
  DO  - 10.1109/CCAI69603.2026.11641950
  JO  - 2026 6th International Conference on Computer Communication and Artificial Intelligence (CCAI)
  Y1  - 22-24 May 2026
  ER  -
---

<section class="content-section">
  <p class="section-label">Abstract</p>
  <div class="abstract-block">
    <p>We propose a novel Dual-Tower Transformer (DT-Transformer) for stroke mortality prediction on the multicenter eICU Collaborative Research Database. The decoupled architecture encodes categorical features with learnable embeddings and numerical vitals with a Transformer encoder built on multi-head self-attention, then fuses the two representations for final prediction. The model achieves an AUPRC of 0.6171 &mdash; a 14.4% relative improvement over the strongest neural baseline. An Adaptive Runtime Safeguard keeps out-of-range categorical indices from reaching the embedding lookup.</p>
  </div>
</section>

<section class="content-section">
  <p class="section-label">Post-publication Notes</p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
    The paper's descriptions differ from the archived implementation in a few places: which features the categorical tower embeds, the feature counts, the scope of the runtime safeguard, and Figure 4, which was included in error and shows illustrative values rather than attention weights from the trained model. The reported metrics are those of the original pipeline and are unchanged. Details: <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke#corrections-to-the-ccai-2026-paper-october-2026" target="_blank" rel="noopener noreferrer">model repository corrections</a> &middot; <a href="https://github.com/ZR-JIA/Data-Preprocessing-for-eICU/blob/fix/AUDIT.md" target="_blank" rel="noopener noreferrer">preprocessing audit</a>.
  </p>
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
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">Neural model metrics are aggregated over 5 random seeds on a fixed 70/10/20 split, stratified by outcome and keyed on the ICU stay (mean &plusmn; std). XGBoost and Random Forest use single-run evaluation.</p>
</section>

<section class="content-section">
  <p class="section-label">Architecture &amp; Methodology</p>
  <ul style="font-size:14px;color:var(--color-text-secondary);padding-left:20px;line-height:1.9;">
    <li><strong>Dual-Tower Design</strong> &mdash; Separate encoding pathways for categorical (demographics) and numerical (vitals) features</li>
    <li><strong>Self-Attention (Numerical Tower)</strong> &mdash; A two-layer Transformer encoder models interactions among the 91 numerical inputs; the categorical tower uses learnable embeddings</li>
    <li><strong>Late Fusion</strong> &mdash; Tower outputs concatenated before classification head</li>
    <li><strong>Adaptive Runtime Safeguard</strong> &mdash; Range checks and index clamping for the categorical inputs, so that out-of-range values cannot reach the embedding lookup</li>
  </ul>
  <p style="font-size:13px;color:var(--color-text-tertiary);margin-top:14px;">Stack: Python &middot; PyTorch &middot; Scikit-learn &middot; XGBoost &middot; Pandas &middot; NumPy</p>
</section>

<section class="content-section">
  <p class="section-label">Dataset &amp; Reproducibility</p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;">
    <strong>eICU Collaborative Research Database</strong> &mdash; Multicenter critical care database (200,859 ICU stays across 208 hospitals). Stroke cohort extracted with ICD-9 codes 430, 431, 433, 434, 436, and 437, restricted to the first 72 hours of each ICU stay. Features: 94 inputs, comprising demographics, the hospital identifier, admission height and weight, and aggregated vital signs and laboratory values. Access via <a href="https://eicu-crd.mit.edu/" target="_blank" rel="noopener noreferrer">PhysioNet credentialed access</a>.
  </p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
    Open-source implementation is split across two repositories. Model training &mdash; <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke" target="_blank" rel="noopener noreferrer">Dual-Tower-Transformer-eICU-Stroke</a>: PyTorch model, unified training engine covering seven model types, multi-seed experiment runner, Optuna hyperparameter search, and SHAP/LIME explainability. Data pipeline &mdash; <a href="https://github.com/ZR-JIA/Data-Preprocessing-for-eICU" target="_blank" rel="noopener noreferrer">Data-Preprocessing-for-eICU</a>: raw eICU extraction, ICD-9 stroke cohort selection, first-72-hour aggregation, and stratified train/validation/test splits (by ICU stay in the published version, by patient on the corrected <code>fix</code> branch).
  </p>
</section>
