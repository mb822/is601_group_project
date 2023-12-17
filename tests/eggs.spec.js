const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'FitFarm - The Ultimate Whole Food Sources'
const expectedMetaDescription = "Saddle up for a wild ride with FitFarm's Eggceleent eggs, the outlaw of nutritional treasures. These bad boys in blue shells are the renegades of the coop, delivering a powerful punch of essential nutrients straight from free-spirited, naturally-raised hens. Unleash the untamed goodness and make every meal an adventure with these outlaw eggs.";
const expectedMetaKeywords = 'araucana chicken, shell eggs, eggs, ultimate food source';


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

  
