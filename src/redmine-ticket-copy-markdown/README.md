# Redmine ticket copy

[English](README.en.md) - [日本語](README.ja.md) - [Tiếng Việt](README.md)

Đây là bookmarklet dùng để copy thông tin cơ bản về Redmine ticket (gồm có thông tin tracker, ticket id, tiêu đề và ticket url) trên trang ticket của Redmine đang được mở.

Kết quả được format ở dạng Markdown, lưu vào clipboard, và được dùng để dán vào các phần mềm hỗ trợ văn bản định dạng Markdown như Slack.
```
[Feature #21814: Test - ticket - với - hyphen -](https://detomo.cloud.redmine.jp/issues/21814)
```

Code được lưu trong file [bookmarklet.js](bookmarklet.js)

Về cách cài đặt và sử dụng bookmarklet, xem chi tiết [tại đây](../../README.md).

### Hướng dẫn bật hỗ trợ Markdown trong Slack

Để bật hỗ trợ Markdown (cụ thể là cú pháp `[text](url)` để tạo hyperlink) trong Slack, bạn cần bật chế độ **Format messages with markup** trong cài đặt. Dưới đây là hướng dẫn chi tiết từng bước để bật tính năng này:

#### Trên Slack Desktop (Windows/Mac)
1. **Mở Slack**: Mở ứng dụng Slack trên máy tính hoặc truy cập qua trình duyệt tại `app.slack.com`.
2. **Vào Preferences**:
   - **Windows/Linux**: Click vào tên workspace của bạn ở góc trên bên trái, sau đó chọn **Preferences** từ menu.
   - **Mac**: Click vào **Slack** trên thanh menu ở đầu màn hình, sau đó chọn **Preferences**.
   - Phím tắt: Nhấn `Ctrl + ,` (Windows/Linux) hoặc `Cmd + ,` (Mac) để mở nhanh Preferences.
3. **Chuyển đến tab Advanced**:
   - Trong cửa sổ Preferences, click vào tab **Advanced** (thường nằm ở cuối danh sách các tab).
4. **Bật Format messages with markup**:
   - Tìm tùy chọn **Format messages with markup**.
   - Check vào ô này để bật chế độ sử dụng Markdown thay vì WYSIWYG editor.
5. **Lưu và kiểm tra**:
   - Đóng cửa sổ Preferences (thay đổi tự động lưu).
   - Mở một channel hoặc DM trong Slack, gõ thử cú pháp Markdown như `[Defect #21682](https://detomo.cloud.redmine.jp/issues/21682)` và gửi tin nhắn.
   - Nếu bật thành công, Slack sẽ render thành hyperlink: [Defect #21682](https://detomo.cloud.redmine.jp/issues/21682).

### Lưu ý
- **Hiệu quả của Markdown**: Khi bật **Format messages with markup**, Slack hỗ trợ cú pháp Markdown chuẩn như `[text](url)` để tạo link, cũng như các định dạng khác (`*bold*`, `_italic_`, v.v.). Tuy nhiên, giao diện WYSIWYG (toolbar định dạng) sẽ bị ẩn, và bạn cần gõ cú pháp thủ công.
- **Workspace restrictions**: Một số workspace do admin quản lý có thể khóa tùy chọn này. Nếu bạn không thấy tùy chọn **Format messages with markup**, liên hệ admin workspace để kiểm tra.
- **Kiểm tra phiên bản Slack**: Đảm bảo bạn dùng phiên bản Slack mới nhất, vì hỗ trợ `[text](url)` có thể phụ thuộc vào phiên bản client.
- **Kiểm tra render**: Nếu `[text](url)` không render thành link sau khi gửi, thử:
  - Đảm bảo cú pháp đúng (không có khoảng trắng thừa, ví dụ: `[text](url)` chứ không phải `[ text ]( url )`).
  - Tắt/bật lại chế độ Markup hoặc đăng xuất/đăng nhập lại Slack.
- Trong trường hợp không thể dùng Markdown trên Slack, bạn có thể sử dụng bookmarklet [redmine-ticket-copy](../redmine-ticket-copy) thay thế.