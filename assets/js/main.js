/* ECOPROT26 · interacciones de la landing page (sin dependencias propias). */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Encabezado: sombra al desplazarse
  var header = document.getElementById('encabezado');
  var onScroll = function () {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú móvil: se cierra al elegir una opción
  var menu = document.getElementById('menu');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('.nav-link') && menu.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  }

  // Fondo sólido del encabezado mientras el menú móvil está abierto
  if (menu && header) {
    menu.addEventListener('show.bs.collapse', function () { header.classList.add('menu-open'); });
    menu.addEventListener('hidden.bs.collapse', function () { header.classList.remove('menu-open'); });
  }

  // Botón "Leer más" de Servicios: despliega u oculta el detalle de las seis líneas
  var toggle = document.getElementById('toggle-servicios');
  if (toggle) {
    toggle.addEventListener('click', function () {
      if (!window.bootstrap) return;
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.getAttribute('aria-controls').split(' ').forEach(function (id) {
        var panel = document.getElementById(id);
        if (!panel) return;
        var c = window.bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false });
        if (open) { c.show(); } else { c.hide(); }
      });
    });
  }

  // Animación de entrada al hacer scroll
  var items = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    items.forEach(function (el) { observer.observe(el); });
  }

  // Año vigente en el pie de página
  var year = document.getElementById('anio');
  if (year) year.textContent = new Date().getFullYear();
})();
