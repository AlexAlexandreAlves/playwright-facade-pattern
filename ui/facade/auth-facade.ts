import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

export class AuthFacade {
    constructor(private page: Page) { }

    async loginAs(email: string, password: string) {
        const loginPage = new LoginPage(this.page);
        await loginPage.fillEmail(email);
        await loginPage.fillPassword(password);
        await loginPage.clickLoginButton();
    }
}