import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';

export class RegisterFacade {
    constructor(private page: Page) { }

    async registerAs(email: string, name: string, password: string, confirmationPassword: string) {

        const loginPage = new LoginPage(this.page);
        const registerPage = new RegisterPage(this.page);

        await loginPage.clickRegisterButton();
        await registerPage.fillEmail(email);
        await registerPage.fillName(name);
        await registerPage.fillPassword(password);
        await registerPage.fillPasswordConfirmation(confirmationPassword);
        await registerPage.clickRegisterButton();
    }

    // async registerConfiration() {
    //     const registerPage = new RegisterPage(this.page);
    // }
}