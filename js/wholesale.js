// Modal bảng giá sỉ & In báo giá PDF cho đại lý / Hội chợ OCOP
/* ================== MODAL GIÁ SỈ ================== */
function buildWholesale() {
  const rows = [];
  PRODUCTS.filter(p => p.variants).forEach(p => {
    p.variants.forEach(v => {
      const diff = v.retail - v.wholesale;
      const pct = Math.round(diff / v.retail * 100);
      rows.push(`<tr>
        <td class="font-bold text-ink">${p.name}</td>
        <td><span class="bg-paper px-2.5 py-1 rounded-md text-xs font-semibold">${v.label}</span></td>
        <td class="font-medium">${fmt(v.retail)}${v.unit || ''}</td>
        <td class="font-extrabold text-forest text-base">${fmt(v.wholesale)}${v.unit || ''}</td>
        <td><span class="badge-discount">−${fmt(diff)} (${pct}%)</span></td>
        <td class="text-xs text-bark">${p.season}</td></tr>`);
    });
  });
  $('#wsBody').innerHTML = rows.join('');
  const names = PRODUCTS.filter(p => !p.variants).map(p => p.name).join(', ');
  $('#wsContact').innerHTML = `${names}. <br><strong class="text-forest">Liên hệ trực tiếp Giám đốc Lại Thanh Phương qua Zalo 0904836616</strong> để nhận báo giá lẻ &amp; sỉ tốt nhất theo vụ.`;
}

function openWholesale() {
  if (typeof closeMenu === 'function') closeMenu();
  $('#wsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  icons();
}

function closeWholesale() {
  $('#wsModal').classList.remove('open');
  if (!$('#productModal.open')) document.body.style.overflow = '';
}

function printWholesale() {
  window.print();
}

$('#wsModal').addEventListener('click', e => { if (e.target.id === 'wsModal') closeWholesale(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeWholesale();
    if (typeof closeProductModal === 'function') closeProductModal();
    if (typeof closeMenu === 'function') closeMenu();
  }
});
