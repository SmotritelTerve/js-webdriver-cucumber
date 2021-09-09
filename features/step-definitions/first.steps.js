const { Before, Given, When, Then } = require('@cucumber/cucumber')
const HomePage = require('../pages/home.page');

Given('the Automation Playground blog open', function () {
  HomePage.open()
});

Then('the Automation Playground blog title should be equal {string}', async function (title) {
  expect(browser).toHaveTitle(title);
});