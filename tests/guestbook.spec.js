const { test, expect } = require("@playwright/test");
const common = require("./common");
const { locators, data } = require("../resources/locators");

// const users = ["ADMIN", "USER", "NOUSER"];
// const users = ['ADMIN', 'USER']


test.beforeEach(async ({ page }, testInfo) => {
  await common.RunBefore({ page }, testInfo);
});

test.afterEach(async ({ page }, testInfo) => {
  await common.RunAfter({ page }, testInfo);
});


const user1 = 'ADMIN'

test(`Login as : ${user1}`, async ({ page }) => {
  await common.ValidUserLogin_BaseTest(page, user1);

});

const user2 = 'USER'

test(`Login as : ${user2}`, async ({ page }) => {
  await common.ValidUserLogin_BaseTest(page, user2);

});

const user3 = 'NOUSER'

test(`Login as : ${user3}`, async ({ page }) => {
  await common.InvalidUserLogin_BaseTest(page, user3);

});
