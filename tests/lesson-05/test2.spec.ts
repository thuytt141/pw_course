import { test } from '@playwright/test';

test('Truy cập page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

})

test('Thêm sản phẩm vào giỏ hàng', async ({page}) =>{
    await test.step('Mở website', async ()=>{
        await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');
    })
   await test.step('Thêm sản phẩm vào giỏ hàng', async () =>{

    await page.locator("//button[@data-product-id='1']").dblclick();
    await page.locator("//button[@data-product-id='2']").click({
        clickCount: 3
    })
    await page.locator("//button[@data-product-id='3']").click();
   })
})