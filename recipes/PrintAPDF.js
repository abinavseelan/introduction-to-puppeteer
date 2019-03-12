/*
    1. Launch Flipkart.com
    2. Perform a search
    3. Print a PDF
*/

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.flipkart.com/search?q=shoes');

    await page.pdf({
        path: `${Date.now()}.pdf`,
        displayHeaderFooter: true,
        footerTemplate: '<span style="font-size: 20px; width: 200px; height: 200px; background-color: black; color: black; margin: 20px;">Generated on <div class="date"></span>',
    });

    await browser.close();
})();