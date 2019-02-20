---
title: Debugging MFTF Tests
mftf-release: 2.3.13
---

Debugging within the Magento Functional Testing Framework is helpful in identifying test bugs by allowing you to pause execution so that you may:

- Examine the page.
- Check returned data and other variables being used during run-time.

This is straightforward to do once you create a basic Debug Configuration.

## Prerequisites

- [Xdebug][]
- PHPUnit configured for use in [PHPStorm][]

## Creating Debug Configuration with PHPStorm

1. If not already installed, download the Codeception Framework plugin for PHPStorm (`PhpStorm->Preferences->Plugins`).
1. Click `Edit Configurations` on the configuration dropdown.
1. Click `+` and select `Codeception` from the available types.
1. Change `Test Scope` to `Type` and select `functional` from the `Type:` dropdown.
1. Find the `Custom Working Directory` option and set the path to your `dev/tests/acceptance/` directory.

If you get a warning `Path to Codeception for local machine is not configured.`:

1. Click `Fix`, then `+`, and select `Codeception Local`.
1. Click `...` and locate `/vendor/bin/codecept` in your Magento installation folder.

The easiest method of tagging a test for debugging is the following:

- In your Debug configuration, locate `Test Runner options:` and set `--group testDebug`.
- When you want to debug a test you are working on, simply add `<group value="testDebug"/>` to the annotations. Be sure to remove this after done debugging.

Your Debug Configuration should now be able to run your test and pause execution on any breakpoints you have set in the generated `.php` file under the `_generated` folder.

<!-- Link definitions -->
[Xdebug]: https://xdebug.org/docs/install
[PHPStorm]: https://github.com/SeleniumHQ/selenium/wiki/PageObjects
