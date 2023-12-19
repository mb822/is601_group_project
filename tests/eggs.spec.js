const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'FitFarm'
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
    await page.goto('https://is601-group-project.vercel.app/');
  });

  test('Check About Section', async ({ page }) => {
  const aboutHeading = await page.$eval('#about h1', (el) => el.textContent);
    expect(aboutHeading).toBe('About');
  });

  test('Check SEO Meta Description', async ({ page }) => {
    const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
    expect(metaDescription).toBe(expectedMetaDescription);
  });
  

  test('Check Navigation Bar Title',async ({ page }) => {   
    const navbarBrandText = await page.textContent('.text-4xl');
    expect(navbarBrandText).toBe('FitFarm');
  });

  test('Check Hero Section', async ({ page }) => {
    const subHeading = await page.$eval('h3', (el) => el.textContent);
    expect(subHeading).toContain('I signed up! You can do so to get 50% off my first order');
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
