---
layout: default
permalink: /publications/
title: "Publications"
description: "Peer-reviewed publications by Zheng Rong JIA on clinical AI, deep learning for electronic health records, and ICU risk prediction."
---

<div class="container">
  <div class="page-header">
    <h1>Publications &amp; Research</h1>
  </div>

  <div class="page-sections">
    <section class="content-section">
      <p class="section-label">Peer-Reviewed</p>

      {%- assign pubs = site.publications | sort: "date" | reverse -%}
      {%- if pubs.size > 0 %}
      <div class="pub-list">
        {%- for pub in pubs %}
        {% include pub-card.html publication=pub %}
        {%- endfor %}
      </div>
      {%- else %}
      <p style="font-family:'Inter',sans-serif;font-size:14px;color:var(--color-text-tertiary);">No publications listed yet.</p>
      {%- endif %}
    </section>
  </div>
</div>

{%- for pub in pubs %}
{% include cite-source.html publication=pub %}
{%- endfor %}
{% include cite-modal.html %}
