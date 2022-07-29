---
group: release-notes
title: Magento Open Source 2.4.5 Release Notes
---

{{ site.data.var.ce }} introduces improvements to platform quality, payment methods, GraphQL caching performance, and accessibility. It includes updates to integrated Google modules.

This release includes over 290 quality fixes and enhancements.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ce }} 2.4.5 contains backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Other release information

Although code for these features is bundled with quarterly releases of the {{ site.data.var.ce }} core code, several of these projects are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## {{ site.data.var.ce }} 2.4.5 highlights

Look for the following highlights in this release.

### Security enhancements

This release includes 20 security fix and platform security improvements. This security fix has been backported to {{ site.data.var.ce }} 2.4.4-p1 and {{ site.data.var.ce }} 2.3.7-p4.

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts:

*  IP allowlisting
*  [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html)
*  use of a VPN
*  use of a unique location rather than `/admin`
*  good password hygiene

See Adobe Security Bulletin for the latest discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  reCAPTCHA support has been added to the Wish List Sharing, Create New Customer Account, and Gift Card forms. <!--- AC-1144-->

*  ACL resources have been added to Inventory. <!--- AC-1622-->

*  Inventory template security has been enhanced.

*  The `MaliciousCode` filter has been upgraded to use the `HtmlPurifier` library. <!--- AC-1498-->

### Platform enhancements

{{ site.data.var.ce }} 2.4.5 now supports

*  Composer 2.2  <!--- AC-2033-->

*  TinyMCE (5.10.2). Earlier versions of TinyMCE  (v5.9.2 or earlier) allowed arbitrary JavaScript execution when a specially crafted URL or an image with a specially crafted URL was updated. <!--- AC-2039 1784 1789-->

*  jQueryUI (1.13.1) <!--- AC-2544-->

*  `PHPStan` (^1.5.7 with constraint) [GitHub-35315](https://github.com/magento/magento2/issues/35315)<!--- AC-2876-->

The DHL Integration schema has been updated from v6.0 to v6.2. This upgrade will not result in a change in product behavior.  <!--- AC-3022-->

Outdated JavaScript libraries have been updated to their latest versions, and outdated dependencies have been removed. These changes are backward compatible. <!--- AC-2036-->

#### Composer dependency updates

<!--- AC-2876 2744 2912 2577-->

The following Composer dependencies have been updated to the latest versions with constraint:

*  `colinmollenhour/credis`  (1.13.0)? <!--- AC-2732-->
*  `guzzlehttp/guzzle` (^7.4.2)
*  `laminas/laminas-captcha` (updated with a constraint ^2.12) <!--- AC-2625-->
*  `laminas/laminas-db`   (^2.15.0)
*  `laminas/laminas-di` (^3.7.0)
*  `laminas/laminas-escaper` (~2.10.0)
*  `laminas/laminas-eventmanager`  (^3.5.0)
*  `laminas/laminas-feed`   (^2.17.0)
*  `laminas/laminas-mail` (^2.16.0)
*  `laminas/laminas-mvc`  (^3.3.3)
*  `laminas/laminas-server` (^2.11.1)
*  `laminas/laminas-servicemanager`  (^3.11.0)
*  `laminas/laminas-validator` (^2.17.0)
*  `league/fly`  (2.4.3) <!--- AC-2744-->
*  `monolog/monolog`  (^2.5)
*  `phpmd/phpmd`   (^2.12.0)
*  `phpstan/phpstan`  (^1.5.7)
*  `phpunit/phpunit`  (~9.5.20)
*  `php-cs-fixer` (^3.4.0) <!--- AC-2259-->
*  `webonyx/graphql-php`  (14.11.6)

The `laminas/laminas-session`, `laminas/laminas-text`, and `laminas/laminas-view` dependencies have been removed. <!--- AC-2598-->

#### Other upgrades and replacements

*  The DHL Integration schema has been updated from v6.0 to v6.2. <!--- AC-3022-->

*  The default Gateway URL for USPS shipping has been updated to use `https` instead of `http`. <!--- AC-2426-->

*  The `Froogaloop` library has been replaced with the Vimeo `Player.js` library (2.16.4). <!--- AC-2527 2262-->

*  The `grunt-eslint` (NPM) library has been upgraded to the latest version. <!--- AC-2700-->

*  The `jQuery Storage` libraries have been replaced with `julien-maurel/js-storage`. <!--- AC-2627-->

*  The `php-cs-fixer` and `phpcs` static code analysis tools are now compatible with PHP 8.x. <!--- AC-2259-->

*  `glob.js` dependency (upgraded with constraint to ~7.2.0) <!--- AC-2547-->

*  `serve-static.js` dependency (upgraded with constraint ~1.14.2) <!--- AC-2548-->

*  `underscore.js` dependency (NPM) (1.14.2) <!--- AC-2546 2549-->

*  `moment-timezone-with-data.js` (0.5.34) <!--- AC-2545-->

*  The library `jquery/jquery-cookie` has been replaced with `js-cookie/js-cookie`. <!--- AC-2626-->

*  The `jarallax.js` and `jaralax-video.js` libraries have been updated to use the latest version of the Vimeo REST API. <!--- AC-2590-->

### Accessibility updates

The focus of this release has been on creating a storefront experience on Venia (PWA) that is more perceivable, operable, understandable, and robust. These enhancements include:

*  Search results summary information is now announced to screen reader users
*  Screen readers are now informed when a new page view loads
*  Contrast and keyboard accessibility have been improved

### Google Analytics

Google has updated the tracking and integration mechanisms of AdWords and Analytics in web applications through integration with GTag. This integration of Google functionality into website pages extends opportunities to track and manage content through Google Services. Adobe Commerce has a set of built-in modules including Google AdWords, Analytics, Optimizer, and TagManager that leverage the former API for integration with Google services.  In this release,  we have re-implemented this integration using the GTag approach.​ See [Migrate from analytics.js to gtag.js (Universal Analytics)](https://developers.google.com/analytics/devguides/migration/ua/analyticsjs-to-gtagjs).

### GraphQL

GraphQL performance enhancements include:

*  Developers and administrators experience faster rebuilding of the unified storefront GraphQL schema on deployment or when changing attributes in production. Shoppers also experience significantly faster page load speeds when the GraphQL schema must be rebuilt for any reason.

*  Added capability to consume the expiration date/time of the authorization token through the use of JSON Web Tokens (JWT) in the GraphQL API.

*  The `bin/magento config:set graphql/session/disable 1` command allows merchants to completely disable the creation of session cookies for all GraphQL operations. By default, {{ site.data.var.ce }} creates these cookies and relies on them for authorization, which affects performance. Going forward, we recommend using tokens as the only form of authorization for GraphQL requests. We do not recommend using session cookies alone or in conjunction with authorization tokens. See [GraphQL Authorization]({{page.baseurl}}/graphql/authorization-tokens.html). <!--- B2B-2204--->

*  Session cookies are now launched in GraphQL operations using class proxies only when needed. <!--- B2B-2217--->

*  Session usage has been removed from `http` header processors in GraphQL such as store, customer, or currency. <!--- B2B-2224--->

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### Inventory

Inventory template security has been enhanced.

### Page Builder

Page Builder v.1.7.2 is compatible with {{ site.data.var.ce }} 2.4.5.

Page Builder column layout includes these enhancements: <!--- PB-547-->

*  Columns are now exposed, permitting users to control column settings on the storefront.

*  Column resizing now supports wrapping triggered by user actions.

### Payments

Apple Pay is now available to all merchants running deployments with Payment Services enabled. This payment method does not require shoppers to enter their credit or debit card details. Apple Pay is available on the product details page, mini cart, shopping cart, and checkout workflow. Merchants can toggle on this feature.

#### PayPal

*  Merchants in Spain and Italy can now offer PayPal Pay Later to shoppers.  <!--- AC-2521-->

*  Previews of the PayPal, Credit and Pay Later buttons are now available in the Admin for the checkout, minicart, cart, and product pages. Previews reveal how these buttons will look when they are enabled and rendered on the storefront.

#### Braintree

*  Braintree has discontinued the KOUNT fraud protection integration. It has been removed from the {{ site.data.var.ce }} codebase.

*  The **Always request 3DS** option has been added to the Admin.

### PWA Studio

PWA Studio v.12.5.x is compatible with {{ site.data.var.ce }} 2.4.5.

New features for this release include:

*  Shopper behavior data is collected on PWA Studio storefront for web analytics services.  Merchants can now subscribe and extend these events as needed.

*  Merchants can now select a service to deploy from the Admin (Google Tag Manager).

For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Version compatibility](https://developer.adobe.com/commerce/pwa-studio/integrations/adobe-commerce/version-compatibility/) for a list of PWA Studio versions and their compatible {{ site.data.var.ce }} core versions.

## Fixed issues

We have fixed hundreds of issues in the {{ site.data.var.ce }} 2.4.5 core code.

### Installation, upgrade, deployment

<!--- ACP2E-49-->

*  You can now rename a data patch and add the old class name as an alias in the `patch_list` database table. {{ site.data.var.Ce }} now checks whether data patch aliases already existed in the database before applying the patch. Previously, {{ site.data.var.ce }} threw an error under these conditions.

<!--- AC-3036-->

*  {{ site.data.var.ce }} no longer throws an exception when you try to change the Admin URL to a custom URL from the Admin. Previously, after changing the Admin URL, you could not log in. [GitHub-35416](https://github.com/magento/magento2/issues/35416)

<!--- AC-1480-->

*  Merchants can now successfully upgrade from an {{ site.data.var.ce }} 2.4.2 deployment with Klarna to {{ site.data.var.ce }} 2.4.3. [GitHub-33760](https://github.com/magento/magento2/issues/33760)

<!--- AC-2905-->

*  The path to {{ site.data.var.ce }} Analytics is no longer hardcoded. Previously, this hardcoded path resulted in conflicts when multiple {{ site.data.var.ce }} instances were installed on one server. [GitHub-29373](https://github.com/magento/magento2/issues/29373)

### Accessibility

<!--- AC-2786-->

*  The **Shopping bag** button now provides a programmatic or textual indication of its state. Screen reader users are informed that clicking this button will expand other content, or that the associated content is expanded or collapsed. Previously, this button did not provide a programmatic or textual indication of its state.

<!--- AC-2496-->

*  Payment Information credit card option text elements or images of text now meet the WCAG 2.0 required minimum color contrast ratio of 4.5:1 for standard text of 18pt (24px) or 14pt (19px) if bolded. Previously, they did not meet the expected contrast ratio.

<!--- AC-2483-->

*  **Address book**  >  **Communication**  > **Account information** custom focus indicators now provide a contrast ratio of at least 3:1 against the background color.

<!--- AC-2486-->

*  **Filter** and **Sort** button text now meet the WCAG 2.0 required minimum color contrast ratio of 4.5:1 for standard text of 18pt (24px) or 14pt (19px) if bolded. Previously, navigation buttons for carousels did not meet these minimum contrast requirements.

<!--- AC-2499-->

*  Screen readers announce the word “Venia” only once when navigating to Venia headers and footers. Previously, the same word was announced twice consecutively.

<!--- AC-2585-->

*  Buttons that trigger dropdowns now provide information to screen readers that indicate their expanded or collapsed state and accessible names.

<!--- AC-2482-->

*  Screen reader users are informed when a new page view is rendered. Previously, when a page title changed, the title change was not announced.

### Adobe Stock

<!--- AC-2926-->

*  Users can now successfully sign out of Adobe Stock.

### Bundle products

<!--- ACP2E-465-->

*  You can now use the `PUT /V1/products` endpoint to update product price attributes for a specific website. Previously, if some product attributes were overridden for a specific store view, you could not update a price attribute for that product in that same store view.

<!--- ACP2E-780-->

*  {{ site.data.var.ce }} now correctly calculates the cart total for a bundle product when the Product Subselect rule is applied.

### Cache

<!--- ACP2E-684-->

*  Full page cache is no longer shown as disabled in the Admin when the {{ site.data.var.ce }} cache is flushed and `use_stale_cache` is enabled.

<!--- AC-2410-->

*  New Relic deployment markers now work as expected when cache is flushed. [GitHub-32649](https://github.com/magento/magento2/issues/32649)

### Cart and checkout

<!--- ACP2E-455-->

*  The address search pop-up on the billing step of the checkout workflow no longer causes DOM errors.

<!--- ACP2E-368-->

*  The `addProductsToCart` mutation now works correctly with multiple products. Previously, this query returned the first product with an accurate subtotal, but returned a subtotal of 0 for other products.

<!--- ACP2E-245-->

*  Permission exceptions are now handled for restricted products that are added by SKU. Shoppers are now given an appropriate message on the storefront, and the quantity field in the error table is disabled. Previously, {{ site.data.var.ce }} threw an exception like this: `There has been an error processing your request`.

<!--- ACP2E-148-->

*  The SQL query that updates affected quotes after disabling a cart price rule has been optimized to avoid locking the entire quote table.

<!--- ACP2E-98-->

*  Shoppers with global account sharing are no longer required to log in again to a secondary website in a multi-site deployment when guest checkout is disabled. Customer data is now loaded when the shopper navigates to the subdomain. The shopper is no longer asked to log in again, and the previous cart contents are displayed.

<!--- ACP2E-94-->

*  Address dropdown values in the checkout workflow no longer change for the remaining items in a quote when a single quantity address item is removed in a multi-address checkout. Previously, when a product was removed from a quote during multi-address checkout, the address dropdown value changed to default for all products.

<!--- ACP2E-42-->

*  The `cart` query no longer return null responses when a product is out of stock. A new `errors` element containing the error message was introduced to the response. Previously, when you ran a query with an out-of-stock product, {{ site.data.var.ce }} displayed a `null` value under the `items` section in the response. See [cart query](https://devdocs.magento.com/guides/v2.4/graphql/queries/cart.html).

<!--- ACP2E-38-->

*  Shipping methods are now available as expected when a guest shopper creates an account after adding a product to their cart before proceeding to checkout. Previously, when a guest added a product the cart before creating an account, no shipping methods were available during checkout. After adding other products to the cart, shipping methods became available.

<!--- AC-2564-->

*  Shoppers can now add products to their carts when no options in the **Allow Countries** field have been selected.

<!--- AC-2622-->

*  Cart contents and login status are now reloaded as expected after a session times out when **Enable Persistence** is set to **Yes**. [GitHub-35182](https://github.com/magento/magento2/issues/35182)

<!--- AC-428-->

*  Mini cart subtotals are now updated correctly when a shopper navigates from the shipping page to the cart page in the checkout workflow for an order with multiple shipping addresses. Previously, the subtotal was doubled.

<!--- AC-2619-->

*  The mini cart now displays previously added products after a session timeout when **Enable Persistence** is enabled . [GitHub-35183](https://github.com/magento/magento2/issues/35183)

<!--- ACP2E-707-->

*  Merchants can now create a credit memo in which  **Refund Shipping (Incl. Tax)** is set to -0.01 and can now set this amount to 0. Previously, the credit memo could not be created under these conditions.

### Cart price rule

<!--- ACP2E-680-->

*  The `Parent Only` attribute scope is now used properly in the Cart Rule condition.

### Catalog

<!--- ACP2E-758-->

*  Product URL keys now remain unchanged when updating product name via `PUT /V1/products/` for a store view. Previously, a new URL key was generated based on the new product name and assigned to the product, which overrode the URL key in that store view.

<!--- ACP2E-703-->

*  Adding a product to a category from the Page Builder product widget set to carousel mode no longer triggers a page reload.

<!--- ACP2E-685-->

*  Products set to **Not Visible Individually** no longer appear in catalog Advanced Search results.

<!--- ACP2E-679-->

*  Dynamic bundle attributes are now updated correctly on the Mass Attribute Update page. Previously, the **Dynamic SKU** attribute remained set to **Yes** even though they were disabled on the Mass Update page.

<!--- ACP2E-673-->

*  Catalog rules are now correctly applied using incremental indexers rather than a full re-index.

<!--- ACP2E-657-->

*  You can now successfully switch between list and grid views of multi-page product lists. Previously, when you navigated to the last page of a multi-page product list view before switching to the grid view, {{ site.data.var.ce }} displayed this error: `Unfortunately there are no products in this category on our website currently`.

<!--- ACP2E-635-->

*  Admin Action Log reports now display updated product IDs and updated status information as expected.

<!--- ACP2E-633-->

*  Triggers are now restored as expected to the `catalogrule_product_price` table after a full re-index. Previously, triggers were removed from the `catalogrule_product_price` table after a `catalogrule_rule` or `catalogrule_product` full re-index.

<!--- ACP2E-629-->

*  Category rules that are used to assign products to categories no longer randomly change.

<!--- ACP2E-516-->

*  Categories can no longer be updated globally by an administrator with scope-restricted access. Previously, when multiple websites used the same category but different products, and an administrator with permission restricted to one store changed products in the category, the product selection also changed for other stores.

<!--- ACP2E-508-->

*  The product details page now displays the correct price when a non-default currency for a specified locale is used. Previously, numbers were not localized as expected on the storefront.

<!--- ACP2E-392-->

*  The same error message is now displayed by the API and on the storefront when trying to retrieve the tier prices of a product with duplicate records. Previously, `PUT /V1/products/tier-prices` returned an incorrect error message.

<!--- ACP2E-345-->

*  {{ site.data.var.ce }} now provides validation error messages when you try to add a product URL key with a trailing hyphen. Informative tooltip text is also available.

<!--- ACP2E-267-->

*  The new `ConfigurableWishlistItem.configured_variant` field has replaced the `ConfigurableWishlistItem.child_sku` field. The latter field triggered an internal error when a customer wish list contained an un-configured configurable product.

<!--- ACP2E-84-->

*  URL rewrites are now generated only for the selected stores during the mass attribute update to change product visibility. Previously, the mass attribute update created a URL rewrite for the wrong store.

<!--- ACP2E-39-->

*  When the `Synchronize widget products with backend storage` setting is enabled, {{ site.data.var.ce }} adds recently view product data into the `catalog_product_frontend_action` database table. It includes the customer or visitor ID when adding records. The `recently_viewed_product` section in the response is now empty if customer ID and visitor ID are null. As a result, when the `customer/section/load` Ajax request is sent, {{ site.data.var.ce }} can correctly filter recently viewed products based on customer or visitor ID. Previously, the response included all the data available in the `catalog_product_frontend_action` database table because there was no check for an empty customer or visitor ID.

<!--- ACP2E-13-->

*  Administrators can now change configurable product options in a shopper’s cart from the Admin slide panel. Previously, the slide panel did not work correctly.

<!--- AC-1705-->

*  Page cache is now cleared as expected for the configurable product parent when changes to a child product are saved. Previously, because the cache was not cleared, changes were not selected on the storefront configuration product page. [GitHub-34508](https://github.com/magento/magento2/issues/34508)

<!--- AC-711-->

*  Product lists are now rendered correctly in the Admin. Previously, the product list did not render, and {{ site.data.var.ce }} displayed this error:  `Item (Magento\Catalog\Model\Product\Interceptor) with the same ID "<ID>" already exists`. [GitHub-33145](https://github.com/magento/magento2/issues/33145)

<!--- AC-1214-->

*  Product prices are now the same on the product detail page and in storefront search in multi-store deployments after Catalogue Price Scope changes from **website** to **global**. Previously, the Catalog Search Results page displayed the **global** price, and the product details page displayed the **website** price. [GitHub-34074](https://github.com/magento/magento2/issues/34074)

<!--- ACP2E-316-->

*  Layered navigation now displays products with the highest prices as expected when **Price Navigation Step Calculation** is set to **Manual**.

<!--- ACP2E-711-->

*  You can now change the per-page product limit displayed within a category when **Remember Category Pagination**  is enabled. Previously, the cookie `form_key` and UI `form_key` differed, and {{ site.data.var.ce }} displayed this error:  `Invalid Form Key. Please refresh the page`.

<!--- ACP2E-807-->

*  The EAV indexer now processes product IDs as type `int` to prevent possible performance issues.

<!--- AC-2597-->

*  A new product cache is now successfully generated after you add a new image with a name that  contains '.'  to a product, then save the product and clean the image cache. [GitHub-32699](https://github.com/magento/magento2/issues/32699)

<!--- AC-1205-->

*  {{ site.data.var.ce }} now displays an error message as expected when you try to create an attribute from the product page without completing the Admin field. [GitHub-33099](https://github.com/magento/magento2/issues/33099)

*  Product ratings are now correct on all catalog product lists when the home page contains multiple catalog lists. [GitHub-33867](https://github.com/magento/magento2/issues/33867)

### Configurable products

<!--- ACP2E-687-->

*  {{ site.data.var.ce }} now displays the correct product price for a configurable product with a selected option after changing its quantity on product details page. Previously, the price was reset to the initial value after the quantity changed.

<!--- ACP2E-461-->

*  The `products` query now retrieves prices for configurable products that accurately reflect the **Display Out Of Stock** configuration setting. Previously, the query did not return accurate prices.

<!--- ACP2E-412-->

*  Configurable options are now linked to configurable products that are created in the Admin using `POST /V1/configurable-products/configurable1/child`.

<!--- ACP2E-360-->

*  Multi-select attributes are now saved correctly during product edit. Previously, {{ site.data.var.ce }} saved the default option for non-selected attributes as well as selected attributes when saving a product.

<!--- ACP2E-55-->

*  {{ site.data.var.ce }} now displays configurable attributes as expected during the creation of global `select` attributes via a patch script. Previously, eligible global attributes were hidden.

<!--- AC-2521-->

*  The `addConfigurableProductsToCart` mutation can now be used to add configurable products with custom options. Previously, {{ site.data.var.ce }} threw this error: `Magento 2.3.4 graphql Notice: Undefined index: option_value in /var/www/html/mg234/vendor/magento/module-configurable-product-graph-ql/Model/Resolver/ConfigurableCartItemOptions.php on line 62`. [GitHub-28860](https://github.com/magento/magento2/issues/28860)

*  You can now re-order configurable products with optional custom options. Previously, re-order attempts failed, and meant displayed this error: `Some of the selected options are not currently available`. [GitHub-35409](https://github.com/magento/magento2/issues/35409)

<!--- AC-959-->

*  The `addConfigurableProductsToCart` mutation now works as expected with multiple products. Previously, incorrect product information was returned, or an invalid error message was returned. [GitHub-30948](https://github.com/magento/magento2/issues/30948)

### Customer

<!--- ACP2E-390-->

*  {{ site.data.var.ce }} now displays predefined EAV system attributes correctly according to the website setting on the storefront. Previously, website-level customer attributes that were enabled for one website and disabled for another were displayed as enabled for both websites.

### Downloadable

<!--- MC-40675-->

*  You can now remove sample links and files from a downloadable product. [GitHub-31887](https://github.com/magento/magento2/issues/31887)

### Email

<!--- ACP2E-717-->

*  System-issued emails are now successfully sent to recipients with ".-" in their email address.

<!--- ACP2E-184-->

*  Customers now get email reminders about their abandoned carts on the correct schedule. The new `TIMESTAMPDIFF(DAY, ,)` SQL function has replaced the `TO_DAYS()` function and calculates the difference in the timestamps on the basis of date and time. Previously, email reminders were not sent per schedule because of the incorrect calculation of two date-time values of cart abandonment (any timezone) and server time (UTC).

<!--- AC-776-->

*  {{ site.data.var.ce }} now displays an error message on the Shipping page when a shopper enters an invalid email format after the shopper clicks **Place Order**. Previously, the error message was displayed on the Payment page. [GitHub-33590](https://github.com/magento/magento2/issues/33590

### Frameworks

<!--- ACP2E-658-->

*  The `bin/magento setup:config:set` command no longer overrides already set cache ID prefixes in `app/etc/env.php`.

<!--- ACP2E-517-->

*  The `bin/magento setup:static-content:deploy -s compact` command now includes styles from child themes as expected. Previously, theme CSS files were not present on the storefront after deployment.

<!--- AC-1999-->

*  A new sniff has been added to check if closing slashes are used in `void` elements.

<!--- AC-2896-->

*  {{ site.data.var.ce }} no longer throws an SQL error after assigning a new source to a product and changing its quantity. [GitHub-35262](https://github.com/magento/magento2/issues/35262)

<!--- AC-401-->

*  Attribute sort order now works as specified in the `di.xml` file after update.

<!--- AC-1716-->

*  The `updateCartCurrency` function now sets string instead of an object inside the cart object. Previously, {{ site.data.var.ce }} did not load a quote using `getQuote` because the `updateCartCurrency` function set an object instead of a string inside the cart object. [GitHub-34199](https://github.com/magento/magento2/issues/34199)

<!--- AC-2428-->

*  Deprecation notices no longer occur in unit tests due to`\DateTimeFormatter::formatObject()`. This method now works as expected with numeric values for `$format`.

<!--- AC-2893-->

*  {{ site.data.var.ce }} no longer displays a `preg_replace()` error on the Admin. The third argument (`$subject`) is now of type `array|string` instead of `bool`.

<!--- AC-2583-->

*  The `isFreeShipping` method now returns an integer rather than a Boolean.[GitHub-35164](https://github.com/magento/magento2/issues/35164)

<!--- AC-2855-->

*  {{ site.data.var.ce }} no longer throws the following error when you create a plugin for any method of class `vendor/magento/module-backend/Model/Menu.php`: `Error: Call to undefined method ReflectionUnionType::getName()`. [GitHub-35292](https://github.com/magento/magento2/issues/35292)

<!--- AC-1518-->

*  {{ site.data.var.ce }} now returns a 404 error instead of a 500 error when you navigate to `/checkout/sidebar/updateItemQty/?item_qty=error` on the storefront. Previously, this error was thrown:  `Warning: A non-numeric value encountered in /vendor/magento/module-checkout/Controller/Sidebar/UpdateItemQty.php on line 69`. [GitHub-34380](https://github.com/magento/magento2/issues/34380)

<!--- ACP2E-847-->

*  {{ site.data.var.ce }} no longer triggers a `trim(): Passing null to parameter #1 ($string) of type string is deprecated` error when the AMPQ connection is configured without SSL configuration.

<!--- AC-2414-->

*  Corrected the `longblog` database definition to `long blob`. [GitHub-35108](https://github.com/magento/magento2/issues/35108)

<!--- AC-1526-->

*  Knockout text containing single quotes is now translatable. [GitHub-34319](https://github.com/magento/magento2/issues/34319)

<!--- AC-2505-->

*  A `TypeError` in `magento2/app/code/Magento/Security/Model/AdminSessionsManager.php` has been corrected from `int` to `string`.  [GitHub-34415](https://github.com/magento/magento2/issues/34415)

<!--- AC-2511-->

*  `.htpasswd` has been added to banned locations in the `nginx` configuration file. [GitHub-35150](https://github.com/magento/magento2/issues/35150)

<!--- AC-2013-->

*  Load time of category product list pages have been improved by adding `Magento_Ui/js/core/app` as a `deps` to `app/code/Magento/Ui/view/frontend/requirejs-config.js`. [GitHub-34847](https://github.com/magento/magento2/issues/34847)

<!--- AC-2101-->

*  The `ProductRepository.php:get` method now returns cache keys once. Previously, they were returned twice. [GitHub-34958](https://github.com/magento/magento2/issues/34958)

<!--- AC-2507-->

*  Added an error message to a new exception that was created in the exception handler for cron jobs. [GitHub-34941](https://github.com/magento/magento2/issues/34941)

<!--- AC-2247-->

*  The ReadMe files for the `GraphQl-GroupedProductGraphQl` modules have been updated. [GitHub-34951](https://github.com/magento/magento2/issues/34951)

<!--- AC-2079-->

*  The storefront print order/invoice/credit memo pages no longer display the default Luma logo instead of the logo that has been specified for display on the website. [GitHub-34942](https://github.com/magento/magento2/issues/34942)

### General fixes

<!--- AC-2883-->

*  Setting the maximum session size to 0 (Admin **Store**  >  **Settings**  >  **Configuration  - Advanced**) no longer logs out the administrator. [GitHub-35312](https://github.com/magento/magento2/issues/35312)

<!--- ACP2E-675-->

*  Customer address attributes configuration settings are now loaded correctly based the website the customer is assigned to when you add a new customer address from the Admin that is assigned to a non-default website.

<!--- ACP2E-448-->

*  {{ site.data.var.ce }} no longer throws an exception when you add a bundle product through Page Builder.

<!--- ACP2E-381-->

*  You can now create a customer account on an iOS device with the inclined apostrophe (’) in the first, middle, or last name. Previously, only the straight apostrophe was allowed, and using iOS 11+ default inclined apostrophe resulted in a `Name is not valid!` error.

<!--- ACP2E-378-->

*  The `products` query now returns product information that accurately reflects the "Show Related Products" configuration. The `related_products`, `upsell_products`, and `crosssell_products` fields in the GraphQL ProductInterface are now resolved according to Show Related Products, Show Upsell Products, and Show Cross-Sell Products configuration respectively.

<!--- ACP2E-234-->

*  The **Set Product as New From Date** attribute now displays the correct date when the **Set Product as New** attribute is set through a mass product bulk update. Previously, **Set Product as New From Date** was displayed as **Jan 1, 1970**.

<!--- ACP2E-277-->

*  Users with restricted roles are no longer automatically granted access to new modules.

<!--- ACP2E-16-->

*  Related product rule conditions now work as expected with products that contain `multiselect` attributes.

<!--- AC-2719-->

*  Merchants can now add a tier price attribute (`tier_price`) to product comparisons. Previously, the product comparisons page crashed when the **Comparable on storefront** setting for this attribute was enabled. [GitHub-35244](https://github.com/magento/magento2/issues/35244)

<!--- AC-2441-->

*  {{ site.data.var.ce }} now displays an error message when you set an invalid cookie domain (**Store**  > **Configurations**  >  **Web**  >  **Default Cookie Settings Cookie Domain**). Previously, the website crashed. [GitHub-35048](https://github.com/magento/magento2/issues/35048)

<!--- AC-2765-->

*  {{ site.data.var.ce }} no longer throws an error when an administrator with roles scoped to a single website adds product to Content Elements using PageBuilder. Previously, {{ site.data.var.ce }} threw an SQL error.

<!--- AC-197-->

*  Validation has been added to the second line of the street address on the edit and add address pages. The minimum and maximum text lengths that are specified on the second are now enforced.

<!--- ACP2E-798-->

*  {{ site.data.var.ce }} no longer throws the following error during the creation of a catalog rule in the Admin after upgrade: `A technical problem with the server created an error. Try again to continue what you were doing. If the problem persists, try again later`.

<!--- AC-2445-->

*  {{ site.data.var.ce }} no longer throws an error when you activate the  **Check here to link an RSS feed to your Wish List** checkbox before clicking on **Share Wish list**. [GitHub-34998](https://github.com/magento/magento2/issues/34998)

<!--- AC-2019-->

*  The title of the **Show Password** checkbox (Customer Login, Customer Registration, Customer Edit (Change Password section),  and Customer Set New Password forms) is now translatable. [GitHub-34857](https://github.com/magento/magento2/issues/34857)

<!--- ENGCOM-9062-->

*  Updated the labels and comment descriptions in `app/code/Magento/NewRelicReporting/etc/adminhtml/system.xml`. [GitHub-31947](https://github.com/magento/magento2/issues/31947)

<!--- ENGCOM-8600-->

*  Removed unneeded `csp_whitelist.xml` files. [GitHub-30607](https://github.com/magento/magento2/issues/30607)

### GraphQL

<!--- AC-2361-->

*  A missing `price_range` attribute has been added to the GraphQL `BundleItemOption` type. [GitHub-35010](https://github.com/magento/magento2/issues/35010)

<!--- AC-2367-->

*  The `products` query no longer returns attributes as an aggregation when the **Use in Search Results** Layered Navigation setting is disabled. [GitHub-33318](https://github.com/magento/magento2/issues/33318)

<!--- AC-1760-->

*  A `price_including_tax` field has been added to `CartItemPrices`. [GitHub-29057](https://github.com/magento/magento2/issues/29057)

<!--- AC-2520-->

*  The `new_from_data` and `new_to_datefields` in `ProductInterface` are no longer deprecated. [GitHub-34783](https://github.com/magento/magento2/issues/34783)

<!--- AC-2364 1456-->

*  The `categories` query no longer throws an exception when fetching a list of categories one of which contains an image that cannot be found on the filesystem. Previously, {{ site.data.var.ce }} threw this exception: `Category image not found`. [GitHub-34266](https://github.com/magento/magento2/issues/34266)

<!--- AC-2368-->

*  The `products` query now returns `category_uid` as an aggregation as expected. [GitHub-32557](https://github.com/magento/magento2/issues/32557)

<!--- AC-2373-->

*  The `updateCartItems` mutation now removes products as expected when the product stock has reached the maximum stock amount. [GitHub-30220](https://github.com/magento/magento2/issues/30220)

<!--- AC-2366 734 MC-42964 -->

*  The `urlResolver` query now resolves the path delimiter (/) correctly when multiple homepages have the same identifier. Previously, the query did not resolve the delimiter and returned null. [GitHub-33615](https://github.com/magento/magento2/issues/33615)

<!--- AC-1881-->

*  `customer` queries now fetch bundle product multi-select options as expected when querying orders. [GitHub-34717](https://github.com/magento/magento2/issues/34717)

<!--- AC-1668-->

*  {{ site.data.var.ce }} sessions no longer end after a GraphQL request is made. Previously, the `ClearCustomerSessionAfterRequest` plugin logged out the shopper. [GitHub-34550](https://github.com/magento/magento2/issues/34550)

<!--- ACP2E-634-->

*  Configurable product price range in `products` query responses are now correctly calculated when the **Display Out of Stock Products** configuration setting is enabled. Previously, disabled options were taken into account in the minimum and maximum price calculation.

<!--- ACP2E-531-->

*  The `products` query now returns correctly filtered multiple categories when sorting by position.

<!--- ACP2E-499-->

*  `setShippingAddressesOnCart` requests now successfully validate region IDs. Previously, {{ site.data.var.ce }} threw an error when you used region ID instead of region code.

<!--- ACP2E-470-->

*  `products` queries now return only the categories associated with the store passed in the request.

<!--- ACP2E-363-->

*  The `categoryList` query now returns results that reflect the queried store's root category when the store is specified in the header. Previously, categories from the default root category were included in results even though another store was specified in the header.

<!--- AC-1955-->

*  The `products` query no longer returns attributes as an aggregation when the **Use in Search Results Layered Navigation** setting is disabled. [GitHub-33318](https://github.com/magento/magento2/issues/33318)

<!--- AC-2365-->

*  The `cart` query now returns only one payment methods for free orders. Previously, all active payment methods were returned in the query response. [GitHub-34036](https://github.com/magento/magento2/issues/34036)

<!--- AC-818-->

*  `products` queries no longer returns `price_range` values for configurable products that are affected by disabled variants. [GitHub-33629](https://github.com/magento/magento2/issues/33629)

<!--- AC-210-->

*  Added a plugin before the `collectQuoteTotals` call to ensure store credits are not applied multiple times.

<!--- ACP2E-636-->

*  The `generateCustomerTokenAsAdmin` mutation now retrieves customer tokens as expected. Previously, tokens were not returned, and this error was returned: `Customer email provided does not exist`.

<!--- AC-2371-->

*  GraphQL schema is now valid when a custom `type` product attribute is defined. Previously, the schema was invalid because the `type` attribute on products types was overwritten by the custom `type` attribute. [GitHub-34929](https://github.com/magento/magento2/issues/34929)

<!--- AC-2797-->

*  Customers added or updated with the `createCustomer`, `createCustomerV2`, `updateCustomer`, or `updateCustomerV2` mutation are now added with active newsletter subscriptions. Previously, customers were unsubscribed from newsletters even when the request contained proper input parameters. [GitHub-33599](https://github.com/magento/magento2/issues/33599)

<!--- AC-1883-->

*  The `products` query for a specific store view now returns only categories that are in the specific website's root category in multi-site deployment. Previously, the query returned categories from the root categories of other websites. [GitHub-34570](https://github.com/magento/magento2/issues/34570)

<!--- AC-2712-->

*  The `products` query now returns only the subcategory of provided category ID. Previously, it returned all categories. [GitHub-35220](https://github.com/magento/magento2/issues/35220)

<!--- AC-2794-->

*  The `customerOrders` query now responds as expected when the `gift_message` object is specified in the response but no gift message exists. Previously, the query returned this message: `Can't load gift message for order is returned`. [GitHub-28957](https://github.com/magento/magento2/issues/28957)

<!--- AC-2515-->

*  Fixed a bug with the `catalog_category_product` indexer that caused the `products` query to return categories from another store. [GitHub-31253](https://github.com/magento/magento2/issues/31253)

<!--- AC-2063-->

*  The `generateCustomerToken` mutation now creates an entry in the `customer_log` as expected after generating a customer token. [GitHub-33378](https://github.com/magento/magento2/issues/33378)

### Google Analytics

<!--- AC-2574 2685-->

*  The Google Tag module has been added to the codebase, which supports the transition to Google Analytics 4 in July 2023.  You can currently use and collect new data in your Google Universal Analytics properties, but Google Universal will reach end-of-life in July 2023. [GitHub-35204](https://github.com/magento/magento2/issues/35204), [GitHub-35376](https://github.com/magento/magento2/issues/35376)

### Image

<!--- ACP2E-71-->

*  Images on product details pages no longer flicker, and images remain centered as expected. Previously, after a product detail page completed loading an image, the image visibly shifted downwards.

### Import/export

<!--- ACP2E-676-->

*  Related, upsell, and cross-sell product position in the export CSV is now correct after the deletion of a cross-sell product from the Admin before regenerating the CSV file. Previously, cross-sell product positions were not re-calculated after a cross-sell product was removed, and product position order was incorrect.

<!--- ACP2E-632-->

*  {{ site.data.var.ce }} now checks for a custom view before filtering columns when exporting reports. Previously, exported reports did not take into account custom views, and exported columns were incorrect.

<!--- ACP2E-502-->

*  {{ site.data.var.ce }} now successfully imports images with long file names. Previously, {{ site.data.var.ce }} did not import the image and threw this error: `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s):`.

<!--- ACP2E-294-->

*  Category ID attributes are now available in scheduled export filters.

<!--- ACP2E-59-->

*  Bundle products that contain a question mark (?) in the option title can now be imported successfully because of improvements to the query builder inside `populateExistingOptions` method. The option title is also displayed correctly. Previously, after the initial import, successive imports resulted in corrupted behavior and doubled options. Shoppers could not add the product to the cart, either.

<!--- ACP2E-766-->

*  Added validation for category names during import. Previously, {{ site.data.var.ce }} did not validate category names, which lead to errors when category names exceeded 255 characters.

<!--- AC-2096-->

*  Existing records in the `catalog_url_rewrite_product_category` table are now deleted before inserting new ones. Previously, the following error occurred during multi-store product import: `SQLSTATE[23000]: Integrity constraint violation`. [GitHub-34210](https://github.com/magento/magento2/issues/34210)

### Infrastructure

<!--- ACP2E-2039-->

*  A deprecated Context Menu plugin has been removed from plugins list.

<!--- ACP2E-2039-->

*  The TinyMCE editor toolbar-related logic in the Page Builder module has been updated as a result of introducing `delayedRender` logic for the toolbar in TinyMCE.

<!--- MC-42655-->

*  Race conditions no longer interrupt the creation of the `contentUpdated` event listener. [GitHub-32068](https://github.com/magento/magento2/issues/32068)

<!--- AC-3044-->

*  The `getTypeID` function now returns product type ID not product ID. [GitHub-35458](https://github.com/magento/magento2/issues/35458)

<!--- AC-2911-->

*  jQuery UI slider and `SelectMenu` mapping has been corrected in `vendor/magento/module-theme/view/base/requirejs-config.js`.

*  Observers placed on `sales_order_state_change_before` now support the retrieval of data from the order object. The `sales_order_state_change_before` `event` argument has been updated. [GitHub-26789](https://github.com/magento/magento2/issues/26789)

<!--- AC-2239-->

*  `indexer:reset` has been refactored to call `$indexer->invalidate()`. [GitHub-34988](https://github.com/magento/magento2/issues/34988)

<!--- AC-2055-->

*  You can now use use the colon symbol in an `htmlClass` attribute value, which supports the use of additional components such as the Tailwind UI. [GitHub-34430](https://github.com/magento/magento2/issues/34430)

### Logging

<!--- ACP2E-203-->

*  Customer, customer address, and order actions are now logged correctly in the Admin action report. Previously, {{ site.data.var.ce }} did not log actions if the `postDispatch` handler had not been specified in configuration settings.

### MFTF
#### Action groups

Repetitive actions have been replaced with action groups in these tests:

`AdminConfigurableProductChildrenOutOfStockTest` [GitHub-32378](https://github.com/magento/magento2/issues/32378)
`AdminCreateStoreViewTest` [GitHub-34631](https://github.com/magento/magento2/issues/34631)

#### New tests

`AdminUnlockAdminUserEntityTest` [GitHub-34836](https://github.com/magento/magento2/issues/34836)

`StorefrontNewsletterSubscriptionWithEnabledNeedToConfirmConfigTest` [GitHub-33344](https://github.com/magento/magento2/issues/33344)

#### Refactored tests

`AdminCancelTheCreatedOrderWithCashOnDeliveryPaymentMethodTest` [GitHub-33692](https://github.com/magento/magento2/issues/33692)

### Newsletter

<!--- ACP2E-35-->

*  Logged-in customers are no longer marked as guests in Admin > **Marketing** > **Newsletter Subscribers**.

<!--- AC-2102-->

*  The newsletter subscription confirmation email now has the correct, store-specific email address in the **From** field if the customer is assigned to a non-default store and subscribed or unsubscribed from the Admin. Previously, the customer received an email with default email in **From** header. [GitHub-34963](https://github.com/magento/magento2/issues/34963)

<!--- AC-2509-->

*  The unsubscribe URL in the newsletter email template now works as expected. [GitHub-33310](https://github.com/magento/magento2/issues/33310)

### Order

<!--- ACP2E-279-->

*  Guest customer details are now saved successfully after an order is edited. Previously, some customer details were lost, including `customer_firstname` and `customer_lastname, x_forwarded_for`.

<!--- ACP2E-92-->

*  Merchants can no longer create a credit memo with a decimal total quantity when **Decimal qty** is disabled on a product or global setting level. Previously, merchants could create a credit memo for decimal total quantity where it was not applicable.

<!--- ACP2E-56-->

*  Filter by date now works properly for Invoices, shipments, credit memos, CMS pages, and CMS block grids when the timezone set in preferences differs from the timezone set on a local computer. Previously, the date was incorrectly parsed and the filtered results included data outside of the set date range.

<!--- AC-1536-->

*  {{ site.data.var.ce }} no longer changes custom email addresses that are assigned to orders when you change the main email address assigned to the customer on the Admin account edit page. Previously, when you edited the main email address for a customer, the new email address was assigned to every order created for that customer. [GitHub-34397](https://github.com/magento/magento2/issues/34397)

<!--- AC-2664-->

*  {{ site.data.var.ce }} now displays records from the requested store on the credit memos grid page in deployments running PHP 7.4. Previously, {{ site.data.var.ce }} threw the following error after you created a credit memo and tried to view it: `The store that was requested wasn't found. Verify the store and try again`.

<!--- AC-2442-->

*  {{ site.data.var.ce }} now displays credit memos on the credit memo grid page for orders created from store views whose name is prepended with numbers. Previously, {{ site.data.var.ce }} displayed the error: `The store that was requested wasn't found. Verify the store and try again. Exception in /var/www/html/vendor/magento/module-store/Model/StoreRepository.php:75`. [GitHub-35122](https://github.com/magento/magento2/issues/35122)

<!--- ACP2E-31-->

*  {{ site.data.var.ce }} now displays the free shipping cost (0) on the Admin and storefront invoice page totals. Previously, when shipping was zero for an order, {{ site.data.var.ce }} did not display the shipping amount in total on the invoice page shipping total.

<!--- AC-1778-->

*  The `increment_id` column in the `sales_order` table has been increased. Previously, third-party modules that assumed that `sales_order.increment_id` had a length of 50 characters saved only the first 32 characters of an `increment_id`. [GitHub-34521](https://github.com/magento/magento2/issues/34521)

### Payment methods

<!--- ACP2E-25-->

*  Administrators can now place an order on the Admin using the PayPal PayflowPro payment method. Previously, {{ site.data.var.ce }} displayed this error: `No such entity with cartId = 0`.

<!--- AC-2093-->

*  Payment Review page in the checkout workflow now displays the correct payment method name when payment is made with Venmo, PayPal Later, or PayPal.

<!--- AC-1195-->

*  The `cart` query no longer returns all active payment methods for free orders. [GitHub-34036](https://github.com/magento/magento2/issues/34036)

#### Braintree

<!--- BUNDLE-3088-->

*  Merchants can now submit a partial refund for orders paid with Apple Pay through Braintree. This was a known issue in {{ site.data.var.ce }} 2.4.4.

#### PayPal

<!--- ACP2E-296-->

*  {{ site.data.var.ce }} now shows the correct customer name in a guest order paid for with PayPal. Previously, the customer name was displayed as Guest.

<!--- AC-2606-->

*  The resolver for the createPaypalExpressToken mutation has been updated to correctly use the value specified in the use_paypal_credit input field. Previously, it attempted to use an invalid `paypal_credit` field. [GitHub-35180](https://github.com/magento/magento2/issues/35180)

### Performance

<!--- ACP2E-52-->

*  Redis cache management has been improved by the addition of TTL (expiration date) for configurable products’ associated product data caches. Previously, these caches were not evicted due to missing TTL values if Redis key eviction policy was configured to a volatile eviction policy.

<!--- ACP2E-464-->

*  The new `Grid Filter Condition Type` customer/customer address attribute controls how an attribute filter is matched against the attribute values in the database, Options include `Partial Match`, `Prefix Match`, and `Full Match`.

<!--- AC-1136-->

*  The Catalog Search fulltext indexer has been relocated outside the stores loop, which streamlines re-indexing. [GitHub-33984](https://github.com/magento/magento2/issues/33984)

<!--- AC-2508-->

*  Fixed issue with `array_merge` in loops. [GitHub-33929](https://github.com/magento/magento2/issues/33929)

### Pricing

<!--- ACP2E-445-->

*  Price attributes that have no value in the default scope (but that are defined at the store-view level) are now indexed properly. Previously, the SQL expressions that retrieves price attributes values from EAV table did not take into account the scenario in which the value was not defined in the default scope.

<!--- ACP2E-313-->

*  The price listed on the product detail page is now the same as the price listed in the checkout workflow for tier prices that differ by quantity selected (for example, a product priced differently based on buying 2 items versus 5 items). Previously, the checkout price reflected the price for the lowest product quantity.

### ReCAPTCHA

*  The **Submit** button on the Login and Create an Account pages is now inactive until ReCaptcha is fully loaded.

### Roles

*  The **Store** >  **Configuration** > **Services** page now displays {{ site.data.var.ce }} Web API information as expected when Resource Access is set to  **Custom** on the Role Resources tab. [GitHub-35506](https://github.com/magento/magento2/issues/35506)

### Search

<!--- ACP2E-645-->

*  Filtering products by color swatch on the layered navigation displays the correct image for the products after the fix.

<!--- ACP2E-615-->

*  Elasticsearch queries now work as expected when `int` is configured as a searchable backend `type` attribute. Previously, {{ site.data.var.ce }} threw an `Elasticsearch\Common\Exceptions\BadRequest400Exception` exception.

<!--- ACP2E-99-->

*  You can now use search synonyms together with the **Minimum Terms to Match** parameter In Elasticsearch queries. Previously, if this parameter was specified in settings and search terms were added for specific keywords, the search returned no results.

<!--- ACP2E-72-->

*  {{ site.data.var.ce }} now displays an accurate search results suggestion count on the storefront in deployments where Search Suggestions and the **Show Results Count for Each Suggestion** setting are enabled. Previously, the count displayed next to the keywords was zero.

<!--- AC-700-->

*  Products sorted by custom attributes on the Catalog page are now displayed in the expected order. Previously, products were sorted by their attribute option value ID, which reflects the order in which they they were added to the attribute. [GitHub-33810](https://github.com/magento/magento2/issues/33810)

<!--- AC-645-->

*  Filtering products by color swatch in the layered navigation now displays the correct product images. Previously, the layered navigation `PageCache` key did not include filter parameters for configurable products.

<!--- AC-2051-->

*  Fixed PHP errors on the `catalogsearch/advanced/result` and  `catalogsearch/advanced/index` pages.  Previously,  {{ site.data.var.ce }} displayed this error  when an array was passed in any  advanced search string :  `Warning: trim() expects parameter 1 to be string, array given | magento/module-catalog-search`. [GitHub-33586](https://github.com/magento/magento2/issues/33586)

### Shipping

<!--- AC-2052-->

*  {{ site.data.var.ce }} no longer throws an error when loading UPS shipping rates if no allowed shipping methods are selected. Previously, when a shopper entered a shipping address in the checkout workflow under these conditions, no other shipping methods were displayed, and {{ site.data.var.ce }} displayed an error on the storefront. [GitHub-34411](https://github.com/magento/magento2/issues/34411)

<!--- AC-2621-->

*  Virtual product prices are now excluded in calculation table rate shipping amount. Previously, shipping costs for these products were not calculated correctly.[GitHub-35185](https://github.com/magento/magento2/issues/35185)

<!--- ACP2E-209-->

*  Table rate shipping rates with zero price are now displayed correctly in the checkout workflow Order Summary block for orders that have had a discount coupon applied. Previously, the shipping method was not displayed.

### Tax

<!--- ACP2E-735-->

*  Fixed Product Tax (FPT) is now correctly displayed for products in the shopping cart. Previously, if multiple products in the shopping cart have **Fixed Product Tax (FPT)** and **Apply Tax To FPT** were enabled, all FPTs were assigned to the last product in the shopping cart and reset for other products.

<!--- ACP2E-350-->

*  The Fixed Product Tax (FPT) total for the order summary section of the checkout workflow is now calculated correctly.

<!--- ACP2E-291-->

*  {{ site.data.var.ce }} now updates the Excluding Tax tier price for a simple product on the product page as expected after the quantity of the simple product has changed.

<!--- ACP2E-182-->

*  Validation has been added to the store configuration page to verify if the selected country from the dropdown list is on the EU country list. The **Validate VAT Number** button is now visible only for EU countries. Previously, the button was visible for all countries, including the U.K.

<!--- ACP2E-45-->

*  Tier price are now calculated correctly when **Display Product Prices In Catalog** is set to either **Excluding Tax** or **Including and Excluding Tax**. Previously, the product details page displayed tier prices with taxes despite the setting.

<!--- AC-1925-->

*  Taxes are now applied correctly for orders to any valid address in storefronts using the Portuguese locale. [GitHub-34271](https://github.com/magento/magento2/issues/34271)

<!--- AC-1084-->

*  The `cart` query no longer includes tax when returning `subtotal_with_discount_excluding_tax`. [GitHub-33905](https://github.com/magento/magento2/issues/33905)

<!--- ACP2E-651-->

*  Web API requests for order data (`GET /V1/orders/`) no longer returns negative values for row totals.

### Test

<!--- AC-2004-->

*  Corrected errors with `Magento.GraphQl.CatalogGraphQl.ProductSearchTest.testSearchSuggestions` when run with AWS Elasticsearch configuration.

<!--- AC-1113-->

*  The `testCreateProductOnStoreLevel` integration test no longer causes a nested transaction on the database.

*  The following exception no longer occurs when running WebAPI tests for the Send Friend feature when product image has not set on PHP 8.1:  `exception main.ERROR: /var/www/html/lib/internal/Magento/Framework/DataObject.php:131 strpos(): Passing null to parameter #1 ($haystack) of type string is deprecated`. [GitHub-34864](https://github.com/magento/magento2/issues/34864)

### Translations and locales

<!--- ACP2E-537-->

*  You can now use the Translate inline tool to edit the same element more that once. Previously, only the first change made using this tool was included.

<!--- ACP2E-437-->

*  The store view selector no longer blocks the translation pane when you edit Admin text or labels. You can now edit these features from the translation pane, and the interface displays these changes when you click **Submit**.

<!--- ACP2E-362-->

*  The Admin date-time format for Brazilian Portuguese and French locales is now valid.

<!--- ACP2E-785-->

*  Added a grave accent [ \` ] character to the name validator so that customer account can be created for first or last names that include this accent.

<!--- ACP2E-682-->

*  The text on the **Add to cart** button on the Product Details page now remains translated into the language specified in the associated locale. Translation files are now converted to corresponding JavaScript files based on the areas, themes, and locales when `translate_strategy=embedded`. Previously, the text reverted to English after the product was added to the cart.

<!--- ACP2E-752-->

*  Search Synonyms now respect their assigned store scope. Previously, a synonym assigned to a specific store was searchable on any other store.

<!--- AC-1178-->

*  Problems with the Filipino (Philippines) locale has been resolved. [GitHub-33996](https://github.com/magento/magento2/issues/33996)

### UI

<!--- ACP2E-557-->

*  Lengthy product names in the **Catalog** > **Products** grid are now word-wrapped instead of displayed in a single line.

<!--- ACP2E-347-->

*  The minimal and maximum date-of-birth range is now saved as a correct timestamp and then converted from a valid timestamp to a valid date format.

<!--- ACP2E-280-->

*  The unavailability of `magento.com` no longer causes performance issues during Admin login. A timeout on the request to fetch release notification has been added.

<!--- ACP2E-88-->

*  The results of the Admin order, customer, and product grid filters now persist as expected when displayed in the Chrome browser.

<!--- AC-2750-->

*  You can now create a customer from the Admin when `Magento_LoginAsCustomerAdminUi` is enabled and **Store View To Login To** is set to manual selection. Previously, {{ site.data.var.ce }} threw this error: `(Magento\Framework\Exception\LocalizedException): Unable to get Customer ID`. [GitHub-33096](https://github.com/magento/magento2/issues/33096)

<!--- AC-2076-->

*  The Next arrow is now disabled as expected when a shopper reaches the last thumbnail image in the product image gallery.

<!--- AC-2060-->

*  The **Search by keyword** input field now has an `aria-label` element instead of a placeholder on the **Catalog** > **Product** page.

<!--- AC-3058-->

*  The Privacy Policy link in Admin footer now links to the new Adobe Privacy Policy.

<!--- AC-2880-->

*  Administrators can now access Admin menu options when JavaScript bundling is enabled in production mode.  [GitHub-35325](https://github.com/magento/magento2/issues/35325)

<!--- AC-2851-->

*  Administrators can now set the current user’s expiration date higher than 2038 and save the user successfully. Previously, the user whose expiration date was changed could not log back in after logging out.

<!--- AC-751-->

*  {{ site.data.var.ce }} now displays an informative error message when an administrator tries to save an address with excessive street lines in Admin **Store** > **Attributes**  > **Customer Address**.  The administrator can now delete the extra address information and successfully save the address. Previously, {{ site.data.var.ce }} committed the extra lines but did not save the data.

<!--- ACP2E-546-->

*  The product listing view configuration in the database and local storage has been updated. Custom grid views are now saved during page reload and view changes.

<!--- ACP2E-747-->

*  You can now switch between store views when website restrictions are enabled. Previously, problems with the store view switcher prevented switching store views.

<!--- AC-2042-->

*  The favicon icon upload form now supports `.ico` file types. Previously, when you tried to upload a favicon file with this extension type in the Admin, {{ site.data.var.ce }} displayed this error: `Warning: imagecreatefromstring(): one parameter to a memory allocation multiplication is negative or zero, failing operation gracefully in /var/www/html/vendor/magento/module-media-storage/Model/File/Validator/Image.php on line 64`. [GitHub-34858](https://github.com/magento/magento2/issues/34858)

<!--- AC-3122-->

*  Corrected display issues with the drop-down Select menu in the Admin grid. [GitHub-35386](https://github.com/magento/magento2/issues/35386)

<!--- AC-2055-->

*  [GitHub-34430](https://github.com/magento/magento2/issues/34430)

### URL rewrites

<!--- AC-2535-->

*  URLs for a product in a specific store view only are now removed from the `url_rewrite` table and Admin after the attribute code visibility status for the specific store view is changed to **Not Visible Individually**.  Previously, all URLs were removed for the product in the `url_rewrite` table. [GitHub-34937](https://github.com/magento/magento2/issues/34937)

### Video

<!--- ACP2E-485-->

*  You can now use YouTube URL parameters using Page Builder to add a new video. Previously, these parameters were automatically removed from the URL.

<!--- AC-2251-->

*  You can now set a Vimeo video to run in the background in a `banner` element when CSP is set to `restrict mode`. Previously, {{ site.data.var.ce }} threw a JavaScript error.

### Web API framework

<!--- ACP2E-694-->

*  Mutex has been implemented for orders to prevent race conditions during update by concurrent requests. Previously, race conditions during concurrent REST API calls resulted in an overwrite of shipping status information in the Admin Items Ordered table.

<!--- ACP2E-677-->

*  Product image role inheritance is now preserved unless explicitly defined in the payload when updating a product in a specific store view via the REST API.

<!--- AC-2231-->

*  The Swagger schema (`/rest/schema`) now uses unique operation IDs.

<!--- AC-2845-->

*  Cart price rules created through the `POST /V1/salesRules/` endpoint now retain existing coupon code values after changing status from disabled to enabled. [GitHub-35298](https://github.com/magento/magento2/issues/35298)

<!--- AC-2764-->

*  Cart price rules created through the `POST /V1/salesRules/` endpoint now contain valid `from_date` and `to_date` values. [GitHub-35265](https://github.com/magento/magento2/issues/35265)

<!--- AC-2522-->

*  `CartItemInterface` now includes `customizable_options`. [GitHub-31180](https://github.com/magento/magento2/issues/31180)

<!--- AC-2898-->

*  REST API bulk PUT and DELETE requests now work as expected when the `Magento_ReCaptchaWebapiRest` module is enabled. [GitHub-35348](https://github.com/magento/magento2/issues/35348)

<!--- AC-763-->

*  The Bulk Rest API now works with the `bySku` option for configurable products. Previously, it returned a 500 error.

<!--- AC-441-->

*  Creating a new special price schedule with the `POST /V1/products/special-price` endpoint now works as expected. Previously, the endpoint returned this error: `Future Update already exists in this time range. Set a different range and try again`.

<!--- AC-1169-->

*  The `/V1/products/base-prices` endpoint now works as expected with **Catalog Price Mode - Website**. [GitHub-30132](https://github.com/magento/magento2/issues/30132)

### Wish list

<!--- ACP2E-459-->

*  Updating an item quantity from the wish list page now updates the quantity on the product detail page as expected. {{ site.data.var.ce }} now picks up the updated value from the product URL and populates the `qty` field of product detail page from the wishlist itself.

## Known Issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-issues.md %}

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

## Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.4.5 using [Composer]({{ page.baseurl }}/install-gde/composer.html).