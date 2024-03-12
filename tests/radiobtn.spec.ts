import { test } from '@playwright/test'
import { RadioBtnPage } from '../pages/radiobtnPage'

test('yes or no radio button', async ({ page }) => {
    const radioButton = new RadioBtnPage(page);

    await radioButton.gotoRadiobtnPage()
    await radioButton.radio()

})