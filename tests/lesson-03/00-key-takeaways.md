# Tổng hợp kiến thức Buổi 3
## 1. Git undo
## Git Undo
### Thay đổi commit message mới nhất
- git commit --amend -m"message mới"
### Git un-stage
- git restore --staged <tên file>
### Un-stage tất cả các file
- git restore --staged .
### Đưa nội dung commit cuối về staging
- git reset --soft HEAD~1
### Đưa nội dung commit cuối về working directory
- git reset HEAD~1

## Git Branch
### Xem danh sách các nhánh
- git branch
### Chỉ tạo nhánh, chưa chuyển sang
- git branch <tên nhánh>
### Chuyển sang nhánh vừa tạo
- git checkout <tên nhánh>
### Vừa tạo nhánh vừa chuyển thì dùng lệnh
- git checkout -b <tên nhánh>
### Xoá nhánh (đứng ở nhánh khác mới xoá đc)
- git branch -D <tên nhánh>
### Đưa nhánh lên online (remote)
- git push orgin <tên nhánh>
### Xoá nhánh trên online (remote)
- git push -D origin <tên nhánh>
## 2. JavaScript
### Điều kiện if
if (<điều kiện>) {
// code...
}
### Vòng lặp
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
--- 

# Lesson 04
## 1. Object

### Cách khai báo object
Cú pháp:

{} hoặc new Object ()

Ví dụ: let obj = { a : 1}

### Truy xuất 
.key hoặc ["key]

Ví dụ: obj.a hoặc obj["a]
### Thêm sửa
obj.key = value

Ví dụ obj.b = 2
### Xoá
delete obj.key

Ví dụ: delete obj.a
### Lồng nhau
value là object

Ví dụ: obj.x.y.z

## 2. Array
### Khai báo
Cú pháp:  []

Ví dụ: let arr = [1, 2, 3]
### Truy xuất
Cú pháp: arr[index]

Ví dụ: arr[0] → 1

### Đếm phần tử
Cú pháp: arr.length
### Thêm cuối
Cú pháp: arr.push(value)

Ví dụ: arr.push(4)

### Xoá cuối
Cú pháp: arr.pop()

## 3. Function
### Khai báo: Tạo hàm, chưa chạy
Cú pháp: function tenHam ()
{ ... }

### Gọi hàm: chạy code bên trong
Cú pháp: tenHam ()

### Tham số: Truyền vào data
Cú pháp: function tenHam (a, b) { ... }

### Trả kết quả: gửi kết quả về nơi gọi
Cú pháp: return giaTriTraVe