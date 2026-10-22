// Xử lý sự kiện chung: điều hướng, modal chi tiết sản phẩm, bảng giá sỉ, tìm kiếm, bộ lọc, quy cách, Shopee/TikTok
/* ================== SỰ KIỆN CHUNG ================== */
document.addEventListener('click', e => {
  const goEl = e.target.closest('[data-go]');
  if (goEl) { e.preventDefault(); go(goEl.dataset.go); return; }

  const act = e.target.closest('[data-action]');
  if (act) {
    const action = act.dataset.action;
    if (action === 'open-wholesale') openWholesale();
    if (action === 'close-wholesale') closeWholesale();
    if (action === 'print-wholesale') printWholesale();
    if (action === 'open-product') openProductModal(act.dataset.productId);
    if (action === 'close-product') closeProductModal();
    if (action === 'clear-search') {
      state.q = '';
      const inp = $('#productSearchInput');
      if (inp) { inp.value = ''; inp.focus(); }
      renderProducts();
    }
    if (action === 'reset-search') {
      state.q = '';
      state.filter = 'all';
      const inp = $('#productSearchInput');
      if (inp) inp.value = '';
      renderProducts();
    }
    return;
  }

  const shop = e.target.closest('[data-shop]');
  if (shop) {
    const url = shop.dataset.shop === 'shopee' ? SHOPEE_URL : TIKTOK_URL;
    if (url) { shop.href = url; shop.target = '_blank'; shop.rel = 'noopener'; return; }
    e.preventDefault();
    toast('Link gian hàng ' + (shop.dataset.shop === 'shopee' ? 'Shopee' : 'TikTok Shop') + ' đang được cập nhật. Vui lòng nhắn Zalo 0904836616 để đặt hàng.');
    return;
  }

  const size = e.target.closest('[data-size]');
  if (size) {
    e.stopPropagation();
    state.sel[size.dataset.size] = Number(size.dataset.i);
    renderAll();
    return;
  }

  const f = e.target.closest('[data-filter]');
  if (f) { state.filter = f.dataset.filter; renderProducts(); return; }

  const m = e.target.closest('[data-mode]');
  if (m) { state.mode = m.dataset.mode; renderProducts(); return; }

  const nt = e.target.closest('[data-ntab]');
  if (nt) { state.ntab = nt.dataset.ntab; buildNews(); return; }

  const t = e.target.closest('[data-toast]');
  if (t) { toast(t.dataset.toast); return; }

  // Đóng Modal chi tiết sản phẩm khi bấm nền tối bên ngoài
  if (e.target && e.target.id === 'productModal') {
    closeProductModal();
  }
});

// Tìm kiếm nhanh sản phẩm theo thời gian thực
document.addEventListener('input', e => {
  if (e.target && e.target.id === 'productSearchInput') {
    state.q = e.target.value;
    renderProducts();
  }
});
