import {test,expect,Locator} from "@playwright/test";

test("Play with Xpath",async({page})=>{
 await page.goto("https://www.amazon.in/");
 const links=page.locator("//a[@class='nav-a  ']");
 let firstLink=await links.first().textContent();
 let lastLink=await links.last().textContent();
 let thridLink=await links.nth(3).textContent();
 console.log("First link : "+firstLink)
 console.log("Last link : "+lastLink);
 console.log("3rd element : "+thridLink)

 //fetch all link text
 let linksText:string[]=await links.allTextContents();
 for(let i=0;i<linksText.length;i++){
    console.log(linksText[i]);
 }
console.log("All link text : "+linksText);
 for(let lt of linksText){
    console.log(lt);
 }
})

test("contains and startwith xpath",async({page})=>{
    await page.goto("https://www.amazon.in/");
    const updateText=page.locator("//span[contains(text(),'pdate')]");
    console.log("update text : "+await updateText.textContent())

    const todayLinkText=page.locator("//a[starts-with(text(),'Today')]");
    console.log("today text : "+await todayLinkText.textContent())
})

test("xpath internal attribute",async({page})=>{
    await page.goto("https://www.amazon.in/");
    const conWithUsLastLink=page.locator("//div[./div[text()='Connect with Us']]//li[last()]");
    console.log("connect with us : "+await conWithUsLastLink.textContent())

    const getToknowThridLink=page.locator("//div[./div[text()='Get to Know Us']]//li[position()=4]");
    console.log("get To know link : "+await getToknowThridLink.textContent());
})

test("Dynamic xpath",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const button=page.getByRole('button',{name:/START|STOP/});
    console.log("Before click : "+await button.textContent());
    await button.click();
    console.log("After click : "+await button.textContent());
})


test("MorningStar",async({page})=>{
    await page.goto("https://www.morningstar.in/funds.aspx");
    //self axes
    await page.locator("//a[@id='mnuFunds']/self::a").click();
    //parent axes
    await page.locator("//a[@title='Screen Funds' and contains(@class,'today__recommended-topic')]").click();
    const firstRow= page.locator("//a[text()='360 ONE Balanced Hybrid Dir Gr']/parent::div/parent::td/parent::tr");
    //await expect(firstRow).toContainText("13.16 INR");
    console.log(await firstRow.textContent());

    const secondRowCell=await page.locator("//table[contains(@class,'search-result')]//tr[5]/child::td").allTextContents();
    console.log("SecondRowCell element : "+secondRowCell);

    const tbodyElement=page.locator("//a[text()='360 ONE Balanced Hybrid Reg IDCW-P']/ancestor::tbody");
    expect(tbodyElement).toBeVisible();
})