---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Web-Driver Selection in the Functional Testing Framework
menu_title: Web driver replacement
version: 2.0
github_link: mtf/features/webdriver.md
---

<h3>Contents</h3>

* TOC
{:toc}


## Overview

The Functional Testing Framework (FTF) enables you to change easily a web driver library used for communication with Selenium Server, PhantomJS or any other web page automating tool.

Web drivers provided with the FTF:

- [PHPUnit_Selenium library] (default)
- [Facebook web diver library]

Both implement the [`DriverInterface.php`] interface. The interface declares methods that are used in web page automation such as `click()`, `isVisible()`, `setValue()`, `dragAndDrop()` etc.

To use a custom web driver, you must implement the `DriverInterface.php` interface. Use provided web drivers as examples.

## Setup the Facebook web driver {#ftf-facebook-driver-install}

To setup the Facebook web driver, follow:

1. In `<magento2>/dev/tests/functional/etc/di.xml`, add the `<preference for="Magento\Mtf\Client\DriverInterface" type="Magento\Mtf\Client\Driver\Facebook\Driver" />` element.
2. In `<magento2>/dev/tests/functional/composer.json`, move the `"facebook/webdriver": "dev-master"` entry from the `"suggest"` list to the `"require"` list.
3. Run in your terminal:

        cd <magento2>/dev/tests/functional
        composer update

Now, the FTF uses Facebook web driver. The test run procedure is not changed, you still need to [run the Selenium Server].

## Implement and setup a custom web driver

To implement a custom web driver, you must implement the [`DriverInterface.php`] interface.

1. Create the`<magento2>/dev/tests/functional/lib/Magento/Mtf/Client/Driver/<Your_driver>` directory.
2. In the directory, create the `Driver.php` class which implements [`DriverInterface.php`].

To setup the custom web driver, follow:

1. In `<magento2>/dev/tests/functional/etc/di.xml`, add the `<preference for="Magento\Mtf\Client\DriverInterface" type="Magento\Mtf\Client\Driver\<Your_driver>\Driver" />` element.
2. In `<magento2>/dev/tests/functional/composer.json`, add corresponding entry to the `"require"` list, if applicable. And run in your terminal:

        cd <magento2>/dev/tests/functional
        composer update



<!-- LINKS DEFINITION -->

[`DriverInterface.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/DriverInterface.php
[PHPUnit_Selenium library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Selenium/Driver.php
[Facebook web diver library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Facebook/Driver.php
[run the Selenium Server]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html#mtf_quickstart_env_selenium
