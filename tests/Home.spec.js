import{test, expect}from'@playwright/test';

test.setTimeout(120000);

test.describe('Home Suite', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://themoonshow.com/', { waitUntil: 'load', timeout: 60000 });
    await expect(page).toHaveTitle(/The Moon Show - Bitcoin & Crypto Market News/);
  });

  test('Top Navigation', async ({ page }) => {
    await page.goto('https://themoonshow.com/', { waitUntil: 'load', timeout: 60000 });
    await page.locator('section').nth(1).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Reviews' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Tutorials', exact: true }).click();
    await page.getByRole('heading', { name: 'Exchange Tutorials' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'App Tutorials' }).click();
    await page.getByRole('heading', { name: 'App Tutorials' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Top Listing' }).click();
    await page.getByRole('heading', { name: 'Exchanges List' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Comparison' }).click();
    await page.getByRole('heading', { name: 'Exchange Comparison' }).click();
    await page.getByRole('button', { name: 'Select' }).first().click();
    await page.getByText('WEEX').click();
    await page.getByRole('button', { name: 'Select' }).first().click();
    await page.getByText('Binance').click();
    await page.getByRole('button', { name: 'Select' }).click();
    await page.getByText('ByBit').click();
    await page.locator('#topmenu').getByRole('link', { name: 'Live Streaming' }).click();
    await page.getByRole('heading', { name: 'Live Streaming' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Deals' }).click();
    await page.getByRole('heading', { name: 'Deals' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Reviews' }).click();
    await page.getByRole('heading', { name: 'VPN Reviews' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Top Listing' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'Comparison' }).click();
    await page.getByRole('heading', { name: 'VPN Comparison' }).click();
    await page.getByRole('button', { name: 'Select' }).first().click();
    await page.getByText('ExpressVPN').click();
    await page.getByRole('button', { name: 'Select' }).first().click();
    await page.getByText('Proton VPN').click();
    await page.getByRole('button', { name: 'Select' }).click();
    await page.getByText('NordVPN').click();
    await page.locator('#topmenu').getByRole('link', { name: 'Sponsors' }).click();
    await page.getByRole('heading', { name: 'Sponsors' }).click();
    await page.getByRole('link', { name: 'All Blogs' }).click();
    await page.getByRole('heading', { name: 'Blog' }).click();
    await page.locator('#topmenu').getByRole('link', { name: 'About Us' }).click();
    await page.getByRole('heading', { name: 'About Us' }).click();
    await page.locator('#topmenu').getByRole('link').filter({ hasText: /^$/ }).click();
  });

  
});





