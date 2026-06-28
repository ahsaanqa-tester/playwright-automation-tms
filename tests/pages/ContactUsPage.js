import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class ContactUsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open() {
    await this.openHomePage();
    await this.navigateToContactUs();
  }

  // Open the Contact Us page from the home page.
  async navigateToContactUs() {
    const contactUsLink = this.page.locator('a[href="/contact-us"]:visible').first();
    await expect(contactUsLink, 'visible Contact Us link').toBeVisible();
    const navigationPromise = this.page.waitForNavigation({ waitUntil: 'load', timeout: 120000 }).catch(() => null);
    await contactUsLink.click({ timeout: 120000 });
    await navigationPromise;
    await this.page.waitForURL(/\/contact-us$/, { timeout: 120000 });
    await this.waitForPageReady();
  }

  // Confirm the Contact Us page is visible and the URL matches the expected route.
  async verifyPageLoaded() {
    await this.expectUrlToMatch(/\/contact-us$/);
    const pageTitle = this.page.locator('h1, h2, [role="heading"]').first();
    await expect(pageTitle).toBeVisible();
  }

  // Fill the contact form with default or custom values.
  async fillForm({
    firstName = 'Test',
    lastName = 'User',
    email = 'test@example.com',
    message = 'This is a test message for the contact form.',
    subjectValue = 'General Inquiry',
  } = {}) {
    const contactForm = this.page.locator('form').first();
    await expect(contactForm).toBeVisible();

    const firstNameInput = contactForm.locator('input[name="first_name"], input[placeholder*="First Name"]');
    const lastNameInput = contactForm.locator('input[name="last_name"], input[placeholder*="Last Name"]');
    const fullNameInput = contactForm.locator('input[name="name"], input[placeholder*="Name"], input[placeholder*="name"]');

    if (await firstNameInput.isVisible().catch(() => false)) {
      await expect(firstNameInput).toBeVisible();
      await firstNameInput.fill(firstName);
    }

    if (await lastNameInput.isVisible().catch(() => false)) {
      await expect(lastNameInput).toBeVisible();
      await lastNameInput.fill(lastName);
    }

    if (await fullNameInput.isVisible().catch(() => false)) {
      await expect(fullNameInput).toBeVisible();
      await fullNameInput.fill(`${firstName} ${lastName}`);
    }

    const emailInput = contactForm.locator('input[name="email"], input[type="email"], input[placeholder*="email"], input[placeholder*="Email"]');
    await expect(emailInput).toBeVisible();
    await emailInput.fill(email);

    const subjectRadio = contactForm.locator('input[name="subject_query"]');
    if (await subjectRadio.count()) {
      await subjectRadio.first().check();
    } else {
      const subjectInput = contactForm.locator('input[name="subject"], input[placeholder*="Subject"], input[placeholder*="subject"]');
      if (await subjectInput.isVisible().catch(() => false)) {
        await subjectInput.fill(subjectValue);
      }
    }

    const messageInput = contactForm.locator('textarea[name="message"], textarea[placeholder*="message"], textarea[placeholder*="Message"]');
    await expect(messageInput).toBeVisible();
    await messageInput.fill(message);
  }

  // Submit the filled form and wait for the page to settle.
  async submitForm() {
    const submitButton = this.page.locator('form button[type="submit"], form button:has-text("Submit"), form button:has-text("Send")').first();
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await this.waitForPageReady();
  }

  async submitAndVerify() {
    await this.submitForm();

    const successMessage = this.page.locator(
      'text=/success|submitted|thank you|message sent/i, .success-message, .alert-success, [role="alert"]'
    ).first();

    try {
      await expect(successMessage).toBeVisible({ timeout: 5000 });
      return true;
    } catch {
      await this.expectUrlToMatch(/\/contact-us$/);
      return false;
    }
  }
}
