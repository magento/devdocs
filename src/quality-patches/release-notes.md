---
group: tools
title: Release notes
functional_areas:
  - Setup
  - Configuration
  - Upgrade
redirect_from:
  - /quality-patches/release-notes-commerce.html
  - /quality-patches/release-notes-open-source.html
---

{% include install/patch/quality-patch-intro.md %}

{: .bs-callout-info}
For information about quality patches created by the Community for {{site.data.var.ce}}, see the [release notes](https://github.com/magento/quality-patches/blob/master/community-release-notes.md).

<!-- The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues -->

## v1.1.16

-  **MDVA-44703** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where order totals in the Orders report are miscalculated for the restricted admin user.
- **MDVA-44940** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the SQL error that occurs while saving the category from admin.
- **MDVA-44562** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.2-p2`)_-Fixes the issue where the non-default store id for quote items is overridden by the default store id, despite the GraphQL request originating from the non-default store view.
- **MDVA-43167** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where admin order grid mass action doesn't apply for multi-page when admin user selects all orders.
- **MDVA-44044** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.2-p2`)_-Fixes the issue where a product is not displayed on the category page after it is assigned to a new website.
- **MDVA-42509** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <2.4.4`)_-Fixes the issue where a CSV could not be uploaded for a quick order resulting in an 'Unable to send the cookie' error.
- Updated patches: MDVA-41061, MDVA-42584.
- The prefix for the new Quality Patches Tool patches will be changed from "MDVA" to "ACSD" due to internal process changes.

## v1.1.15

-  **MDVA-40961** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where an additional item can't be added to the cart when the minimum qty of the item is already in the cart.
-  **MDVA-44887** _(for Adobe Commerce and Magento Open Source `>=2.4.4 <2.4.5`)_-Fixes the "Uncaught SyntaxError: Unexpected token 'const'" error in the Admin panel.
-  **MDVA-43718** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes "The consumer isn't authorized to access %resources." error that appears when accessing a shared catalog from a custom integration.
-  **MDVA-44660** _(for Adobe Commerce and Magento Open Source `>=2.4.2-p1 <2.4.5`)_-Fixes the issue where the grave accent character [ ` ] could not be used for a customer's first and last name.
-  **MDVA-40896** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the "Error: TypeError: Argument 3 passed to Magento" error in async product bulk API.
-  **MDVA-38559** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.3`)_-Fixes the /V1/customers/search API error for customers with more than one subscription.
-  **MDVA-44533** _(for Adobe Commerce and Magento Open Source `>=2.3.1 <2.4.4`)_-Fixes the issue where the discount is wrongly applied to a bundle child product.
-  Updated patches: MDVA-41061, MDVA-42269.

## v1.1.14

-  **MDVA-43983** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.5`)_-Fixes the issue where products 'Not Visible Individually' still appear in Catalog Advanced Search Results.
-  **MDVA-44100** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where all FPTs are assigned to the last product in the shopping cart and reset for other products.
-  **MDVA-43605** _(for Adobe Commerce and Magento Open Source `>=2.3.1 <2.4.5`)_-Fixes the issue where order data returns negative values for row totals when using Rest API.
-  **MDVA-43102** _(for Adobe Commerce and Magento Open Source `>=2.3.1 <2.4.5`)_-Fixes the issue where the salable quantity is not updated correctly when a refund was done via REST API.
-  **MDVA-43178** _(for Adobe Commerce and Magento Open Source `>=2.4.3-p2 <2.4.5`)_-Fixes the issue where a customer token for a custom store cannot be retrieved in GraphQL.
-  **MDVA-43859** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.5`)_-Fixes the issue where the error \"No such entity with customerId =\" is logged when a deleted customer tries to log in.
-  **MDVA-44147** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.5`)_-Fixes the issue where a GraphQL request doesn't return Requisition Lists.
-  **MDVA-44505** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.3`)_-Fixes the issues where GraphQL Applying Reward Points does not update Grand Total and where store credit is applied multiple times during the order placement.
-  Updated patches: MDVA-29148, MDVA-36464-V5, MDVA-42584, MDVA-39993-V2.

## v1.1.13

-  **MDVA-42969** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.3`)_-Fixes the issue where the Related Product Rule works only when Customer Segment is set to All.
-  **MDVA-39605** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <2.4.5`)_-Fixes the issue where Redis cache TTL (expiration date) has a wrong value.
-  **MDVA-43862** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <2.4.5`)_-Fixes the issue where the customer can’t update cart items because of a GraphQL UpdateCartItems mutation error.
-  **MDVA-43824** _(for Adobe Commerce and Magento Open Source `>=2.3.6 <=2.3.7-p3 || >=2.4.1 <2.4.5`)_-Fixes the issue where an error appears on canceling orders with a discount.
-  **MDVA-43451** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where the error “The store that was requested wasn’t found. Verify the store and try again.” appears while configuring a shared catalog for a specific website.
-  **MDVA-43491** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <2.4.5`)_-Fixes the issue where the base image label doesn’t update when importing products for a multi-store website.
-  **MDVA-43601** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue with missing triggers after full reindex.
-  **MDVA-42046** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <=2.3.5-p2 || >=2.4.0 <2.4.5`)_-Fixes the issue where an incorrect value is assigned to a product attribute with a date input field while updating a product.
-  **MDVA-43935** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.5`)_-Fixes the issue where Upsell product is shown twice.
-  **MDVA-44188** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where system issued emails with “.-“ in addresses are not sent.
-  **MDVA-42283** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where the date-time format in the admin order grid for the French locale is invalid.
-  Updated patches: MDVA-41061-V2, MDVA-36309, MDVA-30862, MDVA-39713.
-  Added patches metadata for the Site-Wide Analysis Tool.

## v1.1.12

-  **MDVA-39713** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.3.6`)_-Fixes the issue where the user is able to edit the start time for an active scheduled update.
-  **MDVA-42410** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where coupon reports display only default base currency.
-  **MDVA-41136** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where the expiration date of the "mage-cache-sessid" is not extended, resulting in customer data cleanup.
-  **MDVA-39993** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <=2.3.7-p2 || >=2.4.0 <2.4.4`)_-Fixes the issue where inventory changes done through API do not reflect on the product page on the frontend.
-  **MDVA-42855** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where new customer address is not saved to address book during checkout.
-  **MDVA-42645** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where admin cannot refund reward points if store credit functionality is disabled.
-  **MDVA-43414** _(for Adobe Commerce and Magento Open Source `>=2.3.6 <=2.3.7-p2`)_-Fixes the PHP fatal error that occurs when running the "inventory.reservations.updateSalabilityStatus" queue consumer on numerical SKUs.
-  **MDVA-41628** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.5`)_-Fixes the issue where existing restricted admin users get access to the new resources when new modules are added.
-  **MDVA-43348** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.5`)_-Fixes the issue where gift card GraphQL request shows an error if gift_card_options contain "uid".
-  **MDVA-39546** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where the start date for staging update could be set to an earlier date than the current date during editing.
-  **MDVA-42950** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where videos don't play on the product page.
-  **MDVA-42689** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where Adobe Commerce throws an Integrity Constraint Violation error while updating product categories during import.
-  **MDVA-41229** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where images available on the backend do not display on the frontend after configurable products import.
-  **MDVA-43731** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where "Search Synonyms" no longer work when value is added in "Minimum Terms to Match".
-  **MDVA-43232** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <2.4.5`)_-Fixes the issue where sorting products in visual merchandiser by Special Price To Bottom/Top causes an error while saving category.
-  **MDVA-43726** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <2.4.3`)_-Fixes the issue where Catalog price rule based on store-level attribute match fails to apply after partial reindex.
-  Updated patches: MDVA-36464, MDVA-37478, MDVA-38608.
-  Added patches metadata for the Site-Wide Analysis Tool.

## v1.1.11

-  **MDVA-42790** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where product price attributes cannot be updated for a specific website via REST API.
-  **MDVA-41350** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where an exception is thrown when an admin user with restricted access adds a product outside their role scope by SKU in an order.
-  **MDVA-42269** _(for Adobe Commerce and Magento Open Source `>=2.4.3-p1 <2.4.5`)_-Fixes the issue where an admin user cannot log in to Admin due to the "TypeError: strtotime() expects parameter 1 to be string, null given" error.
-  **MDVA-40830** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where the store credit is applied multiple times during order placement.
-  **MDVA-42237** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.5`)_-Fixes the issue where a configurable product special price is not updated after changes in its subproduct price.
-  **MDVA-42520** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where the tax rate is applied twice if "Enable Cross Border Trade" is used.
-  Updated patches: MDVA-27239, MDVA-39305, MDVA-41236, MDVA-36832.
-  Deprecated patch: MDVA-37725.

## v1.1.10

-  **MDVA-38728** _(for Adobe Commerce and Magento Open Source `>=2.3.2 <2.4.5`)_-Fixes the issue where mass attribute update creates URL rewrite for Default Store only after changing "Product visibility".
-  **MDVA-43091** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where ordering a bundle product from admin in the backend gives the error "You cannot use decimal quantity for this product".
-  **MDVA-40816** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where related product rules show products from categories not defined in the rule conditions.
-  **MDVA-41305** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.5`)_-Fixes the issue where GraphQL mutation doesn’t return configurable product options after adding it to the wishlist.
-  **MDVA-39181** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.5`)_-Fixes the issue where related product rules show products from categories not defined in the rule conditions.
-  **MDVA-42584** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3`)_-Fixes the issue where configurable stock status in the backend is not updated after changing qty and stock status via Import or API.
-  **MDVA-40175** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.3`)_-Fixes the issue where "Click to change shipping method" doesn’t show radio buttons to select shipping methods in admin during reorder.
-  **MDVA-42768** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <2.4.5`)_-Fixes the issue where  Configurable product displays regular price as 0 when "Display Out-of-Stock" is Yes.
-  **MDVA-43201** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where an error occurs in customer login when using DOB attribute with certain locales.
-  Updated patches: MDVA-35092, MDVA-33970.

## v1.1.9

-  **MDVA-38346** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.5`)_-Fixes the issue where date filters are not working properly when the Magento timezone is different from the local environment timezone.
-  **MDVA-42657** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.5`)_-Fixes the issue where the admin user is unable to select categories in the customer segment conditions.
-  **MDVA-42806** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where a “New company registration” email is sent each time an existing company is updated via REST API.
-  **MDVA-37984** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.5`)_-Fixes the issue where visual merchandiser “Match product by rule” functionality does not correctly filter products with staging updates.
-  **MDVA-40488** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where configurable products with out-of-stock child products are not shown in their correct price range.
-  **MDVA-42507** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.5`)_-Fixes the issue where the full-page cache is cleaned after applying staging update for the cart rule.
-  **MDVA-39163** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <2.4.5`)_-Fixes the issue where shipping methods are not available when a new user is registered, and products in the cart are from the guest session.
-  **MDVA-38626** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <2.4.5`)_-Fixes the issue where the admin user is not able to place an order on the backend using the PayPal Payflow Pro payment.
-  **MDVA-38666** _(for Adobe Commerce and Magento Open Source `>=2.3.2 <2.3.6`)_-Fixes the issue where the admin user is not able to change the configurable product options in the customer’s cart.
-  **MDVA-38526** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.4`)_-Fixes the issue where the admin user is not able to access the SWAT tool.
-  Updated patches: MDVA-40101.

## v1.1.8

-  **MDVA-41215** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where users get the 500 error after setting the "mage-messages" cookie, if it already exists but there are no new messages.
-  **MDVA-41139** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <2.4.4`)_-Fixes the issue where configurable products become Out of Stock after product import, when a simple product's qty=0 for one of its sources.
-  **MDVA-42326** _(for Adobe Commerce and Magento Open Source `>=2.3.6 <=2.3.7-p2 || >=2.4.1 <2.4.4`)_-Fixes the issue where customers get an error on checkout after a session timeout even if persistent shopping cart is enabled.
-  **MDVA-42341** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where the “categoryList” GraphQL query does not filter results if a request has the Store header.
-  **MDVA-38393** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where Catalog rules stop working for a configurable product if its simple product is re-named.
-  **MDVA-39153** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where a discount amount is calculated incorrectly during reorder in the Admin.
-  Updated patches: MDVA-28993, MDVA-41061, MDVA-35984.

## v1.1.7

-  **MDVA-39711** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.3`)_-Fixes the issue where admin users cannot access the customers grid after deleting website.
-  **MDVA-40311** _(for Adobe Commerce and Magento Open Source `>=2.4.2-p2 <2.4.4`)_-Fixes the issue where admin users get the error message "Invalid security or form key. Please refresh the page" after login to the admin if custom admin path is configured and secret key is enabled.
-  **MDVA-41631** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.4`)_-Fixes the issue where users get an error when trying to retrieve order information without an optional "telephone" value through GraphQL.
-  **MDVA-27239** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.3.6`)_-Fixes the issue where cross-sell products are not displayed.
-  Updated patches: MDVA-37068, MDVA-35254, MDVA-41164, MDVA-37916, MDVA-37478, MDVA-34551, MDVA-31791.

## v1.1.6

-  **MDVA-40550** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <2.4.4`)_-Fixes the issue with missing products on the frontend during reindexing.
-  **MDVA-40120** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.4`)_-Fixes the issue where GraphQL sorting by DESC/ASC doesn't work with products having the same relevance or price.
-  **MDVA-41399** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <2.4.2`)_-Fixes the issue where admin users are unable to access the "Manage Shopping Cart" page if a customer adds a product to the wishlist.
-  **MDVA-40609** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3`)_-Fixes the issue where disabled products data is absent in the `cataloginventory_stock_status` index table, displaying incorrect disabled product quantities.
-  **MDVA-39031** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.4`)_-Fixes the issue where adding a product to the cart via GraphQL is possible even if it is not assigned to the target website.
-  **MDVA-41597** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where users get an error when adding more than one configurable product to the cart using GraphQL.
-  **MDVA-27456** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <2.3.7`)_-Fixes the issue where users get an error when trying to load Swagger.
-  **MDVA-32776** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.2`)_-Fixes the issue where stock status is not updated when an order is placed but not shipped.
-  **MDVA-30862** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <2.4.0`)_-Fixes the issue with incorrect order date on the printed PDF invoice.
-  Improved the [index page for the Quality Patch Tool]({{ site.baseurl }}/quality-patches/tool.html). Added convenient search and filtering for quality patches at the latest version of the tool.
-  Updated patches: MDVA-33382, MDVA-39482.

## v1.1.5

-  **MDVA-41236** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where it is impossible to create a new or edit an existing scheduled update for a product if the End Date has been previously removed.
-  **MDVA-41046** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where simple products with custom options are available for assigning to configurable/grouped products.
-  **MDVA-40545** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where only the first node for a page was retrieved even if there was more than one node for the same page.
-  **MDVA-41164** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3-p1`)_-Fixes the issue where an admin user is not able to save or edit a Company with a file or image type custom customer attribute.
-  **MDVA-39229** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue which causes the following error to appear after updating Catalog rule Staging Update start time: "Cron Job staging_synchronize_entities_period has an error: The active update can't be deleted."
-  **MDVA-40619** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where changes to CMS page hierarchy causes a 500 error when attempting to do inline editing on a CMS page.
-  **MDVA-41061** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3`)_-Fixes the issue where stock status resets to salable when a product is saved from Admin.
-  **MDVA-31763** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where catalog price rules are reverted (or not applied) until manual reindex.
-  **MDVA-37748** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3`)_-Fixes the issue where a GraphQL query returns products not assigned to a shared catalog.

## v1.1.4

-  **MDVA-40399** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where partial invoices for the same order can not be created simultaneously via REST API.
-  **MDVA-40101** _(for Adobe Commerce and Magento Open Source `>=2.3.2 <2.4.0`)_-Fixes the issue where items are not removed from the mini cart  after a successful order placement using PayPal Express Checkout.
-  **MDVA-40401** _(for Adobe Commerce and Magento Open Source `>=2.3.6 <=2.3.7-p2 || >=2.4.1 <2.4.4`)_-Fixes the issue where coupon usage value changes even if placing an order fails.
-  **MDVA-40537** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <=2.4.0-p1`)_-Fixes the issue where users get an error when creating a store view, if several CMS pages with the same URL key exist.
-  **MDVA-37725** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <=2.4.3-p1`)_-Fixes the issue where asynchronous order emails sent from non-default websites contain logo URLs from the default website.
-  **MDVA-39482** _(for Adobe Commerce and Magento Open Source `>=2.3.6 <=2.3.7-p2 || >=2.4.1 <2.4.4`)_-Fixes the issue where a product goes out of stock if imported with "0" quantity when backorders enabled.
-  **MDVA-40435** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <2.4.4`)_-Fixes the issue with an incorrect discount on bundle products with dynamic prices when applied via GraphQL.
-  **MC-42528** _(for Adobe Commerce and Magento Open Source `>=2.4.3 <=2.4.3-p1`)_-Fixes the issue where the `categoryList` GraphQL query returns both assigned and unassigned categories.
-  **MDVA-29400** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <=2.3.7-p1 || >=2.4.0 <=2.4.0-p1`)_-Fixes the issue with duplicated orders placed with PayPal Express Checkout.
-  **MDVA-26005** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <=2.3.5-p2`)_-Fixes the issue where it is impossible to select a category in a category tree for Cart Price rule conditions.
-  **MDVA-25631** _(for Adobe Commerce and Magento Open Source `>=2.3.3 <=2.3.5-p2`)_-Improves performance for editing and saving customer segments that contain large number of customers.

## v1.1.3

-  **MDVA-40262** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes the issue where GraphQL search queries are not shown in popular search terms in the admin.
-  **MDVA-40601** _(for Adobe Commerce and Magento Open Source `>=2.3.1 <=2.4.2-p2`)_-Fixes the issue where users get an error when trying to get information about category changed by scheduled update through GraphQL.
-  **MDVA-37234** _(for Adobe Commerce and Magento Open Source `>=2.3.5 <2.4.0 || >=2.4.1 <=2.4.2-p2`)_-Fixes the issue where adding an item to the cart multiple times (parallel request) for the same SKU creates a duplicate line item for the same cart ID.
-  **MDVA-33606** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <=2.4.2-p2`)_-Fixes the issue where users get a “Unique constraint violation” error when saving a CMS page assigned to a hierarchy.
-  **MDVA-31590** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <=2.4.1-p1`)_-Fixes the issue where users are not able to update attributes in bulk using MySQL async queues.
-  **MDVA-36309** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <=2.4.2-p2`)_-Fixes the issue where product search by attributes is slow in the admin grids.

## v1.1.2

-  **MDVA-38929** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <2.4.4`)_-Fixes the issue where the invoice with FPT shows a wrong Grand Total when the order is paid from the store credit.
-  **MDVA-37364** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <=2.4.3`)_-Fixes the issue where the custom customer attribute of date type breaks the customer's grid UI.
-  **MDVA-39195** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <=2.4.2-p2`)_-Fixes the issue where 'Add to Cart'  button was inactive on the category page when redirect to cart enabled.
-  **MDVA-37115** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <=2.4.2-p2`)_-Fixes the issue where an unnecessary "Only 0 left" notice is shown on the configurable product page.
-  **MDVA-39521** _(for Adobe Commerce and Magento Open Source `>=2.4.0 <2.4.4`)_-Fixes the issue where the user is not able to set shipping addresses on the cart with an empty telephone number via GraphQL.
-  **MDVA-39384** _(for Adobe Commerce and Magento Open Source `>=2.3.1 <=2.3.6 || >=2.4.1 <=2.4.3`)_-Fixes the issue where the custom customer attribute for a company user is not saved.
-  **MDVA-39043** _(for Adobe Commerce and Magento Open Source `>=2.3.4 <=2.4.3`)_-Fixes the issue where the admin user with limited access gets an error when trying to add the 'Products' widget to the CMS page.
-  **MDVA-39966** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <=2.3.5-p2 || >=2.4.0 <=2.4.0-p1`)_-Fixes the issue with deploying incorrect locales.
-  **MDVA-38852** _(for Adobe Commerce and Magento Open Source `>=2.3.0 <=2.3.5-p2`)_-Fixes the issue where the catalog inventory by design locks tables for updates that significantly decrease performance in cases with several parallel orders.
-  **MDVA-39986** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.3`)_-Fixes the issue where the user is not able to place an order in the Admin on MacOS using the Safari browser.
-  **MDVA-38447** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.4`)_-Fixes two issues: where the 'Not visible individually' configurable child products are returned in GraphQL response and optimize MySQL query for GraphQL products query with category filter.
-  **MDVA-40134** _(for Adobe Commerce and Magento Open Source `>=2.4.2 <2.4.3`)_-Fixes the issue where the GraphQL does not return related products when the Shared Catalog is enabled.
-  **MDVA-39935** _(for Adobe Commerce and Magento Open Source `>=2.4.1 <2.4.4`)_-Fixes the issue where the GraphQL returns configurable child products disabled at the website level.

## v1.1.1

-  **MDVA-36021** _(for {{site.data.var.ee}} and {{site.data.var.ce}} `>=2.4.0 <2.4.4`)_-Fixes the issue where the 'Call to a member function getId()' error is displayed on the order details page in the Admin.
-  **MDVA-34948** _(for {{site.data.var.ee}} and {{site.data.var.ce}} `>=2.3.6 <=2.3.6-p1 || >=2.4.0 <=2.4.0-p1`)_-Fixes the issue with long-running queries, like GET_LOCK.
-  **MDVA-39305** _(for {{site.data.var.ee}} and {{site.data.var.ce}} `>=2.4.0 <=2.4.2-p1`)_-Fixes the issue where registered customers are not able to log in with enabled Google ReCaptcha.
-  **MDVA-37897** _(for {{site.data.var.ee}} and {{site.data.var.ce}} `>=2.3.0 <2.4.4`)_-Fixes the issue with an incorrect redirect when a customer tries to add products with options from the Recently Viewed widget.

## v1.1.0

-  Patch categories were introduced in order to improve the user experience and make searching for required patches easier for customers.
-  The `patches.json` file has been renamed to `support-patches.json`.
-  **MDVA-38799** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue where downloadable products weren't saved after creating a staging update.
-  **MDVA-37592** _(for Magento `>=2.3.6 <=2.4.2-p1`)_-Fixes the issue when sorting by price doesn't work correctly for products with a zero price assigned to shared catalog.
-  **MDVA-38827** _(for Magento `>=2.3.3-p1 <2.4.4`)_-Fixes the issue where customers receive an order shipment email containing an error message.

## v1.0.26

-  **MDVA-38468** _(for Magento `>=2.3.2 <=2.3.5-p2`)_-Fixes the error when saving CMS pages - Item with the same ID 'PAGE_ID' already exists.
-  **MDVA-34680** _(for Magento `>=2.3.6 <=2.3.7 || >=2.4.1 <2.4.3`)_-Fixes the issue where Customer Account created time is not filtered correctly in customers grid.
-  **MDVA-37068** _(for Magento `>=2.3.1 <2.4.4`)_-Fixes the issue where the incorrect tax rate displays when the shopping cart has only virtual products.
-  **MDVA-38608** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue where temporary tables are not deleted when the reindex is not finished successfully.
-  **MDVA-38308** _(for Magento `>=2.3.5 <=2.3.6-p1 || >=2.4.0 <=2.4.1-p1 || >=2.4.2 <2.4.4`)_-Fixes the issues related to adding Vimeo videos to products.

## v1.0.25

-  **MDVA-37916** _(for Magento `>=2.3.6 <2.4.3`)_-Fixes the issue where the customer is not taken to the Payment Confirmation page when using Paypal Payment Advanced method.
-  **MDVA-37082** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue when saving the custom stock of grouped products causes the product to show out of stock in the frontend.
-  **MDVA-36572** _(for Magento `>=2.3.5 <2.4.3`)_-Fixes the issue when Credit Memo updates no longer cause duplicate product reservation updates in the database.
-  **MDVA-38132** _(for Magento `>=2.3.3 <2.4.3`)_-Fixes the issue when the Admin panel is unreachable due to a "too many redirects" error.
-  **MDVA-38270** _(for Magento `>=2.4.1 <2.4.3`)_-Fixes the issue with missing Gift card information in the order total in GraphQL.

## v1.0.24

-  **MDVA-37779** _(for Magento `>=2.4.2 <=2.4.4`)_-Fixes the issue with adding a configurable product to cart via GraphQL when website ID does not coincide with store ID.
-  **MDVA-36832** _(for Magento `>=2.3.4 <=2.4.2-p1`)_-Fixes the issue where images duplicate on pages when view width is 768px.
-  **MDVA-37874** _(for Magento `>=2.3.6 <=2.3.7 || >=2.4.1 <=2.4.2-p1`)_-Fixes the issue where 'Fixed discount amount for whole cart' is incorrectly applied to a bundle product containing more than one option.
-  **MDVA-37913** _(for Magento `>=2.3.0 <=2.4.0-p1`)_-Fixes the issue where downloadable links disappear if the downloadable product gets updated via API.
-  **MDVA-34330** _(for Magento `>=2.3.1 <=2.4.2-p1`)_-Fixes the issue where orders in the Orders grid are not filtered according to admin timezone.

## v1.0.23

-  **MDVA-37478** _(for Magento `>=2.3.0 <=2.3.7`)_-Fixes the issue where Magento throws an error when creating a partial invoice for orders placed with the "Payment on Account" payment method through REST API.
-  **MDVA-37362** _(for Magento `>=2.3.4 <=2.4.2-p1`)_-Fixes the issue where configurable product option values and variant attribute values were empty in GraphQL response.
-  **MDVA-37288** _(for Magento `2.4.2`)_-Fixes the issue where wrong tier prices were returned after GraphQL request.
-  **MDVA-37225** _(for Magento `>=2.4.1 <=2.4.2-p1`)_-Fixes the issue where the upload process is stuck during quick order creation when there is an integer value in imported SKUs.
-  **MDVA-37224** _(for Magento `>=2.3.3 <=2.4.2-p1`)_-Fixes the issue where customers cannot pay for negotiable quote with PayFlow Pro with another product in the cart.
-  **MDVA-36286** _(for Magento `>=2.3.6 <=2.4.2-p1`)_-Fixes the issue where Page Builder products widget preview breaks if the same SKU has a different position in subcategories.
-  **MDVA-30186** _(for Magento `>=2.3.4 <=2.3.5-p2, >=2.4.0 <=2.4.0-p1, >=2.4.2 <=2.4.2-p1`)_-Fixes the issue where attribute options are sorted by option value instead of attribute item count, in GraphQL response.

## v1.0.22

-  **MDVA-36718** _(for Magento `>=2.3.0 <=2.4.2`)_-Fixes the issue where the old custom options remain after being changed via API.
-  **MDVA-35773** _(for Magento `>=2.3.6 <=2.3.6-p1 || >=2.4.1 <=2.4.2`)_-Fixes the issue with the Grand Total not being shown as zero on the Invoice for orders with 100% discount.
-  **MDVA-36833** _(for Magento `2.4.2`)_-Fixes the issue with search results showing random numbers of products per page after excluding some products from shared catalog.
-  **MDVA-37182** _(for Magento `>=2.4.1 <=2.4.2`)_-Fixes the issue with getting incorrect search results in both Elasticsearch version 6 and version 7.
-  **MDVA-36253** _(for Magento `>=2.4.0 <=2.4.1-p1`)_-Fixes the issue where the wrong subtotal shows in the mini cart after item deletion.
-  **MDVA-36853** _(for Magento `2.4.2`)_-Fixes the issue with no images appear when loading large media galleries.

## v1.0.21

-  **MDVA-34665** _(for Magento `>=2.3.4 <=2.3.4-p2`)_-Fixes the issue with missing bundled products on category pages.
-  **MDVA-36615** _(for Magento `2.4.2`)_-Fixes the issue with incorrect product count in admin product grid.
-  **MDVA-36464** _(for Magento `>=2.4.0 <=2.4.2`)_-Fixes the issue where the email notification configuration is not working at store-view level.
-  **MDVA-36138** _(for Magento `^2.3.2`)_-Fixes the issue where the shipping price is not adjusted and full shipping price is shown to customers if not all items in the cart qualify for the free shipping cart rule.
-  **MDVA-36424** _(for Magento `>=2.3.0 <=2.3.3-p1 || >=2.0.0 <2.2.0`)_-Fixes the issue where media images, attached to page builder elements, disappear when the content is being edited repeatedly, if the backend base URL is different from the storefront base URL.
-  **MDVA-35984** _(for Magento `^2.4.0`)_-Fixes the issue with incorrect product quantity and sellable quantity, after creating multiple concurrent shipments for the same product.

## v1.0.20

-  **MDVA-36170** _(for Magento `>=2.3.4 <2.4.2`)_-This fixes the issue where the GraphQL query is not caching by using the category cache tag.
-  **MDVA-33168** _(for Magento `>=2.3.3 <2.4.2`)_-Fixes the issue when updating a product attribute via API all other attributes change to an empty value.
-  **MDVA-19640** _(for Magento `>=2.3.0`)_-Fixes the issue where Advanced Reporting is not showing any data.
-  **MDVA-11189**  _(for Magento `>=2.3.0 <2.3.5`)_-Fixes the issue when after importing a .csv file to update product stock, rows from the cataloginventory_stock table are deleted.
-  **MDVA-26639**  _(for Magento `>=2.3.3-p1 <2.3.6`)_-Fixes the issue where if a new order confirmation email template is created, the order items are missing in the order mail.
-  **MDVA-15546**  _(for Magento `>=2.3.0`)_-This fixes the issue where after creating an order a "Column 'entity_id' where clause is ambiguous" error displays in the exception log.
-  **MDVA-21095**  _(for Magento `>=2.3.0 <2.3.5`)_-Fixes the issue when a query INSERT INTO search_tmp will not end after mass attribute value update.
-  **MDVA-23845**  _(for Magento `>=2.3.2-p2 <2.3.5`)_-Fixes the issue where email templates cannot be previewed after JavaScript minification is enabled.
-  **MDVA-22026**  _(for Magento `>=2.3.2 <2.3.4`)_-Fixes the issue where importing products from .csv file including images from external URLs fails.
-  **MDVA-22383**  _(for Magento `>=2.3.0 <2.3.4`)_-Fixes the issue where saving a product takes a long time and the page breaks.
-  **MC-41359**  _(for Magento `>=2.3.6-p1 <2.3.7, >=2.4.2 <2.4.3`)_-Fixes the issue of the incorrect SameSite cookie parameters settings.

## v1.0.19

-  **MDVA-33614** _(for Magento `2.4.1`)_-Fixes the issue where Page Builder throws the following error: "An error has occurred while initiating Page Builder. Please consult with your technical support contact."
-  **MDVA-35356** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue with incorrect store credit return after partially invoiced order cancellation.
-  **MDVA-33289** _(for Magento `>=2.4.0 <2.4.3`)_-Fixes the issue where raw JavaScript code is displayed in the billing address UI during checkout if Google Tag Manager is enabled.
-  **MDVA-35982** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue where admin users restricted to a specific website cannot create a shipment for the order placed on same website.
-  **MDVA-35155** _(for Magento `>=2.3.0 <2.3.6`)_-Fixes the issue where it is impossible to buy a bundle product if the option title was changed.
-  **MDVA-35910** _(for Magento `>=2.4.1 <2.4.3`)_-Fixes the issue where it is impossible to create a new customer account after disabling the Login as Customer functionality.
-  **MDVA-34474** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue with adding a product to the requisition list using the API.
-  **MDVA-34591** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue with an incorrect cart rule discount calculation for "Maximum Qty Discount is Applied To" and "Discount Qty Step (Buy X)".
-  **MDVA-33704** _(for Magento `>=2.4.0 <2.4.3`)_-Fixes the issue where the "In store pickup" shipping option doesn't show up, though being configured to be available.
-  **MDVA-34928** _(for Magento `>=2.3.5 <2.3.5-p2`)_-Fixes the issue where the page loader is displayed indefinitely after the store credit is removed from the payment.
-  **MDVA-35254** _(for Magento `>=2.3.1 <2.4.3`)_-Fixes the issues with CAPTCHA during checkout.
-  **MDVA-35569** _(for Magento `>=2.3.4 <2.4.2`)_-Fixes the issue where the "fixed product taxes" field is not being populated in GraphQL response when state is specified.
-  **MDVA-35847** _(for Magento `>=2.4.1 <2.4.3`)_-Fixes the B2B issue where the Company Users form breaks if a custom customer attribute is used.
-  **MDVA-31307** _(for Magento `>=2.4.0 <2.4.2`)_-Fixes the issue where there are Out of memory errors on certain categories due to problems with dynamic CSP whitelisting for cached blocks.

## v1.0.18

-  **MDVA-32655** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the incorrect 'in progress' message status to the correct 'complete' message for consumer 'quoteItemCleaner' after deleting several products.
-  **MDVA-34102** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the quantity of Default Stock is zero for disabled products on the Product Grid and Edit Product pages in the Admin area.
-  **MDVA-35286** _(for Magento `>=2.4.0 <2.4.2`)_-Fixes the issue where there is an error if a customer has bundled products in the cart and switches from Multiple Addresses checkout to Onepage checkout.
-  **MDVA-35312** _(for Magento `>=2.4.1-p1 <2.4.2`)_-Fixes response code 500 when an empty GraphQL request.
-  **MDVA-34189** _(for Magento `>=2.3.4 <2.4.3`)_-Fixes 503 first byte timeout on visual merchandiser queries when loading the Admin Category page.
-  **MDVA-34695** _(for Magento `>=2.3.0 <2.4.1`)_-Fixes negative children_count after deleting categories.

## v1.0.17

-  **MDVA-34012** _(for Magento `>=2.3.1 <2.4.3`)_-Fixes the issue where the "Use default value" checkbox gets cleared, after the scheduled changes are applied. The issue appears once the scheduled changes are no longer in effect.
-  **MDVA-35064** _(for Magento `>=2.3.3 <2.4.3`)_-Fixes the issue where URL rewrites are not generated for configurable products created via API.
-  **MDVA-34943** _(for Magento `>=2.3.0 <2.4.2`)_-Fixes the issue where quick order caches the previously entered SKUs.
-  **MDVA-35197** _(for Magento `>=2.3.5 <2.4.0`)_-Fixes the issue where there's an error when adding to cart using GraphQL, if previously added products become out of stock.
-  **MDVA-34850** _(for Magento `>=2.3.1 <2.4.0`)_-Fixes the issue where the out-of-stock options of a configurable product are not displayed, instead of being displayed as struck-through.
-  **MDVA-34867** _(for Magento `>=2.3.0 <2.4.3`)_-Fixes the issue where values for a condition field set for a scheduled update are not being saved.
-  **MDVA-35092** _(for Magento `>=2.3.5 <2.4.3`)_-Fixes the issue where users are not able to add Vimeo videos due to deprecated Vimeo API

## v1.0.16

-  **MDVA-33453** _(for Magento `>=2.3.6 <2.4.3`)_—Fixes the issue where Page Builder Products content type preview breaks if matching products have different prices for each website.
-  **MDVA-32634** _(for Magento `^2.3.1`)_—Fixes the issue when url_path of the category assigned to all store remains unchanged after moving the category in the hierarchy.
-  **MDVA-33344** _(for Magento `^2.3.0`)_—Fixes the issue where hard coded rma_item entity default attribute set ID is used instead of the value from the database.
-  **MDVA-34192** _(for Magento `>=2.3.4 <2.4.3`)_—Fixes the issue where it is impossible to modify/specify customer date of birth using dd/mm/yyyy format.
-  **MDVA-34847** _(for Magento `^2.3.0`)_—Fixes store IDs type conversion to integer for SQL condition in Admin collections for Admin User with custom permissions.
-  **MDVA-34886** _(for Magento `^2.3.2`)_—Fixes the issue where search does not return results if 'weight' product attribute is configured as searchable.

## v1.0.15

-  **MDVA-33559** _(for Magento `>=2.3.0 <2.4.3`)_—Fixes the issue of PayPal Payflow Pro payment failing with redirect parameter list format error.
-  **MDVA-34023** _(for Magento `>=2.3.0 <2.4.3`)_—Fixes the issue where the error "No such entity with addressId" displays randomly on visitors' browsers.
-  **MDVA-32759** _(for Magento `>=2.3.1 <2.4.3` with B2B extension)_—Fixes the issue where Shared Catalogs are deleting existing tier pricing.
-  **MDVA-33482** _(for Magento `^2.3.5`)_—Fixes the issue where generating a Credit Memo against a partial invoice results in tax for the total order instead of tax for that partial invoice.
-  **MDVA-33393** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the error "Provided countryId does not exist".
-  **MDVA-33632** _(for Magento `>=2.3.0 <2.3.7`)_—Provides a fix where the exception message "This product is out of stock" is now displayed to admin user when trying to re-order an out of stock product.
-  **MDVA-34469** _(for Magento `>=2.4.1 <2.4.2`)_—Fixes the issue where GraphQL mutations on a customer's cart fail when using multiple store views.
-  **MDVA-33976** _(for Magento `>=2.3.0 <2.3.7`)_—Fixes the issue where the bundle product is shown Out Of Stock on the storefront after removing the second option from the bundle product.
-  **MDVA-33894** _(for Magento `>=2.4.0 <2.4.1` with B2B extension)_—Fixes multiple issues for Quick Order functionality including adding and removing multiple products and SKU case sensitivity.
-  **MDVA-27664** _(for Magento `>=2.3.4 <2.3.6`)_—Fixes the issue in the customer registration form causing an error to display: "ERROR - The Date of Birth should not be greater than today".
-  **MDVA-33970** _(for Magento `>=2.3.4 <2.4.2`)_—Fixes the issue where there is the wrong currency sign in the Credit Memo when the price attribute's scope is set to website.
-  **MDVA-33992** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue of B2B special pricing displaying incorrectly during checkout.
-  **MDVA-34100** _(for Magento `>=2.3.4 <2.4.2` with B2B extension)_—Fixes the issue where a company account cannot be created from the company structure page.

## v1.0.14

-  **MDVA-31969** _(for Magento `>=2.3.3 <2.3.5, >=2.4.0 <2.4.2`)_—Fixes the issue with duplicated images after product import from a .csv file.
-  **MDVA-33382** _(for Magento `>=2.3.0 <2.4.2`)_-Fixes the issues with indexers invalidation after products removal from a category.
-  **MDVA-28511** _(for Magento `>=2.3.5 <2.3.6`)_-Fixes the issue where it is not possible to complete PayPal checkout, if the Name field contains certain characters (like accented capital letters).
-  **MDVA-31519** _(for Magento `>=2.3.5 <2.3.6`)_-Fixes the issue with wait timeouts in guest checkout when a site-wide sales rule is in use.
-  **MDVA-33281** _(for Magento `>=2.3.4 <2.3.6`)_-Fixes the issue where there is a fatal error in 'inventory:reservation:list-inconsistencies' because of wrong SKU parameter type.
-  **MDVA-24201** _(for Magento `>=2.3.0 <2.3.5`)_-Fixes the issue where prices do not reflect the scheduled cart price rule until manually re-indexed.
-  **MDVA-32694** _(for Magento `>=2.3.0 <2.3.6 || >= 2.4.0 <2.4.2`)_-Fixes the issue where an admin user cannot add a product to a negotiable quote, if it is related to a not default store.
-  **MDVA-33516** _(for Magento `>=2.3.0 <2.3.6`)_-Fixes the issue where editing a bundle product in a requisition list leads to an error.
-  **MDVA-33975** _(for Magento `>=2.3.4 <2.4.2`)_—Fixes multiple issues related to price calculation in GraphQL requests.

## v1.0.13

-  **MDVA-30858** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue with PayPal Settlement reports not being available under Reports > Sales > PayPal Settlement as expected.
-  **MCP-87** _(for Magento `>=2.3.1 <2.4.2`)_—Improved indexation time for category product and stock indexers for large profiles.
-  **MDVA-33106** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the rescheduled product changes are erased after the cron 'run' command is executed.
-  **MDVA-19391** _(for Magento `>=2.3.0 <2.3.5`)_—Fixes the issue where analytics_collect_data is throwing an error due to NULL description records in the catalog_category_entity_text table.
-  **MDVA-20376** _(for Magento `>=2.3.2 <2.3.4`)_—Fixes the issue with the 'No such entity with customerId = 1' error in the exception.log for logged in customers after order placement.
-  **MDVA-23764** _(for Magento `>=2.3.2 <2.3.5`)_—Fixes the bug in JsFooterPlugin.php that affects the display of dynamic blocks.
-  **MDVA-13203** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the 'Integrity constrain violation search_tmp_* table' error appears after a full reindex.
-  **MDVA-23426** _(for Magento `>=2.3.3 <2.3.5`)_—Fixes the issue where notification emails sent by Magento contain a blank body with content being added as attachment.
-  **MDVA-22150** _(for Magento `>=2.3.1 <2.3.4`)_—Fixes the issue where customers with a configurable product in cart and a coupon applied, cannot login if that configurable product is disabled in Admin.
-  **MDVA-32545** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where invoices are not sent out automatically when creating orders from Admin.
-  **MDVA-32714** _(for Magento `>=2.3.4 <2.4.1`)_—Fixes the issue where customer group price is not working in GraphQL product query.

## v1.0.12

-  **MDVA-31399** _(for Magento `>=2.3.2 <2.4.2`)_—Adds the "Subtotal (Incl. Tax)" option to price rule conditions.
-  **MDVA-31236** _(for Magento `>=2.4.0 <2.4.2`)_—Fixes the issue where Admins with custom resource access are not able to set up 2FA or log in.
-  **MDVA-30845** _(for Magento `>=2.3.5 <2.3.7`)_—Fixes the issue where the "Sorry, no quotes are available for this order at this time" error is displayed when failing to connect to UPS XML/USPS/DHL, and no other shipping method is available.
-  **MDVA-32133** _(for Magento `>=2.4.0 <2.4.1`)_—Fixes the issue where media gallery is not loading from Page Builder in certain cases.
-  **MDVA-12304** _(for Magento `>=2.3.0 <2.4.2`)_—Increases the maximum number of cookies from 50 to 200.
-  **MDVA-32632** _(for Magento `>=2.3.2 <2.3.5`)_—Fixes the issue where orders appear in the payment system, but not in Magento.
-  **MDVA-32449** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0 || >=2.4.1 <2.4.2` with B2B extension)_—Fixes the issue where the order history loads very slowly or does not load at all.
-  **MDVA-32739** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where enabling Asynchronous Email Notifications sends out old sales emails.

## v1.0.11

-  **MC-38509** _(for Magento `2.3.6, 2.4.1`)_—Fixes the issue where the "Create an Account" button stays disabled after correcting invalid data in the "Create New Customer Account" form.
-  **MDVA-31006** _(for Magento `2.3.0, 2.3.1`)_—Fixes the issue where duplicated orders appear after placing an order using Paypal Express payment.
-  **MDVA-25602** _(for Magento `2.3.0`)_—Fixes issue with PayPal Payflow Pro payment method and treating cookies as SameSite=Lax by default in the Chrome 80 browser and API response redirect to customer login page.

## v1.0.10

Minor fixes for patch versions

## v1.0.9

-  **MDVA-31363** _(for Magento `>=2.3.2 <2.4.2`)_—Fixes the issue where the Cart Price Rule with coupon does not apply via GraphQL when 'Fixed amount discount for whole cart' action is used.
-  **MDVA-30889** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where an error occurs after invoicing a bundle with virtual and simple products as options.
-  **MDVA-31791** _(for Magento `>=2.3.4 <2.3.5`)_—Improves the performance of the product page in cases when target rules or linked products are used.
-  **MDVA-31168** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the product export CSV file does not appear, and there is a memory allocation error.
-  **MDVA-32313** _(for Magento `>=2.3.0 <2.3.4`)_—Fixes the issue where configurable products could be added to the wishlist with the wrong configuration options.
-  **MDVA-31759** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where products are not updated with `dropdown` and `textarea` attribute values during CSV import.
-  **MDVA-32012** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where zip codes in Korea and Argentina cannot be validated.
-  **MDVA-31640** _(for Magento `>=2.3.1 <2.3.6 || >=2.4.0 <2.4.1`)_—Fixes the issue where a special price cannot be updated via REST API.
-  **MDVA-28651** _(for Magento `>=2.3.0 <2.3.6 || >2.4.0` with B2B extension)_—Fixes the issue where there are performance problems with loading negotiable quotes via REST API.

## v1.0.8

-  **MDVA-31242** _(for Magento `>=2.3.0 <2.4.1` with B2B extension)_—Fixes the issue where a wrong currency sign is displayed in Credit Memo grid.
-  **MDVA-31295** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where reward points are not calculated when a partial order is completed and items are taxed.
-  **MDVA-30112** _(for Magento `>=2.3.4 <2.4.2`)_—Fixes the issue where if the number of orders exceeds the "bunch-size" value, Magento considers the orders with "pending" status as inconsistencies.
-  **MDVA-31150** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where the store credit and gift card balances are not returned by the GET Invoice Rest API call, when the invoice was posted by Rest API call and the order was partially paid by store credit and gift card accounts.
-  **MDVA-30963** _(for Magento `>=2.3.2 <2.4.2`)_—Fixes the issue where products filtering results set to only contain values specified for "All store views" scope in Admin, include products with values overridden on the store view level.
-  **MDVA-29954** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0 || 2.4.2` with B2B extension)_—Fixes the issue where the "New Company Registration Request" and "You've been linked to a company" emails are sent from the wrong address.
-  **MDVA-28357** _(for Magento `>=2.3.2 <2.3.6 || >=2.4.0 <2.4.1`)_—Replaces the standard analyzer with a custom analyzer with keyword tokenizer for the SKU field in the ElasticSearch index, to make wildcard search queries work with SKUs containing a hyphen ("-").

## v1.0.7

-  **MDVA-30972** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where custom order status was changed to Processing after partial shipment creation using WebApi.
-  **MDVA-30428** _(for Magento `>=2.3.4 <2.3.5`)_—Fixes the issue where customers cannot add a product to wishlist if this product is assigned to a custom inventory source.
-  **MDVA-30594** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where an order with multiple addresses could not be saved during checkout when FPT is configured.
-  **MDVA-29148** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue when creating a product via an API call, the product custom attribute of "\Magento\Eav\Model\Entity\Attribute\Backend\ArrayBackend" (like Multiselect) type does not use its default value if no value was provided in the payload.
-  **MDVA-30837** _(for Magento `>=2.3.1 <2.3.5`)_—Added a configuration setting "Include Tax to Amount": Yes/No in Free Shipping method configuration. When "Include Tax to Amount" is set to Yes Minimum Order Amount is calculated as = Subtotal + Tax. When "Include Tax to Amount" is set to No Minimum Order Amount is calculated as = Subtotal
-  **MDVA-25028** _(for Magento `>=2.3.2 <2.3.3 || >=2.3.5 <2.3.6`)_—Fixes the issue when orders that are placed using PayPal Payflow Pro are not set to Suspected Fraud status when fraud filters are triggered.
-  **MDVA-31224** _(for Magento `>=2.3.3 <2.3.5`)_—Improves the performance of the catalog_product_price re-index operation for bundle products.
-  **MDVA-31321** _(for Magento `>=2.3.2 <2.3.5`)_—Fixes a blank page (error) when "Show All" is selected. Elasticsearch returns large list of product ids. In this scenario the order by clause gets converted to an incorrect SQL format.
-  **MDVA-30815** _(for Magento `>=2.3.2 <2.3.4`)_—Fixes the issue where when you changed how many search results should be displayed on the search results page, Magento displayed a blank page. Elasticsearch now correctly displays results from category pages when you change the number of search results viewed per page.
-  **MDVA-30782** _(for Magento `>=2.3.5 <2.4.2`)_—Fixes the issue where Dynamic Block is displayed regardless of cart rule.
-  **MDVA-31021** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where performance issues exists in module-catalog-import-export/Model/Import/Product/Option.php. If there are more than ~100k records in catalog_product_option table, a new CSV with single product takes less than 10 sec to validate.
-  **MDVA-31007** _(for Magento `>=2.4.0 <2.4.1`)_—Fixes the issue where custom address attributes are not correctly displayed in the order details page in the my account area and in the backend.
-  **MDVA-29389** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue with Advanced Reporting where the analytics_collect_data cronjob says: "Port must be configured within host parameter (like localhost:3306)".
-  **MDVA-31343** _(for Magento `>=2.3.4 <2.3.6`)_—Fixes the issue with the removed body class "page-layout-category-full-width" when a category is scheduled.
-  **MDVA-30945** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where you receive a fatal error message when updating carts "Call to a member function getValue() on null in module-configurable-product CartItemProcessor.php".

## v1.0.6

-  **MDVA-28993** _(for Magento `>=2.3.4 <2.4.0`)_—Implements the "Minimum should match" functionality and partial search for Elasticsearch engine. Solves issues with hyphens in search queries.
-  **MDVA-30102** _(for Magento `>=2.3.2 <=2.4.0`)_—Fixes the issue where Redis cache grows up quickly since layout caches don't have TTL.
-  **MDVA-30599** _(for Magento `>=2.3.4 <=2.4.0`)_—Fixes the issue where guest quotes created using API are incorrectly marked as quotes for logged in customers.
-  **MDVA-29446** _(for Magento `>=2.3.3 <=2.4.0`)_—Fixes the issue where the price of not applicable shipping method is shown as zero during checkout.
-  **MDVA-30357** _(for Magento `>=2.3.2 <=2.4.0`)_—Fixes the issue with wrong image URLs are created when generating a sitemap by cron.
-  **MDVA-30565** _(for Magento `>=2.3.2 <=2.3.3-p1`)_—Fixes the issue where "No such entity with cartid = 0" error is displayed for guest customer on storefront checkout if persistent shopping cart is enabled.
-  **MDVA-29787** _(for Magento `>=2.3.0 <=2.4.0`)_—Fixes the issue where target rule for related products does not work when 'is one of' condition is used to define products to be displayed.
-  **MDVA-30977** _(for Magento `>=2.3.4 <=2.3.5-p2`)_—Fixes the issue with random products missing from categories after reindex.
-  **MDVA-28202** _(for Magento `>=2.3.4 <=2.4.2`)_—Fixes the issue where Layered Navigation doesn't filter configurable products correctly when MSI is used.
-  **MDVA-28300** _(for Magento `>=2.3.0 <2.3.6`)_—Fixes the issue where GQL request doesn't reflect the price changes from catalog price rules.
-  **MDVA-31006** _(for Magento `>=2.3.2 <=2.4.2`)_—Fixes the issue where duplicated orders appear after placing an order using Paypal Express payment.

## v1.0.5

-  **MDVA-30841** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue with layered navigation, where the 'No' value for boolean type product attributes was not included in layered navigation if Elasticsearch was used as a search engine.
-  **MDVA-28191** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where no payment methods are loaded during order creation via Admin.
-  **MDVA-29959** _(for Magento `>=2.3.0 <=2.3.3-p1` with B2B extension)_—Fixes the issue where restricted admin user with 'Companies' permissions is not allowed to delete company account.
-  **MDVA-30265** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where shipment tracking link stops working after Invoice creation.
-  **MDVA-28409** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue where the "sales_clean_quotes" cron job fails with out-of-memory error when the number of expired quotes in the database is huge.
-  **MDVA-30593** _(for Magento `>=2.3.0 <2.3.4`)_—Fixes the issue where quotes, that expired according to the Quote Lifetime setting, are not cleaned up.
-  **MDVA-30107** _(for Magento `>=2.3.0 <2.3.6`)_—Fixes the issue where store switcher doesn't work as expected if different base URLs are used for store views.
-  **MDVA-28763** _(for Magento `>=2.3.2 <2.3.4`)_—Fixes the issue where product image is getting duplicated after updating product information using REST API more than once.
-  **MDVA-30284** _(for Magento `>=2.3.0 <2.4.2`)_—Fixes the issue where Catalog Search indexer fails due to the following Elasticsearch error: limit of total fields in index has been exceeded.
-  **MDVA-29042** _(for Magento `>=2.3.3 <=2.3.4-p2` with B2B extension)_—Fixes the issue where Catalog permissions were changed to Allow automatically after new product was added to the shared catalog.
-  **MDVA-30428** _(for Magento `>=2.3.3 <2.4.2`)_—Fixes the issue where customers cannot add a product to wishlist if this product is assigned to a custom inventory source.
-  **MDVA-28661** _(for Magento `>=2.3.0 <2.4.2` with B2B extension)_—Fixes the issue where an error is thrown in the Company Users company account section after company admin is changed.

## v1.0.4

-  **MDVA-30195** _(for Magento `2.3.1 - 2.3.4-p2`)_—Fixes the issue where cron jobs fail if database name is too long, resulting in categories not being updated on the frontend.
-  **MDVA-30106** _(for Magento `^2.3.0`)_-Fixes an issue where during checkout payments are not loaded with “Cannot read property ‘length’ of null ” error in JS console.
-  **MDVA-28656** _(for Magento `>=2.3.1 <2.3.6 || >=2.4.0 <2.4.2`)_-Fixes the issue where if an order was placed with no payment information required (for example, with 100% discount) and an invoice was created for the order, the order status changes to Closed instead of Complete.
-  **MDVA-30209** _(for Magento `2.3.0 - 2.3.3-p1`)_-Fixes the issue where the customer group was changed to default if customer updated their account information.
-  **MDVA-30123** _(for Magento `>=2.3.4 <2.4.2`)_-Fixes the issue where attribute option labels are not translated correctly for GraphQL queries.
-  **MDVA-29996** _(for Magento `>=2.3.3 <2.4.2`)_-Fixes the issue where after enabling category permission, the category page is not getting cached by Full Page Cache.
-  **MDVA-30164** _(for Magento `>=2.3.1 <2.4.2`)_-Fixes the issue where customers records cannot be exported from the Customers grid, if custom customer attributes exist.
-  **MDVA-30444** _(for Magento `>=2.3.0 <2.4.1`)_-Fixes the issue where no confirmation email is sent for orders placed using GraphQL.
-  **MDVA-30490** _(for Magento `2.3.4 - 2.3.5-p2`)_-Fixes the issue where products comparison throws the 500 error page, if one of the products has an empty short description.
-  **MDVA-30232** _(for Magento `>=2.3.1 <2.4.1`)_-Fixes the issue where it is not possible to re-order if the original order contains a gift card.
-  **MDVA-29965** _(for Magento `>=2.3.3 <2.4.0`)_-Fixes the issue where customers get Invalid Form Key error when adding a product to the cart.
-  **MDVA-30008** _(for Magento `>=2.3.0 <2.4.2`)_-Fixes the B2B issue where it is not possible to place orders through Admin API for a product which is in a public catalog.
-  **MDVA-22469** _(for Magento `2.3.2-p2 - 2.3.3-p1`)_-Fixes the issue where after upgrading to Magento 2.3.3, Page Builder is not working in the Admin panel and some JS and CSS files are not loading.
-  **MC-35984** _(for Magento `>=2.4.0 <2.4.1`)_-Fixes the issue where merchants could not interact with any page elements on the Returns page after creating a shipping label for a Return Merchandise Authorization (RMA).

## v1.0.3

-  **MDVA-25602** _(for Magento `2.3.0 - 2.3.4`)_—Fixes the issue with PayPal Payflow Pro payment method and treating cookies as SameSite=Lax by default in the Chrome 80 browser and API response redirect to customer login page.
-  **MDVA-26694** _(for Magento `>=2.3.0 <2.3.6 || 2.4.0`)_—Fixes the issue with product and catalog caches expiring daily, though being scheduled to expire differently.
-  **MDVA-27825** _(for Magento `>=2.3.0 <2.4.1`)_—Fixes the issue where exporting of big amounts of data failed because of memory leak.
-  **MDVA-29085** _(for Magento `>=2.3.0 <=2.3.5-p1`)_—Fixes the B2B issue where no required new company emails are sent out if a company is created by API.
-  **MDVA-29344** _(for Magento `>=2.3.5 <=2.4.0-p1`)_—Fixes the issue where Page Builder gets stuck after copying text from a header element to a text element.
-  **MDVA-29835** _(for Magento `>2.3.1 <2.4.2`)_—Fixes the issue where gift card orders contained two codes instead one.
-  **MDVA-30052** _(for Magento `>=2.3.2-p2 <2.3.5`)_—Fixes the issue with private content (local storage) not being populated correctly, which resulted in performance problems.
-  **MDVA-30131** _(for Magento `>=2.3.4 <2.3.6 || 2.4.0`)_—Fixes the issue with layered navigation, where the `No` value for boolean type product attributes was not included in layered navigation if Elasticsearch was used as a search engine.
-  **MDVA-35514** _(for Magento `>=2.4.0 <2.4.1`)_—Fixes the issue with creating a shipping label and adding ordered products to a package in the Create Packages modal window.
