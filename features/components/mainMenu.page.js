const BasePage = require('../pages/base.page')

const elementsLinkXpath = "//div[@id='PageList1']//li/a[contains(text(),'Elements')]";

class MainMenuPage extends BasePage {
    get elementsLink () { return $(elementsLinkXpath) }

    async clickElementsLinkLink () {
        await this.elementsLink.click()
    }
}

module.exports = new MainMenuPage();