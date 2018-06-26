---
group: mftf
title: Update the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/update.md
functional_areas:
 - Testing
mftf-release: 2.0.2
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Magento tests and the framework are stored in different repositories.

Magento tests are stored in the same repository as the Magento code base. When you pull changes in the Magento code, you're potentially pulling corresponding tests as well.

The MFTF is installed separately as a dependency using Composer. When pulling the latest Magento code, update the corresponding Composer dependencies in the `magento2/dev/tests/acceptance` directory. This ensures that the MFTF is up to date.

## Update the MFTF

To update the MFTF (via a command line interface):

1. When you update Magento, verify that the Magento [WYSIWYG settings](getting-started.html#wysiwyg-settings) and [Security settings](getting-started.html#security-settings) are set appropriately.
1. Go to the `magento2/dev/tests/acceptance` directory:

	```bash
	cd dev/tests/acceptance
	```
1. Update your own tests, including data, metadata, etc. if they contain tags that are unsupported in the newer version. Check details about backward incompatible changes and see new MFTF release documentation in the [Changelog](../changelog.html).
1. Run `composer update` to get the latest framework version:

	```bash
	composer update
	```

1. Generate newly pulled tests:

	```bash
	vendor/bin/robo generate:tests
	```