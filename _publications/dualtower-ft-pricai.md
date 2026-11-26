---
title: "DualTower-FT with an Adaptive Runtime Safeguard: A Deep Tabular Approach for ICU Stroke Mortality"
description: "DualTower-FT, a deep tabular model with an Adaptive Runtime Safeguard for ICU stroke mortality prediction. Accepted as a short paper to PRICAI 2026."
authors: "Zhengrong Jia, Kwong-Cheong Wong*"
authors_html: "<strong>Zhengrong Jia</strong>, Kwong-Cheong Wong<sup>*</sup>"
venue: "The 23rd Pacific Rim International Conference on Artificial Intelligence (PRICAI 2026)"
venue_short: "PRICAI 2026"
venue_card: "The 23rd Pacific Rim International Conference on Artificial Intelligence &middot; Guangzhou, November 2026"
location: "Guangzhou, China"
status: "Accepted &middot; Short Paper"
date: 2026-11-16
date_display: "November 16&ndash;20, 2026"
links:
  - { label: "Accepted Manuscript", icon: "fas fa-file-pdf", url: "https://drive.google.com/file/d/1Ts7LR1w4GAHiKVL1kJM2niU-7oJgfez1/view?usp=sharing", primary: true }
  - { label: "Code", icon: "fab fa-github", url: "https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke-FT", primary: true }
  - { label: "Poster", icon: "fas fa-file-image", url: "/assets/posters/PRICAI2026/PRICAI2026_DualTowerFT_Poster.pdf" }

# Accepted, not yet published. The citations below are written by hand and
# marked "to be published"; replace all three with Springer's export, and add
# pages, doi and url_official, once the LNAI volume appears.
# The Accepted Manuscript link is the camera-ready PDF on Google Drive, with
# Springer's accepted-manuscript notice in the top margin of page 1, as the
# licence requires. Add the DOI to that notice once the Version of Record is
# out. The PDF must not go into this repository, whose MIT licence would
# cover it.
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
    Accepted as a short paper to <strong>PRICAI 2026</strong>, the 23rd Pacific Rim International Conference on Artificial Intelligence (CORE Rank B), and presented as a poster in Guangzhou, China, November 16&ndash;20, 2026. The proceedings will be published by Springer in the Lecture Notes in Artificial Intelligence (LNAI) series. The accepted manuscript (authors' version prior to Springer copy-editing), source code, and conference poster are linked above.
  </p>
</section>

<section class="content-section">
  <p class="section-label">Overview</p>
  <div class="abstract-block">
    <p>DualTower-FT extends the Dual-Tower Transformer from our <a href="/publications/dt-transformer-eicu-stroke/">CCAI 2026 paper</a> for in-hospital mortality prediction in ICU stroke patients. It introduces two key modifications: the numerical tower aggregates feature tokens via an FT-Transformer-style [CLS] token rather than mean pooling, and the Adaptive Runtime Safeguard is integrated directly into the model's forward pass so that NaN or infinite values, out-of-range categorical indices, and numerical extremes cannot cause inference failures. Evaluated on 11,187 stroke patients across 176 eICU hospitals, DualTower-FT achieves an AUPRC of 0.6247 &plusmn; 0.0015 over five seeds on the held-out test cohort&mdash;the highest among all compared neural architectures&mdash;while XGBoost retains the overall lead (0.6467). The paper also reports a negative result: none of the evaluated MIMIC-IV transfer strategies improved upon training on eICU alone.</p>
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
        <td>NN</td>
        <td>0.5394 &plusmn; 0.0054</td>
      </tr>
      <tr>
        <td>Vanilla Transformer</td>
        <td>0.5279 &plusmn; 0.0195</td>
      </tr>
      <tr>
        <td>Vanilla MLP</td>
        <td>0.5170 &plusmn; 0.0081</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">AUPRC is the primary evaluation metric given the cohort's 14.0% mortality rate; DualTower-FT achieves an AUROC of 0.8848, compared with 0.8908 for XGBoost. DualTower-FT results are reported as mean &plusmn; SD over five random seeds on the 94-feature cohort (test N = 2,238). All other rows are taken from our CCAI 2026 study (reported as 97 features in the published text and audited as 94 in the archived codebase) without retraining in this pipeline, so differences reflect separate experimental runs rather than a controlled ablation. XGBoost and Random Forest are single deterministic runs.</p>
</section>

<section class="content-section">
  <p class="section-label">Architecture &amp; Methodology</p>
  <ul style="font-size:14px;color:var(--color-text-secondary);padding-left:20px;line-height:1.9;">
    <li><strong>Categorical Tower</strong> &mdash; Learnable embeddings for gender, ethnicity, and hospital site, following the CCAI 2026 architecture.</li>
    <li><strong>Numerical Tower (FT-Transformer)</strong> &mdash; Each of the 91 numerical features is projected into a 64-dimensional token; a learnable [CLS] token is prepended, and the sequence passes through a two-layer Pre-LayerNorm Transformer encoder with four attention heads, with the [CLS] representation replacing mean pooling.</li>
    <li><strong>Fusion</strong> &mdash; Tower outputs are concatenated (22 + 64 dimensions) and passed to an MLP classification head.</li>
    <li><strong>Adaptive Runtime Safeguard</strong> &mdash; A preprocessing layer imputes missing values using training-set medians and rejects any residual NaN values; a forward-pass layer replaces NaN and &plusmn;&infin; with 0, clamps each categorical index to its valid embedding vocabulary, and bounds numerical features to &plusmn;10 in z-score units.</li>
  </ul>
</section>

<section class="content-section">
  <p class="section-label">Safeguard Stress Test</p>
  <table class="pub-table">
    <thead>
      <tr>
        <th>Perturbation (1% of test rows)</th>
        <th>Safeguard Enabled</th>
        <th>Safeguard Disabled</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>None (clean input)</td>
        <td>0.6246 &plusmn; 0.0014</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>Age = 200</td>
        <td>0.6242 &plusmn; 0.0015</td>
        <td>Crash</td>
      </tr>
      <tr>
        <td>Glucose at 10&times; observed maximum</td>
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
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">AUPRC averaged over five random seeds. With the safeguard enabled, no batch failed or produced a NaN prediction under any condition; with it disabled, every batch raised a runtime exception. All four perturbations target numerical columns. Clean inputs also fail without the safeguard because the categorical clamping step maps scaled categorical features back to valid embedding indices on every forward pass. The safeguard guarantees a finite prediction rather than clinical validity.</p>
</section>

<section class="content-section">
  <p class="section-label">MIMIC-IV Transfer</p>
  <table class="pub-table">
    <thead>
      <tr>
        <th>Training Regime</th>
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
        <td>Pooled pre-training + eICU fine-tuning (with source-domain embedding)</td>
        <td>0.6226 &plusmn; 0.0048</td>
      </tr>
      <tr>
        <td>Source-domain architecture, eICU only (control)</td>
        <td>0.6240 &plusmn; 0.0057</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:var(--color-text-tertiary);margin-top:10px;">All regimes are evaluated on the same eICU test cohort. None of the three transfer strategies improved on eICU-only training; the best variant (with a source-domain embedding) trailed its eICU-only control by 0.14 percentage points, well within a single seed's standard deviation. We have not yet isolated the relative impact of two likely causes: six eICU measurements are absent from MIMIC-IV, and MIMIC-IV comes from a single academic medical center whereas eICU spans 208 hospitals. In addition, MIMIC-IV encodes gender, ethnicity, age, and site differently from eICU&mdash;a schema mismatch whose effect has not yet been quantified.</p>
</section>

<section class="content-section">
  <p class="section-label">Dataset &amp; Reproducibility</p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;">
    <strong>eICU Collaborative Research Database v2.0</strong> &mdash; Comprises 11,187 stroke patients across 176 of 208 participating hospitals, partitioned at the patient level into 7,830 training, 1,119 validation, and 2,238 test patients, stratified by in-hospital mortality (14.0% across all splits). Each patient record contains 94 features: 3 categorical (gender, ethnicity, hospital site) and 91 numerical (age, vital signs, and laboratory values). <strong>MIMIC-IV v3.1</strong> contributes an additional 7,125 patients from a single academic medical center for the transfer experiments. Both datasets require <a href="https://physionet.org/" target="_blank" rel="noopener noreferrer">PhysioNet credentialed access</a>.
  </p>
  <p style="font-size:14px;color:var(--color-text-secondary);line-height:1.8;">
    <strong>Source Code</strong> &mdash; <a href="https://github.com/ZR-JIA/Dual-Tower-Transformer-eICU-Stroke-FT" target="_blank" rel="noopener noreferrer">Dual-Tower-Transformer-eICU-Stroke-FT</a> provides the DualTower-FT implementation and forward-pass runtime safeguard, the stress-test harness, two-stage MIMIC-IV transfer routines, ablation variants, a five-seed evaluation runner, and per-seed result artifacts, building upon the CCAI 2026 release.
  </p>
</section>
