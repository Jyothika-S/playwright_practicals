import { ElementHandle, Page } from '@playwright/test';

export class WebTablesPage{
    page: Page;
    addbtn: ElementHandle;
    fname: ElementHandle;
    lname: ElementHandle;
    email: ElementHandle;
    age: ElementHandle;
    salary: ElementHandle;
    dept: ElementHandle;
    submitbtn: ElementHandle;

    constructor(page){
        this.page = page;
        this.addbtn = page.getByRole('button', { name: 'Add' })
        this.fname = page.getByPlaceholder('First Name')
        this.lname = page.getByPlaceholder('Last Name')
        this.email = page.getByPlaceholder('name@example.com')
        this.age = page.getByPlaceholder('Age')
        this.salary = page.getByPlaceholder('Salary')
        this.dept = page.getByPlaceholder('Department')
        this.submitbtn = page.getByRole('button', { name: 'Submit' })
    }

    async gotoWebTablesPage(){
        await this.page.goto('https://demoqa.com/webtables');
    }

    async addData(data){
        await this.addbtn.click()
        await this.fname.fill(data.FirstName)
        await this.lname.fill(data.LastName)
        await this.email.fill(data.Email)
        await this.age.fill(data.Age)
        await this.salary.fill(data.Salary)
        await this.dept.fill(data.Dept)
        await this.submitbtn.click()
    }
}