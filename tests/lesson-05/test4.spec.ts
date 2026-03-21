import { test, expect } from '@playwright/test';

test('Bài học 4: Personal notes - Thêm và tìm kiếm note', async ({ page }) => {

    const notesData = [
        { title: 'A', content: 'một hoặc nhiều' },
        { title: 'B', content: 'B' },
        { title: 'C', content: 'C' },
        { title: 'D', content: 'D' },
        { title: 'E', content: 'E' },
        { title: 'F', content: 'G' },
        { title: 'G', content: 'H' },
        { title: 'H', content: 'F' },
        { title: 'I', content: 'I' },
        { title: 'K', content: 'K' },
    ];

    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();

    for (const note of notesData) {

        await page.locator("//input[@id='note-title']").fill(note.title);
        await page.locator("//textarea[@id='note-content']").fill(note.content);
        await page.locator("//button[@id='add-note']").click();
    }

    await page.locator('input#search').fill('một hoặc nhiều');

});
