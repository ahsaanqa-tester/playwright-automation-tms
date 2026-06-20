import{test, expect}from'@playwright/test';

test.setTimeout(120000);

test.describe('Home Suite', () => {
  test('has title', async ({ page }) => {
    await page.goto('https://themoonshow.com/', { waitUntil: 'load', timeout: 60000 });
    await expect(page).toHaveTitle(/The Moon Show - Bitcoin & Crypto Market News/);
  });

 

  
});





