import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test('should use HomePage POM to interact', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.clickGetStarted();
  await expect(page).toHaveURL(/.*intro/);
});