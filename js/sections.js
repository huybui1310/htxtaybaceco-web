// Lịch mùa vụ, 6 bước quy trình, tin tức, góc thành viên
/* ================== LỊCH MÙA VỤ, CÁC BƯỚC, TIN TỨC ================== */
function buildCalendar() {
  const cur = new Date().getMonth() + 1;
  const cell = (m, on, cls) => `<div class="h-9 rounded-md flex items-center justify-center text-[11px] font-bold ${on ? cls : 'bg-paper text-bark/40'} ${m === cur ? 'ring-2 ring-thocam ring-offset-1' : ''}">${on ? '●' : ''}</div>`;
  let head = '', s = '', y = '';
  for (let m = 1; m <= 12; m++) {
    head += `<div class="${m === cur ? 'text-thocam' : ''}">T${m}</div>`;
    s += cell(m, m >= 3 && m <= 10, 'bg-eco text-white');
    y += cell(m, true, 'bg-wood text-white');
  }
  $('#calHead').innerHTML = head;
  $('#calSeason').innerHTML = s;
  $('#calYear').innerHTML = y;
}
function buildSteps() {
  $('#steps').innerHTML = STEPS.map((s, i) => `
    <div class="paper-card p-6 relative">
      <span class="absolute top-4 right-5 font-serif text-5xl font-extrabold text-eco/25">${i + 1}</span>
      <div class="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center"><i data-lucide="${s.icon}" class="w-6 h-6"></i></div>
      <h4 class="mt-4 font-bold text-ink text-lg" style="font-family:'Be Vietnam Pro'">Bước ${i + 1}: ${s.title}</h4>
      <p class="mt-2 text-sm leading-relaxed">${s.text}</p>
    </div>`).join('');
}
function buildNews() {
  const list = NEWS.filter(n => state.ntab === 'all' || n.type === state.ntab);
  $('#newsGrid').innerHTML = list.map(n => `
    <article class="paper-card overflow-hidden flex flex-col">
      <div class="${n.type === 'video' ? 'bg-gradient-to-br from-forest to-eco' : 'bg-gradient-to-br from-wood to-thocam'} h-40 flex items-center justify-center relative">
        <span class="w-16 h-16 rounded-full bg-white/90 text-forest flex items-center justify-center shadow-lg"><i data-lucide="${n.icon}" class="w-8 h-8 ${n.type === 'video' ? 'ml-1' : ''}"></i></span>
        <span class="absolute bottom-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-md">${n.type === 'video' ? 'Video đang cập nhật' : 'Bài viết đang cập nhật'}</span>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <span class="self-start text-[11px] font-bold ${n.type === 'video' ? 'bg-eco/20 text-forest' : 'bg-thocam/15 text-thocam'} px-2.5 py-1 rounded-full">${n.tag}</span>
        <h3 class="mt-3 font-bold text-ink leading-snug" style="font-family:'Be Vietnam Pro'">${n.title}</h3>
        <p class="mt-2 text-sm leading-relaxed flex-1">${n.text}</p>
        <button data-toast="${n.type === 'video' ? 'Video đang được HTX cập nhật.' : 'Bài viết đầy đủ đang được HTX cập nhật.'}" class="mt-4 self-start text-forest font-bold text-sm flex items-center gap-1.5 hover:text-thocam">${n.type === 'video' ? 'Xem video' : 'Đọc tiếp'} <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
      </div>
    </article>`).join('');
  $$('.ntab').forEach(b => b.classList.toggle('on', b.dataset.ntab === state.ntab));
  icons();
}
function buildMembers() {
  $('#memberVideos').innerHTML = MEMBER_VIDEOS.map((v, i) => `
    <article class="paper-card overflow-hidden">
      <div class="bg-gradient-to-br from-forest to-eco h-36 flex items-center justify-center relative">
        <span class="w-14 h-14 rounded-full bg-white/90 text-forest flex items-center justify-center shadow-lg"><i data-lucide="play" class="w-7 h-7 ml-1"></i></span>
        <span class="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-md">Bài ${i + 1}</span>
      </div>
      <div class="p-4">
        <h4 class="font-bold text-ink" style="font-family:'Be Vietnam Pro'">${v.title}</h4>
        <p class="text-sm mt-1">${v.text}</p>
        <button data-toast="Video đang được HTX cập nhật." class="mt-3 text-forest font-bold text-sm hover:text-thocam">Xem video</button>
      </div>
    </article>`).join('');
  $('#docList').innerHTML = DOCS.map(d => `
    <div class="paper-card p-4 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-paper text-forest flex items-center justify-center shrink-0"><i data-lucide="file-text" class="w-6 h-6"></i></div>
      <div class="flex-1 min-w-0"><p class="font-semibold text-ink leading-snug">${d.title}</p><p class="text-xs text-bark">${d.meta}</p></div>
      <button data-toast="Tài liệu đang được HTX cập nhật. Bà con có thể xin qua Zalo 0904836616." class="shrink-0 btn-primary text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1.5"><i data-lucide="download" class="w-4 h-4"></i> Tải</button>
    </div>`).join('');
}
