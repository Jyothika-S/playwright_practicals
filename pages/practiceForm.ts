import { ElementHandle, Page } from '@playwright/test';

export class PracticeForm {
    page: Page;
    firstname: ElementHandle;
    lastname: ElementHandle;
    email: ElementHandle;
    gender_radiobtn: ElementHandle;
    mob: ElementHandle;
    dob: ElementHandle;
    subjects: ElementHandle;
    hobbies_checkbox: ElementHandle;
    address: ElementHandle;
    state_dropdown: ElementHandle;
    state_option: ElementHandle;
    city_dropdown: ElementHandle;
    submit_btn: ElementHandle;

    constructor(page){
        this.page = page;
        this.firstname = page.getByPlaceholder('First Name')
        this.lastname = page.getByPlaceholder('Last Name')
        this.email = page.getByPlaceholder('name@example.com')
        // this.gender_radiobtn = page.locator("id=gender-radio-2");
        // this.gender_radiobtn = page.locator("input[value='Female']")
        // this.gender_radiobtn = page.getByLabel('Female')
        // this.gender_radiobtn = page.check("input[value='Female']")
        this.mob = page.getByPlaceholder('Mobile Number')
        this.dob = page.locator("id=dateOfBirthInput");
        // this.subjects = page.locator("id=subjectsContainer");
        // this.hobbies_checkbox = page.locator("id=hobbies-checkbox-2");
        this.address = page.getByPlaceholder('Current Address')
        // this.state_dropdown = page.locator("#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder");
        // this.state_dropdown = page.locator("#stateCity-wrapper > div:nth-child(2)");
        // this.state_option = page.locator(".css-1uccc91-singleValue")
        this.state_dropdown = page.locator("#react-select-3-input");
        this.city_dropdown = page.locator("#stateCity-wrapper > div:nth-child(3)");
        this.submit_btn = page.getByRole('button', { name: 'Submit' })
        
    }

    async gotoPracticeForm(){
        await this.page.goto('https://demoqa.com/automation-practice-form')
    }

    async fillPracticeForm(firstname:string, lastname:string, email:string, mob: string, dob: string, subjects:string, address:string){
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        // await this.gender_radiobtn.check()
        await this.mob.fill(mob)
        await this.dob.fill(dob)
        // await this.subjects.fill(subjects)
        // await this.hobbies_checkbox.check()
        await this.address.fill(address)
        // await this.state_dropdown.click()
        // await this.city_dropdown.click()
        await this.submit_btn.click()

    }

    
}