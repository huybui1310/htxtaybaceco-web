// Tiện ích chung: $, fmt, state, toast
/* ================== TIỆN ÍCH ================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const fmt = n => n.toLocaleString('vi-VN') + ' đ';
const state = { page: 'home', filter: 'all', mode: 'retail', sel: {}, ntab: 'all' };

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2800);
}
function icons() { if (window.lucide) lucide.createIcons(); }
