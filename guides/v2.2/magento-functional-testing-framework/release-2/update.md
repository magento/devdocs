---
group: mftf
title: Update the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/update.md
functional_areas:
 - Testing
mftf-release: 2.3.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

Magento tests and the framework are stored in different repositories.

Magento tests are stored in the same repository as the Magento code base. When you pull changes in the Magento code, you're potentially pulling corresponding tests as well.

The MFTF is installed separately as a dependency using Composer. When pulling the latest Magento code, update the corresponding Composer dependencies in the `magento2` root directory. This ensures that the MFTF is up to date.

## Update the MFTF to 2.3.0

To update the MFTF (via a command line interface):

1. When you update Magento, verify that the Magento [WYSIWYG settings](getting-started.html#wysiwyg-settings) and [Security settings](getting-started.html#security-settings) are set appropriately.
1. Starting at the `magento2` root directory remove the vendor folder:

	```bash
	rm -rf vendor/
	```
1. Run `composer update` to get the latest framework version:
1. Go to the `magento2/dev/tests/acceptance` directory:

	```bash
	cd dev/tests/acceptance
	```
1. Remove the vendor folder `rm -rf vendor/`
1. Run `composer update` to install dependencies at that level.
1. Go back to the root magento folder
    ```bash
	  cd ../../..
	```
1. Run the `upgrade:tests` using the new command line tool:
    ```bash
    vendor/bin/mftf upgrade:tests app
    ```
1. If using Phpstorm update the urn catalog:
    ```bash
    vendor/bin/mftf generate:urn-catalog
    ```
1. Update your own tests, including data, metadata, etc. if they contain tags that are unsupported in the newer version. Check details about backward incompatible changes and see new MFTF release documentation in the [Changelog](../changelog.html).
1. Generate newly pulled tests:

	```bash
	vendor/bin/mftf generate:tests
	```