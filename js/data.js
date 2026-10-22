// Dữ liệu: sản phẩm, menu, quy trình, tin tức, tài liệu
/* ================== DỮ LIỆU SẢN PHẨM ================== */
// cat: season = tỏi củ theo mùa | year = chế biến sâu quanh năm | specialty = đặc sản Tây Bắc | featured = sản phẩm chủ lực
const PRODUCTS = [
  { id: 'toi-nhanh', name: 'Tỏi nhánh', cats: ['featured', 'season'], art: 'cloves', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    desc: 'Tỏi nhánh bản địa Gia Phù củ chắc, tép đều, vỏ mỏng tự nhiên, mùi thơm nồng đậm và vị cay dịu hậu ngọt đặc trưng của vùng đồi cao Sơn La.',
    usage: 'Phi thơm, ướp thực phẩm, pha nước chấm, xào nấu hàng ngày hoặc ngâm dấm ớt tăng hương vị bữa cơm gia đình.',
    storage: 'Treo nơi khô thoáng, đón gió tự nhiên, tránh ẩm ướt và ánh nắng gắt trực tiếp (bảo quản 3–5 tháng).',
    variants: [{ label: 'Túi 1kg', retail: 75000, wholesale: 55000, unit: '/kg' }] },
  { id: 'toi-co-don-vip', name: 'Tỏi cô đơn VIP', cats: ['season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    desc: 'Tuyển chọn những củ tỏi một nhánh (cô đơn) tròn đều, kích thước lớn nhất vụ, hàm lượng tinh dầu Allicin dồi dào, rất thích hợp làm quà biếu cao cấp.',
    usage: 'Ăn trực tiếp, ngâm mật ong rừng, ngâm rượu bổ dưỡng hoặc dùng làm nguyên liệu ủ tỏi đen thượng hạng.',
    storage: 'Bảo quản nơi khô ráo, thoáng mát hoặc trong túi lưới treo cao; tránh bọc kín trong túi nilon.',
    variants: [{ label: 'Túi 0,5kg', retail: 230000, wholesale: 175000 }, { label: 'Túi 1kg', retail: 450000, wholesale: 350000 }] },
  { id: 'toi-co-don-to', name: 'Tỏi cô đơn to', cats: ['season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    desc: 'Củ tỏi cô đơn cỡ to đồng đều, dễ bóc vỏ, nhân tỏi giòn chắc và thơm dậy mùi hơn hẳn tỏi vùng đồng bằng.',
    usage: 'Dùng chế biến món ăn cao cấp, ngâm rượu tỏi, ngâm mật ong hoặc tự làm tỏi đen tại nhà.',
    storage: 'Để nơi thoáng gió, khô ráo, nhiệt độ phòng mát mẻ, tránh để trong ngăn mát tủ lạnh lâu ngày dễ mọc mầm.',
    variants: [{ label: 'Túi 0,5kg', retail: 195000, wholesale: 190000 }, { label: 'Túi 1kg', retail: 380000, wholesale: 280000 }] },
  { id: 'toi-co-don', name: 'Tỏi cô đơn', img: 'assets/toi-co-don.jpg', cats: ['featured', 'season'], art: 'garlic', group: 'Tỏi tươi & tỏi củ Tây Bắc', season: SEASON_TXT,
    desc: 'Mỗi củ chỉ gồm duy nhất một tép tròn xinh, hội tụ toàn bộ dưỡng chất của cây tỏi trồng trên đất đồi Bản Bùa Thượng.',
    usage: 'Bóc vỏ nhanh gọn cho bữa ăn hàng ngày, ngâm dấm, ngâm mật ong hoặc chế biến món xào, nướng.',
    storage: 'Đặt ở rổ thoáng hoặc treo nơi khô mát, tránh nơi có độ ẩm cao.',
    variants: [{ label: 'Túi 0,5kg', retail: 175000, wholesale: 160000 }, { label: 'Túi 1kg', retail: 310000, wholesale: 250000 }] },
  { id: 'mien-toi-den', name: 'Miến tỏi đen', badge: 'Sản phẩm chủ lực', cats: ['featured', 'year'], art: 'noodle', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    desc: 'Sản phẩm chủ lực kết hợp tinh chất tỏi đen lên men tự nhiên với sợi miến dong Tây Bắc dai ngon, màu nâu óng đẹp mắt và thanh mát.',
    usage: 'Ngâm nước ấm 3–5 phút rồi nấu miến gà, miến mọc, miến trộn, thả lẩu hoặc xào hải sản đều giữ độ dai giòn.',
    storage: 'Đậy kín hộp hoặc buộc kín túi sau khi mở, để nơi khô ráo, thoáng mát (hạn dùng theo bao bì).',
    variants: [{ label: 'Hộp 500g', retail: 110000, wholesale: 85000, unit: '/hộp' }] },
  { id: 'ruou-toi-den', name: 'Rượu tỏi đen', cats: ['year'], art: 'bottle', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    desc: 'Ngâm ủ từ tỏi đen cô đơn Gia Phù cùng rượu gạo truyền thống êm dịu, hương thơm trầm ấm, vị ngọt hậu đặc trưng.',
    usage: 'Dùng 1–2 ly nhỏ (15–20ml) trong bữa ăn mỗi ngày hoặc làm quà biếu sức khỏe ý nghĩa cho người thân.',
    storage: 'Đậy chặt nắp chai, đặt nơi thoáng mát, tránh ánh nắng mặt trời trực tiếp; để càng lâu càng êm.',
    variants: [{ label: 'Chai 500ml', retail: 210000, wholesale: 180000, unit: '/chai' }] },
  { id: 'toi-den-mat-ong', name: 'Tỏi đen ngâm mật ong', cats: ['year'], art: 'honey', group: 'Chế biến sâu từ tỏi Eco', season: YEAR_TXT,
    desc: 'Sự hòa quyện giữa tỏi đen lên men dẻo ngọt và mật ong hoa rừng Tây Bắc nguyên chất, tiện lợi mang theo bên mình.',
    usage: 'Dùng trực tiếp hoặc pha cùng nước ấm uống vào buổi sáng giúp bồi bổ cơ thể, ấm cổ họng.',
    storage: 'Bảo quản nơi khô mát ở nhiệt độ phòng, tránh ánh nắng trực tiếp và không để nước lã lọt vào chai.',
    variants: [{ label: 'Chai 10ml', retail: 95000, wholesale: 75000, unit: '/chai' }] },
  { id: 'toi-den-co-don', name: 'Tỏi đen cô đơn', cats: ['featured', 'year'], art: 'blackgarlic', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE,
    desc: 'Ủ lên men tự nhiên dài ngày từ tỏi cô đơn Gia Phù cho đến khi tép tỏi chuyển màu đen nhánh, mềm dẻo, vị ngọt dịu như ô mai và không còn mùi hăng.',
    usage: 'Bóc vỏ ăn trực tiếp 1–3 củ mỗi ngày trước hoặc sau bữa ăn, hoặc dùng chế biến súp, nước sốt.',
    storage: 'Đóng kín túi/hộp sau khi mở, bảo quản nơi khô mát hoặc ngăn mát tủ lạnh để giữ độ dẻo ngon.' },
  { id: 'toi-kho', name: 'Tỏi khô (phơi/sấy)', cats: ['year'], art: 'dried', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE,
    desc: 'Tỏi Gia Phù được thu hoạch đúng độ già, phơi nắng gió vùng cao hoặc sấy nhẹ giữ trọn tinh dầu thơm cay.',
    usage: 'Thuận tiện dự trữ cho bếp gia đình, nhà hàng, quán ăn hoặc làm nguyên liệu chế biến gia vị.',
    storage: 'Treo nơi khô ráo, thoáng gió, kiểm tra định kỳ tránh ẩm mốc.' },
  { id: 'toi-giong', name: 'Tỏi giống', cats: ['year'], art: 'seed', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE,
    desc: 'Củ giống bản địa được tuyển chọn kỹ từ những ruộng tỏi khỏe mạnh tại Gia Phù, tỷ lệ nảy mầm cao, thích nghi tốt khí hậu vùng cao.',
    usage: 'Tách nhánh nhẹ nhàng ngay trước khi xuống giống theo hướng dẫn kỹ thuật canh tác Eco của HTX.',
    storage: 'Để trên giàn thoáng mát, tuyệt đối không để nơi ẩm ướt hoặc nhiệt độ cao trước ngày gieo.' },
  { id: 'dam-toi', name: 'Dấm tỏi', cats: ['year'], art: 'vinegar', group: 'Chế biến sâu từ tỏi Eco', season: 'Báo giá theo vụ', contact: ZALO_NOTE,
    desc: 'Tỏi bản địa ngâm cùng dấm lên men tự nhiên, tép tỏi trắng giòn, vị chua thanh thơm dịu kích thích vị giác.',
    usage: 'Ăn kèm phở, bún, миến, đồ nướng hoặc dùng pha nước chấm nem, gỏi cuốn.',
    storage: 'Đậy kín nắp hũ, dùng muỗng sạch khi lấy và bảo quản nơi thoáng mát.' },
  { id: 'chuoi-soi', name: 'Chuối sợi', spec: 'Túi 0,5kg', cats: ['specialty'], art: 'banana', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Chế biến từ những buồng chuối nương Sơn La già quả, thái sợi và sấy dẻo thơm ngọt tự nhiên, không chất bảo quản.',
    usage: 'Dùng làm món ăn vặt lành mạnh, đãi khách uống trà hoặc làm quà du lịch Tây Bắc.',
    storage: 'Kéo kín khóa túi zip sau khi dùng, để nơi khô thoáng hoặc ngăn mát tủ lạnh.' },
  { id: 'cham-cheo-kho', name: 'Chẳm chéo khô', cats: ['specialty'], art: 'chili', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Thức chấm truyền thống của đồng bào Thái Sơn La phối trộn từ mắc khén, hạt dổi, tỏi Gia Phù, ớt nướng và muối rang.',
    usage: 'Chấm thịt luộc, gà nướng, cá nướng, xôi nếp hoặc chấm các loại quả chua (xoài, mận, nhót).',
    storage: 'Đậy thật kín nắp hũ sau khi sử dụng để giữ trọn hương thơm tinh dầu mắc khén, hạt dổi.' },
  { id: 'cham-cheo-uot', name: 'Chẳm chéo ướt', cats: ['specialty'], art: 'chili', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Giã quyện từ tỏi tươi Gia Phù, ớt, rau thơm bản địa, mắc khén và hạt dổi nướng thơm lừng chuẩn vị Tây Bắc.',
    usage: 'Chấm rau củ luộc, măng luộc, thịt quay, cá nướng hoặc vắt thêm chanh làm nước chấm đậm đà.',
    storage: 'Bảo quản trong ngăn mát tủ lạnh sau khi mở nắp và dùng ngon nhất trong vòng 1–2 tháng.' },
  { id: 'mang-kho', name: 'Măng khô', cats: ['specialty'], art: 'bamboo', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Măng rừng vùng cao Sơn La thu hái tự nhiên, luộc và phơi nắng kỹ, thớ măng dày, vàng tự nhiên, không lưu huỳnh.',
    usage: 'Ngâm nước ấm hoặc nước gạo qua đêm, luộc lại rồi nấu canh sườn, vịt om măng hoặc xào miến.',
    storage: 'Buộc kín trong túi bóng để nơi khô ráo; thỉnh thoảng đem phơi lại nắng nếu thời tiết nồm ẩm.' },
  { id: 'banh-que', name: 'Bánh quế', cats: ['specialty'], art: 'cookie', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Bánh quế giòn tan mang hương thơm ấm áp của quế rừng vùng cao, vị ngọt thanh vừa miệng cho mọi lứa tuổi.',
    usage: 'Thưởng thức trực tiếp cùng trà nóng, cà phê hoặc làm quà biếu dịp lễ Tết.',
    storage: 'Buộc kín miệng túi ngay sau khi lấy bánh để giữ độ giòn rụm.' },
  { id: 'muoi-mac-khen', name: 'Muối mắc khén', cats: ['specialty'], art: 'salt', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Muối hạt xay quyện cùng hạt mắc khén rừng rang thơm và tỏi ớt bản địa, dậy mùi thơm tê đầu lưỡi đặc trưng.',
    usage: 'Chấm gà luộc, hải sản, trái cây hoặc dùng tẩm ướp các món nướng, chiên.',
    storage: 'Đậy kín nắp hũ, để nơi khô thoáng, tránh gần bếp nóng hoặc nơi ẩm ướt.' },
  { id: 'muoi-hat-doi', name: 'Muối hạt dổi', cats: ['specialty'], art: 'salt', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Kết hợp hạt dổi nếp nướng than hoa dậy mùi thơm quyến rũ cùng muối rang và gia vị bản địa.',
    usage: 'Chấm thịt luộc, lòng dồi, đồ nướng hoặc nêm nếm tăng hương vị cho món ăn.',
    storage: 'Đậy kín nắp hũ sau khi mở, bảo quản nơi khô ráo, thoáng mát.' },
  { id: 'hat-mac-khen', name: 'Hạt mắc khén', cats: ['specialty'], art: 'nut', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: 'Được mệnh danh là “hạt tiêu rừng” của vùng Tây Bắc với hương thơm nồng nàn và vị tê nhẹ rất riêng.',
    usage: 'Rang thơm trên chảo nhỏ rồi giã/xay mịn để ướp cá nướng (pa pỉnh tộp), thịt nướng hoặc pha đồ chấm.',
    storage: 'Nên giữ nguyên hạt trong hũ kín, dùng đến đâu rang xay đến đó để giữ trọn tinh dầu.' },
  { id: 'hat-doi', name: 'Hạt dổi', cats: ['specialty'], art: 'nut', group: 'Đặc sản & gia vị bản làng Tây Bắc', season: 'Liên hệ để biết mùa vụ', contact: CONTACT_NOTE,
    desc: '“Vàng đen” gia vị của núi rừng Tây Bắc, hạt dổi nếp thơm sâu, chỉ cần vài hạt đã làm bừng dậy cả mâm cơm.',
    usage: 'Nướng nhanh trên than hồng hoặc chảo khô cho hạt phồng thơm rồi giã nhỏ trộn muối ớt hoặc ướp thịt.',
    storage: 'Bảo quản hạt khô trong lọ thủy tinh kín nắp ở nơi thoáng mát, tránh ẩm.' }
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
  { title: '1. Chọn giống & xử lý nhánh tỏi', duration: '06:30', stage: 'Giai đoạn chuẩn bị', text: 'Cách chọn củ tỏi giống bản địa chắc khỏe, đồng đều và kỹ thuật tách nhánh không làm trầy xước mầm trước khi xuống giống.' },
  { title: '2. Làm đất & bón lót hữu cơ trên đất đồi Gia Phù', duration: '08:15', stage: 'Giai đoạn làm đất', text: 'Kỹ thuật cày xới đất tơi xốp, lên luống thoát nước trên triền đồi và ủ bón phân chuồng hoai mục, phân hữu cơ vi sinh.' },
  { title: '3. Kỹ thuật xuống giống & phủ rơm giữ ẩm', duration: '07:40', stage: 'Giai đoạn gieo trồng', text: 'Khoảng cách cắm tép tỏi chuẩn, độ sâu hợp lý và cách phủ rơm rạ tự nhiên giúp giữ ẩm, hạn chế cỏ dại.' },
  { title: '4. Tưới nước & chăm sóc sinh thái', duration: '06:50', stage: 'Giai đoạn chăm sóc', text: 'Lịch tưới nước tiết kiệm theo từng thời kỳ phát triển của cây tỏi và cách bón thúc hữu cơ giúp củ phình to, chắc tép.' },
  { title: '5. Phòng trừ sâu bệnh tự nhiên không hóa chất độc hại', duration: '09:10', stage: 'Bảo vệ thực vật Eco', text: 'Nhận biết sớm bệnh sương mai, thối nhũn và cách dùng chế phẩm sinh học, thảo mộc tự nhiên an toàn cho đất và người trồng.' },
  { title: '6. Thu hoạch đúng độ chín & cắt rễ', duration: '05:45', stage: 'Giai đoạn thu hoạch', text: 'Dấu hiệu nhận biết tỏi già củ đạt hàm lượng tinh dầu cao nhất, kỹ thuật nhổ tay nhẹ nhàng và cắt tỉa rễ, thân.' },
  { title: '7. Phơi/sấy tự nhiên & phân loại đạt chuẩn thu mua HTX', duration: '08:00', stage: 'Sau thu hoạch', text: 'Cách buộc chùm phơi nắng gió vùng cao, sấy khô bảo quản và phân loại tỏi cô đơn, tỏi nhánh theo tiêu chuẩn thu mua của HTX.' }
];

const DOCS = [
  { title: 'Sổ tay kỹ thuật trồng tỏi Eco', meta: 'PDF · đang cập nhật' },
  { title: 'Tiêu chuẩn thu mua tỏi của HTX', meta: 'PDF · đang cập nhật' },
  { title: 'Lịch thời vụ & chăm sóc cả năm', meta: 'PDF · đang cập nhật' },
  { title: 'Mẫu đăng ký bán tỏi cho HTX', meta: 'DOCX · đang cập nhật' }
];

const ICON_FOR_ART = { noodle: 'soup', bottle: 'wine', honey: 'droplet', dried: 'wheat', seed: 'sprout', vinegar: 'flask-conical', banana: 'banana', chili: 'flame', bamboo: 'sprout', cookie: 'cookie', salt: 'mountain', nut: 'nut' };
