import { test } from '@playwright/test';

test('Truy cập page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

})


test('Thêm 100 todo + Xoá todo số lẻ', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.click('text=Bài học 3: Todo page');

    const todoInput = page.locator("//input[@id='new-task']");
    const addButton = page.locator("//button[@id='add-task']");

    // Thêm 100 todo
    for (let i = 1; i <= 100; i++) {
        await todoInput.fill(`Todo ${i}`);
        await addButton.click();
    }

    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    // Xoá todo số lẻ
    for (let i = 1; i <= 100; i += 2) {
        await page
            .locator(`//li[.//span[text()="Todo ${i}"]]//button[text()="Delete"]`)
            .click();
    }
});




