---
group: functional-testing-framework-guide
title: Web Driver Replacement in the Functional Testing Framework
---

## Overview

The Functional Testing Framework (FTF) enables you to change a web driver [library](https://glossary.magento.com/library) used for communication with Selenium Server, PhantomJS or any other web page automation tool.

Web drivers provided with the FTF are the following:

-  [PHPUnit_Selenium library] (default)
-  [Facebook web driver library]

Both implement the [`DriverInterface.php`] interface. The interface declares methods that are used in web page automation such as `click()`, `isVisible()`, `setValue()`, `dragAndDrop()` etc.

To use a custom web driver, you must implement the `DriverInterface.php` interface.

Use provided in the FTF web drivers as examples.

## Set up the Facebook web driver {#ftf-facebook-driver-install}

To set up the Facebook web driver, use the following steps:

1. In `<magento2_root_dir>/dev/tests/functional/etc/di.xml`, add the `<preference for="Magento\Mtf\Client\DriverInterface" type="Magento\Mtf\Client\Driver\Facebook\Driver" />` element.
1. In `<magento2_root_dir>/dev/tests/functional/composer.json`, move the `"facebook/webdriver": "dev-master"` entry from the `"suggest"` list to the `"require"` list.
1. Run in your terminal:

   ```bash
   cd <magento2_root_dir>/dev/tests/functional
   ```

   ```bash
   composer update
   ```

    {:.bs-callout-info}
   You still need to [run the Selenium Server]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html#mtf_quickstart_env_selenium) in order to run the tests, because at this point the test run procedure is not yet changed.

## Add and setup a custom web driver

To add a custom web driver, you must implement the [`DriverInterface.php`] interface.

1. Create the `<magento2_root_dir>/dev/tests/functional/lib/Magento/Mtf/Client/Driver/<Your_driver>` directory.
1. In the directory, create the `Driver.php` class which implements [`DriverInterface.php`].

To setup the custom web driver, follow:

1. In `<magento2_root_dir>/dev/tests/functional/etc/di.xml`, add the `<preference for="Magento\Mtf\Client\DriverInterface" type="Magento\Mtf\Client\Driver\<Your_driver>\Driver" />` element.
1. In `<magento2_root_dir>/dev/tests/functional/composer.json`, add corresponding entry to the `"require"` list (if related module is available on [Packagist]). And run in your terminal:

   ```bash
   cd <magento2_root_dir>/dev/tests/functional
   ```

   ```bash
   composer update
   ```

    {:.bs-callout-info}
   You still need to [run the Selenium Server]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html#mtf_quickstart_env_selenium) in order to run the tests, because at this point the test run procedure is not yet changed.

<!-- LINKS DEFINITION -->

[`DriverInterface.php`]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/DriverInterface.php
[Facebook web driver library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Facebook/Driver.php
[Packagist]: https://packagist.org/
[PHPUnit_Selenium library]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Driver/Selenium/Driver.php
