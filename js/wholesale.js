// Modal bảng giá sỉ
/* ================== MODAL GIÁ SỈ ================== */
function buildWholesale() {
  const rows = [];
  PRODUCTS.filter(p => p.variants).forEach(p => {
    p.variants.forEach(v => {
      const diff = v.retail - v.wholesale;
      const pct = Math.round(diff / v.retail * 100);
      rows.push(`<tr>
        <td class="font-semibold text-ink">${p.name}</td>
        <td>${v.label}</td>
        <td>${fmt(v.retail)}${v.unit || ''}</td>
        <td class="font-bold text-forest">${fmt(v.wholesale)}${v.unit || ''}</td>
        <td class="text-thocam font-semibold">−${fmt(diff)} (${pct}%)</td>
        <td class="text-xs">${p.season}</td></tr>`);
    });
  });
  $('#wsBody').innerHTML = rows.join('');
  const names = PRODUCTS.filter(p => !p.variants).map(p => p.name).join(', ');
  $('#wsContact').innerHTML = `${names}. <br><strong class="text-forest">Liên hệ Zalo 0904836616</strong> để nhận báo giá lẻ &amp; sỉ theo vụ.`;
}
function openWholesale() { $('#wsModal').classList.add('open'); document.body.style.overflow = 'hidden'; icons(); }
function closeWholesale() { $('#wsModal').classList.remove('open'); document.body.style.overflow = ''; }
$('#wsModal').addEventListener('click', e => { if (e.target.id === 'wsModal') closeWholesale(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeWholesale(); });
