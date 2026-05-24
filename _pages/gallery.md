---
layout: default
permalink: /gallery/
title: "Gallery"
description: "Conference photos from CCAI 2026, Nanjing — Zheng Rong JIA."
---

<div class="container">
  <div class="page-header">
    <h1>Gallery</h1>
  </div>

  <div class="page-sections">

    <section class="content-section">
      <p class="section-label">Conference Photos</p>
      <div class="cv-entry-header" style="margin-bottom:16px;">
        <span class="cv-entry-title"><a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></span>
        <span class="cv-entry-date">May 22–24, 2026 · Nanjing</span>
      </div>

      <div class="carousel-wrap">
        <div class="carousel-track" id="carousel">
          <img src="/assets/images/ccai2026/ccai2026-01.jpg" alt="CCAI 2026 Nanjing · 1" class="active">
          <img src="/assets/images/ccai2026/ccai2026-02.jpg" alt="CCAI 2026 Nanjing · 2">
          <img src="/assets/images/ccai2026/ccai2026-03.jpg" alt="CCAI 2026 Nanjing · 3">
          <img src="/assets/images/ccai2026/ccai2026-04.jpg" alt="CCAI 2026 Nanjing · 4">
          <img src="/assets/images/ccai2026/ccai2026-05.jpg" alt="CCAI 2026 Nanjing · 5">
          <img src="/assets/images/ccai2026/ccai2026-06.jpg" alt="CCAI 2026 Nanjing · 6">
          <img src="/assets/images/ccai2026/ccai2026-07.jpg" alt="CCAI 2026 Nanjing · 7">
          <img src="/assets/images/ccai2026/ccai2026-08.jpg" alt="CCAI 2026 Nanjing · 8">
        </div>
        <button class="carousel-btn prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
        <button class="carousel-btn next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
        <span class="carousel-counter" id="counter">1 / 8</span>
      </div>

      <div class="carousel-dots" id="dots">
        <button class="carousel-dot active" data-index="0" aria-label="Photo 1"></button>
        <button class="carousel-dot" data-index="1" aria-label="Photo 2"></button>
        <button class="carousel-dot" data-index="2" aria-label="Photo 3"></button>
        <button class="carousel-dot" data-index="3" aria-label="Photo 4"></button>
        <button class="carousel-dot" data-index="4" aria-label="Photo 5"></button>
        <button class="carousel-dot" data-index="5" aria-label="Photo 6"></button>
        <button class="carousel-dot" data-index="6" aria-label="Photo 7"></button>
        <button class="carousel-dot" data-index="7" aria-label="Photo 8"></button>
      </div>
    </section>

  </div>
</div>

<script>
(function(){
  const imgs = document.querySelectorAll('#carousel img');
  const dots = document.querySelectorAll('#dots .carousel-dot');
  const counter = document.getElementById('counter');
  let cur = 0, timer;

  function go(n) {
    imgs[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + imgs.length) % imgs.length;
    imgs[cur].classList.add('active');
    dots[cur].classList.add('active');
    counter.textContent = (cur + 1) + ' / ' + imgs.length;
  }

  function startAuto() { timer = setInterval(function(){ go(cur + 1); }, 4000); }
  function resetAuto()  { clearInterval(timer); startAuto(); }

  document.querySelector('.carousel-btn.prev').addEventListener('click', function(){ go(cur - 1); resetAuto(); });
  document.querySelector('.carousel-btn.next').addEventListener('click', function(){ go(cur + 1); resetAuto(); });
  dots.forEach(function(d){ d.addEventListener('click', function(){ go(+d.dataset.index); resetAuto(); }); });

  startAuto();
})();
</script>
