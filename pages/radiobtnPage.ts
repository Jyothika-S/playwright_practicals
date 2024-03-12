import { ElementHandle, Page } from '@playwright/test';

export class RadioBtnPage{
    page: Page;
    radiobtn1: ElementHandle;
    radiobtn2: ElementHandle;
    
    constructor(page){
        this.page = page;
        this.radiobtn1 = page.getByText('Yes')
        this.radiobtn2 = page.locator('div').filter({ hasText: /^Impressive$/ })
    }

    async gotoRadiobtnPage(){
        await this.page.goto('https://demoqa.com/radio-button')
    }

    async radio(){
        await this.radiobtn1.click()
        await this.page.waitForSelector('text=You have selected Yes');
        await this.radiobtn2.click()
        await this.page.waitForSelector('text=You have selected Impressive');
    }
}