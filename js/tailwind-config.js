// Bảng màu & font của Tây Bắc Eco cho Tailwind CDN
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        eco: '#6BB34D',
        forest: '#2D5A27',
        cream: '#FAF7F2',
        paper: '#F3ECE1',
        wood: '#6E473B',
        thocam: '#D9531E',
        shopee: '#EE4D2D',
        ink: '#1A1A1A',
        bark: '#4A453E',
        gold: '#C89B3C'
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'eco-card': '0 14px 30px -8px rgba(45, 90, 39, 0.12), 0 4px 10px -2px rgba(110, 71, 59, 0.08)',
        'glass': '0 12px 28px -6px rgba(26, 26, 26, 0.12)'
      }
    }
  }
}
