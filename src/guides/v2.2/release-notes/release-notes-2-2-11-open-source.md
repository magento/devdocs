---

group: release-notes
title: Magento Open Source 2.2.11 Release Notes

---
**This release (Magento 2.2.11) marks the final supported software release for Magento version 2.2. Magento 2.2 will no longer receive security updates or product quality fixes now that its support window has expired**.

Magento Open Source 2.2.11 offers platform upgrades and substantial security changes. This release includes 24 functional fixes and enhancements to the core product and 30 security enhancements.

Magento 2.2.11 has not been tested with PHP 7.1. PHP 7.1 reached EOL (End of Life) on December 1, 2019. We recommend updating your deployment to a supported version of PHP.

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes.

### Cart and checkout

<!--- MC-18720  -->

*  Administrators with appropriate but restricted privileges can now view the list of CMS pages at **Content** > **Pages**.  Previously, Magento displayed this error: `You cannot define a correlation namestore_table more than once`.

<!--- MC-18903 -->

*  A shopping cart that contains items no longer displays a subtotal and order total of zero when the **Clear Persistence on Sign Out** setting is disabled and the **Redirect Customer to Account Dashboard after Logging in** setting is enabled.

### CMS content

<!--- MC-18985  -->

*  You can now upload a video from the WYSIWYG editor.

### Configurable products

<!--- MC-19539  -->

*  You can now add new options with new images to an existing configurable product. Previously, when you clicked **Save**, Magento threw an error and did not save the new variations.

<!--- MC-19672  -->

*  Simple products no longer disappear from the Admin configurable product list when you set the product quantity to 0.

<!--- MC-18809  -->

*  Out-of-stock configurable product options are now listed as expected on the storefront when the **Display Out of Stock Products** setting is enabled on **Admin** > **Store** > **Configuration** > **Inventory** > **Stock Options**.

### Inventory

<!--- MC-17605  -->

*  You can now save an edited product when `max_sale_qty` is set to the Magento default value. [GitHub-23319](https://github.com/magento/magento2/issues/23319)

### Import/export

<!--- MC-18741  -->

*  Magento now adds newly imported images after previously imported ones. Previously, Magento added these most recently imported images randomly.

<!--- MC-18201  -->

*  The import process now maintains custom option prices that were assigned to different websites and scope before import. Previously, after import, these custom option prices were set to the default scope values.

<!--- MC-18711  -->

*  Magento now correctly processes product prices during export when the **All Store Views** scope is set. Previously, the logic for updating the price of custom options in non-default websites was missing when the **Catalog** > **Price** setting was set to **Website**.

### Indexing

<!--- MC-18631  -->

*  The `POST /V1/products/tier-prices` endpoint now considers account indexer mode as expected.

### Infrastructure

Magento 2.2.11 has not been tested with PHP 7.1. PHP 7.1 reached EOL (End of Life) on December 1, 2019. We recommend updating your deployment to a supported version of PHP. See [Magento 2.2 technology stack requirements](https://devdocs.magento.com/guides/v2.2/install-gde/system-requirements-tech.html) for information about supported versions.

### Payment methods

<!--- MC-19773  -->

*  You can now successfully complete an order using Braintree with PayPal when Shipping Flat Rate is activated. Previously, Magento displayed an informative error.

<!--- MC-18283  -->

*  For orders paid with Payflow Pro, if the **Vault Enabled** option is set to Yes, Magento now displays accurate stored card information as expected on the order information page.

### Persistent

<!--- MC-19019  -->

*  Guest users can now check out after persistent shopping cart has been disabled. Previously, Magento displayed this error: `No cart with such entityId=0`.

<!--- MC-17137  -->

*  Magento no longer creates a persistent cart session for logged-in users when the persistent cart feature has been disabled. Previously, Magento did not empty shopping carts for users when the user logged out.

### Sales Rule

<!--- MC-18290  -->

*  **Select All** on the coupon list of the Manage Coupon Codes page now works as expected.

### Shipping

<!--- MC-18551  -->

*  Shipping notification emails sent to customers now contain a link to order tracking.

<!--- MC-18534  -->

*  Magento now displays the correct cost for shipping in the shopping cart when you return to the cart from the checkout page for an order being shipped to multiple addresses.

### Search

<!--- MC-19065  -->

*  Magento no longer throws an exception when search queries contain decimals.

### URL rewrite

<!--- MC-19199  -->

*  Category-specific URL rewrites are now generated as expected when importing and assigning a product to a category.

<!--- MC-18790  -->

*  A category schedule update no longer unchecks the **Use default value** setting on the URL key for the store view.

### Wishlist

<!--- MC-18801  -->

*  Wishlists now accurately reflect product availability when a product has been added to a wishlist and then subsequently disabled. Previously, the wishlist displayed these contradictory messages: `You have no items in your wish list` and `1 item in wish list`.

<!--- MC-18287  -->

*  Products that are deleted from a wishlist from the Admin are now deleted from the storefront wishlist.

### Installation and upgrade instructions

See [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool](https://devdocs.magento.com/guides/v2.3/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
