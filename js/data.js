// Dữ liệu: sản phẩm, menu, quy trình, tin tức, tài liệu
/* ================== DỮ LIỆU SẢN PHẨM ================== */
// cat: season = tỏi củ theo mùa | year = chế biến sâu quanh năm | specialty = đặc sản Tây Bắc | featured = sản phẩm chủ lực
const PRODUCTS = [
  { id: 'toi-nhanh', name: 'Tỏi nhánh', cats: ['featured', 'season'], art: 'cloves', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    variants: [{ label: 'Túi 1kg', retail: 75000, wholesale: 55000, unit: '/kg' }] },
  { id: 'toi-co-don-vip', name: 'Tỏi cô đơn VIP', cats: ['season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    variants: [{ label: 'Túi 0,5kg', retail: 230000, wholesale: 175000 }, { label: 'Túi 1kg', retail: 450000, wholesale: 350000 }] },
  { id: 'toi-co-don-to', name: 'Tỏi cô đơn to', cats: ['season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    variants: [{ label: 'Túi 0,5kg', retail: 195000, wholesale: 190000 }, { label: 'Túi 1kg', retail: 380000, wholesale: 280000 }] },
  { id: 'toi-co-don', name: 'Tỏi cô đơn', cats: ['featured', 'season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    variants: [{ label: 'Túi 0,5kg', retail: 175000, wholesale: 160000 }, { label: 'Túi 1kg', retail: 310000, wholesale: 250000 }] },
  { id: 'mien-toi-den', name: 'Miến tỏi đen', badge: 'Sản phẩm chủ lực', cats: ['featured', 'year'], art: 'noodle', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    variants: [{ label: 'Hộp 500g', retail: 110000, wholesale: 85000, unit: '/hộp' }] },
  { id: 'ruou-toi-den', name: 'Rượu tỏi đen', cats: ['year'], art: 'bottle', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    variants: [{ label: 'Chai 500ml', retail: 210000, wholesale: 180000, unit: '/chai' }] },
  { id: 'toi-den-mat-ong', name: 'Tỏi đen ngâm mật ong', cats: ['year'], art: 'honey', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    variants: [{ label: 'Chai 10ml', retail: 95000, wholesale: 75000, unit: '/chai' }] },
  { id: 'toi-den-co-don', name: 'Tỏi đen cô đơn', cats: ['featured', 'year'], art: 'blackgarlic', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE },
  { id: 'toi-kho', name: 'Tỏi khô (phơi/sấy)', cats: ['year'], art: 'dried', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE },
  { id: 'toi-giong', name: 'Tỏi giống', cats: ['year'], art: 'seed', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE },
  { id: 'dam-toi', name: 'Dấm tỏi', cats: ['year'], art: 'vinegar', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE },
  { id: 'chuoi-soi', name: 'Chuối sợi', spec: 'Túi 0,5kg', cats: ['specialty'], art: 'banana', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'cham-cheo-kho', name: 'Chẳm chéo khô', cats: ['specialty'], art: 'chili', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'cham-cheo-uot', name: 'Chẳm chéo ướt', cats: ['specialty'], art: 'chili', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'mang-kho', name: 'Măng khô', cats: ['specialty'], art: 'bamboo', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'banh-que', name: 'Bánh quế', cats: ['specialty'], art: 'cookie', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'muoi-mac-khen', name: 'Muối mắc khén', cats: ['specialty'], art: 'salt', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'muoi-hat-doi', name: 'Muối hạt dổi', cats: ['specialty'], art: 'salt', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'hat-mac-khen', name: 'Hạt mắc khén', cats: ['specialty'], art: 'nut', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE },
  { id: 'hat-doi', name: 'Hạt dổi', cats: ['specialty'], art: 'nut', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE }
];
const FEATURED_ORDER = ['mien-toi-den', 'toi-den-co-don', 'toi-co-don', 'toi-nhanh'];

const FILTERS = [
  { key: 'all', label: 'Tất cả' },
  { key: 'featured', label: 'Sản phẩm chủ lực' },
  { key: 'season', label: 'Tỏi củ theo mùa' },
  { key: 'year', label: 'Chế biến sâu quanh năm' },
  { key: 'specialty', label: 'Đặc sản Tây Bắc' }
];

const NAV = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'about', label: 'Giới thiệu HTX' },
  { id: 'products', label: 'Sản phẩm' },
  { id: 'process', label: 'Quy trình sản xuất / Vùng trồng' },
  { id: 'news', label: 'Bảng tin & Video' },
  { id: 'certs', label: 'Chứng nhận & Thành tích' },
  { id: 'members', label: 'Dành cho bà con thành viên' },
  { id: 'contact', label: 'Liên hệ' }
];

const STEPS = [
  { icon: 'wheat', title: 'Chọn giống tỏi', text: 'Chọn củ giống chắc, đều, sạch bệnh từ vụ trước; tách nhánh cẩn thận trước khi gieo.' },
  { icon: 'mountain-snow', title: 'Trồng tại vùng đất Gia Phù', text: 'Làm đất tơi xốp trên đồi cao, bón phân hữu cơ, gieo đúng thời vụ để tỏi phát triển khỏe.' },
  { icon: 'droplets', title: 'Chăm sóc & thu hoạch', text: 'Làm cỏ, tưới tiết kiệm nước, hạn chế thuốc hóa học; thu hoạch bằng tay khi lá tỏi chuyển vàng.' },
  { icon: 'sun', title: 'Phơi / sấy tự nhiên', text: 'Phơi dưới nắng gió vùng cao hoặc sấy nhẹ để tỏi khô đều, giữ hương thơm và bảo quản được lâu.' },
  { icon: 'flask-round', title: 'Lên men tỏi đen', text: 'Chọn tỏi cô đơn đẹp, ủ lên men tự nhiên cho đến khi nhân tỏi chuyển đen, dẻo và ngọt dịu.' },
  { icon: 'qr-code', title: 'Đóng gói & truy xuất QR', text: 'Đóng gói sạch sẽ, dán nhãn có mã QR để người mua biết nguồn gốc vùng trồng và ngày sản xuất.' }
];

const NEWS = [
  { type: 'video', icon: 'play', title: 'Kỹ thuật trồng tỏi Eco: từ chọn giống đến xuống giống', tag: 'Video kỹ thuật', text: 'Hướng dẫn từng bước dành cho bà con thành viên.' },
  { type: 'video', icon: 'play', title: 'Một ngày ở vùng trồng tỏi Bản Bùa Thượng', tag: 'Video vùng trồng', text: 'Cùng ghé thăm những triền đồi tỏi của Gia Phù, Sơn La.' },
  { type: 'video', icon: 'play', title: 'Miến tỏi đen – từ củ tỏi đến bát miến thơm', tag: 'Video sản phẩm', text: 'Câu chuyện sản phẩm chủ lực của Hợp tác xã.' },
  { type: 'news', icon: 'newspaper', title: 'Tây Bắc Eco chuẩn bị gian hàng tại Hội chợ OCOP tháng 11/2026', tag: 'Tin hội chợ', text: 'HTX đang chuẩn bị sản phẩm, bao bì và chương trình ưu đãi để giới thiệu đến khách tham quan hội chợ.' },
  { type: 'news', icon: 'newspaper', title: 'Mở đăng ký đại lý, cửa hàng đặc sản nhập sỉ', tag: 'Tin kinh doanh', text: 'Cửa hàng đặc sản, siêu thị quan tâm có thể nhận bảng giá sỉ qua Zalo 0904836616.' },
  { type: 'news', icon: 'newspaper', title: 'Tập huấn kỹ thuật canh tác tỏi Eco cho hộ thành viên', tag: 'Tin thành viên', text: 'Lịch tập huấn sẽ được thông báo tại mục “Dành cho bà con thành viên”.' }
];

const MEMBER_VIDEOS = [
  { title: 'Chọn giống & làm đất', text: 'Cách chọn củ giống và chuẩn bị đất trước vụ.' },
  { title: 'Chăm sóc & phòng bệnh theo hướng Eco', text: 'Bón phân, tưới nước, phòng sâu bệnh an toàn.' },
  { title: 'Thu hoạch, phơi sấy & bảo quản', text: 'Giữ tỏi khô, thơm, đạt tiêu chuẩn thu mua.' }
];

const DOCS = [
  { title: 'Sổ tay kỹ thuật trồng tỏi Eco', meta: 'PDF · đang cập nhật' },
  { title: 'Tiêu chuẩn thu mua tỏi của HTX', meta: 'PDF · đang cập nhật' },
  { title: 'Lịch thời vụ & chăm sóc cả năm', meta: 'PDF · đang cập nhật' },
  { title: 'Mẫu đăng ký bán tỏi cho HTX', meta: 'DOCX · đang cập nhật' }
];

const ICON_FOR_ART = { noodle: 'soup', bottle: 'wine', honey: 'droplet', dried: 'wheat', seed: 'sprout', vinegar: 'flask-conical', banana: 'banana', chili: 'flame', bamboo: 'sprout', cookie: 'cookie', salt: 'mountain', nut: 'nut' };
