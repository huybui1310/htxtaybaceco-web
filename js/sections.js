// Lịch mùa vụ 12 tháng, 6 bước quy trình Eco Stepper, tin tức, 07 video kỹ thuật thành viên
/* ================== LỊCH MÙA VỤ, CÁC BƯỚC, TIN TỨC ================== */
function buildCalendar() {
  const cur = new Date().getMonth() + 1;
  const inGarlicSeason = cur >= 3 && cur <= 10;

  // Cập nhật badge trạng thái mùa vụ hiện tại nếu có trên DOM
  const statusEl = $('#seasonStatusBadge');
  if (statusEl) {
    statusEl.innerHTML = inGarlicSeason
      ? `<span class="inline-flex items-center gap-1.5 bg-eco/15 border border-eco text-forest text-xs font-extrabold px-3 py-1.5 rounded-full">
           <span class="w-2 h-2 rounded-full bg-eco animate-ping"></span>
           Tháng ${cur}: Đang trong vụ Tỏi củ &amp; Sẵn hàng chế biến sâu
         </span>`
      : `<span class="inline-flex items-center gap-1.5 bg-thocam/15 border border-thocam/40 text-thocam text-xs font-extrabold px-3 py-1.5 rounded-full">
           <i data-lucide="package-check" class="w-3.5 h-3.5"></i>
           Tháng ${cur}: Sẵn hàng chế biến sâu quanh năm
         </span>`;
  }

  const cell = (m, on, cls, label) => `
    <div class="h-10 rounded-lg flex flex-col items-center justify-center text-[11px] font-bold transition-all ${on ? cls : 'bg-paper/70 text-bark/35 border border-dashed border-[#DFD4C2]'} ${m === cur ? 'ring-2 ring-thocam ring-offset-2 scale-[1.03] shadow-sm' : ''}" title="Tháng ${m}: ${on ? label : 'Nghỉ vụ làm đất / xuống giống'}">
      <span>${on ? '●' : '–'}</span>
    </div>`;

  let head = '', s = '', y = '';
  for (let m = 1; m <= 12; m++) {
    const isCur = m === cur;
    head += `
      <div class="py-1.5 rounded-lg ${isCur ? 'bg-thocam text-white font-extrabold shadow-sm' : 'text-bark font-bold'}">
        T${m}${isCur ? '<span class="block text-[9px] font-medium leading-none opacity-90">Hiện tại</span>' : ''}
      </div>`;
    s += cell(m, m >= 3 && m <= 10, 'bg-eco text-white shadow-sm', 'Có hàng Tỏi củ tươi / khô');
    y += cell(m, true, 'bg-wood text-white shadow-sm', 'Sẵn hàng Chế biến sâu quanh năm');
  }
  $('#calHead').innerHTML = head;
  $('#calSeason').innerHTML = s;
  $('#calYear').innerHTML = y;
}

function buildSteps() {
  $('#steps').innerHTML = STEPS.map((s, i) => `
    <div class="paper-card step-card-connector p-6 relative group hover:border-eco">
      <div class="flex items-center justify-between">
        <div class="w-13 h-13 p-3 rounded-2xl bg-forest text-white flex items-center justify-center shadow-md group-hover:bg-eco transition-colors">
          <i data-lucide="${s.icon}" class="w-6 h-6"></i>
        </div>
        <span class="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-paper text-forest border border-[#E2D6C1]">
          Bước 0${i + 1}
        </span>
      </div>
      <span class="pointer-events-none select-none absolute bottom-2 right-4 font-serif text-6xl font-extrabold text-eco/12 group-hover:text-eco/25 transition-colors">0${i + 1}</span>
      <h4 class="mt-4 font-bold text-ink text-lg group-hover:text-forest transition-colors" style="font-family:'Be Vietnam Pro'">Bước ${i + 1}: ${s.title}</h4>
      <p class="mt-2 text-sm text-bark leading-relaxed relative z-10">${s.text}</p>
    </div>`).join('');
}

function buildNews() {
  const list = NEWS.filter(n => state.ntab === 'all' || n.type === state.ntab);
  $('#newsGrid').innerHTML = list.map(n => `
    <article class="paper-card overflow-hidden flex flex-col group">
      <div class="${n.type === 'video' ? 'bg-gradient-to-br from-forest via-forest to-eco' : 'bg-gradient-to-br from-wood to-thocam'} h-44 flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <span class="w-16 h-16 rounded-full bg-white/95 text-forest flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><i data-lucide="${n.icon}" class="w-8 h-8 ${n.type === 'video' ? 'ml-1' : ''}"></i></span>
        <span class="absolute bottom-2.5 left-3 bg-black/55 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
          <i data-lucide="clock" class="w-3 h-3"></i> ${n.type === 'video' ? 'Video đang cập nhật' : 'Bài viết đang cập nhật'}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <span class="self-start text-[11px] font-bold ${n.type === 'video' ? 'bg-eco/20 text-forest' : 'bg-thocam/15 text-thocam'} px-2.5 py-1 rounded-full">${n.tag}</span>
        <h3 class="mt-3 font-bold text-ink text-lg leading-snug group-hover:text-forest transition-colors" style="font-family:'Be Vietnam Pro'">${n.title}</h3>
        <p class="mt-2 text-sm text-bark leading-relaxed flex-1">${n.text}</p>
        <button data-toast="${n.type === 'video' ? 'Video đang được HTX cập nhật.' : 'Bài viết đầy đủ đang được HTX cập nhật.'}" class="mt-4 self-start text-forest font-bold text-sm flex items-center gap-1.5 hover:text-thocam">
          ${n.type === 'video' ? 'Xem video' : 'Đọc tiếp'} <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </article>`).join('');
  $$('.ntab').forEach(b => b.classList.toggle('on', b.dataset.ntab === state.ntab));
  icons();
}

function buildMembers() {
  $('#memberVideos').innerHTML = MEMBER_VIDEOS.map((v, i) => `
    <article class="paper-card overflow-hidden flex flex-col group">
      <div class="bg-gradient-to-br from-forest to-eco h-40 flex items-center justify-center relative">
        <button data-toast="Video bài ${i + 1} đang được HTX cập nhật. Bà con có thể nhắn Zalo 0904836616 để nhận hướng dẫn." aria-label="Phát ${v.title}" class="w-16 h-16 rounded-full bg-white text-forest flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <i data-lucide="play" class="w-8 h-8 ml-1 fill-current"></i>
        </button>
        <span class="absolute top-3 left-3 bg-white/95 text-forest text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
          Bài 0${i + 1} / 07
        </span>
        ${v.duration ? `<span class="absolute bottom-2.5 right-3 bg-black/65 text-white text-xs font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${v.duration}</span>` : ''}
        ${v.stage ? `<span class="absolute bottom-2.5 left-3 bg-black/55 text-cream text-[11px] font-medium px-2.5 py-0.5 rounded-md">${v.stage}</span>` : ''}
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <h4 class="font-bold text-ink text-base sm:text-lg leading-snug" style="font-family:'Be Vietnam Pro'">${v.title}</h4>
        <p class="text-sm text-bark mt-2 leading-relaxed flex-1">${v.text}</p>
        <button data-toast="Video đang được HTX cập nhật." class="mt-4 w-full py-3 px-4 rounded-xl bg-paper hover:bg-forest hover:text-white text-forest font-bold text-sm flex items-center justify-center gap-2 transition-colors">
          <i data-lucide="play-circle" class="w-5 h-5"></i> Bấm xem video hướng dẫn
        </button>
      </div>
    </article>`).join('');

  $('#docList').innerHTML = DOCS.map(d => `
    <div class="paper-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div class="w-14 h-14 rounded-2xl bg-eco/15 text-forest flex items-center justify-center shrink-0">
        <i data-lucide="file-text" class="w-7 h-7"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-bold text-ink text-base leading-snug">${d.title}</p>
        <p class="text-xs text-bark mt-1 flex items-center gap-1.5"><i data-lucide="file-check-2" class="w-3.5 h-3.5 text-eco"></i> ${d.meta}</p>
      </div>
      <button data-toast="Tài liệu đang được HTX cập nhật. Bà con có thể xin qua Zalo 0904836616." class="w-full sm:w-auto shrink-0 btn-primary text-sm font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2">
        <i data-lucide="download" class="w-4 h-4"></i> Tải về máy
      </button>
    </div>`).join('');
}
