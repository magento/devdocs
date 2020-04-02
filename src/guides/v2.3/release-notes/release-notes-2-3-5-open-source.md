---
group: release-notes
title: Magento Open Source 2.3.5 Release Notes
---

Magento Open Source 2.3.5 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 180 functional fixes to the core product and  over 25 security enhancements. It includes resolution of over 46 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.4) provides. Patch 2.3.4.1 (Composer package 2.3.4-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5 All hot fixes that were  applied to the 2.3.4 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.) For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.-p1), see [Install Magento using Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

With this quarterly release, we’ve changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento (APSB20-02)](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 25 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security updates available for Magento APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html) for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.5) have been ported to  1.14.4.5 and 1.9.4.5, as appropriate.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

#### Security enhancements and fixes to core code

This release includes over 25 security fixes and platform security improvements. Additional security enhancements include:

*  **Implementation of Content Security Policy (CSP)**. `Content-Security-Policy` is an HTTP response header that browsers can use to enhance the security of a web page. This added layer of security supports the detection and mitigation of attacks, including cross-site scripting (XSS) and data injection attacks. This release implements the CSP SPI, which developers can use. Report-only mode is default.

*  **Removal of session id from URLs**. Exposure of `session id` values in URLs creates a potential security vulnerability in the form of session fixation. We are removing code from the classes and methods add/read session id from URLs.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and performance:

*  **Support for Elasticsearch 7.5**. Elasticsearch 7.5 is now the supported catalog search engine for both Magento Commerce and Magento Open Source. With this release, Magento 2.3.x supports only Elasticsearch 6.x and 7.x.  Elasticsearch 2.x and 5.x are now deprecated for Magento 2.3.x and will be removed in Magento 2.4.0. <!--- MC-30796-->

*  **Deprecation of core integration of third-party payment methods**. With this release, the integrations of the Authorize.Net, eWay, CyberSource, and Worldpay payment methods are deprecated. These core features are no longer be supported and will be removed in the next minor release (2.4.0). Merchants should migrate to the official extensions that are available on the Magento Marketplace. <!--- MC-31168-->

*  **Deprecation of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on Magento Marketplace. <!--- MC-31315-->

*  **Upgrade of Symfony Components** to the latest lifetime support version (4.4). (Symfony Components are a set of decoupled PHP libraries used by the Magento Framework. <!--- MC-29549-->

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. <!--- MC-15318-->

### Performance boosts

*  **Improvements to customer data section invalidation logic**. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom sections.xml invalidations are active.  (Previously, Private content (local storage) was not correctly filled in/populated when you have a custom *etc/frontend/sections.xml* with action invalidations). See [Private content](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

*  **Multiple optimizations to Redis performance**. The enhancements minimize the number of queries to Redis that are performed on each Magento request. These optimizations include:

   *  Decrease in size of network data transfers between Redis and Magento
   *  Reduction in Redis’ consumption of CPU cycles by improving the adapter’s ability to automatically determine what needs to be loaded
   *  Reduction in race conditions on Redis write operations

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, CMS, and B2B.

*  **The PayPal Pro payment method now works as expected in the Chrome 80 browser**. This payment method previously invoked a Magento callback endpoint that needed access to the customer’s session — access that the new default Chrome same-46 site cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

*  **A PHPStan code analysis check has been integrated into Magento static builds**. This tool  performs sophisticated static code analysis and identifies additional issues that are currently not detected by PHP CodeSniffer and PHP Mess Detector. See [Magento Testing Guide](https://devdocs.magento.com/guides/v2.3/test/testing.html).

### Merchant tool enhancements

### Inventory Management

Inventory Management enhancements for this release include:

*  New bulk API for `IsProductSalableForRequestedQtyInterface`, which is used in checkout and cart verification
*  New extension point for `SourceDataProvider` and `StockDataProvider`
*  Ability to view allocated inventory sources from the Orders list

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

With this release, you can now use  `products` and `categoryList` queries to retrieve information about products and categories that have been added to a staged campaign. See [Using queries](https://devdocs.magento.com/guides/v2.3/graphql/queries/index.html#staging) in the [GraphQL Developer Guide](https://devdocs.magento.com/guides/v2.3/graphql/) for details.

See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### dotdigital

This release includes:

*  **Integration of Engagement cloud and Magento B2B**. A new B2B integration module integrates Engagement cloud and the Magento B2B module enable Magento B2B merchants to leverage their B2B commerce data and better engage with their prospective and existing customers. This will include:
   *  Company data sync (customer type, company, company status)
   *  Sync of shared catalog data. Syncing additional product catalog data  (custom products and product attributes) to dotdigital. Merchants can turn additional product data into marketing campaigns or use it to make recommendations
   *  Sync of quote data

*  **Improved importer performance** and coupon code re-send

### Google Shopping ads Channel

The Google Shopping ads Channel bundled extension has reached end-of-life and has been removed from the Magento core code in this release (2.3.5 and 2.3.4-p1). It will not be delivered as a bundled extension in future releases. Alternative extensions are available on the Magento Marketplace.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

With this release, the Klarna extension is now available in Australia and New Zealand, and a new Oceania endpoint has been added to the existing API. This release also contains UX enhancements and minor bug fixes.

#### Yotpo

Yotpo is now integrated with Page Builder.

#### Vertex

This release of Vertex includes the following new feature and enhancements:

*  **Address Validation**. Addresses that are created or edited in the Customer Account are now validated when the module is enabled.

*  **Admin Configuration**.  Flexible Field dropdown options are now sorted alphabetically by the current Admin user's locale.

*  **Virtual Products**. Klarna now uses an order's billing address to calculate taxes on virtual products. Shipping-related flexible fields are no longer completed for virtual products.

*  **Restorable configuration settings**. The **Use Vertex for orders shipping to**, **Summarize Tax by**,  and **Global Delivery Term** now provide an option to be restored to their default setting.

*  **Port in WSDL**. The WSDL URL now support ports and basic authentication.

*  **Best Practices in Code**. Models intended to assist Observers have been relocated into the Model namespace to clean up the Observer namespace.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.5 core code.

### Installation, upgrade, deployment

<!--- ENGCOM-6339-->

*  The link accessed from **Admin** > **Stores** > **Settings**  > **Configuration** > **General** > **Advanced Reporting** now opens in a new tab as expected.  *Fix submitted by Nagamaiah K in pull request [25760](https://github.com/magento/magento2/pull/25760)*. [GitHub-25757](https://github.com/magento/magento2/issues/25757)

<!--- MC-19037-->

*  You can now successfully remove a website along with the website’s scope-specific configuration settings in app/etc/config.php as expected. Previously, when you tried to remove the website, the operation failed, and Magento displayed this error: `The website with code xxx that was requested wasn't found. Verify the website and try again`. Additionally, Magento displayed this error on the storefront:  `Config files have changed. Run app:config:import or setup:upgrade command to synchronize configuration`. [GitHub-24061](https://github.com/magento/magento2/issues/24061)

<!--- MC-29795-->

*  Configuration settings that are disabled in index.php are no longer editable from the Admin.

### Adobe stock integration

<!--- ENGCOM-6323-->

*  Image previews now close as expected when you navigate to a new page of search returns when searching Adobe Stock images. *Fix submitted by Serhiy Zhovnir in pull request [25719](https://github.com/magento/magento2/pull/25719)*. [GitHub-723](https://github.com/magento/magento2/issues/723)

<!--- ENGCOM-6285-->

*  Image details are now hidden when you click on the image in the search result list. *Fix submitted by Nazar Klovanych in pull request [25566](https://github.com/magento/magento2/pull/25566)*. [GitHub-690](https://github.com/magento/magento2/issues/690)

<!--- ENGCOM-6331-->

*  You can now use keyboard arrow keys to navigate to the next image in the preview. *Fix submitted by Adarsh Manickam in pull request [25611](https://github.com/magento/magento2/pull/25611)*. [GitHub-691](https://github.com/magento/magento2/issues/691)

<!--- ENGCOM-6272-->

*  The **Search Stock Images** button now remains active as expected after you’ve searched for and saved an image from the media gallery. Previously,  this button was disabled after you used it to search for an image and saved it.  *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-622](https://github.com/magento/magento2/issues/622)

### Bundle products

<!--- MC-29938-->

*  Bundle product prices are now calculated correctly on product pages.

<!--- MC-23215-->

*  The performance of the `catalog_product_price` reindex operation for bundle products has been improved.

<!--- MC-22741-->

*  Magento now correctly displays required field asterisks for products with custom options in the Admin.

<!--- MC-29059-->

*  Clicking **Enter** in the **Shipping Price** field for Negotiable Quotes now correctly updates shipping price.

<!--- MC-22632-->

*  Magento now displays the same price for a bundle product in the mini cart and on the product page.

<!--- MC-29209-->

<!--- MC-29598-->

### Cache

<!--- MC-23055-->

*  Frontend cookies are now set as expected when you enable **Use Secure URLs on Storefront** and  **Secure Base URL** is set to **https**.

### Cart and checkout

<!--- MC-31379-->

*  Magento now displays an informative error message when you try to add a product by clicking **Order by SKU** when the file for upload is corrupt. Previously, Magento displayed a blank page.

<!--- MC-19515-->

*  Cart Price Rules that are based on payment methods are now applied during the checkout workflow. [GitHub-24206](https://github.com/magento/magento2/issues/24206)

<!--- MC-23261-->

*  You can now disable zip code validation on the checkout workflow from the Admin as expected. Previously, Magento threw an error when a customer entered a zip code that did not meet specified values for zip codes even after validation was disabled by setting `Input Validation` to **none**  from **Admin** > **Stores** > **Attributes** > **Customer address** > **Edit Zip/Postal Code**.

<!--- MC-30254-->

### Catalog

<!--- MC-30775-->

*  Filtering on the Admin product grid website column now works as expected. Previously, filter results did not display the correct number of products, but consistently displayed the total number of products as 1.

<!--- MC-18470-->

*  Magento no longer throws an error during checkout when the **Synchronize with Backend** configuration setting is enabled.[GitHub-23833](https://github.com/magento/magento2/issues/23833)

<!--- MC-23193-->

*  Magento no longer throws an error when you change the name of a tiered product that is included in a scheduled update. Previously, when you tried to save the product with a new name, Magento displayed this error: `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '3-0-0-2.0000-0' for key 'UNQ_EBC6A54F44DFA66FA9024CAD97FED6C7', query was: INSERT INTO catalog_product_entity_tier_price (all_groups, customer_group_id, qty, value, website_id, percentage_value, row_id) VALUES (?, ?, ?, ?, ?, ?, ?)`

<!--- MC-30114-->

*  The Recently Viewed Products feature now works as expected in multistore deployments.

<!--- MC-30050-->

*  You can now successfully edit a configurable product with many variants (approximately 5,000) from the Admin. Previously, when you tried to edit a configurable product with many subproducts, Magento displayed this error: `Warning: DOMDocumentFragment::appendXML(): Entity: line 1: parser error : CData section too big found in /vendor/magento/framework/View/TemplateEngine/Xhtml/Template.php on line 60`

<!--- MC-30582-->

*  Sorting on attribute sets  on  **Admin** > **Catalog** > **Products** is now based on alphabetical order as expected.

<!--- MC-29022-->

*  Custom attribute values can now be saved as expected in the Admin.

<!--- MC-20259-->

*  Corrected an issue that caused the PUT `/V1/products/:sku/media/:entryId` call to create a new entry rather than replace the existing one.

<!--- MC-29651-->

*  Customizable options are now imported as expected when `row_id` is not equal to a product's `entity_id`. Previously, Magento did not import customizable options when `row_id` was not equal to a product’s `entity_id`, which resulted in certain products not being imported.

<!--- MC-30067-->

*  You can now assign a default watermark to a theme. Previously, after assigning the watermark, Magento threw an fatal error.

<!--- MC-29876-->

*  Magento now displays product images in the minicart without distortion. Previously, Magento stretched the image in the minicart to fill the entire width and hight of the image container.

<!--- MC-29652-->

*  The Recently View Products feature now shows only products associated with the current store view in multi-store deployments when **Stores** > **Configurations** > **Catalog** > **Recently Viewed/Compared Products** > **Show for Current**  is set to **store view**. Previously, Magento displayed recently viewed products from all websites, no matter which website the product was assigned to.

<!--- MC-30213-->

*  The product compare feature now works as expected. It displays only products in the current user’s compare list.

<!--- MC-21948-->

*  Problems with the partial re-indexing of large categories have been resolved. Previously, due to problems with this process, products were randomly excluded from categories on the storefront.

<!--- MC-29865-->

*  The `getBasePrice` function now returns float value  as expected rather than a string.

<!--- MC-29519-->

*  Images are now saved in `pub/media/catalog/category` as expected when you save category images. Previously, Magento saved these images in `pub/media/catalog/tmp/category`.

<!--- MC-31801-->
<!--- MC-30974-->
<!--- MC-18057-->

### CatalogInventory

<!--- MC-21821-->

*  Magento now displays appropriate feedback when you unsuccessfully attempt to update and save a product. Previously, Magento did not display an error message or take any action when you  tried to save a product after updating it. [GitHub-22274](https://github.com/magento/magento2/issues/22274)

### Catalog price rule

<!--- MC-29144-->

*  The minicart and Admin shopping cart (**Admin** > **Customers** > **Manage Shopping Cart**) now display  correct product prices when a Catalog Price Rule is applied. Previously, the storefront shopping cart displayed the correct product price, but the minicart and Admin shopping cart displayed the original product price.

<!--- MC-29902-->

*  Product prices on the storefront now accurately reflect the application of a scheduled catalog price rule update. Previously, prices did not reflect the scheduled cart price rule until you manually re-indexed (`php bin/magento indexer:reindex catalogrule_rule`).

### Catalog rule

<!--- MC-19646-->

*  The performance of the Catalog Product Rule Indexer has been improved.

### Catalog widget

<!--- MC-30249-->

<!--- MC-29166-->

*  The CatalogWidget products list now works as expected with anchor categories, and products from anchor categories are now matched and displayed. .Previously, when you selected a parent category that was an anchor, but that did not contain assigned products, products were not visible in the widget.

<!--- MC-23252-->

### Cleanup and simple code refactoring
<!--- ENGCOM-6348-->

*  Corrected misalignment of the **View Details** label for configurable products in the order summary of the checkout workflow. *Fix submitted by Max Fickers in pull request [25785](https://github.com/magento/magento2/pull/25785)*. [GitHub-20463](https://github.com/magento/magento2/issues/20463)

<!--- ENGCOM-6336-->

*  Added a `margin-bottom` value to the static CMS block widget in the Checkout/Cart Summary of the checkout workflow in  the Luma and Blank themes. *Fix submitted by Fabricio Sobral in pull request [25729](https://github.com/magento/magento2/pull/25729)*. [GitHub-25703](https://github.com/magento/magento2/issues/25703)

<!--- ENGCOM-6290-->

*  Added a margin between the checkbox and icon when choosing a category when assigning a condition to a new Cart Price rule.  *Fix submitted by Eden Duong in pull request [25597](https://github.com/magento/magento2/pull/25597)*. [GitHub-25596](https://github.com/magento/magento2/issues/25596)

<!--- ENGCOM-6249-->

*  Rating stars no longer overlays the product over which your mouse hovers on the category page. *Fix submitted by Kajal Solanki in pull request [25524](https://github.com/magento/magento2/pull/25524)*. [GitHub-25517](https://github.com/magento/magento2/issues/25517)

<!--- ENGCOM-6180-->

*  Corrected misalignment of the calendar icon inside the textbook on the Add Design Change page. *Fix submitted by magudelo62 in pull request [25309](https://github.com/magento/magento2/pull/25309)*. [GitHub-20379](https://github.com/magento/magento2/issues/20379)

<!--- ENGCOM-6345-->

*  Deleted unused variable (`time_taken`) from the `Magento/Catalog/view/frontend/templates/product/listing.phtml` template. *Fix submitted by andrew-chornij in pull request [25770](https://github.com/magento/magento2/pull/25770)*. [GitHub-25715](https://github.com/magento/magento2/issues/25715)

### CMS content

<!--- MC-30093-->

<!--- MC-22927-->

*  Magento now loads blocks that are associated with the website that a restricted user has access to when the user navigates to  **Content** >  **Blocks**.

<!--- MC-30853-->

### Configurable products

<!--- ENGCOM-6349-->

*  Added validation logic to the **Create new value** input field of the configurable product creation workflow. Previously, you could create an attribute option value that contained only a space. *Fix submitted by Torben Höhn in pull request [25421](https://github.com/magento/magento2/pull/25421)*. [GitHub-21504](https://github.com/magento/magento2/issues/21504)

<!--- MC-22732-->

<!--- MC-18057-->

### Configurable products

<!--- ENGCOM-6349-->

*  Added validation logic to the **Create new value** input field of the configurable product creation workflow. Previously, you could create an attribute option value that contained only a space. *Fix submitted by Torben Höhn in pull request [25421](https://github.com/magento/magento2/pull/25421)*. [GitHub-21504](https://github.com/magento/magento2/issues/21504)

<!--- MC-22732-->

<!--- MC-18057-->

### Cron

<!--- ENGCOM-6253-->

*  `bin/magento cron:run -v` no longer fails when the database name exceeds 64 characters but instead creates a shorter name. *Fix submitted by Vasil Pashovski in pull request [25472](https://github.com/magento/magento2/pull/25472)*. [GitHub-22240](https://github.com/magento/magento2/issues/22240)

<!--- MC-22819-->

### Customer

<!--- MC-17259-->

*  You can now save a **Gender** field with a blank value when directly editing customer information from the Customer list. Previously, when you saved this value, Magento displayed a success message, but did not save it. [GitHub-23128](https://github.com/magento/magento2/issues/23128)

<!--- MC-29789-->

*  Magento now uses a new PHPSession for each change of password.

<!--- MC-21203-->

*  The steps involved in `x-magento-init` initialization now happen in the correct order: RequireJS loads `section-config.js`, and `section-config.js` constructs and initiates itself as required. Previously, RequireJS loaded `section-config.js`, but the internal data `section-config` required for functioning did not load, and `section-config.js` threw an error: `Uncaught TypeError: Cannot read property '*' of undefined`. [GitHub-17125](https://github.com/magento/magento2/issues/17125)

<!--- MC-29722-->

### Customer segment

<!--- MC-19235-->

*  Magento now correctly applies customer segment cart price rules in a multi-website deployment when an administrator creates an order from the Admin and adds products to the cart from different websites.

<!--- MC-29429-->

<!--- MC-30443-->

*  Customer segment now work as expected  when segment conditions  include the total number of orders.

### Custom customer attribute

<!--- MC-30689-->

*  Magento now displays custom customer address attribute values as expected in the address section of the checkout workflow. Previously, Magento displayed the custom customer address attribute code instead of the value, and a JavaScript error was triggered.

### EAV

<!--- MC-30487-->

*  The Update Attribute action now correctly updates the timestamp of a product’s `updated_at column` from `catalog_product_entity`  when you update the product from the Admin edit product page.

<!--- MC-29918-->

*  Magento now respects store-specific settings that determine whether the telephone number field of the checkout workflow is required in a multi-site deployment.  Previously, in deployments where one store required this field in the checkout workflow and another store did not, customers who did not complete this field while checking out on the store that did not require it encountered this error:   `Please check the shipping address information. "telephone" is required. Enter and try again`.

### Email

<!--- MC-22163-->

*  Email templates (**Admin** > **Marketing** > **Communications** > **Email Templates**) can now be previewed from the Admin when JavaScript magnification is enabled.  Previously, when you retried to preview an email template, the Email Preview popup window was empty. [GitHub-25068](https://github.com/magento/magento2/issues/25068)

<!--- MC-21868-->

*  The order notification emails sent from Microsoft Outlook now contain the content rendered as expected from the assigned email template. Previously, the notification email that Magento sent contained a blank body that included content as an ATT*-labeled attachment to the email. [GitHub-25076](https://github.com/magento/magento2/issues/25076)

### Frameworks

<!--- MC-15318 31567-->

*  Dependencies on Zend Framework have been migrated to the [Laminas project](https://getlaminas.org/about/foundation) to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated.

<!--- MC-30985-->

<!--- MC-20533-->

*  Editing products in the Admin no longer triggers Redis errors.

<!--- MC-29290-->

*  `php bin/magento cron:run` no longer processes items from the change log table multiple times. Previously, when you had more than 100000 new versions in the change log table,  actions could be called several times for the same `entity id`.

<!--- MC-29033-->

<!--- MC-30296-->

*  Watermark images no longer obscure the product image that they overlay. Previously, when the watermark image was larger than the product image it was applied to, the product image was not visible.

<!--- MC-30290-->

*  Non-cacheable blocks are no longer added to default layout handles. Adding non-cacheable blocks to default layout handlers renders all Magento pages non-cacheable. This results from the layout generation process:  During layout generation, Magento collects all available layout handles for a particular page and merges instructions from them into the page’s final layout structure. The default layout handle is used as a basic handle for every page. As a result,  layout updates that are declared for the default handler appear on every Magento page. [GitHub-9041](https://github.com/magento/magento2/issues/9041)

<!--- MC-17563-->

[GitHub-22909](https://github.com/magento/magento2/issues/22909)

<!--- MC-30824-->

<!--- MC-31708-->

### JavaScript framework

<!--- ENGCOM-6382-->

*  Added a check to confirm that a file belongs to the current base URL before setting the `.min.js` suffix. Previously, when you installed a CDN file using  `require-config.js`, and your store was in production mode, the JavaScript path was changed during compilation, and Magento displayed a 404 error.

<!--- ENGCOM-6288-->

*  JavaScript errors no longer occur on the shopping cart/minicart page when the cart contains a configurable product. *Fix submitted by Ihor Sviziev in pull request [25606](https://github.com/magento/magento2/pull/25606)*. [GitHub-25601](https://github.com/magento/magento2/issues/25601)

<!--- MC-31170-->

*  Clicking the **Refund Offline** button in the create a credit memo workflow now generates a credit memo as expected. Previously, a JavaScript error disabled this button, and Magento did not create a credit memo.

<!--- MC-19435-->

*  JavaScript bundling and JavaScript minimization should be disabled by default when `Magento_Baler` is enabled.

<!--- MC-19141-->

### General fixes

<!--- MC-22935-->

*  Comments entered by a customer on the storefront Returns page are now successfully attributed to the correct customer. Previously, these comments were attributed incorrectly to Customer Support.

<!--- MC-30586-->

*  All HTML tags are now supported by the TinyMCE4 editor.

<!--- MC-31299-->

*  Magento now displays an informative error message and continues to display the registration form as expected if an error occurs when a customer tries to complete a registration form that contains a multiselect customer attribute. Previously, Magento displayed a 500 error.

<!--- MC-30091-->

*  The stock alert email sent to customers about the re-stocking of a configurable product now contains the correct product price. Previously, this email contained a product price of 0.

<!--- MC-30109-->

*  You can now delete an empty user model without deleting the Administrators role to which it is assigned.

<!--- ENGCOM-6308-->

*  The `.fotorama__thumb__arr`  arrows adjacent to the thumbnail images on the product gallery now work as expected. *Fix submitted by Alexey Rakitin in pull request [25666](https://github.com/magento/magento2/pull/25666)*. [GitHub-25652](https://github.com/magento/magento2/issues/25652)

<!--- ENGCOM-6215-->

*  You can now accurately manipulate a zoomed image using your mouse. Previously. the magnified area was incorrectly offset. *Fix submitted by Mateusz Krzeszowiak in pull request [25358](https://github.com/magento/magento2/pull/25358)*. [GitHub-25027](https://github.com/magento/magento2/issues/25027)

<!--- ENGCOM-6203-->

*  LESS styling for the `Magento_Contact` and `Magento_Cms` modules has been moved to the correct `design` directory. This change brings these modules into alignment with the organization of other modules, none of which include any LESS styling. *Fix submitted by Paweł Tylek in pull request [25355](https://github.com/magento/magento2/pull/25355)*. [GitHub-25276](https://github.com/magento/magento2/issues/25276)*

<!--- MC-30741-->

*  Google Tag Manager tags are no longer triggered when a customer navigates to a new store without accepting the Google Tag Manager cookie.

<!--- MC-22911-->
<!--- MC-22972-->
<!--- MC-29261-->

*  A store’s admin URL no longer redirects to the storefront URL when these two URLs differ.

<!--- MC-23228-->

*  The graphical orders chart accessible from the Orders tab on the Admin dashboard now accurately reflects order quantity.

<!--- MC-30461-->

*  Product price change alert email now includes the correct product price. Previously, this email suggested a new product price of 0.

<!--- MC-29111-->

*  You can now save and duplicate all CMS pages. Previously Magento threw this exception when you tried to duplicate certain pages: `Unique constraint violation found`.

<!--- MC-29994-->

<!--- MC-30261-->

*  You can now add a child product of a grouped product to your cart when one of the grouped product’s other child products is out-of-stock. Previously, when one child product was out-of-stock, you could not add any other child products to the cart.

### Google Tag Manager

<!--- MC-30669-->

*  The missing `Magento_GoogleTagManager::checkout/set_checkout_option.phtml` template has been restored.

<!--- MC-29503-->

### Import/export

<!--- MC-21727-->

<!--- MC-31470-->

<!--- MC-29361-->

*  Magento now updates images as expected when you use the `hide_from_product_page` setting when importing products in deployments with multiple store views.

<!--- MC-30066-->

*  Magento now deletes temporary files from `/var` as expected after product import has completed.

<!--- MC-21727-->

*  Magento now removes related, up-sell and cross-sell products as expected in the import `.csv` file when you set the value of the **Empty attribute value constant** field to `_EMPTYVALUE_` for products in **System** > **Import**. Previously, cross-sell, up-sell, and related products were not removed from the import .csv file.

<!--- MC-29874-->

*  Magento now displays a more informative error message, and does not display a download link, when you try to delete a directory from the **System** > **Export** list. Previously, when you tried to delete a directory from this list, Magento continued to display a download link for files that could not be downloaded, and displayed an uninformative error message.

<!--- MC-29952-->

*  The CSV file used during import now contains the correct links for downloadable products and is now correctly formatted to support importing and updating  downloadable products.

<!--- MC-29376 30356-->

*  The Stock Indexer is now triggered as expected after import and updates product status. Previously, the Stock Indexer stock index did not index the changed product inventory data.

<!--- MC-29792-->

*  Images associated with configurable products are now properly uploaded during import and available for viewing as expected from the product edit page.

<!--- MC-30649-->

*  Magento now provides a message during product import that identifies which products in the imported CSV file have duplicated keys. Merchants can use this information to resolve conflicts. Previously, Magento displayed this error: `Notice: Undefined index: name in /var/www/html/ee233dev/app/code/Magento/CatalogImportExport/Model/Import/Product.php on line 2524`

<!--- MC-29009-->

*  Magento now successfully exports a `.csv` file  when you set import behavior for Replace, select a previously exported `.csv` file, and click **Check data**.  Previously, Magento displayed this error: `Data validation failed. Please fix the following errors and upload the file again." and "Following Error(s) has been occurred during importing process`.

<!--- ENGCOM-6213-->

*  You can now successfully import a product that does not have a `store_view_code` value. Previously, Magento displayed an error when you tried to import the product. *Fix submitted by Mahesh Singh in pull request [25080](https://github.com/magento/magento2/pull/25080)*. [GitHub-25069](https://github.com/magento/magento2/issues/25069)

<!--- MC-31089-->
<!--- MC-31122-->

*  CSV files generated during product import now contain group titles for downloadable products as expected. Previously, unnecessary validation of `group_title` during import prevented the display of group titles for downloadable products.

<!--- MC-30321-->

*  You can now successfully import or update customers using the Customer and addresses single file option of the import workflow. Previously, when you selected this option, Magento did not import the customer data and displayed this error: `Invalid data for insert`.

<!--- MC-30438-->

*  Magento now imports all custom options for a configurable product’s child products successfully when `store_view_code` is specified. This works whether you choose to import configurable products individually or collectively. Previously, Magento did not successfully import all custom options when the import file contained  more than one item  and `store_view_code` was specified

<!--- MC-30285-->

*  Exported `.csv` file now reflects filter settings for including in-stock or out-of-stock products. Previously, Magento exported all products, no matter which stock setting you selected.

### Index

<!--- ENGCOM-6188-->

*  The partial indexer no longer incorrectly removes stock data when updating at least 1000 products. Previously, the indexer removed stock data, which resulted in in-stock products appearing out-of-stock. *Fix submitted by Pieter Hoste in pull request [25306](https://github.com/magento/magento2/pull/25306)*. [GitHub-12205](https://github.com/magento/magento2/issues/12205), [GitHub-15984](https://github.com/magento/magento2/issues/15984)

<!--- MC-22008-->

### Infrastructure

<!--- MC-30796-->

*  Elasticsearch 7.5 is now the supported catalog search engine for both Magento Commerce and Magento Open Source. With this release, Magento 2.3.x supports only Elasticsearch 6.x and 7.x.  Elasticsearch 2.x and 5.x are now deprecated for Magento 2.3.x and will be removed in Magento 2.4.0.

<!--- MC-29549-->

*  Symfony Components have been upgraded to the latest lifetime support version (4.4). (Symfony Components are a set of decoupled PHP libraries used by the Magento Framework.)

<!--- ENGCOM-6240-->

*  Corrected the argument type of the email address constructor. *Fix submitted by Karyna Tsymbal in pull request [25485](https://github.com/magento/magento2/pull/25485)*. [GitHub-25434](https://github.com/magento/magento2/issues/25434)

<!--- ENGCOM-6347-->

*  Admin route names can now contain a hyphen in the URL. Previously, validators for the action menu did not accept hyphens.  *Fix submitted by Diego Pires in pull request [25612](https://github.com/magento/magento2/pull/25612)*. [GitHub-25635](https://github.com/magento/magento2/issues/25635)

<!--- ENGCOM-6256-->

*  The condition of the shipping method title output in `Magento_Checkout/js/view/summary/shipping` has been corrected. *Fix submitted by Andrii Beziazychnyi in pull request [25530](https://github.com/magento/magento2/pull/25530)*. [GitHub-25529](https://github.com/magento/magento2/issues/25529)

<!--- MC-15318-->

### Inventory

<!--- MC-23216-->

*  You can now create an offline credit memo. Previously, when you ried to create one, Magento displayed this error: `The credit memo couldn't be saved`.

<!--- MC-30099-->

<!--- MC-29177-->

### Newsletter

<!--- MC-23192-->

*  The preview template feature now works as expected. Previously, Magento displayed this error when you clicked **Preview Template” from the template edit page: `Request-URI Too Long The requested URL's length exceeds the capacity limit for this server`.

### Payment methods

<!--- MC-31984-->

<!--- MC-31168-->

*  The integration of third-party payment methods into the core Magento code has been depreciated. With this release, the integrations of the Authorize.Net, eWay, CyberSource, and Worldpay payment methods are deprecated. These core features are no longer be supported and will be removed in the next minor release (2.4.0). Merchants should migrate to the official extensions that are available on the Magento Marketplace.

<!--- MC-30810-->

*  You can now successfully complete an order using the Payflow Link payment method. Previously, the Payflow Link payment method always rejected payment because the order status remained in the pending payment state, even though the order status in the payment method logs was `Approved`.

<!--- MC-31315-->

*  The core implementation of Signifyd fraud protection is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on Magento Marketplace.

<!--- MC-29082-->

*  The **Place Order** button on the shipping workflow is now enabled as expected when you select Braintree as the payment method and the **My billing and shipping address are the same** setting is disabled.

<!--- MC-18714-->

*  You can now create an order from the Admin using Authorize.net as the payment method. Previously, Magento did not create the order, and displayed this error: `Transaction has been declined. Please try again later`. [GitHub-23934](https://github.com/magento/magento2/issues/23934)

<!--- MC-29060-->

*  The WorldPay payment integration with the Magento core has been deprecated. Please use the official Marketplace extension instead.

<!--- MC-31154-->

*  The **Place order** button on the checkout workflow is now disabled as expected until the customer updates the billing address when paying with Braintree. Previously, when secure 3D was enabled and the customer was paying with Braintree, Magento did not correctly validate the shipping address and displayed this JavaScript error: `TypeError: Cannot read property 'firstname' of null`.

<!--- MC-31574-->

*  The PayPal Pro payment method now works as expected in the Chrome 80 browser. This payment method previously invoked a Magento callback endpoint that  needed access to the customer’s session — access that the new default Chrome same site cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

<!--- MC-31387-->

*  Magento now successfully processes orders placed with PayPal Express Checkout where the order’s shipping address specifies a country region that the customer has manually entered into the text field rather than selected from the drop-down menu on the Shipping page. Previously, Magento displayed this error on the order review page: `Error 500: NOTICE: PHP message: PHP Fatal error: Uncaught Error: Call to a member function getId() on null in httpdocs/vendor/magento/module-paypal/Model/Api/Nvp.php:1527`. [GitHub-26698](https://github.com/magento/magento2/issues/26698)

<!--- MC-30497-->

*  Magento now displays  an informative error message each time a customer clicks **Pay with PayPal** after entering an invalid shipping address in the checkout workflow.  Previously, Magento displayed an error message only when the customer first clicked the button, not for subsequent clicks.

<!--- MC-30550-->

*  Magento no longer changes an order’s status to **processing** in the Payment Review section of the checkout workflow when a payment with PayPal fails.

<!--- MC-29919-->

*  Magento now saves the information a customer enters in the default billing and shipping fields   during checkout when the transaction is initially declined due to invalid credit card but later completed successfully. Previously, although Magento created the orde when the customer enters valid payment information, it did not update the default billing or shipping addresses in the My Account section of the checkout workflow.

### Performance

### Reviews

<!--- MC-29327-->

*  Magento now disables the **Submit Review** button after the user clicks the button once. Previously, Magento did not disable this button after the first click and created multiple reviews when the user clicked the **Submit Review** button multiple times.

<!--- MC-31271-->

*  The **Admin** > **Reports** > **Reviews** > **By Products** filter list now displays results as expected. Previously, when you tried to filter this list, Magento did not display any results.

### Sales

<!--- MC-31914-->

<!--- MC-30116-->

<!--- MC-23029-->

*  The **State/Province** field of the Billing Address section of the checkout workflow is now of type `Dropdown` in multisite deployments where the default store has country restrictions. Previously, the **State/Province** field was of type `Text`, which permitted you to enter an incorrect state.

<!--- MC-29206-->

*  Completed orders now appear in both the payment system and Magento. Previously, orders appeared in the payment system but not in Magento. [GitHub-25862](https://github.com/magento/magento2/issues/25862)

### Sales Rule

<!--- MC-19941-->

*  `quote_item.applied_rule_ids` is now updated as expected after a cart price rule is disabled. [GitHub-24526](https://github.com/magento/magento2/issues/24526)

<!--- MC-30268-->

*  Cart Price rules with a **condition set as Category (Parent only)** now work as expected consistently.

### Search

<!--- MC-29920-->

*  Filtering results no longer include out-of-stock options when you filter configurable products in a category.

<!--- MC-30117-->

*  Selecting all products from the products list page using Elasticsearch now displays all products in the search results as expected. Previously, search results displayed no results when this search was run on a staging server.

<!--- MC-29530-->

*  Elasticsearch now works as expected when you sort a product list that contains bundle products by alphabetized product names.

<!--- MC-17544-->

*  Magento now renders the **<** and **>** symbols correctly in storefront catalog search strings. Previously, Magento rendered these characters as **&lt;** and **&gt;**.

<!--- MC-23113-->
<!--- MC-30183-->

### Shipping

<!--- MC-29279-->

*  Magento now prints shipping labels as a `.pdf` file as expected when you select **Print Shipping Label** from the Action drop-down list from an order in the order archive list.  Previously, Magento displayed a 404 error.

<!--- MC-23093-->

*  The incorrect initial option values for the DHL shipping method have been corrected, and this shipping method now works as expected when enabled. Previously, when DHL shipping was enabled, Magento displayed this error in the shipping section of the checkout workflow: `This shipping method is currently unavailable. If you would like to ship using this shipping method, please contact us`.

<!--- MC-28956-->

*  The multishipping page of the checkout workflow now correctly displays discounted shipping prices when discounts are determined by a Cart Price rule.

<!--- MC-30239-->

*  Magento now correctly calculates refunds for orders that include discounts. Previously, Magento incorrectly calculated the shipping tax and shipping discount, and the refunded total did not match the total paid.

<!--- ENGCOM-6183-->

*  Support for Columbia regions has been added, and these regions are now available from the shipping and billing country dropdown menus in the checkout workflow.  *Fix submitted by magudelo62 in pull request [25313](https://github.com/magento/magento2/pull/25313)*. [GitHub-25312](https://github.com/magento/magento2/issues/25312)

<!--- MC-29180-->

*  The drop-down list that is available for selecting shipping methods during the process of creating  a Cart  Price Rule now contains only valid values. Previously, this dropdown list contained empty or extra values.

### Sitemap

<!--- MC-21860-->

*  The partial sitemaps that are  listed in the sitemap index now have the correct URL (for example, `storeurl/pub/sitemap-1-1.xml`). Previously, these URLs included the folder structure between the Magento user home folder and the installation folder. [GitHub-24946](https://github.com/magento/magento2/issues/24946)

<!--- MC-29287-->

### Store

<!--- MC-23000-->

*  Customer sessions now persist as expected  when a customer logs into one store, adds products to the shopping cart, then switches to a new store in a multi-store deployment. Previously,  when the customer navigated to the second store, Magento logged out the customer and emptied the shopping cart.

<!--- MC-22567-->

*  Magento now redirects you to the correct product details page when you switch store view while on a product page in a multistore deployment. Previously, when you switched store view, Magento redirected you to a 404 page instead of the correct product page.

### Swagger

<!--- ENGCOM-6307-->

*  Magento no longer displays an informative console error when you try to navigate to the Swagger index page. Magento previously threw an error as a result of a previous fix in which the `requirejs-config` block was removed from the layout file of the Swagger index page. *Fix submitted by Duckↄhip in pull request [25682](https://github.com/magento/magento2/pull/25682)*. [GitHub-25680](https://github.com/magento/magento2/issues/25680)

### Swatches

<!--- MC-30269-->

*  Merchants can now successfully add color swatch attributes to products using the **Visual Swatch** option on **Stores** >  **Attributes**  >  **Product**  > **New Attribute**. Previously, a JavaScript error was triggered when you tried to open the newly created swatch attribute.

### Tax

<!--- MC-22931-->

*  Magento now performs VAT calculations correctly in all stores in a multistore deployment. Previously, Magento displayed an incorrect shipping rate in the `default` store but the correct one in the `en_gb` store.

<!--- MC-29099-->

*  Magento now updates shipping rates and prices as expected when a customer changes the destination country for an order during checkout.

<!--- MC-30500-->

### Testing

<!--- MC-22926-->

<!--- MC-23067-->

*  Infrastructure static tests now check for missing return statements in class methods.

### Theme

<!--- MC-30476-->

*  Product names are no longer translated if their text matches a global key.

<!--- MC-29750-->

### Translation and locales

<!--- MC-23224-->

*  Special price range settings (from/to dates) now work correctly for administrator accounts using a Dutch locale.

### UI

<!--- MC-29747-->

*  Radio buttons for shipping methods are now enabled as expected in checkout workflow.

<!--- MC-23211-->

*  The product edit page now loads successfully when the default attribute set for the page contains a dropdown attribute with the select label.

<!--- ENGCOM-6222-->

*  You can now scroll as expected to the top of the Admin Import page. *Fix submitted by Torben Höhn in pull request [25419](https://github.com/magento/magento2/pull/25419)*. [GitHub-6682](https://github.com/magento/magento2/issues/6682)

<!--- ENGCOM-6261-->

*  Watermark size now remains consistent with the image to which it's been applied when you resize the image. *Fix submitted by KrielkipNL in pull request [25528](https://github.com/magento/magento2/pull/25528)*. [GitHub-23515](https://github.com/magento/magento2/issues/23515), [GitHub-25528](https://github.com/magento/magento2/issues/25528)

<!--- ENGCOM-6223-->

*  Magento now correctly renders the **Read more ...** page element that is associated with a product that has an `additionalOption` value that exceeds 55 characters on the storefront shipment and invoice pages. Previously, these option values were escaped. *Fix submitted by Torben Höhn in pull request [25418](https://github.com/magento/magento2/pull/25418)*. [GitHub-25050](https://github.com/magento/magento2/issues/25050)

<!--- ENGCOM-6233-->

*  Corrected position of the wishlist item delete button on the category page. *Fix submitted by Paweł Tylek in pull request [25380](https://github.com/magento/magento2/pull/25380)*. [GitHub-21190](https://github.com/magento/magento2/issues/21190)

<!--- ENGCOM-6282-->

*  Magento now displays a **N/A** where needed  on the product compare list page. Previously, the field for an attribute that was not relevant for the seclude product was left blank. *Fix submitted by Paweł Tylek in pull request [25585](https://github.com/magento/magento2/pull/25585)*. [GitHub-25008](https://github.com/magento/magento2/issues/25008)

<!--- ENGCOM-6295-->

*  Magento now displays the dropdown icon as expected when you click **Load template** during the creation of a new email template from the Admin. *Fix submitted by Adarsh Manickam in pull request [25629](https://github.com/magento/magento2/pull/25629)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6298-->

*  Magento now retains the correct aspect ration when a store icon is resized for mobile display. *Fix submitted by Fabricio Sobral in pull request [25623](https://github.com/magento/magento2/pull/25623)*. [GitHub-25043](https://github.com/magento/magento2/issues/25043)

<!--- ENGCOM-6291-->

*  The focus function on the fourth level of a multi-level navigation menu now works consistently. *Fix submitted by Fabricio Sobral in pull request [25613](https://github.com/magento/magento2/pull/25613)*. [GitHub-25589](https://github.com/magento/magento2/issues/25589)

<!--- ENGCOM-6304-->

*  Magento now displays the correct error message  in the confirmation popup dialog when you delete a customer group. *Fix submitted by Eden Duong in pull request [25662](https://github.com/magento/magento2/pull/25662)*. [GitHub-25661](https://github.com/magento/magento2/issues/25661)

<!--- ENGCOM-6268-->

*  Accordion widgets placed in tab widgets now work as intended. Previously, when you clicked on the accordion widget, the tab closed. *Fix submitted by Paweł Tylek in pull request [25515](https://github.com/magento/magento2/pull/25515)*. [GitHub-22819](https://github.com/magento/magento2/issues/22819)

<!--- ENGCOM-6321-->

*  Corrected the CSS-defined color for the **Minimum Quantity allowed in Shopping Cart** field of the **Admin** > **Store** > **Configuration** > **Inventory** page.  *Fix submitted by Eden Duong in pull request [25648](https://github.com/magento/magento2/pull/25648)*. [GitHub-25647](https://github.com/magento/magento2/issues/25647)

<!--- ENGCOM-6371-->

*  Logo images that are being uploaded into the Admin are now displayed with its native dimensions if no width and height parameters are explicitly set.  Previously, an administrator could set the `logo_img_width` and `logo_img_height` block arguments in the layout file for the logo block, which potentially distorted the display of the logo. *Fix submitted by Krzysztof Daniel in pull request [25789](https://github.com/magento/magento2/pull/25789)*. [GitHub-25042](https://github.com/magento/magento2/issues/25042)

<!--- MC-23219-->

### URL rewrites

<!--- MC-30917-->

*  Customers who change language on a CMS page can now successfully navigate to the store view they’ve selected. Previously, when a customer.

<!--- MC-22606-->

### Web API framework

<!--- MC-29838-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/orders` calls.

<!--- MC-30574-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/products` calls.

<!--- MC-15101-->

*  Child products of a configurable product can now be successfully disabled through the API.

### Wishlist

<!--- MC-29981-->

*  A wishlist now works as expected when it is enabled at the store-view level and disabled at the global level. Previously, when these settings were in place, adding a product to a wishlist resulted ion a 404 error.

<!--- MC-30137-->

*  Magento now correctly saves and displays a new name for a wishlist when you rename a wishlist in deployments that contain multiple wishlists. Previously, Magento continued to display the former wishlist name.

### WYSIWYG

<!--- ENGCOM-6310-->

*  The WYSIWYG editor now works as expected on Internet Explorer 11.x. Previously, when you edited a field using the editor,  selected text was deselected when you clicked **Link**.  *Fix submitted by Mateusz Krzeszowiak in pull request [25693](https://github.com/magento/magento2/pull/25693)*. [GitHub-13209](https://github.com/magento/magento2/issues/13209)

<!--- ENGCOM-6272-->

*  Magento can now successfully display two or more WYSIWYG editors on a catalog product edit page. Previously, only one working editor was displayed. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-18548](https://github.com/magento/magento2/issues/18548)

<!--- ENGCOM-6272-->

*  The WYSIWYG editor no longer hangs indefinitely when you try to upload an image from the Admin. Previously, the image upload popup window hung until you refreshed the page. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-23966](https://github.com/magento/magento2/issues/23966)

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-5-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-5-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.3.4 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
