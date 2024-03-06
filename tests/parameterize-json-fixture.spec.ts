
import { test } from '../fixtures/userFixture'; // Assuming both files are in the same directory

// Use the custom fixture
test('data driven tests using JSON', async ({ page, userData }) => {
  for(const data of userData) {
            await page.goto('https://demoqa.com/webtables');
            await page.getByRole('heading', { name: 'Web Tables' }).click();
            await page.getByRole('button', { name: 'Add' }).click();
            await page.getByPlaceholder('First Name').fill(data.FirstName);
            await page.getByPlaceholder('Last Name').fill(data.LastName);
            await page.getByPlaceholder('name@example.com').fill(data.Email);
            await page.getByPlaceholder('Age').fill(data.Age);
            await page.getByPlaceholder('Salary').fill(data.Salary);
            await page.getByPlaceholder('Department').fill(data.Dept);
            await page.getByRole('button', { name: 'Submit' }).click();
        }
  });
    