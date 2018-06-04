---
group: mftf
title: Troubleshooting in the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/troubleshooting.md
functional_areas:
 - Testing
redirect_from:
    - guides/v2.2/magento-functional-testing-framework/troubleshooting.html
    - guides/v2.2/magento-functional-testing-framework/1.0/troubleshooting.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

## WebDriver issues

### Chrome

![](./img/trouble-chrome232.png)

#### Reason

Chrome v62 is in the process of being rolled out, and it causes an error with ChromeDriver v2.32+.

#### Solution

Download the latest versions of ChromeDriver and Selenium Server Standalone. You will need [ChromeDriver v2.33+] and [Selenium Server Standalone v3.6.0+] in order to execute tests in Google Chrome v62+.

<!-- LINK DEFINITIONS -->

[ChromeDriver v2.33+]: https://chromedriver.storage.googleapis.com/index.html?path=2.33/
[Selenium Server Standalone v3.6.0+]: http://www.seleniumhq.org/download/

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework