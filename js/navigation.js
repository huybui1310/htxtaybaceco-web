// Điều hướng giữa 8 trang, Slide-over Drawer Mobile & Smart Header khi cuộn
/* ================== ĐIỀU HƯỚNG TRANG ================== */
const NAV_ICONS = {
  home: 'home',
  about: 'sprout',
  products: 'shopping-basket',
  process: 'mountain-snow',
  news: 'clapperboard',
  certs: 'award',
  members: 'users-round',
  contact: 'phone-call'
};

function buildNav() {
  const desk = NAV.map(n => `<li><a href="#${n.id}" data-go="${n.id}" class="nav-btn block px-3.5 py-2 rounded-lg hover:bg-white/10" data-nav="${n.id}">${n.label}</a></li>`).join('');
  $('#navList').innerHTML = desk;

  const mob = NAV.map(n => {
    const ic = (NAV_ICONS[n.id] || 'chevron-right').toLowerCase();
    return `<li>
      <a href="#${n.id}" data-go="${n.id}" class="nav-btn flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition" data-nav="${n.id}">
        <i data-lucide="${ic}" class="w-4 h-4 opacity-80 shrink-0"></i>
        <span class="flex-1">${n.label}</span>
        <i data-lucide="chevron-right" class="w-4 h-4 opacity-50 shrink-0"></i>
      </a>
    </li>`;
  }).join('');
  $('#navMobile').innerHTML = mob;

  $('#footNav').innerHTML = NAV.map(n => `<li><a href="#${n.id}" data-go="${n.id}" class="hover:text-eco transition">${n.label}</a></li>`).join('');
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

function openMenu() {
  const drawer = $('#mobileDrawer');
  const backdrop = $('#drawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else {
    $('#navMobile').classList.remove('hidden');
  }
  $('#menuBtn').setAttribute('aria-expanded', 'true');
  icons();
}

function closeMenu() {
  const drawer = $('#mobileDrawer');
  const backdrop = $('#drawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (!$('#wsModal.open') && !$('#productModal.open')) {
      document.body.style.overflow = '';
    }
  } else if ($('#navMobile')) {
    $('#navMobile').classList.add('hidden');
  }
  if ($('#menuBtn')) $('#menuBtn').setAttribute('aria-expanded', 'false');
}

$('#menuBtn').addEventListener('click', () => {
  const drawer = $('#mobileDrawer');
  const isOpen = drawer ? drawer.classList.contains('open') : !$('#navMobile').classList.contains('hidden');
  if (isOpen) closeMenu();
  else openMenu();
});

if ($('#closeDrawerBtn')) {
  $('#closeDrawerBtn').addEventListener('click', closeMenu);
}
if ($('#drawerBackdrop')) {
  $('#drawerBackdrop').addEventListener('click', closeMenu);
}

// Thu gọn Smart Header khi cuộn trang > 40px
function handleHeaderScroll() {
  const header = $('.smart-header');
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleHeaderScroll, { passive: true });
handleHeaderScroll();

window.addEventListener('popstate', () => go(location.hash.replace('#', '') || 'home', false));
