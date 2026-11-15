# CƯỜNG CHÂN CHẤT (cuongchanchat_v1.0)
> **Tôn chỉ:** Sống thật · Sống tử tế · Sống có ích  
> **Tác giả:** Lăng Đình Cường

---

## 📖 Giới thiệu dự án
Trang web cá nhân và không gian truyền cảm hứng sống của chú **Lăng Đình Cường** (55 tuổi). Nơi ghi lại câu chuyện vượt qua biến cố sức khỏe (từ 39kg trước phẫu thuật), hành trình chinh phục 21km tại Đền Hùng Marathon "Về Nguồn", niềm say mê học hỏi công nghệ & AI ở tuổi trung niên, cùng những bài học quý giá về gia đình, đạo hiếu và 5 giá trị sống bình an.

---

## 📂 Cấu trúc thư mục
```
cuongchanchat_v1.0/
├── index.html            # Trang chủ chính với đầy đủ các section và interactive widgets
├── css/
│   └── style.css         # Hệ thống giao diện, hiệu ứng chuyển động, đa chủ đề (Light, Sepia, Dark)
├── js/
│   ├── main.js           # Xử lý bài viết, tìm kiếm, modal, sổ biết ơn, âm thanh thiên nhiên Web Audio API
│   └── ai-assistant.js   # Module Trợ lý Trí tuệ Nhân tạo "Chú Cường (AI Tâm Tình)"
├── assets/               # Thư mục tài nguyên mở rộng
├── CHANGELOG.md          # Chi tiết các tính năng nâng cấp so với bản gốc
└── README.md             # Hướng dẫn sử dụng và giới thiệu dự án
```

---

## 🚀 Cách mở và trải nghiệm website

### Cách 1: Mở trực tiếp bằng trình duyệt
Bạn có thể mở tệp [index.html](file:///C:/Users/dell/.gemini/antigravity/scratch/cuongchanchat_v1.0/index.html) trực tiếp bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc...). Không yêu cầu cài đặt thêm môi trường phức tạp.

### Cách 2: Khởi chạy qua máy chủ cục bộ (Local Server)
Nếu muốn chạy máy chủ:
```bash
cd "C:\Users\dell\.gemini\antigravity\scratch\cuongchanchat_v1.0"
python -m http.server 8080
```
Sau đó truy cập: `http://localhost:8080`

---

## 💡 Các tính năng nổi bật
1. **Trợ lý AI Tâm Tình Chú Cường (AI Chatbot)**: Trò chuyện và nhận lời khuyên chân chất, có thể đọc to thành tiếng.
2. **Âm thanh thiên nhiên thư thái**: Bấm biểu tượng 🍃 ở thanh điều hướng để lắng nghe tiếng gió thông reo và chuông thiền bình an.
3. **Thư viện 6 bài viết truyền cảm hứng**: Có ô tìm kiếm, bộ lọc chuyên mục và chế độ đọc toàn văn trong cửa sổ riêng biệt.
4. **Sổ tay biết ơn mỗi ngày**: Giúp bạn rèn luyện tâm thức trân trọng những điều bình dị quanh mình.
5. **Chế độ đọc tùy biến**: Đổi màu nền (Mộc, Sách Sepia, Ban đêm) và phóng to/thu nhỏ cỡ chữ (A- / A+) hỗ trợ người lớn tuổi.
