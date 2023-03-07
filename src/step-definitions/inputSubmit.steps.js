const MainMenuPage = require('../../features/components/mainMenu.page.js');
const ElementsPage = require('../../features/pages/elements.page.js');
const InputFieldAndButtonPage = require('../../features/pages/inputFieldAndButton.page.js');

const { Before, Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click Elements link in main menu', async function () {
  MainMenuPage.clickElementsLinkLink();
  await ElementsPage.waitForElementsPageTitle();
});

When('I click Input field and Button link on Elements page', async function () {
  ElementsPage.clickInputFieldAndButtonLink();
  await InputFieldAndButtonPage.waitForInputFieldAndButtonPageTitle();
});

When('I enter {string} in name input field', async function (name) {
  await InputFieldAndButtonPage.enterUsername(name);
});

When('I click submit button', async function () {
  await InputFieldAndButtonPage.clickSubmitBtn();
});

Then('the text in the text area should be equal {string}', async function (text) {
  let actualText = await InputFieldAndButtonPage.getTextFromNameTextArea();
  assert(text, actualText);
});
