// Điều hướng giữa 8 trang & menu mobile
/* ================== ĐIỀU HƯỚNG TRANG ================== */
function buildNav() {
  const desk = NAV.map(n => `<li><a href="#${n.id}" data-go="${n.id}" class="nav-btn block px-3 py-2 rounded-lg hover:bg-white/10" data-nav="${n.id}">${n.label}</a></li>`).join('');
  $('#navList').innerHTML = desk;
  $('#navMobile').innerHTML = NAV.map(n => `<li><a href="#${n.id}" data-go="${n.id}" class="nav-btn block px-4 py-3 rounded-lg hover:bg-white/10" data-nav="${n.id}">${n.label}</a></li>`).join('');
  $('#footNav').innerHTML = NAV.map(n => `<li><a href="#${n.id}" data-go="${n.id}" class="hover:text-eco">${n.label}</a></li>`).join('');
}
function go(id, updateHash = true) {
  if (!NAV.some(n => n.id === id)) id = 'home';
  state.page = id;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + id));
  $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === id));
  const title = NAV.find(n => n.id === id).label;
  document.title = (id === 'home' ? '' : title + ' – ') + 'Tây Bắc Eco | Hợp tác xã Gia Phù, Sơn La';
  if (updateHash && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function setMenuIcon(open) {
  $('#menuBtn').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="w-6 h-6"></i>`;
  $('#menuBtn').setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  icons();
}
function closeMenu() {
  $('#navMobile').classList.add('hidden');
  $('#menuBtn').setAttribute('aria-expanded', 'false');
  setMenuIcon(false);
}
$('#menuBtn').addEventListener('click', () => {
  const m = $('#navMobile');
  const open = m.classList.toggle('hidden') === false;
  $('#menuBtn').setAttribute('aria-expanded', String(open));
  setMenuIcon(open);
});
// Chạm ra ngoài vùng header thì đóng menu
document.addEventListener('click', e => {
  if (!e.target.closest('header')) closeMenu();
});
window.addEventListener('popstate', () => go(location.hash.replace('#', '') || 'home', false));
