---
group: release-notes
title: Magento Open Source 2.4.4 Release Notes
---

{{ site.data.var.ce }} 2.4.4 introduces support for PHP 8.1. All project libraries and dependencies have been updated for compatibility with PHP 8.1. Core Composer dependencies and third-party libraries have also been upgraded to the latest versions that are compatible with PHP 8.1. This release also provides support for OpenSearch 1.2.

This release includes almost 250 quality fixes and enhancements.

{:.bs-callout-info}
Thanks to our partner [Atwix](https://www.atwix.com/) for their substantial contributions to making our 2.4.4 framework compatible with PHP 8.1.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ce }} 2.4.4 contains backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Other release information

Although code for these features is bundled with quarterly releases of the {{ site.data.var.ce }} core code, several of these projects are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

{:.bs-callout-info}
All vendor-bundled extensions, with the exception of Braintree, have been removed from {{ site.data.var.ce }} 2.4.4.

### Hotfixes included in this release

{{ site.data.var.ce }} 2.4.4 includes resolution of all issues that were addressed by the following hotfixes, which were provided for {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.3, 2.4.3-p1, and 2.3.7-p2:

*  The vulnerability addressed by `MDVA-43395_EE_2.4.3-p1_COMPOSER_v1.patch` and `MDVA-43443_EE_2.4.3-p1_COMPOSER_v1.patch` has been resolved in this release.

*  `AC-384_Fix_Incompatible_PHP_Method__2.4.3_ce.patch`. This patch addresses a fatal PHP error that occurred during upgrade. See the [Adobe Commerce upgrade 2.4.3, 2.3.7-p1 PHP Fatal error Hotfix](https://support.magento.com/hc/en-us/articles/4408021533069-Adobe-Commerce-upgrade-2-4-3-2-3-7-p1-PHP-Fatal-error-Hotfix) Knowledge Base article.

## {{ site.data.var.ce }} 2.4.4 highlights

Look for the following highlights in this release.

### Security enhancements

This release includes one security fix and platform security improvements. This security fix has been backported to {{ site.data.var.ce }} 2.4.3-p2 and {{ site.data.var.ce }} 2.3.7-p3.

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts:

*  IP allowlisting
*  [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html)
*  use of a VPN
*  use of a unique location rather than `/admin`
*  good password hygiene

See [Adobe Security Bulletin](https://helpx.adobe.com/security.html) for the latest discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  Email variable usage was deprecated back in 2.3.4 as part of a security risk mitigation in favor of a more strict variable syntax. This legacy behavior has been fully removed in this release as a continuation of that security risk mitigation.

   As a result, email or newsletter templates that worked in previous versions of Magento may not work correctly after upgrading to {{ site.data.var.ee }} 2.4.4 or {{ site.data.var.ce }} 2.4.4. Affected templates include admin overrides, themes, child themes, and templates from custom modules or third-party extensions. Your deployment may still be affected even after using the [Upgrade compatibility tool](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/upgrade-compatibility-tool/overview.html?lang=en) to fix deprecated usages. See [Migrating custom email templates]({{page.baseurl}}/frontend-dev-guide/templates/template-email-migration.html) for information about potential effects and guidelines for migrating affected templates.

*  Integration tokens can no longer be used for API Bearer token authentication. Previously, an integration token could be used as a standalone key for token-based authentication. However, this behavior has been disabled by default due to the security implications of a never-expiring access token. The previous behavior can be enabled through the command line or Admin. See [Token-based authentication](https://devdocs.magento.com/guides/v2.4/get-started/authentication/gs-authentication-token.html). <!--- AC-1619--->

*  Session IDs are no longer stored in the database. <!--- AC-522-->

*  OAuth access tokens and password reset tokens are now encrypted when stored in the database. <!--- AC-520 1323-->

*  Validation has been strengthened to prevent the upload of non alpha-numeric file extensions. <!--- AC-479-->

*  Added reCAPTCHA support to coupon codes. <!--- AC-461-->

*  Swagger is now disabled by default when {{ site.data.var.ce }} is in production mode. <!--- AC-1450-->

*  HTTPS is now enabled by default for the {{ site.data.var.ce }} storefront. The **Use Secure URLs on Storefront** and **Use Secure URLs in Admin** settings are enabled by default, and all built-in cookies are now set as secure.  <!--- AC-1173-->

*  The dependency confusion plugin is now required for all {{ site.data.var.ce }} installations. Previously, this plugin was required for Composer-based installations only. It now permits trusted versions. Merchants can bypass the constraints set in this plugin that prohibit certain combinations of Composer installations. The constraints can be bypassed for trusted versions, and {{ site.data.var.ce }} now displays a warning before proceeding with installation.  <!--- AC-501 970-->

*  Developers can now configure the limit on the size of arrays accepted by {{ site.data.var.ce }} RESTful endpoints on a per-endpoint basis. See [API security](https://devdocs.magento.com/guides/v2.4/get-started/api-security.html). <!--- AC-465-->

*  Added mechanisms for limiting the size and number of resources that a user can request through a web API on a system-wide basis, and for overriding the defaults on individual modules. This resolves the issue addressed by `MC-43048__set_rate_limits__2.4.3.patch`. See [API security](https://devdocs.magento.com/guides/v2.4/get-started/api-security.html). <!--- AC-1120-->

### Platform enhancements

{{ site.data.var.ce }} 2.4.4 now supports PHP 8.1. All project libraries and dependencies have been updated for compatibility with PHP 8.1. Additional platform enhancements include:

*  {{ site.data.var.ce }} 2.4.4 provides support for Elasticsearch 7.16 and OpenSearch 1.2. {{ site.data.var.ce }} merchants with deployments hosted on-premises can use either solution. However, OpenSearch is now the default search engine for {{ site.data.var.ce }} 2.4.4 deployments hosted in the cloud. All customers with cloud deployments who upgrade to version 2.4.4 must use OpenSearch. See [Switching to OpenSearch for Adobe Commerce on Cloud 2.4.4](https://support.magento.com/hc/en-us/articles/4419942355725-Switching-to-OpenSearch-for-Adobe-Commerce-on-Cloud-2-4-4)

*  The `JQuery` library has been upgraded to version 3.6. The `jquery-ui` library has been upgraded to version 1.13.0. Several other JavaScript libraries have been updated to the latest versions.

*  TinyMCE 5.8.1 is now supported. TinyMCE 4 has been removed from the codebase. <!--- AC-41-->

*  The `RequireJS` library has been upgraded to the latest version (v2.3.6). [GitHub-33672](https://github.com/magento/magento2/issues/33672) <!--- AC-40 422-->

*  PHPUnit has been upgraded to the latest version (9.5.x). Tests and test frameworks have been updated to be compatible with the new version. <!--- AC-404-->

*  Most Laminas dependencies have been upgraded to the latest versions that are compatible with PHP 8.1. Three Laminas dependencies were removed from the codebase to reduce the number of dependencies.

#### jQuery UI upgrade

jQuery UI has been upgraded to the latest version (v1.13.0). The following v1.10.0 jQuery components have been removed:

*  `ajaxOptions` and `cache` options for tabs. See [Tabs](https://jqueryui.com/changelog/1.10.0/#tabs).

*  `.zIndex()`. jQuery UI v1.12.1 includes `jquery/z-index.js`, which supports the use of `.zIndex()`. See [UI Core](https://jqueryui.com/changelog/1.12.0/#ui-core).

*  Data fallbacks for widget names. You must use the full name for the `.data()` key.

*  Hard coding of classes such as `ui-corner-all` in widgets.

### GraphQL

This release includes these GraphQL enhancements:

*  **Performance improvements**:

   *  The performance of GraphQL cart operations has improved. The `collectQuoteTotals()` method is now called only once during a GraphQL request, which reduces response time. <!--- PWA-2110-->

   *  Storefront performance has been improved by changes to how GraphQL requests are cached. Fastly and Varnish now cache GraphQL requests sent with `auth` tokens. <!--- PWA-1817-->

*  **New storefront-related Admin configuration settings**. The `storeConfig` query now returns the configuration settings for the Zero Subtotal Checkout and Check/Money Order payment methods. <!--- PWA-1576-->

*  **Updated core GraphQL library**. The `webonyx` library, which enables core GraphQL to function, has been upgraded to version ^14.9. <!--- PWA-2137 2184 -->

*  **Fixed translation issues in GraphQL with multi-site and multi-language stores**. The GraphQL resolver now returns translated strings based on store scope as expected. <!--- PWA-1946-->

*  GraphQL now provides New Relic with descriptive transaction names, which can be helpful for debugging. [GitHub-30915](https://github.com/magento/magento2/issues/30915) <!--- PWA-1311-->

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### Vendor-Bundled Extensions

With the exception of [Braintree](https://docs.magento.com/user-guide/payment/braintree.html), all vendor-bundled extensions have been removed from the {{ site.data.var.ce }} 2.4.4 code base. Merchants should migrate to the official extensions, which are available on the [Commerce Marketplace](https://marketplace.magento.com/extensions.html).

[Amazon Pay](https://docs.magento.com/user-guide/payment/payments.html)

[dotdigital](https://docs.magento.com/user-guide/marketing/communications.html)

[Klarna](https://docs.magento.com/user-guide/payment/payments.html)

[Vertex](https://docs.magento.com/user-guide/tax/taxes.html)

[YotPo](https://docs.magento.com/user-guide/marketing/product-reviews.html)

### PayPal Payment enhancements

*  The Venmo payment option is now supported.  <!--- AC-1229-->

*  Pay Later has been added as an option for shoppers based on the shopper's location, not the merchant’s location.

*  Merchants can now set the shopper country when testing the shopper experience in their country of choice. Previously, tests were limited to testing only for the country in which the merchant is located. This change is valid in sandbox mode only.

*  Messaging on the checkout page now displays accurate messaging on how much and in how many increments shopper will be expected to pay when using Pay Later.

### Accessibility updates

This release brings enhanced conformance to standard accessibility guidelines. It includes improved tooltips, accessible naming and tagging of screen elements, and redesigned icons and buttons. Over 80% of these fixes help improve the shopping experience for users Without Vision or Limited Vision.

### Page Builder

Merchants can now add alternative text (`alt_text`) to images (Image, Banner, Slide) to enhance content accessibility. [GitHub-746](https://github.com/magento/magento2-page-builder/issues/746) <!--- PB-1193-->

## Fixed issues

We are fixing hundreds of issues in the {{ site.data.var.ce }} 2.4.4 core code. A subset of those fixed issues is described below.

### Installation, upgrade, deployment

<!--- MC-42026-->

*  {{ site.data.var.ce }} now logs static content deployment errors in build log files as expected.

<!--- MC-43094-->

*  Data patches can no longer ignore a table’s unique constraints and insert duplicate values into a MySQL database table. Previously, patches could insert duplicate values, which corrupted the database.

<!--- AC-1480-->

*  Merchants can now successfully upgrade from an {{ site.data.var.ce }} 2.4.2 deployment with Klarna to {{ site.data.var.ce }} 2.4.3. [GitHub-33760](https://github.com/magento/magento2/issues/33760)

### Accessibility

<!--- AC-1589-->

*  Accessibility errors with navigation on the cart and checkout pages have been resolved. [GitHub-34483](https://github.com/magento/magento2/issues/34483)

<!--- AC-1289-->

*  Screen readers can now read all relevant form elements on product pages.

<!--- AC-1277-->

*  Contrast has been improved for image delete and move icon buttons throughout the storefront to improve readability for low vision users.

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

<!--- AC-1277-->

*  Contrast has been improved for image delete and move icon buttons throughout the storefront to improve readability for low vision users.

<!--- AC-1279-->

*  Textual alternatives have been added to the pencil icon that appears when a merchant edits input for the Search Engine Optimization accordion.

<!--- AC-1272-->

*  The magnifying glass icon that is used to execute searches throughout the product interface has been assigned an accessible name and textual alternative.

<!--- AC-1286-->

*  The product page **New View** text input field now has an accessible name.

<!--- AC-1283-->

*  The **This item has weight** select input on the **Catalog** > **Product** details page now has visible labels and an accessible name.

### Backend

<!--- MC-43161-->

*  Administrators can now log in to the Admin in a deployment for which a custom Admin path is configured and secret key is enabled. Previously, {{ site.data.var.ce }} displayed this error: `Invalid security or form key. Please refresh the page`.

### Bundle products

<!--- MC-42885-->

*  Shoppers can now add a bundle product with Fixed Product Tax and two options to their shopping cart. Previously, {{ site.data.var.ce }} did not add the product and displayed this error: `We can’t add this item to your shopping cart right now`.

<!--- MC-42249-->

*  Form validation in the form of the `data-validate` and `min` attributes has been added to the cart quantity field to prevent negative values for bundle products.

<!--- MC-41794-->

*  The `products` query now filters bundle products correctly when child products are disabled on the store-view level. Previously, the query returned child products that were disabled at the store-view level.

<!--- MC-42811-->

*  `cron` now clears the product category cache as expected during `indexer_update_all_views` execution. Previously, {{ site.data.var.ce }} displayed an incorrect product count on the category page after the mass update of many products in the category.

<!--- MC-42811-->

*  {{ site.data.var.ce }} now updates the category product cache as expected when a bundle product reappears in stock.

<!--- AC-715-->

*  Currency conversion now occurs as expected in email confirmations for bundle product purchases in multi-store deployments that use different currencies. [GitHub-33426](https://github.com/magento/magento2/issues/33426)

### Cache

<!--- MC-42811-->

*  The cache cleaning algorithm that runs during re-indexing has been optimized. Bundle products are now displayed as expected when a category is cached during re-indexing. Previously, bundle products were not displayed for hours after product categories were cached during re-indexing.

<!--- AC-328-->

*  Page cache no longer grows rapidly under typical use. [GitHub-9458](https://github.com/magento/magento2/issues/9458)

<!--- magento/magento2/pull/33468-->

*  Placing an order no longer results in the removal of all cache tags that are related to the ordered products from the Varnish cache. [GitHub-30128](https://github.com/magento/magento2/issues/30128)

<!--- AC-1478-->

*  Full-site page cache is no longer wiped out when you update a product from top categories or run an index to update product attributes or stock status. Previously, Varnish cache added top menu category IDs to all page cache tags. [GitHub-33465](https://github.com/magento/magento2/issues/33465)

### Cart and checkout

<!--- MC-41494-->

*  The Minimum Advertised Price **What's this?** link on the cart page is now clickable and opens the information popup as expected. Previously, clicking this link had no effect.

<!--- MC-42639-->

*  Shoppers can now place orders without errors after a session timeout in deployments where persistent shopping cart is enabled. Previously, {{ site.data.var.ce }} displayed a payment error after a session timeout.

<!--- MC-42638-->

*  Assigning a high sort order value to a customer address attribute no longer causes performance degradation on the checkout page.

<!--- MC-42813-->

*  {{ site.data.var.ce }} now reverts the shopping cart product quantity to the previous value if the updated quantity is invalid.

<!--- MC-42347-->

*  Clicking the **Add to Cart** button in the Recently Viewed section now redirects as expected to the product details page. Previously, shoppers were redirected to the product listing page.

<!--- MC-33705-->

*  Guest shoppers can now successfully check out with a customer address that contains several types of custom customer address attributes. Previously, values for custom attributes were not properly formatted when displayed during checkout. [GitHub-30290](https://github.com/magento/magento2/issues/30290)

<!--- MC-24379-->

*  {{ site.data.var.ce }} now correctly applies the free shipping threshold to orders when table rates are enabled. [GitHub-21832](https://github.com/magento/magento2/issues/21832)

<!--- AC-271-->

*  You can now use `POST /V1/guest-carts/:cartId/items` to add simple products with different options to a cart. Previously, this call changed the quantity of the first simple product you added instead of adding a second simple product with the specified options. [GitHub-32302](https://github.com/magento/magento2/issues/32302)

<!--- AC-1089-->

*  The Order Summary section of the checkout page now displays the correct currency and amount when a deployment is configured for `Poland` country and `PLN` currency. Previously, the shopping cart and checkout page displayed the amount **PLN 0**.

<!--- MC-32805-->

*  {{ site.data.var.ce }} no longer throws an error when a shopper clicks **Update Cart** after changing  a product quantity in the mini cart. Previously, {{ site.data.var.ce }} displayed this error:  `The quote item isn't found. Verify the item and try again`.

<!--- MC-43176-->

*  GraphQL `products` queries for configurable products in a specific store now return the price ranges of products on the specified store only. Previously, requests returned price ranges for simple products on non-specified stores.

<!--- AC-691-->

*  {{ site.data.var.ce }} no longer throws this error when a shopper adds a billing address that is missing a street field: `Uncaught TypeError: Unable to process binding "text: function(){return currentBillingAddress().street.join(', ') }”`. [GitHub-33826](https://github.com/magento/magento2/issues/33826)

<!--- AC-1625-->

*  {{ site.data.var.ce }} no longer throws a console error during checkout in stores from which the mini cart has been removed. [GitHub-34513](https://github.com/magento/magento2/issues/34513)

<!--- AC-691-->

*  Checkout no longer fails at the payment stage when the billing address is missing street field values or the street field value is not an array. Previously, checkout failed with this error: `Uncaught TypeError: Unable to process binding "text: function(){return currentBillingAddress().street.join(', ') }”`. [GitHub-33826](https://github.com/magento/magento2/issues/33826)

### Catalog

<!--- MC-41796-->

*  {{ site.data.var.ce }} no longer throws an exception when performing a mass attribute update action on the product grid when a product has a `datetime` attribute.

<!--- MC-42571-->

*  GraphQL queries now return results for child products of a configurable product according to the visibility filter settings of the child product(s).

<!--- MC-41853-->

*  {{ site.data.var.ce }} no longer modifies related product prices when the configurable product attributes are changed. Previously, the Minimum Advertised Price (MAP) for a configurable product overwrote the price of related products on the store front.

<!--- MC-41796-->

*  {{ site.data.var.ce }} no longer throws an exception when performing a mass attribute update action on the product grid when a product has a `datetime` attribute.

<!--- MC-42132-->

*  Dropdown/multi-select attribute values for the Admin product grid and filters are now derived as expected from Admin settings. Previously, attribute values were derived from the default store settings.

<!--- MC-43010-->

*  GraphQL category queries return information about changes to staged categories as expected.

<!--- AC-711-->

*  Product lists are now accurately rendered in the Admin in deployments with products assigned to both a parent category and its subcategories but in different positions within each category. Previously, product list rendering failed with this error: `Item (Magento\Catalog\Model\Product\Interceptor) with the same ID "<ID>" already exists`. [GitHub-33145](https://github.com/magento/magento2/issues/33145

<!--- AC-1148-->

*  Multi-select attributes with many options (over 150) can now be assigned to new products. Previously, attribute options were saved in the `catalog_product_entity_varchar` table, and not all options were present when you reopened the product in the Admin. [GitHub-33486](https://github.com/magento/magento2/issues/33486)

### Catalog rule

<!--- MC-41807-->

*  Daily updates of catalog rules no longer result in performance degradation. Previously, partial catalog product price indexing did not remove old prices or dates.

<!--- MC-38263-->

*  {{ site.data.var.ce }} no longer removes catalog price rules on configurable products during partial re-indexing. Previously, only sub-products were re-indexed when configurable products were re-indexed.

### Configurable products

<!--- MC-42188-->

*  The configurable product option label name is now based on the selected store view during Admin order creation. Previously, {{ site.data.var.ce }} used the label name from the default store view.

<!--- MC-42187-->

*  Product lists now correctly include child products of an out-of-stock product when the global flag for displaying out-of-stock products is enabled. Previously, the product list did not include the child product if one one of several child product options were out-of-stock when this flag was enabled.

<!--- MC-42340-->

*  You can now use the `addConfigurableProductsToCart` mutation to add a configurable product to the cart on a non-default store view. Previously, you could not add a configurable product to a cart when website ID and store ID differed. [GitHub-30948](https://github.com/magento/magento2/issues/30948)

<!--- MC-43051-->

*  GraphQL `product` queries no longer return data about the disabled child products of configurable products.

### Customer

<!--- MC-24204-->

*  {{ site.data.var.ce }} now considers website scope for Admin locales during order creation. Previously, order details such as customer address attributes worked properly on one website only in a multi-site deployment. [GitHub-23254](https://github.com/magento/magento2/issues/23254)

### Email

<!--- MC-42592-->

*  Email field validation errors on the checkout login popup now match email validation errors on the customer login page when a customer tries to log in using an invalid email account.

<!--- MC-42764-->

*  {{ site.data.var.ce }} no longer includes an error message in the shipment details email when a shipment comment is added from Admin and the **Notify Customer** checkbox is activated. Previously, shipping confirmation emails included this message: `We're sorry, an error has occurred while generating this content`.

<!--- MC-42486-->

*  Region and country ID values are now properly converted in email templates. Previously, when you clicked on **Preview link** from the Admin email template, country and the region name were not displayed correctly.

<!--- MC-36262-->

*  Sales update emails sent from the Admin for non-default store views now contain correct order status labels. Previously, these emails always displayed status from the default store. [GitHub-29263](https://github.com/magento/magento2/issues/29263)

<!--- AC-721-->

*  {{ site.data.var.ce }} now includes `Content-Disposition: inline` headers in email as expected. [GitHub-29258](https://github.com/magento/magento2/issues/29258)

<!--- magento/magento2/pull/32720-->

*  Order and shipment notification emails now work as expected in deployments using Microsoft Outlook and MS Exchange Server. Previously, the email body was empty but contained an ATT*-labeled attachment. [GitHub-25076](https://github.com/magento/magento2/issues/25076)

### Frameworks

<!--- AC-515-->

*  Non-strict comparisons between numbers and non-numeric strings now work by casting the number to string and comparing the strings. Comparisons between numbers and numeric strings continue to work as before. This means that `0 == "not-a-number"` is now considered false. [GitHub-33780](https://github.com/magento/magento2/issues/33780)

<!--- AC-1338-->

*  The helper `Magento\Payment\Helper\Data` no longer creates new layouts in constructors. Previously, when this helper was used in custom commands without specifying an area code,  {{ site.data.var.ce }} threw an error. [GitHub-33908](https://github.com/magento/magento2/issues/33908)

<!--- AC-1068-->

*  Updated the `allure-framework/allure-php-api` Composer dependency.

<!--- MC-42091-->

*  {{ site.data.var.ce }} now returns a 500 response code when an exception occurs in the bootstrap file. Previously, {{ site.data.var.ce }} returned a 200 OK status code. [GitHub-22196](https://github.com/magento/magento2/issues/22196)

<!--- AC-1318-->

*  The currency symbol is now loaded as expected on storefront product details pages. Previously, this symbol sometimes disappeared after JavaScript page reloads.

<!--- AC-719-->

*  Updating `symfony/console` no longer causes a failure when running `bin/magento setup:di:compile`. [GitHub-33595](https://github.com/magento/magento2/issues/33595)

<!--- AC-1504-->

*  New required options have been added to the `.htaccess` and `nginx.conf` files that are distributed with {{ site.data.var.ce }} for PHP 8.x support. Outdated options have also been removed. [GitHub-34358](https://github.com/magento/magento2/issues/34358)

<!--- MC-42448-->

*  Merchants can now upload a video for multiple products. The file generation process now appends an extension to the file name only if the uploaded file name includes an extension. Previously, when a merchant tried to upload then save the same video for two different products, {{ site.data.var.ce }} threw this error: `Notice: Undefined index: extension in /app/7ha7zds7wvqys_stg/vendor/magento/framework/File/Uploader.php on line 699`. This occurred because {{ site.data.var.ce }} tried to append a file extension to the name irrespective of whether the uploaded file name had an extension.

<!--- magento/magento2/pull/34106-->

*  Corrected issues with `sprintf(__())` and `sprintf(Magento\Framework\Phrase())` construction for compatibility with PHP 8.x throughout the codebase. Previously, {{ site.data.var.ce }} threw this type of error: `Expected parameter of type 'string', 'Magento\Framework\Phrase' provided`. [GitHub-34085](https://github.com/magento/magento2/issues/34085)

<!--- AC-1605-->

<!--- MC-42934-->

*  Improved validation of the advanced search query parameters. [GitHub-33589](https://github.com/magento/magento2/issues/33589)

### General fixes

<!--- MC-42506-->

*  {{ site.data.var.ce }} now copies all product fields according to their defined scopes when duplicating a product. Previously, the **name** and **description** fields were reset to `global` scope.

<!--- MC-42612-->

*  {{ site.data.var.ce }} no longer applies delta rounding to a discount when the product price is 0. Previously, {{ site.data.var.ce }} calculated a negative discount amount.

<!--- MC-42215-->

*  Products with a **Set as New** attribute that is assigned an empty start date and an expired end date can now be successfully saved. Previously, {{ site.data.var.ce }} threw this error when you saved a product with these settings: `Make sure the To Date is later than or the same as the From Date`.

<!--- MC-42775-->

*  Administrators can now retry operations that have been running over the maximum processing time. The default maximum is 12 hours.

<!--- MC-42514-->

*  Broken pipe errors no longer occur during bulk action processing due to unacknowledged messages for the consumer. A prefetch count property now limits these messages for the consumer and avoids errors. Previously, running `bin/magento queue:consumers:start async.operations.all` generated this error:  `Broken pipe or closed connection`.

<!--- MC-42075-->

*  Shoppers are now redirected back to the login page as expected after a second failed login attempt. Previously, shoppers were redirected to a 404 page after a second unsuccessful login attempt. [GitHub-32885](https://github.com/magento/magento2/issues/32885)

<!--- magento/magento2/pull/25279-->

*  Password reset token validity has been extended to avoid the occurrence of a race condition during submission of the password change page. [GitHub-29647](https://github.com/magento/magento2/issues/29647)

<!--- AC-1316-->

*  Permissions that are assigned to new integrations are now respected. [GitHub-33347](https://github.com/magento/magento2/issues/33347)

<!--- AC-1328-->

*  Corrected regression issue that affected messages left in the exception logs for the Contact Us form. [GitHub-34483](https://github.com/magento/magento2/issues/34483)

<!--- magento/magento2/pull/31654-->

*  Resolved multiple issues with JavaScript loading of customer data. [GitHub-30498](https://github.com/magento/magento2/issues/30498)

<!--- magento/magento2/pull/33324-->

*  Using `QuoteIdToMaskedQuoteId` in an extension no longer significantly increases response time. [GitHub-33676](https://github.com/magento/magento2/issues/33676)

<!--- AC-720-->

*  The class `BundleDiscountPrice` in `magento2/app/code/Magento/Bundle/Pricing/Price/ConfiguredPrice.php` is now declared as expected. Previously, {{ site.data.var.ce }} threw this error: `Class Magento\Bundle\Pricing\Price\BundleDiscountPrice not found`. [GitHub-33334](https://github.com/magento/magento2/issues/33334)

<!--- AC-1239-->

*  Escaped CSV field values written by the AWS S3 adapter now match the data written by other file system adapters.

<!--- MC-43046-->

*  S3 compatible storage is now supported. [GitHub-32114](https://github.com/magento/magento2/issues/32114)

### GraphQL

<!--- PWA-1938-->

*  The `generateCustomerToken` and `revokeCustomerToken` mutations now provide the correct cache ID for the user state. Previously, these mutations used an invalid `x-magento-cache-id`, which degraded performance.

<!--- PWA-1506-->

*  The `setBillingAddressToCart` mutation now correctly uses the `same_as_shipping` parameter to set the billing address to match the shipping address as expected. Previously, {{ site.data.var.ce }} displayed this error: `The shipping method is missing. Select the shipping method and try again`. [GitHub-30924](https://github.com/magento/magento2/issues/30924)

<!--- PWA-1980-->

*  GraphQL cart operations now calculate cart grand totals only when the query requests it. Previously, cart operations always calculated the grand total, which is a resource-intensive operation.

<!--- MC-42781-->

*  The `addProductsToCart` mutation now adds to the cart only products that are assigned to the store that is defined in the header.

<!--- MC-42783-->

*  `products` queries using layered navigation filters now return correct child category lists. [GitHub-33387](https://github.com/magento/magento2/issues/33387)

<!--- MC-42831-->

*  Queries and mutations that return the `ConfigurableCartItem` object contain information about configured variants as expected.

<!--- MC-42082-->

*  The `products` query now returns configuration product option values and variant attribute values. Previously, these values were empty in query responses.

<!--- MC-41794-->

*  The `products` query now filters bundle products correctly when child products are disabled on the store-view level. Previously, the query returned child products that were disabled at the store-view level.

<!--- MC-42903-->

*  The `setShippingAddressesOnCart` mutation now supports setting shipping addresses on a shopping cart with an empty telephone number value when the **Show Telephone** Admin configuration setting is set to optional. Previously, {{ site.data.var.ce }} threw this error: `Field CartAddressInput.telephone of required type String! was not provided`.

<!--- MC-42970-->

*  Corrected an issue where the `addSimpleProductsToCart` mutation allowed you to add simple products to a cart that are not assigned to the target website.

<!--- MC-42600-->

*  MySQL queries have been optimized for GraphQL `products` queries that use search parameters to refine search results.

<!--- MC-43189-->

*  The `addConfigurableProductToCart` mutation no longer supports adding a product to a cart if the product is not included in the requested scope.

<!--- MC-42666-->

*  The `products` query  now returns only configurable variants that are assigned to the requested storeview. Previously, all variants of the requested configurable product were returned.

<!--- MC-42652-->

*  `addSimpleProductsToCart` requests can now run successfully in parallel. Previously, multiple requests for the same SKU created duplicate line items for the same cart ID rather than increasing the product quantity as expected.

<!--- AC-856-->

*  The `addProductsToCompareList` mutation can now be used to compare variants of configurable products.

<!--- MC-42443-->

*  When the price of a tier product is updated from the backend, the new price is updated correctly on the customer's cart. Previously, although the subtotal in the cart summary section was updated correctly, the row subtotal was not updated.

<!--- AC-697-->

*  The `addProductsToCart` mutation now adds all selected options to the cart when used to add bundle products with multiple selection options. Previously, the mutation added only the last selection. [GitHub-33123](https://github.com/magento/magento2/issues/33123)

<!--- MC-38815-->

*  GraphQL queries now return billing address as expected when the value of an optional telephone field is set to an empty string. Previously, queries returned a null address value. [GitHub-30218](https://github.com/magento/magento2/issues/30218)

### Image

<!--- MC-42080-->

*  Watermark images with transparent backgrounds no longer have a white background on the transparent product image that it overlays. Previously, when both the watermark image and product image had a transparent background, the watermark was displayed with a white background.

<!--- AC-1240-->

*  Logos for invoices and shipping receipts are now uploaded and displayed as expected when AWS S3 is enabled.

<!--- MC-42160-->

*  The media tag associated with an image added to a CMS page in a deployment where the Admin is set to a different domain than the store URL now contains store URLs as expected. Previously, media tags contained static Admin URLs instead of the expected store URLs. [GitHub-32930](https://github.com/magento/magento2/issues/32930)

### Import/export

<!--- AC-1486-->

*  `bin/magento remote-storage:sync` no longer fails when filenames are similar but differ by only one or two characters. Previously, the first image was stored correctly, but the second, similarly named image triggered a sync failure and this error: `Notice: Undefined index: media/catalog/product/5/_ in /src/vendor/magento/module-remote-storage/Driver/Adapter/Cache/Generic.php on line 197`. [GitHub-34337](https://github.com/magento/magento2/issues/34337)

<!--- MC-41672 23734-->

*  {{ site.data.var.ce }} now converts the timestamp in the export filename to the user’s timezone after a scheduled export. Previously, these values were not converted, and {{ site.data.var.ce }} displayed the UTC timestamp.

<!--- MC-42330-->

*  {{ site.data.var.ce }} no longer creates duplicate images in remote storage when the same CSV file is imported more than once.

<!--- AC-1045-->

*  Import no longer fails with this message: `Import failed: Area code not set: Area code must be set before starting a session`. [GitHub-16171](https://github.com/magento/magento2/issues/16171)

<!--- AC-988-->

*  You can now import successfully after running `bin/magento app:config:dump` and manually editing `config.php`. [GitHub-31428](https://github.com/magento/magento2/issues/31428)

<!--- MC-41672-->

*  Non-default multiple value separators can now be used in custom multi-select attributes. Previously, validation failed during import. [GitHub-23156](https://github.com/magento/magento2/issues/23156)

### Index

<!--- MC-42791-->

*  {{ site.data.var.ce }} now displays products as expected on the storefront after re-indexing. Previously, when the first 500 products being re-indexed were in stock, and the next 500 products were out of stock, the storefront did not display any additional products.

<!--- magento/magento2/pull/27212-->

*  Resolved consistency issues in merged `indexer.xml` files. The allowed values in `classType` are now the same in unmerged and merged `indexer.xml` files. [GitHub-29609](https://github.com/magento/magento2/issues/29609)

### Infrastructure

<!--- AC-1172-->

*  The unsupported `str_contains` method has been replaced with a supported function. This was a known issue for Magento 2.4.3. [GitHub-33680](https://github.com/magento/magento2/issues/33680)

<!--- magento/partners-magento2ee/pull/573-->

*  Refactored the codebase to correct usage of the keyword `match`, which is a reserved keyword in PHP 8.x. [GitHub-33626](https://github.com/magento/magento2/issues/33626)

*  HTML tags are now nested and closed properly to meet standards in JQuery 3.5.x for non-void elements including custom elements. <!--- AC-1942-->

<!--- magento/magento2/pull/34234)-->

*  Fixed `abs()` and `round()` functions for compatibility with PHP7.x and PHP8.x.  [GitHub-34322](https://github.com/magento/magento2/issues/34322)

<!--- AC-719-->

*  Updating `symfony/console` no longer causes failure when running `bin/magento setup:di:compile`. [GitHub-33595 ](https://github.com/magento/magento2/issues/33595)

<!--- magento/magento2/pull/34175-->

*  Corrected the restriction for the `colinmollenhour/cache-backend-redis` Composer dependency. [GitHub-34177](https://github.com/magento/magento2/issues/34177)

<!--- magento/magento2/pull/33932 magento/magento2/pull/33992-->

*  The codebase has been refactored to remove calls to deprecated methods of `phpunit/phpunit`. [GitHub-33916](https://github.com/magento/magento2/issues/33916)

<!--- MC-42960-->

*  {{ site.data.var.ce }} now displays an informative error when an administrator with a read-only `pubs/media` tries to access the product details page for a product that includes images. Previously, {{ site.data.var.ce }} threw a PHP error. [GitHub-32819](https://github.com/magento/magento2/issues/32819)

<!--- AC-853-->

*  All member-level `@api` annotations have been moved to their class throughout the codebase.

<!--- AC-1977-->

*  `gift-card Cms` widget data has been moved from `Magento/WidgetSampleData` ({{ site.data.var.ce }}) to `Magento/GiftCardSampleData` ({{ site.data.var.ee }}). This has resolved problems installing ({{ site.data.var.ce }}) with sample data on PHP8.1.

<!--- AC-1001-->

*  Marked interfaces throughout the Adobe Stock Integration codebase with `@api` as needed. [GitHub-32875](https://github.com/magento/magento2/issues/32875)

<!--- AC-1770-->

*  Integers and floats in result sets are now returned using native PHP types instead of strings when using emulated prepared statements. [GitHub-34625](https://github.com/magento/magento2/issues/34625)

<!--- AC-1697-->

*  Auto-creation of arrays from false values have been disabled to ensure compatibility with PHP 8.1.

<!--- AC-1338-->

*  The helper `Magento\Payment\Helper\Data` no longer creates new layouts in constructors. Previously, when this helper was used in custom commands without specifying an area code, {{ site.data.var.ce }} threw an error. [GitHub-33908](https://github.com/magento/magento2/issues/33908)

<!--- AC-1077-->

*  You can now pass a `data` argument to a block instance constructor by `di.xml`.

<!--- MC-43096-->

*  Optimized `Generator.php` for readability. [GitHub-33809](https://github.com/magento/magento2/issues/33809)

<!--- AC-1313-->

*  Improved the JWK check in the `JwsManager` class to handle situations when the algorithm is set directly in the header. Previously, this check ignored this valid scenario. [GitHub-32636](https://github.com/magento/magento2/issues/32636)

#### JavaScript dependency updates

<!--- magento/magento2/pull/33871-->

*  `jquery-validate` third-party library [GitHub-33853](https://github.com/magento/magento2/issues/33853)

<!--- ENGCOM-8667-->

*  `Less.js` (v3.13.1) [GitHub-32845](https://github.com/magento/magento2/issues/32845)

#### Library removals and deprecations

*  The following libraries have been removed because all browsers that {{ site.data.var.ce }} 2.4.x supports have built-in support for this functionality:

   *  `es6-collections.js`   <!--- AC-18-->
   *  `MutationObserver.js` <!--- AC-15-->
   *  `Modernizr` <!--- AC-12-->
   *  `FormData.js`

*  Removed the unused `jquery.hoverIntent` JavaScript library. [GitHub-33732](https://github.com/magento/magento2/issues/33732) <!--- AC-97-->

*  `lib/internal/Magento/Framework/Filter/Money.php` has been deprecated. It contains the `money_format()` function, which was removed in PHP 8.x. [GitHub-33870](https://github.com/magento/magento2/issues/33870)<!--- magento/magento2/pull/34366)-->

*  Removed the deprecated, unsupported `grunt-autoprefixer` package. [GitHub-34037](https://github.com/magento/magento2/issues/34037) <!--- magento/magento2/pull/34032-->

#### Library upgrades

*  The following libraries have been upgraded to more recent versions:

   *  `script.aculo.us` <!--- AC-363-->
   *  `Chart.js`  <!--- AC-361-->
   *  `moment.js` <!--- AC-11-->
   *  `moment-timezone-with-data.js`   <!--- AC-10-->
   *  `matchMedia.js` <!--- AC-8-->
   *  `underscore.js`  <!--- AC-13-->
   *  `PrototypeJS`  <!--- AC-17-->
   *  `RequireJS`
   *  `LessCSS`

### Invoice

<!--- AC-1564-->

*  Casting to `int` has been removed for auto-incremented invoice IDs when prefixed with a string. As a result, invoices now display a 0 for numbers that are prefixed with a string. [GitHub-34451](https://github.com/magento/magento2/issues/34451)

### Logging

<!--- MC-42360-->

*  {{ site.data.var.ce }} no longer creates log entries for failed API calls executing bulk actions in **System** > **Bulk Actions**. Previously, permanent entries for failed API calls were added to the bulk action log.

<!--- AC-1607-->

*  The auto-creation of arrays from false values is no longer permitted. [GitHub-34499](https://github.com/magento/magento2/issues/34499), [GitHub-34589](https://github.com/magento/magento2/issues/34589)

### {{ site.data.var.ee }} coding standard

<!--- magento/magento-coding-standard/pull/219-->

*  Updated `phpunit/ phpunit` to the latest version for the `magento-coding-standard` repository. [GitHub-33622](https://github.com/magento/magento2/issues/33622)

<!--- magento/magento2/pull/33858-->

*  Updated the `webonyx/graphql-php` dependency to version ^14.9 in the {{ site.data.var.ee }} coding standard repository. [GitHub-32863](https://github.com/magento/magento2/issues/32863)

<!--- magento/magento-coding-standard/pull/322-->

*  Added new sniff `Magento2.PHP.ArrayAutovivification` to the {{ site.data.var.ee }} coding standard to identify the auto-creation of arrays from a false value. [GitHub-34509](https://github.com/magento/magento2/issues/34509)

<!--- magento/magento-coding-standard/pull/325-->

*  Added new sniff `Magento2.Functions.DeprecatedFunction` to the {{ site.data.var.ee }} coding standard. [GitHub-34547](https://github.com/magento/magento2/issues/34547)

<!--- magento/magento-coding-standard/pull/326-->

*  Added deprecated functions to sniff `Magento2.Functions.DiscouragedFunction` in the {{ site.data.var.ee }} coding standard. [GitHub-34548](https://github.com/magento/magento2/issues/34548)

<!--- magento/magento-coding-standard/pull/335-->

*  The `Magento2.Annotation.MethodAnnotationStructure` sniff no longer fails with a false positive. [GitHub-34679](https://github.com/magento/magento2/issues/34679)

### Media Gallery

<!--- AC-1054-->

*  The `bin/magento media-gallery:sync` command no longer fails in deployments where AWS S3 is enabled.

<!--- AC-1000-->

*  Newly added Media Gallery Content submenu titles are now displayed when menu items exceed 11 and the **Enable Old Media Gallery** configuration setting is enabled. [GitHub-33889](https://github.com/magento/magento2/issues/33889)

<!--- MC-42837-->

*  Loading time for the Media Gallery tab when editing a product with many images has improved. [GitHub-33434](https://github.com/magento/magento2/issues/33434)

### MFTF

<!--- AC-516-->

*  `CURLOPT_POSTFIELDS` no longer accepts objects as arrays. To interpret an object as an array, perform an explicit (`array`) cast. This practice also applies to other options that accept arrays. [GitHub-33781](https://github.com/magento/magento2/issues/33781)

*  `curl_init()` now returns a `CurlHandle` object rather than a resource. The `curl_close()` function no longer has an effect. Instead, the `CurlHandle` instance is automatically destroyed if it is no longer referenced. [GitHub-33781](https://github.com/magento/magento2/issues/33781)

<!--- AC-1397-->

*  Fixed errors in MFTF tests for downloadable products. [GitHub-34270](https://github.com/magento/magento2/issues/34270)

<!--- magento/magento2/pull/33530-->

*  Removed `CliCacheFlushActionGroup` from `CatalogSearch`, `GroupedProduct`, `Newsletter`, `Paypal`, `Quote`, and `Review` modules. [GitHub-33531](https://github.com/magento/magento2/issues/33531)

<!--- AC-515-->

*  Non-strict comparisons between numbers and non-numeric strings now work by casting the number to string and comparing the strings. Comparisons between numbers and numeric strings continue to work as before. This means that 0 == "not-a-number" is now considered false. [GitHub-33780](https://github.com/magento/magento2/issues/33780)

<!--- AC-517-->

*  `parse_url()` now distinguishes between absent and empty queries and fragments. [GitHub-33782](https://github.com/magento/magento2/issues/33782)

<!--- magento/magento2-functional-testing-framework/pull/873-->

*  Updated the codebase to avoid a fatal error when using the `ReflectionType::isBuiltin()` method. [GitHub-34194](https://github.com/magento/magento2/issues/34194)

#### New action groups

`AdminCheckOrderStatusInGridActionGroup` [GitHub-33747](https://github.com/magento/magento2/issues/33747)

`StorefrontSelectFirstShippingMethodActionGroup` [GitHub-33773](https://github.com/magento/magento2/issues/33773)

`AdminClickUpdateChangesOnCreateOrderPageActionGroup` [GitHub-33689](https://github.com/magento/magento2/issues/33689)

#### Action groups

Repetitive actions have been replaced with action groups in these tests:

`AdminAddInStockProductToTheCartTest` [GitHub-34512](https://github.com/magento/magento2/issues/34512)

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

`CatalogProductListWidgetOperatorsTest`  [GitHub-34579](https://github.com/magento/magento2/issues/34579)

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

`AdminCreateOrderWithCheckedAppendCommentCheckboxTest` [GitHub-32381](https://github.com/magento/magento2/issues/32381)

`CheckoutWithEnabledCaptchaTest` [GitHub-32991](https://github.com/magento/magento2/issues/32991)

`StorefrontAddProductWithBackordersAllowedOnProductLevelToCartTest` [GitHub-33635](https://github.com/magento/magento2/issues/33635)

`StorefrontGiftMessageForOrderOnCheckoutCartPageTest` [GitHub-32821](https://github.com/magento/magento2/issues/32821)

`StorefrontCaptchaCheckoutWithEnabledCaptchaTest` [GitHub-32821](https://github.com/magento/magento2/issues/32821)

`StorefrontCheckoutWithEnabledMinimumOrderAmountOptionTest` [GitHub-33460](https://github.com/magento/magento2/issues/33460)

#### Refactored tests

`CaptchaWithDisabledGuestCheckoutTest` [GitHub-30828](https://github.com/magento/magento2/issues/30828)

### Order

<!--- MC-41981-->

*  Shoppers can now successfully re-order an existing order that contains a product with the combination of custom options of type file and type dropdown from both the storefront and Admins. Previously, {{ site.data.var.ce }} threw an error and did not process the re-order.

<!--- MC-42332-->

*  The Admin order detail page now loads as expected. Previously, {{ site.data.var.ce }} threw the following error when loading the order detail page for orders with certain taxes: `Call to a member function getId() on array`.

<!--- MC-38521-->

*  Administrators with restricted permissions that include order and shipping privileges can now view the order page as expected. Previously, {{ site.data.var.ce }} threw an error when an administrator with these permissions tried to view an order. [GitHub-14633](https://github.com/magento/magento2/issues/14633)

### Payment methods

<!--- AC-1830-->

*  Shoppers can now use Braintree to place an order using a billing address without a set region in deployments with 3DS enabled. Previously, checkout froze when the shopper clicked **Place order**, and the purchase could not be completed. [GitHub-34204](https://github.com/magento/magento2/issues/34204)

<!--- AC-1229-->

*  The Venmo payment option is now supported.

<!--- AC-1228-->

*  PayPal can now track by BN code.

<!--- AC-493-->

*  `bin/magento setup:upgrade` now runs as expected when upgrading from {{ site.data.var.ce }} 2.4.2-p1. Previously, {{ site.data.var.ce }} threw this error: `Unable to apply data patch Magento\Paypal\Setup\Patch\Data\UpdateBmltoPayLater for module Magento_Paypal`. [GitHub-33678](https://github.com/magento/magento2/issues/33678)

<!--- MC-42830-->

*  The correct store ID is now used to retrieve saved credit cards during Admin order placement. Stored credit cards are now displayed during order placement according to the website scope configuration setting. Previously, when an administrator tried to create an order for a customer from the Admin and selected the Stored Credit Cards method, no options were available for stored cards.

<!--- AC-344-->

*  Anomalies with PayPal Credit display of gift card amounts have been resolved. Previously, when PayPal Credit was enabled and multiple gift card amounts were configured, if a shopper changed the amount for the value of a gift card, the storefront did not update the amount for installment payments. This was a known issue in {{ site.data.var.ce }} 2.4.3.

#### PayPal

<!--- MC-42154-->

*  {{ site.data.var.ce }} no longer displays an error during checkout with the PayPal Express payment method. Previously, although the checkout process completed, {{ site.data.var.ce }} displayed this error: `Something went wrong`.

<!--- AC-722-->

*  PayPal Express now works as expected from the shopping cart. Previously, when you clicked the **PayPal** button to start express checkout from the cart, {{ site.data.var.ce }} threw this error:  `To check out, please sign in with your email address`. [GitHub-33445](https://github.com/magento/magento2/issues/33445)

<!--- MC-42279-->

*  PayPal Payflow Pro now performs delayed capture with correct parent transaction IDs in deployments where the PayPal Payflow Pro gateway with **Payment Action** is set to **Authorization**. A **Sale** transaction is sent to Payflow with a parent transaction ID of the vault token created at checkout as expected. Previously, a **Delayed Capture**  transaction was created and sent to PayPal Payflow. [GitHub-33445](https://github.com/magento/magento2/issues/33445)

### Performance

<!--- MC-42158-->

*  Module list load execution time has improved.

<!--- AC-932-->

*  The performance of the Popular Search Term cache has improved. Previously, the larger the `search_query` table, the longer a search query took to complete. [GitHub-27559](https://github.com/magento/magento2/issues/27559)

<!--- MC-42892-->

*  {{ site.data.var.ce }} by default resizes images synchronously during product save. Merchants can now resize images as a background asynchronous process by minor edits to a `di.xml` file.

<!--- ENGCOM-9168-->

*  The performance of the Category Products indexer has been improved in multi-store deployments. [GitHub-33984](https://github.com/magento/magento2/issues/33984)

<!--- AC-1179-->

*  The new in-memory cache for `glob()` system calls improves performance by reducing the number of `glob()` calls.  [GitHub-34025](https://github.com/magento/magento2/issues/34025)

### Pricing

<!--- MC-42243-->

*  Price sorting now works as expected when product prices are close to or equal to zero and shared catalogs are enabled. Previously, zero tier prices were ignored during price re-indexing.

### ProductAlert

<!--- MC-41917-->

*  The new `product_alert` consumer improves the sending of customer alerts by creating queue messages, running the consumer, and improving execution time. Previously, {{ site.data.var.ce }} threw an out-of-memory exception when sending more than 100,000 product alerts. {{ site.data.var.ce }} also took more than 20 hours to send all alerts.

### Product video

<!--- MC-42105-->

*  {{ site.data.var.ce }} now enables the **Save** button and autocompletes fields when you enter an incomplete URL while adding a video (Admin **Catalog**  > **Products** > **Add Video**). Previously, the **Save** button was disabled, and fields were not populated.

### Reviews

*  The product list view now displays the correct starred rating for products. [GitHub-30196](https://github.com/magento/magento2/issues/30196)

### Sales

<!--- MC-42025-->

*  The performance of sales grid updates in asynchronous mode for tables with large data sets after upgrade to MariaDB 10.2.34 has been improved.

<!--- MC-42531-->

*  {{ site.data.var.ce }} now removes HTML tags as expected from the storefront **Account** > **My Orders** > **View order** page. Previously, {{ site.data.var.ce }} displayed HTML tags in the storefront customer order comment section.

<!--- MC-42377-->

*  Automated test coverage to verify the existence of an index for `sales_shipment_grid.order_id` has been added.

### Sales Rule

<!--- MC-42288-->

*  Coupon generation is now blocked until the related cart price rule is saved with the `auto` option enabled. If you try to save this rule without enabling the `auto` option, {{ site.data.var.ce }} displays this message: `Rule is not saved with auto generate option enabled. Please save the rule and try again`.

<!--- MC-42743-->

*  Added test for confirming the correct application of a cart price rule discount.

### Search

<!--- MC-42799-->

*  Layered Navigation options for price range now work as expected with custom price attributes. {{ site.data.var.ce }} uses the configuration of the price navigation step when filtering custom price attributes. Previously, {{ site.data.var.ce }} used the manual step configuration.

<!--- MC-42545-->

*  The storefront now shows all sub-categories of the current category in layered navigation regardless of number of categories available in the catalog.

<!--- MC-41706-->

*  Elasticsearch catalog searches are now diacritic-insensitive. Previously, searches for terms without an accent resulted in different results than searches on the same term with an accent.

### Shipping

<!--- MC-42758-->

*  Shipment email now includes the tracking number for the current shipment only. Previously, when an order included several shipments, each shipment’s email included the tracking numbers from all shipments related to the order.

<!--- MC-42396-->

*  {{ site.data.var.ce }} now updates the mini cart successfully when a shopper deletes a product from their cart while in multi-shipping mode, then switches to a single shipping address. Previously, product prices were not updated as expected.

<!--- AC-267-->

*  Import of table rates now works as expected when using the S3 storage adapter. Previously, {{ site.data.var.ce }} displayed this error: `File "https://[bucket].s3.eu-central-1.amazonaws.com/[prefix]/tmp/phpLjGmHf" not found`. [GitHub-33072](https://github.com/magento/magento2/issues/33072)

<!--- magento/magento2/pull/33232-->

*  You can now disable shipment update emails as expected from **Stores**  > **Configuration**  >  **Sales**  >  **Sales Emails**. [GitHub-33165](https://github.com/magento/magento2/issues/33165)

### Store

<!--- MC-42884-->

*  The Login as Customer feature now works as expected in deployments that contain multiple stores on different URLs. Previously, {{ site.data.var.ce }} did not load the correct store, even when accessing the correct store domain.

### Tax

<!--- MC-41924-->

*  {{ site.data.var.ce }} now correctly calculates the mini cart subtotal when a customer deletes an item after selecting shipping to multiple addresses.

<!--- MC-41945-->

*  {{ site.data.var.ce }} now shows the same tax rate on all checkout pages when the shopping cart contains only virtual products.

<!--- AC-714-->

*  Tier prices for configurable products now display accurate included and excluded tax values on the storefront. Previously, the same values were displayed for both included and excluded taxes. [GitHub-33673](https://github.com/magento/magento2/issues/33673)

### Test

<!--- magento/magento2/pull/34798-->

*  WebAPI tests are now compatible with PHP 8.1. [GitHub-34653](https://github.com/magento/magento2/issues/34653)

<!--- magento/magento2/pull/34820-->

*  Integration tests are now compatible with PHP 8.1. [GitHub-34567](https://github.com/magento/magento2/issues/34567), [GitHub-34569](https://github.com/magento/magento2/issues/34569)

<!--- AC-1225-->

*  Merchants can now test the shopper experience of the country in which the shopper is located, rather than the merchant’s location.

*  Functional tests have been stabilized for PHP 8.x compatibility. [GitHub-34327](https://github.com/magento/magento2/issues/34327), [GitHub-34188](https://github.com/magento/magento2/issues/34188)

<!--- magento/magento2/pull/34198-->

*  Fixed functional issues in WebAPI tests. [GitHub-34196](https://github.com/magento/magento2/issues/34196)

<!--- AC-1207-->

*  Fixed errors that resulted in false positive static tests. [GitHub-34056](https://github.com/magento/magento2/issues/34056)

<!--- magento/magento2/pull/34300-->

*  Test coverage has been updated for `call_user_func_array`. [GitHub-34301](https://github.com/magento/magento2/issues/34301)

<!--- AC-1978-->

*  The `Magento\GraphQl\CatalogGraphQl\ProductSearchTest` test no longer throws this error when run with AWS Elasticsearch: `Magento\GraphQl\CatalogGraphQl\ProductSearchTest::testSearchSuggestions Failed asserting that an array is not empty. /var/www/html/dev/tests/api-functional/testsuite/Magento/GraphQl/CatalogGraphQl/ProductSearchTest.php:94 /var/www/html/dev/tests/api-functional/framework/Magento/TestFramework/TestCase/GraphQlAbstract.php:257`.

<!--- magento/magento2/pull/33699-->

*  Fixed numerous non-critical unit test warnings by renaming all mock variables to include the `Mock` suffix and removing references to a deprecated Object Manager class. [GitHub-33695](https://github.com/magento/magento2/issues/33695)

*  The `Magento\Framework\MessageQueue\TopologyTest` test is now compatible with the AWS MQ for RabbitMQ service. Previously, this test failed with this message: `Invalid exchange configuration: magento-topic-based-exchange1 Failed asserting that two arrays are equal`. <!--- AC-1248-->

<!--- magento/magento2/pull/34454-->

*  Unit tests are now compatible with PHP 8.1. [GitHub-34441](https://github.com/magento/magento2/issues/34441)

#### Unit tests

The following unit tests have been refactored to use `PHPUnit` instead of `AspectMock`:

`AllureHelperTest` [GitHub-33294](https://github.com/magento/magento2/issues/33294)

`ObjectHandlerUtil` [GitHub-33584](https://github.com/magento/magento2/issues/33584)

`MockModuleResolverBuilder` [GitHub-33583](https://github.com/magento/magento2/issues/33583)

`MagentoTestCase`  [GitHub-33582](https://github.com/magento/magento2/issues/33582)

`ModuleResolverTest` [GitHub-33308](https://github.com/magento/magento2/issues/33308)

`ParallelGroupSorterTest` [GitHub-33306](https://github.com/magento/magento2/issues/33306)

`SuiteGeneratorTest` [GitHub-33299](https://github.com/magento/magento2/issues/33299)

`OperationDataArrayResolverTest`  [GitHub-33296](https://github.com/magento/magento2/issues/33296)

### Theme

<!--- MC-41887-->

*  Notification messages are now displayed correctly when {{ site.data.var.ce }} has a subpath configured in its base URL.

<!--- MC-42469-->

*  Added an `aria-label` element to the storefront page template to indicate the page to which the shopper will navigate to when clicking a link. Previously, the same link text was used for links to different pages. [GitHub-33075](https://github.com/magento/magento2/issues/33075)

### Translations and locales

<!--- AC-285-->

*  The `UserExpiration` validator no longer fails with `de_DE` and `uk_UA` locales. Previously, {{ site.data.var.ce }} threw an error when an administrator tried to set an expiration date when creating a new user from the Admin with locales set to `de_DE` or `uk_UA`. [GitHub-32497](https://github.com/magento/magento2/issues/32497)

<!--- magento/magento2/pull/33787-->

*  Swiss region names are now consistently presented in English in the create or edit address forms. [GitHub-32602](https://github.com/magento/magento2/issues/32602)

<!--- magento/magento2/pull/33128-->

*  Updated `zip_codes.xml` patterns for Guernsey to support GY10 postcodes for the Island of Sark. [GitHub-33144](https://github.com/magento/magento2/issues/33144)

<!--- AC-1080-->

*  Added Belarus regions to the `directory_country_region` table. [GitHub-33924](https://github.com/magento/magento2/issues/33924)

<!--- AC-1178-->

*  Display anomalies with storefronts running the Filipino (Philippines) locales have been resolved. [GitHub-33996](https://github.com/magento/magento2/issues/33996)

<!--- AC-1308-->

*  You can now successfully enter a customer date of birth when creating a new account in stores set to a Portuguese(Portugal) locale. Previously,  {{ site.data.var.ce }} threw an error when you tried to create an account. [GitHub-34130](https://github.com/magento/magento2/issues/34130)

### UI

<!--- AC-258-->

*  Corrected errors with MFTF tests that use `maps.googleapis.com`.

<!--- MC-41850-->

*  {{ site.data.var.ce }} now trims the non-breaking space characters from the Contact Us form email input field. Previously, the form was submitted without removing the non-breaking space characters from the email input (if given), which caused errors in the log files. The **Reply-To** field was also missing from the generated contact email message to the store administrator.

<!--- MC-42793-->

*  {{ site.data.var.ce }} now displays related products, up-sell products, and cross-sell products according to their positions in the Admin.

<!--- MC-42502-->

*  `.action-close` buttons now work as expected when `Multiselect` is used in a modal. Previously, the `action-close` button did not work because it inherited the CSS of the  `.action-close` button of the modal. [GitHub-27240](https://github.com/magento/magento2/issues/27240)

<!--- AC-1217-->

*  The Offers rich snippet is now present on the main price field in Product view. Previously, this snippet was missing from this field in related products block in Product view, which resulted in Google search results displaying incorrect prices. [GitHub-34063](https://github.com/magento/magento2/issues/34063)

<!--- AC-1584-->

*  Problems with modal height on devices running iOS have been resolved. [GitHub-34467](https://github.com/magento/magento2/issues/34467)

<!--- MC-40106-->

*  Actions dropdown menus are now positioned correctly throughout the storefront. [GitHub-31379](https://github.com/magento/magento2/issues/31379)

<!--- AC-1589-->

*  Accessibility errors with navigation on the cart and checkout pages have been resolved. [GitHub-34483](https://github.com/magento/magento2/issues/34483)

<!--- AC-1289-->

*  Screen readers can now read all relevant form elements on product pages.

<!--- AC-872-->

*  Storefront catalog product widget sort order (**Catalog** > **Category** > **Products**) now matches the order configured in the Admin. [GitHub-27126](https://github.com/magento/magento2/issues/27126)

<!--- AC-725-->

*  The region selector now works as expected on the Create an Account page. [GitHub-30099](https://github.com/magento/magento2/issues/30099)

<!--- MC-42750-->

*  The Admin customer grid now displays all customer data, including newly added `date` custom attributes, as expected. Previously, {{ site.data.var.ce }} threw an error and did not display the Admin customer grid correctly when the `date` attribute set was set as a column.

<!--- AC-1280-->

*  Input labels on the **Catalog**  >  **Product** details page have been changed to accurately reflect the purpose of the input. Fields for which user input is not required no longer display labels with an asterisk.

<!--- AC-1275-->

*  The rich text editor toolbar can now be accessed using the Tab key.

<!--- AC-1284-->

*  The accessible name of the control now includes the text of its visible label for the number of items per page dropdown.

<!--- AC-1287-->

*  The table controls on the **Catalog** > **Product** details page now have visible labels and an accessible name when the table is collapsed.

<!--- AC-1285-->

*  Buttons throughout the storefront now have unique, descriptive accessible names. Previously, split buttons with a text button and an adjacent down arrow icon button had the same accessible name.

<!--- AC-1168-->

*  Added a **Today** view option to the Admin Orders and Amounts dashboard charts to provide a summary of sales and orders throughout the day. [GitHub-34008](https://github.com/magento/magento2/issues/34008)

<!--- AC-1481-->

*  The active (click) state of the multi-select **Close** button now works consistently. [GitHub-34338](https://github.com/magento/magento2/issues/34338)

<!--- magento/magento2/pull/31879-->

*  {{ site.data.var.ce }} no longer displays this message after upgrade when Cookie Restriction Mode is disabled: `The store will not work correctly in the case when cookies are disabled`. [GitHub-33811](https://github.com/magento/magento2/issues/33811)

### URL rewrites

<!--- AC-1510-->

*  URL rewrites are no longer re-generated for all store views during the creation of a new store view when executing `bin/magento setup:upgrade`. [GitHub-32954](https://github.com/magento/magento2/issues/32954)

### Web API framework

<!--- MC-42008-->

*  Web API requests for self-authorized customer resources no longer throw authorization errors when persistent shopping cart is enabled.

<!--- MC-42313-->

*  You can now create objects using the child classes of `\Magento\Framework\Api\AbstractSimpleObjectBuilder` on PHP 7.3. Previously, `preg_match` threw this warning message when {{ site.data.var.ce }} was hosted on Redhat with PHP 7.3: `Warning: preg_match(): Compilation failed: unrecognized character follows...`.

<!--- MC-24548-->

*  The totals retrieved by the `PUT /V1/guest-carts/:cartId/collect-totals` request are now updated by the correct `shippingMethod`. [GitHub-18508](https://github.com/magento/magento2/issues/18508)

<!--- MC-30627 AC-796-->

*  Adding a new deserializer to the REST API no longer removes other deserializers. Previously, the REST API accepted a new content type, but CORE defined content types for APIs no longer worked and returned a 400 error. [GitHub-26433](https://github.com/magento/magento2/issues/26433)

<!--- AC-698-->

*  You can now remove an override for a parameter that is defined in a `webapi.xml`file. [GitHub-33843](https://github.com/magento/magento2/issues/33843)

<!--- AC-1212-->

*  {{ site.data.var.ce }} now generates a `customertoken` by GraphQL or REST API requests as expected after multiple consecutive failed login attempts. Previously, {{ site.data.var.ce }} did not check whether the value of `lock_expires_at` in `oauth_token_request_log` was greater than the current date and time, and always returned the number of failed attempts, which prevented the customer from ever logging in. [GitHub-34067](https://github.com/magento/magento2/issues/34067)

<!--- AC-1190-->

*  Adding a masked quote ID to `QuoteRepository::getList` no longer causes an infinite loop. Previously, using the payment processor that relied on the REST API to update orders triggered this behavior. [GitHub-33675](https://github.com/magento/magento2/issues/33675)

<!--- MC-41612-->

*  The `/rest/all/V1/categories/<above_created_category_id>`  PUT call now respects the values specified by `available_sort_by`.  Previously, the Available Product Listing Sort By drop down was selected with all possible options on the Category page, and the **Use All** checkbox was selected. [GitHub-32596](https://github.com/magento/magento2/issues/32596)

### Wish list

<!--- MC-41880-->

*  {{ site.data.var.ce }} no longer renders a wish list in the category sidebar when the **Show In Sidebar** wish list option is disabled. Previously, {{ site.data.var.ce }} ignored this option.

## Known Issues

**Issue**: Shoppers cannot add a product to their cart when no options are selected in Admin **Store** >  **Configuration** > **General** > **Country Options** > **Allow Countries**. {{ site.data.var.ce }} instead displays this following console error: `Failed to load resource: the server responded with a status of 400 (Bad Request)`. <!--- AC-2564-->

**Issue**: The description of Dotdigital on **Find Partners and Extensions** > **Magento Marketplace** is outdated. Here is an updated description:

Dotdigital is a customer engagement platform that helps digital marketers and developers deliver communications across the customer journey. We harness the power of customer data, powering engagement, conversion, and loyalty for brands as they grow and scale. Customers love our easy-to-use platform that connects first party data across the systems, surfacing powerful insights and automating predictive cross-channel messages.

Dotdigital’s 350+ employees serve mid-market and enterprise companies around the world and across industries. We aspire to inspire responsible marketing and are committed to sustainability, privacy, and security. Dotdigital is proud to be the world’s first carbon-neutral marketing automation platform, certified for ISO 14001, ISO 27701, and ISO 27001.

See [Dotdigital — Marketing Automation](https://marketplace.magento.com/dotdigital-dotdigital-magento2-os-package.html) for purchase and download information.

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.4.4 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
