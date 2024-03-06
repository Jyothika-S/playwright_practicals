import { test, expect } from '@playwright/test';
import { PracticeForm } from '../pages/practiceForm';

test('practice form', async ({ page }) => {
    const practiceForm = new PracticeForm(page);

    await practiceForm.gotoPracticeForm()
    await practiceForm.fillPracticeForm(
        'Jyothi',
        'suresh',
        'jyothi@gmail.com',
        '6789098978',
        '06 Mar 2024',
        'Computer Science',
        'home',
    
    )
    
})