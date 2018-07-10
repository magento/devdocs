---
group: mftf
title: Troubleshooting
version: 2.2
github_link: magento-functional-testing-framework/release-2/troubleshooting.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Having a little trouble with the MFTF? See some common errors and fixes below.

## WebDriver issues

Troubleshoot your WebDriver issues on various browsers.

### PhantomJS

You are unable to upload file input using the MFTF actions and are seeing the following exception:

```
[Facebook\WebDriver\Exception\NoSuchDriverException]
No active session with ID e56f9260-b366-11e7-966b-db3e6f35d8e1
```

#### Reason

Use of PhantomJS is not actually supported by the MFTF.

#### Solution

For headless browsing, the [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome){:target="_blank"} has better compatibility with the MFTF.

### Chrome

You are seeing an "unhandled inspector error" exception:

```
[Facebook\WebDriver\Exception\UnknownServerException]
unknown error: undhandled inspector error: {"code":-32601, "message":
"'Network.deleteCookie' wasn't found"} ....
```

![Screenshot with the exception](./img/trouble-chrome232.png)

#### Reason

Chrome v62 is in the process of being rolled out, and it causes an error with ChromeDriver v2.32+.

#### Solution

Use [ChromeDriver v2.33+](https://chromedriver.storage.googleapis.com/index.html?path=2.33/){:target="_blank"} and [Selenium Server Standalone v3.6.0+](http://www.seleniumhq.org/download/){:target="_blank"} in order to execute tests in Google Chrome v62+.

### Firefox

Tests that use the `moveMouseOver` action cause an error when run locally.

#### Reason

There's a compatibility issue with Codeception's `moveMouseOver` function and GeckoDriver with Firefox.

#### Solution

None yet. Solving this problem is dependent on a GeckoDriver fix.
