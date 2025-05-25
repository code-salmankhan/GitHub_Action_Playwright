//tests/myFirstTest.spec.ts

import {test, expect} from '@playwright/test';

test('should naviaget to playwright website and check title', async ({ page }) => {
    //Navigate to the Playwright website
    await page.goto('https://playwright.dev/');

    //Expect the title to contain "Playwright"
    await expect(page).toHaveTitle(/Playwright/);

    // Example of interacting with an element
    const gettingStartedLink = page.locator('a:has-text("Get started")');
    await expect(gettingStartedLink).toBeVisible();
    await gettingStartedLink.click();

    // Expect the URL to contain "intro"
    await expect(page).toHaveURL(/.*intro/);
});

test('another test example', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //Expect the title to contain "Playwright"
  await expect(page).toHaveTitle(/Google/);
});
