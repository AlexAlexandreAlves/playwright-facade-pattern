import { test } from '@playwright/test';
import { AuthFacade } from '../ui/facade/auth-facade';
import { RegisterFacade } from '../ui/facade/register-facade';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Register and Authentication tests', () => {

    test('CT001 - Should be able to create a new user with success', async ({ page }) => {
        const register = new RegisterFacade(page);
        const auth = new AuthFacade(page);

        // Do the registration
        await register.registerAs("usuarioteste@gmail.com",
            "Testezinho da Silva",
            "12345",
            "12345");

        // Register confirmation assert
        await register.registerConfirmation();
        // Do login at the same flow because the application doesn't have database, so it saves only in memory
        await auth.loginAs("usuarioteste@gmail.com", "12345");
    });
});