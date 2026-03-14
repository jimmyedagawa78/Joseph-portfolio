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
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(function(t){ t.classList.remove('active'); });
  document.querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
  document.getElementById('tab-' + id).classList.add('active');
  event.target.classList.add('active');
}

// ── Single DOMContentLoaded for all interactive features ──
document.addEventListener('DOMContentLoaded', function() {

  // ── Holographic tilt-shine (glare opposite to mouse) ──
  function applyTilt(el, shimmer, e, maxTilt) {
    var rect = el.getBoundingClientRect();
    var nx = (e.clientX - rect.left) / rect.width;
    var ny = (e.clientY - rect.top)  / rect.height;
    var tx =  (ny - 0.5) * maxTilt * -1;
    var ty =  (nx - 0.5) * maxTilt;
    el.style.transform = 'perspective(800px) rotateX(' + tx + 'deg) rotateY(' + ty + 'deg) scale(1.02)';
    var sx = ((1 - nx) * 100).toFixed(1) + '%';
    var sy = ((1 - ny) * 100).toFixed(1) + '%';
    if (shimmer) {
      shimmer.style.background = 'radial-gradient(circle 260px at ' + sx + ' ' + sy + ', rgba(255,255,255,.22) 0%, transparent 65%)';
    } else {
      el.style.setProperty('--sx', sx);
      el.style.setProperty('--sy', sy);
    }
  }

  function resetTilt(el, shimmer) {
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    if (shimmer) shimmer.style.background = '';
  }

  // Cat cards tilt — skip on touch devices
  var isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouch) {
    document.querySelectorAll('.cat-card').forEach(function(card) {
      var shimmer = card.querySelector('.cat-shimmer');
      card.addEventListener('mousemove', function(e) { applyTilt(card, shimmer, e, 10); });
      card.addEventListener('mouseleave', function()  { resetTilt(card, shimmer); });
    });

    document.querySelectorAll('.hero-grid-item').forEach(function(item) {
      item.addEventListener('mousemove', function(e) { applyTilt(item, null, e, 6); });
      item.addEventListener('mouseleave', function()  { resetTilt(item, null); });
    });
  }

  // ── Custom cursor (desktop only) ──
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');
  if (!cursor || !ring || isTouch) return;
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
