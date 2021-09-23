const BasePage = require('./base.page')

const elements_url = 'https://automation-playground.blogspot.com/p/elements.html';
const inputFieldAndButtonLinkXpath = "//li/a[contains(text(),'Input field and Button')]";
const elementsPageTitleXpath = "//h3[@class = 'post-title entry-title' and contains(text(), 'Elements')]";

class ElementsPage extends BasePage {
    get inputFieldAndButtonLink () { return $(inputFieldAndButtonLinkXpath) }
    get elementsPageTitle () { return $(elementsPageTitleXpath) }

    async clickInputFieldAndButtonLink () {
        await this.inputFieldAndButtonLink.click()
    }

    async waitForElementsPageTitle () {
        await this.elementsPageTitle.waitForDisplayed({ timeout: 100000 })
    }
}

module.exports = new ElementsPage();