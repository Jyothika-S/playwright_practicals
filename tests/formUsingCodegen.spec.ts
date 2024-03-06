import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Jyothika');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Suresh');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('jyothika@gmail.com');
  await page.getByText('Female').click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('8989786760');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1999');
  await page.getByLabel('Choose Thursday, March 11th,').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('it');
  await page.getByText('Reading').click();
  await page.getByLabel('Select picture').click();
  await page.getByLabel('Select picture').setInputFiles('test1jan19 Results.jpeg');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('abc');
  await page.locator('.css-tlfecz-indicatorContainer').first().click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'Thanks for submitting the form' }).nth(3).click();
  await page.getByRole('button', { name: 'Close' }).click();
});