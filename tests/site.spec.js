const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'FitFarm - The Ultimate Whole Food Sources'
const expectedMetaDescription = "Saddle up for a wild ride with FitFarm's Eggceleent eggs, the outlaw of nutritional treasures. These bad boys in blue shells are the renegades of the coop, delivering a powerful punch of essential nutrients straight from free-spirited, naturally-raised hens. Unleash the untamed goodness and make every meal an adventure with these outlaw eggs.";
const expectedMetaKeywords = 'araucana chicken, shell eggs, eggs, ultimate food source';
const expectedHeroTitle = 'Wanna know my secret?';
const expectedHeroSubText = 'I signed up! You can do so to get 50% off my first order';
const expectedHeroLinkCount = 1;
const expectedNavs = ['FitFarm', 'Our Products', 'About', 'Outlaw Social'];
const expectedProductsTitle = 'Eggcellent Eggs';
const expectedImageCount = 2;
const expectedText = 'Eggcellent eggs ARE MY FAVORITE! 🤤';
const expectedSubText = 'Eggcelent eggs are very tasty and nutritious!';
const expectedFooterLinks = ['Home', 'Buy NFTs', 'Sell NFTs', 'Browse NFTs', 'Email', 'LinkedIn', 'Instagram', 'Twitter', 'Market', 'Contact'];
const expectedIcons = ['FacebookLogo', 'TwitterLogo', 'InstagramLogo','ThreadsLogo', 'WhatsappLogo'];

test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
  });

  test('Check Page Title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe(expectedTitle);
  });

  test('Check SEO Meta Description', async ({ page }) => {
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBe(expectedMetaDescription);
  });
  
  test('Check SEO Meta Keywords', async ({ page }) => {
    const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
    expect(metaKeywords).not.toBe(expectedMetaKeywords);
  });

  test('Check Hero Section', async ({ page }) => {
    expect(await page.locator().textContent()).toBe(expectedHeroTitle);
    expect(await page.locator().textContent()).toBe(expectedHeroSubText);
  });
  
  test('Check Links in Hero Section', async ({ page }) => {
    const linkCount = await page.locator().count();
    expect(linkCount).toBe(expectedHeroLinkCount);
  });

  test('Check Featured Section', async ({ page }) => {
    expect(await page.locator('products').textContent()).toBe(expectedProductsTitle);
    const imageCount = await page.locator().count();
    expect(imageCount).toBe(expectedImageCount);
  });

  test('Check Testimonials Section', async ({ page }) => {
    expect(await page.locator('social').textContent()).toBe(expectedText);
    expect(await page.locator('social').textContent()).toBe(expectedSubText);
  });

  test('Check All Social Links', async ({ page }) => {
    const footerLinks = await page.locator('social');
    const count = await footerLinks.count();
  
    for (let i = 0; i < count; i++) {
      const link = footerLinks.nth(i);
      expect(await link.isVisible()).toBe(true);
    }
  });

test('Check All Social Icons', async ({ page }) => {
    const footerIcons = await page.locator('social');
    const count = await footerIcons.count();
  
    for (let i = 0; i < count; i++) {
      const icon = footerIcons.nth(i);
      expect(await icon.isVisible()).toBe(true);
    }
  });
  
  
