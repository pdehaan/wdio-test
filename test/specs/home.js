const assert = require("assert");

const HomePage = require("./pages/Home.page");
const ScanPage = require("./pages/Scan.page");

describe("Firefox Monitor homepage", () => {
  const scanEmail = "test@mailinator.com";

  before(() => {
    HomePage.open();
  });

  it("should scan breaches for specified email address", () => {
    HomePage.scan(scanEmail);

    assert.strictEqual(
      ScanPage.labelScannedEmailAddress.getText(),
      `Results for: ${scanEmail}`
    );
  
    assert.ok(ScanPage.hasResults);

    console.log(`${scanEmail} appeared in ${ScanPage.numBreaches} breaches`);
  });
});
