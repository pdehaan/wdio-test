# wdio-test

Using WebdriverIO to scrape the Firefox Monitor site.

## WHAT

Currently there is just one simple test in the test/specs/* directory which:
1. launches the homepage,
2. enters an email address to scan,
3. submits the form,
4. scrapes the results page and confirms the correct email was scanned and the scan results headline displays the number of breaches for the specified account.

## HOW

```sh
npm test

> wdio-test@1.0.0 test /Volumes/Dev/github/pdehaan/wdio-test
> wdio run wdio.conf.js

Execution of 1 spec files started at 2020-02-11T23:16:41.874Z

Starting ChromeDriver 80.0.3987.16 (320f6526c1632ad4f205ebce69b99a062ed78647-refs/branch-heads/3987@{#185}) on port 4444
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
[0-0] RUNNING in chrome - /test/specs/home.js
[1581463006.302][SEVERE]: Timed out receiving message from renderer: 0.100
[1581463006.404][SEVERE]: Timed out receiving message from renderer: 0.100
[1581463006.505][SEVERE]: Timed out receiving message from renderer: 0.100
[0-0] test@mailinator.com appeared in 91 breaches
[0-0] PASSED in chrome - /test/specs/home.js

 "spec" Reporter:
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /Volumes/Dev/github/pdehaan/wdio-test/test/specs/home.js
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0] Session ID: e387232e676157710fa3b98b90020e30
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] Firefox Monitor homepage
[chrome  mac os x #0-0]    ✓ should scan breaches for specified email address
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 1 passing (2.5s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:04
```
