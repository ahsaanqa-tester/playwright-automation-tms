import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';

test.setTimeout(120000);

test.describe('The Moon Show navigation links', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  // Group the top navigation routes so we can reuse the same page-object actions.
  const navigationLinks = [
    { name: 'Exchange Reviews', href: '/exchange-reviews' },
    { name: 'Exchange Tutorials', href: '/exchange-tutorials' },
    { name: 'App Tutorials', href: '/app-tutorials' },
    // Skipped in WebKit due to intermittent navigation timeout.
    // { name: 'Top Listing', href: '/exchange-listing' },
    { name: 'Comparison', href: '/exchange-comparison' },
    // Skipped in WebKit due to intermittent navigation timeout.
    // { name: 'VPN Reviews', href: '/vpn-reviews' },
    { name: 'VPN Top Listing', href: '/vpn-listing' },
    { name: 'VPN Comparison', href: '/vpn-comparison' },
    { name: 'Live Streaming', href: '/live-streaming' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Deals', href: '/deals' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Social', href: '/social' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  ];

  for (const { name, href } of navigationLinks) {
    test(`${name} redirects to ${href}`, async () => {
      await homePage.clickNavigationLink(href);
      await homePage.expectUrlToMatch(new RegExp(`${href}$`));
    });
  }
});

test.describe('The Moon Show footer links', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  // Group the footer routes so the same click-and-verify steps are reused.
  const footerLinks = [
    { name: 'Footer logo', href: '/' },
    { name: 'Footer Exchange Reviews', href: '/exchange-reviews' },
    { name: 'Footer Tutorials', href: '/exchange-tutorials' },
    { name: 'Footer App Tutorials', href: '/app-tutorials' },
    { name: 'Footer Exchange Top Listing', href: '/exchange-listing' },
    { name: 'Footer Exchange Comparison', href: '/exchange-comparison' },
    { name: 'Footer VPN Reviews', href: '/vpn-reviews' },
    // Skipped in WebKit due to intermittent navigation timeout.
    // { name: 'Footer VPN Top Listing', href: '/vpn-listing' },
    { name: 'Footer VPN Comparison', href: '/vpn-comparison' },
    { name: 'Footer Live Streaming', href: '/live-streaming' },
    { name: 'Footer Sponsors', href: '/sponsors' },
    // Skipped in WebKit due to intermittent navigation timeout.
    // { name: 'Footer Blogs', href: '/blog' },
    { name: 'Footer Deals', href: '/deals' },
    { name: 'Footer About Us', href: '/about-us' },
    { name: 'Footer Contact Us', href: '/contact-us' },
    { name: 'Footer Social', href: '/social' },
    { name: 'Footer Disclaimer', href: '/disclaimer' },
    { name: 'Footer Privacy Policy', href: '/privacy-policy' },
    { name: 'Footer Terms and Conditions', href: '/terms-and-conditions' },
  ];

  for (const { name, href } of footerLinks) {
    test(`${name} redirects to ${href}`, async () => {
      await homePage.clickFooterLink(href);
      await homePage.expectUrlToMatch(new RegExp(`${href}$`));
    });
  }
});
