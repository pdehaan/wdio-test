class Scanpage {
  get scanResultsRe() {
    return /^This email appeared in (\d{1,}) known data breaches\.$/;
  }

  get labelScannedEmailAddress() {
    return $("p#scanned-email-address");
  }

  get labelScanResultsHeadline() {
    return $("h2.scan-results-headline");
  }

  get hasResults() {
    return this.scanResultsRe.test(this.labelScanResultsHeadline.getText());
  }

  get numBreaches() {
    return this.scanResultsRe.exec(this.labelScanResultsHeadline.getText())[1];
  }
}

module.exports = new Scanpage();
