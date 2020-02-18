---
group: functional-testing-framework-guide
title: Troubleshoot the Functional Testing Framework issues
---

### Installation issues {#install-issues}

#### Selenium Server issue

Error message:

```terminal
PHPUnit_Extensions_Selenium2TestCase_WebDriverException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output: in selenium server console output
```

*  **Reason**: a Selenium server is [incompatible with your browser version](https://selenium.dev/documentation/en/getting_started_with_webdriver/browsers/)
*  **Solution**: [download the latest Selenium Standalone Server version](http://docs.seleniumhq.org/download/)
