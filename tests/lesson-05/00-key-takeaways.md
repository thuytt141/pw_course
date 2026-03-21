## Tổng hợp kiến thức Lesson -05

### A/ DOM
#### Các thẻ thường gặp
1. Thẻ cáu trúc khung trang
-  `<html>` : Thẻ gốc của trạng
- `<head>` : chứa meta data: Tiêu đề website, hiển thi Google
- `<body>` : nội dung của cả website hiển thị
2. Thẻ bố cục và ngữ nghĩa
- `<div>` : khối/container chung
- `<header>`, `<footer>`, `<nav>`, `<section>`: Thẻ ngữ nghĩa
3. Thẻ. nội dung
- `<h1>` đến `<h6>`: Tiêu đề
- `<paragraph>`: đoạn văn
- `<ul>`, `<ol>`, `<li>`: danh sách
4. Thẻ tương tác và media:
- `<a>`: Liên kết
- `<img>`: Hình ảnh
5. Thẻ form:
- `<form>`: biểu mẫu
- `<input>`: ô nhập dữ liệu (text, password, checkbox, radio...)
- `<button>`: nút bấm
- `<select>` và `<option>`: dropdown
- `<textarea>`: vùng văn bản nhiều dòng

### B/ Selector - XPath selector
Có 3 loại selector thường dùng
- Xpath: dùng được trong hầu hết, có khả năng tìm phần tử khó, hơi dài
- CSS selector: Ngắn gọn, performance cao, dùng cho các trường hợp dễ tìm
- Playwright selector: chỉ dùng riêng cho Playwright

1. XPath selector
- Có 2 loại: 
    - Tương đối: dựa tìm và đặc tính
        - bắt đầu bởi 2 //
        - //tenthe[@thuoctinh=”giatri”]
        - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
        - Nên dùng trong thực tế

    - Tuyệt đối: đi dọc theo cây DOM, bắt đầu từ gốc, dùng dấu /
        - bắt đầu bởi 1 /
        - /html/body/div/input
        - Dễ bị lỗi khi cấu trúc HTML thay đổi, ít linh hoạt

    - Nên dùng XPath tương đối

### C/ Playwright Basic Syntax
1. Navigate: 
>await page.goto('https://pw-practice.playwrightvn.c
om/');

2. Locate: 
> await page.locator(“//input[@id=’email’]”)

3. Click:

- Single click
 
> await page.locator("//button").click();

- Double click

> await page.locator("//button").dblclick();

- Click chuột phải
> await page.locator("//button").click({
button: 'right'
})

- Click chuột kèm bấm phím khác

>page.locator("").click({
modifiers: ['Shift'],
})

- Input:
    - fill: paste content vào 1 ô
    > page.locator("//input").fill('Playwright Viet Nam');
    - pressSequentially: gõ từng chữ cái vào ô input
    >page.locator("//input").pressSequential('Playwright Viet Nam', {
delay: 100,});

-  Radio/checkbox:
    - Lấy giá trị hiện tại đang là check hay không
    >const isChecked =
page.locator("//input").isChecked();
    - Check/uncheck
    > page.locator("//input").check();
page.locator("//input").setChecked(false);

- Select:
>await page.locator('//select[@id=”country”]')
.selectOption({ label: 'USA' })

- Upload file:
> await page.locator("//input[@id='profile']")
.setInputFiles("<file-path>");

