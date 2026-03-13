// ── Navigation (global so onclick attrs work) ──
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    document.getElementById('hamburger').classList.toggle('open', menuOpen);
    document.getElementById('navDrawer').classList.toggle('open', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  function showPage(id) {
    document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
    document.getElementById('page-' + id).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(function(a){ a.classList.remove('active'); });
    document.getElementById('nav-' + id).classList.add('active');
    document.querySelectorAll('.nav-drawer a').forEach(function(a){ a.classList.remove('active'); });
    document.getElementById('drawer-' + id).classList.add('active');
    window.scrollTo(0, 0);
    return false;
  }

  function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
    document.getElementById('tab-' + id).classList.add('active');
    event.target.classList.add('active');
  }

  // ── Holographic tilt-shine (glare opposite to mouse) ──
  document.addEventListener('DOMContentLoaded', function() {

    function applyTilt(el, shimmer, e, maxTilt) {
      var rect = el.getBoundingClientRect();
      // normalised 0–1
      var nx = (e.clientX - rect.left)  / rect.width;
      var ny = (e.clientY - rect.top)   / rect.height;
      // tilt: mouse right → tilt right, mouse top → tilt up
      var tx =  (ny - 0.5) * maxTilt * -1;  // rotateX
      var ty =  (nx - 0.5) * maxTilt;        // rotateY
      el.style.transform = 'perspective(800px) rotateX(' + tx + 'deg) rotateY(' + ty + 'deg) scale(1.02)';
      // shine sits OPPOSITE to mouse
      var sx = ((1 - nx) * 100).toFixed(1) + '%';
      var sy = ((1 - ny) * 100).toFixed(1) + '%';
      if (shimmer) {
        shimmer.style.background = 'radial-gradient(circle 260px at ' + sx + ' ' + sy + ', rgba(255,255,255,.22) 0%, transparent 65%)';
      } else {
        // hero-grid-item uses CSS var
        el.style.setProperty('--sx', sx);
        el.style.setProperty('--sy', sy);
      }
    }

    function resetTilt(el, shimmer) {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      if (shimmer) shimmer.style.background = '';
    }

    // Cat cards
    document.querySelectorAll('.cat-card').forEach(function(card) {
      var shimmer = card.querySelector('.cat-shimmer');
      card.addEventListener('mousemove', function(e) { applyTilt(card, shimmer, e, 10); });
      card.addEventListener('mouseleave', function()  { resetTilt(card, shimmer); });
    });

    // Hero grid items
    document.querySelectorAll('.hero-grid-item').forEach(function(item) {
      item.addEventListener('mousemove', function(e) { applyTilt(item, null, e, 6); });
      item.addEventListener('mouseleave', function()  { resetTilt(item, null); });
    });

  });
  document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('cursor');
    var ring   = document.getElementById('cursorRing');
    if (!cursor || !ring) return;
    var isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function(e) {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });
    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();
  });