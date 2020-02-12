const assert = require("assert");

class Homepage {
  get baseTitle() {
    return "Firefox Monitor";
  }

  open() {
    browser.url("https://monitor.firefox.com/");
    // Validations
    assert.strictEqual(browser.getTitle(), this.baseTitle);
    assert.strictEqual(browser.getUrl(), "https://monitor.firefox.com/");
  }

  scan(email) {
    this.inputEmail.click();
    this.inputEmail.setValue(email);
    this.buttonScan.click();
    // Validations
    assert.strictEqual(browser.getTitle(), `${this.baseTitle} : Scan Results`);
    assert.strictEqual(browser.getUrl(), "https://monitor.firefox.com/scan");
  }

  get inputEmail() {
    return $("input#scan-email");
  }

  get buttonScan() {
    return $("form#scan-user-email input[type='submit']");
  }
}

module.exports = new Homepage();
