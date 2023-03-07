const MainMenuPage = require('../po/components/mainMenu.page');
const ElementsPage = require('../po/pages/elements.page');
const InputFieldAndButtonPage = require('../po/pages/inputFieldAndButton.page.js');
const AlertsPage = require('../po/pages/alerts.page');

const { Before, Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click Alerts link on Elements page', async function () {
  ElementsPage.clickAlertsLink;
});

Then('I see {string} boxes in the page', async function (numberOfBoxes) {
  let actualNumberOfBoxes = await AlertsPage.getNumberOfBoxes();
  assert(numberOfBoxes, actualNumberOfBoxes);
});
