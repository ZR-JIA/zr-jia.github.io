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
      if (links.classList.contains('open') && !links.contains(e.target) && e.target !== toggle) {
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
});
