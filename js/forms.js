// Form đăng ký đại lý
/* ================== FORM ĐẠI LÝ ================== */
$('#agentForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const d = Object.fromEntries(new FormData(f).entries());
  const err = $('#formErr');
  if (!d.name.trim() || !d.phone.trim()) { err.classList.remove('hidden'); return; }
  err.classList.add('hidden');
  const body =
`ĐĂNG KÝ ĐẠI LÝ / ĐỐI TÁC PHÂN PHỐI SỈ – TÂY BẮC ECO
Họ tên: ${d.name}
SĐT/Zalo: ${d.phone}
Loại hình: ${d.type}
Cửa hàng/Công ty: ${d.company || '-'}
Tỉnh/TP: ${d.city || '-'}
Email: ${d.email || '-'}
Nhu cầu: ${d.msg || '-'}`;
  $('#okMail').href = 'mailto:htxtaybaceco@gmail.com?subject=' + encodeURIComponent('Đăng ký đại lý - ' + d.name) + '&body=' + encodeURIComponent(body);
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(body).catch(() => {});
  $('#formOk').classList.remove('hidden');
  $('#formOk').scrollIntoView({ behavior: 'smooth', block: 'center' });
  icons();
});
