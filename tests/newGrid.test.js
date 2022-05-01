import puppeteer from 'puppeteer';
import { assert } from 'chai';
import {APPLICATION_PATH} from "../utils/utils.js"

describe("New grid after prompt", () => {
    let browser;
    let page;
    const grids = [
        {"size": "3", "cells": 9}, 
        {"size": "4", "cells": 16}, 
        {"size": "5", "cells": 25}, 
        {"size": "6", "cells": 36}, 
        {"size": "7", "cells": 49}, 
        {"size": "8", "cells": 64},
        {"size": "9", "cells": 81}
    ];
    let index = 0;

    before("Launch browser", async function() {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
    });

    beforeEach("Opent the game and click all icons in outter perimeter to see the promt", async function() {
        await page.goto(APPLICATION_PATH);
        page.on('dialog', async dialog => {
            await dialog.accept(grids[index].size);
        });

        await page.waitForSelector("div.mainGrid div.row:first-of-type > div.icon");
        const iconsInFirstLine = await page.$$("div.mainGrid div.row:first-of-type > div.icon");
        for (let index = 0; index < iconsInFirstLine.length; index++) {
            await iconsInFirstLine[index].click();
        }
    
        const iconsInLastLine = await page.$$("div.mainGrid div.row:last-of-type > div.icon");
        for (let index = 0; index < iconsInLastLine.length; index++) {
            await iconsInLastLine[index].click();
        }

        const firstIconIn2ndLine = await page.$("div.mainGrid div.row:nth-of-type(2) div:first-child");
        await firstIconIn2ndLine.click();

        const firstIconIn3rdLine = await page.$("div.mainGrid div.row:nth-of-type(3) div:first-child");
        await firstIconIn3rdLine.click();

        const lastIconIn2ndLine = await page.$("div.mainGrid div.row:nth-of-type(2) div:nth-last-child(2)");
        await lastIconIn2ndLine.click();

        const lastIconIn3rdLine = await page.$("div.mainGrid div.row:nth-of-type(3) div:nth-last-child(2)");
        await lastIconIn3rdLine.click();

        index++
    });

    grids.forEach(function(grid) {
        it(`Verify grid with ${grid.size} columns and rows is displayed`, async function() {
            await page.waitForNavigation();
            const clickedIcons = await page.$$(".mainGrid div[active=true]");
            assert.equal(clickedIcons.length, 0, "Clicked icons exist");

            const displayedIcons = await page.$$("div.mainGrid div.icon");
            assert.equal(displayedIcons.length, grid.cells, "Not all icons are displayed");
            
            const displayedRows = await page.$$("div.mainGrid div.row");
            assert.equal(displayedRows.length, grid.size, "Wrong number of rows is displayed");

            for (let row = 1; row <= grid.size; row++) {
                let columnsInRow = await page.$$(`div.mainGrid div.row:nth-of-type(${row}) div.icon`);
                assert.equal(columnsInRow.length, grid.size, `Wrong number of columns in the ${row} row`)
            };
        });
    });

    after("Close Browser", async function() {
        await browser.close();
    });
})