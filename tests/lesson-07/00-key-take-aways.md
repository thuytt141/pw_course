# DOM relation
self: node hiện tại
parent: cha
children: con
ancestor: tổ tiên
descendant: hậu duệ, là các node con cháu, chắt
sibling: anh, em
following: theo sau, không thấy những thằng con của node hiện tại
preceding: phía trước, gồm các node phía bên tay trái của node hiện tại, trừ các node ancestor
following-sibling: anh em phía sau
preceding-sibling: anh em phía trước

# Xpath advance
wildcard: * //lấy khớp tất cả
child- con trực tiếp
    //form[@id='test-form']/child::button

descendant- Tất cả con cháu
    //form[@id='test-form']/descendant::input

parent -cha
    //button[text()='Create Test Case']/parent::form
ancestor- Tìm tổ tiên
    //button[@class='btn-edit']/ancestor::table

following-sibling : anh em phía sau
     //label[@for='testName']/following-sibling::input
preceding-sibling: anh em đứng trước
    //button[@class='btn-reset']/preceding-sibling::button
following: tất cả các node sau trong document
    //h2[text()='Test Cases List']/following::button[@class='btn-run']
ancestor-or-self : Tổ tiên hoặc chính nó
    //table[@id='test-table']/ancestor-or-self::span[contains(@class'status')]
preceding : Tất cả node trước trong document
    //h2[text()='Test Execution Results']/preceding::td[@class='priority-high']

descendant-or-self : con cháu hoặc chính nó
    //table[@id='test-table']/descendant-or-self::span[contains(@class, 'status')]
    

AND: tất cả điều kiện phải đúng
OR: một trong các điều kiện đúng
Kết hợp and or

Lấy text bên trong element: //element[text()='exact text']
normalize-space(): chuẩn hoá khoảng trắng: normalize-space(string)
contains(): Kiểm tra chứa chuỗi con //element[contains(@attribute, 'substring')]
