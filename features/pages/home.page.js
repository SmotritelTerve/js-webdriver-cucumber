const BasePage = require('./base.page');

const base_url = 'https://ui-playground.blogspot.com/'

class HomePage extends BasePage {
    open() {
        super.open(base_url)
    }
}

module.exports = new HomePage();