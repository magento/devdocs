---
group: release-notes
title: Adobe Commerce 2.4.5 Release Notes
---

{{ site.data.var.ee }} 2.4.5 introduces support for

This release includes almost quality fixes and enhancements.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ee }} 2.4.5 contains backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Other release information

Although code for these features is bundled with quarterly releases of the {{ site.data.var.ee }} core code, several of these projects (for example, B2B, Page Builder, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

### Hotfixes included in this release

{{ site.data.var.ee }} 2.4.5 includes resolution of all issues that were addressed by the following hotfixes, which were provided for {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.4, 2.4.3-p2, and 2.3.7-p3:

## {{ site.data.var.ee }} 2.4.5 highlights

Look for the following highlights in this release.

### Security enhancements

This release includes  security fix and platform security improvements. This security fix has been backported to {{ site.data.var.ee }} 2.4.3-p3 and {{ site.data.var.ee }} 2.3.7-p4.

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts:

*  IP allowlisting
*  [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html)
*  use of a VPN
*  use of a unique location rather than `/admin`
*  good password hygiene

See Adobe Security Bulletin for the latest discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  reCAPTCHA support has been added to the Wish List Sharing, Create New Customer Account, and Gift Card forms.

*  ACL resources have been added to Inventory.

*  Inventory template security has been enhanced.

*  The `MaliciousCode` filter has been upgraded to use the `HtmlPurifier` library.

### Platform enhancements

{{ site.data.var.ee }} 2.4.5 now supports

*  Composer 2.2  <!--- AC-2033-->

*  Elasticsearch v7.17  <!--- AC-2425-->

*  The `TinyMCE` library has been upgraded to v5.10.0. <!--- AC-2039 1784-->

*  `PHPStan` has been upgraded to v1.5. <!--- AC-2876-->

*  The `league/fly` Composer dependencies have been to v2.4.3. <!--- AC-2744-->

*  the `grunt-eslint` (NPM) library has been upgraded to the latest version. <!--- AC-2700-->

*  The `jQuery Storage` libraries have been replaced with `julien-maurel/js-storage`. <!--- AC-2627-->

*  The `php-cs-fixer` and `phpcs` static code analysis tools are now compatible with PHP 8.x. <!--- AC-2259-->

*  The `php-cs-fixer` Composer dependency has been updated to v3.4.0. <!--- AC-2259-->

### Performance and scalability enhancements

{{ site.data.var.ee }} performance enhancements

Performance enhancements in this release:

### GraphQL

This release includes these GraphQL enhancements:

#### New mutations

*  **Performance improvements**:

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### B2B

This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html)

### PWA Studio

PWA Studio v.12.x.x is compatible with {{ site.data.var.ee }} 2.4.5. It includes support for . For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Version compatibility](https://developer.adobe.com/commerce/pwa-studio/integrations/adobe-commerce/version-compatibility/) for a list of PWA Studio versions and their compatible {{ site.data.var.ee }} core versions.

### PayPal Payment enhancements

### Live Search

### Accessibility updates

This release brings increased conformance to standard accessibility guidelines.

### Page Builder

## Fixed issues

<!--- AC-1589-->

We are fixing hundreds of issues in the {{ site.data.var.ee }} 2.4.5 core code.

### Installation, upgrade, deployment

<!--- ACP2E-49-->

*  You can now rename a data patch and add the old class name as an alias in the `patch_list` database table. {{ site.data.var.ee }} now checks whether data patch aliases already existed in the database before applying the patch. Previously, {{ site.data.var.ee }} threw an error under these conditions.

<!--- AC-3036-->

*  {{ site.data.var.ee }} no longer throws an exception when you try to change the Admin URL to a custom URL from the Admin. Previously, after changing the Admin URL, you could not log in. [GitHub-35416](https://github.com/magento/magento2/issues/35416)

### Accessibility

<!--- AC-2786-->

The **Shopping bag** button now provides a programmatic or textual indication of its state. Screen reader users are informed that clicking this button will expand other content, or that the associated content is expanded or collapsed. Previously, this button did not provide a programmatic or textual indication of its state.

<!--- AC-2496-->

*  Payment Information credit card option text elements or images of text now meet the WCAG 2.0 required minimum color contrast ratio of 4.5:1 for standard text of 18pt (24px) or 14pt (19px) if bolded. Previously, they did not meet the expected contrast ratio.

<!--- AC-2483-->

*  **Address book**  >  **Communication**  > **Account information** custom focus indicators now provide a contrast ratio of at least 3:1 against the background color.

<!--- AC-2486-->

*  Filter and sort button text now meet the WCAG 2.0 required minimum color contrast ratio of 4.5:1 for standard text of 18pt (24px) or 14pt (19px) if bolded. Previously, navigation buttons for carousels did not meet these minimum contrast requirements.

<!--- AC-2499-->

*  Screen readers announce the word “Venia” only once when navigating to Venia headers and footers. Previously, the same word was announced twice consecutively.

<!--- AC-2585-->

*  Buttons that trigger dropdowns now provide information to screen readers that indicate their expanded or collapsed state and accessible names.

<!--- AC-2482-->

*  Screen reader users are informed when a new page view is rendered. Previously, when a page title changed, the title change was not announced.

### AdminGWS

### Backend

### Bundle products

<!--- ACP2E-465-->

*  You can now use the REST API to update product price attributes for a specific website. Previously, if some product attributes were overridden for a specific store view, you could not update a price attribute for that product in that same store view.

### Cache

### Cart and checkout

<!--- ACP2E-680-->

*  The `Parent Only` attribute scope is now used properly in the Cart Rule condition.

<!--- ACP2E-607-->

*  Company name is now visible as expected in the billing and shipping address sections of the checkout workflow.

<!--- ACP2E-455-->

*  The address search pop-up on the billing step of the checkout workflow no longer causes DOM errors.

<!--- ACP2E-368-->

*  The `addProductsToCart` mutation now works correctly with multiple products. Previously, this query returned the first product with an accurate subtotal, but returned a subtotal of 0 for other products.

<!--- ACP2E-245-->

*  Permission exceptions are now handled for restricted products that are added by SKU. Shoppers are now given an appropriate message on the storefront, and the quantity field in the error table is disabled. Previously, {{ site.data.var.ee }} threw an exception like this: `There has been an error processing your request`.

<!--- ACP2E-148-->

*  The update SQL query that update affected quotes after disabling cart price rule has been optimized to avoid locking the entire quote table.

<!--- ACP2E-98-->

*  Shoppers with global account sharing are no longer required to log in again to a secondary website in a multisite deployment when guest checkout is disabled. Customer data is now loaded when the shopper navigates to the subdomain. The shopper is no longer asked to log in again, and the previous cart contents are displayed.

<!--- ACP2E-94-->

*  Address dropdown values in the checkout workflow no longer change for the remaining items in a quote when a single quantity address item is removed in a multi-address checkout. Previously, when a product was removed from a quote during multi-address checkout, the address dropdown value changed to default for all products.

<!--- ACP2E-42-->

*  `cart` query responses no longer return null responses when a product is out of stock. Previously, when you ran a query with an out-of-stock product, {{ site.data.var.ee }}displayed a `null` value under the `items` section in the response.

<!--- ACP2E-38-->

*  Shipping methods are now available as expected when a guest shopper creates an account after adding a product to their cart before proceeding to checkout. Previously, when a guest added a product the cart before creating an account, no shipping methods were available during checkout. After adding other products to the cart, shipping methods became available.

<!--- AC-2564-->

*  Shoppers can now add products to their carts when no options in the **Allow Countries** field have been selected.

<!--- AC-2622-->

*  Cart contents and login status are now reloaded as expected after a session times out when **Enable Persistence** is set to **yes**. [GitHub-35182](https://github.com/magento/magento2/issues/35182)

<!--- AC-428-->

*  Mini cart subtotals are now updated correctly when a shopper navigates from the shipping page to the cart page in the checkout workflow for an order with multiple shipping addresses. Previously, the subtotal was doubled.

<!--- AC-2619-->

*  The mini cart now displays previously added products after a session timeout when **Enable Persistence** is enabled . [GitHub-35183](https://github.com/magento/magento2/issues/35183)

<!--- AC-2630-->

*  Unassigning inventory sources through bulk action (**Catalog** > **Products** > **Select Products** > **Actions - Unassign Inventory Source**) now works as expected when sources include SKUs that are duplicate with the exception of a leading zero (for example, `01234` and `1234`). Previously, {{ site.data.var.ee }}did not unassign inventory sources and threw an error.

### Cart price rule

<!--- ACP2E-680-->

*  The `Parent Only` attribute scope is now used properly in the Cart Rule condition.

### Catalog

<!--- ACP2E-758-->

*  Product URL keys now remain unchanged when updating product name via `/rest/default/V1/products/` for a store view. Previously, a new URL key was generated based on the new product name and assigned to the product, which overrode the URL key in that store view.

<!--- ACP2E-712-->

*  Rule-based upsell products are no longer shown twice on the product page.

<!--- ACP2E-703-->

*  Adding a product to a category from the Page Builder product widget set to carousel mode no longer triggers a page reload.

<!--- ACP2E-685-->

*  Products set to **Not Visible Individually** no longer appear in catalog Advanced Search results.

<!--- ACP2E-679-->

*  Dynamic bundle attributes are now updated correctly on the Mass Attribute Update page. Previously, the **Dynamic SKU** attribute remained set to **Yes** even though they were disabled on the Mass Update page.

<!--- ACP2E-673-->

*  Catalog rules are now correctly applied using incremental indexers rather than a full re-index.

<!--- ACP2E-657-->

*  You can now successfully switch between list and grid views of multi-page product lists. Previously, when you navigated to the last page of a multi-page product list view before switching to the grid view, {{ site.data.var.ee }} displayed this error: `Unfortunately there are no products in this category on our website currently`.

<!--- ACP2E-635-->

*  Admin Action Log reports now display updated product IDs and updated status information as expected.

<!--- ACP2E-633-->

*  Triggers are now restored as expected to the `catalogrule_product_price` table after a full reindex. Previously, triggers were removed from the `catalogrule_product_price` table after a `catalogrule_rule` or `catalogrule_product` full re-index.

<!--- ACP2E-629-->

*  Category rules that are used to assign products to categories no longer randomly change.

<!--- ACP2E-522-->

*  {{ site.data.var.ee }}no longer throws an error when a category rule assigns a product to a category, and the category is subsequently sorted.

<!--- ACP2E-516-->

*  Categories can no longer be updated globally by an administrator with scope-restricted access. Previously, when multiple websites used the same category but different products, and an administrator with permission restricted to one store changed products in the category, the product selection also changed for other stores.

<!--- ACP2E-508-->

*  The product details page now displays the correct price when a non-default currency for a specified locale is used. Previously, numbers were not localized as expected on the storefront.

<!--- ACP2E-468-->

*  Products are now enabled as expected after a schedule update completes.

<!--- ACP2E-392-->

*  The same error message is now displayed by the API and on the storefront when trying to retrieve the tier prices of a product with duplicate records. Previously, `PUT rest/all/V1/products/tier-prices` returned an incorrect error message.

<!--- ACP2E-345-->

*  {{ site.data.var.ee }}now provides validation error messages when you try to add a product URL key with a trailing hyphen. Informative tooltip text is also available.

<!--- ACP2E-274-->

*  The category list product count is now correct when using inventory single-source mode with the **Display Out-Of-Stock Products** setting enabled. A new plugin now uses `AreProductsSalableInterface` and `StockConfigurationInterface` to determine the total number of products. Previously, the category product list returned the wrong product quantity.

<!--- ACP2E-267-->

*  The new `ConfigurableWishlistItem.configured_variant` field has replaced the `ConfigurableWishlistItem.child_sku` field. The latter field triggered an internal error when a customer wishlist contained an un-configured configurable product.

<!--- ACP2E-84-->

*  URL rewrites are now generated only for the selected stores during the mass attribute update to change product visibility. Previously, the mass attribute update created a URL rewrite for the wrong store.

<!--- ACP2E-39-->

*  When the `Synchronize widget products with backend storage` setting is enabled, {{ site.data.var.ee }}adds recently view product data into the `catalog_product_frontend_action` database table. It includes the customer or visitor ID when adding records. The `recently_viewed_product` section in the response is now empty if customer ID and visitor ID are null. As a result, when the `customer/section/load` Ajax request is sent, {{ site.data.var.ee }} can correctly filter recently viewed products based on customer or visitor ID. Previously, the response included all the data available in the `catalog_product_frontend_action` database table because there was no check for an empty customer or visitor ID.

<!--- ACP2E-28-->

*  Category rules with a `Quantity` attribute for configurable products now work correctly when staging is implemented. Previously, when products had different values for `row_id` and `entity_id` in the `catalog_product_entity` table due to staging updates, the Visual Merchandiser **Match product by rule** functionality did not correctly filter the products.

<!--- ACP2E-13-->

*  Administrators can now change configurable product options in a shopper’s cart from the Admin slide panel. Previously, the slide panel did not work correctly.

<!--- AC-1705-->

*  Page Cache is now cleared as expected for the configurable product parent when changes to a child product are saved. Previously, because the cache was not cleared, changes were not selected on the storefront configuration product page. [GitHub-34508](https://github.com/magento/magento2/issues/34508)

<!--- AC-711-->

*  Product lists are now rendered correctly in the Admin. Previously, the product list did not render, and {{ site.data.var.ee }} displayed this error:  `Item (Magento\Catalog\Model\Product\Interceptor) with the same ID "<ID>" already exists`. [GitHub-33145](https://github.com/magento/magento2/issues/33145)

### Catalog rule

### CMS content

<!--- ACP2E-106-->

*  Merchants can no longer edit an active scheduled update from the entity edit page.

<!--- ACP2E-65-->

*  An administrator with restricted permissions can now view a CMS page in the CMS hierarchy after a scheduled update.

### Configurable products

<!--- ACP2E-687-->

*  {{ site.data.var.ee }} now displays the correct product price for a configurable product with a selected option after changing its quantity on product details page. Previously, the price was reset to the initial value after the quantity changed.

<!--- ACP2E-461-->

*  The `products` query now retrieves prices for configurable products that accurately reflect the **Display Out Of Stock** configuration setting. Previously, the query did not return accurate prices.

<!--- ACP2E-412-->

*  Configurable options are now linked to configurable products that are created in the Admin using `POST /rest/default/V1/configurable-products/configurable1/child`.

<!--- ACP2E-360-->

*  Multi-select attributes are now saved correctly during product edit. Previously, {{ site.data.var.ee }} saved the default option for non-selected attributes as well as selected attributes when saving a product.

<!--- ACP2E-55-->

*  {{ site.data.var.ee }} now displays configurable attributes as expected during the creation of global `select` attributes via a patch script. Previously, eligible global attributes were hidden.

<!--- ACP2E-2521-->

*  `addConfigurableProductsToCart` queries can now be used to add configurable products with custom options. Previously, {{ site.data.var.ee }} threw this error: `Magento 2.3.4 graphql Notice: Undefined index: option_value in /var/www/html/mg234/vendor/magento/module-configurable-product-graph-ql/Model/Resolver/ConfigurableCartItemOptions.php on line 62`. [GitHub-28860](https://github.com/magento/magento2/issues/28860)

<!--- ACP2E-322-->

*  Configurable products are now moved to the last position in the product listing after stock is updated when the **Move out of stock to the bottom** setting is enabled. A new custom database query has been implemented to negate Elasticsearch index sort order, which disregards Admin-enabled sort order. Previously, configurable products and their child products were not moved to the bottom of the list when this setting was enabled.

### Customer

<!--- ACP2E-390-->

*  {{ site.data.var.ee }} now displays predefined EAV system attributes correctly according to the website setting on the storefront. Previously, website-level customer attributes that were enabled for one website and disabled for another were displayed as enabled for both websites.

### Customer segment

<!--- ACP2E-473-->

*  Customer segment-specific Related Product rules now work as expected. The issue has been fixed by calling a method to add a visitor-segment relation for a specific website. Previously, the segments for this rule fetched only on the basis of registered customers and websites.

### Downloadable

<!--- MC-40675-->

*  You can now remove sample links and files from a downloadable product. [GitHub-31887](https://github.com/magento/magento2/issues/31887)

### Email

<!--- ACP2E-717-->

*  System-issued emails are now successfully sent to recipients with ".-" in their email address.

<!--- ACP2E-184-->

*  Shoppers now get email reminders about their abandoned carts on the correct schedule. The new `TIMESTAMPDIFF(DAY, ,)` SQL function has replaced the `TO_DAYS()` function and calculates the difference in the timestamps on the basis of date and time. Previously, email reminders were not sent per schedule because of the incorrect calculation of two date-time values of cart abandonment (any timezone) and server time (UTC).

### Frameworks

<!--- ACP2E-658-->

*  The `bin/magento setup:config:set` command no longer overrides already set cache ID prefixes.

<!--- ACP2E-517-->

*  `setup:static-content:deploy -s compact` now includes styles from child themes as expected. Previously, these themes were not present on the storefront after deployment.

<!--- AC-1999-->

*  A new sniff has been added to check if closing slashes are used in `void` elements.

<!--- AC-2896-->

*  {{ site.data.var.ee }} no longer throws an SQL error after assigning a new source to a product and changing its quantity. [GitHub-35262](https://github.com/magento/magento2/issues/35262)

<!--- AC-401-->

*  Attribute sort order now works as specified in the `di.xml` file after update.

<!--- AC-1716-->

*  The `updateCartCurrency` function now sets string instead of an object inside the cart object. Previously, {{ site.data.var.ee }} did not load a quote using `getQuote` because the `updateCartCurrency` function set an object instead of a string inside the cart object. [GitHub-34199](https://github.com/magento/magento2/issues/34199)

<!--- AC-2428-->

*  Deprecation notices no longer occur in unit tests due to`\DateTimeFormatter::formatObject()`. This method now works as expected with numeric values for `$format`.

<!--- AC-2893-->

*  {{ site.data.var.ee }} no longer displays a `preg_replace()` error on the Admin. The third argument (`$subject`) is now of type `array|string` instead of `bool`.

<!--- AC-2583-->

*  The `isFreeShipping` method now returns an integer rather than a Boolean.[GitHub-35164](https://github.com/magento/magento2/issues/35164)

### General fixes

<!--- AC-1668-->

*  {{ site.data.var.ee }} sessions no longer end after a GraphQL request is made. Previously, the `ClearCustomerSessionAfterRequest` plugin logged out the shopper. [GitHub-34550](https://github.com/magento/magento2/issues/34550)

<!--- ACP2E-675-->

*  Customer address attributes configuration settings are now loaded correctly based the website the customer is assigned to when you add a new customer address from the Admin that is assigned to a non-default website.

<!--- ACP2E-630-->

*  Category creation is now blocked for a restricted admin on both the Category page and Product Edit page. Previously, category creation was blocked on the category page, but was still possible through the Product Edit page.

<!--- ACP2E-448-->

*  {{ site.data.var.ee }} no longer throws an exception when you add a bundle product through Page Builder.

<!--- ACP2E-427-->

*  Categories can now be selected from the category tree as a condition for a customer segment.

<!--- ACP2E-381-->

*  You can now create a customer account on an iOS device with the inclined apostrophe (’) in the first, middle, or last name. Previously, only the straight apostrophe was allowed, and using iOS 11+ default inclined apostrophe resulted in a `Name is not valid!` error.

<!--- ACP2E-378-->

*  The `products` query now returns product information that accurately reflects the "Show Related Products" configuration. The `related_products`, `upsell_products`, and `crosssell_products` fields in the GraphQL ProductInterface are now resolved according to Show Related Products, Show Upsell Products, and Show Cross-Sell Products configuration respectively.

<!--- ACP2E-234-->

*  The **Set Product as New From Date** attribute now displays the correct date when the **Set Product as New** attribute is set through a mass product bulk update. Previously, **Set Product as New From Date** was displayed as **Jan 1, 1970**.

<!--- ACP2E-277-->

*  Users with restricted roles are no longer automatically granted access to new modules.

<!--- ACP2E-50-->

*  Target rules based on categories display only products from the category that is declared in the rule. Previously, Related Product rules displayed products from categories that were assigned to product and not defined in the rule.

<!--- ACP2E-16-->

*  Related product rule conditions now work as expected with products that contain `multiselect` attributes.

<!--- AC-2719-->

*  Merchants can now add a tier price attribute (`tier_price`) to product comparisons. Previously, the product comparisons page crashed when the **Comparable on storefront** setting for this attribute was enabled. [GitHub-35244](https://github.com/magento/magento2/issues/35244)

<!--- AC-2441-->

*  {{ site.data.var.ee }} now displays an error message when you set an invalid cookie domain (**Store**  > **Configurations**  >  **Web**  >  **Default Cookie Settings Cookie Domain**). Previously, the website crashed. [GitHub-35048](https://github.com/magento/magento2/issues/35048)

<!--- AC-2765-->

*  {{ site.data.var.ee }} no longer throws an error when an administrator with roles scoped to a single website adds product to Content Elements using PageBuilder. Previously, {{ site.data.var.ee }} threw an SQL error.

### Gift cards

<!--- AC-560-->

*  `products` queries now correctly returns product data that contains gift card products with a `gift-card` URL key.

### GraphQL

<!--- AC-2521-->

*  `addConfigurableProductsToCart` queries can now be used to add configurable products with custom options. Previously, {{ site.data.var.ee }} threw this error: `Magento 2.3.4 graphql Notice: Undefined index: option_value in /var/www/html/mg234/vendor/magento/module-configurable-product-graph-ql/Model/Resolver/ConfigurableCartItemOptions.php on line 62`. [GitHub-28860](https://github.com/magento/magento2/issues/28860)

<!--- AC-2522-->

*  `CartItemInterface` now includes `customizable_options`. [GitHub-31180](https://github.com/magento/magento2/issues/31180)

<!--- AC-2361-->

*  A missing `price_range` attribute has been added to the GraphQL `BundleItemOption` type. [GitHub-35010](https://github.com/magento/magento2/issues/35010)

<!--- AC-2367-->

*  The `products` query no longer returns attributes as an aggregation when the **Use in Search Results** Layered Navigation setting is disabled. [GitHub-33318](https://github.com/magento/magento2/issues/33318)

<!--- AC-1716-->

*  The `updateCartCurrency` function now sets string instead of an object inside the cart object. Previously, {{ site.data.var.ee }} did not load a quote using `getQuote` because the `updateCartCurrency` function set an object instead of a string inside the cart object. [GitHub-34199](https://github.com/magento/magento2/issues/34199)

<!--- AC-1760-->

*  A `price_including_tax` field has been added to `CartItemPrices`. [GitHub-29057](https://github.com/magento/magento2/issues/29057)

<!--- AC-2520-->

*  The `new_from_data` and `new_to_datefields` in `ProductInterface` are no longer deprecated. [GitHub-34783](https://github.com/magento/magento2/issues/34783)

<!--- AC-2365-->

*  The `getCartDetails` query now returns only one payment methods for free orders. Previously, all active payment methods were returned in the query response. [GitHub-34036](https://github.com/magento/magento2/issues/34036)

<!--- AC-2364-->

*  The `GetLines` query no longer throws an exception when fetching a list of categories one of which contains an image that can’t be found on the filesystem. Previously, {{ site.data.var.ee }} threw this exception: Category image not found`. [GitHub-34266](https://github.com/magento/magento2/issues/34266)

<!--- AC-2368-->

*  The `GetProductsInCategory` query now returns `category_uid` as an aggregation as expected. [GitHub-32557](https://github.com/magento/magento2/issues/32557)

<!--- AC-2373-->

*  The `updateCartItems` query now removes products as expected when the product stock has reached the maximum stock amount. [GitHub-30220](https://github.com/magento/magento2/issues/30220)

<!--- AC-2366-->

*  The `urlresolver` query now resolves the path delimiter (/) correctly when multiple homepages have the same identifier. Previously, the query did not resolve the delimiter and returned null. [GitHub-33615](https://github.com/magento/magento2/issues/33615)

<!--- AC-1881-->

*  `customer` queries now fetch bundle product multi-select options as expected when querying orders. [GitHub-34717](https://github.com/magento/magento2/issues/34717)

<!--- AC-1668-->

*  {{ site.data.var.ee }} sessions no longer end after a GraphQL request is made. Previously, the `ClearCustomerSessionAfterRequest` plugin logged out the shopper. [GitHub-34550](https://github.com/magento/magento2/issues/34550)

<!--- AC-818-->

*  `products` queries no longer returns price_range values for configurable products that are affected by disabled variants. [GitHub-33629](https://github.com/magento/magento2/issues/33629)

<!--- ACP2E-634-->

*  Configurable product price range in `products` query responses are now correctly calculated when the **Display Out of Stock Products** configuration setting is enabled. Previously, disabled options were taken into account in the minimum and maximum price calculation.

<!--- ACP2E-531-->

*  The `products` query now returns correctly filtered multiple categories when sorting by position.

<!--- ACP2E-499-->

*  `setShippingAddressesOnCart` requests now successfully validate region IDs. Previously, {{ site.data.var.ee }} threw an error when you used region ID instead of region code.

<!--- ACP2E-470-->

*  `products` queries now return only the categories associated with the website passed in the request.

<!--- ACP2E-363-->

*  The `categoryList` query now returns results that reflect the queried store's root category when the store specified in the header. Previously, categories from the default root category were included in results even though another store was specified in the header.

<!--- AC-1955-->

*  The `searchProducts` query no longer returns attributes as an aggregation when the **Use in Search Results Layered Navigation** setting is disabled. [GitHub-33318](https://github.com/magento/magento2/issues/33318)

<!--- AC-2361-->

*  A missing `price_range` attribute has been added to the GraphQL `BundleItemOption` type. [GitHub-35010](https://github.com/magento/magento2/issues/35010)

<!--- AC-2367-->

*  The `products` query no longer returns attributes as an aggregation when the **Use in Search Results** Layered Navigation setting is disabled. [GitHub-33318](https://github.com/magento/magento2/issues/33318)

<!--- AC-1760-->

*  A `price_including_tax` field has been added to `CartItemPrices`. [GitHub-29057](https://github.com/magento/magento2/issues/29057)

<!--- AC-2520-->

*  The `new_from_data` and `new_to_datefields` in `ProductInterface` are no longer deprecated. [GitHub-34783](https://github.com/magento/magento2/issues/34783)

<!--- AC-2365-->

*  The `getCartDetails` query now returns only one payment methods for free orders. Previously, all active payment methods were returned in the query response. [GitHub-34036](https://github.com/magento/magento2/issues/34036)

<!--- AC-2364-->

*  The `GetLines` query no longer throws an exception when fetching a list of categories one of which contains an image that can’t be found on the filesystem. Previously, {{ site.data.var.ee }} threw this exception: Category image not found`. [GitHub-34266](https://github.com/magento/magento2/issues/34266)

<!--- AC-2368-->

*  The `GetProductsInCategory` query now returns `category_uid` as an aggregation as expected. [GitHub-32557](https://github.com/magento/magento2/issues/32557)

<!--- AC-2373-->

*  The `updateCartItems` query now removes products as expected when the product stock has reached the maximum stock amount. [GitHub-30220](https://github.com/magento/magento2/issues/30220)

<!--- AC-2366-->

*  The `urlresolver` query now resolves the path delimiter (/) correctly when multiple homepages have the same identifier. Previously, the query did not resolve the delimiter and returned null. [GitHub-33615](https://github.com/magento/magento2/issues/33615)

<!--- AC-1881-->

*  `customer` queries now fetch bundle product multi-select options as expected when querying orders. [GitHub-34717](https://github.com/magento/magento2/issues/34717)

<!--- AC-818-->

*  `products` queries no longer returns price_range values for configurable products that are affected by disabled variants. [GitHub-33629](https://github.com/magento/magento2/issues/33629)

<!--- AC-210-->

*  Added a plugin before the `collectQuoteTotals` call to ensure store credits aren't applied multiple times.

<!--- AC-441-->

*  Creating a new special price schedule with the `POST /V1/products/special-price` endpoint now works as expected. Previously, the endpoint returned the message `Future Update already exists in this time range. Set a different range and try again`.

<!--- ACP2E-636-->

*  The `generateCustomerTokenAsAdmin` request now retrieves customer tokens as expected. Previously, tokens were not returned, and this error was returned: `Customer email provided does not exist`.

<!--- AC-2371-->

*  GraphQL schema is now valid when a custom `type` product attribute is defined. Previously, the schema was invalid because the `type` attribute on products types was overwritten by the custom `type` attribute. [GitHub-34929](https://github.com/magento/magento2/issues/34929)

<!--- AC-2797-->

*  Customers added through the `createCustomer/createCustomerV2/updateCustomer/updateCustomerV2` mutation  are now added with active newsletter subscriptions. Previously, customers were unsubscribed from newsletters even when the request contained proper input parameters. [GitHub-33599](https://github.com/magento/magento2/issues/33599)

<!--- AC-1883-->

*  The `productDetail` query for a specific store view now returns only categories that are in the specific website's root category in multi-site deployment. Previously, the query returned categories from the root categories of other websites. [GitHub-34570](https://github.com/magento/magento2/issues/34570)

### Image

<!--- ACP2E-71-->

*  Images on product details page no longer flicker, and the image remains centered as expected. Previously, after a product detail page completed loading an image, the image visibly shifted downwards.

### Import/export

<!--- ACP2E-676-->

*  Related, upsell, and cross-sell product position in the export CSV is now correct after the deletion of a cross-sell product from the Admin before regenerating the CSV file. Previously, cross-sell product positions were not re-calculated after a cross-sell product was removed, and product position order was incorrect.

<!--- ACP2E-632-->

*  {{ site.data.var.ee }} now checks for a custom view before filtering columns when exporting reports. Previously, exported reports did not take into account custom views, and exported columns were incorrect.

<!--- ACP2E-502-->

*  {{ site.data.var.ee }} now successfully imports images with a long file name. Previously, {{ site.data.var.ee }} did not import the image and threw this error: `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s):`.

<!--- ACP2E-294-->

*  Category ID attributes are now available in scheduled export filters.

<!--- ACP2E-59-->

*  Bundle products that contain a question mark (?) in the option title can now be imported successfully because of improvements to the query builder inside `populateExistingOptions` method. The option title is also displayed correctly. Previously, after the initial import, successive imports resulted in corrupted behavior and doubled options. Shoppers could not add the product to the cart, either.

### Index

### Infrastructure

<!--- ACP2E-148-->

*  The SQL query that updates affected quotes after a cart price rule is disabled has been optimized to avoid locking the entire quote table.

#### Library removals and deprecations

#### Library upgrades

### Invoice

### Logging

<!--- ACP2E-203-->

*  Customer, customer address, and order actions are now logged correctly in the Admin action report. Previously, {{ site.data.var.ee }} did not log actions if the `postDispatch` handler had not been specified in configuration settings.

### {{ site.data.var.ee }} coding standard

### Media Gallery

### MFTF

#### New action groups

#### Action groups

Repetitive actions have been replaced with action groups in these tests:

#### New tests

#### Refactored tests

### Newsletter

<!--- ACP2E-35-->

*  Logged-in customers are no longer marked as guests in Admin > **Marketing** > **Newsletter Subscribers**.

<!--- AC-2102-->

*  The newsletter subscription confirmation email now has the correct, store-specific email address in the **From** field if the customer is assigned to a non-default store and subscribed or unsubscribed from the Admin. Previously, the customer received an email with default email in **From** header. [GitHub-34963](https://github.com/magento/magento2/issues/34963)

### Order

<!--- ACP2E-550-->

*  You can now successfully create a new customer from a new order with custom customer attribute that are hidden from the storefront. Previously, {{ site.data.var.ee }} did not save the correct values for the custom customer attribute.

<!--- ACP2E-433-->

*  Reward points can now be refunded when store credit functionality is disabled.

<!--- ACP2E-279-->

*  Guest customer details are now saved successfully after an order is edited. Previously, some customer details were lost, including `customer_firstname` and `customer_lastname, x_forwarded_for`.

<!--- ACP2E-92-->

*  Merchants can no longer create a credit memo with a decimal total quantity when **Decimal qty** is disabled on a product or global setting level. Previously, merchants could create a credit memo for decimal total quantity where it was not applicable.

<!--- ACP2E-56-->

*  Filter by date now works properly for Invoices, shipments, credit memos, CMS pages, and CMS block grids when the timezone set in preferences differs from the timezone set on a local computer. Previously, the date was incorrectly parsed and the filtered results included data outside of the set date range.

<!--- AC-1536-->

*  {{ site.data.var.ee }} no longer changes custom email addresses that are assigned to orders when you change the main email address assigned to the customer on the Admin account edit page. Previously, when you edited the main email address for a customer, the new email address was assigned to every order created for that customer. [GitHub-34397](https://github.com/magento/magento2/issues/34397)

<!--- AC-2664-->

*  {{ site.data.var.ee }} now displays records from the requested store on the credit memos grid page in deployments running PHP 7.4. Previously, {{ site.data.var.ee }} threw the following error after you created a credit memo and tried to view it: `The store that was requested wasn't found. Verify the store and try again`.

<!--- AC-2442-->

*  {{ site.data.var.ee }} now displays credit memos on the credit memo grid page for orders created from store views whose name is prepended with numbers. Previously, {{ site.data.var.ee }} displayed the error: `The store that was requested wasn't found. Verify the store and try again. Exception in /var/www/html/vendor/magento/module-store/Model/StoreRepository.php:75`. [GitHub-35122](https://github.com/magento/magento2/issues/35122)

### Payment methods

<!--- ACP2E-25-->

*  Administrators can now place an order on the Admin using the PayPal PayflowPro payment method. Previously, {{ site.data.var.ee }} displayed this error: `No such entity with cartId = 0`.

<!--- AC-2093-->

*  Payment Review page in the checkout workflow now displays the correct payment method name when payment is made with Venmo, PayPal Later, or PayPal.

#### PayPal

<!--- ACP2E-296-->

*  {{ site.data.var.ee }} now shows the correct customer name in a guest order paid for with PayPal. Previously, the customer name was displayed as Guest.

### Performance

<!--- ACP2E-474-->

*  The performance of dynamic block loading has been improved. Previously, visitor segments were not cached per website, which caused redundant queries to the database for the same data.

<!--- ACP2E-52-->

*  Redis cache management has been improved by the addition of TTL (expiration date) for configurable product associated products data caches. Previously, these caches were not evicted due to missing TTL if redis keys eviction policy is configured to any of volatile eviction policies.

### Pricing

<!--- ACP2E-445-->

*  Price attributes that have no value in the default scope (but that are defined at the store-view level) are now indexed properly. Previously, the SQL expressions that retrieves price attributes values from EAV table did not take into account the scenario in which the value was not defined in the default scope.

<!--- ACP2E-313-->

*  The price listed on the product detail page is now the same as the price listed in the checkout workflow for tier prices that differ by quantity selected (for example, a product priced differently based on buying 2 items versus 5 items). Previously, the checkout price reflected the price for the lowest product quantity.

### ProductAlert

### Product video

### Return Merchandise Authorizations (RMA)

<!--- MC-40432-->

*  The `/rest/default/V1/returnsAttributeMetadata` endpoint now works correctly when the `rma_item` entity default attribute set ID differs from the default installation ID. Previously, this endpoint returned an empty result if these IDs differed.

<!--- ACP2E-247-->

*  The **Use Default** checkbox to enable RMA on the product edit page now works as expected for Default Store. Previously, the checkbox was cleared immediately after the product was saved.

### Reviews

### Sales

### Sales Rule

### Search

<!--- ACP2E-645-->

*  Filtering products by color swatch on the layered navigation displays the correct image for the products after the fix.

<!--- ACP2E-615-->

*  Elasticsearch queries now work as expected when `int` is configured as a searchable backend `type` attribute. Previously, {{ site.data.var.ee }} threw an `Elasticsearch\Common\Exceptions\BadRequest400Exception` exception.

<!--- ACP2E-99-->

*  You can now use search synonyms together with the **Minimum Terms to Match** parameter In Elasticsearch queries. Previously, if this parameter was specified in settings and search terms were added for specific keywords, the search returned no results.

<!--- ACP2E-72-->

*  {{ site.data.var.ee }} now displays an accurate search results suggestion count on the storefront in deployments where Search Suggestions and the **Show Results Count for Each Suggestion** setting are enabled. Previously, the count displayed next to the keywords was zero.

<!--- AC-700-->

*  Products sorted by custom attributes on the Catalog page are now displayed in the expected order. Previously, products were sorted by their attribute option value ID, which reflects the order in which they they were added to the attribute. [GitHub-33810](https://github.com/magento/magento2/issues/33810)

<!--- AC-645-->

*  Filtering products by color swatch in the layered navigation now displays the correct product images. Previously, the layered navigation `PageCache` key did not include filter parameters for configurable products.

### Shipping

<!--- AC-2052-->

*  {{ site.data.var.ee }} no longer throws an error when loading UPS shipping rates if no allowed shipping methods are selected. Previously, when a shopper entered a shipping address in the checkout workflow under these conditions, no other shipping methods were displayed, and {{ site.data.var.ee }} displayed an error on the storefront. [GitHub-34411](https://github.com/magento/magento2/issues/34411)

<!--- AC-2621-->

*  Virtual product prices are now excluded in calculation table rate shipping amount. Previously, shipping costs for these products were not calculated correctly.[GitHub-35185](https://github.com/magento/magento2/issues/35185)

<!--- ACP2E-209-->

*  Table rate shipping rates with zero price are now displayed correctly in the checkout workflow Order Summary block for orders that have had a discount coupon applied. Previously, the shipping method was not displayed.

### Staging

<!--- ACP2E-404-->

*  {{ site.data.var.ee }} no longer cleans the full-page cache after applying a staging update for a sales rule in which the cached pages remain unchanged.

<!--- ACP2E-304-->

*  The content staging dashboard no longer displays inactive permanent updates.

<!--- ACP2E-257-->

*  Changing the end date for a staging update from the staging dashboard now successfully applies these changes to the staging update and its entities. (A queue has been introduced to process staging updates changes.)

<!--- ACP2E-238-->

*  Merchants can now remove an end date for a schedule update or delete and recreate an update. Previously, when an end date was removed, an entity remained scheduled for that time. {{ site.data.var.ee }} now removes the outdated update for removed rollback.

<!--- ACP2E-149-->

*  Active schedule updates for a CMS page are now visible as expected in the Scheduled Changes section on the CMS page.

<!--- ACP2E-81-->

*  The `custom_design_to` attribute value is now updated as expected when a schedule update is changed. Previously, two separate category design updates with no end time were treated as one. When one of the schedule updates was deleted while the first one was running, the `custom_design_from` time value became greater than the `custom_design_to` time values in the next schedule update.

<!--- ACP2E-58-->

*  {{ site.data.var.ee }} now displays a form populated with data from the previous scheduled update as expected when you try to create the second schedule update for a product. Previously, {{ site.data.var.ee }} displayed this error when you tried to create the second update with a past start date: `The Start Time of this Update cannot be changed. It's been already started`.

<!--- ACP2E-18-->

*  The `vendor/magento/module-catalog-staging/Setup/Patch/Data/MigrateCatalogProducts.php` data patch no longer fails when the database includes product with custom options and the `special_from_date` attribute is set.

### Store

### Tax

<!--- ACP2E-735-->

*  Fixed Product Tax (FPT) is now correctly displayed for products in the shopping cart. Previously, if multiple products in the shopping cart have **Fixed Product Tax (FPT)** and **Apply Tax To FPT** were enabled, all FPTs were assigned to the last product in the shopping cart and reset for other products.

<!--- ACP2E-350-->

*  The Fixed Product Tax (FPT) total for the order summary section of the checkout workflow is now calculated correctly.

<!--- ACP2E-291-->

*  {{ site.data.var.ee }} now updates the Excluding Tax tier price for a simple product on the product page as expected after the quantity of the simple product has changed.

<!--- ACP2E-182-->

*  Validation has been added to the store configuration page to verify if the selected country from the dropdown list is on the EU country list. The **Validate VAT Number** button is now visible only for EU countries. Previously, the button was visible for all countries, including the U.K.

<!--- ACP2E-45-->

*  Tier price are now calculated correctly when **Display Product Prices In Catalog** is set to either **Excluding Tax** or **Including and Excluding Tax**. Previously, the product details page displayed tier prices with taxes despite the setting.

<!--- AC-1925-->

*  Taxes are now applied correctly for orders to any valid address in storefronts using the Portuguese locale. [GitHub-34271](https://github.com/magento/magento2/issues/34271)

<!--- AC-1084-->

*  The `getCartDetails` query no longer includes tax when returning `subtotal_with_discount_excluding_tax`. [GitHub-33905](https://github.com/magento/magento2/issues/33905)

### Test

<!--- AC-2004-->

*  Corrected errors with `Magento.GraphQl.CatalogGraphQl.ProductSearchTest.testSearchSuggestions` when run with AWS Elasticsearch configuration.

<!--- AC-1113-->

*  The `testCreateProductOnStoreLevel` integration test no longer a causes nested transaction on the database.

#### Unit tests

### Theme

### Translations and locales

<!--- ACP2E-537-->

*  You can now use the Translate inline tool to edit the same element more that once. Previously, only the first change made using this tool was included.

<!--- ACP2E-437-->

*  The store view selector no longer blocks the translation pane when you edit Admin text or labels. You can now edit these features from the translation pane, and the interface displays these changes when you click **Submit**.

<!--- ACP2E-362-->

*  The Admin date-time format for Brazilian Portuguese and French locales is now valid.

### UI

<!--- ACP2E-557-->

*  Lengthy product names in the **Catalog** > **Products** grid are now word-wrapped instead of being displayed in a single line.

<!--- ACP2E-545-->

*  You can now edit default stock from Admin **Stores** > **Inventory** > **Stocks**. Previously, a JavaScript error was displayed in the console when you tried to add or remove sources from default stock, although you could assign websites to default stock.

<!--- ACP2E-347-->

*  The minimal and maximum date-of-birth range is now saved as a correct timestamp and then converted from a valid timestamp to a valid date format.

<!--- ACP2E-280-->

*  The unavailability of `magento.com` no longer causes performance issues during Admin login. A timeout on the request to fetch release notification has been added.

<!--- ACP2E-88-->

*  The results of the Admin order, customer, and product grid filters now persist as expected when displayed in the Chrome browser.

<!--- AC-2750-->

*  You can now create a customer from the Admin when `Magento_LoginAsCustomerAdminUi` is enabled and **Store View To Login To** is set to manual selection. Previously, {{ site.data.var.ee }} threw this error: `(Magento\Framework\Exception\LocalizedException): Unable to get Customer ID`. [GitHub-33096](https://github.com/magento/magento2/issues/33096)

<!--- AC-2076-->

*  The Next arrow is now disabled as expected when a shopper reaches the last thumbnail image in the product image gallery.

<!--- AC-2060-->

*  The **Search by keyword** input field now has an `aria-label` element instead of a placeholder on the **Catalog** > **Product** page.

<!--- ACP2E-630-->

*  Category creation is now blocked for an administrator with restricted permissions on both the category and product edit pages. Previously, category creation was blocked on the category page, but was still possible through the product edit page.

<!--- AC-3058-->

*  The Privacy Policy link in Admin footer now links to the new Adobe Privacy Policy.

### URL rewrites

<!--- AC-2535-->

*  URLs for a product in a specific store view only are now removed from the `url_rewrite` table and Admin after the attribute code visibility status for the specific store view is changed to **Not Visible Individually**.  Previously, all URLs were removed for the product in the `url_rewrite` table. [GitHub-34937](https://github.com/magento/magento2/issues/34937)

### Video

<!--- ACP2E-485-->

*  You can now use YouTube URL parameters using Page Builder to add a new video. Previously, these parameters were automatically removed from the URL.

<!--- AC-2251-->

*  You can now set a Vimeo video to run in the background in a `banner` element when CSP is set to `restrict mode`. Previously, {{ site.data.var.ee }} threw this JavaScript error when you tried to save the element: `Refused to connect to 'https://vimeo.com/api/v2/video/76979871.json&#39; because it violates the following Content Security Policy directive`.

### Web API framework

<!--- ACP2E-694-->

*  Mutex has been implemented for orders to prevent race conditions during update by concurrent requests. Previously, race conditions during concurrent REST API calls resulted in an overwrite of shipping status information in the Admin Items Ordered table.

<!--- ACP2E-679-->

*  Dynamic bundle attributes are now updated correctly on the Mass Attribute Update page. Previously, the **Dynamic SKU** attribute remained set to **Yes** even though they were disabled on the Mass Update page.

<!--- ACP2E-677-->

*  Product image role inheritance is now preserved unless explicitly defined in the payload when updating a product in a specific store view via the REST API.

<!--- AC-2231-->

*  The Swagger schema (`/rest/schema`) now uses unique operation IDs.

<!--- AC-2845-->

*  Cart price rules created through the `/rest/V1/salesRules/` endpoint now retain existing coupon code values after changing status from disabled to enabled. [GitHub-35298](https://github.com/magento/magento2/issues/35298)

<!--- AC-2764-->

*  Cart price rules created through the `/rest/V1/salesRules/` endpoint now contain valid `from_date` and `to_date` values. [GitHub-35265](https://github.com/magento/magento2/issues/35265)

<!--- AC-2522-->

*  `CartItemInterface` now includes `customizable_options`. [GitHub-31180](https://github.com/magento/magento2/issues/31180)

### Wish list

<!--- ACP2E-459-->

*  Updating an item quantity from the wishlist page now updates the quantity on the product detail page as expected. {{ site.data.var.ee }} now picks up the updated value from the product URL and populates the `qty` field of product detail page from the wishlist itself.

## Known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.4.5 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.