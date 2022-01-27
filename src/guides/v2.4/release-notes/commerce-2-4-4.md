---
group: release-notes
title: Adobe Commerce 2.4.4 Release Notes
---

{{ site.data.var.ee }} 2.4.4-beta4 introduces support for PHP 8.1. Core Composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ee }} 2.4.4 contains backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## {{ site.data.var.ee }} Beta program

The {{ site.data.var.ee }} 2.4.4 [Beta program](https://devdocs.magento.com/release/beta-program.html) includes four monthly Beta releases that merchants can use to prepare their deployments for upgrade to {{ site.data.var.ee }} 2.4.4. We are launching this program five months before {{ site.data.var.ee }} 2.4.4 General Availability (GA). The top three partners and individual contributors will receive special mention in these release notes, Beta blog posts, and in other communications. See the [Breaking News: 2.4.4 beta releases are coming soon](https://community.magento.com/t5/Magento-DevBlog/BREAKING-NEWS-2-4-4-beta-releases-are-coming-soon/ba-p/484310) DevBlog post.

## {{ site.data.var.ee }} 2.4.4-beta4

{{ site.data.var.ee }} 2.4.4-beta4 has been tested against the following component versions:

*  Composer 2.1.6
*  Elasticsearch 7.16.1
*  MariaDB 10.4.14
*  MySQL 8.0.22
*  OpenSearch 1.1
*  PHP 8.0.13
*  Redis 6.0.12
*  Varnish 6.5.1

{:.bs-callout-info}
All vendor-bundled extensions, with the exception of Braintree, have been removed from {{ site.data.var.ee }} 2.4.4.
## {{ site.data.var.ee }} 2.4.4-beta4 highlights

{{ site.data.var.ee }} 2.4.4-beta4 includes the following enhancements:

*  All Magento project libraries and dependencies have been updated for compatibility with PHP 8.1.
*  Support for the latest ElasticSearch version (7.16.1) and OpenSearch 1.1
*  The `jquery-ui` library has been upgraded to version 1.13.0.
*  Deprecated methods in jQuery 3.6.x and earlier have been removed to simplify future upgrade.
*  The third-party `jquery.tabs` library has been updated to the latest version.

We are not releasing Cloud packages for this Beta release.

### Additional changes

*  The `Magento\Framework\MessageQueue\TopologyTest` is now compatible with the AWS MQ for RabbitMQ service. Previously, this test failed with this message: `Invalid exchange configuration: magento-topic-based-exchange1 Failed asserting that two arrays are equal`. <!--- AC-1248-->

*  {{ site.data.var.ee }} no longer displays a deprecation notice during download of Composer packages for 2.4.4-beta on PHP 8.0. <!--- AC-1678-->

*  HTML tags are now nested and closed properly to meet standards in JQuery 3.5.x for non-void elements including custom elements. <!--- AC-1942-->

*  Added return type declarations to internal methods with incomplete return types for compatibility with PHP 8.1. [GitHub-34498](https://github.com/magento/magento2/issues/34498) <!--- AC-1606-->

## {{ site.data.var.ee }} 2.4.4 highlights

The following highlights were added in earlier versions of 2.4.4 and are included in this release.

*  The `RequireJS` library has been upgraded to the latest version (v2.3.6). [GitHub-33672](https://github.com/magento/magento2/issues/33672) <!--- AC-40 422-->

*  PHPUnit has been upgraded to the latest version (9.5.x). Tests and test frameworks have been updated to be compatible with the new version. <!--- AC-404-->

*  TinyMCE 5 is now supported. <!--- AC-41-->

*  Adobe Composer dependencies have been upgraded to the latest versions that are compatible with PHP 8.0.x. <!--- AC-35-->

*  Most Laminas dependencies have been upgraded to the latest versions that are compatible with PHP 8.1. Outdated Laminas dependencies have been removed from the codebase.

*  The `endroid/qr-code` dependency has been updated to the latest version. [GitHub-34101](https://github.com/magento/magento2/issues/34101) <!--- AC-1258-->

### Library upgrades

*  The following libraries have been upgraded to more recent versions:

   *  `script.aculo.us` <!--- AC-363-->
   *  `Chart.js`  <!--- AC-361-->
   *  `moment.js` <!--- AC-11-->
   *  `moment-timezone-with-data.js`   <!--- AC-10-->
   *  `matchMedia.js` <!--- AC-8-->
   *  `underscore.js`  [GitHub-32850](https://github.com/magento/magento2/issues/32850) <!--- AC-13-->
   *  `PrototypeJS`  <!--- AC-17-->

### Library removals

*  The following libraries have been removed:

   *  `es6-collections.js`   <!--- AC-18-->
   *  `MutationObserver.js` <!--- AC-15-->
   *  `Modernizr` <!--- AC-12-->
   *  `FormData.js`

These libraries have been removed because all browsers that {{ site.data.var.ee }} 2.4.x supports have built-in support for this functionality.

### Performance enhancements

*  Cart operations for carts containing over 750 configurable products have been improved by increasing the memory limit set by `max_input_vars` in the `php.ini` file to support input variables volume.

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

## Installation on cloud infrastructure

To upgrade to 2.4.4-beta, Beta partners that build and deploy {{ site.data.var.ee }} on cloud infrastructure must update the [`magento-cloud` template](https://github.com/magento/magento-cloud/blob/master/composer.json) and `.magento.app.yaml` files as described below.

### Update the `repositories` and `require` sections in the Magento Cloud template `composer.json` file

Update the `repositories` section to add the Magento Cloud and Quality packages that support the 2.4.4-beta2 version.

```php
    "repositories": {
        "ece-tools": {
            "type": "vcs",
            "url": "https://github.com/magento/ece-tools.git"
        },
        "mcd": {
            "type": "vcs",
            "url": "https://github.com/magento/magento-cloud-docker.git"
        },
        "mcc": {
            "type": "vcs",
            "url": "https://github.com/magento/magento-cloud-components.git"
        },
        "mcp": {
            "type": "vcs",
            "url": "https://github.com/magento/magento-cloud-patches.git"
        },
        "mqp": {
            "type": "vcs",
            "url": "https://github.com/magento/quality-patches.git"
        },
        "repo": {
            "type": "composer",
            "url": "https://repo.magento.com"
        }
```

Update the  `require` section to include the correct version of each repository as follows:

```json
   "require": {
        "magento/product-enterprise-edition": ">=2.4.4 <2.4.5",
        "magento/composer-root-update-plugin": "~1.1",
        "magento/ece-tools": "dev-2.4.4-beta as 2002.1.9",
        "magento/magento-cloud-docker": "dev-2.4.4-beta as 1.3.1",
        "magento/magento-cloud-components": "dev-2.4.4-beta as 1.0.10",
        "magento/magento-cloud-patches": "dev-2.4.4-beta as 1.0.14",
        "magento/quality-patches": "dev-2.4.4-beta as 1.1.5",
        "fastly/magento2": "^1.2.34"
    },
```
### Update the `magento.app.yaml` file

In the `magento.app.yaml` file, update the `type`, `flavor`, and `dependency` sections to use PHP 8.0 and Composer 2. Add `composer install`.

```yaml
type: php:8.0
build:
    flavor: none
dependencies:
    php:
        composer/composer: '^2.0'
...
hooks:
    # We run build hooks before your application has been packaged.
    build: |
        set -e
        composer install
        php ./vendor/bin/ece-tools run scenario/build/generate.xml
        php ./vendor/bin/ece-tools run scenario/build/transfer.xml
```

## Fixed issues

We are fixing hundreds of issues in the {{ site.data.var.ee }} 2.4.4 core code. A subset of those fixed issues is described below.

### Installation, upgrade, deployment

<!--- MC-42026-->

*  {{ site.data.var.ee }} now logs static content deployment errors in build log files as expected.

<!--- AC-1480-->

*  [GitHub-33760](https://github.com/magento/magento2/issues/33760)

<!--- MC-43094-->

*  Data patches can no longer ignore a table’s unique constraints and insert duplicate values into a MySQL database table. Previously, patches could insert duplicate values, which corrupted the database. [GitHub-32283](https://github.com/magento/magento2/issues/32283)

<!--- AC-1510-->

*  URL rewrites are no longer re-generated for all store views during the creation of a new store view when executing `bin/magento setup:upgrade`. [GitHub-32954](https://github.com/magento/magento2/issues/32954)

<!--- AC-1480-->

*  Merchants can now successfully upgrade from an {{ site.data.var.ee }} 2.4.2 deployment with Klarna to {{ site.data.var.ee }} 2.4.3. [GitHub-33760](https://github.com/magento/magento2/issues/33760)

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

<!--- AC-715-->

*  Currency conversion now occurs as expected in email confirmations for bundle product purchases in multi-store deployments that use different currencies. [GitHub-33426](https://github.com/magento/magento2/issues/33426)

### Cache

<!--- AC-328-->

*  Page cache no longer grows rapidly under typical use. [GitHub-9458](https://github.com/magento/magento2/issues/9458)

<!--- magento/magento2/pull/33468-->

*  Placing an order no longer results in the removal of all cache tags that are related to the ordered products from the Varnish cache. [GitHub-30128](https://github.com/magento/magento2/issues/30128)

<!--- AC-1478-->

*  Full-site page cache is no longer wiped out when you update a product from top categories or run an index to update product attributes or stock status.  Previously, Varnish cache added top menu category IDs to all page cache tags. [GitHub-33465](https://github.com/magento/magento2/issues/33465)

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

<!--- AC-271-->

*  You can now use `POST /V1/guest-carts/:cartId/items` to add simple products with different options to a cart. Previously, this call changed the quantity of the first simple product you added instead of adding a second simple product with the specified options. [GitHub-32302](https://github.com/magento/magento2/issues/32302)

<!--- AC-1089-->

*  The Order Summary section of the checkout page now displays the correct currency and amount when a deployment is configured for `Poland` country and `PLN` currency. Previously, the shopping cart and checkout page displayed the amount **PLN 0**.

<!--- MC-32805-->

*  {{ site.data.var.ee }} no longer throws an error when a shopper clicks **Update Cart** after changing  a product quantity in the mini cart. Previously, {{ site.data.var.ee }} displayed this error:  `The quote item isn't found. Verify the item and try again`.

<!--- MC-43176-->

*  GraphQL `product` queries for configurable products in a specific store now return the price ranges of products on the specified store only. Previously, requests returned price ranges for simple products on non-specified stores.

<!--- AC-691-->

*  {{ site.data.var.ee }} no longer throws this error when a shopper adds a billing address that is missing a street field:  `Uncaught TypeError: Unable to process binding "text: function(){return currentBillingAddress().street.join(', ') }”`. [GitHub-33826](https://github.com/magento/magento2/issues/33826)

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

<!--- AC-1169-->

*  The `V1/products/base-prices` endpoint now works as expected with **Catalog Price Mode - Website**.  [GitHub-30132](https://github.com/magento/magento2/issues/30132)

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

<!--- MC-38815-->

*  GraphQL queries now return billing address as expected when the value of an optional telephone field is set to an empty string. Previously, queries returned a null address value. [GitHub-30218](https://github.com/magento/magento2/issues/30218), [GitHub-30948](https://github.com/magento/magento2/issues/30948)

### Customer

<!--- MC-24204-->

*  {{ site.data.var.ee }} now considers website scope for Admin locales during order creation. Previously, order details such as customer address attributes worked properly on one website only in a multi-site deployment. [GitHub-23254](https://github.com/magento/magento2/issues/23254)

### Customer segment

<!--- MC-42241-->

*  The Matched Customers count for a new customer segment now updates automatically when you create a company account. Previously, you had to refresh segment data to get an accurate count.

### Email

<!--- MC-42592-->

*  Email field validation errors on the checkout login popup now match email validation errors on the customer login page when a customer tries to log in using an invalid email account.

<!--- MC-42764-->

*  {{ site.data.var.ee }} no longer includes an error message in the shipment details email when a shipment comment is added from Admin and the **Notify Customer** checkbox is activated. Previously, shipping confirmation emails included this message: `We're sorry, an error has occurred while generating this content`.

<!--- MC-42486-->

*  Region and country ID values are now properly converted in email templates. Previously, when you clicked on **Preview link** from the Admin email template, country and the region name were not displayed correctly.

<!--- MC-36262-->

*  Sales update emails sent from the Admin for non-default store views now contain correct order status labels. Previously, these emails always displayed status from the default store. [GitHub-29263](https://github.com/magento/magento2/issues/29263)

<!--- magento/magento2/pull/32720-->

*  Order and shipment notification emails now work as expected in deployments using Microsoft Outlook and MS Exchange Server. Previously, the email body was empty but contained an ATT*-labeled attachment.[GitHub-25076](https://github.com/magento/magento2/issues/25076)

<!--- AC-721-->

*  {{ site.data.var.ee }} now includes `Content-Disposition: inline` headers in email as expected. [GitHub-29258](https://github.com/magento/magento2/issues/29258)

### Frameworks

<!--- AC-515-->

*  Non-strict comparisons between numbers and non-numeric strings now work by casting the number to string and comparing the strings. Comparisons between numbers and numeric strings continue to work as before. This means that `0 == "not-a-number"` is now considered false. [GitHub-33780](https://github.com/magento/magento2/issues/33780)

<!--- AC-102-->

*  Updated the `jquery-validate` third-party library for compatibility with PHP 8.1. [GitHub-33853](https://github.com/magento/magento2/issues/33853)

<!--- AC-1338-->

*  The helper `Magento\Payment\Helper\Data` no longer creates new layouts in constructors. Previously, when this helper was used in custom commands without specifying an area code,  {{ site.data.var.ee }} threw an error. [GitHub-33908](https://github.com/magento/magento2/issues/33908)

<!--- AC-1068-->

*  Updated the `allure-framework/allure-php-api` Composer dependency.

<!--- AC-707-->

*  Plugins are no longer run twice when attached to a decorated class. [GitHub-32469](https://github.com/magento/magento2/issues/32469)

<!--- MC-42091-->

*  {{ site.data.var.ee }} now returns a 500 response code when an exception occurs in the bootstrap file. Previously, {{ site.data.var.ee }} returned a 200 OK status code. [GitHub-22196](https://github.com/magento/magento2/issues/22196)

<!--- AC-1318-->

*  The currency symbol is now loaded as expected on storefront product details pages. Previously, this symbol sometimes disappeared after JavaScript page reloads.

<!--- AC-719-->

*  Updating `symfony/console` no longer causes a failure when running `bin/magento setup:di:compile`. [GitHub-33595](https://github.com/magento/magento2/issues/33595)

<!--- AC-1504-->

*  New required options have been added to the `.htaccess` and `nginx.conf` files that are distributed with Magento for PHP 8.x support. Outdated options have also been removed. [GitHub-34358](https://github.com/magento/magento2/issues/34358)

<!--- MC-42448-->

*  Merchants can now upload a video for multiple products. The file generation process now appends an extension to the file name only if the uploaded file name includes an extension. Previously, when a merchant tried to upload then save the same video for two different products, {{ site.data.var.ee }} threw this error: `Notice: Undefined index: extension in /app/7ha7zds7wvqys_stg/vendor/magento/framework/File/Uploader.php on line 699`. This occurred because {{ site.data.var.ee }} tried to append a file extension to the name irrespective of whether the uploaded file name had an extension.

<!--- magento/magento2/pull/33632-->

*  Refactored the codebase to correct usage of the keyword `match`, which is a reserved keyword in PHP 8.x. [GitHub-33626](https://github.com/magento/magento2/issues/33626)

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

*  Broken pipe errors no longer occur during bulk action processing due to unacknowledged messages for the consumer. A prefetch count property now limits these messages for the consumer and avoids errors. Previously, running `bin/magento queue:consumers:start async.operations.all` generated this error:  `Broken pipe or closed connection`.

<!--- MC-42075-->

*  Shoppers are now redirected back to the login page as expected after a second failed login attempt. Previously, shoppers were redirected to a 404 page after a second unsuccessful login attempt. [GitHub-32885](https://github.com/magento/magento2/issues/32885)

<!--- magento/magento2/pull/25279-->

*  Password reset token validity has been extended to avoid the occurrence of a race condition during submission of the password change page.  [GitHub-29647](https://github.com/magento/magento2/issues/29647)

<!--- AC-1328-->

*  Corrected regression issue that affected messages left in the exception logs for the Contact Us form. [GitHub-34483](https://github.com/magento/magento2/issues/34483)

<!--- AC-1316-->

*  Permission assigned to new integrations are now respected. [GitHub-33347](https://github.com/magento/magento2/issues/33347)

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

<!--- MC-42783-->

*  `products` queries using layered navigation filters now return correct child category lists. [GitHub-33387](https://github.com/magento/magento2/issues/33387)

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

*  GraphQL now supports setting shipping addresses on a shopping cart with an empty telephone number value when the **Show Telephone** Admin configuration setting is set to optional. Previously, {{ site.data.var.ee }} threw this error: `Field CartAddressInput.telephone of required type String! was not provided`.

<!--- MC-42970-->

*  Corrected an issue where the `addSimpleProductsToCart` mutation allowed you to add simple products to a cart that are not assigned to the target website.

<!--- MC-42600-->

*  MySQL queries have been optimized for GraphQL `products` queries that use search parameters to refine search results.

<!--- MC-43189-->

*  The `addConfigurableProductToCart` mutation no longer supports adding a product to a cart if the product is not included in the requested scope.

<!--- MC-42666-->

*  The `products` mutation  now returns only configurable variants that are assigned to the requested storeview. Previously, all variants of the requested configurable product were returned.

<!--- MC-42652-->

*  `addSimpleProductsToCart` requests can now run successfully in parallel. Previously, multiple requests for the same SKU created duplicate line items for the same cart ID rather than increasing the product quantity as expected.

<!--- AC-856-->

*  The `addProductsToCompareList` mutation can now be used to compare variants of configurable products.

<!--- MC-42443-->

*  Quotes are now updated correctly when product prices are updated by `product` queries. Previously, although the subtotal in the cart summary section was updated correctly, the row subtotal was not updated.

<!--- AC-697-->

*  The `addProductsToCart` mutation now adds all selected options to the cart when used to add bundle products with multiple selection options. Previously, the mutation added only the last selection. [GitHub-33123](https://github.com/magento/magento2/issues/33123)

### Image

<!--- MC-42080-->

*  Watermark images with transparent backgrounds no longer have a white background on the transparent product image that it overlays. Previously, when both the watermark image and product image had a transparent background, the watermark was displayed with a white background.

<!--- AC-1240-->

*  Logos for invoices and shipping receipts are now uploaded and displayed as expected when AWS S3 is enabled.

<!--- MC-42160-->

*  The media tag associated with an image added to a CMS page in a deployment where the Admin is set to a different domain than the store URL now contains store URLs as expected. Previously, media tags contained static Admin URLs instead of the expected store URLs. [GitHub-32930](https://github.com/magento/magento2/issues/32930)

### Import/export

<!--- MC-41672-->

*  {{ site.data.var.ee }} now converts the timestamp in the export filename to the user’s timezone after a scheduled export. Previously, these values were not converted, and {{ site.data.var.ee }} displayed the UTC timestamp.

<!--- MC-42330-->

*  {{ site.data.var.ee }} no longer creates duplicate images in remote storage when the same CSV file is imported more than once.

<!--- AC-1045-->

*  Import no longer fails with this message:  `Import failed: Area code not set: Area code must be set before starting a session`. [GitHub-16171](https://github.com/magento/magento2/issues/16171)

<!--- AC-988-->

*  You can now import successfully after running `bin/magento app:config:dump` and manually editing `config.php`. [GitHub-31428](https://github.com/magento/magento2/issues/31428)

### Index

<!--- MC-42791-->

*  {{ site.data.var.ee }} now displays products as expected on the storefront after re-indexing. Previously, when the first 500 products being re-indexed were in stock, and the next 500 products were out of stock, the storefront did not display any additional products.

<!--- magento/magento2/pull/27212-->

*  Resolved consistency issues in merged `indexer.xml` files. The allowed values in `classType` are now the same in unmerged and merged `indexer.xml` files. [GitHub-29609 ](https://github.com/magento/magento2/issues/29609)

### Infrastructure

<!--- AC-1514-->

*  Upgraded `pelago/emogrifier` to v6.x for PHP 8.1 support. [GitHub-34374](https://github.com/magento/magento2/issues/34374)

<!--- AC-1147-->

*  Updated the root `composer.json` metapackage and `composer.json` file for each module to PHP 8.1. [GitHub-34009](https://github.com/magento/magento2/issues/34009)

<!--- AC-301-->

*  Updated `phpseclib/phpseclib` from 2.0.31 to the latest version (v3.0.8). [GitHub-32864](https://github.com/magento/magento2/issues/32864)

<!--- AC-491-->

*  MySQL has been upgraded to the latest 8.0.x version.

<!--- AC-1469-->

*  MariaDB has been upgraded to version 10.4.22.

<!--- ENGCOM-8667-->

*  Updated `Less.js` to 3.13.1. [GitHub-32845](https://github.com/magento/magento2/issues/32845)

<!--- AC-1304-->

*  Updated dependency versions for `infra-tools` and MHCI to the latest compatible version in sync with the root `composer.json` file. [GitHub-34133](https://github.com/magento/magento2/issues/34133)

<!--- AC-1192-->

*  Removed dependency on the deprecated (and now removed) `grunt-autoprefixer` NPM library. [GitHub-34037](https://github.com/magento/magento2/issues/34037)

<!--- AC-719-->

*  Updating `symfony/console` no longer causes failure when running `bin/magento setup:di:compile`. [GitHub-33595 ](https://github.com/magento/magento2/issues/33595)

<!---magento/magento-coding-standard/pull/206 -->

*  Updated the `webonyx/graphql-php` dependency to the latest version in the Magento coding standard repository. [GitHub-32863](https://github.com/magento/magento2/issues/32863)

<!---magento/magento2/pull/33860 -->

*  Updated `guzzlehttp/guzzle` from 6.5.5 to the latest version (7.3.0). [GitHub-32869](https://github.com/magento/magento2/issues/32869)

<!---magento/magento2/pull/33515 -->

*  Updated NPM packages and libraries to the latest versions. [GitHub-33512](https://github.com/magento/magento2/issues/33512), [GitHub-33972](https://github.com/magento/magento2/issues/33972)

<!---magento/magento2/pull/33363 -->

*  Updated the `phpseclib/mcrypt_compat` Composer dependency to the latest major version (v2.0). [GitHub-32865](https://github.com/magento/magento2/issues/32865)

<!--- AC-1077-->

*  You can now pass a `data` argument to a block instance constructor by `di.xml`.

<!--- AC-1172-->

*  The unsupported `str_contains` method has been replaced with a supported function. This was a known issue for 2.4.3. [GitHub-33680](https://github.com/magento/magento2/issues/33680), [GitHub-33755](https://github.com/magento/magento2/issues/33755)

<!--- AC-97-->

*  Removed the unused `jquery.hoverIntent` JavaScript library. [GitHub-33732](https://github.com/magento/magento2/issues/33732)

<!--- magento/magento2/pull/34366)-->

*  `lib/internal/Magento/Framework/Filter/Money.php` has been deprecated. It contains the `money_format()` function, which was removed in PHP 8.x. [GitHub-33870](https://github.com/magento/magento2/issues/33870)

<!--- magento/magento2/pull/33605)-->

*  Updated the `laminas/laminas-code` Composer dependency to version 4.4.2 [GitHub-33509](https://github.com/magento/magento2/issues/33509)

<!--- AC-1366-->

*  Added support for PHP 8.1 to `laminas/laminas-math`. [GitHub-34242](https://github.com/magento/magento2/issues/34242)

<!--- magento/magento2/pull/33932 magento/magento2/pull/33992-->

*  The codebase has been refactored to remove calls to deprecated methods of `phpunit/phpunit`. [GitHub-33916](https://github.com/magento/magento2/issues/33916)

<!--- MC-42960-->

*  {{ site.data.var.ee }} now displays an informative error when an administrator with a read-only `pubs/media` tries to access the product details page for a product that includes images. Previously, {{ site.data.var.ee }} threw a PHP error. [GitHub-32819](https://github.com/magento/magento2/issues/32819)

<!--- magento/magento2/pull/34234)-->

*  Fixed `abs()` and `round()` functions for compatibility with PHP7 and PHP8 [GitHub-34322](https://github.com/magento/magento2/issues/34322)

<!--- AC-1172-->

*  The unsupported `str_contains` method has been replaced with a supported function. This was a known issue for Magento 2.4.3. [GitHub-33680](https://github.com/magento/magento2/issues/33680)

<!--- AC-853-->

*  All member-level  `@api` annotations have been moved to their class throughout the codebase.

<!--- AC-1977-->

*  `gift-card Cms` widget data has been moved from `Magento/WidgetSampleData` (Magento Open Source) to `Magento/GiftCardSampleData` (Adobe Commerce). This has resolved problems installing Magento Open Source with sample data on PHP8.1.

<!--- AC-1001-->

*  Marked interfaces throughout the Adobe Stock Integration codebase with `@api` as needed. [GitHub-32875](https://github.com/magento/magento2/issues/32875)

<!--- AC-1770-->

*  Integers and floats in result sets are now returned using native PHP types instead of strings when using emulated prepared statements. [GitHub-34625](https://github.com/magento/magento2/issues/34625)

<!--- AC-1650 1521-->

*  Updated required PHP versions for each module in the root `composer.json/metapackage` and `composer.json` file for each module to `~7.4.0||~8.0.0||~8.1.0`. [GitHub-34541](https://github.com/magento/magento2/issues/34541)

<!--- AC-1697-->

*  Auto-creation of arrays from false values have been disabled to ensure compatibility with PHP 8.1.

<!--- magento/magento-coding-standard/pull/322-->

*  Added new sniff `Magento2. PHP.ArrayAutovivification` to the Magento Coding standard to identify the auto-creation of arrays from a false value. [GitHub-34509](https://github.com/magento/magento2/issues/34509)

<!--- magento/magento2/pull/34279 magento/magento2/pull/34367-->

*  Added support for PHP 8.1 to `laminas/laminas-server` and `laminas/laminas-view`. [GitHub-34240](https://github.com/magento/magento2/issues/34240), [GitHub-34214](https://github.com/magento/magento2/issues/34214)

<!--- AC-1192-->

*  Removed the deprecated, unsupported `grunt-autoprefixer` package. [GitHub-34037](https://github.com/magento/magento2/issues/34037)

<!--- magento/magento2/pull/34555-->

*  The `phpstan/phpstan` Composer dependency has been updated to v1.x. [GitHub-34604](https://github.com/magento/magento2/issues/34604)

<!--- magento/magento2-page-builder/pull/794-->

*  Updated the `phpgt/dom` Composer dependency to  the most recent 2.x version. [GitHub-34633](https://github.com/magento/magento2/issues/34633)!--- AC-1750 1751 1752 —->

<!--- magento/magento-coding-standard/pull/325-->

*  Added new sniff `Magento2.Functions.DeprecatedFunction` to the Magento Coding standard. [GitHub-34547](https://github.com/magento/magento2/issues/34547)

<!--- magento/magento-coding-standard/pull/326-->

*  Added deprecated functions to sniff `Magento2.Functions.DiscouragedFunction` in the Magento Coding standard. [GitHub-34548](https://github.com/magento/magento2/issues/34548)

<!---magento/magento2/pull/34206 -->

*  Updated the codebase to avoid a fatal error when using the `ReflectionType::isBuiltin()` method. [GitHub-34194](https://github.com/magento/magento2/issues/34194)

<!---magento/magento2/pull/34175 -->

*  Corrected the restriction for the `colinmollenhour/cache-backend-redis` Composer dependency. [GitHub-34177](https://github.com/magento/magento2/issues/34177)

<!--- AC-517-->

*  `parse_url()` now distinguishes between  absent and empty queries and fragments.  [GitHub-33782](https://github.com/magento/magento2/issues/33782)

### Logging

<!--- MC-42360-->

*  {{ site.data.var.ee }} no longer creates log entries for failed API calls executing bulk actions in **System** > **Bulk Actions**. Previously, permanent entries for failed API calls were added to the bulk action log.

### Media Gallery

<!--- AC-1054-->

*  The `bin/magento media-gallery:sync` command no longer fails in deployments where AWS S3 is enabled.

<!--- AC-1000-->

*  Newly added Media Gallery Content submenu titles are now displayed when menu items exceed 11 and the **Enable Old Media Gallery** configuration setting is enabled. [GitHub-33889](https://github.com/magento/magento2/issues/33889)

<!--- MC-42837-->

*  Loading time for the Media Gallery tab when editing a product with many images has improved.  [GitHub-33434](https://github.com/magento/magento2/issues/33434)

### MFTF

<!--- AC-1397-->

*  Fixed errors in MFTF tests for downloadable products. [GitHub-34270](https://github.com/magento/magento2/issues/34270)

<!--- magento/magento2/pull/33530-->

*  Removed `CliCacheFlushActionGroup` from `CatalogSearch`, `GroupedProduct`, `Newsletter`, `Paypal`, `Quote`, and `Review` modules. [GitHub-33531](https://github.com/magento/magento2/issues/33531)

<!--- magento/magento2/pull/32226-->

*  Added test for the scenario in which the **Append Comments** checkbox is unexpectedly unchecked. [GitHub-32381](https://github.com/magento/magento2/issues/32381)

#### New action groups

`AdminCheckOrderStatusInGridActionGroup` [GitHub-33747](https://github.com/magento/magento2/issues/33747)

`StorefrontSelectFirstShippingMethodActionGroup` [GitHub-33773](https://github.com/magento/magento2/issues/33773)

`AdminClickUpdateChangesOnCreateOrderPageActionGroup` [GitHub-33689](https://github.com/magento/magento2/issues/33689)

#### Action groups

Repetitive actions have been replaced with action groups in these tests:

`AdminAddBundleItemsTest` [GitHub-34312](https://github.com/magento/magento2/issues/34312)

`AdminConfigurableProductAddConfigurationTest` [GitHub-34511](https://github.com/magento/magento2/issues/34511)

`AdminConfigurableProductBulkUpdateTest` [GitHub-34435](https://github.com/magento/magento2/issues/34435)

`AdminConfigurableProductDisableAnOptionTest` [GitHub-34511](https://github.com/magento/magento2/issues/34511)

`AdminConfigurableProductOutOfStockAndDeleteCombinationTest` [GitHub-34316](https://github.com/magento/magento2/issues/34316)

`AdminConfigurableProductOutOfStockTestDeleteChildrenTest` [GitHub-34316](https://github.com/magento/magento2/issues/34316)

`AdminConfigurableProductRemoveAnOptionTest` [GitHub-34511](https://github.com/magento/magento2/issues/34511)

`AdminConfigurableProductRemoveConfigurationTest` [GitHub-34511](https://github.com/magento/magento2/issues/34511)

`AdminCreateAndEditSimpleProductSettingsTest` [GitHub-34435](https://github.com/magento/magento2/issues/34435)

`AdminCreateAndEditVirtualProductSettingsTest` [GitHub-34435](https://github.com/magento/magento2/issues/34435)

`AdminCreateInactiveFlatCategoryTest` [GitHub-34490](https://github.com/magento/magento2/issues/34490)

`AdminCreateInactiveInMenuFlatCategoryTest` [GitHub-34510](https://github.com/magento/magento2/issues/34510)

`AdminCreateDuplicateCategoryTest` [GitHub-34414](https://github.com/magento/magento2/issues/34414)

`AdminCreateDuplicateProductTest` [GitHub-34414](https://github.com/magento/magento2/issues/34414)

`AdminDeleteSimpleProductTest` [GitHub-33783](https://github.com/magento/magento2/issues/33783)

`AdminEditRelatedBundleProductTest` [GitHub-34313](https://github.com/magento/magento2/issues/34313)

`AdminMassDeleteBundleProductsTest` [GitHub-34313](https://github.com/magento/magento2/issues/34313)

`AdminNavigateMultipleUpSellProductsTest` [GitHub-34314](https://github.com/magento/magento2/issues/34314)

`AdminSimpleProductSetEditContentTest` [GitHub-34435](https://github.com/magento/magento2/issues/34435)

`AdminSimpleProductTypeSwitchingToConfigurableProductTest` [GitHub-33788](https://github.com/magento/magento2/issues/33788)

`AdminConfigurableProductTypeSwitchingToVirtualProductTest` [GitHub-33788](https://github.com/magento/magento2/issues/33788)

`AdminCreateConfigurableProductWithDisabledChildrenProductsTest` [GitHub-33775](https://github.com/magento/magento2/issues/33775)

`AdminUpdateFlatCategoryAndAddProductsTest` [GitHub-34490](https://github.com/magento/magento2/issues/34490)

`AdminUpdateTopCategoryUrlWithNoRedirectTest` [GitHub-33774](https://github.com/magento/magento2/issues/33774)

`AdminUpdateTopCategoryUrlWithRedirectTest` [GitHub-33774](https://github.com/magento/magento2/issues/33774)

`CreateProductAttributeEntityWithReservedKeysTest`[GitHub-34422](https://github.com/magento/magento2/issues/34422)

`EnableDisableBundleProductStatusTest` [GitHub-34313](https://github.com/magento/magento2/issues/34313)

`StorefrontCheckRefundGrandTotalActionGroup` [GitHub-34315](https://github.com/magento/magento2/issues/34315)

`StorefrontInactiveCatalogRuleTest` [GitHub-33556](https://github.com/magento/magento2/issues/33556)

`StorefrontConfigurableProductCantAddToCartTest` [GitHub-33786](https://github.com/magento/magento2/issues/33786)

`StorefrontConfigurableProductOptionsTest` [GitHub-33785](https://github.com/magento/magento2/issues/33785)

`StorefrontConfigurableProductCanAddToCartTest` [GitHub-33784](https://github.com/magento/magento2/issues/33784)

`StorefrontConfigurableProductGridViewTest` [GitHub-34311](https://github.com/magento/magento2/issues/34311)

`StorefrontConfigurableProductListViewTest` [GitHub-34311](https://github.com/magento/magento2/issues/34311)

`StorefrontProductNameWithHTMLEntitiesTest` [GitHub-33806](https://github.com/magento/magento2/issues/33806)

`StorefrontProductNameWithDoubleQuoteTest` [GitHub-32991](https://github.com/magento/magento2/issues/32991)

#### New tests

`StorefrontGiftMessageForOrderOnCheckoutCartPageTest` [GitHub-32821](https://github.com/magento/magento2/issues/32821)

StorefrontCaptchaCheckoutWithEnabledCaptchaTest [GitHub-32821](https://github.com/magento/magento2/issues/32821)
#### Refactored tests

`CaptchaWithDisabledGuestCheckoutTest` [GitHub-30828](https://github.com/magento/magento2/issues/30828)

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

 <!--- AC-1229-->

*  The Venmo payment option is now supported.

<!--- AC-1228-->

*  PayPal can now track by BN code.

<!--- AC-493-->

*  `bin/magento setup:upgrade` now runs as expected when upgrading from {{ site.data.var.ee }} 2.4.2-p1. Previously, {{ site.data.var.ee }} threw this error: `Unable to apply data patch Magento\Paypal\Setup\Patch\Data\UpdateBmltoPayLater for module Magento_Paypal`. [GitHub-33678](https://github.com/magento/magento2/issues/33678)

<!--- MC-42830-->

*  The correct store ID is now used to retrieve saved credit cards during Admin order placement. Stored credit cards are now displayed during order placement according to the website scope configuration setting. Previously, when an administrator tried to create an order for a customer from the Admin and selected the Stored Credit Cards method, no options were available for stored cards.

<!--- AC-344-->

*  Anomalies with PayPal Credit display of gift card amounts have been resolved. Previously, when PayPal Credit was enabled and multiple gift card amounts were configured, if a shopper changed the amount for the value of a gift card, the storefront did not update the amount for installment payments. This was a known issue in {{ site.data.var.ee }} 2.4.3.

#### PayPal

<!--- MC-42154-->

*  {{ site.data.var.ee }} no longer displays an error during checkout with the PayPal Express payment method. Previously, although the checkout process completed, {{ site.data.var.ee }} displayed this error: `Something went wrong`.

<!--- AC-722-->

*  PayPal Express now works as expected from the shopping cart. Previously, when you clicked the **PayPal** button to start express checkout from the cart, {{ site.data.var.ee }} threw this error:  `To check out, please sign in with your email address`. [GitHub-33445](https://github.com/magento/magento2/issues/33445)

### Performance

<!--- AC-705-->

*  Added an index to `magento_giftcardaccount.code` to improve performance.

<!--- MC-42158-->

*  Module list load execution time has improved.

<!--- MC-42570-->

*  Performance has improved for cart-and-checkout actions such as adding products to the cart in deployments with many (approximately 10,000) inventory sources.

<!--- AC-932-->

*  The performance of the Popular Search Term cache has improved. Previously, the larger the `search_query` table, the longer a search query took to complete. [GitHub-27559](https://github.com/magento/magento2/issues/27559)

<!--- MC-42892-->

*  {{ site.data.var.ee }} by default resizes images synchronously during product save. Merchants can now resize images as a background asynchronous process by minor edits to a `di.xml` file.

### Pricing

<!--- MC-42243-->

*  Price sorting now works as expected when product prices are close to or equal to zero and shared catalogs are enabled. Previously, zero tier prices were ignored during price re-indexing.

### ProductAlert

<!--- MC-41917-->

*  The new `product_alert` consumer improves the sending of customer alerts by creating queue messages, running the consumer, and improving execution time. Previously, {{ site.data.var.ee }} threw an out-of-memory exception when sending more than 100,000 product alerts. {{ site.data.var.ee }} also took more than 20 hours to send all alerts.

### Product video

<!--- MC-42105-->

*  {{ site.data.var.ee }} now enables the **Save** button and autocompletes fields when you enter an incomplete URL while adding a video (Admin **Catalog**  > **Products** > **Add Video**). Previously, the **Save** button was disabled, and fields were not populated.

### Return Merchandise Authorizations (RMA)

<!--- MC-42987-->

*  The Admin Create Return Product grid now displays tax, including prices only for products that are configured to display tax with prices. Previously, {{ site.data.var.ee }} did not check the configuration display settings on the `tax/calculation/price_includes_tax` flag.

### Reviews

*  The product list view now displays the correct starred rating for products. [GitHub-30196](https://github.com/magento/magento2/issues/30196)

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

*  The storefront now shows all sub-categories of the current category in layered navigation regardless of number of categories available in the catalog.

<!--- MC-41706-->

*  Elasticsearch catalog searches are now diacritic-insensitive. Previously, searches for terms without an accent resulted in different results than searches on the same term with an accent.

### Shipping

<!--- MC-42758-->

*  Shipment email now includes the tracking number for the current shipment only. Previously, when an order included several shipments, each shipment’s email included the tracking numbers from all shipments related to the order.

<!--- MC-42396-->

*  {{ site.data.var.ee }} now updates the mini cart successfully when a shopper deletes a product from their cart while in multi-shipping mode, then switches to a single shipping address. Previously, product prices were not updated as expected.

<!--- AC-267-->

*  Import of table rates now works as expected when using the S3 storage adapter. Previously, {{ site.data.var.ee }} displayed this error: `File "https://[bucket].s3.eu-central-1.amazonaws.com/[prefix]/tmp/phpLjGmHf" not found`. [GitHub-33072](https://github.com/magento/magento2/issues/33072)

<!--- magento/magento2/pull/33232-->

*  You can now disable shipment update emails as expected from **Stores**  > **Configuration**  >  **Sales**  >  **Sales Emails**. [GitHub-33165](https://github.com/magento/magento2/issues/33165)

### Staging

<!--- MC-42194 --->

*  Product scheduled update images and videos are now correctly saved. Previously, videos, URLs, titles, and descriptions were removed after creating a new scheduled update.

<!--- MC-42501-->

*  {{ site.data.var.ee }} now displays the Minimum Advertised Price attribute in the Schedule New Update form for the store views for which the attribute is enabled.

<!--- MC-42590-->

*  {{ site.data.var.ee }} now displays only one Images tab in the product Scheduled Update form as expected. Previously, {{ site.data.var.ee }} duplicated this tab.

<!--- MC-23994-->

*  Product stock status is now displayed correctly in Schedule Update previews. Previously, product status was displayed as out-of-stock when a previously disabled product was enabled during creation of the Schedule Update.

### Store

<!--- MC-42884-->

*  The Login as Customer feature now works as expected in deployments that contain multiple stores on different URLs. Previously, {{ site.data.var.ee }} did not load the correct store, even when accessing the correct store domain.

### Tax

<!--- MC-41924-->

*  {{ site.data.var.ee }} now correctly calculates the mini cart subtotal when a customer deletes an item after selecting shipping to multiple addresses.

<!--- MC-41945-->

*  {{ site.data.var.ee }} now shows the same tax rate on all checkout pages when the shopping cart contains only virtual products.

<!--- AC-714-->

*  Tier prices for configurable products now display accurate included and excluded tax values on the storefront. Previously, the same values were displayed for both included and excluded taxes. [GitHub-33673}( https://github.com/magento/magento2/issues/33673)

### Test

<!--- magento/magento2/pull/34454-->

*  Unit tests are now compatible with PHP 8.1. [GitHub-34441](https://github.com/magento/magento2/issues/34441)

<!--- magento/magento2/pull/34575-->

*  Integration tests are now compatible with PHP 8.1. [GitHub-34568](https://github.com/magento/magento2/issues/34568)

<!--- AC-1225-->

*  Merchants can now test the shopper experience of the country in which the shopper is located, rather than the merchant’s location.

<!--- MC-41955-->

*  Added a test to verify custom date attribute format for storefront and Admin.

<!--- AC-1517-->

*  Corrected errors with `StorefrontPOWorkflowVerifyApprovalFlowTabTest`. [GitHub-34378](https://github.com/magento/magento2/issues/34378)

<!--- AC-1571-->

*  Functional tests have been stabilized for PHP 8.x compatibility. [GitHub-34327](https://github.com/magento/magento2/issues/34327), [GitHub-34188](https://github.com/magento/magento2/issues/34188)

<!--- MC-41836-->

*  The API functional tests (`install-config-mysql` file template) have been updated with required Elasticsearch parameters. [GitHub-31019](https://github.com/magento/magento2/issues/31019)

<!--- AC-1207-->

*  Fixed errors that resulted in false positive static tests.  [GitHub-34056](https://github.com/magento/magento2/issues/34056)

<!--- magento/magento2/pull/34300-->

*  Test coverage has been updated for `call_user_func_array`. [GitHub-34301](https://github.com/magento/magento2/issues/34301)

<!--- AC-1978-->

*  The `Magento\GraphQl\CatalogGraphQl\ProductSearchTest` test no longer throws this error when run with AWS Elasticsearch: `Magento\GraphQl\CatalogGraphQl\ProductSearchTest::testSearchSuggestions Failed asserting that an array is not empty. /var/www/html/dev/tests/api-functional/testsuite/Magento/GraphQl/CatalogGraphQl/ProductSearchTest.php:94 /var/www/html/dev/tests/api-functional/framework/Magento/TestFramework/TestCase/GraphQlAbstract.php:257`.

<!--- magento/magento2/pull/33762-->

*  Updated the `phpunit/phpunit` Composer dependency to the latest version (v9.4.0). (Updating the `phpunit/phpunit` composer dependency to the latest version has eliminated integration test errors.)[GitHub-33761](https://github.com/magento/magento2/issues/33761), [GitHub-33596](https://github.com/magento/magento2/issues/33596), [GitHub-33708](https://github.com/magento/magento2/issues/33708), [GitHub-33707](https://github.com/magento/magento2/issues/33707)

<!--- magento/magento-coding-standard/pull/219-->

*  Updated `phpunit/ phpunit` to the latest version for the `magento-coding-standard` repository. GitHub-33622](https://github.com/magento/magento2/issues/33622)

<!--- magento/magento2/pull/34203-->

*  Fixed functional issues in WebAPI tests. [GitHub-34196](https://github.com/magento/magento2/issues/34196)

### Theme

<!--- MC-41887-->

*  Notification messages are now displayed correctly when {{ site.data.var.ee }} has a subpath configured in its base URL.

### Translations and locales

<!--- AC-285-->

*  The `UserExpiration` validator no longer fails with `de_DE` and `uk_UA` locales. Previously, {{ site.data.var.ee }} threw an error when an administrator tried to set an expiration date when creating a new user from the Admin with locales set to `de_DE` or `uk_UA`. [GitHub-32497](https://github.com/magento/magento2/issues/32497)

<!--- magento/magento2/pull/33787-->

*  Swiss region names are now consistently presented in English in the create or edit address forms. [GitHub-32602](https://github.com/magento/magento2/issues/32602)

<!--- magento/magento2/pull/33128-->

*  Updated `zip_codes.xml` patterns for Guernsey to support GY10 postcodes for the Island of Sark. [GitHub-33144](https://github.com/magento/magento2/issues/33144)

<!--- AC-1080-->

*  Added Belarus regions to the `directory_country_region` table. [GitHub-33924](https://github.com/magento/magento2/issues/33924)

<!--- AC-1178-->

*  Display anomalies with storefronts running the Filipino (Philippines) locales have been resolved. [GitHub-33996](https://github.com/magento/magento2/issues/33996)

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

<!--- magento/magento2/pull/33098-->

*  `.action-close` buttons now work as expected when `Multiselect` is used in a modal. Previously, the `action-close` button did not work because it inherited the CSS of the  `.action-close` button of the modal. [GitHub-27240](https://github.com/magento/magento2/issues/27240)

<!--- AC-1217-->

*  The Offers rich snippet is now present on the main price field in Product view. Previously, this snippet was missing from this field in related products block in Product view, which resulted in Google search results displaying incorrect prices. [GitHub-34063](https://github.com/magento/magento2/issues/34063)

<!--- AC-1584-->

*  Problems with modal height on devices running iOS have been resolved. [GitHub-34467](https://github.com/magento/magento2/issues/34467)

<!--- MC-40106-->

*  Actions dropdown menus are now positioned correctly throughout the storefront. [GitHub-31379](https://github.com/magento/magento2/issues/31379)

<!--- AC-1589-->

*  Accessibility errors with navigation on the cart and checkout pages have been resolved.[GitHub-34483](https://github.com/magento/magento2/issues/34483)

<!--- AC-1289-->

*  Screen readers can now read all relevant form elements on product pages.

<!--- AC-872-->

*  Storefront catalog product widget sort order (**Catalog** > **Category** > **Products**) now matches the order configured in the Admin. [GitHub-27126](https://github.com/magento/magento2/issues/27126)

<!--- AC-725-->

*  The region selector now works as expected on the Create an Account page. [GitHub-30099](https://github.com/magento/magento2/issues/30099)

<!--- MC-42750-->

*  The Admin customer grid now displays all customer data, including newly added  `date` custom attributes, as expected. Previously, {{ site.data.var.ee }} threw an error and did not display the Admin customer grid correctly when the `date` attribute set was set as a column.

<!--- AC-1277-->

*  Contrast has been improved for image delete and move icon buttons throughout the storefront to improve readability for low vision users.

<!--- AC-1279-->

*  Textual alternatives have been added to the pencil icon that appears when a merchant edits input for the Search Engine Optimization accordion.

<!--- AC-1280-->

*  Input labels on the **Catalog**  >  **Product** details page have been changed to accurately reflect the purpose of the input. Fields for which user input is not required no longer display labels with an asterisk.

<!--- AC-1272-->

*  The magnifying glass icon that is used to execute searches throughout the product interface has been assigned an accessible name and textual alternative.

<!--- AC-1275-->

*  The rich text editor toolbar can now be accessed using the Tab key.

<!--- AC-1283-->

*  The **This item has weight** select input on the **Catalog** > **Product** details page now has visible labels and an accessible name.

<!--- AC-1284-->

*  The accessible name of the control now includes the text of its visible label for the number of items per page dropdown.

<!--- AC-1287-->

*  The table controls on the **Catalog** > **Product** details page now have visible labels and an accessible name when the table is collapsed.

<!--- AC-1288-->

*  Edit links in the Products table now have unique, meaningful link text.

<!--- AC-1276-->

*  The triggers that expands tooltips now provide textual names.

<!--- AC-1285-->

*  Buttons throughout the storefront now have unique, descriptive accessible names. Previously, split buttons with a text button and an adjacent down arrow icon button had the same accessible name.

<!--- AC-1286-->

*  The product page **New View** text input field now has an accessible name.

<!--- AC-1168-->

*  Added a **Today** view option to the Admin Orders and Amounts dashboard charts to provide a summary of sales and orders throughout the day. [GitHub-34008](https://github.com/magento/magento2/issues/34008)

### Web API framework

<!--- MC-42008-->

*  Web API requests for self-authorized customer resources no longer throw authorization errors when persistent shopping cart is enabled.

<!--- MC-42313-->

*  You can now create objects using the child classes of `\Magento\Framework\Api\AbstractSimpleObjectBuilder` on PHP 7.3. Previously, `preg_match` threw this warning message when {{ site.data.var.ee }} was hosted on Redhat with PHP 7.3: `Warning: preg_match(): Compilation failed: unrecognized character follows...`.

<!--- MC-24548-->

*  The totals retrieved by the `PUT /V1/guest-carts/:cartId/collect-totals` request are now updated by the correct `shippingMethod.` [GitHub-18508](https://github.com/magento/magento2/issues/18508)

<!--- MC-42399-->

*  `GET /V1/company/:id` now returns `is_purchase_order_enabled` attribute values as expected.

<!--- AC-786-->

*  Adding a new deserializer to the REST API no longer removes other deserializers. Previously, the REST API accepted a new content type, but CORE defined content types for APIs  no longer worked and returned a 400 error.  [GitHub-26433](https://github.com/magento/magento2/issues/26433)

### Wish list

<!--- MC-41880-->

*  {{ site.data.var.ee }} no longer renders a wish list in the category sidebar when the **Show In Sidebar** wish list option is disabled. Previously, {{ site.data.var.ee }} ignored this option.

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).
