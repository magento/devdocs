---
group: release-notes
title: B2B Release Notes
---

## B2B

The release notes for the B2B extension captures additions and bug fixes that Magento has added during a release cycle.

### Magento 2.3.6 -- Magento B2B

<!--- MC-32757-->

*  An SQL error no longer occurs when a merchant assigns a category to a shared catalog in a deployment where B2B is installed. Previously, Magento threw this exception: `SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'THEN -2 END), IF(grant_catalog_category_view = 0, NULL, grant_catalog_category_v' at line 1`

<!--- MC-35078-->

*  Magento no longer displays a 404 page when a merchant uses the **Enter** button instead of clicking the **Save** button when creating a requisition list on the storefront.

<!--- MC-35011-->

*  When you create or update a B2B Company using the REST API (`http://magento.local/rest/V1/company/2`, where `2` represents the company ID), the response now includes the settings for `applicable_payment_method` or `available_payment_methods` as expected.

<!--- MC-34571-->

*  Magento now sends an email notification confirming that a customer has permission to exceed the designated credit limit when a merchant enables the **Allow To Exceed Credit Limit** setting. Previously, the notification email sent by Magento indicated that the customer did not have permission to exceed the limit.

<!--- MC-33293-->

*  Magento now provides an `addToCart` DataLayer event for Quick Order and Requisition lists pages.

<!--- MC-32872-->

*  Requisition lists now include all grouped products and quantities that have been added to the list. Previously, when a merchant navigated to a requisition list after adding products to it from a product detail page, Magento displayed this error: `1 product(s) require your attention - Options were updated. Please review available configurations`. [GitHub-59](https://github.com/magento/partners-magento2b2b/issues/59)

### Magento 2.3.5 -- Magento B2B

<!--- MC-30049-->

*  Administrators can now create a Shared Catalog when Indexer Dimension Mode is set to `website`. Previously, Magento displayed this error: `Could not save shared catalog`.

<!--- MC-30280-->

*  You can now search Companies in the Admin by user gender or phone number without error. Previously, Magento logged an exception in `exception.log` for the search on the phone number search, and the search on `Gender=Not Specified` did not produce results.

<!--- MC-18048-->

*  You can now successfully configure a downloadable product’s link options from the Admin View Quote page. Previously, you could only update these options if the first downloadable link was selected.

<!--- MC-29594-->

*  You can now use the `PUT /V1/company/:companyId` endpoint to activate a Company. Previously, Magento threw this error: `message: "Invalid attribute value. Rejected date&time and Rejected Reason can be changed only when a company status is changed to Rejected.`

<!--- MC-29915-->

*  Administrators with appropriate permissions can now successfully place a quote order when paying with PayPal. Previously, Magento displayed an informative error message and did not process payment.

<!--- MC-22856-->

*  When a bundle product is disabled and then re-enabled from the Admin Product grid after being added to the shopping cart, Magento now displays the **Checkout** button in the cart as expected. Previously, when a bundle product was disabled and then re-enabled from the Admin Product grid after being added to the cart, Magento displayed an error, and the cart did not display a **Checkout** button. [GitHub-25484](https://github.com/magento/magento2/issues/25484)

<!--- MC-22684-->

*  When you reassign Company administrator privileges from one user to another, Magento assigns the correct address to the administrator. Previously, when the company administrator was changed, Magento incorrectly associated the address of the former administrator to the current one.

<!--- MC-22948-->

*  The correct Company logo is now used in transactional emails for each website.

<!--- MC-29984-->

*  An administrator with appropriate permissions in a multisite deployment can now create a company for a website other than the one the administrator is currently logged in to.

<!--- MC-30113-->

*  Shared catalogs in multi-site deployments are now correctly associated with `group_id` rather than `store_id` and can be successfully saved from any store view that is associated with the `group_id`. Previously, when an administrator opened the shared catalog from a store view other than the store view from which the shared catalog was created,  Magento did not save the shared catalog and displayed this error: `The store that was requested wasn't found. Verify the store and try again`.

<!--- MC-29050-->

*  Clicking **Enter** when changing a proposed shipping price from  **Admin** > **Sales**  > **Quotes** no longer causes the page to refresh without an update.

<!--- MC-29870-->

*  Products can be added to cart from Quick Order after a user’s Customer Group is updated. Previously, customers whose customer group had been updated could not add a product to the cart, and Magento displayed this error: `The SKU was not found in the catalog`.

<!--- MC-22875-->

*  Clicking **Enter** when changing a proposed shipping price now changes the price as expected. Previously, clicking **Enter** refreshed the page, and you needed to fetch the relevant rates again.

<!--- MC-30256-->

*  Shared catalog customers can now order unassigned or assigned items from the Admin as expected. Previously, merchants could not order products that were not assigned to the catalog.

<!--- MC-22842-->

*  Merchants can now use a custom attribute named `company` when creating a new Company account. Previously, Magento displayed a 500 error when you named a custom attribute `company`.

<!--- MC-21010-->

*  You can now use the `/V1/guest-carts/:cartId/items` endpoint to change the quantity of products in the cart when the **Allowed Qty Below 0** and **Notify Customer** setting are enabled for the product.

<!--- MC-30287-->

*  Magento now correctly displays products with special characters in Shared Catalogs in the Admin.

<!--- MC-30412 -->

*  Administrators with appropriate permissions can now add a configurable product to an order as expected. Previously, although Magento displayed the Configure Product popup window when an administrator selected a configurable product, the pop up’s drop-down list did not contain a **Quantity** input field.

<!--- MC-17862 -->

*  Magento no longer throws an error when you flush the cache (`bin/magento cache:flush`) on the storefront product page for a product was been created through the API.

<!--- MC-22741 -->

*  Magento no longer mistakenly displays asterisks on every custom form option. Previously, for example, asterisks were added to each select option, rather than just the main select field.

<!--- MC-29050 -->

*  Magento no longer refreshes the page when changing a proposed shipping price with the Enter key. Previously, when using the Enter key to change a proposed shipping price, the entire page would refresh, wiping out the price change.

<!--- MC-29870 -->

*  You can now add a product to a Quick Order after being switched to another user role. Previously, an error would occur when upoading the CSV file after the users role was changed.

<!-- MC-30049 -->

*  Magento can now create a Shared Catalog after running `indexer:set-dimensions-mode`. Previously, Magento would throw an error when making a Shared Catalog after running the command.

<!-- MC-30280 MC-30256 -->

*  Fixed 2 SQL errors: 1. Fixed an error when filtering by phone number when the company has no set gender. 2) Fixed an error where products not in a catalog could not be added to an admin order.

<!-- MC-22684 -->

*  Magento correctly handles the company address when changing company admins. Previously, the company address was improperly changed when changing the company admin.

<!-- MC-29594 -->

*  You can now set a company to 'active' via the REST API. Previously, Magento would throw an error.

<!-- MC-29659 -->

*  Magento properly returns a 404 when requesting UI render URLS. Previously, Magento would redirect to the admin authorization form.

<!-- MC-30113 -->

*  Fixed an improper database relationship between stores and Shared Catalogs that prevents the Shared Catalog from being saved to a store with no store view.

<!-- B2B-265 -->

*  Magento now aggregrates attributes between Shared Catalogs for Elasticsearch. Previously, Magento did not gather attributes spread through Shared Catalogs.
