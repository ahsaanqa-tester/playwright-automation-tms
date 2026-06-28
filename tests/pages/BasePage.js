import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://tms:tms11pw00@develop.themoonshow.com/';
  }

  // Set a consistent desktop viewport for all tests.
  async setViewport() {
    await this.page.setViewportSize({ width: 1280, height: 900 });
  }

  async openHomePage() {
    await this.setViewport();
    await this.page.goto(this.baseUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await this.waitForPageReady();
  }

  async waitForPageReady() {
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 60000 });
    } catch {
      await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    }
    await expect(this.page.locator('body')).toBeVisible();
  }

  async expectUrlToMatch(regex) {
    await expect(this.page).toHaveURL(regex);
  }
}
