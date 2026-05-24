---
marp: true
theme: default
paginate: true
footer: 'CI5896 · Zhengrong Jia · CCAI 2026'
html: true
style: |
  :root {
    --blue: #1B3A6B;
    --teal: #2A9D8F;
  }
  section {
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: #1a1a2e;
    padding: 36px 56px 64px;
  }
  h1 {
    color: var(--blue);
    font-size: 28px;
    border-bottom: 3px solid var(--blue);
    padding-bottom: 6px;
    margin-top: 0;
    margin-bottom: 18px;
  }
  h2 { color: var(--blue); font-size: 21px; margin: 10px 0 4px; }
  strong { color: var(--teal); }
  blockquote {
    background: var(--teal);
    color: #fff;
    border-left: none;
    padding: 10px 18px;
    border-radius: 5px;
    margin: 10px 0 0;
    font-style: italic;
    font-size: 16px;
  }
  table { font-size: 14px; width: 100%; border-collapse: collapse; }
  th { background: var(--blue); color: #fff; padding: 6px 10px; text-align: left; }
  td { padding: 5px 10px; border-bottom: 1px solid #e0e0e0; }
  tr:nth-child(even) td { background: #f5f8ff; }
  footer { font-size: 13px; color: #aaa; }
  section.cover {
    background: var(--blue);
    color: #fff;
    padding-top: 64px;
  }
  section.cover h1 {
    color: #fff;
    border-color: var(--teal);
    font-size: 32px;
    line-height: 1.35;
    margin-bottom: 28px;
  }
  section.cover p { color: #cce0ff; margin: 6px 0; font-size: 17px; }
  section.cover footer { color: rgba(255,255,255,0.35); }
  .stat-row { display: flex; gap: 14px; margin: 14px 0; }
  .stat-card {
    flex: 1; text-align: center;
    background: #eef3fb;
    border-top: 4px solid var(--blue);
    border-radius: 4px;
    padding: 12px 8px;
  }
  .stat-card .big {
    display: block; font-size: 34px;
    font-weight: bold; color: var(--teal); line-height: 1;
  }
  .stat-card .label {
    display: block; font-size: 13px;
    color: var(--blue); font-weight: bold; margin: 4px 0 2px;
  }
  .stat-card .note { display: block; font-size: 11px; color: #666; }
  .two-col { display: flex; gap: 28px; }
  .two-col > div { flex: 1; }
  .card-col { display: flex; flex-direction: column; gap: 10px; }
  .card {
    background: #eef3fb;
    border-left: 4px solid var(--blue);
    border-radius: 3px;
    padding: 9px 14px;
    font-size: 16px;
  }
  .card-title { font-weight: bold; color: var(--blue); display: block; margin-bottom: 2px; }
  .col-header {
    font-weight: bold; color: var(--blue);
    font-size: 16px; margin-bottom: 8px;
    border-bottom: 2px solid var(--blue);
    padding-bottom: 3px;
  }
  .feat-row { display: flex; gap: 10px; margin: 8px 0; }
  .feat-card {
    flex: 1; text-align: center;
    background: #eef3fb; border-radius: 4px;
    padding: 8px 6px;
    border-top: 3px solid var(--teal);
  }
  .feat-card .feat-name { display: block; font-size: 13px; color: #333; }
  .feat-card .feat-val { display: block; font-size: 20px; font-weight: bold; color: var(--teal); }
---

<!-- _class: cover -->
<!-- _paginate: false -->
<!-- _footer: "" -->

# Deep Learning for Stroke Mortality Prediction in eICU:<br>A Dual-Tower Transformer Framework

**Zhengrong Jia\*  ；  Kwong-Cheong Wong\***

*Presenter:* Zhengrong Jia

*From:* Asia AI Education and Future Technology Association, Hong Kong SAR, China

*Research Area:* Deep Learning · Clinical EHR · Stroke Mortality Prediction

*Email:* zhengrong.jia.academic@gmail.com

**Paper CI5896  ·  CCAI 2026  ·  May 22–24, Nanjing**

---

# What We Will Cover

1. Motivation — why ICU mortality prediction is hard
2. Dataset & two core challenges
3. DT-Transformer: dual-tower architecture
4. Experiments — results & ablation
5. Theoretical implications (§V.B): why it works
6. Interpretability — what the model attends to
7. Conclusion & future directions

> Paper CI5896  ·  DT-Transformer  ·  eICU  ·  Stroke Mortality Prediction

---

# Why Standard Deep Learning Fails on Mixed Clinical Data

<div class="stat-row">
  <div class="stat-card" style="flex:0 0 30%; background:#fff0f0; border-color:#c00;">
    <span class="big" style="font-size:28px; color:#c00;">15–20%</span>
    <span class="label">in-hospital mortality</span>
    <span class="note">among stroke ICU patients · Feigin et al., 2021</span>
  </div>
  <div style="flex:1; font-size:16px; padding: 0 0 0 12px;">
    <p><strong>Why Standard DL Still Fails Here</strong></p>
    <ul>
      <li>Tabular EHR mixes categorical + continuous features<br>→ architectures without the right inductive bias underfit</li>
      <li>Clinical data: outliers, missing values, NaNs<br>→ monolithic Transformers crash or converge poorly<br><em>(Std Transformer AUPRC 0.5279 ± 0.0195)</em></li>
      <li>eICU: 97 features, 14% mortality, multi-center noise</li>
    </ul>
  </div>
</div>

> The challenge is not data volume — it is **architectural mismatch** between standard DL and the structure of clinical tabular data.

---

# The eICU Database

*Multi-center · freely available · Pollard et al., 2018*

<div class="stat-row">
  <div class="stat-card">
    <span class="big">97</span>
    <span class="label">features</span>
    <span class="note">total input dimension</span>
  </div>
  <div class="stat-card">
    <span class="big">3 + 94</span>
    <span class="label">cat + num</span>
    <span class="note">age/gender/ethnicity + vitals & labs</span>
  </div>
  <div class="stat-card">
    <span class="big">14%</span>
    <span class="label">mortality rate</span>
    <span class="note">heavily class-imbalanced</span>
  </div>
  <div class="stat-card">
    <span class="big">AUPRC</span>
    <span class="label">not AUROC</span>
    <span class="note">right metric for imbalance</span>
  </div>
</div>

> **14% mortality** → AUPRC is the right metric. Our **0.6171** is far above random-classifier level.

---

# Two Problems We Had to Solve

<div class="two-col" style="margin-top: 8px;">
  <div style="text-align:center;">
    <img src="extracted_imgs/slide6_Picture_3.png" style="max-height:320px; object-fit:contain;" />
  </div>
  <div style="text-align:center;">
    <img src="extracted_imgs/slide6_Picture_4.png" style="max-height:320px; object-fit:contain;" />
  </div>
</div>

> Heterogeneous feature types demand **separate encoders**. Raw EHR data demands an **online safety layer**.

---

# Our Model: The DT-Transformer

*C1: Dual-Tower Encoder  ·  C2: Adaptive Safeguard  ·  C3: Optuna HPO*

![width:88%](fig1.png)

> **Dual-Tower encoding** + **Adaptive Safeguard** + **Optuna HPO** — three contributions, one differentiable pipeline.

---

# Left Tower: Categorical Embeddings

![width:88%](extracted_imgs/slide8_Picture_3.png)

> High-dimensional sparse indices → dense **22-d vector h_cat**. Each feature gets its own learned embedding space.

---

# Right Tower: Numerical Transformer

![width:88%](extracted_imgs/slide9_Picture_3.png)

> **Self-Attention** explicitly computes pairwise interactions across all 94 physiological features — something MLPs only approximate.

---

# Feature Fusion and Prediction

![width:88%](extracted_imgs/slide10_Picture_3.png)

> The outputs of both towers are concatenated into **h_joint ∈ ℝ⁸⁶** — bridging static demographic features and dynamic vital signs.

---

# DT-Transformer Is Now Competitive With XGBoost

<div class="stat-row">
  <div class="stat-card">
    <span class="big">0.6171</span>
    <span class="label">AUPRC</span>
    <span class="note">±0.0058 · 5 seeds</span>
  </div>
  <div class="stat-card">
    <span class="big">0.8848</span>
    <span class="label">AUROC</span>
    <span class="note">±0.0034 · 5 seeds</span>
  </div>
  <div class="stat-card">
    <span class="big">+14.4%</span>
    <span class="label">vs DT-MLP</span>
    <span class="note">XGBoost: 0.6467</span>
  </div>
</div>

![width:88%](fig2.png)

> XGBoost retains a marginal AUPRC lead (0.6467) — our deep learning model **closes the gap** with full differentiability.

---

# Self-Attention Is the Key: +14.41% Relative AUPRC Gain

![width:88%](extracted_imgs/slide12_Picture_3.png)

> Replacing the Transformer encoder with fully connected layers drops AUPRC by **14.41%** — the gain is driven by **self-attention** modeling global feature interactions.

---

# Why the Dual Tower Wins: Three Design Principles (§V.B)

![width:88%](extracted_imgs/slide13_Picture_3.png)

> Beyond empirical gains: **three design principles** for applying deep learning to heterogeneous clinical tabular data.

---

# The Model Focuses on What Clinicians Care About

![width:60%](fig4.png)

*Top 5 features by attention weight*

<div class="feat-row">
  <div class="feat-card">
    <span class="feat-name">Respiration</span>
    <span class="feat-val">0.081</span>
  </div>
  <div class="feat-card">
    <span class="feat-name">Total Cholesterol</span>
    <span class="feat-val">0.078</span>
  </div>
  <div class="feat-card">
    <span class="feat-name">Glucose</span>
    <span class="feat-val">0.076</span>
  </div>
  <div class="feat-card">
    <span class="feat-name">Bedside Glucose</span>
    <span class="feat-val">0.036</span>
  </div>
  <div class="feat-card">
    <span class="feat-name">Heart Rate</span>
    <span class="feat-val">0.029</span>
  </div>
</div>

> The model **autonomously** prioritizes clinically significant risk factors, improving interpretability compared to black-box baselines.

---

# What We Showed and Where We Go Next

<div class="two-col">
  <div>
    <div class="col-header">What we showed</div>
    <div class="card-col">
      <div class="card">
        <span class="card-title">Architecture Matters</span>
        Decoupled towers + self-attention: AUPRC <strong>0.5394 → 0.6171</strong> with 5-seed consistency
      </div>
      <div class="card">
        <span class="card-title">Engineering for Robustness</span>
        Adaptive Runtime Safeguard: <strong>zero-crash inference</strong> on multi-center EHR data
      </div>
      <div class="card">
        <span class="card-title">Fair Comparison</span>
        Optuna HPO: attention-based deep learning <strong>competes with XGBoost</strong> when properly tuned
      </div>
    </div>
  </div>
  <div>
    <div class="col-header">What comes next</div>
    <div class="card-col">
      <div class="card">
        <span class="card-title">Validate on MIMIC-IV</span>
        Test generalization across hospital systems
      </div>
      <div class="card">
        <span class="card-title">Fuse clinical notes with LLMs</span>
        Go beyond structured EHR features
      </div>
      <div class="card">
        <span class="card-title">Shadow-mode clinical trial</span>
        Run alongside real ICU decision-making
      </div>
    </div>
  </div>
</div>

> A fully differentiable alternative to gradient boosting — extensible to **multimodal integration** with unstructured clinical notes.

---

<!-- _paginate: false -->
<!-- _footer: "" -->

# Thank You

## Questions welcome

Zhengrong Jia  ·  zhengrong.jia.academic@gmail.com

Paper **CI5896**  ·  CCAI 2026  ·  May 22–24, Nanjing
