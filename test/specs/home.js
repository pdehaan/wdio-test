const assert = require("assert");

describe("Firefox Monitor homepage", () => {
  const baseTitle = "Firefox Monitor";
  const scanEmail = "test@mailinator.com";
  const scanResultsRe = /^This email appeared in (\d{1,}) known data breaches\.$/;

  it("should scan breaches for specified email address", () => {
    browser.url("https://monitor.firefox.com");
    assert.strictEqual(browser.getTitle(), baseTitle);

    const $email = $("input#scan-email");
    $email.click();
    // Passes newline to auto-submit the form.
    $email.setValue(`${scanEmail}\n`);
    assert.strictEqual(browser.getTitle(), `${baseTitle} : Scan Results`);
    assert.strictEqual(browser.getUrl(), "https://monitor.firefox.com/scan");

    const $scannedEmailAddress = $("p#scanned-email-address");
    assert.strictEqual(
      $scannedEmailAddress.getText(),
      `Results for: ${scanEmail}`
    );

    const $scanResultsHeadline = $("h2.scan-results-headline");
    assert.ok(scanResultsRe.test($scanResultsHeadline.getText()));

    const numBreaches = scanResultsRe.exec($scanResultsHeadline.getText());
    console.log(`${scanEmail} appeared in ${numBreaches[1]} breaches`);
  });
});
