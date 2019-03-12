/*
    1. Launch an instance of a site
    2. Print to the console the url and the page title
*/

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://flipkart.com');
    console.log(await page.title());
    console.log(page.url())
})();