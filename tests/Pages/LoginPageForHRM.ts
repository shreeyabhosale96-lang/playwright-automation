import { Locator, Page } from "@playwright/test";

export class LoginPageForHRM {
    page: Page;
    txtUsername:Locator;
    txtPassword:Locator;
    btnLogin:Locator;

    constructor(page:Page){
        this.page=page;
        this.txtUsername=page.getByPlaceholder("Username");
        this.txtPassword=page.getByPlaceholder("Password");
        this.btnLogin=page.getByRole("button",{name:"Login"});
    }

    async openOrangeHRM(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async loginToOrnageHRM(username:string,passowrd:string){
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(passowrd);
        await this.btnLogin.click();
    }
}