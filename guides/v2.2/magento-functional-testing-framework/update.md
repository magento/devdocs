---
layout: default
group: mftf
title: Update the Magento Functional Testing Framework and pull new tests
version: 2.3
github_link: magento-functional-testing-framework/update.md
---

<div class="bs-callout bs-callout-info" markdown="1">
The Magento Functional Testing Framework is under rapid development and delivers changes to the [`develop`] branch biweekly.
</div>

## Overview

Magento tests and the Framework are stored in different repositories.

Magento tests are stored in the same repository as the Magento code base.
When you pull changes in the Magento code, you're potentially pulling corresponding tests .

The Framework is installed separately as a dependency using Composer.
When pulling the latest Magento code, you need to update the corresponding Composer dependencies in the `magento2ce/dev/tests/acceptance` directory. This ensures that the MFTF is up to date.

## Update the MFTF

* When you updated Magento, verify that the Magento [WYSIWYG settings] and [Security settings] are set appropriately.

* Go to the `magento2ce/dev/tests/acceptance` directory:

```bash
$ cd dev/tests/acceptance
```

* Run `composer update` to get the latest framework version:

```bash
$ composer update
```

* Generate newly pulled tests: 

```bash
$ vendor/bin/robo generate:tests
```

<!-- LINK DEFINITIONS -->

[`develop`]: https://github.com/magento/magento2-functional-testing-framework
[WYSIWYG settings]: getting-started.html#wysiwyg-settings
[Security settings]: getting-started.html#security-settings

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework