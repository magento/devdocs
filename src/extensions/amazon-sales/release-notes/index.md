---
group: extensions
title: Amazon Sales Channel Release Notes
---
{:.bs-callout .bs-callout-warning}
Amazon Sales Channel versions 4.0.0 and 4.1.0 are only supported for Magento 2.3.x versions.<br/>Amazon Sales Channel version 4.2.0 is compatible with Magento 2.3.x versions but is only supported for Magento 2.4.x versions.

**Amazon Sales Channel** can be installed on instances with {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}} versions 2.3.x and 2.4.x. We no longer support the extension on Magento 2.1, Magento 2.2, or Magento 1. Merchants can use Amazon Sales Channel to integrate with an Amazon Seller account to list and sell products from your Magento catalog on Amazon.

See the following documentation:

-  [Amazon Sales Channel](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-sales-channel.html) for merchant information and instructions
-  [Amazon Sales Channel install]({{site.baseurl}}/extensions/amazon-sales/) for installation and API key information
-  [Amazon Sales Channel Marketplace](http://marketplace.magento.com/magento-module-amazon.html)

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

See [Upcoming Releases](https://devdocs.magento.com/release/) for versioning, support, and compatibility.

### v4.3.0

Amazon Sales Channel 4.3.0 is compatible with versions 2.3.x but only supported for versions 2.4.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

This version of Amazon Sales Channel includes the following improvements and fixes.

-  {:.fix}<!--CHAN-xxxx-->The _Order Details_ feature has been redesigned and no longer relies on the _Import Orders_ setting. Order details now appear in the Amazon Sales Channel interface for all orders.

-  {:.fix}In the _Marketing_ menu in the Admin, the name has been changed from _Amazon_ to _Amazon Sales Channel_.

-  {:.bug}**Important**: Known issues with Magento 2.4.0 compatibility are resolved in the Magento 2.4.1 release.

   -  Amazon cron processes in `error` state

   -  Installation with Magento 2.4.0 fails when creating stores in the database

   -  Creating product fails when MSI is installed

### v4.2.0

Amazon Sales Channel 4.2.0 is compatible with versions 2.3.x but only supported for versions 2.4.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. If you have a previous Amazon Sales Channel version installed and attempt to update your Magento to version 2.4.0, you will be prompted to update the extension before you can complete the Magento update.

This version of Amazon Sales Channel includes a new feature along with improvements and fixes.

-  {:.bug}When Amazon Sales Channel 4.2.0 is integrated with Magento 2.4.0 and [Inventory Management](https://docs.magento.com/user-guide/catalog/inventory.html) (MSI) is enabled, there is a known issue that prevents the addition of products in your Magento catalog. This issue will be addressed in a future Magento release.

-  {:.new}Amazon Sales Channel has been enhanced to accept text-based address data and match it to standardized address formats, including city, state, and zip code. This enables order and shipping data to synchvronize (sync) with Amazon without address errors.<br/>For example, a shopper inputs the city, state, zip code as `Escondido, californiA 92025-1501`. Amazon Sales Channel imports and matches the data to the standard format as `Escondido, CA 92025`, and then syncs it back to Amazon in this standardized format.

-  {:.new}Added support for PHP 7.4.

-  {:.new}<!--CHAN-4334-->Added support for Magento 2.4.x. Previous versions may be compatible with Magento 2.4.x, but are not supported. See [Upcoming releases](https://devdocs.magento.com/release/) for version compatibility. Amazon Sales Channel must be updated to 4.2.0 before the Magento 2.4.0 update can be completed.

-  {:.fix}<!--CHAN-4431-->Corrected an issue that caused an _Access Denied_ error for UK customers.

-  {:.fix}<!--CHAN-4394-->Corrected an issue that prevented the Amazon shipping status from syncing to the corresponding Magento order, thus “locking” the order’s shipping status as `Pending` in Magento and `Unshipped` in Amazon. With the new standardized address feature, these shipping status errors have been resolved.

-  {:.fix}<!--ticket#-->Updated order synchronization (sync) to ignore failed order imports, thus reducing multiple sync attempts and allowing subsequent imports to process, with order sync requests submitted every 5 minutes. Sync errors are still recorded in the error log, but marked as "processed" to allow further logging functions. Also, Amazon Sales Channel now automatically removes excess data collected for orders that fail to create in Magento.

-  {:.fix}Updated error logging to collect more information for uncaught exception and extension update errors.

-  {:.fix}<!--ticket#-->Corrected an issue that caused the initial sync of the _lowest price_ data to fail due to a missing _price_ value.

-  {:.fix}<!--CHAN-4410-->Corrected issues that caused filtering errors in the _Amazon orders_ view when the date range field is left blank.

-  {:.fix}<!--CHAN-4439-->Corrected an issue that caused quantity-related stock and fulfillment sync errors. The extension now rounds down quantity values entered as a decimal before syncing with Amazon.<br/> For example, when a merchant manually inputs a quantity of `2.5`, the extension rounds down the value to `2` and then syncs the updated quantity with Amazon.

### v4.1.0

Amazon Sales Channel 4.1.0 is compatible with versions 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. This version of Amazon Sales Channel includes user-interface enhancements, along with minor bug fixes.

-  {:.new}<!--4247, 4230-->Changed the order import process to align with Magento order requirements. These changes correct issues that prevented Magento from creating the corresponding order for an imported order. See [Manage Orders](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/managing-orders.html) for information on order blockers and solutions.

-  {:.new}<!--CHAN-CHAN-4167, 4297, 4311, 4312, 4324-->Updated the _Recent Orders_ section of the store dashboard and added a new _All Orders_ view that shows all your Amazon orders, including filter options and pagination for viewing more orders. See [Amazon Store Dashboard](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-store-dashboard.html) and [View Amazon Orders](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-orders-all.html).

-  {:.new}Added the _Order Notes_ column of the redesigned _Amazon Orders_ table in both _Recent Orders_ and _All Orders_ views. _Order Notes_ let the merchant know there is an issue with the order's import. See [View Amazon Orders](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-orders-all.html).

-  {:.new}<!--CHAN-4013-->Updated product condition parameters to align with the [Amazon Renewed]( https://sell.amazon.com/programs/renewed.html) program. See [Renewed Products]( https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/renewed-products.html).

-  {:.new}<!--CHAN-3680-->Updated [Amazon Order Details](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-order-details.html) to include "generic data" for orders that are fulfilled by Amazon. See [Fulfilled by](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/fulfilled-by.html).

-  {:.fix}<!--CHAN-4069-->Corrected an issue causing the distortion of icons on the store card.

-  {:.fix}<!--CHAN-4165-->Corrected an error preventing the _Login_ screen from appearing after the session times out.

-  {:.fix}<!--CHAN-4211-->Corrected an issue preventing the Amazon order tax amount from importing into the new Magento order.

-  {:.fix}<!--CHAN-4234-->Corrected an issue causing revenue totals displayed on the store dashboard to include orders in `Canceled` or `Error` status.

-  {:.fix}<!--CHAN-4326-->Corrected an issue causing order import errors associated with third-party extensions that use Magento shipping methods to create orders.

-  {:.fix}<!--CHAN-4357-->Corrected an issue causing errors when running cron synchronization. A lock has been added on the CLI command that will prevent two cron jobs from synchronizing at the same time.

-  {:.fix}Updated content security policy for support with Magento 2.3.5.

### v4.0.0

Amazon Sales Channel 4.0.0 is compatible with versions 2.3.0, 2.3.1, 2.3.2, 2.3.3, and 2.3.4 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. This version of Amazon Sales Channel includes many user-interface upgrades, along with minor bug fixes.

{:.bs-callout .bs-callout-warning}
Amazon Sales Channel 4.0.0 is not supported for Magento 2.3.5. For support with Magento 2.3.5, upgrade to Amazon Sales Channel 4.1.0.

-  {:.new}Introduced a new [Amazon Sales Channel](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-sales-channel-home.html) home page with improved "card view" for your store information.

-  {:.new}Introduced a new [store dashboard](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-store-dashboard.html) with listing, recent orders, and store setting information.

-  {:.new}Introduced a simpler, streamlined [onboarding process](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/amazon-onboarding-home.html) and [default store settings](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/default-store-settings.html) to get your stores integrated faster.

-  {:.bug}<!--- CHAN-4102 --->When [creating attributes](https://docs.magento.com/m2/ee/user_guide/sales-channels/asc/managing-attributes.html) for importing images from listings and **Store Views** is set to `All Store Views (Global)`, a known issue exists preventing images from importing to all store views. If you change the setting for **Store Views (to import values into)** to a specific store, the images will import for that store.

### v3.0.1

Amazon Sales Channel 3.0.1 is compatible with versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix}**Numerical Field Settings**: <!--CHAN-3779-->Fields that require a numeric-based value have been updated to only accept numeric characters. Example: Pricing Rule Settings > Adjustment Amount field

-  {:.fix}**User Guide Links**: <!--CHAN-3778-->Incorrect _User Guide_ links have been corrected.

-  {:.fix}**Duplicate Amazon Listings**: <!--CHAN-3593-->A previously reported issue causing duplicate Amazon listings has been corrected. Prior to this release, the extension added the Country Code for the Amazon region to SKU values when importing listings. The listing matched with the catalog item, but the extension created a new, duplicate listing with the appended SKU. With this release, the extension does not modify the SKU for imported listings, and no changes are made to existing listings. You can use the [End Listing(s) on Amazon](https://docs.magento.com/m2/ee/user_guide/sales-channels/amazon/end-listings-manually.html) option to remove duplicate listings.

### v3.0.0

Amazon Sales Channel 3.0.0 is compatible with versions 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new}**Amazon UK Marketplace Now Available**: Users can choose the United Kingdom marketplace when [creating and integrating](https://docs.magento.com/m2/ee/user_guide/sales-channels/amazon/store-integration.html) an Amazon Sales Channel store. This UK upgrade includes additional support for:

   -  [Amazon VAT Calculation Service](https://services.amazon.co.uk/vat-calculation-service.html)

   -  [Product Tax Code](https://sellercentral.amazon.com/gp/help/help.html?itemID=G200794510&language=en_US) information.

-  {:.new}**Improved Logging**: <!--CHAN-3642, 3672-->Implemented the **Enable Debug Logging** feature to collect additional synchronization data when troubleshooting is needed. See the [Sales Channels Settings](https://docs.magento.com/m2/ee/user_guide/configuration/sales-channels/global-settings.html) topic in the Configuration Reference.

-  {:.fix}**Product Catalog**: <!--CHAN-3687-->Corrected an issue preventing images imported with an Amazon listing from being applied to the corresponding Magento catalog product.

-  {:.fix}**Order Creation**: <!--CHAN-3708-->Corrected an issue preventing Magento from creating orders for an Amazon order that does not match with a Magento catalog product. See [Order Settings](https://docs.magento.com/m2/ee/user_guide/sales-channels/amazon/order-settings.html).

-  {:.bug}**Duplicate Amazon Listings**: <!--CHAN-3593-->This issue causes the catalog to create a new item for an imported listing, using the same SKU but with a region code added on the end. Amazon then processes the modified SKU as a new item and creates a new listing. This issue will be addressed in an future release.

### v2.0.0

Amazon Sales Channel 2.0.0 is compatible with version 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

 {:.bs-callout-info}
Version 1.0.0 was available in limited release only.

-  {:.new} **Simplified Onboarding and Maintenance**: Add and integrate with your Amazon Seller account through a step-by-step process with detailed instructions available through the Magento Admin. Maintain your stores, accounts, and listed products through one dashboard.

-  {:.new} **Multiple Account Support**: Manage and monitor multiple Amazon brands and marketplace regions through the Magento Admin.

-  {:.new} **Intelligent Pricing**: Set automated repricing rules to increase your chances for the coveted Buy Box. Set prices to dynamically adjust to the current Buy Box price, or lowest competitor pricing. Set limits to repricing to protect your margin.

-  {:.new} **Listing Management**: Automate product listings and sync your Magento catalog to the Amazon Marketplace using listing rules. Add specific overrides to finely control your offerings. Monitor and manage all your listings directly from the Magento Admin.

-  {:.new} **Consistent Inventory Management**: Keep your Magento and Amazon inventory quantities in constant synchronization.

-  {:.new} **Order and Fulfillment Management**: Track Amazon orders through the dashboard, with seamless communication and inventory updates. Complete and track order shipments as fulfilled by Amazon, merchant fulfilled, or a mix of methods.

-  {:.bug} You may encounter longer wait times to update product quantities. Updates for product quantity may take ~2 hours to sync.

-  {:.bug} Imported orders may have a type of Prime or Premium orders. You may need to verify these orders in your Amazon Seller Account.

-  {:.bug} Ineligible bundled products may display as Eligible for listing on Amazon. One of the products within the bundled product may not be eligible. If you encounter issues, check the eligibility status for bundled products items.

-  {:.bug} When using [Inventory Management](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-management.html) for Magento 2.3.x, a partial stock reindex may not trigger when an order is created. The salable quantity recalculates hourly, which may cause overselling during this update interval.
