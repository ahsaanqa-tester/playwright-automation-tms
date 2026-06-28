import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open() {
    await this.openHomePage();
  }

  // Click a visible top navigation link and wait for the resulting page to load.
  async clickNavigationLink(href) {
    const link = this.page.locator(`a[href="${href}"]:visible`).first();
    await expect(link, `visible link ${href}`).toBeVisible();
    await Promise.all([
      link.click(),
      this.page.waitForURL(new RegExp(`${href}$`), { timeout: 60000 }),
    ]);
    await this.waitForPageReady();
  }

  // Click a visible footer link and wait for the resulting page to load.
  async clickFooterLink(href) {
    const link = this.page.locator(`footer a[href="${href}"]:visible`).first();
    await expect(link, `footer link ${href}`).toBeVisible();
    await Promise.all([
      link.click(),
      this.page.waitForURL(new RegExp(`${href}$`), { timeout: 60000 }),
    ]);
    await this.waitForPageReady();
  }

  async navigateToContactUs() {
    await this.clickNavigationLink('/contact-us');
  }
}
