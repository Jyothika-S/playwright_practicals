
import { test } from '../fixtures/userFixture';
import { WebTablesPage } from '../pages/webTablesPage';

// Use the custom fixture
test('data driven tests using JSON', async ({ page, userData }) => {
  const webTablesPage = new WebTablesPage(page);

  await webTablesPage.gotoWebTablesPage()
  
  for(const data of userData) {
            await webTablesPage.addData(data)
        }
  });
    