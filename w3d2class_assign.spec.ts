const { test, expect } = require('@playwright/test');

test('LeafTaps Login', async ({ page }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill('democsr');
    await page.locator("input[id='password']").fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator("text='CRM/SFA'").click();
    const pageTitle = await page.title()
    console.log(pageTitle)
});