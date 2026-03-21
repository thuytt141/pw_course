import { test } from '@playwright/test';

test('Truy cập page', async ({ page }) => {

  await page.goto('https://material.playwrightvn.com/');

  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
});


test('Test 1: Điền vào trang register page', async ({ page }) => {
  await test.step("Step 1: Mở website", async () => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
  });

  await test.step("Step 2: Điền thông tin ", async () => {

    await page.locator("//input[@id='username']").pressSequentially("Tran Thuy", { delay: 200 });
    await page.locator("//input[@id='email']").pressSequentially("thuytt@gmail.com", { delay: 200 });
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption('music');
    await page.locator("//select[@id='country']").selectOption('canada');
    await page.locator("//input[@id='dob']").fill("2026-03-20");
    await page.locator("//input[@id='profile']").setInputFiles("data/demo.txt");
    await page.locator("//textarea[@id='bio']").pressSequentially("University", { delay: 200 });
    await page.locator("//button[@type='submit']").click();

  });
});

