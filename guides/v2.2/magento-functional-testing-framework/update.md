---
layout: default
group: mftf
title: Update the Magento Functional Testing Framework and pull new tests
github_link: magento-functional-testing-framework/update.md
---

<div class="bs-callout bs-callout-info" markdown="1">
The Magento Functional Testing Framework is under rapid development and delivers changes to the [`develop`] branch biweekly.
</div>

## Overview

Magento tests and the Framework are stored in different repositories.

Magento tests are stored along with Magento code base.
It means that, when you pull changes in the Magento code, you're also pulling corresponding tests potentially.

The Framework is installed separately as a dependency using Composer. When pulling the latest Magento code, you need to update corresponding Composer dependencies in the `magento2ce/dev/tests/acceptance` directory. This ensures that the MFTF is up to date.

## Step-by-step update 

* When you updated Magento, check the Magento [WYSIWYG] and [Security] settings.

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
[WYSIWYG]: ./getting-started.html#wysiwyg-settings
[Security]: ./getting-started.html#security-settings

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework