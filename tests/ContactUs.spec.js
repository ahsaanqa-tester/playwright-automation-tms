import { test } from '@playwright/test';
import { ContactUsPage } from './pages/ContactUsPage.js';

test.setTimeout(120000);

test.describe('Contact Us Page', () => {
  let contactUsPage;

  test.beforeEach(async ({ page }) => {
    // Create a fresh page object for each test and open the Contact Us page.
    contactUsPage = new ContactUsPage(page);
    await contactUsPage.open();
  });

  test('Navigate to Contact Us page and verify correct page', async () => {
    await contactUsPage.verifyPageLoaded();
  });

  test('Fill and submit contact us form', async () => {
    await contactUsPage.fillForm();
    await contactUsPage.submitAndVerify();
  });
});
