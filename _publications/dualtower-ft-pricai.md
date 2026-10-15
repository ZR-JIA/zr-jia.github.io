---
title: "DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality"
description: "DualTower-FT, a deep tabular model with an Adaptive Runtime Safeguard for ICU stroke mortality prediction. Accepted as a short paper at PRICAI 2026."
authors: "Zhengrong Jia*, Kwong-Cheong Wong*"
authors_html: "<strong>Zhengrong Jia</strong><sup>*</sup>, Kwong-Cheong Wong<sup>*</sup>"
venue: "The 23rd Pacific Rim International Conference on Artificial Intelligence (PRICAI 2026)"
venue_short: "PRICAI 2026"
venue_card: "The 23rd Pacific Rim International Conference on Artificial Intelligence &middot; Guangzhou, November 2026"
location: "Guangzhou, China"
status: "Accepted &middot; Short Paper"
date: 2026-11-16
date_display: "November 16&ndash;20, 2026"
links:
  - { label: "Code", icon: "fab fa-github", url: "https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke-FT", primary: true }

# Accepted, not yet published. The citations below are written by hand and
# marked "to be published"; replace all three with Springer's export, and add
# pages, doi and url_official, once the LNAI volume appears. Add the paper to
# `links` (first, primary: true) when it can be released.
citation_ieee: >-
  Z. Jia and K.-C. Wong, "DualTower-FT with an Adaptive Runtime Safeguard: A Deep
  Tabular Approach for ICU Stroke Mortality," in Proc. 23rd Pacific Rim Int. Conf.
  Artif. Intell. (PRICAI 2026), Guangzhou, China, Nov. 2026, to be published.
citation_bibtex: |
  @INPROCEEDINGS{jia2026dualtowerft,
    author={Jia, Zhengrong and Wong, Kwong-Cheong},
    booktitle={Proceedings of the 23rd Pacific Rim International Conference on Artificial Intelligence (PRICAI 2026)},
    title={{DualTower-FT} with an Adaptive Runtime Safeguard: A Deep Tabular Approach for {ICU} Stroke Mortality},
    series={Lecture Notes in Artificial Intelligence},
    publisher={Springer},
    year={2026},
    note={Accepted, to be published}}
citation_ris: |
  TY  - CONF
  TI  - DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality
  T2  - Proceedings of the 23rd Pacific Rim International Conference on Artificial Intelligence (PRICAI 2026)
  T3  - Lecture Notes in Artificial Intelligence
  AU  - Jia, Zhengrong
  AU  - Wong, Kwong-Cheong
  PB  - Springer
  PY  - 2026
  N1  - Accepted, to be published
  ER  -
---

<section class="content-section">
  <p class="section-label">Status</p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
    Accepted as a short paper at <strong>PRICAI 2026</strong>, the 23rd Pacific Rim International Conference on Artificial Intelligence (CORE Rank B), to be held in Guangzhou, China, November 16&ndash;20, 2026. The proceedings will be published by Springer in the Lecture Notes in Artificial Intelligence (LNAI) series. The code is linked above; the paper will be linked here once it is available.
  </p>
</section>

<section class="content-section">
  <p class="section-label">Overview</p>
  <div class="abstract-block">
    <p>DualTower-FT extends the Dual-Tower Transformer of our <a href="/publications/dt-transformer-eicu-stroke/">CCAI 2026 paper</a> for in-hospital mortality prediction in ICU stroke patients. It changes two things. The numerical tower now aggregates its tokens through an FT-Transformer-style [CLS] token instead of mean pooling, and the Adaptive Runtime Safeguard moves into the model's forward pass, so that NaN or infinite values, out-of-range categorical indices and numerical extremes cannot crash inference. On 11,187 stroke patients from 176 eICU hospitals, DualTower-FT reaches an AUPRC of 0.6247 &plusmn; 0.0015 over five seeds on the held-out test cohort, the highest among the deep learning models compared, while XGBoost keeps the overall lead (0.6467). The paper also reports a negative result: none of the MIMIC-IV transfer strategies tested improved on training with eICU alone.</p>
  </div>
</section>

<section class="content-section">
  <p class="section-label">Model Comparison</p>
  <table class="pub-table">
    <thead>
      <tr>
        <th>Model</th>
        <th>AUPRC</th>
      </tr>
    </thead>
    <tbody>
      <tr class="pub-table-highlight">
        <td>DualTower-FT (ours)</td>
        <td>0.6247 &plusmn; 0.0015</td>
      </tr>
      <tr>
        <td>XGBoost</td>
        <td>0.6467</td>
      </tr>
      <tr>
        <td>Random Forest</td>
        <td>0.6236</td>
      </tr>
      <tr>
        <td>Dual-Tower Transformer (CCAI 2026)</td>
        <td>0.6171 &plusmn; 0.0058</td>
      </tr>
      <tr>
        <td>Neural Network</td>
        <td>0.5394 &plusmn; 0.0054</td>
      </tr>
      <tr>
        <td>Standard Transformer</td>
        <td>0.5279 &plusmn; 0.0195</td>
      </tr>
      <tr>
        <td>Standard MLP</td>
        <td>0.5170 &plusmn; 0.0081</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">AUPRC is the primary metric at the cohort's 14.0% mortality rate; DualTower-FT's AUROC is 0.8848, against 0.8908 for XGBoost. DualTower-FT: mean &plusmn; SD over 5 random seeds on the 94-feature cohort (test N = 2,238). The other rows are the CCAI 2026 results on an earlier 97-feature cohort and were not retrained, so the differences are observed rather than controlled. XGBoost and Random Forest are single deterministic runs.</p>
</section>

<section class="content-section">
  <p class="section-label">Architecture &amp; Methodology</p>
  <ul style="font-size:14px;color:var(--color-text-secondary);padding-left:20px;line-height:1.9;">
    <li><strong>Categorical Tower</strong> &mdash; Learnable embeddings for gender, ethnicity and hospital site, as in the CCAI 2026 model</li>
    <li><strong>Numerical Tower (FT-Transformer)</strong> &mdash; Each of the 91 numerical features becomes a 64-dimensional token; a learnable [CLS] token is prepended and the sequence passes through a two-layer Pre-LayerNorm Transformer encoder with four attention heads. The [CLS] output replaces mean pooling</li>
    <li><strong>Fusion</strong> &mdash; Tower outputs concatenated (22 + 64 dimensions) into an MLP head</li>
    <li><strong>Adaptive Runtime Safeguard</strong> &mdash; A preprocessing layer imputes missing values with training medians and rejects any NaN left over; a forward-pass layer then replaces NaN and &plusmn;&infin; with 0, clamps each categorical column to its embedding vocabulary, and clamps numerical features to &plusmn;10 in z-score units</li>
  </ul>
</section>

<section class="content-section">
  <p class="section-label">Safeguard Stress Test</p>
  <table class="pub-table">
    <thead>
      <tr>
        <th>Injected into 1% of test rows</th>
        <th>Safeguard on</th>
        <th>Safeguard off</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nothing (clean input)</td>
        <td>0.6246 &plusmn; 0.0014</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>Age = 200</td>
        <td>0.6242 &plusmn; 0.0015</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>Glucose at 10&times; its observed maximum</td>
        <td>0.6249 &plusmn; 0.0012</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>NaN in SaO<sub>2</sub></td>
        <td>0.6234 &plusmn; 0.0013</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>BUN = &minus;1</td>
        <td>0.6253 &plusmn; 0.0016</td>
        <td>Crash</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">AUPRC over 5 seeds. With the safeguard on, no batch crashed or returned a NaN prediction in any condition; with it off, every batch raised an exception. All four injections hit numerical columns. Clean input also fails without the safeguard because the categorical clamp is what maps the scaled categorical columns back to valid embedding indices, so it runs on every input. The guarantee is that a finite prediction is always produced, not that it is clinically correct.</p>
</section>

<section class="content-section">
  <p class="section-label">MIMIC-IV Transfer</p>
  <table class="pub-table">
    <thead>
      <tr>
        <th>Training regime</th>
        <th>AUPRC</th>
      </tr>
    </thead>
    <tbody>
      <tr class="pub-table-highlight">
        <td>eICU only (reference)</td>
        <td>0.6247 &plusmn; 0.0015</td>
      </tr>
      <tr>
        <td>eICU + MIMIC-IV pooled</td>
        <td>0.6188 &plusmn; 0.0080</td>
      </tr>
      <tr>
        <td>Pooled pre-training, then eICU fine-tuning</td>
        <td>0.6169 &plusmn; 0.0066</td>
      </tr>
      <tr>
        <td>As above, with a source-domain embedding</td>
        <td>0.6226 &plusmn; 0.0048</td>
      </tr>
      <tr>
        <td>Source-domain architecture, eICU only (control)</td>
        <td>0.6240 &plusmn; 0.0057</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">All rows are tested on the same eICU test cohort. None of the three transfer strategies improved on eICU-only training. The best, with a source-domain embedding, was 0.14 pp below its eICU-only control, less than one seed's SD. Two likely causes, not yet isolated: six eICU measurements are missing from MIMIC-IV, and MIMIC-IV is a single medical centre while eICU spans 208 hospitals.</p>
</section>

<section class="content-section">
  <p class="section-label">Dataset &amp; Reproducibility</p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;">
    <strong>eICU Collaborative Research Database v2.0</strong> &mdash; 11,187 stroke patients from 176 of its 208 hospitals, split at patient level into 7,830 training, 1,119 validation and 2,238 test patients, stratified by in-hospital mortality (14.0% in every split). Each patient has 94 features: 3 categorical (gender, ethnicity, hospital site) and 91 numerical (age, vital signs and laboratory values). <strong>MIMIC-IV v3.1</strong> adds 7,125 patients from a single academic medical centre for the transfer experiments. Both datasets require <a href="https://physionet.org/" target="_blank" rel="noopener noreferrer">PhysioNet credentialed access</a>.
  </p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
    Code &mdash; <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke-FT" target="_blank" rel="noopener noreferrer">Dual-Tower-Transformer-eICU-Stroke-FT</a>: DualTower-FT and its runtime safeguard, the stress-test harness, two-stage MIMIC-IV transfer, the ablation variants, a five-seed runner and the per-seed result files. It builds on the CCAI 2026 code release.
  </p>
</section>
