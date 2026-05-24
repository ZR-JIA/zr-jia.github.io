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
      <div class="cv-entry-header" style="margin-bottom:20px;">
        <span class="cv-entry-title"><a href="https://ccai.net" target="_blank" rel="noopener noreferrer">CCAI 2026</a></span>
        <span class="cv-entry-date">May 22–24, 2026 · Nanjing</span>
      </div>

      <div class="carousel">
        <div class="carousel-inner" id="carousel-inner">
          <img src="/assets/images/ccai2026/ccai2026-01.jpg" alt="CCAI 2026 · 1" class="active">
          <img src="/assets/images/ccai2026/ccai2026-02.jpg" alt="CCAI 2026 · 2">
          <img src="/assets/images/ccai2026/ccai2026-03.jpg" alt="CCAI 2026 · 3">
          <img src="/assets/images/ccai2026/ccai2026-04.jpg" alt="CCAI 2026 · 4">
          <img src="/assets/images/ccai2026/ccai2026-05.jpg" alt="CCAI 2026 · 5">
          <img src="/assets/images/ccai2026/ccai2026-06.jpg" alt="CCAI 2026 · 6">
          <img src="/assets/images/ccai2026/ccai2026-07.jpg" alt="CCAI 2026 · 7">
          <img src="/assets/images/ccai2026/ccai2026-08.jpg" alt="CCAI 2026 · 8">
          <button class="carousel-btn prev" id="prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
          <button class="carousel-btn next" id="next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
          <span class="carousel-counter" id="counter">1 / 8</span>
        </div>
        <div class="carousel-dots" id="dots">
          <button class="carousel-dot active" data-index="0"></button>
          <button class="carousel-dot" data-index="1"></button>
          <button class="carousel-dot" data-index="2"></button>
          <button class="carousel-dot" data-index="3"></button>
          <button class="carousel-dot" data-index="4"></button>
          <button class="carousel-dot" data-index="5"></button>
          <button class="carousel-dot" data-index="6"></button>
          <button class="carousel-dot" data-index="7"></button>
        </div>
      </div>
    </section>
  </div>
</div>

<script>
(function(){
  var imgs  = document.querySelectorAll('#carousel-inner img');
  var dots  = document.querySelectorAll('#dots .carousel-dot');
  var counter = document.getElementById('counter');
  var cur = 0, timer;

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

  document.getElementById('prev').addEventListener('click', function(){ go(cur - 1); resetAuto(); });
  document.getElementById('next').addEventListener('click', function(){ go(cur + 1); resetAuto(); });
  dots.forEach(function(d){
    d.addEventListener('click', function(){ go(+d.dataset.index); resetAuto(); });
  });

  startAuto();
})();
</script>
