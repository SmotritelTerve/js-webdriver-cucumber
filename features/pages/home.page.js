const BasePage = require('./base.page');
const cookieChoiceInfoXpath = "//div[@id='cookieChoiceInfo']";
const cookieChoiceDismissBtnXpath = "//a[@id='cookieChoiceDismiss']";

const base_url = 'https://ui-playground.blogspot.com/'

class HomePage extends BasePage {

    get cookieChoiceInfo() { return $(cookieChoiceInfoXpath) }
    get cookieChoiceDismissBtn() { return $(cookieChoiceDismissBtnXpath) }

    open() {
        super.open(base_url);
    }

    async closeCookieChoiceInfo() {
        if (this.cookieChoiceInfo.isDisplayed()) {
            await this.cookieChoiceDismissBtn.click();
        }

    }
}

module.exports = new HomePage();