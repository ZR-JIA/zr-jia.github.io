/* GitHub contribution graph for the homepage, drawn in the site's own ink
   rather than embedded as GitHub's green image. GitHub Pages cannot fetch at
   build time, so the browser loads the last year of daily counts from
   github-contributions-api.jogruber.de (public, CORS-enabled). If that
   request fails, the section keeps only its link to the GitHub profile. */
(function () {
  var root = document.querySelector('.gh-activity');
  if (!root) return;

  var NS = 'http://www.w3.org/2000/svg';
  var CELL = 10, GAP = 3, STEP = CELL + GAP;
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var user = root.getAttribute('data-user');
  var svg = root.querySelector('.gh-graph');
  var months = root.querySelector('.gh-months');
  var total = root.querySelector('.gh-total');

  function utc(iso) { return new Date(iso + 'T00:00:00Z'); }

  function label(iso, count) {
    var d = utc(iso);
    var day = MONTHS[d.getUTCMonth()] + ' ' + d.getUTCDate() + ', ' + d.getUTCFullYear();
    return count + (count === 1 ? ' contribution on ' : ' contributions on ') + day;
  }

  function draw(data) {
    var days = data.contributions || [];
    if (!days.length) throw new Error('no data');

    // Columns are weeks running Sunday to Saturday, as on GitHub.
    var lead = utc(days[0].date).getUTCDay();
    var weeks = Math.ceil((lead + days.length) / 7);
    var width = weeks * STEP - GAP, height = 7 * STEP - GAP;
    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    svg.style.aspectRatio = width + ' / ' + height;

    var lastMonth = -1;
    days.forEach(function (d, i) {
      var k = lead + i, col = Math.floor(k / 7), row = k % 7;
      var rect = document.createElementNS(NS, 'rect');
      rect.setAttribute('x', col * STEP);
      rect.setAttribute('y', row * STEP);
      rect.setAttribute('width', CELL);
      rect.setAttribute('height', CELL);
      rect.setAttribute('class', 'gh-cell gh-l' + d.level);
      var title = document.createElementNS(NS, 'title');
      title.textContent = label(d.date, d.count);
      rect.appendChild(title);
      svg.appendChild(rect);

      // A month is labelled above the first column whose Sunday falls in it.
      if (row === 0) {
        var m = utc(d.date).getUTCMonth();
        if (m !== lastMonth) {
          var span = document.createElement('span');
          span.className = 'gh-month';
          span.textContent = MONTHS[m];
          span.style.left = (col * STEP / width * 100) + '%';
          months.appendChild(span);
          lastMonth = m;
        }
      }
    });

    var n = data.total && data.total.lastYear;
    if (typeof n === 'number') {
      var count = document.createElement('span');
      count.textContent = n + (n === 1 ? ' contribution' : ' contributions') + ' in the last year · ';
      total.insertBefore(count, total.firstChild);
    }

    root.classList.add('gh-ready');
    fitMonths();
  }

  // Hide any month label that would run into the one before it, which
  // happens for a partial first month and on narrow screens.
  function fitMonths() {
    var prevRight = -Infinity;
    Array.prototype.forEach.call(months.children, function (el) {
      el.hidden = false;
      var left = el.offsetLeft;
      if (left < prevRight + 6) { el.hidden = true; return; }
      prevRight = left + el.offsetWidth;
    });
  }

  window.addEventListener('resize', function () {
    if (root.classList.contains('gh-ready')) fitMonths();
  });

  fetch('https://github-contributions-api.jogruber.de/v4/' + encodeURIComponent(user) + '?y=last')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(draw)
    .catch(function () { root.classList.add('gh-failed'); });
}());
