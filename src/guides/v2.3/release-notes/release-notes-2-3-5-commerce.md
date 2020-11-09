---
group: release-notes
title: Magento Commerce 2.3.5 Release Notes
---

Magento Commerce 2.3.5 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 180 functional fixes to the core product and over 25 security enhancements. It includes the resolution of over 46 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.5 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

During pre-release, we discovered issues that forced us to create new packages. To expedite delivery, we chose to  change the name of the full-release patch from 2.3.5 to 2.3.5-p1. The 2.3.5-p1 package contains all new features and fixes. We also changed the name of the security-only patch for this quarter from 2.3.4-p1 to 2.3.4-p2. Future releases will follow the typical package naming conventions for full-release  and security packages. See [Wishlist error during upgrade to Magento versions 2.3.4-p1 or 2.3.5](https://support.magento.com/hc/en-us/articles/360042621771).

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p1) provides. Patch 2.3.4.2 (Composer package 2.3.4-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.4. All hot fixes that were applied to the 2.3.4 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

With this quarterly release, we have changed how we describe these security issues. Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Upgrade to Magento 2.3.5-p1 or 2.3.4-p2 for merchants running pre-release versions of Magento 2.3.5

Merchants upgrading to pre-release versions of Magento 2.3.5 and security-only patch 2.3.4-p1 and whose deployments contain bundle products may encounter the following error during upgrade:

`Module ‘Magento_Wishlist’:
Unable to apply data patch Magento\Wishlist\Setup\Patch\Data\CleanUpData for module Magento_Wishlist. Original exception message: Unable to unserialize value. Error: Syntax error`

Merchants who encounter this error after  installing Magento 2.3.5 should upgrade to Magento 2.3.5-p1. Merchants who encounter this error after  installing Magento 2.3.4-p1 should upgrade to Magento 2.3.4-p2. See [Wishlist error during upgrade to Magento versions 2.3.4-p1 or 2.3.5](https://support.magento.com/hc/en-us/articles/360042621771).<!--- MC-33513 33514-->

## Download and run the updated Database Cleanup script

This hotfix addresses an issue with a previous database clean-up script that was released in March 2020. That database cleanup script has been updated to clear pre-existing failed login data in additional database tables. **We recommend that all merchants run DB_CLEANUP_SCRIPT_v2 script to clear pre-existing failed login data in additional tables as soon as possible**. See the [Remove failed login attempts from the database](https://support.magento.com/hc/en-us/articles/360040209352) support article.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 25 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.5) have been ported to 1.14.4.5 and 1.9.4.5, as appropriate.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

#### Security enhancements and fixes to core code

This release includes over 25 security fixes and platform security improvements. Additional security enhancements include:

*  **Implementation of Content Security Policies (CSP)**. This release includes a set of powerful new security tools for Magento installations. Content Security Policies (CSP) provide additional layers of defense by helping to detect and mitigate Cross-Site Scripting (XSS) and related data injection attacks. This common attack vector works by injecting malicious content that falsely claims to originate from the website. After the malicious content is loaded and executed, it can initiate the unauthorized transfer of data. See [Content Security Policy Overview](https://devdocs.magento.com/security/content-security-policy-overview.html). For technical information, see [Content Security Policies](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/security/content-security-policies.html) in the *PHP Developer Guide*.

*  **Removal of session_id from URLs**. Exposure of `session-id` values in URLs creates a potential security vulnerability in the form of session fixation. We are removing code from the classes and methods that add or read session_id from URLs.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance:

*  **Support for Elasticsearch 7.x**. Elasticsearch 7.x is now the supported catalog search engine for both Magento Commerce and Magento Open Source. With this release, Magento 2.3.x supports only Elasticsearch 6.x and 7.x.  Elasticsearch 2.x and 5.x are now deprecated for Magento 2.3.x and will be removed in Magento 2.4.0. <!--- MC-30796-->

*  **Deprecation of core integration of third-party payment methods**. With this release, the integrations of the Authorize.Net, eWay, CyberSource, and Worldpay payment methods are deprecated. These core features are no longer  supported and will be removed in the next minor release (2.4.0). Merchants should migrate to the official extensions that are available on the Magento Marketplace. See the [Deprecation of Magento core payment integrations](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Magento-core-payment-integrations/ba-p/426445) devblog post. <!--- MC-31168-->

*  **Deprecation of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on the Magento Marketplace. <!--- MC-31315-->

*  **Upgrade of Symfony Components** to the latest lifetime support version (4.4). (Symfony Components are a set of decoupled PHP libraries used by the Magento Framework.) <!--- MC-29549-->

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. Magento 2.3.5 contains the minimal number of changes to code and configuration that are required to support the use of the Laminas libraries. These changes are backward-compatible, and you can continue to use your current code. However, **we recommend that extension developers and system integrators begin migrating their extensions to use Laminas**. While this migration is not required for compatibility with this patch release, long-term solutions will require it.

   The `laminas/laminas-dependency-plugin` requires Composer 1.7.0 and higher. To see which version of Composer you are running, run `composer -–version`. Then, run `composer self-update` if you are on an older version of Composer. <!--- MC-15318-->

   See the [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251)  DevBlog post.

### Performance boosts

*  **Improvements to customer data section invalidation logic**. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active.  (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations.) See [Private content]({{page.baseurl}}/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

*  **Multiple optimizations to Redis performance**. The enhancements minimize the number of queries to Redis that are performed on each Magento request. These optimizations include:

   *  Decrease in the size of network data transfers between Redis and Magento
   *  Reduction in Redis’ consumption of CPU cycles by improving the adapter’s ability to automatically determine what needs to be loaded
   *  Reduction in race conditions on Redis write operations

See [Use Redis for the Magento page and default cache]({{page.baseurl}}/config-guide/redis/redis-pg-cache.html) and [Configure caching]({{page.baseurl}}/config-guide/cache.html).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Catalog, Sales, PayPal, Elasticsearch, Import, CMS, and B2B.

*  **The PayPal Pro payment method now works as expected in the Chrome 80 browser**. This payment method previously invoked a Magento callback endpoint that needed access to the customer’s session — access that the new default Chrome SameSite cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

*  **A PHPStan code analysis check has been integrated into Magento static builds**. This tool performs sophisticated static code analysis and identifies additional issues that are currently not detected by PHP CodeSniffer and PHP Mess Detector. See [Magento Testing Guide]({{page.baseurl}}/test/testing.html).

### Page Builder

Page Builder enhancements for this release include:

*  **Templates**. Page Builder now has templates that can be created from existing content and applied to new content areas. Page Builder templates save both content and layouts of existing pages, blocks, dynamic blocks, product attributes, and category descriptions. For example, you can save an existing Page Builder CMS page as a template and then apply that template (with all its content and layouts) to quickly create new CMS Pages for your site. See [Templates](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-templates.html).

*  **Video Backgrounds for Rows, Banners, and Sliders**. Page Builder Rows, Banners, and Sliders now have the option to use videos for their backgrounds. See [Rows](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-layout-row.html), [Banners](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-media-banner.html), [Sliders](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-media-slider.html).

*  **Full Height Rows, Banners, and Sliders**. Page Builder Rows, Banners, and Sliders now have the option to set their heights to the full-height of the page using a number with any CSS unit (px, %, vh, em) or a calculation between units (100vh - 237px). See [Rows](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-layout-row.html), [Banners](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-media-banner.html), [Sliders](https://docs.magento.com/m2/ee/user_guide/cms/page-builder-media-slider.html).

*  **Content type upgrade library**. We can now introduce new versions of Page Builder content types without introducing backward-incompatible issues with previous versions. Prior to this release, significant changes to content type configurations would create display and data-loss issues with previously saved Page Builder content types. Our new upgrade library eliminates these issues. The library upgrades previous versions of content types saved to the database to match the configuration changes of the new versions. See [How to upgrade content types](https://devdocs.magento.com/page-builder/docs/how-to/how-to-use-upgrade-library.html).

### Inventory Management

Inventory Management enhancements for this release include:

*  New extension point for `SourceDataProvider` and `StockDataProvider`
*  Ability to view allocated inventory sources from the Orders list

See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent Inventory Management bug fixes.

### GraphQL

With this release, you can now use `products` and `categoryList` queries to retrieve information about products and categories that have been added to a staged campaign. See [Using queries]({{page.baseurl}}/graphql/queries/index.html#staging) in the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details.

See [Release notes]({{page.baseurl}}/graphql/release-notes.html) for a detailed discussion of recent GraphQL bug fixes.

### PWA Studio

PWA Studio 6.0.0 contains both new features and improvements to existing features:

*  **Launch of the PWA extensibility framework**.  This framework gives developers the ability to create an extensibility API for their storefront or write plugins that can tap into those API and modify storefront logic.

*  **Caching and data fetching improvements**. This release contains improved caching logic and other data fetching optimizations in the Peregrine and Venia UI component libraries. These components have been refactored to take advantage of Apollo cache features to reduce overfetching or prevent the storage of sensitive data.

*  **Shopping cart components** that can be used for a full-page shopping cart experience

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### dotdigital

This release includes:

*  **Integration of Engagement cloud and Magento B2B**. A new B2B integration module integrates Engagement cloud and the Magento B2B module to enable Magento B2B merchants to leverage their B2B commerce data and better engage with their prospective and existing customers. This will include:
   *  Company data sync (customer type, company, company status)
   *  Sync of shared catalog data. Syncing additional product catalog data (custom products and product attributes) to dotdigital. Merchants can turn additional product data into marketing campaigns or use it to make recommendations
   *  Sync of quote data

*  **Improved importer performance** and coupon code re-send.

### Google Shopping ads Channel

The Google Shopping ads Channel bundled extension has reached end-of-life with this release (2.3.5 and 2.3.4-p1). It is no longer supported. Alternative extensions are available on the Magento Marketplace.

### B2B

This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Product Recommendations

Magento’s Product Recommendations is a new marketing tool that merchants can use to increase conversions, boost revenue, and stimulate shopper engagement. It is powered by Adobe Sensei, which uses artificial intelligence and machine-learning algorithms to perform a deep analysis of aggregated shopper data. This data, when combined with your Magento catalog, results in highly engaging, relevant, and personalized experiences for the shopper. See [Product Recommendations](https://devdocs.magento.com/recommendations/product-recs.html).

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

With this release, the Klarna extension is now available in Australia and New Zealand. A new Oceania endpoint has been added to the existing API. This release also contains UX enhancements and minor bug fixes.

#### Vertex

This release of Vertex includes the following new feature and enhancements:

*  **Address Validation**. Addresses that are created or edited in the Customer Account are now validated when the module is enabled.

*  **Admin Configuration**.  Flexible Field dropdown options are now sorted alphabetically by the current Admin user's locale.

*  **Virtual Products**. Vertex now uses an order's billing address to calculate taxes on virtual products. Shipping-related flexible fields are no longer completed for virtual products.

*  **Restorable configuration settings**. The **Use Vertex for orders shipping to**, **Summarize Tax by**, and **Global Delivery Term** now provide an option to be restored to their default setting.

*  **Port in WSDL**. The WSDL URL now supports ports and basic authentication.

*  **Best Practices in Code**. Models intended to assist Observers have been relocated into the Model namespace to clean up the Observer namespace.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.5 core code.

### Installation, upgrade, deployment

<!--- ENGCOM-6339-->

*  The link accessed from **Admin** > **Stores** > **Settings**  > **Configuration** > **General** > **Advanced Reporting** now opens in a new tab as expected.  *Fix submitted by Nagamaiah K in pull request [25760](https://github.com/magento/magento2/pull/25760)*. [GitHub-25757](https://github.com/magento/magento2/issues/25757)

<!--- MC-19037-->

*  You can now successfully remove a website along with the website’s scope-specific configuration settings in `app/etc/config.php` as expected. Previously, when you tried to remove the website, the operation failed, and Magento displayed this error: `The website with code xxx that was requested wasn't found. Verify the website and try again`. Additionally, Magento displayed this error on the storefront:  `Config files have changed. Run app:config:import or setup:upgrade command to synchronize configuration`. [GitHub-24061](https://github.com/magento/magento2/issues/24061)

<!--- MC-29795-->

*  Configuration settings that are disabled in `index.php` are no longer editable from the Admin.

### Adobe stock integration

<!--- ENGCOM-6323-->

*  Image previews now close as expected when you navigate to a new page of search returns when searching Adobe Stock images. *Fix submitted by Serhiy Zhovnir in pull request [25719](https://github.com/magento/magento2/pull/25719)*. [GitHub-723](https://github.com/magento/magento2/issues/723)

<!--- ENGCOM-6285-->

*  Image details are now hidden when you click on the image in the search result list. *Fix submitted by Nazar Klovanych in pull request [25566](https://github.com/magento/magento2/pull/25566)*. [GitHub-690](https://github.com/magento/magento2/issues/690)

<!--- ENGCOM-6331-->

*  You can now use keyboard arrow keys to navigate to the next image in the preview. *Fix submitted by Adarsh Manickam in pull request [25611](https://github.com/magento/magento2/pull/25611)*. [GitHub-691](https://github.com/magento/magento2/issues/691)

<!--- ENGCOM-6272-->

*  The **Search Stock Images** button now remains active as expected after you have searched for and saved an image from the media gallery. Previously, this button was disabled after you used it to search for an image and saved it.  *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-622](https://github.com/magento/magento2/issues/622)

### Analytics

<!--- MC-31766-->

*  Analytic reports are now available after changing the store URL.

<!--- MC-31767-->

*  Data sync is now enabled as expected by default.

### Bundle products

<!--- MC-29938-->

*  Bundle product prices are now calculated correctly on product pages.

<!--- MC-23215-->

*  The performance of the `catalog_product_price` re-index operation for bundle products has been improved.

<!--- MC-22741-->

*  Magento now correctly displays required field asterisks for products with custom options in the Admin.

<!--- MC-29059-->

*  Clicking **Enter** in the **Shipping Price** field for Negotiable Quotes now correctly updates shipping price.

<!--- MC-22632-->

*  Magento now displays the same price for a bundle product in the mini cart and on the product page.

<!--- MC-29209-->

*  You can now add any number of bundle products to your shopping cart without error. Previously,  when you added a bundle product to your cart, then navigated to the  cart,  Magento displayed this error: `Please correct the quantity for some products`.

<!--- MC-29598-->

*  Administrators can no longer manually enter a tax class in the Admin for a bundle product when  the bundle product’s **Tax Class** and **Dynamic Price** settings are disabled for the default store view. Previously, when an administrator  unchecked the **Use Default Value**  option next to **Tax Class**, Magento enabled the option, permitting an administrator to enter another value and save the product.

### Cache

<!--- MC-23055-->

*  Frontend cookies are now set as expected when you enable **Use Secure URLs on Storefront** and  **Secure Base URL** is set to **https**.

### Cart and checkout

<!--- MC-31379-->

*  Magento now displays an informative error message when you try to add a product by clicking **Order by SKU** when the file for upload is corrupt. Previously, Magento displayed a blank page.

<!--- MC-19515-->

*  Cart Price Rules that are based on payment methods are now applied during the checkout workflow. [GitHub-24206](https://github.com/magento/magento2/issues/24206)

<!--- MC-23261-->

*  You can now disable zip code validation on the checkout workflow from the Admin as expected. Previously, Magento threw an error when a customer entered a zip code that did not meet specified values for zip codes even after validation was disabled by setting **Input Validation** to **none** from **Admin** > **Stores** > **Attributes** > **Customer address** > **Edit Zip/Postal Code**.

<!--- MC-30254-->

*  The order review page in the checkout workflow now loads successfully for an order being shipped to multiple addresses when Terms and Conditions with the **Applied Manually** setting is enabled. Previously, the Review page did not pass validation, and Magento displayed a 404 error.

### Catalog

<!--- MC-30775-->

*  Filtering on the Admin product grid website column now works as expected. Previously, filter results did not display the correct number of products, but consistently displayed the total number of products as 1.

<!--- MC-18470-->

*  Magento no longer throws an error during checkout when the **Synchronize with Backend** configuration setting is enabled. [GitHub-23833](https://github.com/magento/magento2/issues/23833)

<!--- MC-23193-->

*  Magento no longer throws an error when you change the name of a tiered product that is included in a scheduled update. Previously, when you tried to save the product with a new name, Magento displayed this error: `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '3-0-0-2.0000-0' for key 'UNQ_EBC6A54F44DFA66FA9024CAD97FED6C7', query was: INSERT INTO catalog_product_entity_tier_price (all_groups, customer_group_id, qty, value, website_id, percentage_value, row_id) VALUES (?, ?, ?, ?, ?, ?, ?)`

<!--- MC-30114-->

*  The Recently Viewed Products feature now works as expected in multistore deployments.

<!--- MC-30050-->

*  You can now successfully edit a configurable product with many variants (approximately 5,000) from the Admin. Previously, when you tried to edit a configurable product with many subproducts, Magento displayed this error: `Warning: DOMDocumentFragment::appendXML(): Entity: line 1: parser error : CData section too big found in /vendor/magento/framework/View/TemplateEngine/Xhtml/Template.php on line 60`

<!--- MC-30582-->

*  Sorting on attribute sets  on  **Admin** > **Catalog** > **Products** is now based on alphabetical order as expected.

<!--- MC-29022-->

*  Custom attribute values can now be saved as expected from the Admin.

<!--- MC-20259-->

*  Corrected an issue that caused the PUT `/V1/products/:sku/media/:entryId` call to create a new entry rather than replace the existing one.

<!--- MC-29651-->

*  Customizable options are now imported as expected when `row_id` is not equal to a product's `entity_id`. Previously, Magento did not import customizable options when `row_id` was not equal to a product’s `entity_id`, which resulted in certain products not being imported.

<!--- MC-30067-->

*  You can now assign a default watermark to a theme. Previously, after assigning the watermark, Magento threw a fatal error.

<!--- MC-29876-->

*  Magento now displays product images in the mini cart without distortion. Previously, Magento stretched the image in the mini cart to fill the entire width and height of the image container.

<!--- MC-29652-->

*  The Recently Viewed Products feature now shows products associated only with the current store view in multi-store deployments when **Stores** > **Configurations** > **Catalog** > **Recently Viewed/Compared Products** > **Show for Current**  is set to **store view**. Previously, Magento displayed recently viewed products from all websites, no matter which website the product was assigned to.

<!--- MC-30213-->

*  The product compare feature now works as expected. It displays only products in the current user’s compare list.

<!--- MC-21948-->

*  Problems with the partial re-indexing of large categories have been resolved. Previously, due to problems with this process, products were randomly excluded from categories on the storefront.

<!--- MC-29865-->

*  The `getBasePrice` function now returns a float value  as expected rather than a string.

<!--- MC-29519-->

*  Images are now saved in `pub/media/catalog/category` as expected when you save category images. Previously, Magento saved these images in `pub/media/catalog/tmp/category`.

<!--- MC-31801-->

*  Administrators with restricted permissions to Catalog can now create a downloadable product. Previously, administrators could not create a downloadable product, and Magento threw an error.

<!--- MC-30974-->

*  You can now add a configurable product to the cart from the Cross-Sells tab. When you select a product and click **Add to Cart** from this tab, you are now taken to the product’s details page, where you can select specific product options. Previously, Magento redirected you to  a 404 error page.

<!--- MC-30261-->

*  You can now add a child product of a grouped product to your cart when one of the grouped product’s other child products is out-of-stock. Previously, when one child product was out-of-stock, you could not add any other child products to the cart.

### CatalogInventory

<!--- MC-21821-->

*  Magento now displays appropriate feedback when you unsuccessfully attempt to update and save a product. Previously, Magento did not display an error message or take any action when you  tried to save a product after updating it. [GitHub-22274](https://github.com/magento/magento2/issues/22274)

### Catalog Price Rule

<!--- MC-29144-->

*  The mini cart and Admin shopping cart (**Admin** > **Customers** > **Manage Shopping Cart**) now display  correct product prices when a Catalog Price Rule is applied. Previously, the storefront shopping cart displayed the correct product price, but the mini cart and Admin shopping cart displayed the original product price.

<!--- MC-29902-->

*  Product prices on the storefront now accurately reflect the application of a scheduled Catalog Price Rule update. Previously, prices did not reflect the scheduled cart price rule until you manually re-indexed (`php bin/magento indexer:reindex catalogrule_rule`).

### Catalog widget

<!--- MC-30249-->

*  Magento now displays all children of a selected parent category as expected. Previously, if you selected a parent category that is an anchor, but which did not have assigned products by itself, Magento did not display all nested products.

<!--- MC-29166-->

*  The CatalogWidget products list now works as expected with anchor categories, and products from anchor categories are now matched and displayed. Previously, when you selected a parent category that was an anchor, but that did not contain assigned products, products were not visible in the widget.

<!--- MC-23252-->

### Cleanup and simple code refactoring

<!--- ENGCOM-6348-->

*  Corrected misalignment of the **View Details** label for configurable products in the order summary of the checkout workflow. *Fix submitted by Max Fickers in pull request [25785](https://github.com/magento/magento2/pull/25785)*. [GitHub-20463](https://github.com/magento/magento2/issues/20463)

<!--- ENGCOM-6336-->

*  Added a `margin-bottom` value to the static CMS block widget in the Checkout/Cart Summary of the checkout workflow in  the Luma and Blank themes. *Fix submitted by Fabricio Sobral in pull request [25729](https://github.com/magento/magento2/pull/25729)*. [GitHub-25703](https://github.com/magento/magento2/issues/25703)

<!--- ENGCOM-6290-->

*  Added a margin between the checkbox and icon when choosing a category during the process of  assigning a condition to a new Cart Price Rule.  *Fix submitted by Eden Duong in pull request [25597](https://github.com/magento/magento2/pull/25597)*. [GitHub-25596](https://github.com/magento/magento2/issues/25596)

<!--- ENGCOM-6249-->

*  Rating stars no longer overlay the product over which your mouse hovers on the category page. *Fix submitted by Kajal Solanki in pull request [25524](https://github.com/magento/magento2/pull/25524)*. [GitHub-25517](https://github.com/magento/magento2/issues/25517)

<!--- ENGCOM-6180-->

*  Corrected misalignment of the calendar icon inside the textbox on the Add Design Change page. *Fix submitted by magudelo62 in pull request [25309](https://github.com/magento/magento2/pull/25309)*. [GitHub-20379](https://github.com/magento/magento2/issues/20379)

<!--- ENGCOM-6345-->

*  Deleted unused variable (`time_taken`) from the `Magento/Catalog/view/frontend/templates/product/listing.phtml` template. *Fix submitted by andrew-chornij in pull request [25770](https://github.com/magento/magento2/pull/25770)*. [GitHub-25715](https://github.com/magento/magento2/issues/25715)

### CMS content

<!--- MC-30093-->

*  Select from Gallery image thumbnails are now cached as expected. Previously, these images were resized on the fly.

<!--- MC-22927-->

*  Magento now loads blocks that are associated with the website that a restricted user has access to when the user navigates to  **Content** >  **Blocks**.

<!--- MC-30853-->

*  Magento now lets you create CMS blocks with identical names if the blocks are assigned to different store views.

### Configurable products

<!--- ENGCOM-6349-->

*  Added validation logic to the **Create new value** input field of the configurable product creation workflow. Previously, you could create an attribute option value that contained only a space. *Fix submitted by Torben Höhn in pull request [25421](https://github.com/magento/magento2/pull/25421)*. [GitHub-21504](https://github.com/magento/magento2/issues/21504)

<!--- MC-22732-->

*  Magento now displays all attributes of a configurable product. Previously, when the product had two or more attributes, not all attributes were displayed.

<!--- MC-18057-->

*  Catalog Products List widgets can now process conditions that include product `test_date` attributes.

### Cron

<!--- ENGCOM-6253-->

*  `bin/magento cron:run -v` no longer fails when the database name exceeds 64 characters but instead creates a shorter name. *Fix submitted by Vasil Pashovski in pull request [25472](https://github.com/magento/magento2/pull/25472)*. [GitHub-22240](https://github.com/magento/magento2/issues/22240)

<!--- MC-22819-->

*  We’ve improved the reliability of background `cron` execution. We now use the Magento Lock Framework to lock `cron` jobs. Previously, Magento used job status in the `cron_schedule` table. As a result, `cron:run` execution no longer causes an error on the application level.

### Custom customer attributes

<!--- MC-30689-->

*  Magento now displays custom customer address attribute values as expected in the address section of the checkout workflow. Previously, Magento displayed the custom customer address attribute code instead of the value, and a JavaScript error was triggered.

### Customer

<!--- MC-17259-->

*  You can now save a **Gender** field with a blank value when directly editing customer information from the Customer list. Previously, when you saved this value, Magento displayed a success message, but did not save it. [GitHub-23128](https://github.com/magento/magento2/issues/23128)

<!--- MC-29789-->

*  Magento now uses a new PHPSession for each change of password.

<!--- MC-21203-->

*  The steps involved in `x-magento-init` initialization now happen in the correct order: RequireJS loads `section-config.js`, and `section-config.js` constructs and initiates itself as required. Previously, RequireJS loaded `section-config.js`, but the internal data `section-config` required for functioning did not load, and `section-config.js` threw an error: `Uncaught TypeError: Cannot read property '*' of undefined`. [GitHub-17125](https://github.com/magento/magento2/issues/17125)

<!--- MC-29722-->

*  Magento now honors a customer’s default shipping address. Previously, Magento did not honor the default billing and default shipping addresses according to  the settings, and the **Same As Billing Address** setting was not enabled automatically.

<!--- MC-30576-->

*  You can now successfully create a customer and associate it with a particular website using the **Associate to Website**  dropdown menu  on **Customers** > **All Customers** >  **Add new Customer**. Previously, when you tried to associate a new customer with the non-default website in a multi-site deployment, Magento displayed this error: `The store view is not in the associated website`.

### Customer segment

<!--- MC-19235-->

*  Magento now correctly applies customer segment cart price rules in a multi-website deployment when an administrator creates an order from the Admin and adds products to the cart from different websites.

<!--- MC-29429-->

*  Magento no longer removes your customer account from a customer segment when you log in as a user that is assigned to the customer segment when the segment includes a condition for past orders. Previously, you had to click **Refresh Segment Data** after logging in before Magento  displayed your account in the Matched Customers list.

<!--- MC-30443-->

*  Customer segments now work as expected  when segment conditions  include the total number of orders.

### Dynamic block (formerly banner)

<!--- MC-18280-->

*  Dynamic blocks now work with customer segments as expected. Magento no longer displays a dynamic block when the condition that should trigger it is not fulfilled. Previously, Magento displayed a dynamic block for users logged in as a guest when the shopping cart was empty.

### EAV

<!--- MC-30487-->

*  The Update Attribute action now correctly updates the timestamp of a product’s `updated_at column` from `catalog_product_entity`  when you update the product from the Admin edit product page.

<!--- MC-29918-->

*  Magento now respects store-specific settings that determine whether the telephone number field of the checkout workflow is required in a multi-site deployment.  Previously, in deployments where one store required this field in the checkout workflow and another store did not, customers who did not complete this field while checking out on the store that did not require it encountered this error:   `Please check the shipping address information. "telephone" is required. Enter and try again`.

### Email

<!--- MC-22163-->

*  Email templates (**Admin** > **Marketing** > **Communications** > **Email Templates**) can now be previewed from the Admin when JavaScript magnification is enabled.  Previously, when you tried to preview an email template, the Email Preview popup window was empty. [GitHub-25068](https://github.com/magento/magento2/issues/25068)

<!--- MC-21868-->

*  The order notification emails sent from Microsoft Outlook now contain content that is rendered as expected from the assigned email template. Previously, the notification email that Magento sent contained a blank body that included content as an ATT*-labeled attachment to the email. [GitHub-25076](https://github.com/magento/magento2/issues/25076)

### Frameworks

<!--- MC-15318 31567-->

*  Dependencies on Zend Framework have been migrated to the [Laminas project](https://getlaminas.org/about/foundation) to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated.

<!--- MC-20533-->

*  Editing products in the Admin no longer triggers Redis errors.

<!--- MC-29290-->

*  `php bin/magento cron:run` no longer processes items from the change log table multiple times. Previously, when you had more than 100000 new versions in the change log table,  actions could be called several times for the same `entity id`.

<!--- MC-30296-->

*  Watermark images no longer obscure the product image that they overlay. Previously, when the watermark image was larger than the product image it was applied to, the product image was not visible.

<!--- MC-30290-->

*  Non-cacheable blocks are no longer added to default layout handles. Adding non-cacheable blocks to default layout handlers renders all Magento pages non-cacheable. This results from the layout generation process:  During layout generation, Magento collects all available layout handles for a particular page and merges instructions from them into the page’s final layout structure. The default layout handle is used as a basic handle for every page. As a result,  layout updates that are declared for the default handler appear on every Magento page. [GitHub-9041](https://github.com/magento/magento2/issues/9041)

<!--- MC-30824-->

*  Setting `'persistent' => '1'` in `env.php` no longer throws an error when you run `setup:upgrade`.

<!--- MC-31708-->

*  Magento no longer downloads a `blank.html` page when an administrator clicks on a product while creating an order from the Admin.

<!--- MC-17563-->

*  The `RequireJS domReady!` plugin has been improved to prevent artificial delays when loading a storefront page. [GitHub-22909](https://github.com/magento/magento2/issues/22909)

### JavaScript framework

<!--- ENGCOM-6382-->

*  Added a check to confirm that a file belongs to the current base URL before setting the `.min.js` suffix. Previously, when you installed a CDN file using  `require-config.js`, and your store was in production mode, the JavaScript path was changed during compilation, and Magento displayed a 404 error.

<!--- ENGCOM-6288-->

*  JavaScript errors no longer occur on the shopping cart/mini cart page when the cart contains a configurable product. *Fix submitted by Ihor Sviziev in pull request [25606](https://github.com/magento/magento2/pull/25606)*. [GitHub-25601](https://github.com/magento/magento2/issues/25601)

<!--- MC-31170-->

*  Clicking the **Refund Offline** button in the create a credit memo workflow now generates a credit memo as expected. Previously, a JavaScript error disabled this button, and Magento did not create a credit memo.

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

*  The `.fotorama__thumb__arr` arrows adjacent to the thumbnail images on the product gallery now work as expected. *Fix submitted by Alexey Rakitin in pull request [25666](https://github.com/magento/magento2/pull/25666)*. [GitHub-25652](https://github.com/magento/magento2/issues/25652)

<!--- ENGCOM-6215-->

*  You can now accurately manipulate a zoomed image using your mouse. Previously, the magnified area was incorrectly offset. *Fix submitted by Mateusz Krzeszowiak in pull request [25358](https://github.com/magento/magento2/pull/25358)*. [GitHub-25027](https://github.com/magento/magento2/issues/25027)

<!--- ENGCOM-6203-->

*  LESS styling for the `Magento_Contact` and `Magento_Cms` modules has been moved to the correct `design` directory. This change brings these modules into alignment with the organization of other modules, none of which include any LESS styling. *Fix submitted by Paweł Tylek in pull request [25355](https://github.com/magento/magento2/pull/25355)*. [GitHub-25276](https://github.com/magento/magento2/issues/25276)*

<!--- MC-22911-->

*  Magento no longer displays an inaccurate count for all users when a restricted administrative user accesses **System** > **All Users** and role scope was set to custom.

<!--- MC-22972-->

*  Credit memos for orders with 100% discount (including shipping fees) now correctly include a 0 for the **Grand Total**. Previously,  Magento calculated a negative number for the **Grand Total**.

<!--- MC-29261-->

*  A store’s Admin URL no longer redirects to the storefront URL when these two URLs differ.

<!--- MC-23228-->

*  The graphical orders chart accessible from the Orders tab on the Admin now accurately reflects order quantity.

<!--- MC-30461-->

*  Product price change alert email now includes the correct product price. Previously, this email suggested a new product price of 0.

<!--- MC-29111-->

*  You can now save and duplicate all CMS pages. Previously, Magento threw this exception when you tried to duplicate certain pages: `Unique constraint violation found`.

<!--- MC-29994-->

*  Magento now redirects you to the home page of the appropriate store view when you change language on CMS pages in a multistore deployment. Previously, Magento displayed a 404 page when you changed language on certain CMS pages.

### Gift cards

<!--- MC-30797-->

*  The GET `V1/orders/:orderId` call returns gift card codes as expected.

<!--- MC-30365-->

*  An expired gift card becomes active as expected when you change its expiration date to a future date. Previously, the gift card remained expired.

### Gift wrapping

<!--- MC-29005-->

*  Invoices now include gift wrapping details including charges and other details.

<!--- MC-29784-->

*  Gift wrapping can now be added to the cart when it is enabled on the product level. Previously, you could add gift wrapping to a product on the storefront, but Magento would not include gift wrapping in the order summary.

<!--- MC-31283-->

*  Magento now  correctly calculates the cost of gift wrapping based on the number of products  for which you’ve ordered gift wrap. Previously, Magento included the cost of gift wrap for one product only in the order.

### Google Tag Manager

<!--- MC-30669-->

*  The missing `Magento_GoogleTagManager::checkout/set_checkout_option.phtml` template has been restored.

<!--- MC-29503-->

*  Merchants can now postpone sending data to Google Analytics until specified conditions are met.

<!--- MC-30741-->

*  Google Tag Manager tags are no longer triggered when a customer navigates to a new store without accepting the Google Tag Manager cookie.

### Import/export

<!--- MC-31470-->

*  Magento now successfully imports customer data  using the **Customer and Addresses (single file))** option when `cron` is enabled and the Customer Grid Indexer is set to **Update By Schedule**.  After `cron` executes, the imported customer information is available in the Admin as expected.  Previously, Magento imported the customer data, but did not update the customer grid with the newly imported customer records.

<!--- MC-29361-->

*  Magento now updates images as expected when you use the `hide_from_product_page` setting when importing products in deployments with multiple store views.

<!--- MC-30066-->

*  Magento now deletes temporary files from `<Magento_home>/var` as expected after product import has completed.

<!--- MC-21727-->

*  Magento now removes related, up-sell, and cross-sell products as expected in the import `.csv` file when you set the value of the **Empty attribute value constant** field to `_EMPTYVALUE_` for products in **System** > **Import**. Previously, cross-sell, up-sell, and related products were not removed from the import .csv file.

<!--- MC-29874-->

*  Magento now displays a more informative error message, and does not display a download link, when you try to delete a directory from the **System** > **Export** list. Previously, when you tried to delete a directory from this list, Magento continued to display a download link for files that could not be downloaded, and displayed an uninformative error message.

<!--- MC-29952-->

*  The CSV file used during import now contains the correct links for downloadable products and is now correctly formatted to support importing and updating downloadable products.

<!--- MC-29376 30356-->

*  The Stock Indexer is now triggered as expected after import and updates product status. Previously, the Stock Indexer did not index the changed product inventory data.

<!--- MC-29792-->

*  Images associated with configurable products are now properly uploaded during import and available for viewing as expected from the product edit page.

<!--- MC-30649-->

*  Magento now provides a message during product import that identifies which products in the imported CSV file have duplicated keys. Merchants can use this information to resolve conflicts. Previously, Magento displayed this error: `Notice: Undefined index: name in /var/www/html/ee233dev/app/code/Magento/CatalogImportExport/Model/Import/Product.php on line 2524`

<!--- MC-29009-->

*  Magento now successfully exports a `.csv` file when you set import behavior for Replace, select a previously exported `.csv` file, and click **Check data**. Previously, Magento displayed this error: `Data validation failed. Please fix the following errors and upload the file again." and "Following Error(s) has been occurred during importing process`.

<!--- ENGCOM-6213-->

*  You can now successfully import a product that does not have a `store_view_code` value. Previously, Magento displayed an error when you tried to import the product. *Fix submitted by Mahesh Singh in pull request [25080](https://github.com/magento/magento2/pull/25080)*. [GitHub-25069](https://github.com/magento/magento2/issues/25069)

<!--- MC-31089-->

*  The import of customer accounts has been refactored to improve import speed.

<!--- MC-31122-->

*  CSV files generated during product import now contain group titles for downloadable products as expected. Previously, unnecessary validation of `group_title` during import prevented the display of group titles for downloadable products.

<!--- MC-30321-->

*  You can now successfully import or update customers using the Customer and addresses single file option of the import workflow. Previously, when you selected this option, Magento did not import the customer data and displayed this error: `Invalid data for insert`.

<!--- MC-30438-->

*  Magento now successfully imports all custom options for a configurable product’s child products  when `store_view_code` is specified. This works whether you choose to import configurable products individually or collectively. Previously, Magento did not successfully import all custom options when the import file contained more than one item and `store_view_code` was specified.

<!--- MC-30285-->

*  Exported `.csv` files now reflect filter settings for including in-stock or out-of-stock products. Previously, Magento exported all products, no matter which stock setting you selected.

### Index

<!--- ENGCOM-6188-->

*  The partial indexer no longer incorrectly removes stock data when updating at least 1000 products. Previously, the indexer removed stock data, which resulted in in-stock products appearing out-of-stock. *Fix submitted by Pieter Hoste in pull request [25306](https://github.com/magento/magento2/pull/25306)*. [GitHub-12205](https://github.com/magento/magento2/issues/12205), [GitHub-15984](https://github.com/magento/magento2/issues/15984)

### Infrastructure

<!--- MC-30796-->

*  Elasticsearch 7.5 is now the supported catalog search engine for both Magento Commerce and Magento Open Source. With this release, Magento 2.3.x supports only Elasticsearch 6.x and 7.x. Elasticsearch 2.x and 5.x are now deprecated for Magento 2.3.x and will be removed in Magento 2.4.0.

<!--- MC-29549-->

*  Symfony Components have been upgraded to the latest lifetime support version (4.4). (Symfony Components are a set of decoupled PHP libraries used by the Magento Framework.)

<!--- ENGCOM-6240-->

*  Corrected the argument type of the email address constructor. *Fix submitted by Karyna Tsymbal in pull request [25485](https://github.com/magento/magento2/pull/25485)*. [GitHub-25434](https://github.com/magento/magento2/issues/25434)

<!--- ENGCOM-6347-->

*  Admin route names can now contain a hyphen in the URL. Previously, validators for the action menu did not accept hyphens. *Fix submitted by Diego Pires in pull request [25612](https://github.com/magento/magento2/pull/25612)*. [GitHub-25635](https://github.com/magento/magento2/issues/25635)

<!--- ENGCOM-6256-->

*  The condition of the shipping method title output in `Magento_Checkout/js/view/summary/shipping` has been corrected. *Fix submitted by Andrii Beziazychnyi in pull request [25530](https://github.com/magento/magento2/pull/25530)*. [GitHub-25529](https://github.com/magento/magento2/issues/25529)

### Inventory

<!--- MC-23216-->

*  You can now create an offline credit memo. Previously, when you tried to create one, Magento displayed this error: `The credit memo couldn't be saved`.

<!--- MC-30099-->

*  Product widgets with product filter set to **Attribute Set**  now work as expected on both the Admin and storefront. Previously, when the attribute filter was set, CMS pages on both the storefront and Admin did not work as expected when multiple Inventory sources were deployed.

<!--- MC-29177-->

*  Customers can no longer check out  when their order contains more products than are currently in stock.

### Layered navigation

<!--- MC-31720-->

*  Merchants can now create a product attribute of type `Decimal`. Previously, due an earlier bug fix, Magento did not display the product attribute type `Price`. [GitHub-26949](https://github.com/magento/magento2/issues/26949)

### Logging

<!--- MC-29230-->

*  Magento now logs sales shipment actions in the Admin Action log as expected.

<!--- MC-29312-->

*  Order status changes are now logged as expected under **System** > **Action Logs** > **Report**.

<!--- MC-29615-->

*  CMS page save actions are now logged in Admin Action Logs. Previously, only view actions were logged.

<!--- MC-30548-->

*  Save actions on CMS pages are now logged as expected in Admin action logs when **Select all actions to be logged** is enabled on the Admin Actions Logging tab (**Admin** > **Stores** > **Configuration** > **Advanced**).

### Newsletter

<!--- MC-23192-->

*  The preview template feature now works as expected. Previously, Magento displayed this error when you clicked **Preview Template** from the template edit page: `Request-URI Too Long The requested URL's length exceeds the capacity limit for this server`.

### Payment methods

<!--- MC-31168-->

*  The integration of third-party payment methods into the core Magento code has been deprecated. With this release, the integrations of the Authorize.Net, eWay, CyberSource, and Worldpay payment methods are deprecated. These core features are no longer supported and will be removed in the next minor release (2.4.0). Merchants should migrate to the official extensions that are available on the Magento Marketplace.

<!--- MC-30810-->

*  You can now successfully complete an order using the Payflow Link payment method. Previously, the Payflow Link payment method always rejected payment because the order status remained in the `Pending` payment state, even though the order status in the payment method logs was `Approved`.

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

*  The PayPal Pro payment method now works as expected in the Chrome 80 browser. This payment method previously invoked a Magento callback endpoint that needed access to the customer’s session — access that the new default Chrome SameSite cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

<!--- MC-31387-->

*  Magento now successfully processes orders placed with PayPal Express Checkout where the order’s shipping address specifies a country region that the customer has manually entered into the text field rather than selected from the drop-down menu on the Shipping page. Previously, Magento displayed this error on the order review page: `Error 500: NOTICE: PHP message: PHP Fatal error: Uncaught Error: Call to a member function getId() on null in httpdocs/vendor/magento/module-paypal/Model/Api/Nvp.php:1527`. [GitHub-26698](https://github.com/magento/magento2/issues/26698)

<!--- MC-30497-->

*  Magento now displays an informative error message each time a customer clicks **Pay with PayPal** after entering an invalid shipping address in the checkout workflow. Previously, Magento displayed an error message only when the customer first clicked the button, not for subsequent clicks.

<!--- MC-30550-->

*  Magento no longer changes an order’s status to **processing** in the Payment Review section of the checkout workflow when a payment with PayPal fails.

<!--- MC-29919-->

*  Magento now saves the information a customer enters in the default billing and shipping fields during checkout when the transaction is initially declined due to an invalid credit card but later completed successfully. Previously, although Magento created the order when the customer entered valid payment information, it did not update the default billing or shipping addresses in the My Account section of the checkout workflow.

### Performance

*  Optimizations to Redis performance minimize the number of queries to Redis that are performed on each Magento request. These optimizations include:

   *  Decrease in size of network data transfers between Redis and Magento
   *  Reduction in Redis’ consumption of CPU cycles by improving the adapter’s ability to automatically determine what needs to be loaded
   *  Reduction in race conditions on Redis write operations

<!--- MC-30786-->

*  Customer data section invalidation logic has been improved. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active.  (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations). See [Private content]({{page.baseurl}}/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

<!--- MC-19646-->

*  The performance of the Catalog Product Rule Indexer has been improved.

### Return Merchandise Authorizations (RMA)

<!--- MC-30068-->

*  Tracking links included in storefront order returns now work as expected. Previously, when a customer clicked the shipment tracking link on the order return page, Magento displayed this error: `PHP Fatal error: Uncaught Error: Call to a member function getTitle() on null in /app/z7kvt3uys6daq/var/view_preprocessed/pub/static/vendor/magento/module-shipping/view/frontend/templates/tracking/details.phtml:1`.

<!--- MC-30214-->

*  The Returns tab is now present as expected after you create an order return from the Admin.

<!--- MC-21729-->

*  Magento no longer displays an error when you successfully create an order and RMA from the storefront. Previously, Magento created the RMA as expected, but also displayed this error: `We can't create a return right now. Please try again later`.

<!--- MC-22995-->

*  Setting **Enable RMA on Storefront** to **Yes** (**Admin** > **Enable RMA in Stores** > **Configuration** > **Sales** > **Sales** > **RMA Settings** ) now works as expected. Previously, returns were not preselected no matter how return-related settings were configured in the Admin.

<!--- MC-22754-->

*  Magento now sends RMA processing emails to customers from the store from which the purchase was made in a multi-store deployment. Previously, Magento sent these emails from the default store.

### Reviews

<!--- MC-29327-->

*  Magento now disables the **Submit Review** button after the user clicks the button once. Previously, Magento did not disable this button after the first click and created multiple reviews when the user clicked the **Submit Review** button multiple times.

<!--- MC-31271-->

*  The **Admin** > **Reports** > **Reviews** > **By Products** filter list now displays results as expected. Previously, when you tried to filter this list, Magento did not display any results.

### Rewards

<!--- MC-31371-->

*  Magento now refunds reward points as expected when an order is returned to a store running in a multi-store environment where different reward point rates are set for each store. Previously, Magento did not refund points as expected for a returned order that was purchased using reward points.

### Sales

<!--- MC-30116-->

*  Order queries (`SalesOrderIndexGridAsyncInsertCron`) have been refactored to reduce the size of the dataset returned and the frequency of the queries.

<!--- MC-23029-->

*  The **State/Province** field of the edit order page is now of type `Dropdown`.  Previously, in deployments that contained two websites where the main website has country restrictions, the **State** field had an input type of `Text`, not `Dropdown`. This occurred  when you  placed an order on the second website, and allowed you to enter an incorrect value for **State/Province**.

*  The **State/Province** field of the Billing Address section of the checkout workflow is now of type `Dropdown` in multi-site deployments where the default store has country restrictions. Previously, the **State/Province** field was of type `Text`, which permitted you to enter an incorrect state.

<!--- MC-29851-->

*  You can now successfully add a product in quantities exceeding five to an order from the Admin. Previously, when you tried to add a product in quantities exceeding five,  Magento displayed this error: `The requested qty is not available`.

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

*  Selecting all products from the products list page using Elasticsearch now displays all products in the search results as expected. Previously, Magento displayed no search results when this search was run on a staging server.

<!--- MC-29530-->

*  Elasticsearch now works as expected when you sort a product list that contains bundle products by alphabetized product names.

<!--- MC-17544-->

*  Magento now renders the **<** and **>** symbols correctly in storefront catalog search strings.

<!--- MC-23113-->

*  Magento now passes  product attribute filters as an `array` (instead of a `string`) to `strpos()`, which results in the proper display of the product list and layered navigation results. Previously, Magento passed product attribute filter as an `array`, which lead to the logging of this error in the `system.log` file: `Warning: strpos() expects parameter 1 to be string, array given in vendor/magento/module-eav/Model/Entity/Attribute/Source/Table.php`.

<!--- MC-30183-->

*  Elasticsearch now correctly displays results from category pages when you change the number of search results viewed per page. Previously, when you changed how many search results should be displayed on the search results page, Magento displayed a blank page and this error: `"0":"SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near'`

### Shipping

<!--- MC-29279-->

*  Magento now prints shipping labels as a `.pdf` file as expected when you select **Print Shipping Label** from the Action drop-down list from an order in the order archive list. Previously, Magento displayed a 404 error.

<!--- MC-23093-->

*  The incorrect initial option values for the DHL shipping method have been corrected, and this shipping method now works as expected when enabled. Previously, when DHL shipping was enabled, Magento displayed this error in the shipping section of the checkout workflow: `This shipping method is currently unavailable. If you would like to ship using this shipping method, please contact us`.

<!--- MC-28956-->

*  The multishipping page of the checkout workflow now correctly displays discounted shipping prices when discounts are determined by a Cart Price rule.

<!--- MC-30239-->

*  Magento now correctly calculates refunds for orders that include discounts. Previously, Magento incorrectly calculated the shipping tax and shipping discount, and the refunded total did not match the total paid.

<!--- ENGCOM-6183-->

*  Support for Colombia regions has been added, and these regions are now available from the shipping and billing country dropdown menus in the checkout workflow. *Fix submitted by magudelo62 in pull request [25313](https://github.com/magento/magento2/pull/25313)*. [GitHub-25312](https://github.com/magento/magento2/issues/25312)

<!--- MC-29180-->

*  The drop-down list that is available for selecting shipping methods during the process of creating a Cart Price Rule now contains only valid values. Previously, this dropdown list contained empty or extra values.

<!--- MC-30980-->

*  Free Shipping Price rules now affect only the relevant products when a shopping cart contains products from categories that are included by the Free Shipping Price rule as well as products from categories not included in the rule.  Previously, when a shopping cart included products from both the free shipping categories as well as other categories not included in the price rule, then free shipping was not applied to any products.

### Sitemap

<!--- MC-21860-->

*  The partial sitemaps that are listed in the sitemap index now have the correct URL (for example, `storeurl/pub/sitemap-1-1.xml`). Previously, these URLs included the folder structure between the Magento user home folder and the installation folder. [GitHub-24946](https://github.com/magento/magento2/issues/24946)

<!--- MC-29287-->

*  Magento now uses the project base URL as expected when you generate a sitemap.

<!--- MC-31451-->

*  `sitemap.xml` (generated from **Marketing**  >  **SEO & Search**  >  **Site Map**)  now includes the URL of the homepage.

### Store

<!--- MC-23000-->

*  Customer sessions now persist as expected when a customer logs in to one store, adds products to the shopping cart, and then switches to a new store in a multi-store deployment. Previously, when the customer navigated to the second store, Magento logged out the customer and emptied the shopping cart.

<!--- MC-22567-->

*  Magento now redirects you to the correct product details page when you switch store view while on a product page in a multistore deployment. Previously, when you switched store view, Magento redirected you to a 404 page instead of the correct product page.

### Swagger

<!--- ENGCOM-6307-->

*  Magento no longer displays an informative console error when you try to navigate to the Swagger index page. Magento previously threw an error as a result of a previous fix in which the `requirejs-config` block was removed from the layout file of the Swagger index page. *Fix submitted by Duckↄhip in pull request [25682](https://github.com/magento/magento2/pull/25682)*. [GitHub-25680](https://github.com/magento/magento2/issues/25680)

### Swatches

<!--- MC-30269-->

*  Merchants can now successfully add color swatch attributes to products using the **Visual Swatch** option on **Stores** > **Attributes** > **Product** > **New Attribute**. Previously, a JavaScript error was triggered when you tried to open the newly created swatch attribute.

### Target Rule

<!--- MC-23194-->

*  We have improved the performance of `indexer_update_all_views`. Indexing is now faster, inactive rules are no longer processed, and caches are cleared of entries for only changed products.

<!--- MC-23084-->

*  We’ve improved the performance of the Product/Target rule and Target Rule/Product indexers. Indexing operations and editing and saving product operations are now faster.

### Tax

<!--- MC-22931-->

*  Magento now performs VAT calculations correctly in all stores in a multistore deployment. Previously, Magento displayed an incorrect shipping rate in the `default` store but the correct one in the `en_gb` store.

<!--- MC-29099-->

*  Magento now updates shipping rates and prices as expected when a customer changes the destination country for an order during checkout.

<!--- MC-30500-->

*  Free shipping is now applied as expected based on the applicable cart price rule. Previously, cart price rules did not take into account taxes when calculating whether an order meets criteria for free shipping.

### Testing

<!--- MC-23067-->

*  A PHPStan code analysis check has been integrated into Magento static builds. This tool performs sophisticated static code analysis and identifies additional issues that are currently not detected by PHP CodeSniffer and PHP Mess Detector. See [Magento Testing Guide]({{page.baseurl}}/test/testing.html).

### Theme

<!--- MC-30476-->

*  Product names are no longer translated if their text matches a global key.

<!--- MC-29750-->

*  We’ve resolved a bug in `JsFooterPlugin.php` that affected the display of dynamic blocks. Previously, Magento displayed this error when you directly accessed `/banner/ajax/load/url`: `Uncaught TypeError: strpos() expects parameter 1 to be string, null given in`

### Translation and locales

<!--- MC-23224-->

*  Special price range settings (from/to dates) now work correctly for administrator accounts using a Dutch locale.

<!--- MC-31016-->

*  Inline translation now works as expected when enabled for a storefront.

### UI

<!--- MC-29747-->

*  Radio buttons for shipping methods are now enabled as expected in the checkout workflow.

<!--- MC-23211-->

*  The product edit page now loads successfully when the default attribute set for the page contains a dropdown attribute with the select label.

<!--- ENGCOM-6222-->

*  You can now scroll as expected to the top of the Admin Import page. *Fix submitted by Torben Höhn in pull request [25419](https://github.com/magento/magento2/pull/25419)*. [GitHub-6682](https://github.com/magento/magento2/issues/6682)

<!--- ENGCOM-6261-->

*  Watermark size now remains consistent with the image to which it has been applied when you resize the image. *Fix submitted by KrielkipNL in pull request [25528](https://github.com/magento/magento2/pull/25528)*. [GitHub-23515](https://github.com/magento/magento2/issues/23515), [GitHub-25528](https://github.com/magento/magento2/issues/25528)

<!--- ENGCOM-6223-->

*  Magento now correctly renders the **Read more ...** page element that is associated with a product that has an `additionalOption` value that exceeds 55 characters on the storefront shipment and invoice pages. Previously, these option values were escaped. *Fix submitted by Torben Höhn in pull request [25418](https://github.com/magento/magento2/pull/25418)*. [GitHub-25050](https://github.com/magento/magento2/issues/25050)

<!--- ENGCOM-6233-->

*  Corrected the position of the wishlist item **Delete** button on the category page. *Fix submitted by Paweł Tylek in pull request [25380](https://github.com/magento/magento2/pull/25380)*. [GitHub-21190](https://github.com/magento/magento2/issues/21190)

<!--- ENGCOM-6282-->

*  Magento now displays a **N/A** where needed on the product compare list page. Previously, the field for an attribute that was not relevant for the selected product was left blank. *Fix submitted by Paweł Tylek in pull request [25585](https://github.com/magento/magento2/pull/25585)*. [GitHub-25008](https://github.com/magento/magento2/issues/25008)

<!--- ENGCOM-6295-->

*  Magento now displays the dropdown icon as expected when you click **Load template** during the creation of a new email template from the Admin. *Fix submitted by Adarsh Manickam in pull request [25629](https://github.com/magento/magento2/pull/25629)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6298-->

*  Magento now retains the correct aspect ratio when a store icon is resized for mobile display. *Fix submitted by Fabricio Sobral in pull request [25623](https://github.com/magento/magento2/pull/25623)*. [GitHub-25043](https://github.com/magento/magento2/issues/25043)

<!--- ENGCOM-6291-->

*  The focus function on the fourth level of a multi-level navigation menu now works consistently. *Fix submitted by Fabricio Sobral in pull request [25613](https://github.com/magento/magento2/pull/25613)*. [GitHub-25589](https://github.com/magento/magento2/issues/25589)

<!--- ENGCOM-6304-->

*  Magento now displays the correct error message in the confirmation popup dialog when you delete a customer group. *Fix submitted by Eden Duong in pull request [25662](https://github.com/magento/magento2/pull/25662)*. [GitHub-25661](https://github.com/magento/magento2/issues/25661)

<!--- ENGCOM-6268-->

*  Accordion widgets placed in tab widgets now work as intended. Previously, when you clicked on the accordion widget, the tab closed. *Fix submitted by Paweł Tylek in pull request [25515](https://github.com/magento/magento2/pull/25515)*. [GitHub-22819](https://github.com/magento/magento2/issues/22819)

<!--- ENGCOM-6321-->

*  Corrected the CSS-defined color for the **Minimum Quantity allowed in Shopping Cart** field of the **Admin** > **Store** > **Configuration** > **Inventory** page. *Fix submitted by Eden Duong in pull request [25648](https://github.com/magento/magento2/pull/25648)*. [GitHub-25647](https://github.com/magento/magento2/issues/25647)

<!--- ENGCOM-6371-->

*  Logo images that are being uploaded into the Admin are now displayed with its native dimensions if no width and height parameters are explicitly set. Previously, an administrator could set the `logo_img_width` and `logo_img_height` block arguments in the layout file for the logo block, which potentially distorted the display of the logo. *Fix submitted by Krzysztof Daniel in pull request [25789](https://github.com/magento/magento2/pull/25789)*. [GitHub-25042](https://github.com/magento/magento2/issues/25042)

<!--- MC-23219-->

*  We’ve reverted a previous fix (https://github.com/magento/magento2/pull/25309) that had introduced a change to global styles that had the unintended consequence of breaking styles through the storefront.

### URL rewrites

<!--- MC-30917-->

*  Customers who change language on a CMS page can now successfully navigate to the store view they’ve selected. Previously, Magento displayed a 404 error.

<!--- MC-22606-->

*  You can now save a category that contains many products (for example, 140000). Previously, saving a category with this many products returned a 503 error.

### Visual Merchandiser

<!--- MC-31124-->

*  The edit category page now behaves as expected when you drag and drop products to a new position. Previously, dragging and dropping products on any category page repositioned the viewing window at the top of the page.

### Web API framework

<!--- MC-29838-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/orders` calls.

<!--- MC-30574-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/products` calls.

<!--- MC-15101-->

*  Child products of a configurable product can now be successfully disabled through the API.

### Wishlist

<!--- MC-29981-->

*  A wishlist now works as expected when it is enabled at the store-view level and disabled at the global level. Previously, when these settings were in place, adding a product to a wishlist resulted in a 404 error.

<!--- MC-30137-->

*  Magento now correctly saves and displays a new name for a wishlist when you rename a wishlist in deployments that contain multiple wishlists. Previously, Magento continued to display the former wishlist name.

### WYSIWYG

<!--- ENGCOM-6310-->

*  The WYSIWYG editor now works as expected on Internet Explorer 11.x. Previously, when you edited a field using the editor, the selected text was deselected when you clicked **Link**. *Fix submitted by Mateusz Krzeszowiak in pull request [25693](https://github.com/magento/magento2/pull/25693)*. [GitHub-13209](https://github.com/magento/magento2/issues/13209)

<!--- ENGCOM-6272-->

*  Magento can now successfully display two or more WYSIWYG editors on a catalog product edit page. Previously, only one working editor was displayed. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-18548](https://github.com/magento/magento2/issues/18548)

<!--- ENGCOM-6272-->

*  The WYSIWYG editor no longer hangs indefinitely when you try to upload an image from the Admin. Previously, the image upload popup window hung until you refreshed the page. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-23966](https://github.com/magento/magento2/issues/23966)

## Known issues

*  **Issue**: Magento prompts customers to log in by displaying this message: `This account is not confirmed. Click here to resend confirmation email`.  The **Click here** link in this message should open the Send confirmation link page, but is currently inactive. **Workaround**: The Resend account confirmation email link issue patch is now available for this issue. See  [Resend account confirmation email link issue patch for Magento 2.3.5](https://magento.com/tech-resources/download#download2368). A permanent fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. <!--- MC-33148-->

*  **Issue**: Magento 2.3.5 does not support  upgrading using the Web Setup Wizard from deployments running Magento 2.3.3 or earlier without first manually updating dependencies for  `magento/updater`.  You can upgrade using the Web Setup Wizard without issue from Magento 2.3.4 to Magento 2.3.5. **Workaround**: Users should run the following commands before upgrading using the Web Setup Wizard:

   `cd update`

   `&& composer update`

*  **Issue**: The Compare Products feature does not work as expected in deployments with multiple store views. When a user tries to compare products from multiple store views and one product has an empty value for a comparable attribute, Magento displays a corrupted Compare Products page. **Workaround**: Comparable attribute values cannot be empty. Merchants should specify non-empty values for comparable product attributes or use the default storeview value for the attribute. A fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. <!--- MC-33203-->

*  **Issue**: Magento throws an error on the Order Summary  section of the checkout workflow when a customer removes store credit after first selecting it as a payment method for the entire order. **Workaround**: Customers can refresh the Order page. A fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. <!-- MC-33431-->

*  **Issue**: The storefront checkout workflow will display only the Klarna and Amazon Pay payment methods for some countries, although other payment methods have been enabled. **Workaround**: Download and apply [Patch for specific country payment method issue](https://magento.com/tech-resources/download#download2369). A fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. See [Country payment method issue in {{ site.data.var.ece }} and Magento Commerce 2.3.5 and 2.3.5-p1](https://support.magento.com/hc/en-us/articles/360043955991).

*  **Issue**: An error message appears when a shopper attempts to change their credit card from the payments widget while checking out with Amazon Pay.  The shopper cannot successfully complete checkout by ignoring the error and proceeding to checkout. To resolve this issue and remove the error, see [Amazon Pay credit card change error](https://support.magento.com/hc/en-us/articles/360042646332) to apply the fix. <!-- BUNDLE-2554-->

*  **Issue**: You cannot complete an order to be shipped to multiple addresses if one of the ordered products is a virtual product. Currently, when you check out, Magento successfully places the order for the physical products, but the virtual product order is empty. **Workaround**: A fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. <!--- MC-32819-->

*  **Issue**: The system message displayed by Magento after a bulk action (for example, a mass product update or import/export) displays a count of 0 instead of an accurate count of the products affected by the bulk action. **Workaround**: A fix will be available in Magento 2.3.6, which is scheduled for release in Q4 2020. <!--- MC-33345-->

*  **Issue:** You cannot use the Magento Extension Manager to install extensions purchased from the Magento Marketplace. **Workaround**: Install extensions from the command line as described in [General CLI installation]({{ site.baseurl }}/extensions/install/). See [Extension Manager shows no extensions in Magento Commerce 2.3.x](https://support.magento.com/hc/en-us/articles/360043980352).

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

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

You can install {{site.data.var.ee}} 2.3.5 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
