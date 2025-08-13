import { test, expect } from '@playwright/test';

test.describe('First Header Text - Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should display correct text and styling for first header', async ({ page }) => {
    const header = page.locator('.text-3xl').first();
    await expect(header).toHaveText('Deploy with cypress 1');
    await expect(header).toHaveClass(/ml-8/);
    await expect(header).toHaveClass(/text-3xl/);
    await expect(header).toHaveClass(/font-bold/);
    await expect(header).toHaveClass(/my-4/);
  });
});
