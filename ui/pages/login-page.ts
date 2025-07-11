import { Page, Locator } from "@playwright/test";


export class LoginPage {

    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Informe seu e-mail');
        this.passwordInput = page.getByPlaceholder('Informe sua senha');
        this.loginButton = page.getByRole('button', { name: 'Acessar' });
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

}