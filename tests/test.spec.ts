import { test, expect } from '@playwright/test';

test('homepage has expected title and captures console logs', async ({ page }) => {
  // Listen for all console events and log them to the test's output
  page.on('console', msg => console.log(`Browser Console: ${msg.text()}`));

  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Wait for the title to be "Aneef Visual Sovereignty"
  await expect(page).toHaveTitle(/Aneef Visual Sovereignty/);

  // Add a small delay to allow for any async operations to complete
  await page.waitForTimeout(2000);

  // Take a screenshot for visual verification
  await page.screenshot({ path: '/home/jules/verification/verification.png', fullPage: true });
});
