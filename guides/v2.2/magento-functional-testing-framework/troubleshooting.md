---
layout: default
group: mftf
title: Troubleshooting in the Magento Functional Testing Framework
github_link: magento-functional-testing-framework/commands/troubleshooting.md
---

## WebDriver issues

### Chrome

![](./img/trouble-chrome232.png)

#### Reason

Chrome v62 is in the process of being rolled out and it causes an error with ChromeDriver v2.32+.

#### Solution

Download the latest versions of ChromeDriver and Selenium Server Standalone. You will need [ChromeDriver v2.33+] and [Selenium Server Standalone v3.6.0+] in order to execute tests in Google Chrome v62+.

<!-- LINK DEFINITIONS -->

[ChromeDriver v2.33+]: https://chromedriver.storage.googleapis.com/index.html?path=2.33/
[Selenium Server Standalone v3.6.0+]: http://www.seleniumhq.org/download/