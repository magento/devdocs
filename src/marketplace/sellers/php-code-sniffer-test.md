# PHP Code Sniffer (PHPCS) Test

## Overview

PHP Code Sniffer (PHPCS) test is a static test that allows to detect violations of the [Magento2](https://github.com/magento/magento-coding-standard/tree/v5) coding standard.

## Why we test?

We need to be sure that 3rd party extensions adhere Magento2 coding standard rules and follow Magento2 development practices.

## When we test?

PHPCS Test is mandatory for all submissions regardless of an extension type and a scope of changes. Only extensions that passed PHPCS Test may be listed on [Magento Marketplace](https://marketplace.magento.com/).

## What we are looking for?

PHPCS Test looks for any [Magento2](https://github.com/magento/magento-coding-standard/tree/v5) coding standard violations.

## What tools and environment we are using?

PHPCS Test uses the publicly available [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) script and the [Magento2](https://github.com/magento/magento-coding-standard/tree/v5) coding standard rules.

## Configuration
The [Magento2](https://github.com/magento/magento-coding-standard/tree/v5) coding standard has to be installed, the instructions how to do that are described [here](https://github.com/magento/magento-coding-standard/tree/v5#installation-within-a-magento-2-site).

## Test Execution
We run the [phpcs cli command](https://github.com/squizlabs/PHP_CodeSniffer/blob/master/bin/phpcs) against the provided extension's version to detect violations of the [Magento2](https://github.com/magento/magento-coding-standard/tree/v5) coding standard:
```bash
./vendor/bin/phpcs --standard=Magento2 --extensions=php,phtml --error-severity=10 --ignore-annotations --report=json --report-file=report.json /path/to/extension's-version/directory
```
If *phpcs* finds any errors, the provided extension's version is rejected.

## How read an error report?
All detected errors are self-explained. You can find a list of Magento2 coding standard rules on [this page](https://devdocs.magento.com/marketplace/sellers/code-validation.html#magento-2x-rules).
