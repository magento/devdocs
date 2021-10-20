---
group: release-notes
title: Adobe Commerce 2.4.4 Release Notes
---

{{ site.data.var.ee }} 2.4.4 introduces support for PHP 8.1. Core Composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ee }} 2.4.4 contains  backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## {{ site.data.var.ee }} Beta program

The {{ site.data.var.ee }} 2.4.4 [Beta program](https://github.com/magento/magento2/wiki/Magento-Beta-Program) includes four monthly Beta releases that merchants can use to prepare their deployments for upgrade to {{ site.data.var.ee }} 2.4.4. We are launching this program five months before {{ site.data.var.ee }} 2.4.4 General Availability (GA). The top three partners and individual contributors will receive special mention in these release notes, Beta blog posts, and in other communications. See the [Breaking News: 2.4.4 beta releases are coming soon](https://community.magento.com/t5/Magento-DevBlog/BREAKING-NEWS-2-4-4-beta-releases-are-coming-soon/ba-p/484310) Magento DevBlog post.

## {{ site.data.var.ee }} 2.4.4-beta1

{{ site.data.var.ee }} 2.4.4-beta1 has been tested against the following component versions:

*  Elasticsearch 7.9
*  MariaDB 10.4.14
*  MySQL 8.0.22
*  PHP 7.4
*  Redis 6.0.12
*  Varnish 6.5.1

{:.bs-callout-info}
All vendor-bundled extensions, with the exception of Braintree, have been removed from {{ site.data.var.ee }} 2.4.4 starting with this release (2.4.4-beta1).

## Other release information

Although code for these features is bundled with releases {{ site.data.var.ee }} and {{ site.data.var.ce }} releases, several of these projects (for example, Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release.

### Platform enhancements

{{ site.data.var.ee }} 2.4.4-beta1 includes the following platform upgrades:

*  Adobe Composer dependencies have been upgraded to the latest versions that are compatible with PHP 8.0.x. <!--- AC-35-->

*  The `RequireJS` library has been upgraded to the latest version (v2.3.6). [GitHub-33672](https://github.com/magento/magento2/issues/33672) <!--- AC-40 422-->

*  PHPUnit has been upgraded to the latest version (9.5.x ). Tests and test frameworks have been updated to be compatible with the new version. <!--- AC-404-->

*  TinyMCE 5 is now supported. <!--- AC-41-->

*  The following libraries have been upgraded to more recent versions:

   *  `script.aculo.us` <!--- AC-363-->
   *  `Chart.js`  <!--- AC-361-->
   *  `moment.js` <!--- AC-11-->
   *  `moment-timezone-with-data.js`   <!--- AC-10-->
   *  `matchMedia.js` <!--- AC-8-->
   *  `underscore.js`  <!--- AC-13-->
   *  `PrototypeJS`  <!--- AC-17-->

*  The following libraries have been removed:

   *  `es6-collections.js`   <!--- AC-18-->
   *  `MutationObserver.js` <!--- AC-15-->
   *  `Modernizr` <!--- AC-12-->
   *  `FormData.js`

These libraries have been removed because all browsers that {{ site.data.var.ee }} 2.4.x supports have built-in support for this functionality.

### Performance enhancements

*  Cart operations for carts containing over 750 configurable products has been improved by increasing the memory limit set by `max_input_vars` in the `php.ini` file to support input variables volume.

*  Optimization of sales rules processing during checkout by deferring total calculation. Merchants can enable this deferment by setting the `checkout/deferred_total_calculating` variable in the `env.php` file. Alternatively, you can run `bin/magento setup:config:set --deferred-total-calculating 1|0`.  <!--- MCP-573-->

*  Improvements to order validation process for orders affected by a cart price rule during asynchronous order placement. <!--- MCP-304-->

### GraphQL

This release includes these GraphQL enhancements:

*  Storefront performance has been improved by changes to how GraphQL requests are cached. Fastly and Varnish now cache GraphQL requests sent with auth tokens. <!--- PWA-1817-->

*  The `storeConfig` query now returns the configuration settings for the Zero Subtotal Checkout and Check/Money Order payment methods. <!--- PWA-1576-->

*  Merchants can use the new [`setNegotiableQuotePaymentMethod` mutation]({{page.baseurl}}/graphql/mutations/set-negotiable-quote-payment-method.html) to set the payment method on a negotiable quote. <!--- PWA-2114-->

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### B2B

This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html)

### Vendor-Bundled Extensions

With the exception of [Braintree](https://docs.magento.com/user-guide/payment/braintree.html), all vendor-bundled extensions have been removed from the {{ site.data.var.ee }} 2.4.4 GA code base. Merchants should migrate to the official extensions, which will be available on the Commerce Marketplace in early 2022. We are working with each of these partners to ensure that a Marketplace alternative is available.

## Fixed issues

We are fixing hundreds of issues in the {{ site.data.var.ee }} 2.4.4 core code. A subset of those fixed issues is described below.

### Installation, upgrade, deployment

<!--- MC-42026-->

*  {{ site.data.var.ee }} now logs static content deployment errors in the build log files as expected.

### AdminGWS

<!--- MC-42239-->

*  Administrators with restricted permissions can now create a return as expected.

### Backend

<!--- MC-43161-->

*  Administrators can now log in to the Admin in a deployment for which a custom Admin path is configured and secret key is enabled. Previously, {{ site.data.var.ee }} displayed this error: `Invalid security or form key. Please refresh the page`.

### Bundle products

<!--- MC-42885-->

*  Shoppers can now add a bundle product with Fixed Product Tax and two options to their shopping cart. Previously, {{ site.data.var.ee }} did not add the product and displayed this error: `We can’t add this item to your shopping cart right now`.

<!--- MC-42249-->

*  Form validation in the form of the `data-validate` and `min` attributes has been added to the cart quantity field to prevent negative values for bundle products.

<!--- MC-41794-->

*  The `products` query now filters bundle products correctly when child products are disabled on the store-view level. Previously, the query returned child products that were disabled at the store-view level.

<!--- MC-42811-->

*  `cron` now clears the product category cache as expected during `indexer_update_all_views` execution. Previously, {{ site.data.var.ee }} displayed an incorrect product count on the category page after the mass update of many products in the category.

<!--- MC-42811-->

*  Magento now updates the category product cache as expected when a bundle product reappears in stock.

<!--- MC-42811-->

*  The cache cleaning algorithm that runs during re-indexing has been optimized. Bundle products are now displayed as expected when a category is cached during re-indexing. Previously, bundle products were not displayed for hours after product categories were cached during re-indexing.

### Cart and checkout

<!--- MC-41494-->

*  The Minimum Advertised Price **What's this?** link on the cart page is now clickable and opens the information popup as expected. Previously, clicking this link had no effect.

<!--- MC-42639-->

*  Shoppers can now place orders without errors after a session timeout in deployments where persistent shopping cart is enabled. Previously, {{ site.data.var.ee }} displayed a payment error after a session timeout.

<!--- MC-42638-->

*  Assigning a high sort order value to a customer address attribute no longer causes performance degradation on the checkout page.

<!--- MC-42813-->

*  {{ site.data.var.ee }} now reverts the shopping cart product quantity to the previous value if the updated quantity is invalid.

<!--- MC-42347-->

*  Clicking the **Add to Cart** button in the Recently Viewed section now redirects as expected to the product details page. Previously, shoppers were redirected to the product listing page.

<!--- MC-33705-->

*  Guest shoppers can now successfully check out with a customer address that contains several types of custom customer address attributes. Previously, values for custom attributes were not properly formatted when displayed during checkout. [GitHub-30290](https://github.com/magento/magento2/issues/30290)

<!--- MC-24379-->

*  {{ site.data.var.ee }} now correctly applies the free shipping threshold to orders when table rates are enabled. [GitHub-21832](https://github.com/magento/magento2/issues/21832)

### Catalog

<!--- MC-41796-->

*  {{ site.data.var.ee }} no longer throws an exception when performing a mass attribute update action on the product grid when a product has a `datetime` attribute.

<!--- MC-42571-->

*  GraphQL queries now return results for child products of a configurable product according to the visibility filter settings of the child product(s).

<!--- MC-41853-->

*  {{ site.data.var.ee }} no longer modifies related product prices when the configurable product attributes are changed. Previously, the Minimum Advertised Price (MAP) for a configurable product overwrote the price of related products on the store front.

<!--- MC-41796-->

*  {{ site.data.var.ee }} no longer throws an exception when performing a mass attribute update action on the product grid when a product has a `datetime` attribute.

<!--- MC-42214-->

*  The Category page now displays consistent product data while permissions are being generated during partial indexing. A new partial indexer for directory permissions has been added to this process. Previously, the data displayed while the indexer ran was incorrect.

<!--- MC-42659-->

*  Administrators can now re-assign the last product remaining in a category and save the empty category.

<!--- MC-42132-->

*  Dropdown/multi-select attribute values for the Admin product grid and filters are now derived as expected from Admin settings. Previously, attribute values were derived from the default store settings.

<!--- MC-43010-->

*  GraphQL queries can now be used to retrieve information about scheduled updates for categories. Previously, {{ site.data.var.ee }} threw an error when executing a GraphQL query to retrieve category information for a scheduled category update.

<!--- MC-41936-->

*  {{ site.data.var.ee }} now displays an accurate salable quantity value for all products in the Admin product list view. Previously, {{ site.data.var.ee }} displayed a blank value for salable quantity of in-stock products with SKUs that contained special characters.

### Catalog rule

<!--- MC-41807-->

*  Daily updates of catalog rules no longer result in performance degradation. Previously, partial catalog product price indexing did not remove old prices or dates.

<!--- MC-38263-->

*  {{ site.data.var.ee }} no longer removes catalog price rules on configurable products during partial re-indexing. Previously, only sub-products were re-indexed when configurable products were re-indexed.

### Configurable products

<!--- MC-42188-->

*  The configurable product option label name is now based on the selected store view during Admin order creation. Previously, {{ site.data.var.ee }} used the label name from the default store view.

<!--- MC-42187-->

*  Product lists now correctly include child products of an out-of-stock product when the global flag for displaying out-of-stock products is enabled. Previously, the product list did not include the child product if one one of several child product options were out-of-stock when this flag was enabled.

<!--- MC-42340-->

*  You can now use the `addConfigurableProductsToCart` mutation to add a configurable product to the cart on a non-default store view. Previously, you could not add a configurable product to a cart when website ID and store ID differed.

<!--- MC-43051-->

*  GraphQL `product` queries no longer return data about the disabled child products of configurable products.

### Customer

<!--- MC-24204-->

*  {{ site.data.var.ee }} now takes into account website scope for Admin locales during order creation. Previously, order details such as customer address attributes worked properly on one website only in a multiple-site deployment. [GitHub-23254](https://github.com/magento/magento2/issues/23254)

### Email

<!--- MC-42592-->

*  Email field validation errors on the checkout login popup now match email validation errors on the customer login page when a customer tries to log in using an invalid email account.

<!--- MC-42764-->

*  {{ site.data.var.ee }} no longer includes an error message in the shipment details email when a shipment comment is added from Admin and the **Notify Customer** checkbox is activated. Previously, shipping confirmation emails included this message: `We're sorry, an error has occurred while generating this content`.

<!--- MC-42486-->

*  Region and country ID values are now properly converted in email templates. Previously, when you clicked on **Preview link** from the Admin email template, country and the region name were not displayed correctly.

<!--- MC-36262-->

*  Sales update emails sent from the Admin for non-default store views now contain correct order status labels. Previously, these emails always displayed status from the default store. [GitHub-29263](https://github.com/magento/magento2/issues/29263)

### Frameworks

<!--- AC-1068-->

*  Updated the `allure-framework/allure-php-api` Composer dependency.

<!--- AC-707-->

*  Plugins are no longer run twice when attached to a decorated class. [GitHub-32469](https://github.com/magento/magento2/issues/32469)

<!--- MC-42091-->

*  {{ site.data.var.ee }} now returns a 500 response code when an exception occurs in the bootstrap file. Previously, {{ site.data.var.ee }} returned a 200 OK status code. [GitHub-2216](https://github.com/magento/magento2/issues/22196)

### General fixes

<!--- MC-42506-->

*  {{ site.data.var.ee }} now copies all product fields according to their defined scopes when duplicating a product. Previously, the **name** and **description** fields were reset to `global` scope.

<!--- MC-42612-->

*  {{ site.data.var.ee }} no longer applies delta rounding to a discount when the product price is 0. Previously, {{ site.data.var.ee }} calculated a negative discount amount.

<!--- MC-42215-->

*  Products with a **Set as New** attribute that is assigned an empty start date and an expired end date can now be successfully saved. Previously, {{ site.data.var.ee }} threw this error when you saved a product with these settings: `Make sure the To Date is later than or the same as the From Date`.

<!--- MC-41803-->

*  {{ site.data.var.ee }} no longer duplicates an existing CMS page in the CMS hierarchy when you change its SEO URL identifier. Previously, {{ site.data.var.ee }} created a new node in the CMS hierarchy, duplicating an existing one.

<!--- MC-42775-->

*  Administrators can now retry operations that have been running over the maximum processing time. The default maximum is 12 hours.

<!--- MC-42514-->

### Gift cards

<!--- MC-42327-->

*  Added a more informative error message when a shopper enters an invalid gift card.

### GraphQL

<!--- PWA-1938-->

*  The `generateCustomerToken` and `revokeCustomerToken` mutations now provide the correct cache ID for the user state. Previously, these mutations used an invalid `x-magento-cache-id`, which degraded performance.

<!--- PWA-1506-->

*  The `setBillingAddressToCart` mutation now correctly uses the `same_as_shipping` parameter to set the billing address to match the shipping address as expected. Previously, {{ site.data.var.ee }} displayed this error: `The shipping method is missing. Select the shipping method and try again`. [GitHub-30924](https://github.com/magento/magento2/issues/30924)

<!--- PWA-1980-->

*  GraphQL cart operations now calculate cart grand totals only when the query requests it. Previously, cart operations always calculated the grand total, which is a resource-intensive operation.

<!--- MC-42567-->

*  The `categoryList` query now returns the correct number of products when catalog permissions are used and products are assigned to a shared catalog.

<!--- MC-42781-->

*  The `addProductsToCart` mutation now adds to the cart only products that are assigned to the store that is defined in the header.

<!--- MC-42831-->

*  The `ConfigurableCartItem` mutation now returns requested data as expected.

<!--- MC-42082-->

*  GraphQL queries now return configuration product option values and variant attribute values. Previously, these values were empty in query responses.

<!--- MC-41794-->

*  The `products` query now filters bundle products correctly when child products are disabled on the store-view level. Previously, the query returned child products that were disabled at the store-view level.

<!--- MC-42528-->

*  The `categoryList` query now respects category permissions and returns only permitted categories. Previously, it returned all assigned and unassigned categories.

<!--- PWA-1311-->

*  GraphQL now provides descriptive transaction names, which can be helpful for debugging. [GitHub-30915](https://github.com/magento/magento2/issues/30915)

<!--- MC-42903-->

<!--- MC-42970-->

<!--- MC-42600-->

<!--- MC-43189-->

<!--- MC-43176-->

<!--- MC-42666-->

<!--- MC-42652-->

### Image

<!--- MC-42080-->

*  Watermark images with transparent backgrounds no longer have a white background on the transparent product image that it overlays. Previously, when both the watermark image and product image had a transparent background, the watermark was displayed with a white background.

<!--- MC-42892-->

### Import/export

<!--- MC-41672-->

*  {{ site.data.var.ee }} now converts the timestamp in the export filename to the user’s timezone after a scheduled export. Previously, these values were not converted, and {{ site.data.var.ee }} displayed the UTC timestamp.

<!--- MC-42330-->

*  {{ site.data.var.ee }} no longer creates duplicate images in remote storage when the same CSV file is imported more than once.

### Index

<!--- MC-42791-->

*  {{ site.data.var.ee }} now displays products as expected on the storefront after re-indexing. Previously, when the first 500 products being re-indexed were in stock, and the next 500 products were out of stock, the storefront did not display any additional products.

### Logging

<!--- MC-42360-->

*  {{ site.data.var.ee }} no longer creates log entries for failed API calls executing bulk actions in **System** > **Bulk Actions**. Previously, permanent entries for failed API calls were added to the bulk action log.

### Order

<!--- MC-41981-->

*  Shoppers can now successfully re-order an existing order that contains a product with the combination of custom options of type file and type dropdown from both the storefront and Admins. Previously, {{ site.data.var.ee }} threw an error and did not process the re-order.

<!--- MC-42746-->

*  Invoices for orders that are paid by store credit and that have fixed product taxes (FPT) applied now include the correct grand total.

<!--- MC-42332-->

*  The Admin order detail page now loads as expected. Previously, {{ site.data.var.ee }} threw the following error when loading the order detail page for orders with certain taxes: `Call to a member function getId() on array`.

### Page Builder

<!--- AC-973-->

*  {{ site.data.var.ee }} no longer resizes the Page Builder Insert Link and Insert Image modals when displaying the slider in a small column.

<!--- AC-407-->

*  The Page Builder Table Properties menu is now displayed as expected.

<!--- AC-406-->

*  Slider dots are no longer displayed on the Page Builder Insert link or image modal when the mouse is not hovering over the slider.

<!--- AC-396-->

*  The font size used to display Page Builder Table menu options has been optimized.

<!--- AC-397-->

*  Corrected anomalies with the positioning of the Insert/Edit Image and Insert/Edit Link popup windows.

<!--- AC-398-->

*  {{ site.data.var.ee }} no longer throws an error when you click on **Text Editor** for a banner in Page Builder.

<!--- MC-42779-->

*  Administrators with permissions restricted to Content edit only no longer see an error when using Page Builder to add a product widget to a CMS page. {{ site.data.var.ee }} also displays an accurate product count on the widget settings page. Previously, {{ site.data.var.ee }} required permissions to the Catalog module when retrieving product count and displayed this error: `A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later`.

<!--- MC-42265-->

*  {{ site.data.var.ee }} no longer converts all dynamic blocks to one language during upgrade.

### Payment methods

<!--- AC-493-->

*  `bin/magento setup:upgrade` now runs as expected when upgrading from {{ site.data.var.ee }} 2.4.2-p1. Previously, {{ site.data.var.ee }} threw this error: `Unable to apply data patch Magento\Paypal\Setup\Patch\Data\UpdateBmltoPayLater for module Magento_Paypal`. [GitHub-33678](https://github.com/magento/magento2/issues/33678)

<!--- MC-42830-->

*  The correct store ID is now used to retrieve saved credit cards during Admin order placement. Stored credit cards are now displayed during order placement according to the website scope configuration setting. Previously, when an administrator tried to create an order for a customer from the Admin and selected the Stored Credit Cards method, no options were available for stored cards.

#### PayPal

<!--- MC-42154-->

*  {{ site.data.var.ee }} no longer displays an error during checkout with the PayPal Express payment method. Previously, although the checkout process completed, {{ site.data.var.ee }} displayed this error: `Something went wrong`.

### Performance

<!--- MC-42158-->

*  Module list load execution time has improved.

<!--- AC-1170-->

### Pricing

<!--- MC-42243-->

*  Price sorting now works as expected when product prices are close to or equal to zero and shared catalogs are enabled. Previously, zero tier prices were ignored during price re-indexing.

### ProductAlert

<!--- MC-41917-->

*  The new `product_alert` consumer improves the sending of customer alerts by creating queue messages, running the consumer, and improving execution time. Previously, {{ site.data.var.ee }} threw an out-of-memory exception when sending more than 100,000 product alerts. {{ site.data.var.ee }} also took more than 20 hours to send all alerts.

### Return Merchandise Authorizations (RMA)

<!--- MC-42987-->

*  The Admin Create Return Product grid now displays tax, including prices only for products that are configured to display tax with prices. Previously, {{ site.data.var.ee }} did not check the configuration display settings on the `tax/calculation/price_includes_tax` flag.

### Sales

<!--- MC-42025-->

*  The performance of sales grid updates in asynchronous mode for tables with large data sets after upgrade to MariaDB 10.2.34 has been improved.

<!--- MC-42531-->

*  {{ site.data.var.ee }} now removes HTML tags as expected from the storefront **Account** > **My Orders** > **View order** page. Previously, {{ site.data.var.ee }} displayed HTML tags in the storefront customer order comment section.

<!--- MC-42377-->

*  Automated test coverage to verify the existence of an index for `sales_shipment_grid.order_id` has been added.

### Sales Rule

<!--- MC-42288-->

*  Coupon generation is now blocked until the related cart price rule is saved with the `auto` option enabled. If you try to save this rule without enabling the `auto` option, {{ site.data.var.ee }} displays this message: `Rule is not saved with auto generate option enabled. Please save the rule and try again`.

<!--- MC-42743-->

*  Added test for confirming the correct application of a cart price rule discount.

### Search

<!--- MC-42799-->

*  Layered Navigation options for price range now work as expected with custom price attributes. {{ site.data.var.ee }} uses the configuration of the price navigation step when filtering custom price attributes. Previously, {{ site.data.var.ee }} used the manual step configuration.

<!--- MC-42545-->

<!--- MC-41706-->

### Shipping

<!--- MC-42758-->

*  Shipment email now includes the tracking number for the current shipment only. Previously, when an order included several shipments, each shipment’s email included the tracking numbers from all shipments related to the order.

<!--- MC-42396-->

*  {{ site.data.var.ee }} now updates the mini cart successfully when a shopper deletes a product from their cart while in multi-shipping mode, then switches to a single shipping address. Previously, product prices were not updated as expected.

<!--- AC-267-->

*  Import of table rates now works as expected when using the S3 storage adapter. Previously, {{ site.data.var.ee }} displayed this error: `File "https://[bucket].s3.eu-central-1.amazonaws.com/[prefix]/tmp/phpLjGmHf" not found`. [GitHub-33072](https://github.com/magento/magento2/issues/33072)

### Staging

<!--- MC-42194 --->

*  Product scheduled update images and videos are now correctly saved. Previously, videos, URLs, titles, and descriptions were removed after creating a new scheduled update.

<!--- MC-42501-->

*  {{ site.data.var.ee }} now displays the Minimum Advertised Price attribute in the Schedule New Update form for the store views for which the attribute is enabled.

<!--- MC-42590-->

*  {{ site.data.var.ee }} now displays only one Images tab in the product Scheduled Update form as expected. Previously, {{ site.data.var.ee }} duplicated this tab.

<!--- MC-23994-->

### Store

<!--- MC-42884-->

*  The Login as Customer feature now works as expected in deployments that contain multiple stores on different URLs. Previously, {{ site.data.var.ee }} did not load the correct store, even when accessing the correct store domain.

### Tax

<!--- MC-41924-->

*  {{ site.data.var.ee }} now correctly calculates the mini cart subtotal when a customer deletes an item after selecting shipping to multiple addresses.

<!--- MC-41945-->

*  {{ site.data.var.ee }} now shows the same tax rate on all checkout pages when the shopping cart contains only virtual products.

### Test

<!--- MC-41955-->

*  Added a test to verify custom date attribute format for storefront and Admin.

<!--- AC-1085-->

<!--- AC-352-->

<!--- AC-1193-->

### Theme

<!--- MC-41887-->

*  Notification messages are now displayed correctly when {{ site.data.var.ee }} has a subpath configured in its base URL.

### UI

<!--- AC-1056-->

*  {{ site.data.var.ee }} now displays all options as expected on the Page Builder Font Size options menu. Previously, not all options were displayed.

<!--- AC-982-->

*  You can now use the mouse click to edit a **Text To Display** value in the Page Builder Insert Link popup.

<!--- AC-446-->

*  Display issues with the Page Builder Format menu have been resolved with the TinyMCE 5 library upgrade.

<!--- AC-258-->

*  Corrected errors with MFTF tests that use `maps.googleapis.com`.

<!--- MC-41850-->

*  {{ site.data.var.ee }} now trims the non-breaking space characters from the Contact Us form email input field. Previously, the form was submitted without removing the non-breaking space characters from the email input (if given), which caused errors in the log files. The **Reply-To** field was also missing from the generated contact email message to the store administrator.

<!--- MC-42793-->

*  {{ site.data.var.ee }} now displays related products, up-sell products, and cross-sell products according to their positions in the Admin.

### Web API framework

<!--- MC-42008-->

*  Web API requests for self-authorized customer resources no longer throw authorization errors when persistent shopping cart is enabled.

<!--- MC-42313-->

*  You can now create objects using the child classes of `\Magento\Framework\Api\AbstractSimpleObjectBuilder` on PHP 7.3. Previously, `preg_match` threw this warning message when {{ site.data.var.ee }} was hosted on Redhat with PHP 7.3: `Warning: preg_match(): Compilation failed: unrecognized character follows \ at offset 28 in /var/www/nationaloak.com/vendor/magento/framework/Api/AbstractSimpleObjectBuilder.php on line 76`.

<!--- AC-1004-->

<!--- MC-24548-->

<!--- MC-42399-->

<!--- MC-42443-->

### Wish list

<!--- MC-41880-->

*  {{ site.data.var.ee }} no longer renders a wish list in the category sidebar when the **Show In Sidebar** wish list option is disabled. Previously, {{ site.data.var.ee }} ignored this option.

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).
