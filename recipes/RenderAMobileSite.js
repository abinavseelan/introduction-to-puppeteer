/*
    1. Launch a browser
    2. Emulate iphone
    3. Navigate to Flipkart.com
    4. Take a screenshot
*/

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);

    await page.goto('https://flipkart.com');
    await page.waitForNavigation({
        waitUntil: 'networkidle2',
    });

    await page.screenshot({
        path: `${Date.now()}-mobile.png`,
        type: 'png',
    });

    browser.close();
})();