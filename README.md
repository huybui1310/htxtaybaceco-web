# Website Tây Bắc Eco

Mở `index.html` bằng trình duyệt (cần có internet để tải Tailwind, icon và font).

## Cấu trúc
```
index.html            Khung trang: 8 phần (Trang chủ → Liên hệ), header, footer, modal, nút nổi
css/styles.css        Kiểu riêng: viền thổ cẩm, thẻ, nút, hiệu ứng
assets/logo.svg       Logo TÂY BẮC ECO (vector)
js/tailwind-config.js Bảng màu & font
js/config.js          Link Shopee / TikTok Shop, Zalo  <-- điền link thật ở đây
js/data.js            Sản phẩm, giá lẻ/sỉ, menu, 6 bước quy trình, tin tức, tài liệu
js/utils.js           Hàm tiện ích, trạng thái chung
js/navigation.js      Chuyển trang, menu mobile
js/products.js        Thẻ sản phẩm, bộ lọc, chọn quy cách, giá lẻ/sỉ
js/wholesale.js       Bảng giá sỉ (modal)
js/sections.js        Lịch mùa vụ, quy trình, tin tức, góc thành viên
js/events.js          Xử lý các nút bấm
js/forms.js           Form đăng ký đại lý
js/main.js            Khởi chạy
```

## Việc thường sửa
- Đổi giá / thêm sản phẩm: `js/data.js` (mảng `PRODUCTS`).
- Link bán hàng: `js/config.js` (`SHOPEE_URL`, `TIKTOK_URL`).
- Đổi màu: `js/tailwind-config.js`.
- Nội dung chữ các trang: `index.html`.
