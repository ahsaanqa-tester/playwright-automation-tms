import { test, expect } from '@playwright/test';

test.setTimeout(120000);

/**
 * Click a visible link and wait for navigation to finish.
 */
const clickVisibleLink = async (page, href) => {
  const link = page.locator(`a[href="${href}"]:visible`).first();
  await expect(link, `visible link ${href}`).toBeVisible();
  await link.click();
  await page.waitForLoadState('networkidle');
  await expect(page.locator('body')).toBeVisible();
};

/**
 * Generate a random email address for newsletter form submissions.
 */
const createRandomEmail = () => {
  const timestamp = Date.now();
  return `test+${timestamp}@example.com`;
};

const baseUrl = 'https://tms:tms11pw00@develop.themoonshow.com/';

test.describe('The Moon Show navigation links', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(baseUrl, { waitUntil: 'load', timeout: 60000 });
  });

  test('Exchange Reviews redirects to /exchange-reviews', async ({ page }) => {
    await clickVisibleLink(page, '/exchange-reviews');
    await expect(page).toHaveURL(/\/exchange-reviews$/);
  });

  test('Exchange Tutorials redirects to /exchange-tutorials', async ({ page }) => {
    await clickVisibleLink(page, '/exchange-tutorials');
    await expect(page).toHaveURL(/\/exchange-tutorials$/);
  });

  test('App Tutorials redirects to /app-tutorials', async ({ page }) => {
    await clickVisibleLink(page, '/app-tutorials');
    await expect(page).toHaveURL(/\/app-tutorials$/);
  });

  test('Top Listing redirects to /exchange-listing', async ({ page }) => {
    await clickVisibleLink(page, '/exchange-listing');
    await expect(page).toHaveURL(/\/exchange-listing$/);
  });

  test('Comparison redirects to /exchange-comparison', async ({ page }) => {
    await clickVisibleLink(page, '/exchange-comparison');
    await expect(page).toHaveURL(/\/exchange-comparison$/);
  });

  test('VPN Reviews redirects to /vpn-reviews', async ({ page }) => {
    await clickVisibleLink(page, '/vpn-reviews');
    await expect(page).toHaveURL(/\/vpn-reviews$/);
  });

  test('VPN Top Listing redirects to /vpn-listing', async ({ page }) => {
    await clickVisibleLink(page, '/vpn-listing');
    await expect(page).toHaveURL(/\/vpn-listing$/);
  });

  test('VPN Comparison redirects to /vpn-comparison', async ({ page }) => {
    await clickVisibleLink(page, '/vpn-comparison');
    await expect(page).toHaveURL(/\/vpn-comparison$/);
  });

  test('Live Streaming redirects to /live-streaming', async ({ page }) => {
    await clickVisibleLink(page, '/live-streaming');
    await expect(page).toHaveURL(/\/live-streaming$/);
  });

  test('Sponsors redirects to /sponsors', async ({ page }) => {
    await clickVisibleLink(page, '/sponsors');
    await expect(page).toHaveURL(/\/sponsors$/);
  });

  test('Blog redirects to /blog', async ({ page }) => {
    await clickVisibleLink(page, '/blog');
    await expect(page).toHaveURL(/\/blog$/);
  });

  test('Deals redirects to /deals', async ({ page }) => {
    await clickVisibleLink(page, '/deals');
    await expect(page).toHaveURL(/\/deals$/);
  });

  test('About Us redirects to /about-us', async ({ page }) => {
    await clickVisibleLink(page, '/about-us');
    await expect(page).toHaveURL(/\/about-us$/);
  });

  test('Contact Us redirects to /contact-us', async ({ page }) => {
    await clickVisibleLink(page, '/contact-us');
    await expect(page).toHaveURL(/\/contact-us$/);
  });

  test('Social redirects to /social', async ({ page }) => {
    await clickVisibleLink(page, '/social');
    await expect(page).toHaveURL(/\/social$/);
  });

  test('Disclaimer redirects to /disclaimer', async ({ page }) => {
    await clickVisibleLink(page, '/disclaimer');
    await expect(page).toHaveURL(/\/disclaimer$/);
  });

  test('Privacy Policy redirects to /privacy-policy', async ({ page }) => {
    await clickVisibleLink(page, '/privacy-policy');
    await expect(page).toHaveURL(/\/privacy-policy$/);
  });

  test('Terms and Conditions redirects to /terms-and-conditions', async ({ page }) => {
    await clickVisibleLink(page, '/terms-and-conditions');
    await expect(page).toHaveURL(/\/terms-and-conditions$/);
  });
});

test.describe('The Moon Show footer links', () => {
  const clickFooterLink = async (page, href) => {
    const link = page.locator(`footer a[href="${href}"]:visible`).first();
    await expect(link, `footer link ${href}`).toBeVisible();
    await link.click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('body')).toBeVisible();
  };

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(baseUrl, { waitUntil: 'load', timeout: 60000 });
  });

  // test('Footer newsletter section is visible', async ({ page }) => {
  //   await expect(page.locator('footer')).toContainText('Subscribe to our newsletter');
  // });

  // test('Footer newsletter field accepts a random email', async ({ page }) => {
  //   const emailInput = page.locator('footer input[type="email"]:visible').first();
  //   const submitButton = page.locator('footer button:has-text("Submit"):visible').first();
  //   const randomEmail = createRandomEmail();

  //   await expect(emailInput).toBeVisible();
  //   await emailInput.fill(randomEmail);
  //   await expect(emailInput).toHaveValue(randomEmail);
  //   await expect(submitButton).toBeVisible();
  //   await submitButton.click();

  //   await expect(page.locator('footer')).toContainText('Subscribe to our newsletter');
  // });

  test('Footer logo redirects to home page', async ({ page }) => {
    await clickFooterLink(page, '/');
    await expect(page).toHaveURL(/\/$/);
  });

  test('Footer Exchange Reviews redirects to /exchange-reviews', async ({ page }) => {
    await clickFooterLink(page, '/exchange-reviews');
    await expect(page).toHaveURL(/\/exchange-reviews$/);
  });

  test('Footer Tutorials redirects to /exchange-tutorials', async ({ page }) => {
    await clickFooterLink(page, '/exchange-tutorials');
    await expect(page).toHaveURL(/\/exchange-tutorials$/);
  });

  test('Footer App Tutorials redirects to /app-tutorials', async ({ page }) => {
    await clickFooterLink(page, '/app-tutorials');
    await expect(page).toHaveURL(/\/app-tutorials$/);
  });

  test('Footer Exchange Top Listing redirects to /exchange-listing', async ({ page }) => {
    await clickFooterLink(page, '/exchange-listing');
    await expect(page).toHaveURL(/\/exchange-listing$/);
  });

  test('Footer Exchange Comparison redirects to /exchange-comparison', async ({ page }) => {
    await clickFooterLink(page, '/exchange-comparison');
    await expect(page).toHaveURL(/\/exchange-comparison$/);
  });

  test('Footer VPN Reviews redirects to /vpn-reviews', async ({ page }) => {
    await clickFooterLink(page, '/vpn-reviews');
    await expect(page).toHaveURL(/\/vpn-reviews$/);
  });

  test('Footer VPN Top Listing redirects to /vpn-listing', async ({ page }) => {
    await clickFooterLink(page, '/vpn-listing');
    await expect(page).toHaveURL(/\/vpn-listing$/);
  });

  test('Footer VPN Comparison redirects to /vpn-comparison', async ({ page }) => {
    await clickFooterLink(page, '/vpn-comparison');
    await expect(page).toHaveURL(/\/vpn-comparison$/);
  });

  
 

  test('Footer Live Streaming redirects to /live-streaming', async ({ page }) => {
    await clickFooterLink(page, '/live-streaming');
    await expect(page).toHaveURL(/\/live-streaming$/);
  });

  test('Footer Sponsors redirects to /sponsors', async ({ page }) => {
    await clickFooterLink(page, '/sponsors');
    await expect(page).toHaveURL(/\/sponsors$/);
  });

  test('Footer Blogs redirects to /blog', async ({ page }) => {
    await clickFooterLink(page, '/blog');
    await expect(page).toHaveURL(/\/blog$/);
  });

  test('Footer Deals redirects to /deals', async ({ page }) => {
    await clickFooterLink(page, '/deals');
    await expect(page).toHaveURL(/\/deals$/);
  });

  test('Footer About Us redirects to /about-us', async ({ page }) => {
    await clickFooterLink(page, '/about-us');
    await expect(page).toHaveURL(/\/about-us$/);
  });

  test('Footer Contact Us redirects to /contact-us', async ({ page }) => {
    await clickFooterLink(page, '/contact-us');
    await expect(page).toHaveURL(/\/contact-us$/);
  });

  test('Footer Social redirects to /social', async ({ page }) => {
    await clickFooterLink(page, '/social');
    await expect(page).toHaveURL(/\/social$/);
  });

  test('Footer Disclaimer redirects to /disclaimer', async ({ page }) => {
    await clickFooterLink(page, '/disclaimer');
    await expect(page).toHaveURL(/\/disclaimer$/);
  });

  test('Footer Privacy Policy redirects to /privacy-policy', async ({ page }) => {
    await clickFooterLink(page, '/privacy-policy');
    await expect(page).toHaveURL(/\/privacy-policy$/);
  });

  test('Footer Terms and Conditions redirects to /terms-and-conditions', async ({ page }) => {
    await clickFooterLink(page, '/terms-and-conditions');
    await expect(page).toHaveURL(/\/terms-and-conditions$/);
  });
});
