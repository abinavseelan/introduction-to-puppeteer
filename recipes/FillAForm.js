/*
    1. Launch Google.com
    2. Perform a search
    3. Click on the first link
*/

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 720,
    });

    await page.goto('https://google.com');
    await page.type('input[title="Search"]', 'flipkart', {
        delay: 100,
    });

    await page.keyboard.press('Enter');

    await page.waitForNavigation({
        waitUntil: 'networkidle2',
    });

    await page.click('.sA5rQ');
})();