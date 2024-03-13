import { ElementHandle, Locator, Page, expect } from "@playwright/test";

export class ButtonsPage {
    page: Page;
    dblclick: Locator;
    rgtclick: Locator;
    click: Locator;

    constructor(page: Page){
        this.page = page;
        this.dblclick = page.getByRole('button', { name: 'Double Click Me' })
        this.rgtclick = page.getByRole('button', { name: 'Right Click Me' })
        this.click = page.getByRole('button', { name: 'Click Me', exact: true })
    }

    async gotoButtonsPage(){
        await this.page.goto('https://demoqa.com/buttons')
    }

    async clickButtonsPage() {
        await this.dblclick.dblclick();
        await this.page.isVisible('text="You have done a double click"');
        await this.rgtclick.click({ button: 'right' });
        await this.page.isVisible('text="You have done a right click"');
        await this.click.click();
        await this.page.isVisible('text="You have done a dynamic click"');
    }

}
