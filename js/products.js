// Thẻ sản phẩm Artisanal Mockup, tìm kiếm nhanh, bộ lọc, chế độ giá lẻ/sỉ & Modal Chi tiết sản phẩm
/* ================== HÌNH MINH HỌA ARTISANAL SVG ================== */
function artisanalSvg(p) {
  const kind = p.art;
  // Vòng tròn họa tiết sinh thái phía sau
  const halo = `
    <circle cx="60" cy="60" r="46" fill="#FFFFFF" fill-opacity="0.72" />
    <circle cx="60" cy="60" r="42" fill="none" stroke="#2D5A27" stroke-opacity="0.16" stroke-width="1" stroke-dasharray="3 3" />
    <path d="M22 72C18 54 26 32 44 22" fill="none" stroke="#6BB34D" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M98 72C102 54 94 32 76 22" fill="none" stroke="#D9531E" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"/>
  `;

  if (kind === 'garlic') {
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Lá tỏi non phía sau -->
      <path d="M58 22C52 14 42 12 36 16C44 20 50 26 56 34" fill="#6BB34D" opacity="0.85"/>
      <path d="M63 22C69 13 78 12 84 17C76 21 69 26 64 34" fill="#2D5A27" opacity="0.8"/>
      <!-- Củ tỏi cô đơn tròn đầy -->
      <path d="M60 20C63 29 61 34 60 37C76 42 90 54 90 73C90 89 76 97 60 97C44 97 30 89 30 73C30 54 44 42 60 37C59 34 57 29 60 20Z" fill="#FDF8EE" stroke="#C4AC82" stroke-width="2"/>
      <!-- Vân vỏ lụa tỏi cô đơn -->
      <path d="M60 37C49 48 45 68 51 95" fill="none" stroke="#DFCBB0" stroke-width="1.6"/>
      <path d="M60 37C71 48 75 68 69 95" fill="none" stroke="#DFCBB0" stroke-width="1.6"/>
      <path d="M60 37C59 56 60 76 60 96" fill="none" stroke="#E8D8C0" stroke-width="1.4"/>
      <path d="M42 56C38 66 40 82 48 92" fill="none" stroke="#E8D8C0" stroke-width="1.2" opacity="0.7"/>
      <path d="M78 56C82 66 80 82 72 92" fill="none" stroke="#E8D8C0" stroke-width="1.2" opacity="0.7"/>
      <!-- Chùm rễ tỏi -->
      <path d="M52 96L49 102M56 97L55 104M60 97L60 105M64 97L65 104M68 96L71 102" stroke="#B69B70" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  if (kind === 'blackgarlic') {
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Vòng hào quang lên men -->
      <circle cx="60" cy="64" r="32" fill="#D9531E" fill-opacity="0.1"/>
      <!-- Củ tỏi đen cô đơn -->
      <path d="M60 22C63 30 61 35 60 38C75 43 88 55 88 73C88 88 75 96 60 96C45 96 32 88 32 73C32 55 45 43 60 38C59 35 57 30 60 22Z" fill="#231B15" stroke="#4E3B2D" stroke-width="2"/>
      <path d="M60 38C50 49 47 68 52 94" fill="none" stroke="#4A382B" stroke-width="1.6"/>
      <path d="M60 38C70 49 73 68 68 94" fill="none" stroke="#4A382B" stroke-width="1.6"/>
      <!-- Điểm bóng dẻo ngọt của nhân tỏi đen -->
      <ellipse cx="49" cy="62" rx="5" ry="10" transform="rotate(-18 49 62)" fill="#FFFFFF" fill-opacity="0.16"/>
      <!-- Lá điểm xuyết -->
      <path d="M28 86C28 77 35 73 43 74C41 81 36 86 28 86Z" fill="#6BB34D"/>
      <path d="M53 96L51 101M60 96L60 102M67 96L69 101" stroke="#5A4634" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  if (kind === 'cloves') {
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Thân & lá tỏi xanh -->
      <path d="M60 16V42" stroke="#2D5A27" stroke-width="4" stroke-linecap="round"/>
      <path d="M60 28C48 20 36 22 28 28C40 30 50 32 59 38" fill="#6BB34D"/>
      <path d="M60 26C72 18 84 20 92 26C80 28 70 30 61 36" fill="#2D5A27"/>
      <!-- Cụm nhánh tỏi Gia Phù -->
      <g transform="translate(42 66) rotate(-18)">
        <path d="M0 -24C12 -16 16 0 11 14C7 22 -7 22 -11 14C-16 0 -12 -16 0 -24Z" fill="#F6EDE0" stroke="#C5AD89" stroke-width="1.8"/>
        <path d="M0 -18C-3 -4 -3 8 0 18" fill="none" stroke="#DBC7A8" stroke-width="1.4"/>
      </g>
      <g transform="translate(78 66) rotate(18)">
        <path d="M0 -24C12 -16 16 0 11 14C7 22 -7 22 -11 14C-16 0 -12 -16 0 -24Z" fill="#F6EDE0" stroke="#C5AD89" stroke-width="1.8"/>
        <path d="M0 -18C3 -4 3 8 0 18" fill="none" stroke="#DBC7A8" stroke-width="1.4"/>
      </g>
      <g transform="translate(60 70)">
        <path d="M0 -28C14 -18 18 0 12 16C8 24 -8 24 -12 16C-18 0 -14 -18 0 -28Z" fill="#FFFDF9" stroke="#BCA279" stroke-width="2"/>
        <path d="M0 -22C-3 -6 -3 8 0 20M0 -22C3 -6 3 8 0 20" fill="none" stroke="#DFCBB0" stroke-width="1.4"/>
      </g>
    </svg>`;
  }

  if (kind === 'noodle') {
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Đũa tre -->
      <path d="M26 36L96 22" stroke="#6E473B" stroke-width="3" stroke-linecap="round"/>
      <path d="M26 42L96 30" stroke="#8C5D4E" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Sợi miến tỏi đen óng mượt -->
      <path d="M46 32C42 46 48 54 44 66" fill="none" stroke="#3B2B22" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M54 31C50 45 56 54 52 66" fill="none" stroke="#4E382C" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M62 30C58 45 64 54 60 66" fill="none" stroke="#3B2B22" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Bát gốm Tây Bắc -->
      <path d="M26 62H94C92 84 78 96 60 96C42 96 28 84 26 62Z" fill="#2D5A27" stroke="#1E3F1A" stroke-width="2"/>
      <path d="M24 62H96" stroke="#FAF7F2" stroke-width="3" stroke-linecap="round"/>
      <!-- Họa tiết thổ cẩm trên bát -->
      <path d="M36 74L42 68L48 74L54 68L60 74L66 68L72 74L78 68L84 74" fill="none" stroke="#D9531E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Tép tỏi đen & hành lá trên bát -->
      <circle cx="72" cy="58" r="6" fill="#231B15" stroke="#FAF7F2" stroke-width="1.2"/>
      <circle cx="46" cy="59" r="5" fill="#6BB34D"/>
    </svg>`;
  }

  if (kind === 'bottle' || kind === 'vinegar') {
    const liquid = kind === 'bottle' ? '#5C2C16' : '#E6B84C';
    const labelTxt = kind === 'bottle' ? 'ECO' : 'VINEGAR';
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Nút bần & cổ chai -->
      <rect x="53" y="18" width="14" height="8" rx="2" fill="#8C5D4E"/>
      <path d="M51 26H69V38L78 48V92C78 96 75 99 71 99H49C45 99 42 96 42 92V48L51 38V26Z" fill="#FAF7F2" stroke="#6E473B" stroke-width="2"/>
      <path d="M44 54H76V91C76 94 74 96 71 96H49C46 96 44 94 44 91V54Z" fill="${liquid}" opacity="0.88"/>
      <!-- Nhãn giấy thủ công -->
      <rect x="46" y="60" width="28" height="22" rx="3" fill="#FAF7F2" stroke="#D9531E" stroke-width="1.2"/>
      <text x="60" y="74" text-anchor="middle" font-size="6.5" font-weight="800" fill="#2D5A27" font-family="Be Vietnam Pro, sans-serif">${labelTxt}</text>
      <!-- Tép tỏi ngâm bên trong -->
      <circle cx="53" cy="90" r="3.5" fill="${kind === 'bottle' ? '#1E140F' : '#FFF8EA'}"/>
      <circle cx="64" cy="89" r="4" fill="${kind === 'bottle' ? '#1E140F' : '#FFF8EA'}"/>
    </svg>`;
  }

  if (kind === 'honey') {
    return `<svg viewBox="0 0 120 120" class="w-32 h-32 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
      ${halo}
      <!-- Hũ mật ong ngâm tỏi đen -->
      <rect x="44" y="24" width="32" height="9" rx="3" fill="#6E473B"/>
      <path d="M40 34H80L84 44V90C84 95 80 98 75 98H45C40 98 36 95 36 90V44L40 34Z" fill="#FFFDF7" stroke="#B87D28" stroke-width="2"/>
      <path d="M38 48H82V89C82 93 79 95 75 95H45C41 95 38 93 38 89V48Z" fill="#E59A24" opacity="0.88"/>
      <!-- Củ tỏi đen ngâm trong mật -->
      <circle cx="50" cy="78" r="6.5" fill="#231B15"/>
      <circle cx="67" cy="80" r="7" fill="#231B15"/>
      <circle cx="59" cy="66" r="6" fill="#231B15"/>
      <!-- Nhãn lọ -->
      <rect x="45" y="50" width="30" height="14" rx="3" fill="#FAF7F2" stroke="#2D5A27" stroke-width="1.2"/>
      <text x="60" y="59.5" text-anchor="middle" font-size="6" font-weight="800" fill="#2D5A27" font-family="Be Vietnam Pro, sans-serif">HONEY ECO</text>
    </svg>`;
  }

  // Các sản phẩm đặc sản & gia vị Tây Bắc: kết hợp huy hiệu thủ công + icon Lucide sắc nét
  const ic = ICON_FOR_ART[kind] || 'package';
  const colorCls = p.cats.includes('specialty') ? 'text-thocam' : 'text-forest';
  return `
    <div class="relative w-28 h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <div class="absolute inset-0 rounded-full bg-white/80 shadow-inner border border-white"></div>
      <div class="absolute inset-2 rounded-full border border-dashed border-forest/25"></div>
      <i data-lucide="${ic}" class="relative z-10 w-14 h-14 ${colorCls}" stroke-width="1.6"></i>
      <span class="absolute -bottom-1 right-1 w-6 h-6 rounded-full bg-eco/20 text-forest flex items-center justify-center">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
      </span>
    </div>`;
}

function getProductImg(p) {
  if (p.img) return p.img;
  if (p.id === 'toi-co-don') return 'assets/toi-co-don.jpg';
  return '';
}

function artHtml(p) {
  const imgSrc = getProductImg(p);
  if (imgSrc) {
    return `<img src="${imgSrc}" alt="${p.name} – Hợp tác xã Tây Bắc Eco" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">`;
  }
  return artisanalSvg(p);
}

function artBgClass(p) {
  if (p.cats.includes('specialty')) return 'art-bg-specialty';
  if (p.cats.includes('year') && !p.cats.includes('season')) return 'art-bg-year';
  return 'art-bg-season';
}

function selIndex(p) { return state.sel[p.id] || 0; }

// Chuẩn hóa chuỗi tiếng Việt để tìm kiếm nhanh không phân biệt dấu
function normStr(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}

function cardHtml(p, mode) {
  const priced = !!p.variants;
  const idx = selIndex(p);
  const v = priced ? p.variants[idx] : null;
  const unit = v && v.unit ? v.unit : '';
  let priceBlock = '';

  if (priced) {
    const main = mode === 'wholesale' ? v.wholesale : v.retail;
    const mainLabel = mode === 'wholesale' ? 'Giá sỉ đại lý' : 'Giá bán lẻ';
    const subVal = mode === 'wholesale' ? v.retail : v.wholesale;
    const subLabel = mode === 'wholesale' ? 'Giá bán lẻ' : 'Giá sỉ';
    const diff = v.retail - v.wholesale;
    const pct = Math.round((diff / v.retail) * 100);
    const saveBadge = pct > 0
      ? `<span class="badge-discount" title="Chênh lệch giữa giá lẻ và giá sỉ"><i data-lucide="trending-down" class="w-3 h-3"></i> Tiết kiệm ${pct}% khi nhập sỉ</span>`
      : '';

    priceBlock = `
      <div class="mt-3 pt-2.5 border-t border-[#EFE7D8]">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <p class="text-[11px] font-bold uppercase tracking-wide ${mode === 'wholesale' ? 'text-forest' : 'text-thocam'}">${mainLabel}</p>
          ${saveBadge}
        </div>
        <p class="text-2xl font-extrabold ${mode === 'wholesale' ? 'text-forest' : 'text-thocam'} leading-tight mt-1">${fmt(main)}<span class="text-sm font-semibold text-bark">${unit}</span></p>
        <p class="text-xs text-bark mt-1 flex items-center justify-between">
          <span>${subLabel}: <strong>${fmt(subVal)}${unit}</strong></span>
          <span class="text-[11px] text-forest font-semibold">−${fmt(diff)}</span>
        </p>
      </div>`;
  } else {
    priceBlock = `
      <div class="mt-3 bg-paper/90 border border-[#E5DAC8] rounded-xl px-3 py-2.5">
        <p class="text-[11px] font-bold uppercase tracking-wider text-wood">Báo giá theo mùa vụ</p>
        <p class="text-sm font-bold text-forest leading-snug mt-0.5">${p.contact}</p>
      </div>`;
  }

  let sizes = '';
  if (priced && p.variants.length > 1) {
    sizes = `<div class="mt-3 flex flex-wrap gap-1.5" role="group" aria-label="Chọn quy cách">` + p.variants.map((x, i) =>
      `<button data-size="${p.id}" data-i="${i}" class="size-pill pill border border-[#D8CCB6] bg-white text-bark text-xs font-bold px-3 py-1.5 rounded-full ${i === idx ? 'on' : ''}">${x.label}</button>`).join('') + `</div>`;
  } else if (priced) {
    sizes = `<p class="mt-3 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách: <strong>${v.label}</strong></p>`;
  } else if (p.spec) {
    sizes = `<p class="mt-3 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách: <strong>${p.spec}</strong></p>`;
  } else {
    sizes = `<p class="mt-3 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách: <strong>Đóng gói theo yêu cầu Lẻ / Sỉ</strong></p>`;
  }

  let cta = '';
  if (priced && mode === 'retail') {
    cta = `
      <div class="mt-4 grid gap-2">
        <div class="grid grid-cols-2 gap-2">
          <a data-shop="shopee" href="#" class="flex items-center justify-center gap-1.5 text-white text-xs sm:text-sm font-bold py-2.5 px-2 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#EE4D2D"><i data-lucide="shopping-bag" class="w-4 h-4 shrink-0"></i> Shopee</a>
          <a data-shop="tiktok" href="#" class="flex items-center justify-center gap-1.5 text-white text-xs sm:text-sm font-bold py-2.5 px-2 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#111111"><svg class="w-4 h-4 shrink-0"><use href="#tiktok"/></svg> TikTok</a>
        </div>
        <div class="flex items-center justify-between gap-2 pt-1">
          <button data-action="open-product" data-product-id="${p.id}" class="text-xs font-bold text-bark hover:text-forest flex items-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-forest"></i> Chi tiết &amp; Bảo quản
          </button>
          <button data-action="open-wholesale" class="text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Giá sỉ đại lý</button>
        </div>
      </div>`;
  } else {
    cta = `
      <div class="mt-4 grid gap-2">
        <a href="${ZALO_URL}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-2.5 px-3 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#0068FF"><svg class="w-4 h-4 shrink-0"><use href="#zalo"/></svg> ${priced ? 'Nhận giá sỉ Zalo (0904836616)' : 'Hỏi giá Zalo (0904836616)'}</a>
        <div class="flex items-center justify-between gap-2 pt-1">
          <button data-action="open-product" data-product-id="${p.id}" class="text-xs font-bold text-bark hover:text-forest flex items-center gap-1">
            <i data-lucide="info" class="w-3.5 h-3.5 text-forest"></i> Chi tiết &amp; Bảo quản
          </button>
          ${priced ? `<button data-action="open-wholesale" class="text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Bảng so sánh sỉ</button>` : `<a href="tel:0904836616" class="text-xs font-semibold text-forest underline underline-offset-2 hover:text-thocam">Gọi 0904836616</a>`}
        </div>
      </div>`;
  }

  const hasRealImg = !!getProductImg(p);
  const photoBadge = hasRealImg
    ? `<span class="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-forest text-[10px] font-bold rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm border border-eco/30" title="Ảnh chụp sản phẩm thực tế tại Hợp tác xã Tây Bắc Eco">
        <i data-lucide="check-circle-2" class="w-3 h-3 text-eco shrink-0"></i> Ảnh thực tế tại HTX
      </span>`
    : `<span class="absolute bottom-2 right-2 bg-white/85 backdrop-blur-sm text-bark/90 text-[10px] font-medium rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm border border-black/5" title="Hình ảnh minh họa – Hợp tác xã đang cập nhật ảnh chụp thực tế tại vùng trồng Gia Phù">
        <i data-lucide="camera" class="w-3 h-3 text-thocam shrink-0"></i> Ảnh minh họa · Đang cập nhật ảnh thực tế
      </span>`;

  return `
  <article class="paper-card overflow-hidden flex flex-col group" data-product="${p.id}">
    <div data-action="open-product" data-product-id="${p.id}" class="${artBgClass(p)} relative h-48 flex items-center justify-center cursor-pointer overflow-hidden">
      ${artHtml(p)}
      ${p.badge ? `<span class="absolute top-3 left-3 bg-thocam text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">${p.badge}</span>` : ''}
      <span class="absolute top-3 right-3 bg-white/95 text-forest text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-eco/30"><i data-lucide="badge-check" class="w-3.5 h-3.5 text-thocam"></i> OCOP</span>
      ${photoBadge}
    </div>
    <div class="p-4 sm:p-5 flex-1 flex flex-col">
      <div class="flex items-center justify-between gap-2">
        <p class="text-[11px] text-forest font-bold uppercase tracking-wider bg-eco/12 px-2 py-0.5 rounded-md">${p.group}</p>
      </div>
      <h3 data-action="open-product" data-product-id="${p.id}" class="text-lg font-bold text-ink leading-snug mt-1.5 cursor-pointer hover:text-forest transition-colors" style="font-family:'Be Vietnam Pro'">${p.name}</h3>
      ${p.desc ? `<p class="mt-1 text-xs text-bark/85 line-clamp-2 leading-relaxed">${p.desc}</p>` : ''}
      <p class="mt-2 text-xs text-bark flex items-center gap-1.5"><i data-lucide="calendar-days" class="w-3.5 h-3.5 text-forest shrink-0"></i> Mùa có hàng: <strong>${p.season}</strong></p>
      ${sizes}
      ${priceBlock}
      <div class="flex-1"></div>
      ${cta}
    </div>
  </article>`;
}

/* ================== MODAL XEM NHANH / CHI TIẾT SẢN PHẨM ================== */
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  state.activeProduct = id;
  renderProductModalContent(p);
  const modal = $('#productModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    icons();
  }
}

function closeProductModal() {
  const modal = $('#productModal');
  if (modal) {
    modal.classList.remove('open');
    if (!$('#wsModal.open')) document.body.style.overflow = '';
  }
}

function renderProductModalContent(p) {
  const body = $('#productModalBody');
  if (!body) return;
  const priced = !!p.variants;
  const idx = selIndex(p);
  const v = priced ? p.variants[idx] : null;
  const unit = v && v.unit ? v.unit : '';

  let variantSection = '';
  if (priced) {
    const diff = v.retail - v.wholesale;
    const pct = Math.round((diff / v.retail) * 100);
    const pills = p.variants.length > 1
      ? `<div class="mt-3">
          <span class="text-xs font-bold text-bark uppercase tracking-wider">Chọn quy cách đóng gói:</span>
          <div class="mt-1.5 flex flex-wrap gap-2">
            ${p.variants.map((x, i) => `<button data-size="${p.id}" data-i="${i}" class="size-pill pill border border-[#D8CCB6] bg-white text-bark text-xs font-bold px-3.5 py-1.5 rounded-full ${i === idx ? 'on' : ''}">${x.label}</button>`).join('')}
          </div>
        </div>`
      : `<p class="mt-2 text-xs text-bark flex items-center gap-1.5"><i data-lucide="package" class="w-4 h-4 text-forest"></i> Quy cách tiêu chuẩn: <strong>${v.label}</strong></p>`;

    variantSection = `
      ${pills}
      <div class="mt-4 grid grid-cols-2 gap-3 bg-paper/80 p-3.5 rounded-2xl border border-[#E3D8C5]">
        <div>
          <span class="text-[11px] font-bold uppercase text-thocam">Giá bán lẻ</span>
          <p class="text-2xl font-extrabold text-thocam mt-0.5">${fmt(v.retail)}<span class="text-xs font-semibold text-bark">${unit}</span></p>
        </div>
        <div class="border-l border-[#D8CCB6] pl-3">
          <div class="flex items-center justify-between gap-1 flex-wrap">
            <span class="text-[11px] font-bold uppercase text-forest">Giá sỉ HTX</span>
            ${pct > 0 ? `<span class="badge-discount">−${pct}%</span>` : ''}
          </div>
          <p class="text-2xl font-extrabold text-forest mt-0.5">${fmt(v.wholesale)}<span class="text-xs font-semibold text-bark">${unit}</span></p>
        </div>
      </div>`;
  } else {
    variantSection = `
      <div class="mt-4 bg-paper p-4 rounded-2xl border border-[#E3D8C5]">
        <p class="text-xs font-bold uppercase text-wood">Quy cách &amp; Báo giá</p>
        <p class="text-sm font-bold text-forest mt-1">${p.spec ? `Quy cách: ${p.spec} · ` : ''}${p.contact}</p>
      </div>`;
  }

  const hasRealImg = !!getProductImg(p);
  const modalPhotoBadge = hasRealImg
    ? `<span class="absolute bottom-2 right-2 bg-white/95 text-forest text-[10px] font-bold rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-sm">
        <i data-lucide="check-circle-2" class="w-3 h-3 text-eco"></i> Ảnh thực tế tại HTX
      </span>`
    : `<span class="absolute bottom-2 right-2 bg-white/90 text-bark text-[10px] font-medium rounded-full px-2.5 py-0.5 flex items-center gap-1">
        <i data-lucide="camera" class="w-3 h-3 text-thocam"></i> Ảnh minh họa · Đang cập nhật ảnh thực tế
      </span>`;

  body.innerHTML = `
    <div class="grid md:grid-cols-12 gap-6 items-start">
      <!-- Cột trái: Visual + QR Truy xuất nguồn gốc -->
      <div class="md:col-span-5 space-y-4">
        <div class="${artBgClass(p)} rounded-2xl h-56 flex items-center justify-center relative overflow-hidden border border-[#E3D8C5]">
          ${artHtml(p)}
          ${p.badge ? `<span class="absolute top-3 left-3 bg-thocam text-white text-xs font-bold px-3 py-1 rounded-full shadow">${p.badge}</span>` : ''}
          <span class="absolute top-3 right-3 bg-white/95 text-forest text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm"><i data-lucide="badge-check" class="w-3.5 h-3.5 text-thocam"></i> OCOP</span>
          ${modalPhotoBadge}
        </div>

        <!-- Khung mô phỏng Mã QR Truy xuất nguồn gốc HTX Tây Bắc Eco -->
        <div class="bg-white rounded-2xl p-4 border border-[#E3D8C5] shadow-sm">
          <div class="flex items-center gap-3.5">
            <div class="shrink-0 w-20 h-20 rounded-xl bg-cream border border-[#D8CCB6] p-1.5 flex items-center justify-center">
              <svg viewBox="0 0 64 64" class="w-full h-full text-ink" aria-label="Mã QR Truy xuất nguồn gốc">
                <rect x="4" y="4" width="18" height="18" fill="none" stroke="currentColor" stroke-width="4"/>
                <rect x="10" y="10" width="6" height="6" fill="currentColor"/>
                <rect x="42" y="4" width="18" height="18" fill="none" stroke="currentColor" stroke-width="4"/>
                <rect x="48" y="10" width="6" height="6" fill="currentColor"/>
                <rect x="4" y="42" width="18" height="18" fill="none" stroke="currentColor" stroke-width="4"/>
                <rect x="10" y="48" width="6" height="6" fill="currentColor"/>
                <rect x="28" y="6" width="6" height="6" fill="currentColor"/>
                <rect x="28" y="16" width="6" height="10" fill="currentColor"/>
                <rect x="6" y="28" width="10" height="6" fill="currentColor"/>
                <rect x="22" y="28" width="12" height="6" fill="#2D5A27"/>
                <rect x="38" y="28" width="6" height="12" fill="currentColor"/>
                <rect x="48" y="28" width="12" height="6" fill="currentColor"/>
                <rect x="28" y="40" width="6" height="8" fill="currentColor"/>
                <rect x="38" y="46" width="10" height="6" fill="#2D5A27"/>
                <rect x="52" y="42" width="8" height="8" fill="currentColor"/>
                <rect x="28" y="52" width="8" height="8" fill="currentColor"/>
                <rect x="44" y="54" width="16" height="6" fill="currentColor"/>
              </svg>
            </div>
            <div class="text-xs space-y-1">
              <span class="inline-flex items-center gap-1 font-bold text-forest bg-eco/15 px-2 py-0.5 rounded-md">
                <i data-lucide="qr-code" class="w-3.5 h-3.5"></i> Tem QR Truy xuất nguồn gốc
              </span>
              <p class="font-bold text-ink">Hợp tác xã Tây Bắc Eco</p>
              <p class="text-bark">Vùng trồng: Bản Bùa Thượng, xã Gia Phù, tỉnh Sơn La</p>
              <p class="text-[11px] text-forest font-semibold">Canh tác hướng Eco · Đạt chuẩn OCOP</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cột phải: Thông tin chi tiết, Công dụng, Bảo quản & Mua hàng -->
      <div class="md:col-span-7 space-y-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-forest bg-eco/15 px-2.5 py-1 rounded-md">${p.group}</span>
          <h3 class="text-2xl font-extrabold text-ink mt-2" style="font-family:'Be Vietnam Pro'">${p.name}</h3>
          <p class="text-xs text-bark mt-1 flex items-center gap-1.5">
            <i data-lucide="calendar-days" class="w-4 h-4 text-forest"></i> Mùa vụ cung ứng: <strong>${p.season}</strong>
          </p>
        </div>

        <p class="text-sm text-bark leading-relaxed bg-white p-3.5 rounded-xl border border-[#EDE4D5]">${p.desc || ''}</p>

        ${variantSection}

        <div class="grid sm:grid-cols-2 gap-3 text-sm">
          <div class="bg-white p-3.5 rounded-xl border border-[#EDE4D5]">
            <h4 class="font-bold text-ink flex items-center gap-1.5 text-xs uppercase tracking-wider text-forest">
              <i data-lucide="utensils" class="w-4 h-4 text-eco"></i> Công dụng &amp; Cách dùng
            </h4>
            <p class="mt-1.5 text-xs leading-relaxed text-bark">${p.usage || 'Chế biến món ăn gia đình hoặc làm quà biếu đặc sản Tây Bắc.'}</p>
          </div>
          <div class="bg-white p-3.5 rounded-xl border border-[#EDE4D5]">
            <h4 class="font-bold text-ink flex items-center gap-1.5 text-xs uppercase tracking-wider text-wood">
              <i data-lucide="shield-check" class="w-4 h-4 text-thocam"></i> Cách bảo quản chuẩn
            </h4>
            <p class="mt-1.5 text-xs leading-relaxed text-bark">${p.storage || 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.'}</p>
          </div>
        </div>

        <div class="pt-2 grid sm:grid-cols-3 gap-2.5">
          <a data-shop="shopee" href="#" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#EE4D2D">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Mua Shopee
          </a>
          <a data-shop="tiktok" href="#" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#111111">
            <svg class="w-4 h-4"><use href="#tiktok"/></svg> TikTok Shop
          </a>
          <a href="${ZALO_URL}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 text-white text-sm font-bold py-3 px-4 rounded-xl hover:opacity-95 transition shadow-sm" style="background:#0068FF">
            <svg class="w-4 h-4"><use href="#zalo"/></svg> Zalo 0904836616
          </a>
        </div>
      </div>
    </div>
  `;
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
  const qNorm = normStr(state.q);
  const list = PRODUCTS.filter(p => {
    const matchCat = state.filter === 'all' || p.cats.includes(state.filter);
    const matchQ = !qNorm || normStr(p.name + ' ' + p.group + ' ' + (p.desc || '')).includes(qNorm);
    return matchCat && matchQ;
  });

  if (list.length === 0) {
    $('#productGrid').innerHTML = `
      <div class="sm:col-span-2 lg:col-span-3 xl:col-span-4 paper-card p-10 text-center">
        <div class="w-14 h-14 mx-auto rounded-full bg-paper text-bark flex items-center justify-center">
          <i data-lucide="search-x" class="w-7 h-7"></i>
        </div>
        <p class="mt-3 font-bold text-ink text-lg">Không tìm thấy sản phẩm phù hợp với từ khóa “${state.q}”</p>
        <p class="text-sm text-bark mt-1">Thử tìm với từ khóa khác như: <strong>tỏi cô đơn</strong>, <strong>miến tỏi đen</strong>, <strong>mắc khén</strong>, <strong>chẳm chéo</strong>...</p>
        <button data-action="reset-search" class="mt-4 btn-primary px-5 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-2">
          <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Xem lại toàn bộ 20 sản phẩm
        </button>
      </div>`;
  } else {
    $('#productGrid').innerHTML = list.map(p => cardHtml(p, state.mode)).join('');
  }

  const clearBtn = $('#clearSearchBtn');
  if (clearBtn) clearBtn.classList.toggle('hidden', !state.q);

  $('#resultCount').innerHTML = `Hiển thị <strong>${list.length}</strong> / ${PRODUCTS.length} sản phẩm · Đang xem: <strong class="text-forest">${state.mode === 'retail' ? 'Giá bán lẻ' : 'Bảng giá sỉ (Đại lý / Cửa hàng)'}</strong>${state.q ? ` · Từ khóa: <strong>“${state.q}”</strong>` : ''}`;
  renderFilters();
  renderModeButtons();
  if (state.activeProduct && $('#productModal.open')) {
    const activeObj = PRODUCTS.find(x => x.id === state.activeProduct);
    if (activeObj) renderProductModalContent(activeObj);
  }
  icons();
}

function renderAll() {
  renderFeatured();
  renderProducts();
}
