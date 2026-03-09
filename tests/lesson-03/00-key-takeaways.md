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