// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navbar-toggle');
  var links = document.querySelector('.navbar-links');

  function openMenu() {
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  if (toggle && links) {
    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function () {
      links.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Escape key closes menu
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        closeMenu();
      }
    });

    // Click outside closes menu
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') && !links.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Focus trap: keep Tab inside open menu
    links.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !links.classList.contains('open')) return;
      var focusable = Array.from(links.querySelectorAll('a, button')).filter(function (el) {
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
  var icon = themeToggle ? themeToggle.querySelector('i') : null;
  var html = document.documentElement;

  // Sync icon with theme already applied by inline <head> script
  if (html.getAttribute('data-theme') === 'dark' && icon) {
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
      }
    });
  }

  // Citation Modal
  var citeModal = document.getElementById('cite-modal');
  if (citeModal) {
    var citePanel = citeModal.querySelector('.cite-modal-panel');
    var citeOutput = document.getElementById('cite-output');
    var citeTabs = citeModal.querySelectorAll('.cite-tab');
    var citeCopy = citeModal.querySelector('.cite-copy');
    var citeSource = null;
    var citeTrigger = null;

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
      citeModal.hidden = false;
      void citeModal.offsetWidth; // reflow so the fade runs from the hidden state
      citeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      citeRender('ieee');
      citeOutput.focus();
    }

    function citeClose() {
      if (!citeModal.classList.contains('open')) return;
      citeModal.classList.remove('open');
      document.body.style.overflow = '';
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
        var originalHTML = citeCopy.innerHTML;

        function showCopied() {
          citeCopy.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(function () { citeCopy.innerHTML = originalHTML; }, 1800);
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
