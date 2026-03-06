import {test,BrowserContext,expect, chromium, Browser} from "@playwright/test";

test("Browser Context Play",async()=>{
    const browser=await chromium.launch({headless:false, channel:"chrome"})
    const context1=await browser.newContext();
    const context2=await browser.newContext();
    const page1=await context1.newPage();
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await page1.locator("#input-email").fill("ShreeBhosale@gmail.com");
    await page1.locator("#input-password").fill("shree@123");
    await page1.locator("input[value='Login']").click();

    await page1.locator("text=Edit your account information").click();
    const eamilValue1=await page1.locator("#input-email").innerText();
    console.log(eamilValue1);

    const page2=await context2.newPage();
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await page2.locator("#input-email").fill("SiddKangutkar@gmail.com");
    await page2.locator("#input-password").fill("sidd@123");
    await page2.locator("input[value='Login']").click();

    await page2.locator("text=Edit your account information").click();
    const eamilValue2=await page2.locator("#input-email").innerText();
    console.log(eamilValue2);
});