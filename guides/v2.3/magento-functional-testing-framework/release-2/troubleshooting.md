---
layout: default
group: mftf
title: Troubleshooting in the Magento Functional Testing Framework (release 2)
version: 2.3
github_link: magento-functional-testing-framework/release-2/troubleshooting.md
functional_areas:
 - Testing
---

## WebDriver issues

### PhantomJS

Inability to upload file input using the MFTF actions, giving the following exception:

```
[Facebook\WebDriver\Exception\NoSuchDriverException]
No active session with ID e56f9260-b366-11e7-966b-db3e6f35d8e1
```

#### Reason

Use of PhantomJS is not actually supported by the MFTF.

#### Solution

For headless browsing, the [Headless Chrome]{:target="_blank"} has better compatibility with the MFTF.

### Chrome

![Screenshot with the exception][trouble chrome]

#### Reason

Chrome v62 is in the process of being rolled out, and it causes an error with ChromeDriver v2.32+.

#### Solution

Use [ChromeDriver v2.33+]{:target="_blank"} and [Selenium Server Standalone v3.6.0+]{:target="_blank"} in order to execute tests in Google Chrome v62+.

### Firefox

Tests that use the `moveMouseOver` action cause an error when run locally.

#### Reason

There's a compatibility issue with Codeception's `moveMouseOver` function and GeckoDriver/Firefox.

#### Solution

None yet. Solving this problem is dependent on a GeckoDriver fix.

<!-- LINK DEFINITIONS -->
[ChromeDriver v2.33+]: https://chromedriver.storage.googleapis.com/index.html?path=2.33/
[Headless Chrome]: https://developers.google.com/web/updates/2017/04/headless-chrome
[Selenium Server Standalone v3.6.0+]: http://www.seleniumhq.org/download/

<!-- Images -->
[trouble chrome]: ./img/trouble-chrome232.png

<!-- Abbreviations -->
*[MFTF]: Magento Functional Testing Framework
