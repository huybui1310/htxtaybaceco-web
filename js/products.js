// Thẻ sản phẩm, bộ lọc, chế độ giá lẻ/sỉ, chọn quy cách
/* ================== THẺ SẢN PHẨM ================== */
function garlicSvg(kind) {
  const bulb = (fill, stroke, line, tx = 0, ty = 0, s = 1) => `
    <g transform="translate(${tx} ${ty}) scale(${s})">
      <path d="M32 6c2 6 1 9 0 11 9 3 20 12 20 26 0 10-9 15-20 15S12 53 12 43c0-14 11-23 20-26-1-2-2-5 0-11z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <path d="M32 17c-5 8-7 20-4 41M32 17c5 8 7 20 4 41" fill="none" stroke="${line}" stroke-width="1.5"/>
    </g>`;
  if (kind === 'blackgarlic') return `<svg viewBox="0 0 64 64" class="w-24 h-24">${bulb('#2B2118', '#120c07', '#5a4634')}</svg>`;
  if (kind === 'cloves') {
    const clove = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0 -18c9 6 12 18 8 28-3 7-13 7-16 0-4-10-1-22 8-28z" fill="#F8F1E4" stroke="#C9B896" stroke-width="1.5"/><path d="M0 -14c-2 10-2 18 0 24" fill="none" stroke="#D9C9A8" stroke-width="1.3"/></g>`;
    return `<svg viewBox="0 0 64 64" class="w-24 h-24">${clove(20, 34, -20)}${clove(44, 34, 20)}${clove(32, 38, 0)}</svg>`;
  }
  return `<svg viewBox="0 0 64 64" class="w-24 h-24">${bulb('#F8F1E4', '#C9B896', '#D9C9A8')}</svg>`;
}
function artHtml(p) {
  if (['garlic', 'blackgarlic', 'cloves'].includes(p.art)) return garlicSvg(p.art);
  const ic = ICON_FOR_ART[p.art] || 'package';
  const bg = p.art === 'noodle' ? 'text-wood' : 'text-forest';
  return `<i data-lucide="${ic}" class="w-20 h-20 ${bg}" stroke-width="1.4"></i>`;
}
function artBgClass(p) {
  if (p.cats.includes('specialty')) return 'art-bg-specialty';
  if (p.cats.includes('year') && !p.cats.includes('season')) return 'art-bg-year';
  return 'art-bg-season';
}
function selIndex(p) { return state.sel[p.id] || 0; }

function cardHtml(p, mode) {
  const priced = !!p.variants;
  const idx = selIndex(p);
  const v = priced ? p.variants[idx] : null;
  const unit = v && v.unit ? v.unit : '';
  let priceBlock = '';
  if (priced) {
    const main = mode === 'wholesale' ? v.wholesale : v.retail;
    const mainLabel = mode === 'wholesale' ? 'Giá sỉ' : 'Giá bán lẻ';
    const subVal = mode === 'wholesale' ? v.retail : v.wholesale;
    const subLabel = mode === 'wholesale' ? 'Giá bán lẻ' : 'Giá sỉ';
    priceBlock = `
      <div class="mt-3">
        <p class="text-[11px] font-bold uppercase tracking-wide ${mode === 'wholesale' ? 'text-forest' : 'text-thocam'}">${mainLabel}</p>
        <p class="text-2xl font-extrabold ${mode === 'wholesale' ? 'text-forest' : 'text-thocam'} leading-tight">${fmt(main)}<span class="text-sm font-semibold text-bark">${unit}</span></p>
        <p class="text-xs text-bark mt-1">${subLabel}: <strong>${fmt(subVal)}${unit}</strong></p>
      </div>`;
  } else {
    priceBlock = `
      <div class="mt-3 bg-paper rounded-xl px-3 py-2.5">
        <p class="text-sm font-bold text-forest leading-snug">${p.contact}</p>
      </div>`;
  }
  let sizes = '';
  if (priced && p.variants.length > 1) {
    sizes = `<div class="mt-3 flex gap-2" role="group" aria-label="Chọn quy cách">` + p.variants.map((x, i) =>
      `<button data-size="${p.id}" data-i="${i}" class="size-pill pill border border-[#D8CCB6] bg-white text-bark text-xs font-bold px-3 py-1.5 rounded-full ${i === idx ? 'on' : ''}">${x.label}</button>`).join('') + `</div>`;
  } else if (priced) {
    sizes = `<p class="mt-3 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách: <strong>${v.label}</strong></p>`;
  } else if (p.spec) {
    sizes = `<p class="mt-3 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách: <strong>${p.spec}</strong></p>`;
  }
  let cta = '';
  if (priced && mode === 'retail') {
    cta = `
      <div class="mt-4 grid gap-2">
        <a data-shop="shopee" href="#" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 rounded-xl hover:opacity-90" style="background:#EE4D2D"><i data-lucide="shopping-bag" class="w-4 h-4"></i> Mua trên Shopee</a>
        <a data-shop="tiktok" href="#" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 rounded-xl hover:opacity-90" style="background:#111111"><svg class="w-4 h-4"><use href="#tiktok"/></svg> Mua trên TikTok Shop</a>
        <button data-action="open-wholesale" class="text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Bạn là cửa hàng / đại lý? Xem giá sỉ</button>
      </div>`;
  } else {
    cta = `
      <div class="mt-4 grid gap-2">
        <a href="${ZALO_URL}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 rounded-xl hover:opacity-90" style="background:#0068FF"><svg class="w-4 h-4"><use href="#zalo"/></svg> ${priced ? 'Nhận giá sỉ qua Zalo (0904836616)' : 'Hỏi giá qua Zalo (0904836616)'}</a>
        ${priced ? `<button data-action="open-wholesale" class="text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Xem bảng so sánh Giá Lẻ vs Giá Sỉ</button>` : `<a href="tel:0904836616" class="text-center text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Hoặc gọi 0904836616</a>`}
      </div>`;
  }
  return `
  <article class="paper-card overflow-hidden flex flex-col" data-product="${p.id}">
    <div class="${artBgClass(p)} relative h-40 flex items-center justify-center">
      ${artHtml(p)}
      ${p.badge ? `<span class="absolute top-3 left-3 bg-thocam text-white text-[11px] font-bold px-2.5 py-1 rounded-full">${p.badge}</span>` : ''}
      <span class="absolute top-3 right-3 bg-white/90 text-forest text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"><i data-lucide="badge-check" class="w-3 h-3 text-thocam"></i> OCOP</span>
      <span class="absolute bottom-2 left-2 right-2 text-center bg-white/85 text-bark text-[10px] leading-tight font-medium rounded-md px-2 py-1">Ảnh minh họa – Đang cập nhật ảnh chụp thực tế tại HTX</span>
    </div>
    <div class="p-4 flex-1 flex flex-col">
      <p class="text-[11px] text-bark/80 font-semibold">${p.group}</p>
      <h3 class="text-lg font-bold text-ink leading-snug mt-0.5" style="font-family:'Be Vietnam Pro'">${p.name}</h3>
      <p class="mt-1.5 text-xs text-bark flex items-center gap-1.5"><i data-lucide="calendar-days" class="w-4 h-4 text-forest shrink-0"></i> Mùa có hàng: <strong>${p.season}</strong></p>
      ${sizes}
      ${priceBlock}
      <div class="flex-1"></div>
      ${cta}
    </div>
  </article>`;
}

function renderFeatured() {
  const list = FEATURED_ORDER.map(id => PRODUCTS.find(p => p.id === id));
  $('#featuredGrid').innerHTML = list.map(p => cardHtml(p, 'retail')).join('');
}
function renderFilters() {
  $('#filterBar').innerHTML = FILTERS.map(f => {
    const n = f.key === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cats.includes(f.key)).length;
    return `<button data-filter="${f.key}" class="pill border border-[#D8CCB6] bg-white text-bark px-4 py-2 rounded-full text-sm font-semibold ${state.filter === f.key ? 'on' : ''}">${f.label} <span class="opacity-70">(${n})</span></button>`;
  }).join('');
}
function renderModeButtons() {
  const on = 'bg-forest text-white shadow';
  const off = 'text-bark hover:bg-white';
  $('#modeRetail').className = 'px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 ' + (state.mode === 'retail' ? on : off);
  $('#modeWholesale').className = 'px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 ' + (state.mode === 'wholesale' ? on : off);
  $('#modeRetail').setAttribute('aria-selected', state.mode === 'retail');
  $('#modeWholesale').setAttribute('aria-selected', state.mode === 'wholesale');
}
function renderProducts() {
  const list = PRODUCTS.filter(p => state.filter === 'all' || p.cats.includes(state.filter));
  $('#productGrid').innerHTML = list.map(p => cardHtml(p, state.mode)).join('');
  $('#resultCount').textContent = `Hiển thị ${list.length} / ${PRODUCTS.length} sản phẩm · Đang xem: ${state.mode === 'retail' ? 'Giá bán lẻ' : 'Bảng giá sỉ'}`;
  renderFilters();
  renderModeButtons();
  icons();
}
function renderAll() { renderFeatured(); renderProducts(); }
