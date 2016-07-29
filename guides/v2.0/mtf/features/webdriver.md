---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Web-Driver Selection in the Functional Testing Framework
menu_title: Web driver replacement
version: 2.0
github_link: mtf/mtf_features/webdriver.md
---

## Overview

The Functional Testing Framework (FTF) enables you to change easily a web driver library used for communication with Selenium Server, PhantomJS or other page automation tool.

Web drivers provided with the FTF:

- [PHPUnit_Selenium library] (default)
- [Facebook web diver library]

Both implement the [`DriverInterface.php`] interface. You can use any other web driver implementing `DriverInterface.php` for it. Use existing web drivers as examples.

## Setup the Facebook web driver {#ftf-facebook-driver-install}

To setup the Facebook web driver, follow:

1. In `<magento2>/dev/tests/functional/etc/di.xml`, add the `<preference for="Magento\Mtf\Client\DriverInterface" type="Magento\Mtf\Client\Driver\Facebook\Driver" />` element.
2. In `<magento2>/dev/tests/functional/composer.json`, move the `"facebook/webdriver": "dev-master"` entry from the `"suggest"` list to the `"require"` list.
3. Run in your terminal:

        cd <magento2>/dev/tests/functional
        composer update

Now, the FTF uses Facebook web driver. The test run procedure is not changed, you still need to [run the Selenium Server][].

## Implement another web driver

The FTF contains [DriverInterface] which must be implemented in your PHP class.

1. Create a directory in `<magento2>/dev/tests/functional/vendor/magento/mtf/Magento/Mtf/Client/Driver` with a name which helps you to recognize a driver.
2. In the directory create the `Driver.php` class which implements [`DriverInterface.php`].



<!-- LINKS DEFINITION -->

[`DriverInterface.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/DriverInterface.php
[PHPUnit_Selenium library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Selenium/Driver.php
[Facebook web diver library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Facebook/Driver.php
[run the Selenium Server]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html#mtf_quickstart_env_selenium
