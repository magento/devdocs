---
group: release-notes
title: B2B Release Notes
---

The release notes for the B2B extension captures additions and bug fixes that Magento has added during a release cycle.
These release notes can include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## Magento B2B - Version 1.3.0

This release includes improvements to order approvals, shipping methods, shopping cart, and logging of Admin actions.

-  {:.new} B2B order approvals have been enhanced to improve usability and to allow for bulk actions on purchase orders.

-  {:.new} B2B merchants can now control shipping methods that are offered to each Company.<!--- BUNDLE-160 161 162 -->

-  {:.new} Merchants can now allow users to clear the contents of their shopping cart in a single action and can configure this ability independently on each website <!--- BUNDLE-108 -->

-  {:.new} B2B buyers can now add individual items or the entire contents of their shopping cart directly to a requisition list. <!--- BUNDLE-145 144-->

-  {:.new} B2B merchants can create orders from the Admin on behalf of customers using Payment on Account as the payment method. <!--- BUNDLE-166 178-->

-  {:.new} Merchants can now directly view all quotes associated with a user from the customer’s detail page. <!--- BUNDLE-139 -->

-  {:.new} Merchants can now filter the Customers Now Online grid by Company. <!--- BUNDLE-137 -->

-  {:.new} Admins can now filter customers in the Admin by Sales Rep. <!--- BUNDLE-110 -->

-  {:.new} To reduce creation of fraudulent or spam accounts, merchants can now enable Google reCAPTCHA on the New Company Request form on the storefront. <!--- BUNDLE-154 -->

-  {:.new} Admin actions taken in the Company modules are now logged in the Admin Actions Log. Actions are logged from all relevant company modules: `Company`, `NegotiableQuote`, `CompanyCredit`, `SharedCatalog`.  <!--- BUNDLE-180 181 182 183 -->

-  {:.fix} Magento no longer displays the **Delete customer** button on the **Customers** page when the logged-in administrator does not have rights to delete customers in deployments where B2B is installed. <!--- MC-35655-->
-  {:.fix} Customer group is no longer automatically changed for a customer who is assigned to a Company when you edit the customer on the Customer grid. <!--- MC-35254-->

-  {:.fix} When a merchant creates a new shared catalog, permissions are now automatically set to **Allow** for the **Display Product Prices** and **Add to Cart** features in categories when the customer group has been assigned this access in catalog permission settings. Previously, these settings were automatically set to **Deny** even when catalog permissions were set to **Allow**.<!--- MC-34792-->

-  {:.fix} Shared catalog category permissions are no longer overwritten when a product is edited from the product edit page.<!--- MC-34777-->

-  {:.fix} Magento now sends an email notification confirming that a customer has permission to exceed the designated credit limit when a merchant enables the **Allow To Exceed Credit Limit** setting. Previously, the notification email sent by Magento indicated that the customer did not have permission to exceed the limit. <!--- MC-34584-->

-  {:.fix} The HTML container that surrounds product price on requisition lists is now rendered correctly for the children of bundled products. <!--- MC-36331-->

-  {:.fix} Merchants can now designate the language in which company user email is sent when creating a new company in multi-language deployments. Previously, the drop-down menu the enables merchants to select the appropriate store view and language was not displayed.  <!--- MC-35777-->

-  {:.fix} Custom customer address attributes fields are now displayed as expected in the storefront checkout workflow. <!--- MC-35607-->

-  {:.fix} The B2B Features tab (Admin **Stores** > **Configuration** > **General** ) now opens correctly. <!--- MC-35458-->Guests can now use QuickOrder to add products to their cart and then successfully remove items. Previously, when a shopper used QuickOrder to add multiple products to their cart, and then removed a product, the product was not removed. <!--- MC-35327-->

-  {:.fix} A company can now be updated using the REST API PUT `/V1/company/:companyId` request without specifying the `region_id` when state is configured as **not required**. Previously, even though `region_id` was not required, Magento threw an error if it was not specified. <!--- MC-35304-->

-  {:.fix} When you create or update a B2B Company using the REST API (`http://magento.local/rest/V1/company/2`, where `2` represents the company ID), the response now includes the settings for `applicable_payment_method` or `available_payment_methods` as expected. <!--- MC-35248-->

-  {:.fix} Magento no longer displays a 404 page when a merchant uses the **Enter** button instead of clicking the **Save** button when creating a requisition list on the storefront.<!--- MC-35094-->

-  {:.fix} Category permissions no longer change when a new product is assigned to a public shared catalog. Previously, category permissions were duplicated. <!--- MC-34386-->

-  {:.fix} The REST API endpoint PUT `rest/default/V1/company/{id}`, which is used to update Company email, is no longer case-sensitive. <!--- MC-34308-->

-  {:.fix} Disabling reward modules no longer affects B2B features on customer accounts. Previously, when reward modules were disabled, the following B2B-related tabs were not displayed: Company Profile, Company Users, and Roles and Permissions.<!--- MC-34191-->

-  {:.fix} Magento now uses the correct sender name on email notifications when changes are made to company accounts. Previously, Magento used the general contact sender name defined in the default scope for all emails. <!--- MC-33917-->

-  {:.fix} You can now successfully implement multishipping for orders that contain both physical and virtual products. <!--- MC-33818-->

-  {:.fix} Merchants can now create company users from the Company Users section in My Account and Company Structure pages in deployments where **Access Restriction** is enabled and **Restriction Mode** is set to **Sales: Login Only**. Previously, Magento threw this error when a merchant tried to create a user: Can not register new customer due to restrictions are enabled. <!--- MC-33608-->

-  {:.fix} Magento no longer resets a customer’s customer group to the default when a customer saves their account information. <!--- MC-33554-->

-  {:.fix} Magento no longer throws a fatal error when an administrator assigns a customer who has an active shopping cart to a customer group. <!--- MC-33313-->

-  {:.fix} Magento now provides an `addToCart` DataLayer event for Quick Order and Requisition lists pages.  <!--- MC-33295-->

-  {:.fix} Notification emails that are sent to sales representatives assigned to a company now include the assigned corporate logo. Previously, the notification email included the default LUMA logo, not the uploaded corporate logo. <!--- MC-33232-->

-  {:.fix} A requisition list now includes all grouped products and quantities that have been added to the list. Previously, when a merchant navigated to a requisition list after adding products to it from a product detail page, Magento displayed this error: `1 product(s) require your attention - Options were updated. Please review available configurations`. <!--- MC-32877-->

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
-  If a discount code expires before a Purchase Order (PO) is approved, the PO continues to display the discounted amount, but once the PO is approved, the order is placed at the non-discounted total. **Workaround**: Install the **B2B-709 Purchase Order Discount patch** hotfix for this issue, which is now available from the **My Account** > **Downloads** section of `magento.com`.
-  If items in a purchase order are out-of-stock, or of insufficient quantity when the purchase order is converted into an actual order, an error will occur. If backorders are enabled, the order will be processed normally.
