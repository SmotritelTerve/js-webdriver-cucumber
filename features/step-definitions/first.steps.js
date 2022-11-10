const { Before, Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page');

Given('the UI Playground blog open', async function () {
  HomePage.open();
  await HomePage.closeCookieChoiceInfo();
});

Then('the UI Playground blog title should be equal {string}', async function (title) {
  expect(browser).toHaveTitle(title);
});