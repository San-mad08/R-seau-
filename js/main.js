(function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Année du pied de page
  document.getElementById('year').textContent = new Date().getFullYear();

  // Apparition au défilement + compteurs
  var fmt = new Intl.NumberFormat('fr-FR');
  function countUp(el) {
    var target = parseInt(el.dataset.count, 10);
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 1400, 1);
      el.textContent = fmt.format(Math.round(target * (1 - Math.pow(1 - p, 3)))).replace(/ /g, ' ');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var targets = document.querySelectorAll('.section .container > *, .stat, .bars');
  targets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        e.target.querySelectorAll('[data-count]').forEach(countUp);
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Visionneuse photos
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  var box = document.querySelector('.lightbox');
  var img = box.querySelector('img');
  var idx = 0;
  function show(i) {
    idx = (i + links.length) % links.length;
    img.src = links[idx].href;
    img.alt = (links[idx].querySelector('img') || {}).alt || '';
  }
  function close() { box.hidden = true; document.body.style.overflow = ''; }
  links.forEach(function (a, i) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      show(i);
      box.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  box.querySelector('.lightbox__close').addEventListener('click', close);
  box.querySelector('.lightbox__prev').addEventListener('click', function () { show(idx - 1); });
  box.querySelector('.lightbox__next').addEventListener('click', function () { show(idx + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
})();
