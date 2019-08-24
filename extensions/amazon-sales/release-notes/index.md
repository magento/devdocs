---
group: extensions
title: Amazon Sales Channel Release Notes
---

**Amazon Sales Channel** is now available for version 2.2.x and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. Merchants can use Amazon Sales Channel to integrate with an Amazon Seller account to post and sell products in your Magento catalog on Amazon.

See the following documentation:

- [Amazon Sales Channel](https://docs.magento.com/m2/ce/user_guide/sales-channels/amazon/amazon-sales-channel.html) for merchant information and instructions
- [Amazon Sales Channel install]({{site.baseurl}}/extensions/amazon-sales/) for installation and API key information
- [Amazon Sales Channel Marketplace](http://marketplace.magento.com/magento-module-amazon.html)

The release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements
-   {:.bug}Known issues

### v2.0.0

Amazon Sales Channel 2.0.0 is compatible with version 2.2.4+ and 2.3.x of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

{:.bs-callout .bs-callout-info}
Version 1.0.0 was available in limited release only.

- {:.new} **Simplified Onboarding and Maintenance**: Add and integrate with your Amazon Seller account through a step-by-step process with detailed instructions available through the Magento Admin. Maintain your stores, accounts, and listed products through one dashboard.

- {:.new} **Multiple Account Support**: Manage and monitor multiple Amazon brands and marketplace regions through the Magento Admin.

- {:.new} **Intelligent Pricing**: Set automated repricing rules to increase your chances for the coveted Buy Box. Set prices to dynamically adjust to the current Buy Box price, or lowest competitor pricing. Set limits to repricing to protect your margin.

- {:.new} **Listing Management**: Automate product listings and sync your Magento catalog to the Amazon Marketplace using listing rules. Add specific overrides to finely control your offerings. Monitor and manage all your listings directly from the Magento Admin.

- {:.new} **Consistent Inventory Management**: Keep your Magento and Amazon inventory quantities in constant synchronization.

- {:.new} **Order and Fulfillment Management**: Track Amazon orders through the dashboard, with seamless communication and inventory updates. Complete and track order shipments as fulfilled by Amazon, merchant fulfilled, or a mix of methods.

-   {:.bug} You may encounter longer wait times to update product quantities. Updates for product quantity may take ~2 hours to sync.

-   {:.bug} Imported orders may have a type of Prime or Premium orders. You may need to verify these orders in your Amazon Seller Account.

-   {:.bug} Ineligible bundled products may display as Eligible for listing on Amazon. One of the products within the bundled product may not be eligible. If you encounter issues, check the eligibility status for bundled products items.

-   {:.bug} When using [Inventory Management](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-management.html) for Magento 2.3.x, a partial stock reindex may not trigger when an order is created. The salable quantity recalculates hourly, which may cause overselling during this update interval.
