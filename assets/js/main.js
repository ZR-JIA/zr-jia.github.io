document.addEventListener('DOMContentLoaded', function () {
  // Mobile horizontal swipe between top-level sections, pairing with the
  // directional cross-document View Transitions defined in default.html/main.css.
  var navOrder = ['/', '/publications/', '/presentations/', '/gallery/', '/commentary/', '/cv/'];
  var currentPath = window.location.pathname.replace(/index\.html$/, '');
  if (currentPath !== '/' && currentPath.charAt(currentPath.length - 1) !== '/') {
    currentPath += '/';
  }
  var currentNavIndex = navOrder.indexOf(currentPath);

  if (currentNavIndex !== -1) {
    var swipeStartX = 0;
    var swipeStartY = 0;
    var swipeStartTime = 0;
    var swipeActive = false;

    function isHorizontallyScrollable(el) {
      var node = el;
      while (node && node !== document.body && node !== document.documentElement) {
        if (node.scrollWidth > node.clientWidth + 4) {
          var ox = window.getComputedStyle(node).overflowX;
          if (ox === 'auto' || ox === 'scroll') return true;
        }
        node = node.parentElement;
      }
      return false;
    }

    document.addEventListener('touchstart', function (e) {
      swipeActive = false;
      if (e.touches.length !== 1) return;
      var modal = document.getElementById('cite-modal');
      if (modal && modal.classList.contains('open')) return;

      var touch = e.touches[0];
      // Leave browser edge-swipe zones (iOS Safari / Android back gesture) untouched.
      if (touch.clientX < 28 || touch.clientX > window.innerWidth - 28) return;

      // Ignore swipes starting inside carousels, nav strip, tables, iframes, or code blocks.
      var target = e.target;
      if (target && target.closest && target.closest('.carousel, .navbar-links, .cite-modal, .pub-table, .code-block, .cite-output, iframe, pre, input, textarea, select')) {
        return;
      }
      if (target && isHorizontallyScrollable(target)) return;

      swipeStartX = touch.clientX;
      swipeStartY = touch.clientY;
      swipeStartTime = Date.now();
      swipeActive = true;
    }, { passive: true });

    document.addEventListener('touchcancel', function () {
      swipeActive = false;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (!swipeActive || e.changedTouches.length !== 1) return;
      swipeActive = false;

      if (window.getSelection && window.getSelection().toString().length > 0) return;

      var touch = e.changedTouches[0];
      var dx = touch.clientX - swipeStartX;
      var dy = touch.clientY - swipeStartY;
      var dt = Date.now() - swipeStartTime;

      if (dt > 600) return;
      if (Math.abs(dx) < 70) return;
      if (Math.abs(dx) <= Math.abs(dy) * 1.8) return;

      var nextIndex = dx < 0 ? currentNavIndex + 1 : currentNavIndex - 1;
      if (nextIndex >= 0 && nextIndex < navOrder.length) {
        window.location.assign(navOrder[nextIndex]);
      }
    }, { passive: true });
  }

  // Email copy-to-clipboard
  var emailLink = document.querySelector('.profile-links a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      e.preventDefault();
      var email = this.href.replace('mailto:', '');
      var originalHTML = emailLink.innerHTML;

      function showCopied() {
        emailLink.innerHTML = '<i class="fas fa-check"></i>&ensp;Copied!';
        setTimeout(function () {
          emailLink.innerHTML = originalHTML;
        }, 1800);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(function () {
          fallbackCopy(email, showCopied);
        });
      } else {
        fallbackCopy(email, showCopied);
      }
    });
  }

  // Homepage profile links: the first five show, the rest open from "More".
  var heroLinks = document.querySelector('.hero-links');
  var heroMore = heroLinks && heroLinks.querySelector('.hero-more');
  if (heroMore) {
    heroMore.addEventListener('click', function () {
      var open = heroLinks.classList.toggle('is-expanded');
      heroMore.setAttribute('aria-expanded', open ? 'true' : 'false');
      heroMore.querySelector('.hero-more-label').textContent = open ? 'Less' : 'More';
    });
  }

  // Homepage news: show the latest 5 items by default, expand the rest via "Show all".
  var newsList = document.getElementById('news-list');
  var newsToggle = document.querySelector('.news-toggle');
  if (newsList && newsToggle) {
    var newsLimit = parseInt(newsList.getAttribute('data-collapse-limit'), 10) || 5;
    var newsItems = newsList.querySelectorAll('.news-item');
    if (newsItems.length <= newsLimit) {
      var newsActions = newsToggle.closest('.news-actions');
      if (newsActions) newsActions.hidden = true;
    } else {
      newsItems.forEach(function (item, idx) {
        if (idx >= newsLimit) item.classList.add('news-item-extra');
      });
      newsToggle.addEventListener('click', function () {
        var expanded = newsList.classList.toggle('is-expanded');
        newsToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        var label = newsToggle.querySelector('.news-toggle-label');
        if (label) label.textContent = expanded ? 'Show less' : 'Show all';
      });
    }
  }

  // Email links carry the address with "[at]" for @ and "[dot]" for each dot,
  // so harvesters scraping the page do not find it; the mailto is built
  // only on click.
  document.querySelectorAll('a[data-mail]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'mailto:' + a.getAttribute('data-mail')
        .replace(/\[at\]/g, '@').replace(/\[dot\]/g, '.');
    });
  });

  function fallbackCopy(text, callback) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); callback(); } catch (err) {}
    document.body.removeChild(ta);
  }

  // Dark Mode Toggle
  var themeToggle = document.querySelector('.theme-toggle');
  var html = document.documentElement;
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The half-circle icon turns over in dark mode through CSS; the button
  // only reports its state to assistive technology.
  function syncThemeButton() {
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', html.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    }
  }
  syncThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var toDark = html.getAttribute('data-theme') !== 'dark';
      function applyTheme() {
        if (toDark) {
          html.setAttribute('data-theme', 'dark');
        } else {
          html.removeAttribute('data-theme');
        }
        try { localStorage.setItem('theme', toDark ? 'dark' : 'light'); } catch (e) {}
        syncThemeButton();
      }
      // Cross-fade the whole page in one step (see "Motion" in main.css).
      // Without view transitions, or with reduced motion, switch at once.
      if (reduceMotion || !document.startViewTransition) {
        applyTheme();
        return;
      }
      html.classList.add('theme-switching');
      var switching = document.startViewTransition(applyTheme);
      switching.finished.then(function () {
        html.classList.remove('theme-switching');
      }, function () {
        html.classList.remove('theme-switching');
      });
    });
  }

  // Sections below the fold rise into view once, as they are scrolled to.
  // Above-the-fold sections (and those marked data-no-reveal) display
  // immediately without delay (see "Motion" in main.css).
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.content-section').forEach(function (section) {
      if (section.hasAttribute('data-no-reveal')) return;
      if (section.getBoundingClientRect().top < window.innerHeight) return;
      section.classList.add('reveal');
      revealer.observe(section);
    });
  }

  // Citation Modal
  var citeModal = document.getElementById('cite-modal');
  if (citeModal) {
    var citePanel = citeModal.querySelector('.cite-modal-panel');
    var citeOutput = document.getElementById('cite-output');
    var citeTabs = citeModal.querySelectorAll('.cite-tab');
    var citeCopy = citeModal.querySelector('.cite-copy');
    var defaultCopyHTML = citeCopy ? citeCopy.innerHTML : '';
    var copyTimer = null;
    var citeSource = null;
    var citeTrigger = null;

    function resetCopyButton() {
      if (copyTimer) {
        clearTimeout(copyTimer);
        copyTimer = null;
      }
      if (citeCopy) citeCopy.innerHTML = defaultCopyHTML;
    }

    function citeRender(format) {
      if (!citeSource) return;
      var block = citeSource.querySelector('[data-format="' + format + '"]');
      citeOutput.textContent = block ? block.textContent.trim() : '';
      citeOutput.scrollTop = 0;
      citeTabs.forEach(function (tab) {
        var on = tab.getAttribute('data-format') === format;
        tab.classList.toggle('active', on);
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
      });
    }

    function citeOpen(trigger) {
      var source = document.getElementById(trigger.getAttribute('data-cite'));
      if (!source) return;
      citeSource = source;
      citeTrigger = trigger;
      resetCopyButton();
      citeModal.hidden = false;
      void citeModal.offsetWidth; // reflow so the fade runs from the hidden state
      citeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      citeRender('bibtex');
      citeOutput.focus();
    }

    function citeClose() {
      if (!citeModal.classList.contains('open')) return;
      citeModal.classList.remove('open');
      document.body.style.overflow = '';
      resetCopyButton();
      setTimeout(function () {
        if (!citeModal.classList.contains('open')) citeModal.hidden = true;
      }, 200);
      if (citeTrigger) citeTrigger.focus();
    }

    document.querySelectorAll('.cite-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () { citeOpen(trigger); });
    });

    citeTabs.forEach(function (tab) {
      tab.addEventListener('click', function () { citeRender(tab.getAttribute('data-format')); });
    });

    citeModal.querySelectorAll('[data-cite-close]').forEach(function (el) {
      el.addEventListener('click', citeClose);
    });

    // Escape key closes dialog
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') citeClose();
    });

    // Focus trap: keep Tab inside open dialog
    citePanel.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !citeModal.classList.contains('open')) return;
      var focusable = Array.from(citePanel.querySelectorAll('a, button, pre[tabindex]')).filter(function (el) {
        return !el.disabled && el.offsetParent !== null;
      });
      if (focusable.length === 0) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    if (citeCopy) {
      citeCopy.addEventListener('click', function () {
        var text = citeOutput.textContent;

        function showCopied() {
          if (copyTimer) clearTimeout(copyTimer);
          citeCopy.innerHTML = '<i class="fas fa-check"></i> Copied!';
          copyTimer = setTimeout(function () {
            citeCopy.innerHTML = defaultCopyHTML;
            copyTimer = null;
          }, 1800);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(function () {
            fallbackCopy(text, showCopied);
          });
        } else {
          fallbackCopy(text, showCopied);
        }
      });
    }
  }
});
