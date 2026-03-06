import {test} from '@playwright/test';
import { LoginPageForHRM } from './Pages/LoginPageForHRM'
test('Login in OrangeHRM website', async ({page}) => {
    const loginPage : LoginPageForHRM=new LoginPageForHRM(page);
    await loginPage.openOrangeHRM();
    await loginPage.loginToOrnageHRM("Admin","admin123");
});