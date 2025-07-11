import { test } from '@playwright/test';
import { AuthFacade } from '../ui/facade/auth-facade';
import { RegisterFacade } from '../ui/facade/register-facade';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Authentication tests', () => {

    test('CT001 - Should be able to create a new user with success', async ({ page }) => {
        const register = new RegisterFacade(page);
        await register.registerAs("usuarioteste@gmail.com",
            "Testezinho da Silva",
            "12345",
            "12345");
    });

    test('CT002 - Should be able to logging in with an exist user', async ({ page }) => {
        const auth = new AuthFacade(page);
        await auth.loginAs("usuarioteste@gmail.com", "12345");
    });

});