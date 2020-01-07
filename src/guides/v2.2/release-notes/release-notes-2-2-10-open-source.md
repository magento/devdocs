---

group: release-notes
title: Magento Open Source 2.2.10 Release Notes

---

*Patch code and release notes published on October 8, 2019.*

Magento Open Source 2.2.10 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods. This release includes over 147 functional fixes and enhancements to the core product and over 70 security enhancements. It includes 56 community-fixed GitHub issues.

## Highlights

Look for the following highlights in this release:

### Platform upgrades

The following upgrades to core platform components boost platform security and support PCI compliance:

*  Magento 2.2.10 now supports PHP 7.2.x (tested with 7.2.21). <!--- MC-16174 -->

*  Magento 2.2.10 does not support PHP 7.0.x. <!--- MC-18521 -->

### Substantial security enhancements

This release includes the following security enhancements:

*  PSD2 compliance for core payment methods
*  Fixes for 75 critical security issues
*  Significant platform-security enhancements that boost XSS (cross-site scripting) protection against future exploits. This effort is the culmination of several months of concentrated effort on Magento's part to reduce our backlog of security enhancements.

#### Core payment methods integrations are now compliant with PSD2 regulations

The European Union recently revised the Payment Services Directive (PSD) regulation with an updated version–PSD2. This revised regulation will go into effect on September 14, 2019 or shortly thereafter, and will significantly affect most payment processing involving credit cards or bank transfers.  See the Magento Forum DevBlog post [3D Secure 2.0 changes](https://community.magento.com/t5/Magento-DevBlog/3D-Secure-2-0-changes/ba-p/136460) for more information on Magento Payment Provider Recommendations and a wealth of links to PSD2 regulation discussions.

This release contains the following major PSD-related changes:

*  The **Braintree payment method now complies with PSD2 regulations**. Its core integration API has been upgraded to the latest JavaScript SDK v3 API, which is a requirement for supporting native Braintree 3D Secure 2.0 adoption. Braintree transactions are now also verified by using the native Braintree 3D Secure 2.0 service. <!--- MAGETWO-99607 MC 17628 -->

*  Authorize.net now provides the ability, through the `cardholderAuthentication` request field, to make 3D Secure verification through third-party services such as CardinalCommerce. Starting with this release, **Authorize.net accept.js integration will support 3DS 2.0 through CardinalCommerce**. <!--- MAGETWO-99737 -->

<!--- MC-18237 -->

*  The Cybersource and eWay payment modules have been deprecated in this release to comply with PSD2 SCA regulation, which took effect on September 14, 2019, or shortly thereafter. Use the official Marketplace extensions for these features instead.

#### Security enhancements and fixes to core code

*  **70 security enhancements** that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{ page.baseurl }}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.2.10) have been ported to 2.3.3, 1.14.4.3, and 1.9.4.3, as appropriate.

### Infrastructure improvements

This release contains 140 enhancements to core quality, which improve the quality of the Framework and these modules: `Catalog`, `Sales`, `Checkout/One Page Checkout`, `UrlRewrite`, `Customer/Customers`, and `UI`.

## Functional fixes

In addition to security enhancements, this release contains the following functional fixes.

### Installation, setup, and deployment

<!-- MAGETWO-18745 -->

*  PHP unit tests no longer fail by default when Magento is installed from Composer.

<!-- MAGETWO-99617 -->

*  Magento font icons now load as expected when deployment optimization is implemented.

<!-- ENGCOM-5102 -->

*  The short form versions of the `—lock-env` and `—lock-config` `bin/magento config:set` options now work as expected. *Fix submitted by Shikha Mishra in pull request [22836](https://github.com/magento/magento2/pull/22836)*. [GitHub-22395](https://github.com/magento/magento2/issues/22395)

<!-- ENGCOM-5150 -->

*  Parallel execution of static content deployment has been improved to prevent errors and make it more stable. *Fix submitted by David Alger in pull request [22610](https://github.com/magento/magento2/pull/22610)*. [GitHub-21852](https://github.com/magento/magento2/issues/21852), [GitHub-22563](https://github.com/magento/magento2/issues/22563)

<!-- ENGCOM-5203 -->

*  Magento now displays an exception message when an error occurs during static content deployment. Previously, if an error occurred, Magento showed the stack trace only. *Fix submitted by Ihor Sviziev in pull request [23114](https://github.com/magento/magento2/pull/23114)*. [GitHub-22882](https://github.com/magento/magento2/issues/22882)

<!-- ENGCOM-5306 -->

*  You can now use JSON to set a configuration value for a configuration option through the command line. *Fix submitted by Shikha Mishra in pull request [23277](https://github.com/magento/magento2/pull/23277)*. [GitHub-22396](https://github.com/magento/magento2/issues/22396)

<!-- MC-17292 -->

*  The Magento Admin now loads without issue after you change the store domain or set cookies to a different domain. Previously, the page did not redirect as expected.

<!-- MC-99719 -->

*  The Admin no longer displays incorrect currency codes when the default base currency differs from the default website currency.

### Bundle products

<!-- MAGETWO-99952 -->

*  The **Add to Cart** button is no longer visible to users who do not have Add to Cart category permissions. Previously, guest users could add items to the cart without being granted Add to Cart permission.

<!-- MAGETWO-99787 -->

*  Magento now issues a single request to the server when you change the shipping address for an order to a non-default address.Previously, Magento issued multiple requests to the server when you changed the shipping address, which negatively affected performance.

### Cache

<!-- MAGETWO-99659 -->

*  Enabling a product now clears the full-page cache for PDP if the product is not assigned to a category.

### Cart and checkout

<!-- MC-17754 -->

*  Magento now displays an informative message when an error is thrown after the user Internet connection has been reset after placing an order. [GitHub-23288](https://github.com/magento/magento2/issues/23288)

<!-- MC-18286 -->

*  The checkout order summary now displays the correct number of ordered items.

<!-- MAGETWO-99709 -->

*  Magento no longer throws a custom address attribute multi-line error when a customer tries to place an order.

<!-- MAGETWO-99956 -->

*  The **Admin** > **Catalog** > **Categories** page now works as expected. Previously, Magento threw a fatal error when you tried to navigate to this page due to issues with the translation function.

<!-- MAGETWO-93627 -->

*  Magento no longer empties your shopping cart after you have reset your password. Previously, if you added items to your shopping cart using a guest account, then logged in and reset your password, Magento emptied your cart. [GitHub-14530](https://github.com/magento/magento2/issues/14530)

<!-- MAGETWO-91328 -->

*  Customers can now successfully check out when the AdBlock extension and Google Analytics are enabled.

<!-- MAGETWO-99251 -->

*  Magento now submits an order only once when an order is submitted using **Enter**. Previously, Magento submitted several `payment-information` requests, and several orders with the same quote ID were placed.

<!-- MC-17883 -->

*  The Review & Payment section of the One Page Checkout no longer displays custom customer attribute code when a guest checks out.

<!-- MAGETWO-98462 -->

*  You can now add product quantities that require four digits to the shopping cart.Previously, Magento could not add four-digit product quantities to the cart.

<!-- MC-16591 -->

*  Magento no longer indicates that your session has expired when you add a product to your shopping cart in deployments where the Scalable Checkout module is enabled.

<!-- ENGCOM-5389 -->

*  The minicart loader is now visible when you add a product to the minicart. *Fix submitted by Prakash Prajapati in pull request [23536](https://github.com/magento/magento2/pull/23536)*. [GitHub-23377](https://github.com/magento/magento2/issues/23377)

<!-- ENGCOM-5186 -->

*  Magento now applies the sort preferences that you set in website scope configuration for a particular website to the layout of the checkout page. Previously, sort order for elements of this page was derived from the default configuration, not website-specific values. *Fix submitted by Abrar Pathan in pull request [23058](https://github.com/magento/magento2/pull/23058)*. [GitHub-22380](https://github.com/magento/magento2/issues/22380)

<!-- ENGCOM-5400 -->

*  You can now add any decimal quantity of a product to your shopping cart (even a quantity less than the quantity set in the **Minimum Qty** setting) when the **Qty Uses Decimals** setting is enabled. *Fix submitted by Prakash Prajapati in pull request [23574](https://github.com/magento/magento2/pull/23574)*. [GitHub-23038](https://github.com/magento/magento2/issues/23038)

### Catalog

<!-- MAGETWO-17764 -->

*  Magento now renames images with the same name in the `pub/media/catalog/category` directory. Previously, images with the same name that belonged to different categories were not uploaded properly. [GitHub-23376](https://github.com/magento/magento2/issues/23376)

<!-- MAGETWO-17622 -->

*  You can now save multi-select and select attribute options when swatches modules are disabled. [GitHub-23326](https://github.com/magento/magento2/issues/23326)

<!-- MAGETWO-98521 -->

*  You can now add an out-of-stock item to a product comparison. Previously, Magento displayed a success message, but did not add the item to the comparison. [GitHub-21518](https://github.com/magento/magento2/issues/21518)

<!-- MAGETWO-86335 -->

*  Product availability is no longer tied to events associated with the categories to which they belong. Instead, Magento now uses the current category event for the page on which the product is displayed. Previously, products that were tied to categories with no events could be purchased, and products that were tied to expired events could not be purchased.

<!-- MAGETWO-93755 -->

*  Magento now maintains correct pagination when a Catalog list has multiple pages of products. Previously, users were redirected to the first page (instead of the correct page) after navigating to a product from the list and saving it.

<!-- MAGETWO-93316 -->

*  Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, `http://magento.host.com/sample-url-key/?cupcakes`), Magento redirected the user to a URL that omitted the slash (`http://magento.host.com/sample-url-key`).

<!-- MAGETWO-99319 -->

*  Custom options prices that are assigned to a website scope no longer rewrite prices on all scopes.

<!-- MAGETWO-97974 -->

*  You can now update product content descriptions on the store-view level when WYSIWYG is disabled.

<!-- MAGETWO-73047 -->

*  The Admin Product Edit page and Customers page now load without JavaScript errors. [GitHub-5967](https://github.com/magento/magento2/issues/5967)

<!-- MAGETWO-99722 -->

*  Magento now displays the correct currency in the Admin **Catalog** > **Products** list in deployments where websites are assigned different currencies. Previously, the products on the Admin Category page displayed the base currency even when **Product Price Scope** was set to **Per Website** and the website was assigned a different currency.

<!-- MAGETWO-73840 -->

*  Videos in product descriptions now appear as they do in the Admin WYSIWYG editor. Previously, videos in the storefront product descriptions had the incorrect height.

<!-- MC-17021 -->

*  We’ve refined how Magento validates partial permissionsDesign edit permissions for categories, products, and CMS pages are now validated for each endpoint (web API and other) outside of the related model-layer classes. The web API now returns an error when design-related fields are being overridden. Previously, this behavior was ignored.

<!-- ENGCOM-5160 -->

*  The catalog product flat data table for a store view is now populated with data from the specified store view as expected. Previously, this table was populated with data from the default store view. *Fix submitted by Mahesh Singh in pull request [22581](https://github.com/magento/magento2/pull/22581)*. [GitHub-21747](https://github.com/magento/magento2/issues/21747)

<!-- ENGCOM-5149 -->

*  Magento now displays a validation alert message when you click **Add Attribute**, and then click **Add selected** without first selecting an attribute. Previously, when you clicked **Add selected**, Magento selected all possible attributes. *Fix submitted by Mahesh Singh in pull request [22991](https://github.com/magento/magento2/pull/22991)*. [GitHub-22639](https://github.com/magento/magento2/issues/22639)

### Clean up and minor refactoring

<!-- ENGCOM-5428 -->

*  Corrected poor spacing in the Gift message section of the My Account page. *Fix submitted by Prakash Prajapati in pull request [23657](https://github.com/magento/magento2/pull/23657)*. [GitHub-22950](https://github.com/magento/magento2/issues/22950)

<!-- ENGCOM-5399 -->

*  Corrected misalignment of the Compare Products and My Wish List counters in the sidebar. *Fix submitted by Prakash Prajapati in pull request [23573](https://github.com/magento/magento2/pull/23573)*. [GitHub-22676](https://github.com/magento/magento2/issues/22676)

<!-- ENGCOM-5391 -->

*  Corrected capitalization of review text. *Fix submitted by Prakash Prajapati in pull request [23537](https://github.com/magento/magento2/pull/23537)*.

<!-- ENGCOM-5399 -->

*  Corrected misalignment of the Compare Products and My Wish List counters in the sidebar. *Fix submitted by Prakash Prajapati in pull request [23573](https://github.com/magento/magento2/pull/23573)*. [GitHub-22676](https://github.com/magento/magento2/issues/22676)

<!-- ENGCOM-5366 -->

*  Magento now displays the cursor to the right of the search keyword box as expected after multiple clicks on the search field in mobile view. *Fix submitted by Prakash Prajapati in pull request [23352](https://github.com/magento/magento2/pull/23352)*. [GitHub-22736](https://github.com/magento/magento2/issues/22736)

<!-- ENGCOM-5229 -->

*  White space between words now appears as expected in non-English websites. *Fix submitted by Kajal Solanki in pull request [23164](https://github.com/magento/magento2/pull/23164)*. [GitHub-23080](https://github.com/magento/magento2/issues/23080)

<!-- ENGCOM-5214 -->

*  Corrected alignment of the search suggestion panel with the **Advance reporting** button. *Fix submitted by Prakash Prajapati in pull request [23151](https://github.com/magento/magento2/pull/23151)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)

<!-- ENGCOM-5128 -->

*  The checkbox on the Add New Tax Rule form has been redesigned to match the Admin checkbox. *Fix submitted by Mahesh Singh in pull request [22908](https://github.com/magento/magento2/pull/22908)*. [GitHub-22640](https://github.com/magento/magento2/issues/22640)

<!-- ENGCOM-5214 -->

*  Corrected alignment of the search suggestion panel with the **Advance reporting** button. *Fix submitted by Prakash Prajapati in pull request [23151](https://github.com/magento/magento2/pull/23151)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)

<!-- ENGCOM-5213 -->

*  The arrow toggle page element now works as expected throughout the Admin. *Fix submitted by Prakash Prajapati in pull request [23150](https://github.com/magento/magento2/pull/23150)*. [GitHub-22636](https://github.com/magento/magento2/issues/22636)

### Configurable products

<!-- MAGETWO-99930 -->

*  The status (in stock or out of stock) of a configurable product in the Admin now matches the status displayed on the storefront.

<!-- MAGETWO-99491 -->

*  You can now use the `POST V1/configurable-products/:sku/child` call to assign positions to configurable product attributes as expected. Previously, when you use REST to assign positions to configurable product attributes, the position value was overwritten after you linked simple products to the configurable product.

### Coupon

<!-- ENGCOM-5355 -->

*  The **Apply** button now functions as expected when you create a new order and apply a coupon from the Admin. Previously, clicking **Apply** removed the coupon instead of applying it. *Fix submitted by Prakash Prajapati in pull request [23332](https://github.com/magento/magento2/pull/23332)*. [GitHub-23238](https://github.com/magento/magento2/issues/23238)

### Cron

<!-- ENGCOM-5365 -->

*  Cron jobs are no longer duplicated. Previously, after a `cron` job was run, Magento cleared the cache and processed the job again. *Fix submitted by Ihor Sviziev in pull request [23439](https://github.com/magento/magento2/pull/23439)*. [GitHub-21380](https://github.com/magento/magento2/issues/21380)

<!-- MAGETWO-18834 -->

*  Consumers run from `cron` no longer create deadlocks in the database.

### Customer

<!-- MAGETWO-86624 -->

*  An administrator with full permission for all website scopes can now see any country listed in the Countries column or filter in the Customers list. Previously, if one of the website scopes did not allow a country, an administrator with full permission could not see it.

<!-- MAGETWO-99516 -->

*  The account status list now updates as expected to correctly indicate the account lock status after `cron` is run. Previously, this list displayed status as unlocked only.

<!-- MAGETWO-99492 -->

*  You can now create and successfully save a customer attribute when the **Use in Filter Options** and **Use in Search Options** settings are set to **no**. Previously, Magento did not display these attributes, and they could not be edited.

<!-- MC-17200 -->

*  You can now create an account as a guest when the address contains custom attributes. Previously, Magento threw a fatal error when you tried to create an account under these circumstances. [GitHub-22952](https://github.com/magento/magento2/issues/22952)

<!-- ENGCOM-5414 -->

*  Magento no longer displays editable text fields for customer phone numbers and zip codes if customers have not saved an address. *Fix submitted by Prakash Prajapati in pull request [23614](https://github.com/magento/magento2/pull/23614)*. [GitHub-23467](https://github.com/magento/magento2/issues/23467)

### Customer custom attributes

<!-- MAGETWO-17930 -->

*  You can now edit a customer address from the Admin (**Admin** > **Customer** > **Address** > **Edit Address**) when the customer address attribute is of type `file` or `image`. Previously, Magento did not display the Edit Address form when you clicked on **Edit Address**.

<!-- MAGETWO-99471 -->

*  Custom customer address attribute values are populated as expected when an administrator changes a customer address during order creation from the Admin. Previously, the custom attribute drop-down was empty.

### Database media storage

<!-- ENGCOM-5237 -->

*  Magento now copies any image needed for the Admin Product Edit page from the database to local storage as needed. Previously, if the image was not in local storage, Magento used a placeholder image. *Fix submitted by gwharton in pull request [21606](https://github.com/magento/magento2/pull/21606)*. [GitHub-21604](https://github.com/magento/magento2/issues/21604)

<!-- ENGCOM-5302 4801-->

*  Transactional email now copies the configured email logo image from the database when the logo file does not exist in the local `pub/media` directoryPreviously, emails used the default LUMA logo if it did not exist in the local directory. *Fix submitted by gwharton in pull request [21673](https://github.com/magento/magento2/pull/21673)*. [GitHub-21671](https://github.com/magento/magento2/issues/21671)

### Directory

<!-- MAGETWO-99476 -->

*  The country drop-down list no longer includes an extraneous zero (0) when the allowed countries in the list differ from countries identified as top destinations.

### Downloadable

<!-- MAGETWO-98655 -->

*  New downloadable products now appear in the downloadable products section after a customer checks out as a guest and then creates an account.

### EAV

<!-- MAGETWO-99710 -->

*  You can now edit an order that contains a custom address attribute on its order form. Previously, Magento threw this error if you tried to edit an order with a custom address attribute: `We can't update the order address right now`.

<!-- MC-17492 17813-->

*  Starting and ending spaces are now trimmed from phone numbers before JavaScript validation. Previously, Magento did not trim these spaces, and displayed this error: `*Phone Number* contains non-numeric characters`.

### Email

<!-- ENGCOM-5127 -->

*  The Template Preview tab now loads with the default content that was assigned during the creation of a New Shipment email template as expected. Previously, the Template Preview Tab did not load the default content. *Fix submitted by Mahesh Singh in pull request [22906](https://github.com/magento/magento2/pull/22906)*. [GitHub-22788](https://github.com/magento/magento2/issues/22788)

<!-- ENGCOM-5392 -->

*  All emails are now sent with correct MIME encoding. *Fix submitted by gwharton in pull request [23537](https://github.com/magento/magento2/pull/23537)*. [GitHub-22103](https://github.com/magento/magento2/issues/22103), [GitHub-23199](https://github.com/magento/magento2/issues/23199)

<!-- ENGCOM-5437 -->

*  Email created using a CSS-heavy template is now sent successfully. Previously, these emails were rejected by the server with this message: `Message too big`. *Fix submitted by gwharton in pull request [23650](https://github.com/magento/magento2/pull/23650)*. [GitHub-23643](https://github.com/magento/magento2/issues/23643)

### Frameworks

<!-- MC-19307 -->

*  Starting and ending spaces are now trimmed from phone numbers before JavaScript validation. Previously, Magento did not trim these spaces and displayed this error: `*Phone Number* contains non-numeric characters`.

<!-- MAGETWO-99872 -->

*  The `equalArrays` function in `lib/web/mage/utils/compare.js` file has been refactored to remove quadratic complexity. Previously, this feature significantly slowed Admin operations that were performed on large number of products (for example, adding a product to category by SKU).

<!-- MC-17940 -->

*  You can now successfully search for an order by email in the **Sales** > **Orders** list.

<!-- MAGETWO-99622 -->

*  The error message that Magento displays when the user creates an attribute that starts with the reserved word `container` has been improved. For example, when a user created product attributes named `container_attributename` and `attributename`, Magento threw this error: `Exception in Magento/Framework/View/Element/UiComponentFactory.php` rather than stating which user behavior was causing the system problem.

<!-- MAGETWO-94464 -->

*  A watermark with a white or transparent background is no longer converted to black when opacity is reduced below 100%.

#### JavaScript framework

<!-- MAGETWO-99562 -->

*  The cursor on the email field of the login page now behaves as expected when running Magento on Safari. Previously, the cursor repeatedly moved to the end of the email address field when you tried to edit this field.

<!-- MAGETWO-91328 -->

*  Customers can now successfully check out when the AdBlock extension and Google Analytics are enabled.

### General

<!-- MAGETWO-73529 -->

*  We have improved the performance of the grouped product detail pages and category pages that contain a large number of grouped products.

<!-- MAGETWO-98485 -->

*  You can now successfully navigate to the Web Setup Wizard when `session.save_handler=db` is set in `app/env.php`. Previously, when you tried to navigate to the Web Setup Wizard, Magento threw a fatal error.

<!-- MAGETWO-99372 -->

*  Magento now maintains custom prices for products in both the catalog and shopping cart after a quote is recalculated. Previously, the product price reverted to the default price after you recalculated the quote.

<!-- MC-18315 -->

*  Magento now sends sales-related email to the correct customer when `sales_emails` cron has an error.

<!-- ENGCOM-5354 -->

*  Search input is no longer missing the `aria-expanded` required attribute. Previously, the W3C HTML validator threw errors for the `#search` element. *Fix submitted by Amol Chaudhari in pull request [23331](https://github.com/magento/magento2/pull/23331)*. [GitHub-18337](https://github.com/magento/magento2/issues/18337)

<!-- ENGCOM-5253 -->

*  The sendfriend feature now verifies product visibility as expected. Previously, this feature verified product status only. *Fix submitted by Mateusz Wira in pull request [23121](https://github.com/magento/magento2/pull/23121)*. [GitHub-23053](https://github.com/magento/magento2/issues/23053)

<!-- ENGCOM-5182 -->

*  The `getListByCustomerId` function in `PaymentTokenManagementInterface` now returns an array. *Fix submitted by Serhiy Zhovnir in pull request [22915](https://github.com/magento/magento2/pull/22915)*. [GitHub-22899](https://github.com/magento/magento2/issues/22899)

<!-- ENGCOM-5132 -->

*  Tier prices can now be float values. Previously, Magento converted float percentage values to `int` before saving it. *Fix submitted by Maksym Novik in pull request [22936](https://github.com/magento/magento2/pull/22936)*. [GitHub-18651](https://github.com/magento/magento2/issues/18651)

### Import/export

<!-- MAGETWO-99446 -->

*  Only modified or updated product records are flushed from the catalog cache after importing, re-indexing, and running `bin/magento cron:run --group index`. Previously, all products in the catalog were flushed.

<!-- ENGCOM-5165 -->

*  You can now update products through import of a CSV file when the updated products have `product_id` values that range widely (for example, a value 1 to a value 6000). Previously, when you initiated the import of the CSV file (**Admin** > **System** > **Import** > **Product** > **Add/Update**), Magento threw this error: `General error: 1114 The table 'catalog_product_index_price_temp' is full occurs`. *Fix submitted by Mateusz Wegrzycki in pull request [22902](https://github.com/magento/magento2/pull/22902)*. [GitHub-22028](https://github.com/magento/magento2/issues/22028)

<!-- ENGCOM-5030 -->

*  Custom import adapters now validate CSV files as expected if column and data are available. Previously, the CSV file was not validated, and Magento threw the following error: `Notice: Undefined index: sku in /var/www/html/hamtc/vendor/magento/module-import-export/Model/Import/Entity/AbstractEntity.php on line 411`. *Fix submitted by Amol Chaudhari in pull request [22180](https://github.com/magento/magento2/pull/22180)*. [GitHub-19761](https://github.com/magento/magento2/issues/19761)

### Indexers

<!-- MC-18327 -->

*  We improved the performance of product flat data re-indexing. [GitHub-23462](https://github.com/magento/magento2/issues/23462)

### Infrastructure

*  Magento 2.2.10 now supports PHP 7.2.x (tested with 7.2.21). <!--- MC-16174 -->

*  Magento 2.2.10 does not support PHP 7.0.x. <!--- MC-18521 -->

<!-- ENGCOM-4855 -->

*  The `QuoteRepository` `get` methods now return an object of instance `Vendor\Module\Model\Quote`. *Fix submitted by Bartłomiej Szubert in pull request [22549](https://github.com/magento/magento2/pull/22549)*. [GitHub-12802](https://github.com/magento/magento2/issues/12802)

<!-- ENGCOM-5112 -->

*  Magento no longer caches absolute file paths in the validator factory (`Magento\Framework\Validator\Factory::_initializeConfigList`). Previously, caching absolute file paths resulted in problems during transactions when a customer, a `customer_address`, or quote for a registered customer was saved. *Fix submitted by David Führ in pull request [22805](https://github.com/magento/magento2/pull/22805)*. [GitHub-21842](https://github.com/magento/magento2/issues/21842)

<!-- ENGCOM-5217 -->

*  The description of the `setStoreId` function has been amended to more clearly explain how the function helps load CMS pages. *Fix submitted by Prakash Prajapati in pull request [23149](https://github.com/magento/magento2/pull/23149)*. [GitHub-22767](https://github.com/magento/magento2/issues/22767)

### Orders

<!-- MAGETWO-99660 -->

*  Custom customer address attribute are populated with the values that have been assigned for the selected address when the **Same As Billing Address** setting is disabled. Previously, when a merchant tried to change an address while creating an order from the Admin, the drop-down menu of available addresses was not populated.

<!-- ENGCOM-5211 -->

*  You can now successfully view order information by selecting **Sales** > **Orders** > **View Order**. Previously, an issue with the `truncateString` method resulted in Magento throwing an error when you tried to view order information. *Fix submitted by emilie-blackbird in pull request [20849](https://github.com/magento/magento2/pull/20849)*. [GitHub-16958](https://github.com/magento/magento2/issues/16958)

### Page Cache

<!-- MC-18144 -->

*  Full page cache works as expected for non-default store views.

### Payment methods

*  The **Braintree payment method now complies with PSD2 regulations**. Its core integration API has been upgraded to the latest JavaScript SDK v3 API, which is a requirement for supporting native Braintree 3D Secure 2.0 adoption. Braintree transactions are now also verified by using the native Braintree 3D Secure 2.0 service. <!--- MAGETWO-99607 MC 17628 -->

*  Authorize.net now provides the ability, through the `cardholderAuthentication` request field, to make 3D Secure verification through third-party services such as CardinalCommerce. Starting with this release, **Authorize.net accept.js integration will support 3DS 2.0 through CardinalCommerce**. <!--- MAGETWO-99737 -->

<!--- MC-18237 -->

*  The Cybersource and eWay payment modules have been deprecated in this release to comply with PSD2 SCA regulation, which takes effect on September 14, 2019, or shortly thereafter. Use the official Marketplace extensions for these features instead.

#### Other payment issues

<!-- MAGETWO-16590 -->

*  The Transactions tab now displays the correct status for a capture transaction for an order that was placed with the Authorize.net `accept.js` payment method.

<!-- MC-17358 -->

*  Magento now displays a more informative error message (`CVV verification failed`) when you enter an invalid CVV code while using the Braintree payment method. Previously, Magento displayed a generic error message.

<!-- MC-19269 -->

*  You can now enter information into the **Credit Card Number** and **Expiration Date** fields on the Checkout page when the **CVV Verification** setting is disabled. Previously, you were not able to click on these fields to enter information.

<!-- MAGETWO-99416 -->

*  Magento no longer processes payment for an order that has an empty email field in the quote. Previously, Braintree processed the payment, but displayed an error message on the storefront and did not create the order.

<!-- MAGETWO-98805 -->

*  Customers can now successfully place an order when the order is partially paid for by gift card or when a discount is applied to the order. Previously, customers could not place an order, and Magento displayed this error: `error: Field format error: 10413-The totals of the cart item amounts do not match order amounts`.

<!-- MC-17551 -->

*  When you create orders using Braintree, Magento now successfully creates the orders that contain both simple and virtual products with the **Checkout with Multiple Addresses** option enabled. Previously, Magento listed an order created with these features as an empty order with a grand total of zero on the Orders list.

<!-- MC-99111 -->

*  The Admin sales list now displays the payment method for each order. [GitHub-22231](https://github.com/magento/magento2/issues/22231)

<!-- MAGETWO-99581 -->

*  You can now cancel orders placed with PayPal Express even after authorization has expired.

<!-- MAGETWO-99221 -->

*  Customers can now place the order for virtual products with a zero subtotal after entering address information. Previously, customers could not place an order for virtual products with a zero subtotal if they modified their address, and Magento displayed this message: `The requested Payment Method is not available`.

<!-- MC-19610 -->

*  Magento no longer places an order if a JavaScript error occurs when a customer clicks **Place order** using Braintree as the payment method.

### Pricing

<!-- MC-98899 -->

*  You can now save a special price that exceeds three characters in Japanese Yen. Previously, you could not apply denominations that exceeded three characters with a comma separator when representing Yen.

### Reports

<!-- MC-18248 -->

*  The start and finish date in reports now correspond to the entered values when you create a report from the Admin. Previously, the start and finish dates in the displayed report was one day earlier than you entered.

<!-- ENGCOM-5298 -->

*  Selecting **Show by year** when filtering **Reports** > **Products** > **Ordered** now results in a list of products sold per year that is grouped by product quantity in descending orderPreviously, Magento displayed a list of products sold per year that contained multiple entries for a single product on a per order basis. *Fix submitted by Prakash Prajapati in pull request [23252](https://github.com/magento/magento2/pull/23252)*. [GitHub-22087](https://github.com/magento/magento2/issues/22087)

### Review

<!-- MAGETWO-99315 -->

*  Administrators with restricted privileges to reviews can now edit review status from the pending reviews list.

### Sales

<!-- MAGETWO-17268 -->

*  The date format used in tables throughout the product interface is now based on the Admin-defined locale.

<!-- MAGETWO-99674 -->

*  The Orders Total now reflects relevant product discounts when you re-order a product. Previously, discounts were not included when you re-ordered.

<!-- MAGETWO-99358 -->

*  You can now edit an order that contains a custom address attribute on its order form. Previously, Magento threw this error if you tried to edit an order with a custom address attribute: `We can't update the order address right now`.

<!-- MAGETWO-99569 -->

*  The Admin now returns exact matches for keyword searches.

<!-- MAGETWO-99462 -->

*  Custom order statuses no longer override default statuses in drop-down menus.

<!-- MAGETWO-99884 -->

*  Magento now includes the correct price for a discounted product when the Customer Group is not set to the default group. Previously, when you re-ordered a discounted product, the correct price was not displayed in the Items Ordered field.

<!-- MC-17838 -->

*  Magento no longer adds a product that is selected but not explicitly added to the cart to an order when you create an order from the Admin.

### Sales rule

<!-- MAGETWO-99540 -->

*  Magento now includes the correct price for a discounted product when the Customer Group is not set to the default group. Previously, when you re-ordered a discounted product, the correct price was not displayed in the Items Ordered field.

### Search

<!-- MAGETWO-92102 -->

*  Search results now reflect the search weight you assign to product attributes in attribute configuration.

<!-- MAGETWO-73989 -->

*  The Admin payment method validation now uses the updated billing address country for orders placed in the Admin. Previously, order creation failed when the **Payment from Applicable Countries** setting was set to **Specific Countries** and a non-US country was selected from the Payment from Specific Countries list.

<!-- MAGETWO-99655 -->

*  You can now use Elasticsearch to run a query that includes the `<` character. Previously, when you used this symbol in a query, Magento threw this error: `{"0":"SQLSTATE[42000]: Syntax error or access violation: 1064 syntax error, unexpected $end, query was: SELECT`.

<!-- MAGETWO-99716 -->

*  You can now limit the number of search suggestions that the autocomplete feature provides by setting the **Autocomplete Limit** field.

### Shipping

<!-- ENGCOM-5423 -->

*  You can now use more than 35 characters in the shipper’s address field when booking a UPS shipment or generating a UPS shipment label. Previously, if this address exceeded 35 characters, Magento threw an error. *Fix submitted by Ankur Raiyani in pull request [23603](https://github.com/magento/magento2/pull/23603)*. [GitHub-23522](https://github.com/magento/magento2/issues/23522)

<!-- ENGCOM-5169 -->

*  The Order Tracking page now displays the Contact us link as expected when this feature is enabled and the designated shipping carrier is not available on the Order page. *Fix submitted by Eduard Chitoraga in pull request [23019](https://github.com/magento/magento2/pull/23019)*. [GitHub-22822](https://github.com/magento/magento2/issues/22822)

<!-- ENGCOM-5136 -->

*  Magento no longer tries to validate UPS required fields (UPS Access License Number, User ID, and Password fields) when UPS shipping is not active. *Fix submitted by Serhiy Zhovnir in pull request [22873](https://github.com/magento/magento2/pull/22873)*. [GitHub-22786](https://github.com/magento/magento2/issues/22786)

### Swatches

<!-- ENGCOM-5427 -->

*  Setting the **Update Product Preview Image** to **no** now works as expected. Previously, when you clicked on a size or image that represented another variation for a configurable product, Magento displayed the image for one of the simple products associated with the configurable product. *Fix submitted by Ravi Chandra in pull request [22510](https://github.com/magento/magento2/pull/22510)*. [GitHub-16446](https://github.com/magento/magento2/issues/16446)

### TargetRule

<!-- MC-18285 -->

*  Magento now returns more informative error messages when a misconfigured target rule caused an error.

<!-- MAGETWO-99440 -->

*  Deleting products no longer triggers exception errors. Previously, the target rule that was used to identify the product triggered an exception.

### Translation

<!-- ENGCOM-5366 -->

*  The payment method area of the shipment and credit memo emails that are sent to customers now have correctly translated strings. *Fix submitted by Ihor Sviziev in pull request [23438](https://github.com/magento/magento2/pull/23438)*. [GitHub-23333](https://github.com/magento/magento2/issues/23333)

### UI

<!-- MC-17512 -->

*  Pre-loading of fonts has been moved from the Blank theme to the Luma theme.

<!-- MAGETWO-99828 -->

*  Magento now saves order views with the date ranges you enter while creating the filter (**Sales** > **Orders**). Previously, when you opened a saved filtered order view, Magento indicated that the dates you entered were invalid.

<!-- MC-17295 -->

*  The calendar date picker now updates values as expected when the linked input value is changed.

<!-- ENGCOM-5429 -->

*  The form reset feature now clears the **date** field in Admin forms as expected. *Fix submitted by Prakash Prajapati in pull request [23658](https://github.com/magento/magento2/pull/23658)*. [GitHub-22940](https://github.com/magento/magento2/issues/22940)

<!-- ENGCOM-5401 -->

*  The `always` action that precedes the opening of the alert and confirm widgets is now called once. Previously, the `always triggering` text was logged twice after you clicked the **OK** button. *Fix submitted by Eduard Chitoraga in pull request [23579](https://github.com/magento/magento2/pull/23579)*. [GitHub-23233](https://github.com/magento/magento2/issues/23233)

<!-- ENGCOM-5394 -->

*  The behavior of the mobile menu JavaScript now triggers at the same breakpoint as the mobile menu styles. *Fix submitted by bobemoe in pull request [23547](https://github.com/magento/magento2/pull/23547)*. [GitHub-8298](https://github.com/magento/magento2/issues/8298)

<!-- ENGCOM-5396 -->

*  The **Refund** button on the credit memo page now remains active after a merchant enters a value in the Refund Totals section. *Fix submitted by Prakash Prajapati in pull request [23566](https://github.com/magento/magento2/pull/23566)*. [GitHub-23285](https://github.com/magento/magento2/issues/23285)

<!-- ENGCOM-5336 -->

*  Magento now displays the cursor to the right of the search keyword box as expected after multiple clicks on the search field in mobile view. *Fix submitted by Prakash Prajapati in pull request [23352](https://github.com/magento/magento2/pull/23352)*. [GitHub-22736](https://github.com/magento/magento2/issues/22736)

<!-- ENGCOM-5401 -->

*  The `always` action that precedes the opening of the alert and confirm widgets is now called once. Previously, the `always triggering` text was logged twice after you clicked the **OK** button. *Fix submitted by Eduard Chitoraga in pull request [23579](https://github.com/magento/magento2/pull/23579)*. [GitHub-23233](https://github.com/magento/magento2/issues/23233)

<!-- ENGCOM-5396 -->

*  The **Refund** button on the credit memo page now remains active after a merchant enters a value in the Refund Totals section. *Fix submitted by Prakash Prajapati in pull request [23566](https://github.com/magento/magento2/pull/23566)*. [GitHub-23285](https://github.com/magento/magento2/issues/23285)

<!-- ENGCOM-5214 -->

*  Corrected alignment of the search suggestion panel with the **Advance reporting** button. *Fix submitted by Prakash Prajapati in pull request [23151](https://github.com/magento/magento2/pull/23151)*. [GitHub-22506](https://github.com/magento/magento2/issues/22506)

<!-- ENGCOM-5084 -->

*  The height setting in `.admin__control-textarea` component is no longer hard-coded. Previously, this hard-coded value prevented you from changing the height of this text field through the UI. *Fix submitted by Serhiy Zhovnir in pull request [22783](https://github.com/magento/magento2/pull/22783)*. [GitHub-22771](https://github.com/magento/magento2/issues/22771)

<!-- ENGCOM-5197 -->

*  Scrolling now behaves as expected on the create order page. *Fix submitted by Denis Kopylov in pull request [23086](https://github.com/magento/magento2/pull/23086)*. [GitHub-23034](https://github.com/magento/magento2/issues/23034)

<!-- ENGCOM-5156 -->

*  The design of the Review & Payments **Apply Discount Coupon** box of the checkout page has been improved. *Fix submitted by Ravi Chandra in pull request [23002](https://github.com/magento/magento2/pull/23002)*. [GitHub-3795](https://github.com/magento/magento2/issues/3795),[GitHub-21214](https://github.com/magento/magento2/issues/21214)

<!-- ENGCOM-5111 -->

*  Form element validation is now triggered as expected when form validation rules change. Previously, when you changed form validation rules for a form element during runtime, the new validation rules were not applied. *Fix submitted by Amol Chaudhari in pull request [22801](https://github.com/magento/magento2/pull/22801)*. [GitHub-21473](https://github.com/magento/magento2/issues/21473)

### URL rewrite

<!-- MAGETWO-72788 -->

*  You can now export newsletter subscribers from the Admin. Previously, Magento displayed this error when you selected a subscriber name and clicked **Export**: `error: URI too long`

<!-- MAGETWO-96662 -->

*  Magento no longer removes the query string from URLs when the query string is preceded by a slash. Previously, when a customer opened a URL that contained a trailing slash and query string (for example, `http://magento.host.com/sample-url-key/?cupcakes`), Magento redirected the user to a URL that omitted the slash (`http://magento.host.com/sample-url-key`).

<!-- MAGETWO-99925 -->

*  Products are successfully updated through import of an CSV file in **Add/Update** mode. Previously, the import process failed, and Magento displayed this error: `The value specified in the URL Key field would generate a URL that already exists`.

<!-- MAGETWO-99813 -->

*  Redundant URL rewrite operations that were triggered by category operations have been eliminated, and page load performance has been improved. Previously, updating a category to add or delete products triggered URL rewrite regeneration for all products with changed positions.

### Web API framework

<!-- ENGCOM-5204 -->

*  Magento now renders shipment details for an order without a fatal error when you use `POST V1/shipment` to create a shipment. *Fix submitted by Milind Singh in pull request [23119](https://github.com/magento/magento2/pull/23119)*. [GitHub-22686](https://github.com/magento/magento2/issues/22686)

<!-- ENGCOM-5188 -->

*  You can now use `POST V1/customers` to update a customer that has no associated `store_id` without unintentionally changing other information. Previously, Magento changed the `store_id` to the default `store_id` if this field was left empty in the PUT request. *Fix submitted by Mateusz Wira in pull request [22895](https://github.com/magento/magento2/pull/22895)*. [GitHub-22869](https://github.com/magento/magento2/issues/22869)

### Wishlist

<!-- MAGETWO-96873 -->

*  The behavior of the Catalog page Requisition list menu has been corrected.

## Community contributions

This release includes substantial community contributions: over 100 GitHub issues resolved and over 350 pull requests merged. We are grateful to the wider Magento community for this effort and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-2-10-issues.md %}

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-2-10-partner.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Installation and upgrade instructions

See [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html) for complete installation and upgrade information.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
