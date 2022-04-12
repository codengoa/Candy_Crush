// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('file:///Users/a/Desktop/WebDevelopment2022/Candy_Crush/index.html');
});


test.describe('All components should be rendered', () => {
    test('Board should render', async ({ page }) => {
        await expect(page.locator(".MyClass")).toHaveCount(1)

    })
});