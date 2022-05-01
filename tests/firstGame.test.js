const puppeteer = require('puppeteer');
const assert = require('chai').assert;

describe("Play game for the first time. Grid size 4x4", () => {
    let browser;
    let page;

    before("Open the game", async function() {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.goto("file:///C:/Users/aiste/Desktop/qa%20Task/QA%20Task.html");
    });

    it("Click all icons in the outer perimeter and define size of a new grid", async function() {
        page.on('dialog', async dialog => {
            const message = dialog.message();
            assert.equal(message, "Done! Ready for the next try? Give me a size [3-9]:")
            await dialog.accept("3");
        });

        const header = await page.waitForSelector(".main h1");
        const headerText = await header.evaluate(element => element.textContent);
        assert.equal(headerText, "Play it is fun !!!");

        const iconsInFirstLine = await page.$$("div.mainGrid div.row:first-of-type > div:nth-child(-n+4)");
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }
     
        const iconsInLastLine = await page.$$("div.mainGrid div.row:last-of-type > div:nth-child(-n+4)");
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }

        const firstIconIn2ndLine = await page.$("div.mainGrid div.row:nth-of-type(2) div:first-child");
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$("div.mainGrid div.row:nth-of-type(3) div:first-child");
        await firstIconIn3rdLine.click();

        const lastIconIn2ndLine = await page.$("div.mainGrid div.row:nth-of-type(2) div:nth-last-child(2)");
        await lastIconIn2ndLine.click();

        let clickedIcons = await page.$$(".mainGrid div[active=true]");
        assert.equal(clickedIcons.length, 11);

        const lastIconIn3rdLine = await page.$("div.mainGrid div.row:nth-of-type(3) div:nth-last-child(2)");
        await lastIconIn3rdLine.click();

// Page refreshes after new size is entered in prompt
        await page.waitForNavigation();
        
        const displayedIcons = await page.$$("div.mainGrid div.icon");
        assert.equal(displayedIcons.length, 9);
        
        clickedIcons = await page.$$(".mainGrid div[active=true]");
        assert.equal(clickedIcons.length, 0);
    });

    after("Close Browser", async function() {
        await browser.close();
    });
})