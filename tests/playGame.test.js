import puppeteer from 'puppeteer';
import { assert } from 'chai';
import {APPLICATION_PATH} from "../utils/utils.js"

describe("Play game. Click icons in outer perimeter", () => {
    let browser;
    let page;
    const grids = [
        {"size": "3", "clicked": 7}, 
        {"size": "5", "clicked": 15}, 
        {"size": "6", "clicked": 19}, 
        {"size": "7", "clicked": 23}, 
        {"size": "8", "clicked": 27},
        {"size": "9", "clicked": 31}
    ];
    let index = 0;
    const selectorFirstRow = "div.mainGrid div.row:first-of-type > div.icon";
    const selectorLastRow = "div.mainGrid div.row:last-of-type > div.icon";
    const selectorFirstIcon2ndLine = "div.mainGrid div.row:nth-of-type(2) div:first-child";
    const selectorLastIcon2ndLine = "div.mainGrid div.row:nth-of-type(2) div:nth-last-child(2)";
    const selectorFirstIcon3rdLine = "div.mainGrid div.row:nth-of-type(3) div:first-child";
    const selectorLastIcon3rdLine = "div.mainGrid div.row:nth-of-type(3) div:nth-last-child(2)";
    const selectorFirstIcon4thLine = "div.mainGrid div.row:nth-of-type(4) div:first-child";
    const selectorLastIcon4thLine = "div.mainGrid div.row:nth-of-type(4) div:nth-last-child(2)";
    const selectorFirstIcon5thLine = "div.mainGrid div.row:nth-of-type(5) div:first-child";
    const selectorLastIcon5thLine = "div.mainGrid div.row:nth-of-type(5) div:nth-last-child(2)";
    const selectorFirstIcon6thLine = "div.mainGrid div.row:nth-of-type(6) div:first-child";
    const selectorLastIcon6thLine = "div.mainGrid div.row:nth-of-type(6) div:nth-last-child(2)";
    const selectorFirstIcon7thLine = "div.mainGrid div.row:nth-of-type(7) div:first-child";
    const selectorLastIcon7thLine = "div.mainGrid div.row:nth-of-type(7) div:nth-last-child(2)";
    const selectorFirstIcon8thLine = "div.mainGrid div.row:nth-of-type(8) div:first-child";
    const selectorLastIcon8thLine = "div.mainGrid div.row:nth-of-type(8) div:nth-last-child(2)";
    const selectorActiveCell = ".mainGrid div[active=true]";

    before("Launch browser", async function() {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
    });

    beforeEach("Open the game", async function(){
        await page.goto(`${APPLICATION_PATH}?width=${grids[index].size}&height=${grids[index].size}`);
    });

    it("All icons in outer peremeter can be clicked when grid size is 3", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
        
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();
        
        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);
        
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    it("All icons in outer peremeter can be clicked when grid size is 5", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
    
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$(selectorFirstIcon3rdLine);
        await firstIconIn3rdLine.click();

        const firstIconIn4thLine = await page.$(selectorFirstIcon4thLine);
        await firstIconIn4thLine.click();
       
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$(selectorLastIcon3rdLine);
        await lastIconIn3rdLine.click();

        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);

        const lastIconIn4thLine = await page.$(selectorLastIcon4thLine);
        await lastIconIn4thLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    it("All icons in outer peremeter can be clicked when grid size is 6", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
    
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$(selectorFirstIcon3rdLine);
        await firstIconIn3rdLine.click();

        const firstIconIn4thLine = await page.$(selectorFirstIcon4thLine);
        await firstIconIn4thLine.click();

        const firstIconIn5thLine = await page.$(selectorFirstIcon5thLine);
        await firstIconIn5thLine.click();
       
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$(selectorLastIcon3rdLine);
        await lastIconIn3rdLine.click();

        const lastIconIn4thLine = await page.$(selectorLastIcon4thLine);
        await lastIconIn4thLine.click();

        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);

        const lastIconIn5thLine = await page.$(selectorLastIcon5thLine);
        await lastIconIn5thLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    it("All icons in outer peremeter can be clicked when grid size is 7", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
    
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$(selectorFirstIcon3rdLine);
        await firstIconIn3rdLine.click();

        const firstIconIn4thLine = await page.$(selectorFirstIcon4thLine);
        await firstIconIn4thLine.click();

        const firstIconIn5thLine = await page.$(selectorFirstIcon5thLine);
        await firstIconIn5thLine.click();

        const firstIconIn6thLine = await page.$(selectorFirstIcon6thLine);
        await firstIconIn6thLine.click();
       
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$(selectorLastIcon3rdLine);
        await lastIconIn3rdLine.click();

        const lastIconIn4thLine = await page.$(selectorLastIcon4thLine);
        await lastIconIn4thLine.click();

        const lastIconIn5thLine = await page.$(selectorLastIcon5thLine);
        await lastIconIn5thLine.click();

        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);

        const lastIconIn6thLine = await page.$(selectorLastIcon6thLine);
        await lastIconIn6thLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    it("All icons in outer peremeter can be clicked when grid size is 8", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
    
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$(selectorFirstIcon3rdLine);
        await firstIconIn3rdLine.click();

        const firstIconIn4thLine = await page.$(selectorFirstIcon4thLine);
        await firstIconIn4thLine.click();

        const firstIconIn5thLine = await page.$(selectorFirstIcon5thLine);
        await firstIconIn5thLine.click();

        const firstIconIn6thLine = await page.$(selectorFirstIcon6thLine);
        await firstIconIn6thLine.click();

        const firstIconIn7thLine = await page.$(selectorFirstIcon7thLine);
        await firstIconIn7thLine.click();
       
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$(selectorLastIcon3rdLine);
        await lastIconIn3rdLine.click();

        const lastIconIn4thLine = await page.$(selectorLastIcon4thLine);
        await lastIconIn4thLine.click();

        const lastIconIn5thLine = await page.$(selectorLastIcon5thLine);
        await lastIconIn5thLine.click();

        const lastIconIn6thLine = await page.$(selectorLastIcon6thLine);
        await lastIconIn6thLine.click();

        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);

        const lastIconIn7thLine = await page.$(selectorLastIcon7thLine);
        await lastIconIn7thLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    it("All icons in outer peremeter can be clicked when grid size is 9", async function() {
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        });
        await page.waitForSelector(selectorFirstRow);
        const iconsInFirstLine = await page.$$(selectorFirstRow);
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }

        const iconsInLastLine = await page.$$(selectorLastRow);
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }
    
        const firstIconIn2ndLine = await page.$(selectorFirstIcon2ndLine);
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$(selectorFirstIcon3rdLine);
        await firstIconIn3rdLine.click();

        const firstIconIn4thLine = await page.$(selectorFirstIcon4thLine);
        await firstIconIn4thLine.click();

        const firstIconIn5thLine = await page.$(selectorFirstIcon5thLine);
        await firstIconIn5thLine.click();

        const firstIconIn6thLine = await page.$(selectorFirstIcon6thLine);
        await firstIconIn6thLine.click();

        const firstIconIn7thLine = await page.$(selectorFirstIcon7thLine);
        await firstIconIn7thLine.click();

        const firstIconIn8thLine = await page.$(selectorFirstIcon8thLine);
        await firstIconIn8thLine.click();
       
        const lastIconIn2ndLine = await page.$(selectorLastIcon2ndLine);
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$(selectorLastIcon3rdLine);
        await lastIconIn3rdLine.click();

        const lastIconIn4thLine = await page.$(selectorLastIcon4thLine);
        await lastIconIn4thLine.click();

        const lastIconIn5thLine = await page.$(selectorLastIcon5thLine);
        await lastIconIn5thLine.click();

        const lastIconIn6thLine = await page.$(selectorLastIcon6thLine);
        await lastIconIn6thLine.click();

        const lastIconIn7thLine = await page.$(selectorLastIcon7thLine);
        await lastIconIn7thLine.click();

        let clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, grids[index].clicked);

        const lastIconIn8thLine = await page.$(selectorLastIcon8thLine);
        await lastIconIn8thLine.click();

        await page.waitForNavigation();
        clickedIcons = await page.$$(selectorActiveCell);
        assert.equal(clickedIcons.length, 0);
    });

    afterEach("Increase index used to select size for a new grid", function() {
        index++;
    })

    after("Close Browser", async function() {
        await browser.close();
    });
});