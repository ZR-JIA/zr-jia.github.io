---
layout: default
permalink: /commentary/
title: "Commentary"
description: "Research commentary and analysis by Zheng Rong JIA — on clinical AI, deep learning, and the practice of science."
---

<div class="container">
  <div class="page-header">
    <h1>Commentary</h1>
  </div>

  <div class="page-sections">
    <section class="content-section">
      <p class="section-label">Research Commentary</p>
      {% assign posts = site.posts %}
      {% if posts.size > 0 %}
        <ul class="commentary-list">
          {% for post in posts %}
          <li class="commentary-item">
            <a class="commentary-title" href="{{ post.url }}">{{ post.title }}</a>
            <div class="commentary-meta">
              <span class="news-date">{{ post.date | date: "%B %-d, %Y" }}</span>
              {% if post.tags and post.tags.size > 0 %}
                &ensp;·&ensp;
                {% for tag in post.tags %}<span class="post-tag">{{ tag }}</span>{% unless forloop.last %} {% endunless %}{% endfor %}
              {% endif %}
            </div>
            {% if post.excerpt %}
            <p class="commentary-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            {% endif %}
          </li>
          {% endfor %}
        </ul>
      {% else %}
        <p style="font-size:15px;color:var(--color-text-secondary);">No posts yet. Check back soon.</p>
      {% endif %}
    </section>
  </div>
</div>
