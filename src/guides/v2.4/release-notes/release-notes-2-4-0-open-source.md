---
group: release-notes
title: Magento Open Source 2.4.0 Release Notes
---

Magento Commerce 2.4.0 introduces support for PHP 7.4, Elasticsearch 7.6.x, and MySQL 8.0. Substantial security changes include the enablement of two-factor authentication in the Admin by default.

This release includes all the improvements to core quality that were included in Magento 2.3.5-p1, over 100 new fixes to core code, and 30 security enhancements. It includes the resolution of 226 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.0 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

The name of the security-only patch for this quarter is 2.3.5-p2. Future releases will follow the typical package naming conventions for full-release and security packages.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.4-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5-p1. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Inventory Management and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes over 30 security fixes and platform security improvements.

#### Over 30 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues.

Additional security enhancements include:

This release includes over 30 security fixes and platform security improvements. Additional security enhancements include:

*  **Two-factor authentication (2FA) is now enabled by default for the Magento Admin**. Admin users must first configure their 2FA before logging into the Admin through either the UI or a web API. 2FA is enabled by default and cannot be disabled. This extra step of authentication makes it harder for malicious users to log in to the Admin without authorization. Additional implementations of 2FA are scheduled for release with Magento 2.4.0 General Availability, which is scheduled for late July. See [Two-factor Authentication (2FA)]({{page.baseurl}}/security/two-factor-authentication.html). <!--- MC-22631-->

*  **Template filter strict mode is now enabled by default**. Magento components (including CMS pages and blocks) that use the template filter in legacy mode can be vulnerable to remote code execution (RCE). Enabling strict mode by default ensures that RCE attacks cannot be deliberately enabled. <!--- MC-22982-->

*  **Data rendering for UI data providers is now disabled by default**. This removes an opportunity for malicious users to execute arbitrary JavaScript. <!--- MC-17356-->

*  **Content Security Policy (CSP) improvements**. `SecureHtmlRenderer` has been added to the Magento Framework and is available in `.phtml` templates to support the allowlisting of inline `style` and `script` tags. Inline scripts and styles are not typically permitted with the default CSP configuration. Although most core template files have been updated, some pages may display CSP violations. See [Content Security Policies]({{page.baseurl}}/extension-dev-guide/security/content-security-policies.html#whitelist-an-inline-script-or-style).

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance. Supported versions of PHP and PHPUnit, Elasticsearch, MySQL, and other dependencies are listed in [Magento 2.4 technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

*  **PHP 7.4 support introduced and PHP 7.1 and 7.2 deprecated**. Magento 2.4.0 introduces support for PHP 7.4. Magento 2.4.0 can be installed with Elasticsearch 7.6.x only.

*  **Support for PHPUnit 9.x and deprecation of PHPUnit 6.5**. PHP 7.4 requires the use of the latest PHPUnit testing framework, which is PHPUnit 9.x. Magento Marketplace extension vendors must confirm that all new extension versions are compatible with PHP 7.4 and that all  unit and integration tests have been configured to be run with PHPUnit 9.

*  **Elasticsearch 7.6.x support**. Elasticsearch 7.6.x is now the default catalog search engine for Magento Commerce and Open Source. You cannot install or upgrade to Magento 2.4.0 without also installing Elasticsearch 7.6.x. Elasticsearch version 2.x code has been removed, and Elasticsearch versions 5.x and 6.x have been deprecated and are no longer supported. See [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

*  **MySQL 8.0 support**. Magento 2.4.x supports MySQL 8.x. (Magento 2.4.0 was tested with MySQL 8.0.20.) Merchants are encouraged to migrate their deployments to MySQL 8.x to take advantage of its improved performance, security, and reliability. Although MySQL 5.7 is still supported for Magento 2.4.x, MySQL 5.6 is no longer supported. You cannot host Magento 2.4.x with a MySQL 5.6 database. See [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html).

*  **Removal of the MySQL catalog search engine**. The MySQL search engine has been removed from Magento 2.4.0 and replaced as the default search engine with Elasticsearch. Elasticsearch provides superior search capabilities as well as catalog performance optimizations.  All merchants must have Elasticsearch to install and deploy Magento 2.4.0. See [Check the catalog search engine]({{page.baseurl}}/comp-mgr/prereq/prereq-elasticsearch.html).

*  **MariaDB 10.4 support**. Support for MySQL 8.0 provides the opportunity for merchants to deploy MariaDB 10.4 with Magento. Although merchants can still use MariaDB 10.2 with Magento 2.4.0, we recommend upgrading to MariaDB 10.4 for improved performance and reliability. MariaDB 10.0 and 10.1 are no longer supported (as a result of removing support for MySQL 5.6 in this release).

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. See the [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251) DevBlog post.

*  **Removal of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on the Magento Marketplace.

*  The **core Braintree module has been removed from the code base**. The Braintree Payments module now provides the same feature set. See [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Customer Account, Catalog, CMS, Import, Cart and Checkout, and B2B.

*  **Removal of core integration of third-party payment methods**. With this release, the Authorize.Net, eWay, CyberSource, and Worldpay payment method integrations have been removed from core code. Merchants should migrate to the official extensions that are available on the Magento Marketplace. See the [Deprecation of Magento core payment integrations](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Magento-core-payment-integrations/ba-p/426445) devblog post. <!--- MC-29029-->

*  **Support for partial-word search for Elasticsearch (new default search engine)**. Elasticsearch now supports the use of  partial words in search terms for  product names and SKUs when using quick search. This capability was supported by the MySQL search engine, which has been deprecated and replaced by Elasticsearch in this release.

*  **PayPal JavaScript SDK upgrade**. We’ve migrated the PayPal Express Checkout integration to the latest PayPal JavaScript SDK, an SDK that  automatically collects and passes needed risk parameters to PayPal. The behavior of the PayPal Express Checkout payment method remains unchanged. However, upgrading this SDK to the latest version let merchants access the latest features and security enhancements. <!--- MC-30962-->

*  **Deprecation and removal of the Web Set Up Wizard**. You must use the command line to install or upgrade Magento 2.4.0. See [Install Magento](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli.html).

*  **Composer update plugin**. Composer plugin streamlines the  upgrade process by resolving changes that must be made to the root project `composer.json` file before updating to a new Magento product requirement. This plug-in protects against overwriting customizations. See [Upgrade using the Magento composer root plugin](https://devdocs.magento.com/guides/v2.4/comp-mgr/cli/cli-upgrade.html).

### Performance improvements

*  **Improvements to customer data section invalidation logic**. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active.  (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations.) See [Private content]({{page.baseurl}}/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

*  **Multiple optimizations to Redis performance**. The enhancements minimize the number of queries to Redis that are performed on each Magento request. These optimizations include:

   *  Decrease in the size of network data transfers between Redis and Magento

   *  Reduction in Redis’ consumption of CPU cycles by improving the adapter’s ability to automatically determine what needs to be loaded

   *  Reduction in race conditions on Redis write operations

   See [Use Redis for the Magento page and default cache]({{page.baseurl}}/config-guide/redis/redis-pg-cache.html) and [Configure caching]({{page.baseurl}}/config-guide/cache.html).

*  **Improved caching of results of SQL queries to inventory tables**. These enhancements include:

   *  Caching of SQL queries to the `inventory_stock_sales_channel` table (1 query instead of 16)

   *  Caching of result of queries to the `inventory_stock` table (1 query instead of 16)

*  **Improvement of up to 25-30% to Quick Order add-to-cart performance**.

*  Merchants can now use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) to load images. See [Configure theme properties](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-images.html).

### Adobe Stock Integration v2.0

**Ability to license stock image previews from the Media Gallery**. Merchants can now find any Adobe Stock preview image in the Media Gallery, which reduces the number of steps required to license stock preview image.

### New Media Gallery

This replacement for the former Media Gallery offers a new, searchable interface for Magento media assets. Administrators can now search, filter, and sort images up to 30x faster than they could in the earlier version of this feature. Merchants can use this tool to evaluate storefront image usage. Extension developers should be aware that extensions that were developed for the Media Gallery will not work as expected with the new Media Gallery.

### Inventory Management

Inventory Management enhancements for this release include support for in-store pickup and bundle product support. See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent Inventory Management bug fixes.

### GraphQL

GraphQL enhancements include:

*  `pickupLocations` query supports the Inventory In-store pickup feature
*  `categories` query returns a list of categories that match a specified filter. This query differs from the `categoryList` query in that it supports pagination.
*  `reorderItems` mutation allows a logged-in user to add all the products from a previous order into their cart.

See  the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on this and other enhancements. See [Release notes]({{page.baseurl}}/graphql/release-notes.html) for a detailed discussion of recent GraphQL bug fixes.

### PWA Studio

PWA Studio 6.0.0 and 6.0.1 are supported on Magento 2.4.0. For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### Magento Functional Testing Framework (MFTF)

MFTF v3.0.0 includes these new features and includes support for PHP 7.4 and PHPUnit 9:

*  MFTF helpers, which can create custom actions outside of the test framework
*  schema updates for test entities
*  sub-folders in test modules
*  nested assertion syntax
*  static check that checks and reports references to deprecated test entities

This release also removes deprecated actions and upgrades scripts that were added to upgrade tests to MFTF major version requirements.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It introduces both quality and UX improvements to these extensions and an expansion of MFTF coverage.

Magento Marketplace extension vendors should confirm that their extensions are compatible with PHP 7.4 when publishing a new version of their extension for Magento 2.4.0.

#### dotdigital

This release includes these enhancements:

*  Customer attribute values that are captured by any input type (for example, dropdown, multi-select) are now correctly synced as data fields.
*  Cart insight data is now sent for all active quotes, even if they contain no items. This allows merchants to exit contacts from a program if they empty their cart.
*  Merchants can now sync website name, store name, and store view name by individual data fields.
*  Wishlist, Review, and Order syncs now look up the transactional data sync limit once only.
*  Logging output from the Client class has been improved and is now consistent across all methods in the API wrapper.
*  Configurable products now have a stock figure that is the sum of their child products.
*  A new plugin detects stock updates that are performed by third-party code (outside the Magento Admin).

#### Amazon Pay

This release includes:

*  Updates to CSP allowlists
*  Ability to do multiple authorizations for a multi-item order
*  Support for Japanese addresses

#### Braintree Payments

This extension replaces our core Braintree integration. It provides the same features as the Braintree core integration. See [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html).

#### Klarna

This release includes new on-site messaging options to help shoppers understand the available credit and financing options. It also includes improvements to:

*  refunds
*  API efficiency
*  cookies and unit tests
*  discounts

#### Vertex

This release of Vertex includes the following new feature and enhancements:

*  Improvements to the Admin configuration user experience
*  Replacement of installation and upgrade scripts with XML schema files and patches
*  Removal of deprecated code (`ApiClient` and `ClientInterface`)

#### Yotpo

Yotpo Ratings and Reviews are integrated with Page Builder.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.0 core code.

### Installation, upgrade, deployment

<!--- MC-23940-->

*  You can now successfully remove a website along with the website’s scope-specific configuration settings in `app/etc/config.php` as expected. Previously, when you tried to remove the website, the operation failed, and Magento displayed this error: `The website with code xxx that was requested wasn't found. Verify the website and try again`. Additionally, Magento displayed this error on the storefront: `Config files have changed. Run app:config:import or setup:upgrade command to synchronize configuration`. [GitHub-24061](https://github.com/magento/magento2/issues/24061)

<!--- MC-30140-->

*  Configuration settings that are disabled in `index.php` are no longer editable from the Admin.

<!--- MC-32405-->

*  Magento installation now completes successfully, and stores are created as expected, when store configuration is pre-defined in `config.php`.

<!--- MC-33151-->

*  `\Magento\Store\App\Config\Source\RuntimeConfigSource::getEntities` has been refactored to decrease the number of `SHOW TABLE STATUS` queries it makes. (This change reverts to the behavior this function displayed in Magento 2.3.3.)

<!--- MC-23890-->

*  Data scripts are no longer re-run whenever you attempt to upgrade the database by running `bin/magento setup:upgrade`. Previously, upgrade scripts were re-run unnecessarily, which affected performance. [GitHub-19469](https://github.com/magento/magento2/issues/19469)

<!--- MC-30397-->

*  Magento now displays the following behaviors when your connection to Redis is interrupted. Previously, Magento did not reload the current page and displayed this error: An error has happened during application run. See exception log for details.

   *  Admin and storefront sessions expire
   *  Admin and storefront users must log in again
   *  Session data is saved to `var/session/`
   *  No error or exceptions are logged.

### Backend

<!--- MC-25036-->

*  Email templates (**Admin** > **Marketing** > **Communications** > **Email Templates**) can now be previewed from the Admin when JavaScript minification is enabled. Previously, when you tried to preview an email template, the Email Preview popup window was empty. [GitHub-25068](https://github.com/magento/magento2/issues/25068)

### Bundle products

<!--- MC-25251-->

*  The performance of the `catalog_product_price` re-index operation for bundle products has been improved.

<!--- MC-29633-->

*  Administrators can no longer manually enter a tax class in the Admin for a bundle product when the bundle product’s **Tax Class** and **Dynamic Price** settings are disabled for the default store view. Previously, when an administrator unchecked the **Use Default Value** option next to **Tax Class**, Magento enabled the option, permitting an administrator to enter another value and save the product.

<!--- MC-30257-->

*  Bundle product prices are now calculated correctly on product pages.

<!--- MC-29745-->

*  You can now add any number of bundle products to your shopping cart without error. Previously, when you added a bundle product to your cart, then navigated to the cart, Magento displayed this error: `Please correct the quantity for some products`.

<!--- MC-32962-->

*  Magento now applies Cart Price Rules to only the bundle product  child products that match the rule criteria. Previously, Magento applied the Cart Price Rule to all child products that belonged to the bundle product.

### Cart and checkout

<!--- MC-23870-->

*  Magento no longer throws an error during checkout when the **Synchronize with Backend** configuration setting is enabled. [GitHub-23833](https://github.com/magento/magento2/issues/23833)

<!--- MC-29786-->

*  Radio buttons for shipping methods are now enabled as expected in the checkout workflow.

<!--- MC-30258-->

*  The order review page in the checkout workflow now loads successfully for an order being shipped to multiple addresses when Terms and conditions with the **Applied Manually** setting is enabled. Previously, the Review page did not pass validation, and Magento displayed a 404 error.

<!--- MC-32330-->

*  Magento now displays the waiting/spinning icon while prices are updated on the cart.

<!--- MC-33230-->

*  Magento now displays an informative message when a product in the minicart becomes out-of-stock before checkout. Once you’ve removed the out-of-stock item, Magento now displays the **Proceed to Checkout** button. Previously, Magento did not display this button.

<!--- MC-31391-->

*  Magento now displays an informative error message when you try to add a product by clicking **Order by SKU** when the file for upload is corrupt. Previously, Magento displayed a blank page.

### Cart Price Rule

<!--- MC-23986-->

*  Cart Price Rules that are based on payment methods are now applied during the checkout workflow. [GitHub-24206](https://github.com/magento/magento2/issues/24206)

### Catalog

<!--- MC-23633-->

*  Magento now disables the ability of a restricted administrator to change a product’s quantity attribute and disables advanced inventory as expected. Previously, only the visual display of the quantity attribute was affected, and Magento changed the quantity value in the database after the product was saved.

<!--- MC-25235-->

*  Magento no longer throws an error when you change the name of a tiered product that is included in a scheduled update. Previously, when you tried to save the product with a new name, Magento displayed this error: `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '3-0-0-2.0000-0' for key 'UNQ_EBC6A54F44DFA66FA9024CAD97FED6C7', query was: INSERT INTO catalog_product_entity_tier_price (all_groups, customer_group_id, qty, value, website_id, percentage_value, row_id) VALUES (?, ?, ?, ?, ?, ?, ?)`

<!--- MC-29023-->

*  Custom attribute values can now be saved as expected from the Admin.

<!--- MC-29775-->

*  The Recently View Products feature now shows products associated only with the current store view in multi-store deployments when **Stores** > **Configurations** > **Catalog** > **Recently Viewed/Compared Products** > **Show for Current** is set to **store view**. Previously, Magento displayed recently viewed products from all websites, no matter which website the product was assigned to.

<!--- MC-29896-->

*  Magento now displays product images in the minicart without distortion. Previously, Magento stretched the image in the minicart to fill the entire width and height of the image container.

<!--- MC-29866-->

*  The `getBasePrice` function now returns a float value as expected rather than a string.

<!--- MC-30229-->

*  The product compare feature now works as expected. It displays only products in the current user’s compare list.

<!--- MC-30234-->

*  You can now assign a default watermark to a theme. Previously, after assigning the watermark, Magento threw a fatal error.

<!--- MC-30540-->

*  You can now successfully edit a configurable product with many variants (approximately 5,000) from the Admin. Previously, when you tried to edit a configurable product with many subproducts, Magento displayed this error: `Warning: DOMDocumentFragment::appendXML(): Entity: line 1: parser error : CData section too big found in /vendor/magento/framework/View/TemplateEngine/Xhtml/Template.php on line 60`

<!--- MC-30734-->

*  Sorting on attribute sets on **Admin** > **Catalog** > **Products** is now based on alphabetical order as expected.

<!--- MC-30794-->

*  The Recently Viewed Products feature now works as expected in multistore deployments.

<!--- MC-31837-->

*  Administrators with restricted permissions to Catalog can now create a downloadable product. Previously, administrators could not create a downloadable product, and Magento threw an error.

<!--- MC-31838-->

*  The **Product in Websites** checkbox of the new product page is now enabled by default for restricted administrators in multi-site deployments. Previously, the checkbox for the non-default website was not preselected, and if the administrator left the checkbox unselected, Magento displayed an error message.

<!--- MC-32772-->

*  `addToCart` events are now tracked as expected in the datalayer. Previously, after changing the configurable options for a product, then clicking **Add to cart**, the new `addToCart` event was not added to the datalayer.

<!--- MC-29449-->

*  The minicart and Admin shopping cart (**Admin** > **Customers** > **Manage Shopping Cart**) now display correct product prices when a Catalog Price Rule is applied. Previously, the storefront shopping cart displayed the correct product price, but the minicart and Admin shopping cart displayed the original product price.

<!--- MC-31171-->

*  The Recently Viewed Products widget now works correctly when **Stores** > **Configuration** > **Catalog** > **Catalog** > **Recently Viewed/Compared** > **Synchronize widget products with backend storage** is set to **yes**.

<!--- MC-30777-->

*  Filtering on the Admin product grid website column now works as expected. Previously, filter results did not display the correct number of products, but consistently displayed the total number of products as 1.

### Catalog widget

<!--- MC-29167-->

*  The `CatalogWidget` products list now works as expected with anchor categories, and products from anchor categories are now matched and displayed. Previously, when you selected a parent category that was an anchor, but that did not contain assigned products, products were not visible in the widget.

<!--- MC-30260-->

*  Magento now displays all children of a selected parent category as expected. Previously, if you selected a parent category that is an anchor, but which did not have assigned products by itself, Magento did not display all nested products.

### CMS content

<!--- MC-29619-->

*  You can now save and duplicate all CMS pages. Previously, Magento threw this exception when you tried to duplicate certain pages: `Unique constraint violation found`.

<!--- MC-30963-->

*  Magento now lets you create CMS blocks with identical names if the blocks are assigned to different store views.

<!--- MC-30103-->

*  Select from Gallery image thumbnails are now cached as expected. Previously, these images were resized on the fly.

<!--- MC-32275-->

*  Magento no longer throws an error when you save a CMS page that has been assigned to multiple stores. Previously, when you created or edited a CMS page, Magento saved the page but also threw this error: `Item (Magento\VersionsCms\Model\Hierarchy\Node) with the same ID "PAGE_ID" already exists`.

<!--- MC-32452-->

*  New CMS pages were not being added to a website’s store page hierarchy.

### Cookies

<!--- MC-24182-->

*  The `setRedirectCookie` and `clearRedirectCookie` functions now work as expected. Previously, these functions sent cookies to the browser, but all cookie parameters were missing. [GitHub-24547](https://github.com/magento/magento2/issues/24547)

<!--- MC-30789-->

*  Google Tag Manager tags are no longer triggered when a customer navigates to a new store without accepting the Google Tag Manager cookie.

### Configurable products

<!--- MC-23546-->

*  Child products of a configurable product can now be successfully disabled through the API.

<!--- MC-30391-->

*  Cart Price rules with a **condition set as Category (Parent only)** now work as expected consistently.

<!--- MC-30989-->

*  You can now add a configurable product to the cart from the Cross-Sells tab. When you select a product and click **Add to Cart** from this tab, you are now taken to the product’s details page, where you can select specific product options. Previously, Magento redirected you to a 404 error page.

<!--- MC-32411-->

*  Magento no longer links a simple product to a configurable product when the API call to link these products fails.

### Custom customer attributes

<!--- MC-30739-->

*  Magento now displays custom customer address attribute values as expected in the address section of the checkout workflow. Previously, Magento displayed the custom customer address attribute code instead of the value, and a JavaScript error was triggered.

<!--- MC-32301-->

*  Magento no longer throws an error when you include an empty customer attribute field in the **Forms to Use In** field while creating a Company account on the storefront. Previously, Magento threw this error: `PHP Fatal error: Uncaught TypeError: Argument 2 passed to Magento\Eav\Model\Attribute\Data\Text::validateLength() must be of the type string, null given`.

<!--- MC-33361-->

*  Magento now saves custom customer address attributes and implements them in registration forms as expected. Previously, when you created a new custom customer address attribute while creating an account from the cart, Magento did not save the attribute information, and the information in the **My Account Area** > **Address Book**.

### Customer

<!--- MC-29102-->

*  Customers who are subscribed to newsletters as a guest are no longer unsubscribed after registering for a new account.

<!--- MC-29841-->

*  Magento now uses a new PHPSession for each change of password.

<!--- MC-30650-->

*  You can now successfully create a customer and associate it with a particular website using the Associate to Website dropdown menu on **Customers** > **All Customers** > **Add new Customer**. Previously, when you tried to associate a new customer with the non-default website in a multisite deployment, Magento displayed this error: `The store view is not in the associated website`.

<!--- MC-29946-->

*  Magento now saves the information a customer enters in the default billing and shipping fields during checkout when the transaction is initially declined due to an invalid credit card but later completed successfully. Previously, although Magento created the order when the customer entered valid payment information, it did not update the default billing or shipping addresses in the My Account section of the checkout workflow.

<!--- MC-32325-->

*  Magento now honors the customer group settings when you create a new customer from the Admin in a multi-site deployment.

<!--- MC-31481-->

*  Magento now successfully imports customer data using the **Customer and Addresses (single file)** option when `cron` is enabled and the Customer Grid Indexer is set to **Update By Schedule**. After `cron` executes, the imported customer information is available in the Admin as expected. Previously, Magento imported the customer data, but did not update the customer grid with the newly imported customer records.

<!--- MC-31117-->

*  You can now create a new customer from the storefront when date of birth is required. Previously, you could not create a new customer when this field was required, even when you entered valid DOB values. [GitHub-26700](https://github.com/magento/magento2/issues/26700)

<!--- MC-31945-->

*  Customer creation from the Admin now honors the default customer group setting as expected.

<!--- MC-31425-->

*  The `PHPSessionId` is now changed as expected after a customer logs out and then logs back in.

<!--- MC-32152-->

*  The Admin view of a customer cart now displays all the products that were added to the cart from multiple websites in a multi-website deployment. Previously, when a customer added a product to their cart from a non-default website, the product was not displayed in the Admin even when **Share customer account** is set to **Global**.

### Directory

<!--- MC-33168-->

*  The Default State dropdown menu is now populated by data that is based on the allowed countries that have been assigned to the selected website when you configure a value for the **Default Tax Destination Calculation** field. Previously, this dropdown listed the countries that were assigned to the default website.

### Downloadable

<!--- MC-32306-->

*  You can now use an import file to update downloadable products in bulk by SKU and description. Previously, validation errors occurred, and import failed.

### EAV

<!--- MC-29999-->

*  Magento now respects store-specific settings that determine whether the telephone number field of the checkout workflow is required in a multi-site deployment. Previously, in deployments where one store required this field in the checkout workflow and another store did not, customers who did not complete this field while checking out on the store that did not require it encountered this error: `Please check the shipping address information. "telephone" is required. Enter and try again`.

### Email

<!--- MC-32842-->

*  The authorization emails sent to customer when they request a return now contain the RMA status as expected. Previously, this email displayed an empty string instead of return status.

<!--- MC-32864-->

*  Customers are no longer redirected away from the current website when they report a forgotten password in multi-site deployments where customer accounts are shared globally. Previously, customers were redirected to the website on which the account was created.

<!--- MC-31544-->

*  Order confirmation emails sent to customers now include the list of ordered items as expected. Previously, when you created an email template in the Admin by loading and saving the default template, emails generated from this template did not include the list of ordered items. [GitHub-26882](https://github.com/magento/magento2/issues/26882)

### Frameworks

*  Dependencies on Zend Framework have been migrated to the [Laminas project](https://getlaminas.org/about/foundation) to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated.

<!--- MC-25257-->

*  Special price range settings (from/to dates) now work correctly for administrator accounts using a Dutch locale.

<!--- MC-29388-->

*  `php bin/magento cron:run` no longer processes items from the change log table multiple times. Previously, when you had more than 100000 new versions in the change log table, actions could be called several times for the same `entity id`.

<!--- MC-30544-->

*  The Update Attribute action now correctly updates the timestamp of a product’s `updated_at column` from `catalog_product_entity` when you update the product from the Admin edit product page.

<!--- MC-30834-->

*  Setting `'persistent' => '1'` in `env.php` no longer throws an error when you run `setup:upgrade`.

<!--- MC-32243-->

*  The **Invalid Form Key. Please refresh the page** text string on the login page is now translated as expected.

<!--- MC-33278-->

*  We’ve improved the performance of the `Magento\Framework\App\DeploymentConfig\Reader::load` function. Previously, when a request was made to Magento, this function was called repetitively, which resulted in `config.php` and `env.php config` files being loaded each time the method was called.

<!--- MC-31728-->

*  Magento no longer downloads a `blank.html` page when an administrator clicks on a product while creating an order from the Admin.

<!--- MC-31729-->

*  Non-cacheable blocks are no longer added to default layout handles. Adding non-cacheable blocks to default layout handlers renders all Magento pages non-cacheable. This results from the layout generation process: During layout generation, Magento collects all available layout handles for a particular page and merges instructions from them into the page’s final layout structure. The default layout handle is used as a basic handle for every page. As a result, layout updates that are declared for the default handler appear on every Magento page. [GitHub-9041](https://github.com/magento/magento2/issues/9041)

<!--- MC-31920-->

*  The MySQL lock manager is now the primary lock manager. As a result,  the minimal required version of MySQL is 5.7.9.

### General fixes

<!--- MC-21347-->

*  The Customer module no longer has a dependency on the Review module. Previously, you could not disable the Review module due to this dependency.

<!--- MC-25250-->

*  The product edit page now loads successfully when the default attribute set for the page contains a dropdown attribute with the select label.

<!--- MC-25260-->

*  The graphical orders chart accessible from the Orders tab on the Admin now accurately reflects order quantity.

<!--- MC-29273-->

*  A store’s Admin URL no longer redirects to the storefront URL when these two URLs differ.

<!--- MC-29658-->

*  URL rewrite generation for subcategories now works correctly when using the performance toolkit profile with more than one website.

<!--- MC-30224-->

*  You can now delete an empty user model without deleting the Administrators role to which it is assigned.

<!--- MC-30636-->

*  All HTML tags are now supported by the TinyMCE4 editor.

<!--- MC-31128-->

*  Clicking the **Refund Offline** button in the create a credit memo workflow now generates a credit memo as expected. Previously, a JavaScript error disabled this button, and Magento did not create a credit memo.

<!--- MC-31832-->

*  Merchants can now create a product attribute of type `Decimal`. Previously, due an earlier bug fix, Magento did not display the product attribute type `Price`. [GitHub-26949](https://github.com/magento/magento2/issues/26949)

<!--- MC-32175-->

*  Magento no longer returns a 500 error when you try to open a Category page on the storefront when **Layout = Product – Full Width** has been set from the Design tab of the Category page.

<!--- MC-32697-->

*  Corrected a bug in `AbstractSimpleObjectBuilder.php`.

<!--- MC-33427-->

*  MAP (minimum advertised price) now works as expected for group products.

<!--- MC-30313-->

*  You can now add a child product of a grouped product to your cart when one of the grouped product’s other child products is out-of-stock. Previously, when one child product was out-of-stock, you could not add any other child products to the cart.

<!--- MC-29998-->

*  Magento now redirects you to the home page of the appropriate store view when you change language on CMS pages in a multistore deployment. Previously, Magento displayed a 404 page when you changed language on certain CMS pages.

<!--- MC-30162-->

*  Order queries (`SalesOrderIndexGridAsyncInsertCron`) have been refactored to reduce the size of the dataset returned and the frequency of the queries.

<!--- MC-32371-->

*  You can now successfully create a CMS page and assign it to the website root category in the CMS hierarchy.

<!--- MC-32783-->

*  Guests can now display a product price or add a product to the cart when category permissions are enabled (for example, when the **Not logged in** customer group has been granted these privileges).

<!--- MC-32815-->

*  Product rules now apply to out-of-stock products as expected. Previously, Magento did not display out-of-stock products in the related products list even when the rule was configured to display out-of-stock products.

<!--- MC-33222-->

*  Clicking the **Track shipping** button for an order from the Admin now results in tracking information being displayed in a pop-up window as expected. Previously, this link took the administrator to the Log in page.

<!--- MC-31305-->

*  Magento now displays an informative error message and continues to display the registration form as expected if an error occurs when a customer tries to complete a registration form that contains a multiselect customer attribute. Previously, Magento displayed a 500 error.

<!--- MC-32224-->

*  Magento now displays the **Credit memo** button after the partial refund of an order. Previously, Magento did not display this button after you created a partial refund, and you could not create a credit memo for the rest of the order.

<!--- MC-31878-->

*  Bulk order update through REST now updates order status as expected. Previously, Magento threw this error: `report.ERROR: Property "AdditionalInformation" does not have accessor method "setAdditionalInformation" in class "Magento\Sales\Api\Data\OrderPaymentInterface".`

<!--- MC-30398-->

*  Attribute filters are now displayed as expected in the Shopping Options block of the Category page.

### Gift cards

<!--- MC-31041-->

*  The GET `V1/orders/:orderId` call returns gift card codes as expected.

### Images

<!--- MC-29523-->

*  Images are now saved in `pub/media/catalog/category` as expected when you save category images. Previously, Magento saved these images in `pub/media/catalog/tmp/category`.

<!--- MC-30320-->

*  Watermark images no longer obscure the product image that they overlay. Previously, when the watermark image was larger than the product image it was applied to, the product image was not visible.

<!--- MC-32273-->

*  You can now successfully save an image to a category from the Admin. Previously, after you saved the image, part of the part of the URL was missing, and you couldn’t  re-open the image.

<!--- MC-31727-->

*  Magento now displays `.png` images as expected after upload.

### Import/export

<!--- MC-25206-->

*  Magento no longer throws an error during import when imported data includes a `swatch_image` store-view key has a value of `no_selection`. Previously, Magento threw this error: `Imported resource (image) could not be downloaded from external resource due to timeout or access permissions in row(s): 1`. [GitHub-25026](https://github.com/magento/magento2/issues/25026)

<!--- MC-29417-->

*  Magento now updates images as expected when you use the `hide_from_product_page` setting when importing products in deployments with multiple store views.

<!--- MC-29677-->

*  Customizable options are now imported as expected when `row_id` is not equal to a product's `entity_id`. Previously, Magento did not import customizable options when `row_id` was not equal to a product’s `entity_id`, which resulted in certain products not being imported.

<!--- MC-29916-->

*  Images associated with configurable products are now properly uploaded during import and available for viewing as expected from the product edit page.

<!--- MC-30304-->

*  Exported `.csv` files now reflect filter settings for including in-stock or out-of-stock products. Previously, Magento exported all products, no matter which stock setting you selected.

<!--- MC-30323-->

*  You can now successfully import or update customers using the Customer and addresses single file option of the import workflow. Previously, when you selected this option, Magento did not import the customer data and displayed this error: `Invalid data for insert`.

<!--- MC-30357-->

*  The Stock Indexer is now triggered as expected after import and updates product status. Previously, the Stock Indexer did not index the changed product inventory data.

<!--- MC-30528-->

*  Magento now successfully imports all custom options for a configurable product’s child products when `store_view_code` is specified. This works whether you choose to import configurable products individually or collectively. Previously, Magento did not successfully import all custom options when the import file contained more than one item and `store_view_code` was specified.

<!--- MC-30672-->

*  Magento now provides a message during product import that identifies which products in the imported `.csv` file have duplicated keys. Merchants can use this information to resolve conflicts. Previously, Magento displayed this error: `Notice: Undefined index: name in /var/www/html/ee233dev/app/code/Magento/CatalogImportExport/Model/Import/Product.php on line 2524`

<!--- MC-29960-->

*  Magento now displays a more informative error message, and does not display a download link, when you try to delete a directory from the **System** > **Export** list. Previously, when you tried to delete a directory from this list, Magento continued to display a download link for files that could not be downloaded, and displayed an uninformative error message.

<!--- MC-29959-->

*  The `.csv` file used during import now contains the correct links for downloadable products and is now correctly formatted to support importing and updating downloadable products.

<!--- MC-30189-->

*  Magento now successfully exports a `.csv` file when you set import behavior for Replace, select a previously exported `.csv` file, and click **Check data**. Previously, Magento displayed this error: `Data validation failed. Please fix the following errors and upload the file again." and "Following Error(s) has been occurred during importing process`.

<!--- MC-30141-->

*  The Stock Indexer is now triggered as expected after import and updates product status. Previously, the Stock Indexer did not index the changed product inventory data.

<!--- MC-31198-->

*  CSV files generated during product import now contain group titles for downloadable products as expected. Previously, unnecessary validation of `group_title` during import prevented the display of group titles for downloadable products.

<!--- MC-32153-->

*  When `cron` is enabled and you perform a customer import using the **(Customer and Addresses (single file)** option, Magento populates data to the Admin customer grid as expected. The customer grid displays the customers once manual re-indexing completes for `customer_grid indexer`. Previously, Magento did not update the customer grid with newly imported customer addresses.

<!--- MC-32154-->

*  Magento now displays the customer list as expected after automatic re-indexing. Previously, although manually running `bin/magento index:reindex` worked, the customer grid did not display customer information after automatic re-indexing.

<!--- MC-30148-->

*  Magento now deletes temporary files from `<Magento_home>/var` as expected after product import has completed.

<!--- MC-31879-->

*  Magento no longer creates duplicate SKUs in the Admin when products are imported by `.csv` file.

### Index

<!--- MC-25236 30779-->

*  We have improved the performance of `indexer_update_all_views`. Indexing is now faster, inactive rules are no longer processed, and caches are cleared of entries for only changed products.

<!--- MC-29917-->

*  Product prices on the storefront now accurately reflect the application of a scheduled Catalog Price Rule update. Previously, prices did not reflect the scheduled cart price rule until you manually re-indexed (`php bin/magento indexer:reindex catalogrule_rule`).

<!--- MC-30588-->

*  You can now successfully re-index the product database after adding an attribute that is unsearchable (that is, the `is_searchable`, `is_filterable`, `is_visible_in_advanced_search` attributes are disabled).

### Infrastructure

<!--- MC-32223-->

*  The validation logic associated with the **Date of Birth** field of the Customer Registration form no longer triggers a JavaScript error.

### Layered navigation

<!--- MC-31763-->

*  Magento now renders the **Yes/No** attribute on the Category page when **Use in Layered Navigation: Filterable (with results)** for storefront properties is enabled.

### Media Storage

<!--- MC-32593-->

*  `var/resource_config.json` is no longer regenerated whenever an image is requested by `get.php`. Previously, this file was rewritten on each call to `get.php`.

### Newsletter

<!--- MC-31768-->

*  Customers can now subscribe as expected to newsletters. Previously, when a customer tried to confirm their subscription, Magento displayed this error: `This is an invalid subscription confirmation code`.

### Orders

<!--- MC-33456-->

*  Order summary subtotals no longer display excluded taxes when the website display settings do not specify that excluded taxes. Previously, when multiple websites were configured with different display settings, the setting defined in the server variable was used for the store despite the store-level configurations.

### Payment methods

<!--- MC--->

*  The integration of third-party payment methods (Authorize.Net, eWay, CyberSource, and Worldpay) into the core Magento code has been deprecated. Merchants should migrate to the official extensions that are available on the Magento Marketplace.

<!--- MC--->

*  The WorldPay payment integration with the Magento core has been deprecated. Please use the official Marketplace extension instead.

<!--- MC--->

*  The core implementation of Signifyd fraud protection is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on Magento Marketplace.

<!--- MC-23900-->

*  You can now create an order from the Admin using Authorize.net as the payment method. Previously, Magento did not create the order, and displayed this error: `Transaction has been declined. Please try again later`. [GitHub-23934](https://github.com/magento/magento2/issues/23934)

<!--- MC-30498-->

*  Magento now displays an informative error message each time a customer clicks **Pay with PayPal** after entering an invalid shipping address in the checkout workflow. Previously, Magento displayed an error message only when the customer first clicked the button, not for subsequent clicks.

<!--- MC-30639-->

*  Magento no longer changes an order’s status to **processing** in the Payment Review section of the checkout workflow when a payment with PayPal fails.

<!--- MC-30864-->

*  You can now successfully complete an order using the Payflow Link payment method. Previously, the Payflow Link payment method always rejected payment because the order status remained in the `Pending` payment state, even though the order status in the payment method logs was `Approved`.

<!--- MC-32423-->

*  The **OK** button is now clickable when you try to correct Braintree payment details for an order.

<!--- MC-32546-->

*  You can now successfully complete an order and return to the merchant’s home page when **Website Payments Pro Hosted Solution** is configured. Previously, when you clicked **Return to merchant**, Magento threw this error: `Invalid Form Key. Please refresh the page`.

<!--- MC-32494-->

*  Orders that are placed using PayPal Payflow Pro are now set to Suspected Fraud status when fraud filters are triggered.

<!--- MC-33110-->

*  You can now use PayPal Express Checkout with any supported credit card. Previously, when you clicked on a credit card button while using PayPal Express Checkout to complete an order, Magento hung, and you could not enter any credit card information.

<!--- MC-33117-->

*  Orders placed within PayPal Payflow Pro are now set to Suspected Fraud status when fraud filters are triggered. Previously, payment transaction status on PayPal was not validated before payment approval occurred on the Magento side.

<!--- MC-33294-->

*  Payflow Pro now works as expected when Website Restrictions are enabled.

<!--- MC-31157-->

*  The **Place order** button on the checkout workflow is now disabled as expected until the customer updates the billing address when paying with Braintree. Previously, when secure 3D was enabled and the customer was paying with Braintree, Magento did not correctly validate the shipping address and displayed this JavaScript error: `TypeError: Cannot read property 'firstname' of null`.

<!--- MC-31196-->

*  Magento now successfully processes orders placed with PayPal Express Checkout where the order’s shipping address specifies a country region that the customer has manually entered into the text field rather than selected from the drop-down menu on the Shipping page. Previously, Magento displayed this error on the order review page: `Error 500: NOTICE: PHP message: PHP Fatal error: Uncaught Error: Call to a member function getId() on null in httpdocs/vendor/magento/module-paypal/Model/Api/Nvp.php:1527`. [GitHub-26698](https://github.com/magento/magento2/issues/26698)

<!--- MC-31573-->

*  The PayPal Pro payment method now works as expected in the Chrome 80 browser. This payment method previously invoked a Magento callback endpoint that needed access to the customer’s session — access that the new default Chrome SameSite cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

<!--- MC-31292-->

*  You can now successfully use PayPal Express to pay for an order when persistent checkout cart has been enabled and the **Clear Persistence on Sign Out** setting is set to **no**. Previously, Magento redirected you to the Login page.

### Performance

<!--- MC-31499-->

*  Customer data section invalidation logic has been improved. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active. (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations). See [Private content](https://{{page.baseurl}}/guides/v2.3/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

<!--- MC-31449-->

*  The import of customer accounts has been refactored to improve import speed.

<!--- MC-23383-->

*  Merchants can now use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) to load images. See [Configure theme properties](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-images.html).

### Product alert

<!--- MC-30255-->

*  The stock alert email sent to customers about the re-stocking of a configurable product now contains the correct product price. Previously, this email contained a product price of 0.

<!--- MC-32873-->

*  Product stock alert unsubscribe now works when a user’s session has expired. Previously, when you clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

<!--- MC-31979-->

*  Unsubscribe actions for product alerts now work as expected. Previously, when a customer clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

### Product video

<!--- MC-23743-->

*  You can now use REST to update YouTube videos (PUT `rest/V1/products/{SKU}`). Previously, Magento displayed a thumbnail for the video, but the video player did not load when you clicked the **Play** button. [GitHub-23194](https://github.com/magento/magento2/issues/23194)

### Reviews

<!--- MC-29578-->

*  Magento now disables the **Submit Review** button after the user clicks the button once. Previously, Magento did not disable this button after the first click and created multiple reviews when the user clicked the **Submit Review** button multiple times.

<!--- MC-31293-->

*  The **Admin** > **Reports** > **Reviews** > **By Products** filter list now displays results as expected. Previously, when you tried to filter this list, Magento did not display any results.

### Sales

<!--- MC-29426-->

*  Completed orders now appear in both the payment system and Magento. Previously, orders appeared in the payment system but not in Magento. [GitHub-25862](https://github.com/magento/magento2/issues/25862)

<!--- MC-30000-->

*  Magento now honors a customer’s default shipping address. Previously, Magento did not honor the default billing and default shipping addresses according to the settings, and the **Same As Billing Address** setting was not enabled automatically.

<!--- MC-30299-->

*  Magento now correctly calculates refunds for orders that include discounts. Previously, Magento incorrectly calculated the shipping tax and shipping discount, and the refunded total did not match the total paid.

<!--- MC-33165-->

*  Magento now assigns the correct Group ID when a new customer creates an order in multi-site deployments. Previously, Magento applied the settings from the default customer group.

<!--- MC-31786-->

*  Adminstrators with restricted permissions that include view permission for credit memos, invoices, and shipments can now view invoices and shipments from the Orders page as expected. Previously, when a restricted administrator tried to view an order, Magento displayed this error: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MC-24023-->

*  Magento no longer displays an error when a customer adds a quantity of a product to their cart that exceeds half of the existing product stock but does not exceed the total stock. Previously, under these circumstances, Magento displayed this error: `The requested qty is not available`. [Githib-24365](https://github.com/magento/magento2/issues/24365)

### Sales Rule

<!--- MC-30155-->

*  `quote_item.applied_rule_ids` is now updated as expected after a cart price rule is disabled. [GitHub-24526](https://github.com/magento/magento2/issues/24526)

<!--- MC-32229-->

*  Magento now displays category trees as expected when you try to create or edit a Cart Price rule. Previously, selecting a category in the Condition section while creating or editing a rule resulted in JavaScript errors.

### Search

*  Elasticsearch 7.6.x is now the default catalog search engine for Magento Commerce and Open Source. You cannot install or upgrade to Magento 2.4.0 without also installing Elasticsearch 7.6.x. Elasticsearch version 2.x code has been removed, and Elasticsearch versions 5.x and 6.x have been deprecated and are no longer supported. See [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

<!--- MC-23753-->

*  Magento now renders the **<** and **>** symbols correctly in storefront catalog search strings.

<!--- MC-25010-->

*  Products now show as expected in categories after running `cron:run` in deployments implementing Elasticsearch.

<!--- MC-25254-->

*  Magento no longer requires a full search reindex in order for a new product attribute to be searchable on the storefront.

<!--- MC-29545-->

*  Elasticsearch now works as expected when you sort a product list that contains bundle products by alphabetized product names.

<!--- MC-29951-->

*  Filtering results no longer include out-of-stock options when you filter configurable products in a category.

<!--- MC-30131-->

*  Selecting all products from the products list page using Elasticsearch now displays all products in the search results as expected. Previously, Magento displayed no search results.

<!--- MC-30201-->

*  Elasticsearch now correctly displays results from category pages when you change the number of search results viewed per page. Previously, when you changed how many search results should be displayed on the search results page, Magento displayed a blank page and this error: `"0":"SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near'`

<!--- MC-32430-->

*  Price sorting now works correctly for out-of-stock configurable products.

<!--- MC-25176-->

*  Magento no longer throws an exception when a customer uses the storefront  quick search in multi-website deployments.

### Shipping

<!--- MC-29276-->

*  Magento now applies fixed-amount, whole-cart discounts correctly for orders being shipped to multiple addresses. Previously, this type of discount was applied multiple times when a customer checked out an order using Check Out with Multiple Addresses. [GitHub-25834](https://github.com/magento/magento2/issues/25834)

<!--- MC-29444-->

*  The drop-down list that is available for selecting shipping methods during the process of creating a Cart Price Rule now contains only valid values. Previously, this dropdown list contained empty or extra values.

<!--- MC-30186-->

*  Magento now prints shipping labels as a `.pdf` file as expected when you select **Print Shipping Label** from the Action drop-down list from an order in the order archive list. Previously, Magento displayed a 404 error.

<!--- MC-31396-->

*  Free Shipping Price rules now affect only the relevant products when a shopping cart contains products from categories that are included by the Free Shipping Price rule as well as products from categories not included in the rule. Previously, when a shopping cart included products from both the free shipping categories as well as other categories not included in the price rule, then free shipping was not applied to any products.

### Sitemap

<!--- MC-29362-->

*  Magento now uses the project base URL as expected when you generate a sitemap.

### Store

<!--- MC-25187-->

*  Customer sessions now persist as expected when a customer logs in to one store, adds products to the shopping cart, and then switches to a new store in a multi-store deployment. Previously, when the customer navigated to the second store, Magento logged out the customer and emptied the shopping cart.

### Swatches

<!--- MC-30294-->

*  Merchants can now successfully add color swatch attributes to products using the **Visual Swatch** option on **Stores** > **Attributes** > **Product** > **New Attribute**. Previously, a JavaScript error was triggered when you tried to open the newly created swatch attribute.

### TargetRule

<!--- MC-31546-->

*  The related product block that is displayed for a product on the storefront now displays the products that have met the criteria defined in the Related Product Rule. Previously, Magento did not display any related products.

### Tax

<!--- MC-29579-->

*  Magento now updates shipping rates and prices as expected when a customer changes the destination country for an order during checkout.

<!--- MC-30546-->

*  Free shipping is now applied as expected based on the applicable cart price rule. Previously, cart price rules did not take into account taxes when calculating whether an order meets criteria for free shipping.

<!--- MC-32402-->

*  Magento no longer throws an error when you edit and save the `NOT LOGGED IN` customer group when B2B is installed.

### Theme

<!--- MC-29804-->

*  We’ve resolved a bug in `JsFooterPlugin.php` that affected the display of dynamic blocks. Previously, Magento displayed this error when you directly accessed `/banner/ajax/load/url`: `Uncaught TypeError: strpos() expects parameter 1 to be string, null given in`.

### Translation and locales

<!--- MC-24186-->

*  Inline translation now works as expected on the storefront when **Admin** > **Stores** > **Configuration** > **Advanced** > **Developer** > **Translate Inline** > **Enabled for Storefront** is set.

<!--- MC-31663-->

*  Inline translation now works as expected when enabled for a storefront.

### UI

<!--- MC-32547-->

*  You can now use Page Builder to add a product as a button link (**Edit Content** > **Button Link**). Previously, Magento threw this error when you tried to select the product: `Product with ID: XXXX doesn't exist`.

### URL rewrites

<!--- MC-31147-->

*  Customers who change language on a CMS page can now successfully navigate to the store view they’ve selected. Previously, Magento displayed a 404 error.

### Vault

<!--- MC-29967-->

*  The **Place Order** button on the shipping workflow is now enabled as expected when you select Braintree as the payment method and the **My billing and shipping address are the same** setting is disabled.

### Web API framework

<!--- MC-29891-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/orders` calls.

<!--- MC-30675-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/products` calls.

### Wishlist

<!--- MC-29988-->

*  A wishlist now works as expected when it is enabled at the store-view level and disabled at the global level. Previously, when these settings were in place, adding a product to a wishlist resulted in a 404 error.

## Known issues

**Issue**: Anomalies in storefront error messages occur in deployments where PHP 7.4.2 is installed. When Magento 2.4.0 is deployed with PHO 7.4.2, the space symbols in storefront error messages are replaced with plus (+) characters.  This bug is native to PHP 7.4.2 and cannot be corrected by Magento. <!--- MC-34170-->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-0-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-0-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.4.0 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
