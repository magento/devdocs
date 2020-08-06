---
group: release-notes
title: B2B Release Notes
---

The release notes for the B2B extension captures additions and bug fixes that Magento has added during a release cycle.
These release notes can include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## Magento B2B - Version 1.2.0

-  {:.new} [Storefront Order Search](https://github.com/magento/partners-magento2b2b/pull/16) added thanks to contribution by [Marek Mularczyk]( https://github.com/mmularski) from [Divante](https://www.divante.com/) and community members.
-  {:.new} Purchase Orders have been enhanced and rewritten. They are now included by default in {{site.data.var.ee}}.
-  {:.new} Purchase Order Approval Rules have been implemented. These rules allow users to control the Purchase Order workflow by creating purchasing rules for orders.
-  {:.new} Login as Customer is now included by default in {{site.data.var.ee}}. This allows site employees to assist customers by logging in as the customer to see what they see.

-  {:.fix} Attribute aggregations are now working correctly for Layered Navigation with Elasticsearch
-  {:.fix} Search orders by special characters is now working properly.
-  {:.fix} Clicking on the **Clear All** Button now expands all the filters, rather than collapsing them.
-  {:.fix} Product SKU/Name is now included in the Order History search filter summary.
-  {:.fix} Sorting Indicator is now displayed properly in the My Purchase Orders Grid.
-  {:.fix} Now, you can click the Approve, Cancel, Reject, and Purchase Purchase Order buttons only once. Previously, you could click the button multiple times.
-  {:.fix} The Purchase Order Approve, Reject, Cancel, and Validate buttons now render correctly on mobile devices.
-  {:.fix} Previously, approving a Purchase Order with a discount that has expired placed the order at the full amount and did not update the Purchase Order total. This now works correctly.
-  {:.fix} A bug was introduced in 2.3.4 where custom extension attributes would not be copied from the Customer Address to the Quote Address. This bug has been fixed.
-  {:.fix} With B2B installed, a SQL error would appear when assigning categories to shared catalogs. This bug has been fixed.
-  {:.fix} Due to an incorrect variable type value, admins could not add configurable products to an order. The option dropdowns would not populate. This feature now works properly.
-  {:.fix} Previously, when editing Category Permissions for the Not Logged In group, an error would occur when saving the changes. This bug has now been fixed.
-  {:.fix} A bug has been fixed that now allows admins to add products to an order that are not in the shared catalog. Previously, an error message would appear when adding an item not in the catalog.
-  {:.fix} Previously, after running the command `php bin/magento indexer:set-dimensions-mode catalog_product_price website` and then trying to create a shared catalog, an error would occur. This bug has been fixed.
-  {:.fix} When adding a new company and assigning the Company Administrator to a non-default website, the wrong site ID was sent, causing an error. This bug has now been fixed.
-  {:.fix} Previously, after a customer was moved to another customer group, adding a product to an order via Quick View would fail with an error. This bug has now been fixed.
-  {:.fix} Previously, when attempting to checkout using the WebAPI with a B2B quote, an incorrect value was sent to the API, causing an error to occur. This bug has been fixed.
-  {:.fix} Previously, when setting a company to "Active" via the API, an error would occur. This bug has now been fixed.
-  {:.fix} Due to an unneeded `form` tag, the page would refresh when you press Enter after changing a proposed shipping charge. This has been fixed.
-  {:.fix} Previously, when setting a product display limit on a catalog page and that limit was less than the number of total products, an error occurred. That feature now works as expected.
-  {:.fix} Previously, when changing the admin of a company, the original admin address would be copied to the new admin, giving them two addresses. Now, only the correct address is added.
-  {:.fix} Previously, using the API to save a quote item when backorder is set to "Allowed and Notify Customer" would fail. This API call now works as expected.
-  {:.fix} The Fixed Product Tax is now displayed on the Quotes detail page.
-  {:.fix} Previously, clicking on an attachment in the Comments tab of the My Quotes page would fail to download the file. This behavior now works as expected.

### Known Issues

-  Magento throws an exception during upgrade to B2B 1.2.0 in a multi-website deployment. When `setup:upgrade` runs, this error occurs on the `PurchaseOrder` module: `Module Magento_PurchaseOrder: Unable to apply data patch Magento\PurchaseOrder\Setup\Patch\Data\InitPurchaseOrderSalesSequence for moduleMagento_PurchaseOrder`. **Workaround**: Install the **B2B-716 Add NonTransactionableInterface interface to the InitPurchaseOrderSalesSequence data patch** hotfix, which is now available from the **My Account** > **Downloads** section of `magento.com`.
-  If items in a purchase order are out-of-stock, or of insufficient quantity when the purchase order is converted into an actual order, an error will occur. If backorders are enabled, the order will be processed normally.
-  If a discount code expires before a purchase order is approved, the PO continues to show the discounted amount. Once the PO is approved, the order is placed at the non-discounted total.
