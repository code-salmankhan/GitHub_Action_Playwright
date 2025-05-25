// tests/myFirstTest.spec.ts
import {test, expect} from '@playwright/test';
import path from 'path'; // Import path module for screenshot path

test('should navigate to playwright website and check title', async ({ page }) => {
    //Navigate to the Playwright website
    await page.goto('https://playwright.dev/');

    // Expect the title to contain "Playwright"
    await expect(page).toHaveTitle(/Playwright/);

    // Take a screenshot after navigation
    await page.screenshot({ path: path.join('test-results', 'playwright-homepage.png') });

    // Example of interacting with an element
    const gettingStartedLink = page.locator('a:has-text("Get started")');
    await expect(gettingStartedLink).toBeVisible();
    await gettingStartedLink.click();

    // Expect the URL to contain "intro"
    await expect(page).toHaveURL(/.*intro/);

    // Take a screenshot after clicking the link
    await page.screenshot({ path: path.join('test-results', 'playwright-get-started.png') });
});

test('another test example', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //Expect the title to contain "Playwright"
  await expect(page).toHaveTitle(/Google/);

  // Take a screenshot of Google homepage
  await page.screenshot({ path: path.join('test-results', 'google-homepage.png') });
});