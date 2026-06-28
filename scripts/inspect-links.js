import { chromium } from '@playwright/test';

const baseUrl = 'https://tms:tms11pw00@develop.themoonshow.com/';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const socialNav = await page.locator('a[href="/social"]:visible').first();
  const socialFooter = await page.locator('footer a[href="/social"]:visible').first();

  const evalAttrs = async (locator, label) => {
    if (!(await locator.count())) {
      console.log(`${label}: not found`);
      return;
    }
    const attrs = await locator.evaluate(el => ({ href: el.href, target: el.target, rel: el.rel, outerHTML: el.outerHTML }));
    console.log(`${label}:`, attrs);
  };

  await evalAttrs(socialNav, 'socialNav');
  await evalAttrs(socialFooter, 'socialFooter');

  await browser.close();
})();