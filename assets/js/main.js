// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navbar-toggle');
  var links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
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
