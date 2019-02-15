---
mftf-release: 2.3.0
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/update.html
---

# Update the Magento Functional Testing Framework

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

{% include_relative include/note-2.2-docs.md %}

Magento tests and the framework are stored in different repositories.

Magento tests are stored in the same repository as the Magento code base.
When you pull changes in the Magento code, you're potentially pulling corresponding tests as well.

The MFTF is installed separately as a dependency using Composer.
When pulling the latest Magento code, update the corresponding Composer dependencies in the `magento2` root directory.
This ensures that the MFTF is up to date.

## Update the MFTF from 2.3.x

To update the MFTF to the latest patch:

1. Verify that the Magento [WYSIWYG settings][] and [Security settings][] are set appropriately.
1. Check details about backward incompatible changes in the [Changelog][] and update your new or customized tests.
1. Get the latest framework version using Composer:

   ```bash
   composer update
   ```

1. Generate the updated tests:

   ```bash
   vendor/bin/mftf generate:tests
   ```

## Update the MFTF from 2.2

To update the MFTF from the previous minor version:

1. When you update Magento, verify that the Magento [WYSIWYG settings][] and [Security settings][] are set appropriately.
1. Starting at the `magento2/` root directory remove the `vendor/` directory:

   ```bash
   rm -rf vendor/
   ```

1. Get the latest framework version from the Composer dependencies:

   ```bash
   composer install
   ```

1. Run the `upgrade:tests` using the new command line tool:

   ```bash
   vendor/bin/mftf upgrade:tests app
   ```

1. If you are using Phpstorm, update the urn catalog:

   ```bash
   vendor/bin/mftf generate:urn-catalog .idea/
   ```

1. Update your own tests, including data, metadata, and so on, if they contain tags that are unsupported in the newer version.

   Check details about backward incompatible changes and review new MFTF release documentation in the [Changelog][].

1. Generate newly pulled tests:

   ```bash
   vendor/bin/mftf generate:tests
   ```

<!-- Link Definitions -->
[Changelog]: https://github.com/magento/magento2-functional-testing-framework/blob/master/CHANGELOG.md
[WYSIWYG settings]: getting-started.html#wysiwyg-settings
[Security settings]: getting-started.html#security-settings