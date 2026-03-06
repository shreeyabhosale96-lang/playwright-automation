import { test, expect, selectors } from '@playwright/test';
import { Selectors } from '@playwright/test';
test("Locator play", async ({ page }) => {

  await page.goto("https://demo.nopcommerce.com/",{waitUntil:"load"});

  page.getByRole("link", { name: "Register" }).click();

  await expect(
    page.getByRole("heading", { name: "Register" })
  ).toBeVisible();

  /*await page.getByLabel("First name:").fill("Siddhesh")
  await page.getByLabel("Last name:").fill("Kangutkar")
  await page.getByLabel("Email:").fill("SiddheshKangutkar@gmail.com")

  await page.getByPlaceholder("Search store").fill('Apple MacBook Pro')
  */
  
  await page.goto("https://www.wikipedia.org/",{timeout:6000})
  await page.getByTitle("English — Wikipedia — The Free Encyclopedia").click();

  
});

test("Customize test", async({page})=>{
await page.goto("http://127.0.0.1:5500/tests/abc.html")
selectors.setTestIdAttribute("data-btn");
await page.getByPlaceholder("Enter text for Button 1").fill("Let me display....:)")
page.setDefaultTimeout(5000);
await page.getByTestId("fristBtn").click();
let text:string=await page.locator("#display").innerText();
console.log("Display : "+text);
});