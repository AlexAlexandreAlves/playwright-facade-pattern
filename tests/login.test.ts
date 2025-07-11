import { test } from '@playwright/test';
import { AuthFacade } from '../ui/facade/auth-facade';


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Authentication tests', () => {

    test('CT001 - Should be able to logging in with an exist user', async ({ page }) => {
        const auth = new AuthFacade(page);
        await auth.loginAs("usuarioteste@gmail.com", "12345");
    });

});