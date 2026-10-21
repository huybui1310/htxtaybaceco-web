// Khởi tạo trang
/* ================== KHỞI TẠO ================== */
buildNav();
buildCalendar();
buildSteps();
buildNews();
buildMembers();
buildWholesale();
renderAll();
go(location.hash.replace('#', '') || 'home', false);
icons();
