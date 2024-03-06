import { test as baseTest } from '@playwright/test';
import userData from '../test-data/userdetails.json';

type UserDataFixture = {
  userData: typeof userData;
};

export const userDataFixture = baseTest.extend<UserDataFixture>({
  userData: async ({}, use) => {
    await use(userData);
  },
});

export const test = userDataFixture;
