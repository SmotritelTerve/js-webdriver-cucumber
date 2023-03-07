const MainMenuPage = require('../components/mainMenu.page.js');
const ElementsPage = require('../pages/elements.page.js');
const InputFieldAndButtonPage = require('../pages/inputFieldAndButton.page.js');
const AlertsPage = require('../pages/alerts.page.js');

const { Before, Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click Alerts link on Elements page', async function () {
  ElementsPage.clickAlertsLink;
});

Then('I see {string} boxes in the page', async function (numberOfBoxes) {
  let actualNumberOfBoxes = await AlertsPage.getNumberOfBoxes();
  assert(numberOfBoxes, actualNumberOfBoxes);
});
