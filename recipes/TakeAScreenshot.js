/*
    1. Launch Flipkart.com
    2. Perform a search
    3. Take a screenshot
*/

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.flipkart.com/search?q=shoes');

    await page.screenshot({
        path: `${Date.now()}.png`,
        type: 'jpeg',
        quality: 90,
        fullPage: true,
    });

    await browser.close();
})();