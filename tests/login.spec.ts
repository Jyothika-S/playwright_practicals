import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//Page Obj Model
test('login test', async ({ page }) => {
    const login = new LoginPage(page);

    await login.gotoLoginPage()
    await login.login('jojo', 'Jyothi12!')

  });