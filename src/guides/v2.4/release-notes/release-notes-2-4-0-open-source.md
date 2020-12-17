---
group: release-notes
title: Magento Open Source 2.4.0 Release Notes
---

Magento Open Source 2.4.0 introduces support for PHP 7.4, Elasticsearch 7.6.x, and MySQL 8.0. Substantial security changes include the enablement of two-factor authentication in the Admin by default.

**With this release, the Authorize.Net method integration has been removed from core code. Merchants should migrate to the official extension that is available on the Magento Marketplace**.

{:.bs-callout-info}

**Braintree payment integration**: Prior to Magento 2.4.0, it was recommended that merchants install and configure the official Braintree payment integration extension from the Magento Marketplace to replace the core integration. With this release (Magento 2.4.0), the extension is now included in the Magento release. Merchants must follow additional steps to ensure that Braintree works properly in a Magento 2.4.0 deployment. See [Braintree](https://docs.magento.com/user-guide/payment/braintree.html) for more information on how to migrate to Magento 2.4.0.

This release includes all the improvements to core quality that were included in Magento 2.3.5-p1, over 100 new fixes to core code, and 30 security enhancements. It includes the resolution of 226 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Minor releases bring substantial code enhancements. Before upgrading to Magento 2.4.0, confirm that your environment meets the minimal [technical stack requirements](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html).

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.0 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

The package names of security-only releases are typically appended with -p1. However, we could not avoid deviating from these naming conventions with Magento 2.3.5, which in turn has had a temporary ripple effect on the subsequent security package names. Specifically, the full-feature Magento 2.3.5 release is Magento 2.3.5-p1. The security-only release that we will release when Magento 2.4.0 GAs will be Magento 2.3.5-p2. We hope to return to the usual naming conventions in future releases.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.5-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5-p1. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.5-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Inventory Management and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes over 30 security fixes and platform security improvements.

#### Over 30 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security Updates Available for Magento](https://helpx.adobe.com/security/products/magento/apsb20-47.html) for a discussion of these fixed issues. for a discussion of these fixed issues.

#### Additional security enhancements

*  **Implementation of 2FA for Admin accounts, Magento.com user accounts, and Cloud SSH access**

   *  **Securing your Magento Admin account**. Two-factor authentication (2FA) is now required for the Magento Admin. Admin users must first configure their 2FA before logging into the Admin through either the UI or a web API. 2FA is enabled by default. We strongly recommend against disabling the 2FA module.  This extra step of authentication makes it harder for malicious users to log in to the Admin without authorization. See [Two-factor Authentication (2FA)]({{page.baseurl}}/security/two-factor-authentication.html). <!--- MC-22631-->

   *  **Securing your Magento account**. Two-factor Authentication (2FA) provides an added, optional  layer of security to better protect your Magento.com account from unauthorized users who might want to use your account in ways you do not want. See [Securing Your Account](https://docs.magento.com/user-guide/magento/magento-account-secure.html).

*  **Securing Cloud SSH access**. {{ site.data.var.ece }} provides multi-factor authentication (MFA) enforcement to manage authentication requirements for SSH access to Cloud environments. Multi-factor authentication for 2FA is not enabled by default on a project.  Magento highly recommends enabling this feature. Contact Support for assistance. See [Enable multi-factor authentication for SSH access](https://devdocs.magento.com/cloud/project/project-enable-mfa-enforcement.html).

*  **Template filter strict mode is now enabled by default**. Magento components (including CMS pages and blocks) that use the template filter in legacy mode can be vulnerable to remote code execution (RCE). Enabling strict mode by default ensures that RCE attacks cannot be deliberately enabled. <!--- MC-22982-->

*  **Data rendering for UI data providers is now disabled by default**. This removes an opportunity for malicious users to execute arbitrary JavaScript. <!--- MC-17356-->

*  **New `\Magento\Framework\Escaper` class**. This class is provided for `.phtml` templates and the PHP classes that are responsible for generating HTML. This class contains HTML sanitization methods relevant to multiple contexts. The `$escaper` local variable is available inside `.phtml` templates and should be used instead of the deprecated `$block->escape{method}`. Use `$escaper` rather than `$block` as the use of `$block->escape{method}` has been deprecated.

*  **Support for new security.txt file**. This file is an industry-standard file on the server that helps security researchers report potential security issues to site administrators.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance. Supported versions of PHP and PHPUnit, Elasticsearch, MySQL, and other dependencies are listed in [Magento 2.4 technology stack requirements]({{page.baseurl}}/install-gde/system-requirements.html).

*  **PHP 7.4 support introduced and PHP 7.1 and 7.2 deprecated**. Magento 2.4.0 introduces support for PHP 7.4.

*  **Support for PHPUnit 9.x and deprecation of PHPUnit 6.5**. PHP 7.4 requires the use of the latest PHPUnit testing framework, which is PHPUnit 9.x. Magento Marketplace extension vendors must confirm that all new extension versions are compatible with PHP 7.4 and that all  unit and integration tests have been configured to be run with PHPUnit 9.

*  **Elasticsearch 7.6.x support**. Elasticsearch 7.6.x is now the default catalog search engine for Magento Commerce and Open Source. You cannot install or upgrade to Magento 2.4.0 without also installing Elasticsearch 7.6.x. Elasticsearch version 2.x code has been removed. Elasticsearch versions 5.x and 6.x have been deprecated and are no longer supported. See [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

*  **MySQL 8.0 support**. Magento 2.4.x supports MySQL 8.x. (Magento 2.4.0 was tested with MySQL 8.0.20.) Merchants are encouraged to migrate their deployments to MySQL 8.x to take advantage of its improved performance, security, and reliability. Although MySQL 5.7 is still supported for Magento 2.4.x, MySQL 5.6 is no longer supported. You cannot host Magento 2.4.x with a MySQL 5.6 database. See [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html).

*  **Removal of the MySQL catalog search engine**. The MySQL search engine has been removed from Magento 2.4.0 and replaced as the default search engine with Elasticsearch. Elasticsearch provides superior search capabilities as well as catalog performance optimizations.  All merchants must have Elasticsearch to install and deploy Magento 2.4.0. See [Check the catalog search engine]({{page.baseurl}}/comp-mgr/prereq/prereq-elasticsearch.html).

*  **MariaDB 10.4 support**. Support for MySQL 8.0 provides the opportunity for merchants to deploy MariaDB 10.4 with Magento. Although merchants can still use MariaDB 10.2 with Magento 2.4.0, we recommend upgrading to MariaDB 10.4 for improved performance and reliability. MariaDB 10.0 and 10.1 are no longer supported (as a result of removing support for MySQL 5.6 in this release).

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. See the [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251) DevBlog post.

*  **Decomposition of Magento Controllers** allows extension developers to implement ActionInterface directly without "layer supertype" classes. See the [Decomposition of Magento Controllers](https://community.magento.com/t5/Magento-DevBlog/Decomposition-of-Magento-Controllers/ba-p/430883) DevBlog post. _Enhancement started by Vinai Kopp in pull request [16268](https://github.com/magento/magento2/pull/16268) and finalized by Lukasz Bajsarowicz in pull request [26778](https://github.com/magento/magento2/pull/26778)_. [GitHub-9582](https://github.com/magento/magento2/issues/9582)

*  **Removal of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on the Magento Marketplace.

*  The **core Braintree module has been removed from the code base**. The Braintree Payments module now provides the same feature set. See [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html).

*  The Internet Explorer 11.x browser is no longer supported.

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Customer Account, Catalog, CMS, Import, Cart and Checkout, and B2B.

*  **Removal of core integration of third-party payment methods**. With this release, the Authorize.Net payment method integration has been removed from core code. Merchants should migrate to the official extension that is available on the Magento Marketplace. See the [Deprecation of Magento core payment integrations](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Magento-core-payment-integrations/ba-p/426445) devblog post. <!--- MC-29029-->

*  **Support for partial-word search for Elasticsearch (new default search engine)**. Elasticsearch now supports the use of  partial words in search terms for  product names and SKUs when using quick search. This capability was supported by the MySQL search engine, which has been deprecated and replaced by Elasticsearch in this release.

*  **PayPal JavaScript SDK upgrade**. We’ve migrated the PayPal Express Checkout integration to the latest PayPal JavaScript SDK, an SDK that  automatically collects and passes needed risk parameters to PayPal. The behavior of the PayPal Express Checkout payment method remains unchanged. However, upgrading this SDK to the latest version let merchants access the latest features and security enhancements. <!--- MC-30962-->

*  **Deprecation and removal of the Web Set Up Wizard**. You must use the command line to install or upgrade Magento 2.4.0. See [Install Magento](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli.html).

*  **Composer update plugin**. Composer plugin streamlines the  upgrade process by resolving changes that must be made to the root project `composer.json` file before updating to a new Magento product requirement. This plug-in protects against overwriting customizations. See [Upgrade using the Magento composer root plugin](https://devdocs.magento.com/guides/v2.4/comp-mgr/cli/cli-upgrade.html).

*  **Seller-assisted shopping**. This feature allows merchants to view the storefront on behalf of their customers. Customers opt to allow storefront access to their accounts. This community-developed feature includes an original extension developed by [MAGEFAN](https://magefan.com/). See [Seller Assisted Shopping](https://docs.magento.com/user-guide/configuration/customers/login-as-customer.html). Features include:

   *  ACL to control which administrators can log in to customer accounts can be configured on a per-website basis
   *  Compatibility with multiple websites and customer account scopes
   *  Orders placed on behalf of customers are logged in the storefront and Admin
   *  All sessions are destroyed following administrator logout, and administrators cannot access customer passwords.

### Performance improvements

*  **Improvements to customer data section invalidation logic**. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active.  (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations.) See [Private content]({{page.baseurl}}/extension-dev-guide/cache/page-caching/private-content.html).

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

See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions. For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

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
*  configuration settings now contain On-Site Messaging section for the control of the storefront display of Klarna promotional messaging. See [Setting Up Klarna](https://docs.magento.com/user-guide/payment/klarna-setup.html).

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

*  Magento now displays the following behaviors when your connection to Redis is interrupted. Previously, Magento did not reload the current page and displayed this error: `An error has happened during application run. See exception log for details`.

   *  Admin and storefront sessions expire
   *  Admin and storefront users must log in again
   *  Session data is saved to `var/session/`
   *  No error or exceptions are logged.

<!--- ENGCOM-6686-->

*  The `bin/magento setup:di:compile` command no longer fails with anonymous classes. _Fix submitted by Yevhen Sentiabov in pull request [26533](https://github.com/magento/magento2/pull/26533)_. [GitHub-26532](https://github.com/magento/magento2/issues/26532), [GitHub-21555](https://github.com/magento/magento2/issues/21555)

<!--- ENGCOM-5546-->

*  Problems with LESS compilation in Magento’s Luma theme when using an alternative LESS compiler than the one that ships with Magento by default have been resolved. _Fix submitted by Pieter Hoste in pull request [24003](https://github.com/magento/magento2/pull/24003)_. [GitHub-23619](https://github.com/magento/magento2/issues/23619)

<!--- ENGCOM-6367-->

*  You no longer need to have a writeable `env.php` file when switching to maintenance mode. Instead, Magento sets the `no-cache` headers for all frontend requests in maintenance mode (`Cache-Control`). Previously, you could not enable maintenance mode when `env.php` was read-only, and Magento tried to disable the FPC when switching into maintenance mode. _Fix submitted by Marco K̦pcke in pull request [25790](https://github.com/magento/magento2/pull/25790)_. [GitHub-24229](https://github.com/magento/magento2/issues/24229)

<!--- ENGCOM-7236-->

*  `db-ssl-verify`  no longer results in an undefined index error during a `ddev` setup. _Fix submitted by Daniel Ruf in pull request [26763](https://github.com/magento/magento2/pull/26763)_. [GitHub-26762](https://github.com/magento/magento2/issues/26762)

<!--- ENGCOM-6247-->

*  Composer dependencies have been updated to implement Redis key expiry, which has improved Redis performance. _Fix submitted by toxix in pull request [25488](https://github.com/magento/magento2/pull/25488)_. [GitHub-25487](https://github.com/magento/magento2/issues/25487)

### Adobe Stock Integration

<!--- ENGCOM-6507-->

*  CSS styles have been added to the Adobe Stock image display to support highlighting the selected image.  _Fix submitted by Serhiy Zhovnir in pull request [25864](https://github.com/magento/magento2/pull/25864)_. [GitHub-761](https://github.com/magento/adobe-stock-integration/issues/761)

<!--- ENGCOM-7021-->

*  Navigation through Adobe Stock preview images is no longer triggered by moving the input field cursor using arrow keys.  _Fix submitted by Adarsh Manickam in pull request [27138](https://github.com/magento/magento2/pull/27138)_. [GitHub-973](https://github.com/magento/adobe-stock-integration/issues/973)

<!-- ENGCOM-6840-->

*  Magento now caches messages for errors that occur when a customer tries to apply a filter to Adobe Stock images. _Fix submitted by Shankar Konar in pull request [26502](https://github.com/magento/magento2/pull/26502)_. [GitHub-863](https://github.com/magento/adobe-stock-integration/issues/863)

<!-- ENGCOM-7195-->

*  Magento no longer saves a preview of an Adobe Stock image when you move the cursor to the window’s left vertical scroll bar after clicking **Save Preview** but not confirming the save operation. _Fix submitted by Serhiy Zhovnir in pull request [27399](https://github.com/magento/magento2/pull/27399)_. [GitHub-1002](https://github.com/magento/adobe-stock-integration/issues/1002)

### Backend

<!--- MC-25036-->

*  Email templates (**Admin** > **Marketing** > **Communications** > **Email Templates**) can now be previewed from the Admin when JavaScript minification is enabled. Previously, when you tried to preview an email template, the Email Preview popup window was empty. [GitHub-25068](https://github.com/magento/magento2/issues/25068)

<!--- ENGCOM-6433-->

*  Administrators can now log into the Admin as expected after an administrator account with limited privileges has been created. Previously,  the Admin was not accessible. Instead, users with these permissions were redirected to the storefront with a 404 error. _Fix submitted by Eden Duong in pull request [25909](https://github.com/magento/magento2/pull/25909)_. [GitHub-25881](https://github.com/magento/magento2/issues/25881)

<!--- ENGCOM-6785-->

*  Magento no longer duplicates SEO data such as URL key, meta title, meta keywords, and  meta description when you duplicate a product.  _Fix submitted by Dasharth patel in pull request [26659](https://github.com/magento/magento2/pull/26659)_. [GitHub-26054](https://github.com/magento/magento2/issues/26054)

<!--- ENGCOM-6442-->

*  Magento no longer throws an error when you delete an image from a page while creating it from **Admin**  > **Content** > **Pages**  >  **Add New Page**. Previously, Magento threw this error in the developer console: `500 (Internal Server Error)`. _Fix submitted by Eden Duong in pull request [25924](https://github.com/magento/magento2/pull/25924)_. [GitHub-25893](https://github.com/magento/magento2/issues/25893)

### Bundle products

<!--- MC-25251-->

*  The performance of the `catalog_product_price` re-index operation for bundle products has been improved.

<!--- MC-29633-->

*  Administrators can no longer manually enter a tax class in the Admin for a bundle product when the bundle product’s **Tax Class** and **Dynamic Price** settings are disabled for the default store view. Previously, when an administrator unchecked the **Use Default Value** option next to **Tax Class**, Magento enabled the option, permitting an administrator to enter another value and save the product.

<!--- MC-30257-->

*  Bundle product prices are now calculated correctly on product pages.

<!--- MC-29745-->

*  You can now add any number of bundle products to your shopping cart without error. Previously, when you added a bundle product to your cart, then navigated to the cart, Magento displayed this error: `Please correct the quantity for some products`.

### Cache

<!--- ENGCOM-7114-->

*  The `cache.xsd` schema  from `Magento\Framework\Cache` has been refactored so that a cache type without an `instance` attribute no longer cause exceptions when you disable a module through the Admin cache management. Previously, when you created a cache type using `cache.xml` without the `instance` argument, Magento threw an exception when you tried to disable it.  _Fix submitted by Andrii Beziazychnyi in pull request [27307](https://github.com/magento/magento2/pull/27307)_. [GitHub-26224](https://github.com/magento/magento2/issues/26224)

<!-- ENGCOM-6834-->

*  `health_check.php` no longer fails if a database cache engine is configured in your Magento deployment. _Fix submitted by Andrii Beziazychnyi in pull request [25722](https://github.com/magento/magento2/pull/25722)_. [GitHub-25669](https://github.com/magento/magento2/issues/25669)

### Cart and checkout

<!--- MC-23870-->

*  Magento no longer throws an error during checkout when the **Synchronize with Backend** configuration setting is enabled. [GitHub-23833](https://github.com/magento/magento2/issues/23833)

<!--- MC-29786-->

*  Radio buttons for shipping methods are now enabled as expected in the checkout workflow.

<!--- MC-30258-->

*  The order review page in the checkout workflow now loads successfully for an order being shipped to multiple addresses when Terms and conditions with the **Applied Manually** setting is enabled. Previously, the Review page did not pass validation, and Magento displayed a 404 error.

<!--- MC-32330-->

*  Magento now displays the spinning icon while prices are updated on the cart.

<!--- MC-33230-->

*  Magento now displays an informative message when a product in the mini cart becomes out-of-stock before checkout. Once you’ve removed the out-of-stock item, Magento displays the **Proceed to Checkout** button. Previously, Magento did not display this button.

<!--- MC-31391-->

*  Magento now displays an informative error message when you try to add a product by clicking **Order by SKU** when the file for upload is corrupt. Previously, Magento displayed a blank page.

<!--- MC-32962-->

*  Magento now applies cart price rules to only the bundle product  child products that match the rule criteria. Previously, Magento applied the cart price rule to all child products that belonged to the bundle product.

<!--- ENGCOM-7485-->

*  `StorefrontMiniCartSection`  has been replaced by`StorefrontMinicartSection` in MFTF tests.   _Fix submitted by Andrii Kalinich in pull request [27955](https://github.com/magento/magento2/pull/27955)_. [GitHub-27897](https://github.com/magento/magento2/issues/27897)

<!--- ENGCOM-6389-->

*  Hardcoded references to the country selector component on the shipping address form have been removed.  _Fix submitted by Mateusz Krzeszowiak in pull request [25541](https://github.com/magento/magento2/pull/25541)_. [GitHub-22416](https://github.com/magento/magento2/issues/22416)

<!--- ENGCOM-6522-->

*  Magento no longer underlines the Delete icon in the shopping cart when the cursor hovers over the icon when viewing the storefront in Internet Explorer.  _Fix submitted by divyajyothi5321 in pull request [26173](https://github.com/magento/magento2/pull/26173)_. [GitHub-26164](https://github.com/magento/magento2/issues/26164)

<!--- ENGCOM-6615-->

*  Changing the billing street no longer changes a customer’s shipping address when a single address has been selected for both billing and shipping address. _Fix submitted by Yurii Tvardyi in pull request [26279](https://github.com/magento/magento2/pull/26279)_. [GitHub-26276](https://github.com/magento/magento2/issues/26276)

<!--- ENGCOM-6251-->

*  The promotion region of the mini cart is now rendered as expected. _Fix submitted by Matti Vapa in pull request [25375](https://github.com/magento/magento2/pull/25375)_. [GitHub-25373](https://github.com/magento/magento2/issues/25373)

### Cart price rule

<!--- MC-23986-->

*  Cart price rules that are based on payment methods are now applied during the checkout workflow. [GitHub-24206](https://github.com/magento/magento2/issues/24206)

<!--- ENGCOM-6550-->

*  Corrected the behavior of the Datepicker page element on **Admin** > **Marketing** > **Promotions** > **Catalog Price Rule**. _Fix submitted by Hitesh in pull request [26290](https://github.com/magento/magento2/pull/26290)_. [GitHub-26289](https://github.com/magento/magento2/issues/26289)

<!--- ENGCOM-7485-->

*  `StorefrontMiniCartSection`  has been replaced by `StorefrontMinicartSection` in MFTF tests.   _Fix submitted by Andrii Kalinich in pull request [27955](https://github.com/magento/magento2/pull/27955)_. [GitHub-27897](https://github.com/magento/magento2/issues/27897)

<!--- ENGCOM-5822-->

*  The unused coupon grid in the create new cart price rule workflow has been disabled. _Fix submitted by Eden Duong in pull request [24471](https://github.com/magento/magento2/pull/24471)_. [GitHub-24468](https://github.com/magento/magento2/issues/24468)

<!--- ENGCOM-6615-->

*  Changing the billing street no longer changes a customer’s shipping address when a single address has been selected for both the billing and shipping addresses. _Fix submitted by Yurii Tvardyi in pull request [26279](https://github.com/magento/magento2/pull/26279)_. [GitHub-26276](https://github.com/magento/magento2/issues/26276)

### Catalog

<!--- MC-25235-->

*  Magento no longer throws an error when you change the name of a tiered product that is included in a scheduled update. Previously, when you tried to save the product with a new name, Magento displayed this error: `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '3-0-0-2.0000-0' for key 'UNQ_EBC6A54F44DFA66FA9024CAD97FED6C7', query was: INSERT INTO catalog_product_entity_tier_price (all_groups, customer_group_id, qty, value, website_id, percentage_value, row_id) VALUES (?, ?, ?, ?, ?, ?, ?)`

<!--- MC-29023-->

*  Custom attribute values can now be saved as expected from the Admin.

<!--- MC-29775-->

*  The Recently View Products feature now shows products that are associated only with the current store view in multi-store deployments when **Stores** > **Configurations** > **Catalog** > **Recently Viewed/Compared Products** > **Show for Current** is set to **store view**. Previously, Magento displayed recently viewed products from all websites, no matter which website the product was assigned to.

<!--- MC-29896-->

*  Magento now displays product images in the mini cart without distortion. Previously, Magento stretched the image in the mini cart to fill the entire width and height of the image container.

<!--- MC-29866-->

*  The `getBasePrice` function now returns a float value as expected rather than a string.

<!--- MC-30229-->

*  The product compare feature now works as expected. It now displays only products in the current user’s compare list.

<!--- MC-30234-->

*  You can now assign a default watermark to a theme. Previously, after assigning the watermark, Magento threw a fatal error.

<!--- MC-30540-->

*  You can now successfully edit a configurable product with many variants (approximately 5,000) from the Admin. Previously, when you tried to edit a configurable product with many subproducts, Magento displayed this error: `Warning: DOMDocumentFragment::appendXML(): Entity: line 1: parser error : CData section too big found in /vendor/magento/framework/View/TemplateEngine/Xhtml/Template.php on line 60`

<!--- MC-30734-->

*  Sorting on attribute sets on **Admin** > **Catalog** > **Products** is now based on alphabetical order as expected.

<!--- MC-30794-->

*  The Recently Viewed Products feature now works as expected in multi-store deployments.

<!--- MC-31838-->

*  The **Product in Websites** checkbox of the new product page is now enabled by default for restricted administrators in multi-site deployments. Previously, the checkbox for the non-default website was not preselected, and if the administrator left the checkbox unselected, Magento displayed an error message.

<!--- MC-32772-->

*  `addToCart` events are now tracked as expected in the data layer. Previously, after changing the configurable options for a product, then clicking **Add to cart**, the new `addToCart` event was not added to the data layer.

<!--- MC-29449-->

*  The mini cart and Admin shopping cart (**Admin** > **Customers** > **Manage Shopping Cart**) now display correct product prices when a Catalog Price Rule is applied. Previously, the storefront shopping cart displayed the correct product price, but the mini cart and Admin shopping cart displayed the original product price.

<!--- MC-30777-->

*  Filtering on the Admin product grid website column now works as expected. Previously, filter results did not display the correct number of products, but consistently displayed the total number of products as 1.

<!--- MC-31432-->

*  Price condition uses `catalog_product_entity_decimal` to filter by price. However, this table contains no records for configurable, bundle dynamic, and grouped products because these products have no fixed price. The correct table to use for filtering by price is `catalog_product_index_price`.

<!--- ENGCOM-7104-->

*  The Admin catalog and product lists now display currency symbols in the MSRP, Cost, and Special Price columns. _Fix submitted by Sergiy Vasiutynskyi in pull request [27261](https://github.com/magento/magento2/pull/27261)_. [GitHub-21910](https://github.com/magento/magento2/issues/21910), [GitHub-20906](https://github.com/magento/magento2/issues/20906), [GitHub-20472](https://github.com/magento/magento2/issues/20472)

<!--- ENGCOM-6375-->

*  The Add for Customer Group Price pop-up window (**Admin** > **Catalog**  > **Products** > **New Product** > **Advanced pricing**) now closes as expected when you click the close icon. _Fix submitted by Ashna-Jahan in pull request [25759](https://github.com/magento/magento2/pull/25759)_. [GitHub-25433](https://github.com/magento/magento2/issues/25433)

<!--- ENGCOM-6300-->

*  The sample description that is provided for a newly product’s description and title no longer contains double quotation marks.  _Fix submitted by Nathan Morgan in pull request [25655](https://github.com/magento/magento2/pull/25655)_. [GitHub-25654](https://github.com/magento/magento2/issues/25654)

<!--- ENGCOM-6424-->

*  Magento no longer throws an error when you try to  filter products on the Category page using an invalid price. Previously, Magento logged this error in the system log. _Fix submitted by Ihor Sviziev in pull request [25912](https://github.com/magento/magento2/pull/25912)_. [GitHub-25911](https://github.com/magento/magento2/issues/25911)

<!--- ENGCOM-6455-->

*  You can now navigate through multi-page category search results. Previously, Magento created duplicate pages of search results when you tried to use the Back button to return to the first page of results. _Fix submitted by Douglas Radburn in pull request [25337](https://github.com/magento/magento2/pull/25337)_. [GitHub-14971](https://github.com/magento/magento2/issues/14971)

<!--- ENGCOM-6194-->

*  Corrected the return type to `string|null` for the `getSourceModel` method in the `Eav\Attribute.php` class. _Fix submitted by Mychailo in pull request [25333](https://github.com/magento/magento2/pull/25333)_. [GitHub-25278](https://github.com/magento/magento2/issues/25278)

<!--- ENGCOM-6625-->

*  Saving a new (duplicated) product no longer results in the duplication of the product’s images hundreds of times. _Fix submitted by Jeroen in pull request [25875](https://github.com/magento/magento2/pull/25875)_. [GitHub-9466](https://github.com/magento/magento2/issues/9466)

<!--- ENGCOM-6818-->

*  Magento no longer throws a JavaScript error when you delete a product with a custom option of type `file` during creation of an order from the Admin.  _Fix submitted by adrian-martinez-interactiv4 in pull request [24843](https://github.com/magento/magento2/pull/24843)_. [GitHub-24842](https://github.com/magento/magento2/issues/24842)

<!--- ENGCOM-6959-->

*  Creating a product with no image by using `product_page_image_large` in your layout results in a placeholder image being displayed as expected. Previously, Magento threw this error: `Fatal error: PHP Fatal error: Uncaught TypeError: Argument 1 passed to Magento\Catalog\Block\Product\ImageFactory::getRatio() must be of the type integer, null given`. _Fix submitted by Lukasz Bajsarowicz in pull request [26974](https://github.com/magento/magento2/pull/26974)_. [GitHub-26973](https://github.com/magento/magento2/issues/26973)

<!--- ENGCOM-6983-->

*  You can use the `POST /V1/:sku/links` endpoint to set product links with an empty array of products when the product has existing links. Previously, Magento threw an error. _Fix submitted by Sathish Subramanian in pull request [26979](https://github.com/magento/magento2/pull/26979)_. [GitHub-26800](https://github.com/magento/magento2/issues/26800)

<!--- ENGCOM-7151-->

*  You can now use the Actions dropdown menu from the Products grid to specify whether a product has weight when you update multiple products’s attributes from the Admin.  _Fix submitted by Bartomiej Szubert in pull request [26075](https://github.com/magento/magento2/pull/26075)_. [GitHub-6310](https://github.com/magento/magento2/issues/6310)

<!--- ENGCOM-7453-->

*  Validation logic has been added to the **Products per Page on Grid Allowed Values** and **Products per Page on Grid Default Value** fields of the store configuration page. Previously, store administrators could enter unavailable values in these fields.  _Fix submitted by Lukasz Bajsarowicz in pull request [27093](https://github.com/magento/magento2/pull/27093)_. [GitHub-27089](https://github.com/magento/magento2/issues/27089)_

### Catalog widget

<!--- MC-29167-->

*  The `CatalogWidget` products list now works as expected with anchor categories, and products from anchor categories are now matched and displayed. Previously, when you selected a parent category that was an anchor, but that did not contain assigned products, products were not visible in the widget.

<!--- MC-30260-->

*  Magento now displays all children of a selected parent category as expected. Previously, if you selected a parent category that was an anchor, but that did not contain assigned products, Magento did not display all nested products.

<!--- MC-31171-->

*  The Recently Viewed Products widget now works correctly when **Stores** > **Configuration** > **Catalog** > **Catalog** > **Recently Viewed/Compared** > **Synchronize widget products with backend storage** is set to **Yes**.

### Cleanup

<!--- ENGCOM-6573-->

*  Removed an extra closing tag from module XML. _Fix submitted by Tejash Kumbhare in pull request [26339](https://github.com/magento/magento2/pull/26339)_. [GitHub-26338](https://github.com/magento/magento2/issues/26338)

<!--- ENGCOM-6521-->

*  Corrected misalignment of the **My billing and shipping address are the same** checkbox on the Review and Payments page section of the checkout workflow.  _Fix submitted by divyajyothi5321 in pull request [26169](https://github.com/magento/magento2/pull/26169)_. [GitHub-26168](https://github.com/magento/magento2/issues/26168)

<!--- ENGCOM-6581-->

*  Removed unnecessary white space between the field labels and asterisks on the Shipping  Address section of the checkout workflow.  _Fix submitted by Daniel Ruf in pull request [26285](https://github.com/magento/magento2/pull/26285)_. [GitHub-26275](https://github.com/magento/magento2/issues/26275)

<!--- ENGCOM-6480-->

*  Corrected misalignment of the radio buttons on the Shipping methods section of the checkout workflow.  _Fix submitted by Hitesh in pull request [25966](https://github.com/magento/magento2/pull/25966)_. [GitHub-25962](https://github.com/magento/magento2/issues/25962)

<!--- ENGCOM-6579-->

*  Corrected inconsistent menu spacing in mobile view. _Fix submitted by Hitesh in pull request [26238](https://github.com/magento/magento2/pull/26238)_. [GitHub-26235](https://github.com/magento/magento2/issues/26235)

<!--- ENGCOM-7225-->

*  Corrected misalignment of the mini cart Edit and Remove icons in mobile view.  _Fix submitted by Vasilii Burlacu in pull request [27493](https://github.com/magento/magento2/pull/27493)_. [GitHub-26652](https://github.com/magento/magento2/issues/26652)

<!--- ENGCOM-6967-->

*  Corrected misalignment of the tax rate zip/post code range and checkbox on the Add New Tax Rate/Zip Code page (**Admin**  >  **Store**  >  **Taxes** >  **Tax Zones and Rates**). _Fix submitted by Sathish Subramanian in pull request [26932](https://github.com/magento/magento2/pull/26932)_. [GitHub-26917](https://github.com/magento/magento2/issues/26917)

<!--- ENGCOM-7237-->

*  The link from the Setup Wizard to the Admin now works as expected. _Fix submitted by Oleh Usik in pull request [26100](https://github.com/magento/magento2/pull/26100)_. [GitHub-24990](https://github.com/magento/magento2/issues/24990)

<!--- ENGCOM-6531-->

*  Sorting has been disabled on the status column of the Cache Management grid in the Admin. _Fix submitted by Sathish Subramanian in pull request [26215](https://github.com/magento/magento2/pull/26215)_. [GitHub-26208](https://github.com/magento/magento2/issues/26208)

<!--- ENGCOM-7015-->

*  Corrected misalignment of page elements on the **Admin** >  **Stores**  >  **Attributes**  > **Ratings** >  **Add new ratings** dialog. _Fix submitted by Sathish Subramanian in pull request [27014](https://github.com/magento/magento2/pull/27014)_. [GitHub-26992](https://github.com/magento/magento2/issues/26992)

<!--- ENGCOM-6485-->

*  Corrected misalignment of the calendar icon on the Add Design Change page. _Fix submitted by Eduard Chitoraga in pull request [26063](https://github.com/magento/magento2/pull/26063)_. [GitHub-20379](https://github.com/magento/magento2/issues/20379)

<!--- ENGCOM-6447-->

*  Removed unnecessary space in submenu display on the home page hover menu. _Fix submitted by Hitesh in pull request [25973](https://github.com/magento/magento2/pull/25973)_. [GitHub-25972](https://github.com/magento/magento2/issues/25972)

<!--- ENGCOM-6534-->

*  Corrected misalignment of the price labels on the storefront product details page. _Fix submitted by divyajyothi5321 in pull request [26237](https://github.com/magento/magento2/pull/26237)_. [GitHub-25936](https://github.com/magento/magento2/issues/25936)

<!--- ENGCOM-6536-->

*  Corrected misalignment of the out-of-stock text in relation to the  **Add to cart** button on the product list page in mobile view.  _Fix submitted by divyajyothi5321 in pull request [26183](https://github.com/magento/magento2/pull/26183)_. [GitHub-26181](https://github.com/magento/magento2/issues/26181)

<!--- ENGCOM-6458-->

*  The integration success message displayed on  **Admin**  > **System** > **Extensions** > **Integrations** is now displayed correctly. _Fix submitted by divyajyothi5321 in pull request [26011](https://github.com/magento/magento2/pull/26011)_. [GitHub-25930](https://github.com/magento/magento2/issues/25930)

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

*  New CMS pages are now added as expected to a website’s store page hierarchy.

<!--- ENGCOM-7033-->

*  The CMS  page custom layout update logic  has been improved. Magento now applies specific layout changes from `cms_page_view_selectable_home_somechanges.xml`. _Fix submitted by Sergiy Vasiutynskyi in pull request [27131](https://github.com/magento/magento2/pull/27131)_. [GitHub-26758](https://github.com/magento/magento2/issues/26758)

### Configurable products

<!--- MC-23546-->

*  Child products of a configurable product can now be successfully disabled through the API.

<!--- MC-30391-->

*  Cart price rules with a **condition set as Category (Parent only)** now consistently work as expected.

<!--- MC-30989-->

*  You can now add a configurable product to the cart from the Cross-Sells tab. When you select a product and click **Add to Cart** from this tab, you are now taken to the product details page, where you can select specific product options. Previously, Magento redirected you to a 404 error page.

<!--- MC-32411-->

*  Magento no longer links a simple product to a configurable product when the API call to link these products fails.

<!--- ENGCOM-6483-->

*  Corrected the rendering of SKUs in the Current Variations list for a configurable product. _Fix submitted by KaushikChavda in pull request [26007](https://github.com/magento/magento2/pull/26007)_. [GitHub-25591](https://github.com/magento/magento2/issues/25591)

<!--- ENGCOM-6460-->

*  You can now save `system.xml` configuration information  by entering values in  **Admin** > **System** > **Configuration** in fields that do not have associated labels. _Fix submitted by Andrii  Chorniy in pull request [25985](https://github.com/magento/magento2/pull/25985)_. [GitHub-23899](https://github.com/magento/magento2/issues/23899)

<!--- ENGCOM-6689-->

*  The performance of `\Magento\ConfigurableProduct\Model\Product\Type\Configurable::isSalable` has been optimized.  _Fix submitted by Stanislav Ilnytskyi in pull request [26071](https://github.com/magento/magento2/pull/26071)_. [GitHub-26065](https://github.com/magento/magento2/issues/26065)

<!--- ENGCOM-6992-->

*  The logic that is responsible  for updating configurable product product images has been improved. Previously,  simple products associated with a configurable product displayed only the default image associated with the configurable product, and  Magento sometimes displayed the wrong main image for the product. _Fix submitted by Sergiy Vasiutynskyi in pull request [26560](https://github.com/magento/magento2/pull/26560)_. [GitHub-26473](https://github.com/magento/magento2/issues/26473), [GitHub-26856](https://github.com/magento/magento2/issues/26856), [GitHub-26858](https://github.com/magento/magento2/issues/26858)

<!--- ENGCOM-6520-->

*  Magento now displays a product’s special price as expected when you select a discounted option of a configurable product. Previously, `class="normal-price"` was not changed to `class="special-price"` when a discounted option was selected. _Fix submitted by Ravi Chandra in pull request [26170](https://github.com/magento/magento2/pull/26170)_. [GitHub-24972](https://github.com/magento/magento2/issues/24972)

### Cookies

<!--- MC-24182-->

*  The `setRedirectCookie` and `clearRedirectCookie` functions now work as expected. Previously, these functions sent cookies to the browser, but all cookie parameters were missing. [GitHub-24547](https://github.com/magento/magento2/issues/24547)

<!--- ENGCOM-6891-->

*  Metadata has been added to the `setRedirectCookie` and `clearRedirectCookie` functions.  _Fix submitted by Alexander Lukyanov in pull request [24612](https://github.com/magento/magento2/pull/24612)_. [GitHub-24547](https://github.com/magento/magento2/issues/24547)

### Custom customer attributes

<!--- MC-32301-->

*  Magento no longer throws an error when you include an empty customer attribute field in the **Forms to Use In** field while creating a Company account on the storefront. Previously, Magento threw this error: `PHP Fatal error: Uncaught TypeError: Argument 2 passed to Magento\Eav\Model\Attribute\Data\Text::validateLength() must be of the type string, null given`.

### Customer

<!--- MC-29102-->

*  Customers who are subscribed to newsletters as a guest are no longer unsubscribed after registering for a new account.

<!--- MC-29841-->

*  Magento now uses a new `PHPSession` for each change of password.

<!--- MC-30650-->

*  You can now successfully create a customer and associate it with a particular website using the Associate to Website dropdown menu on **Customers** > **All Customers** > **Add new Customer**. Previously, when you tried to associate a new customer with the non-default website in a multi-site deployment, Magento displayed this error: `The store view is not in the associated website`.

<!--- MC-29946-->

*  Magento now saves the information a customer enters in the default billing and shipping fields during checkout when the transaction is initially declined due to an invalid credit card but later completed successfully. Previously, although Magento created the order when the customer entered valid payment information, it did not update the default billing or shipping addresses in the My Account section of the checkout workflow.

<!--- MC-32325-->

*  Magento now honors customer group settings when you create a new customer from the Admin in a multi-site deployment.

<!--- MC-31481-->

*  Magento now successfully imports customer data using the **Customer and Addresses (single file)** option when `cron` is enabled and the Customer Grid indexer is set to **Update By Schedule**. After `cron` executes, the imported customer information is available in the Admin as expected. Previously, Magento imported the customer data, but did not update the customer grid with the newly imported customer records.

<!--- MC-31117-->

*  You can now create a new customer from the storefront when the date of birth is required. Previously, you could not create a new customer when this field was required, even when you entered valid DOB values. [GitHub-26700](https://github.com/magento/magento2/issues/26700)

<!--- MC-31945-->

*  Customer creation from the Admin now honors the default customer group setting as expected.

<!--- MC-31425-->

*  The `PHPSessionId` is now changed as expected after a customer logs out and then logs back in.

<!--- MC-32152-->

*  The Admin view of a customer cart now displays all the products that were added to the cart from multiple websites in a multi-website deployment. Previously, when a customer added a product to their cart from a non-default website, the product was not displayed in the Admin even when **Share customer account** is set to **Global**.

<!--- ENGCOM-6667-->

*  Magento now displays only the products that the customer has placed in their cart when the cart is viewed from the Admin. Previously, a customer’s shopping cart displayed all the products in the catalog when viewed from the Admin. _Fix submitted by Ravinder in pull request [26489](https://github.com/magento/magento2/pull/26489)_. [GitHub-26437](https://github.com/magento/magento2/issues/26437)

<!--- ENGCOM-7036-->

*  Validation now works as expected for the **Date of birth** field when editing a customer from the Admin. Previously, Magento did not factor in the user locale, and for some birthdates displayed this error: `The Date of Birth should not be greater than today`.   _Fix submitted by Sergiy Vasiutynskyi in pull request [27149](https://github.com/magento/magento2/pull/27149)_. [GitHub-27027](https://github.com/magento/magento2/issues/27027)

<!--- ENGCOM-6208-->

*  The email field is no longer required when placing an order from the Admin.  _Fix submitted by solwininfotech in pull request [24479](https://github.com/magento/magento2/pull/24479)_. [GitHub-22251](https://github.com/magento/magento2/issues/22251)

<!--- ENGCOM-6423-->

*  The My Account dashboard now displays email address values correctly in mobile view. _Fix submitted by Eden Duong in pull request [25942](https://github.com/magento/magento2/pull/25942)_. [GitHub-25935](https://github.com/magento/magento2/issues/25935)

<!--- ENGCOM-7034-->

*  Clicking the **Create an Account** button on the customer registration form multiple times no longer submits the registration request more than once. _Fix submitted by princeCB in pull request [26642](https://github.com/magento/magento2/pull/26642)_. [GitHub-26590](https://github.com/magento/magento2/issues/26590)

<!--- MC-29102-->

*  Customers who are subscribed to newsletters as a guest are no longer unsubscribed after registering for a new account.

<!--- MC-29841-->

*  Magento now uses a new `PHPSession` for each change of password.

<!--- MC-30650-->

*  You can now successfully create a customer and associate it with a particular website using the Associate to Website dropdown menu on **Customers** > **All Customers** > **Add new Customer**. Previously, when you tried to associate a new customer with the non-default website in a multi-site deployment, Magento displayed this error: `The store view is not in the associated website`.

<!--- MC-29946-->

*  Magento now saves the information a customer enters in the default billing and shipping fields during checkout when the transaction is initially declined due to an invalid credit card but later completed successfully. Previously, although Magento created the order when the customer entered valid payment information, it did not update the default billing or shipping addresses in the My Account section of the checkout workflow.

<!--- MC-32325-->

*  Magento now honors customer group settings when you create a new customer from the Admin in a multi-site deployment.

<!--- MC-31481-->

*  Magento now successfully imports customer data using the **Customer and Addresses (single file)** option when `cron` is enabled and the Customer Grid indexer is set to **Update By Schedule**. After `cron` executes, the imported customer information is available in the Admin as expected. Previously, Magento imported the customer data, but did not update the customer grid with the newly imported customer records.

<!--- MC-31117-->

*  You can now create a new customer from the storefront when the date of birth is required. Previously, you could not create a new customer when this field was required, even when you entered valid DOB values. [GitHub-26700](https://github.com/magento/magento2/issues/26700)

<!--- MC-31945-->

*  Customer creation from the Admin now honors the default customer group setting as expected.

<!--- MC-31435-->

*  The `PHPSessionId` is now changed as expected after a customer logs out and then logs back in.

<!--- MC-32152-->

*  The Admin view of a customer cart now displays all the products that were added to the cart from multiple websites in a multi-website deployment. Previously, when a customer added a product to their cart from a non-default website, the product was not displayed in the Admin even when **Share customer account** is set to **Global**.

<!--- ENGCOM-7036-->

*  Validation now works as expected for the **Date of birth** field when editing a customer from the Admin. Previously, Magento did not factor in the user locale, and for some birthdates displayed this error: `The Date of Birth should not be greater than today`.   _Fix submitted by Sergiy Vasiutynskyi in pull request [27149](https://github.com/magento/magento2/pull/27149)_. [GitHub-27027](https://github.com/magento/magento2/issues/27027)

<!--- ENGCOM-6208-->

*  The email field is no longer required when placing an order from the Admin.  _Fix submitted by solwininfotech in pull request [24479](https://github.com/magento/magento2/pull/24479)_. [GitHub-22251](https://github.com/magento/magento2/issues/22251)

<!--- ENGCOM-6667-->

*  Magento now displays only the products that the customer has placed in their cart when the cart is viewed from the Admin. Previously, a customer’s shopping cart displayed all the products in the catalog when viewed from the Admin. _Fix submitted by Ravinder in pull request [26489](https://github.com/magento/magento2/pull/26489)_. [GitHub-26437](https://github.com/magento/magento2/issues/26437)

<!--- ENGCOM-6423-->

*  The My Account dashboard now displays the displays email address values correctly in mobile view. _Fix submitted by Eden Duong in pull request [25942](https://github.com/magento/magento2/pull/25942)_. [GitHub-25935](https://github.com/magento/magento2/issues/25935)

<!--- ENGCOM-7034-->

*  Clicking the **Create an Account** button on the customer registration form multiple times no longer submits the registration request more than once. _Fix submitted by princeCB in pull request [26642](https://github.com/magento/magento2/pull/26642)_. [GitHub-26590](https://github.com/magento/magento2/issues/26590)

### Directory

<!--- MC-33168-->

*  The Default State dropdown menu is now populated by data that is based on the allowed countries that have been assigned to the selected website when you configure a value for the **Default Tax Destination Calculation** field. Previously, this dropdown listed the countries that were assigned to the default website.

### Downloadable

<!--- MC-32306-->

*  You can now use an import file to update downloadable products in bulk by SKU and description. Previously, validation errors occurred, and import failed.

### EAV

<!--- MC-29999-->

*  Magento now respects store-specific settings that determine whether the telephone number field of the checkout workflow is required in a multi-site deployment. Previously, in deployments where one store required this field in the checkout workflow and another store did not, customers who did not complete this field while checking out on the store that did not require it encountered this error: `Please check the shipping address information. "telephone" is required. Enter and try again`.

<!--- ENGCOM-6489-->

*  EAV sort order by `attribute option_id` now works as expected. _Fix submitted by Tan Sezer in pull request [24360](https://github.com/magento/magento2/pull/24360)_. [GitHub-24357](https://github.com/magento/magento2/issues/24357)

<!--- ENGCOM-7082-->

*  You can now create a new product after adding a new attribute via REST and assigning it to an attribute set from the Admin. Previously, Magento threw a 500 error.  _Fix submitted by Sergiy Vasiutynskyi in pull request [27191](https://github.com/magento/magento2/pull/27191)_. [GitHub-26827](https://github.com/magento/magento2/issues/26827)

### Email

<!--- MC-32842-->

*  The authorization emails that are sent to a customer when they request a return now contain the RMA status as expected. Previously, this email displayed an empty string instead of the expected return status.

<!--- MC-32864-->

*  Customers are no longer redirected away from the current website when they report a forgotten password in multi-site deployments where customer accounts are shared globally. Previously, customers were redirected to the website on which the account was created.

<!--- MC-31544-->

*  Order confirmation emails that are sent to customers now include the list of ordered items as expected. Previously, when you created an email template in the Admin by loading and saving the default template, emails generated from this template did not include the list of ordered items. [GitHub-26882](https://github.com/magento/magento2/issues/26882)

### Frameworks

*  Dependencies on Zend Framework have been migrated to the [Laminas project](https://getlaminas.org/about/foundation) to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. _Fix submitted by Ihor Sviziev in pull request [26436](https://github.com/magento/magento2/pull/26436)_. [GitHub-26335](https://github.com/magento/magento2/issues/26335)

<!--- MC-25257-->

*  Special price range settings (from/to dates) now work correctly for administrator accounts using a Dutch locale.

<!--- MC-29388-->

*  `php bin/magento cron:run` no longer processes items from the change log table multiple times. Previously, when you had more than 100000 new versions in the change log table, actions could be called several times for the same `entity id`.

*  `php bin/magento setup:cron:run` command has now been removed. References to this in crontabs should be removed when upgrading.

*  The `update/cron.php` file has been removed in Magento 2.4.0, if this file exists on your installation, it can be safely removed. Also, remove references to this file in crontabs when upgrading.

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

*  Non-cacheable blocks added to the default layout in reference instructions for non-existent (undeclared) components on the page no longer affect page caching. Adding non-cacheable blocks to default layout handlers renders all Magento pages non-cacheable. This results from the layout generation process: During layout generation, Magento collects all available layout handles for a particular page and merges instructions from them into the page’s final layout structure. The default layout handle is used as a basic handle for every page. As a result, layout updates that are declared for the default handler appear on every Magento page. [GitHub-9041](https://github.com/magento/magento2/issues/9041)

<!--- MC-31920-->

*  The MySQL lock manager is now the primary lock manager. As a result,  the minimal required version of MySQL is 5.7.9.

<!--- ENGCOM-6431-->

*  `queue_consumer.xml` now allows numbers in the `handler` class. Previously, when  a handler contained a number in its path,  XSD validation failed. _Fix submitted by Eden Duong in pull request [25952](https://github.com/magento/magento2/pull/25952)_. [GitHub-25731](https://github.com/magento/magento2/issues/25731)

<!--- ENGCOM-6902-->

*  An incorrect `@var` reference in the `doc` block of the class member variable `$queueIterator` in class `\Magento\Framework\MessageQueue\Topology\Config` has been corrected. _Fix submitted by Artem Voloznov in pull request [24976](https://github.com/magento/magento2/pull/24976)_. [GitHub-24971](https://github.com/magento/magento2/issues/24971)

<!-- ENGCOM-5305 6684-->

*  JavaScript page load listeners are now triggered to fire when a document is no longer `loading` rather than waiting until it is marked as `complete` as waiting until the document is marked as `complete` can lead to severe delays in rendering JavaScript content. _Fix submitted by John Hughes in pull request [23313](https://github.com/magento/magento2/pull/23313) and  pull request [50](https://github.com/magento/partners-magento2ee/pull/50)_. [GitHub-22909](https://github.com/magento/magento2/issues/22909)

<!--- ENGCOM-6305-->

*  Magento now displays the following informative message when you try to add a product to your wishlist with a quantity of 0 or negative number: `Please enter a valid number in this field`. Previously, Magento displayed this error: `We can't update your Wish List right now`. _Fix submitted by Pawe Tylek in pull request [25641](https://github.com/magento/magento2/pull/25641)_. [GitHub-25032](https://github.com/magento/magento2/issues/25032)

<!-- ENGCOM-7071-->

*  Magento no longer supports inheritance of DTO classes from the `Magento\Framework\Api\AbstractExtensibleObject` class. Missing PHP annotation `@api`  has been added to `AbstractExtensibleModel`, and the missing `@deprecated`  annotation has been added to `AbstractExtensibleObject`.  _Fix submitted by Alexander Taranovsky in pull request [22011](https://github.com/magento/magento2/pull/22011)_. [GitHub-22010](https://github.com/magento/magento2/issues/22010)

<!--- ENGCOM-6552-->

*  You can now save products as expected after changing a product-related date (for example, `news_from_date`, `news_to_date`, `special_price_from_date`, `special_price_to_date`)  in stores implementing non-English locales. Previously, Magento threw an error similar to this:  `Invalid input datetime format of value '22/5/2019`.

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

*  The TinyMCE4 editor now supports all HTML tags.

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

<!--- MC-29998-->

*  Magento now redirects you to the home page of the appropriate store view when you change language on CMS pages in a multi-store deployment. Previously, Magento displayed a 404 page when you changed language on certain CMS pages.

<!--- MC-30162-->

*  Order queries (`SalesOrderIndexGridAsyncInsertCron`) have been refactored to reduce the size of the data set returned and the frequency of the queries.

<!--- MC-32371-->

*  You can now successfully create a CMS page and assign it to the website root category in the CMS hierarchy.

<!--- MC-32783-->

*  Guests can now display a product price or add a product to the cart when category permissions are enabled (for example, when the **Not logged in** customer group has been granted these privileges).

<!--- MC-32815-->

*  Product rules now apply to out-of-stock products as expected. Previously, Magento did not display out-of-stock products in the related products list even when the rule was configured to display out-of-stock products.

<!--- MC-33222-->

*  Clicking the **Track shipping** button for an order from the Admin now results in tracking information being displayed in a pop-up window as expected. Previously, this link took the administrator to the Log in page.

<!--- MC-31305-->

*  Magento now displays an informative error message and continues to display the registration form as expected if an error occurs when a customer tries to complete a registration form that contains a multi-select customer attribute. Previously, Magento displayed a 500 error.

<!--- MC-32224-->

*  Magento now displays the **Credit memo** button after the partial refund of an order. Previously, Magento did not display this button after you created a partial refund, and you could not create a credit memo for the rest of the order.

<!--- MC-31878-->

*  Bulk order updates through REST now modify the order status as expected. Previously, Magento threw this error: `report.ERROR: Property "AdditionalInformation" does not have accessor method "setAdditionalInformation" in class "Magento\Sales\Api\Data\OrderPaymentInterface".`

<!--- MC-30398-->

*  Attribute filters are now displayed as expected in the Shopping Options block of the Category page.

<!--- ENGCOM-7175-->

*  Customer billing and shipping addresses are now displayed as expected under the Addresses tab on the Admin Customer Edit page when displayed in Internet Explorer. _Fix submitted by Vasilii Burlacu in pull request [27383](https://github.com/magento/magento2/pull/27383)_. [GitHub-27370](https://github.com/magento/magento2/issues/27370)

<!--- ENGCOM-6546-->

*  All bookmark views now remain editable when you delete one. Previously, all bookmark views became uneditable after you deleted the first view for accounts with multiple bookmark views. _Fix submitted by Bartomiej Szubert in pull request [26263](https://github.com/magento/magento2/pull/26263)_. [GitHub-14913](https://github.com/magento/magento2/issues/14913)

<!--- ENGCOM-7042-->

*  Layered navigation no longer breaks HTML5 validation of the swatch module. Previously, HTML validation errors occurred for attributes that were not defined in the [W3C markup validation service](http://validator.w3.org/), but those attributes have been changed to data attributes. _Fix submitted by Nirav Patel in pull request [26055](https://github.com/magento/magento2/pull/26055)_. [GitHub-22363](https://github.com/magento/magento2/issues/22363)

<!--- ENGCOM-7065-->

*  An unused `require.JS` alias (`critical-css-loader``) has been removed from app/code/Magento/Theme/view/frontend/requirejs-config.js`. _Fix submitted by Tu Nguyen in pull request [26987](https://github.com/magento/magento2/pull/26987)_. [GitHub-26963](https://github.com/magento/magento2/issues/26963)

<!--- ENGCOM-6242-->

*  Magento now implements PHP7.x’s [throwable interface](https://www.php.net/manual/en/class.throwable.php) to enable the catching of all errors that might potentially expose sensitive information such as passwords. _Fix submitted by miszyman in pull request [25250](https://github.com/magento/magento2/pull/25250)_. [GitHub-23350](https://github.com/magento/magento2/issues/23350)

<!--- ENGCOM-6284-->

*  Pressing the ESC key when entering the name of a new folder on the create a new folder popup window now closes the popup as expected without creating the folder.  _Fix submitted by Shankar Konar in pull request [25349](https://github.com/magento/magento2/pull/25349)_. [GitHub-572](https://github.com/magento/magento2/issues/572)

<!--- ENGCOM-7464-->

*  An incorrectly nested HTML structure has been corrected. Previously, this structure resulted in a broken layout for the list of related, up-sell, or cross-sell products. _Fix submitted by Pieter Hoste in pull request [27926](https://github.com/magento/magento2/pull/27926)_. [GitHub-27920](https://github.com/magento/magento2/issues/27920)

<!--- ENGCOM-7144-->

*  Removed duplicated call to `addToolbarBlock`, which had resulted in two similar conditions in `ORDER BY`.  _Fix submitted by Vasilii Burlacu in pull request [27263](https://github.com/magento/magento2/pull/27263)_. [GitHub-26708](https://github.com/magento/magento2/issues/26708)

<!--- ENGCOM-6014-->

*  Merchants can now set an expiration date on Admin user accounts. _Fix submitted by Laura Folco in pull request [22837](https://github.com/magento/magento2/pull/22837)_. [GitHub-22833](https://github.com/magento/magento2/issues/22833)

<!--- ENGCOM-7071-->

*  We’ve added the `@api`  PHP annotation to `AbstractExtensibleModel`, the `@deprecated` PHP annotation to `AbstractExtensibleObject`, and `@see` to `AbstractExtensibleModel`.  _Fix submitted by Alexander Taranovsky in pull request [22011](https://github.com/magento/magento2/pull/22011)_. [GitHub-22010](https://github.com/magento/magento2/issues/22010)

### GraphQL

<!--- ENGCOM-7074-->

*  Magento now returns the GraphQL message `The cart isn't active` instead of `Current user does not have an active cart` under certain circumstances when a cart becomes inactive and a new cart ID is created. _Fix submitted by Vadim Malesh in pull request [27187](https://github.com/magento/magento2/pull/27187)_. [GitHub-26117](https://github.com/magento/magento2/issues/26117)

<!--- ENGCOM-7105-->

*  Removed code that caused an error when using GraphQL to add products to a cart when a previously added product became out-of-stock. _Fix submitted by AleksLi in pull request [27015](https://github.com/magento/magento2/pull/27015)_. [GitHub-26683](https://github.com/magento/magento2/issues/26683)

<!--- ENGCOM-6535-->

*  Corrected a problem in GraphQL in which Magento did not return all the required information while using fragments on products query. _Fix submitted by Riccardo Tempesta in pull request [26218](https://github.com/magento/magento2/pull/26218)_. [GitHub-26217](https://github.com/magento/magento2/issues/26217)

*  The GraphQL mutation `setShippingMethodsOnCart` no longer retrieves the wrong data in the  `available_shipping_methods` attribute. _Fix submitted by Vadim Malesh in pull request [27004](https://github.com/magento/magento2/pull/27004)_. [GitHub-26742](https://github.com/magento/magento2/issues/26742)

### Grouped products

<!--- ENGCOM-6115-->

*  You can now add a simple product that belongs to a group product to the shopping cart when another simple product that belongs to that same group is out-of-stock.  _Fix submitted by Gihovani Filipp Pereira Dem̩trio in pull request [24955](https://github.com/magento/magento2/pull/24955)_. [GitHub-22304](https://github.com/magento/magento2/issues/22304)

<!--- ENGCOM-6768-->

*  Magento now sends email to customers about refunded group products as expected.  _Fix submitted by Alexander Taranovsky in pull request [26246](https://github.com/magento/magento2/pull/26246)_. [GitHub-26245](https://github.com/magento/magento2/issues/26245)

<!--- MC-30313-->

*  You can now add a child product of a grouped product to your cart when one of the grouped product’s other child products is out-of-stock. Previously, when one child product was out-of-stock, you could not add any other child products to the cart.

### Images

<!--- MC-29523-->

*  Images are now saved in `pub/media/catalog/category` as expected when you save category images. Previously, Magento saved these images in `pub/media/catalog/tmp/category`.

<!--- MC-30320-->

*  Watermark images no longer obscure the product image that they overlay. Previously, when the watermark image was larger than the product image it was applied to, the product image was not visible.

<!--- MC-32273-->

*  You can now successfully save an image to a category from the Admin. Previously, after you saved the image, part of  the URL was missing, and you couldn’t re-open the image.

<!--- MC-31727-->

*  Magento now displays `.png` images as expected after upload.

<!--- ENGCOM-7063-->

*  Using REST to add or update an image now creates an image thumbnail as expected. _Fix submitted by Sergiy Vasiutynskyi in pull request [27170](https://github.com/magento/magento2/pull/27170)_. [GitHub-26825](https://github.com/magento/magento2/issues/26825)

<!-- ENGCOM-6962-->

*  Custom attributes of images generated by `Block\Product\ImageFactory` now render correctly. Previously, you could not add your own custom attributes to the attribute markup due to incorrect escaping of the HTML output. _Fix submitted by alexander-aleman in pull request [26959](https://github.com/magento/magento2/pull/26959)_. [GitHub-25219](https://github.com/magento/magento2/issues/25219)

<!--- ENGCOM-5980-->

*  Images are no longer blurred when a storefront is viewed from an iPhone.  _Fix submitted by Dmitriy in pull request [24743](https://github.com/magento/magento2/pull/24743)_. [GitHub-24735](https://github.com/magento/magento2/issues/24735)

<!--- ENGCOM-6999-->

*  Images on the storefront are now responsive. Previously, image height was distorted.  _Fix submitted by Sean van Zuidam in pull request [27041](https://github.com/magento/magento2/pull/27041)_. [GitHub-27040](https://github.com/magento/magento2/issues/27040)

<!--- ENGCOM-7253-->

*  The default store logo is now visible on the storefront when the `Magento_blank` theme is used. _Fix submitted by Vasilii Burlacu in pull request [27497](https://github.com/magento/magento2/pull/27497)_. [GitHub-27496](https://github.com/magento/magento2/issues/27496)

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

*  The `.csv` file that is used during import now contains the correct links for downloadable products and is now correctly formatted to support importing and updating downloadable products.

<!--- MC-30189-->

*  Magento now successfully exports a `.csv` file when you set import behavior for Replace, select a previously exported `.csv` file, and click **Check data**. Previously, Magento displayed this error: `Data validation failed. Please fix the following errors and upload the file again` and `Following Error(s) has been occurred during importing process`.

<!--- MC-30141-->

*  The Stock Indexer is now triggered as expected after import and updates product status. Previously, the Stock Indexer did not index the changed product inventory data.

<!--- MC-31198-->

*  `.csv` files that are generated during product import now contain group titles for downloadable products as expected. Previously, unnecessary validation of `group_title` during import prevented the display of group titles for downloadable products.

<!--- MC-32153-->

*  When `cron` is enabled and you perform a customer import using the **(Customer and Addresses (single file))** option, Magento populates data to the Admin customer grid as expected. The customer grid displays the customers once manual re-indexing completes for `customer_grid indexer`. Previously, Magento did not update the customer grid with newly imported customer addresses.

<!--- MC-32154-->

*  Magento now displays the customer list as expected after automatic re-indexing. Previously, although manually running `bin/magento index:reindex` worked, the customer grid did not display customer information after automatic re-indexing.

<!--- MC-30148-->

*  Magento now deletes temporary files from `<Magento_home>/var` as expected after product import has completed.

<!--- MC-31879-->

*  Magento no longer creates duplicate SKUs in the Admin when products are imported by `.csv` file.

<!--- ENGCOM-6141-->

*  Import no longer fails when the imported configurable attribute includes an equal sign (=) in its value. _Fix submitted by dhoang89 in pull request [25194](https://github.com/magento/magento2/pull/25194)_. [GitHub-25188](https://github.com/magento/magento2/issues/25188)

<!--- ENGCOM-6901-->

*  All exported grid data (both Magento and custom data) now have option labels instead of option values for all the columns with type `Select` or `Multiselect`. Previously, when you exported this data, the exported spreadsheet contained Columns with ID rather than the values that were displayed in the grid. _Fix submitted by Maksym Novik in pull request [26523](https://github.com/magento/magento2/pull/26523)_. [GitHub-25963](https://github.com/magento/magento2/issues/25963)

<!--- ENGCOM-7145-->

*  Magento now displays bundle products on the storefront as expected after you update a product by importing a `.csv` file. _Fix submitted by Pavel Bystritsky in pull request [25664](https://github.com/magento/magento2/pull/25664)_. [GitHub-25540](https://github.com/magento/magento2/issues/25540)

### Index

<!--- MC-25236 30779-->

*  We have improved the performance of `indexer_update_all_views`. Indexing is now faster, inactive rules are no longer processed, and caches are cleared of entries for only changed products.

<!--- MC-29917-->

*  Product prices on the storefront now accurately reflect the application of a scheduled Catalog Price Rule update. Previously, prices did not reflect the scheduled cart price rule until you manually re-indexed (`php bin/magento indexer:reindex catalogrule_rule`).

<!--- MC-30588-->

*  You can now successfully re-index the product database after adding an attribute that is unsearchable (that is, the `is_searchable`, `is_filterable`, `is_visible_in_advanced_search` attributes are disabled).

<!--- ENGCOM-6533-->

*  Magento now displays a message that identifies the indexer and the time the indexing operation took when a re-indexing operation fails. _Fix submitted by Lukasz Bajsarowicz in pull request [26207](https://github.com/magento/magento2/pull/26207)_. [GitHub-26206](https://github.com/magento/magento2/issues/26206)

<!--- ENGCOM-7179-->

*  Products that are saved in stores where the  `onthefly` indexer and flat tables are enabled now respect website assignments. Previously, if you removed all website assignments from a product and then saved it,  all flat tables included the product, despite the specified website assignments.  _Fix submitted by Abel Truong in pull request [27365](https://github.com/magento/magento2/pull/27365)_. [GitHub-16315](https://github.com/magento/magento2/issues/16315)

### Infrastructure

*  The Internet Explorer 11.x browser is no longer supported.

<!--- MC-32223-->

*  The validation logic that is associated with the **Date of Birth** field of the Customer Registration form no longer triggers a JavaScript error.

<!--- ENGCOM-7000-->

*  Added an integration test to cover `$storeId` for the  Category Repository `get()` method. _Fix submitted by Lukasz Bajsarowicz in pull request [27048](https://github.com/magento/magento2/pull/27048)_. [GitHub-27044](https://github.com/magento/magento2/issues/27044)

<!--- ENGCOM-6378-->

*  Enabling the **Block all cookies** setting in Safari no longer results in JavaScript errors, and Magento displays the `cookies disabled` message as expected. Previously, Magento displayed multiple `SecurityError (DOM Exception 18): The operation is insecure` errors in the console. _Fix submitted by Ra̼l Verdugo Lorenzo in pull request [25324](https://github.com/magento/magento2/pull/25324)_. [GitHub-13865](https://github.com/magento/magento2/issues/13865)

<!--- ENGCOM-6674-->

*  Magento no longer throws this error when running integration tests: `Error: Call to a member function findFile() on array (/var/www/html/lib/internal/Magento/Framework/Code/Generator/DefinedClasses.php:59)`. Previously, an issue with `AutoloaderRegistry::getAutoloader` caused integration tests to fail randomly. _Fix submitted by Lukasz Bajsarowicz in pull request [26480](https://github.com/magento/magento2/pull/26480)_. [GitHub-26479](https://github.com/magento/magento2/issues/26479)

<!--- ENGCOM-6958-->

*  The `date` tag in `/module-sales/view/frontend/templates/order/order_date.phtml`  has been corrected to `span`. Previously, Magento logged an error in the `exception.log` file when you clicked **View Order** on the storefront **My Account** > **My Orders** page. _Fix submitted by Andrii  Chorniy in pull request [25895](https://github.com/magento/magento2/pull/25895)_. [GitHub-13269](https://github.com/magento/magento2/issues/13269), [GitHub-25738](https://github.com/magento/magento2/issues/25738)

<!--- ENGCOM-6316-->

*  The JavaScript mixin module has been refactored to improve the loading and application of mixins for advanced bundled modules. Previously,  Magento did not load or apply mixins  for advanced  bundled modules.  _Fix submitted by Mateusz Krzeszowiak in pull request [25587](https://github.com/magento/magento2/pull/25587)_. [GitHub-25586](https://github.com/magento/magento2/issues/25586)

<!--- ENGCOM-6344-->

*  The `grunt clean` command now cleans generated code and metadata folders as expected. _Fix submitted by Andrii Beziazychnyi in pull request [25765](https://github.com/magento/magento2/pull/25765)_. [GitHub-25739](https://github.com/magento/magento2/issues/25739)

<!-- ENGCOM-6463-->

*  `getVersion` result (`ProductMetadata::getVersion`) is now cached, which improves performance of the `ProductMetadata::getVersion` method.  _Fix submitted by Lukasz Lewandowski in pull request [26001](https://github.com/magento/magento2/pull/26001)_. [GitHub-24025](https://github.com/magento/magento2/issues/24025)

<!--- ENGCOM-7037-->

*  A missing setter for `additional_information` has been added to `OrderPaymentInterface`, which resolves an inconsistency between its schema declaration and accepted properties. _Fix submitted by Antonino Bonumore in pull request [26748](https://github.com/magento/magento2/pull/26748)_. [GitHub-26745](https://github.com/magento/magento2/issues/26745), [GitHub-13222](https://github.com/magento/magento2/issues/13222)

### Layered navigation

<!--- MC-31763-->

*  Magento now renders the **Yes/No** attribute on the Category page when **Use in Layered Navigation: Filterable (with results)** for storefront properties is enabled.

<!-- ENGCOM-6807-->

*  Redundant `\Magento\Sales\Model\Order\Email\Sender\ShipmentSender` has been deprecated in favor of  `\Magento\Sales\Model\Order\Shipment\Sender\EmailSender`. _Fix submitted by Adarsh Manickam in pull request [26714](https://github.com/magento/magento2/pull/26714)_. [GitHub-14885](https://github.com/magento/magento2/issues/14885)

### Media Gallery

<!--- ENGCOM-6993-->

*  Clicking **Enter** after naming a new folder in the Media Gallery now saves all changes you’ve made. Previously, clicking **Enter** instead of using the mouse to select **OK** resulted in all changes being lost.  _Fix submitted by Sergiy Vasiutynskyi in pull request [27029](https://github.com/magento/magento2/pull/27029)_. [GitHub-26847](https://github.com/magento/magento2/issues/26847)

<!-- ENGCOM-7490-->

*  You can now create a subfolder under the Media Gallery that has the same name as the primary folder. Previously, you could not save the subfolder with the same name. _Fix submitted by Vadim Malesh in pull request [27976](https://github.com/magento/magento2/pull/27976)_. [GitHub-1270](https://github.com/magento/adobe-stock-integration/issues/1270)

### Media Storage

<!--- MC-32593-->

*  `var/resource_config.json` is no longer regenerated whenever an image is requested by `get.php`. Previously, this file was rewritten on each call to `get.php`.

### Newsletter

<!--- MC-31768-->

*  Customers can now subscribe as expected to newsletters. Previously, when a customer tried to confirm their subscription, Magento displayed this error: `This is an invalid subscription confirmation code`.

<!--- ENGCOM-6525-->

*  The newsletter input field of the storefront footer is now rendered identically by any supported browser.  _Fix submitted by divyajyothi5321 in pull request [26182](https://github.com/magento/magento2/pull/26182)_. [GitHub-26176](https://github.com/magento/magento2/issues/26176)

<!--- ENGCOM-6691-->

*  Storefront messages about newsletter subscriptions are now rendered as expected in HTML. _Fix submitted by Oleh Usik in pull request [26455](https://github.com/magento/magento2/pull/26455)_. [GitHub-25162](https://github.com/magento/magento2/issues/25162)

### Orders

<!--- MC-33456-->

*  Order summary subtotals no longer display excluded taxes when the website display settings specify that taxes should be excluded. Previously, when multiple websites were configured with different display settings, the setting defined in the server variable was used for the store despite the store-level configurations.

### Payment methods

<!--- MC--->

*  The integration of third-party payment methods Authorize.Net, eWay, CyberSource, Braintree, and Worldpay into the core Magento code have been removed. Merchants should migrate to the official extensions that are available on the Magento Marketplace.

<!--- MC--->

*  The core implementation of Signifyd fraud protection is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on Magento Marketplace.

<!--- MC-32546-->

*  You can now successfully complete an order and return to the merchant’s home page when **Website Payments Pro Hosted Solution** is configured. Previously, when you clicked **Return to merchant**, Magento threw this error: `Invalid Form Key. Please refresh the page`.

<!--- ENGCOM-6606-->

*  Switching billing address no longer causes JavaScript function text to render in the payment section of the storefront checkout workflow. _Fix submitted by Chris Pook in pull request [26378](https://github.com/magento/magento2/pull/26378)_. [GitHub-26375](https://github.com/magento/magento2/issues/26375)

<!--- ENGCOM-7223-->

*  Credit memos now display the correct amount in the **Adjustment Refund** field of the Credit Memo overview.  _Fix submitted by Sergiy Vasiutynskyi in pull request [27343](https://github.com/magento/magento2/pull/27343)_. [GitHub-13851](https://github.com/magento/magento2/issues/13851)

<!--- ENGCOM-6524-->

*  You can now remove additional information from the `quote_payment column additional_information` table after you’ve saved a quote. Previously, you could not remove this information after saving the quote because the `unsAdditionalInformation` method in `\Magento\Payment\Model\Info` did not initialize data properly.  _Fix submitted by Marco Oliveira in pull request [26084](https://github.com/magento/magento2/pull/26084)_. [GitHub-26083](https://github.com/magento/magento2/issues/26083)

<!--- ENGCOM-6609-->

*  Payment instructions are now derived from the store view from which an order was made. Previously, payment instructions were used from the default store view because the `BeforeOrderPaymentSaveObserver` method fetched payment instructions from the default store view. _Fix submitted by Karyna Tsymbal in pull request [26399](https://github.com/magento/magento2/pull/26399)_. [GitHub-26332](https://github.com/magento/magento2/issues/26332)

<!--- ENGCOM-6953-->

*  Magento now collects the payment information that is displayed on both the Admin and in invoice and shipment invoices from the store in which the order was made in deployments with multiple stores. Previously, Magento derived payment information from the default store.  _Fix submitted by Bartomiej Szubert in pull request [26765](https://github.com/magento/magento2/pull/26765)_. [GitHub-17933](https://github.com/magento/magento2/issues/17933)

#### PayPal

<!--- MC-30498-->

*  Magento now displays an informative error message each time a customer clicks **Pay with PayPal** after entering an invalid shipping address in the checkout workflow. Previously, Magento displayed an error message only when the customer first clicked the button, not for subsequent clicks.

<!--- MC-30639-->

*  Magento no longer changes an order’s status to `Processing` in the Payment Review section of the checkout workflow when a payment with PayPal fails.

<!--- MC-30864-->

*  You can now successfully complete an order using the Payflow Link payment method. Previously, the Payflow Link payment method always rejected payment because the order status remained in the `Pending` payment state, even though the order status in the payment method logs was `Approved`.

<!--- MC-32494-->

*  Orders that are placed using PayPal Payflow Pro are now set to `Suspected Fraud` status when fraud filters are triggered.

<!--- MC-33110-->

*  You can now use PayPal Express Checkout with any supported credit card. Previously, when you clicked on a credit card button while using PayPal Express Checkout to complete an order, Magento hung, and you could not enter any credit card information.

<!--- MC-33117-->

*  Orders placed within PayPal Payflow Pro are now set to `Suspected Fraud` status when fraud filters are triggered. Previously, payment transaction status on PayPal was not validated before payment approval occurred on the Magento side.

<!--- MC-33294-->

*  Payflow Pro now works as expected when Website Restrictions are enabled.

<!--- MC-31196-->

*  Magento now successfully processes orders placed with PayPal Express Checkout where the order’s shipping address specifies a country region that the customer has manually entered into the text field rather than selected from the drop-down menu on the Shipping page. Previously, Magento displayed this error on the order review page: `Error 500: NOTICE: PHP message: PHP Fatal error: Uncaught Error: Call to a member function getId() on null in httpdocs/vendor/magento/module-paypal/Model/Api/Nvp.php:1527`. [GitHub-26698](https://github.com/magento/magento2/issues/26698)

<!--- MC-31573-->

*  The PayPal Pro payment method now works as expected in the Chrome 80 browser. This payment method previously invoked a Magento callback endpoint that needed access to the customer’s session — access that the new default Chrome SameSite cookie functionality does not permit. [GitHub-26840](https://github.com/magento/magento2/issues/26840)

<!--- MC-31292-->

*  You can now successfully use PayPal Express to pay for an order when persistent checkout cart has been enabled and the **Clear Persistence on Sign Out** setting is set to **no**. Previously, Magento redirected you to the Login page.

<!--- ENGCOM-6383-->

*  Payments from Paypal Express and Web Payments Pro now move to the `Processing` state as expected once processing has begun. Previously, Paypal Web Payments Pro payments remained in the `Pending` payment state even when payment information was in the `Processing` state. _Fix submitted by azambon in pull request [25876](https://github.com/magento/magento2/pull/25876)_. [GitHub-25659](https://github.com/magento/magento2/issues/25659)

### Performance

<!--- MC-31499-->

*  Customer data section invalidation logic has been improved. This release introduces a new way of invalidating all customer sections data that avoids a known issue with local storage when custom `sections.xml` invalidations are active. (Previously, private content (local storage) was not correctly populated when you had a custom *etc/frontend/sections.xml* with action invalidations.) See [Private content](https://{{page.baseurl}}/guides/v2.3/extension-dev-guide/cache/page-caching/private-content.html#invalidate-private-content).

<!--- MC-31449-->

*  The import of customer accounts has been refactored to improve import speed.

<!--- MC-23383 ENGCOM-7006-->

*  Merchants can now use [lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) to load images. See [Configure theme properties](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/themes/theme-images.html). _Fix submitted by Timon de Groot in pull request [27033](https://github.com/magento/magento2/pull/27033)_. [GitHub-27032](https://github.com/magento/magento2/issues/27032)

<!--- ENGCOM-6988-->

*  Dashboard charts have been migrated to the `chart.js` library.  _Fix submitted by Bartomiej Szubert in pull request [26923](https://github.com/magento/magento2/pull/26923). [GitHub-186](https://github.com/magento/community-features/issues/186)_

<!-- ENGCOM-6232-->

*  The performance of operations that are run on large catalogs that contain many product attributes (on the scale of 3,000 - 23000 options) has been improved by the refactoring of the how attribute option arrays are built. _Fix submitted by Behnam Shayani in pull request [25452](https://github.com/magento/magento2/pull/25452)_. [GitHub-20966](https://github.com/magento/magento2/issues/20966)

### Pricing

<!--- ENGCOM-6647-->

*  Magento now saves and displays the correct price for tiered products even after you’ve edited products multiple times. Previously, Magento did not save the last edits made to product price. _Fix submitted by Ravi Chandra in pull request [26162](https://github.com/magento/magento2/pull/26162)_. [GitHub-25195](https://github.com/magento/magento2/issues/25195)

<!--- ENGCOM-6914-->

*  Both fixed and discount save percentage are now correctly applied on an order’s final price. Previously,  Magento displayed an incorrect tier price (both fixed & discount) save percentage on the product detail page. _Fix submitted by Sathish Subramanian in pull request [26584](https://github.com/magento/magento2/pull/26584)_. [GitHub-26583](https://github.com/magento/magento2/issues/26583)

<!--- MC-30255-->

*  The stock alert email sent to customers about the re-stocking of a configurable product now contains the correct product price. Previously, this email contained a product price of 0.

<!--- MC-32873-->

*  Product stock alert unsubscribe now works when a user’s session has expired. Previously, when you clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

<!--- MC-31979-->

*  Unsubscribe actions for product alerts now work as expected. Previously, when a customer clicked on the **Click here to stop alerts for this product** link, Magento displayed a 404 error.

### Product video

<!--- MC-23743-->

*  You can now use REST to update YouTube videos (PUT `rest/V1/products/{SKU}`). Previously, Magento displayed a thumbnail for the video, but the video player did not load when you clicked the **Play** button. [GitHub-23194](https://github.com/magento/magento2/issues/23194)

### Reports

<!--- ENGCOM-6635-->

*  Product lists now order configurable products by SKU, which groups configurable products by variations. Previously, the report grouped products by `product_id`. _Fix submitted by Lukasz Bajsarowicz in pull request [25858](https://github.com/magento/magento2/pull/25858)_. [GitHub-25856](https://github.com/magento/magento2/issues/25856)

<!--- ENGCOM-6427-->

*  The **Admin** > **Reports** > **Refresh Statistics** table now displays **Updated At = Null** status as **Never** in the **Updated** column instead of **undefined**. _Fix submitted by Eden Duong in pull request [25932](https://github.com/magento/magento2/pull/25932)_. [GitHub-25931](https://github.com/magento/magento2/issues/25931)

<!--- ENGCOM-6925-->

*  The Low Stock report no longer includes disabled products. _Fix submitted by Mohamed-Asar in pull request [26862](https://github.com/magento/magento2/pull/26862)_. [GitHub-26838](https://github.com/magento/magento2/issues/26838)

<!--- ENGCOM-7110-->

*  Magento now displays an accurate value for the **Year-To-Date Starts**  field in **Admin**  >  **Stores**  >  **Configuration**  >  **General**  >  **Reports**. _Fix submitted by Priya-V-Panchal in pull request [27088](https://github.com/magento/magento2/pull/27088)_. [GitHub-27086](https://github.com/magento/magento2/issues/27086)

### Reviews

<!--- MC-29578-->

*  Magento now disables the **Submit Review** button after the user clicks the button once. Previously, Magento did not disable this button after the first click and created multiple reviews when the user clicked the **Submit Review** button multiple times.

<!--- MC-31293-->

*  The **Admin** > **Reports** > **Reviews** > **By Products** filter list now displays results as expected. Previously, when you tried to filter this list, Magento did not display any results.

<!--- ENGCOM-6938-->

*  The Pending Reviews menu item is now activated as expected on **Admin** >  **Marketing** > **User Content** > **Pending Reviews**.  _Fix submitted by Ravinder in pull request [26230](https://github.com/magento/magento2/pull/26230)_. [GitHub-26229](https://github.com/magento/magento2/issues/26229)

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

*  Administrators with restricted permissions that include view permission for credit memos, invoices, and shipments can now view invoices and shipments from the Orders page as expected. Previously, when a restricted administrator tried to view an order, Magento displayed this error: `Something went wrong with processing the default view and we have restored the filter to its original state`.

<!--- MC-24023-->

*  Magento no longer displays an error when a customer adds a quantity of a product to their cart that exceeds half of the existing product stock but does not exceed the total stock. Previously, under these circumstances, Magento displayed this error: `The requested qty is not available`. [Github-24365](https://github.com/magento/magento2/issues/24365)

<!--- ENGCOM-6910-->

*  You can now successfully add a product to the cart from the Admin when the stock quantity is 1. Previously, Magento didn’t add the product to the cart and displayed this message: `The requested qty is not available`. _Fix submitted by Serhii Petrychenko in pull request [26650](https://github.com/magento/magento2/pull/26650)._ [GitHub-25675](https://github.com/magento/magento2/issues/25675)

<!--- ENGCOM-7090-->

*  Magento now displays an informative error message when a store administrator  tries to re-order a product whose custom option has a name that exceeds the maximum number of  characters. Previously, under these conditions, Magento displayed the Report page, not a message. _Fix submitted by Mudit Shukla in pull request [26348](https://github.com/magento/magento2/pull/26348)_. [GitHub-26345](https://github.com/magento/magento2/issues/26345)

<!--- ENGCOM-6328-->

*  The layout of the Sales order address information edit form has been refactored to match Admin form library conventions. _Fix submitted by Alexey Rakitin in pull request [25699](https://github.com/magento/magento2/pull/25699)_. [GitHub-19805](https://github.com/magento/magento2/issues/19805)

<!--- ENGCOM-6007-->

*  The checkboxes on the Products section of the **Catalog** > **Categories** page now work as expected.  _Fix submitted by Denis Kopylov in pull request [22990](https://github.com/magento/magento2/pull/22990)_. [GitHub-22988](https://github.com/magento/magento2/issues/22988)

<!--- ENGCOM-6809-->

*  The `getCustomer` method now returns the customer object as defined in `phpdoc` block. Previously, this method returned `NULL`, and `phpdoc` block did not highlight that this method could return `NULL`. _Fix submitted by Fanis Strezos in pull request [26423](https://github.com/magento/magento2/pull/26423)_. [GitHub-25268](https://github.com/magento/magento2/issues/25268)

<!--- ENGCOM-6492-->

*  Re-orders are now disabled as expected when a merchant disables the  **Admin** > **Store**  >  **Configuration**  >  **Sales**  >  **Reorder**  >  **Allow Order**.  _Fix submitted by Eden Duong in pull request [26051](https://github.com/magento/magento2/pull/26051)_. [GitHub-25130](https://github.com/magento/magento2/issues/25130)

<!--- ENGCOM-6627-->

*  `getPrice()` method now returns a float or null instead of a string when setting a custom price for an order in the Admin.  _Fix submitted by Andrii  Chorniy in pull request [26313](https://github.com/magento/magento2/pull/26313)_. [GitHub-25968](https://github.com/magento/magento2/issues/25968)

<!--- ENGCOM-6786-->

*  The **State Code and Title** column of **Admin** > **Stores**  > Settings  >  **Order Status** now displays state instead of status as expected.  _Fix submitted by Oleh Usik in pull request [26569](https://github.com/magento/magento2/pull/26569)_. [GitHub-17847](https://github.com/magento/magento2/issues/17847)

<!--- ENGCOM-6936-->

*  PDF invoices now capture the correct purchase date when created in a GB locale. _Fix submitted by Eden Duong in pull request [26701](https://github.com/magento/magento2/pull/26701)_. [GitHub-26675](https://github.com/magento/magento2/issues/26675)

### Sales Rule

<!--- MC-30155-->

*  `quote_item.applied_rule_ids` is now updated as expected after a cart price rule is disabled. [GitHub-24526](https://github.com/magento/magento2/issues/24526)

<!--- MC-32229-->

*  Magento now displays category trees as expected when you try to create or edit a cart price rule. Previously, selecting a category in the Condition section while creating or editing a rule resulted in JavaScript errors.

<!--- ENGCOM-6824-->

*  Magento now correctly calculates cart-level fixed discounts using cart price rules when a configurable product is first added to the cart. _Fix submitted by Lachlan Turner in pull request [26623](https://github.com/magento/magento2/pull/26623)_. [GitHub-26622](https://github.com/magento/magento2/issues/26622)

### Search

*  Elasticsearch 7.6.x is now the default catalog search engine for Magento Commerce and Open Source. You cannot install or upgrade to Magento 2.4.0 without also installing Elasticsearch 7.6.x. Elasticsearch version 2.x code has been removed. Elasticsearch versions 5.x and 6.x have been deprecated and are no longer supported. See [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

<!--- MC-23753-->

*  Magento now renders the **<** and **>** symbols correctly in storefront catalog search strings.

<!--- MC-25010-->

*  Products now show as expected in categories after running `cron:run` in deployments implementing Elasticsearch.

<!--- MC-25254-->

*  Magento no longer requires a full search re-index in order for a new product attribute to be searchable on the storefront.

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

<!--- ENGCOM-6842-->

*  Magento no longer displays a warning when a merchant opens the search term page by clicking on the Search terms option on the footer of **Marketing** > **SEO & Search** > **Search Terms**.  _Fix submitted by vishal-webkul in pull request [25246](https://github.com/magento/magento2/pull/25246)_. [GitHub-25245](https://github.com/magento/magento2/issues/25245)

<!--- ENGCOM-7289-->

*  Magento no longer resizes the viewport when you click on the search input box when running Safari in mobile view.  _Fix submitted by Pawe Tylek in pull request [27603](https://github.com/magento/magento2/pull/27603). [GitHub-27506](https://github.com/magento/magento2/issues/27506)_

<!--- ENGCOM-6364-->

*  The Elasticsearch versions are now identified by X.x notation instead of X.0+ notation in the Admin (**Stores** > Settings > **Configuration** > **Catalog** > **Catalog** > **Catalog Search**). _Fix submitted by Andreas Mautz in pull request [25838](https://github.com/magento/magento2/pull/25838)_. [GitHub-25674](https://github.com/magento/magento2/issues/25674)

### Shipping

<!--- MC-29276-->

*  Magento now applies fixed-amount, whole-cart discounts correctly for orders being shipped to multiple addresses. Previously, this type of discount was applied multiple times when a customer checked out an order using Check Out with Multiple Addresses. [GitHub-25834](https://github.com/magento/magento2/issues/25834)

<!--- MC-29444-->

*  The drop-down list that is available for selecting shipping methods during the process of creating a cart price rule now contains only valid values. Previously, this dropdown list contained empty or extra values.

<!--- MC-30186-->

*  Magento now prints shipping labels as a `.pdf` file as expected when you select **Print Shipping Label** from the Action drop-down list from an order in the order archive list. Previously, Magento displayed a 404 error.

<!--- MC-31396-->

*  Free Shipping Price rules now affect only the relevant products when a shopping cart contains products from categories that are included by the Free Shipping Price rule as well as products from categories not included in the rule. Previously, when a shopping cart included products from both the free shipping categories as well as other categories not included in the price rule, then free shipping was not applied to any products.

<!--- ENGCOM-6436-->

*  Magento no longer displays a blank page instead of displaying all the shipping carriers in the dropdown/multi-select box. Previously, an error in the `toOptionArray` function in `vendor/magento/module-shipping/Model/Config/Source/Allmethods.php` occurred. _Fix submitted by Marc Rodriguez in pull request [25315](https://github.com/magento/magento2/pull/25315)_. [GitHub-13136](https://github.com/magento/magento2/issues/13136)

*  Magento no longer applies a fixed amount discount multiple times when a customer creates an order that will be shipped to multiple addresses.  _Fix submitted by Mahesh Singh in pull request [26419](https://github.com/magento/magento2/pull/26419)_. [GitHub-25834](https://github.com/magento/magento2/issues/25834)

<!--- ENGCOM-6523-->

*  Plugins for `Magento\Ups\Model\Carrier` that implement custom `di.xml` now work properly in developer mode. Previously, Magento threw this error: `1 exception(s): Exception #0 (BadMethodCallException): Missing required argument $data of Magento\Ups\Model\Carrier`. _Fix submitted by Bartomiej Szubert in pull request [26130](https://github.com/magento/magento2/pull/26130)_. [GitHub-25390](https://github.com/magento/magento2/issues/25390)

### Sitemap

<!--- MC-29362-->

*  Magento now uses the project base URL as expected when you generate a sitemap.

<!--- ENGCOM-6670-->

*  Generated site maps now include the URL of the home page. _Fix submitted by deepaksnair in pull request [26445](https://github.com/magento/magento2/pull/26445)_. [GitHub-25761](https://github.com/magento/magento2/issues/25761)

### Store

<!--- MC-25187-->

*  Customer sessions now persist as expected when a customer logs in to one store, adds products to the shopping cart, and then switches to a new store in a multi-store deployment. Previously, when the customer navigated to the second store, Magento logged out the customer and emptied the shopping cart.

<!--- ENGCOM-4781-->

*  Magento now deletes records that are related to a deleted store view from the `sale_sequence_meta` and `sales_sequence_profile` tables as expected. _Fix submitted by Bartomiej Szubert in pull request [22296](https://github.com/magento/magento2/pull/22296)_. [GitHub-14958](https://github.com/magento/magento2/issues/14958)

<!--- ENGCOM-6869-->

*  Store switcher now works as expected when switching between stores that have different base URLs. Previously, when a customer used the store switcher to switch between stores,  the request failed if the target store had a different base URL than the current store. _Fix submitted by Tobias Nilsson in pull request [26548](https://github.com/magento/magento2/pull/26548)_. [GitHub-23755](https://github.com/magento/magento2/issues/23755), [GitHub-26384](https://github.com/magento/magento2/issues/26384)

### Swatches

<!--- MC-30294-->

*  Merchants can now successfully add color swatch attributes to products using the **Visual Swatch** option on **Stores** > **Attributes** > **Product** > **New Attribute**. Previously, a JavaScript error was triggered when you tried to open the newly created swatch attribute.

<!--- ENGCOM-6750-->

*  The Minimum Advertised Price now changes as expected when a customer selects a new swatch option for a configurable product. _Fix submitted by Sergiy Vasiutynskyi in pull request [26241](https://github.com/magento/magento2/pull/26241)_. [GitHub-26240](https://github.com/magento/magento2/issues/26240)

<!--- ENGCOM-6685-->

*  Magento no longer duplicates the Minimum Advertised Price for a configurable product when you select a new swatch option. _Fix submitted by Sergiy Vasiutynskyi in pull request [26317](https://github.com/magento/magento2/pull/26317)_. [GitHub-26314](https://github.com/magento/magento2/issues/26314)

<!--- ENGCOM-6966-->

*  Corrected issues with the behavior of the drop-down menu in the Manage Swatch (Values of Your Attribute) area of the New Product Attribute page.  _Fix submitted by Oleh Usik in pull request [26090](https://github.com/magento/magento2/pull/26090)_. [GitHub-25910](https://github.com/magento/magento2/issues/25910)

### TargetRule

<!--- MC-31546-->

*  The related product block that is displayed for a product on the storefront now displays the products that have met the criteria defined in the Related Product Rule. Previously, Magento did not display any related products.

### Tax

<!--- MC-29579-->

*  Magento now updates shipping rates and prices as expected when a customer changes the destination country for an order during checkout.

<!--- MC-30546-->

*  Free shipping is now applied as expected based on the applicable cart price rule. Previously, cart price rules did not take into account taxes when calculating whether an order meets criteria for free shipping.

### Test

{:.bs-callout-info}

**MFTF now uses Google Authenticator to execute tests with 2FA enabled. MFTF will not work with Magento 2.4.0 without additional configuration steps to enable Google Authenticator**. See  [Configuring MFTF for Two-Factor Authentication (2FA)](https://devdocs.magento.com/guides/v2.4/security/two-factor-authentication.html#magento-functional-testing-framework).

<!-- ENGCOM-6585-->

*  Hardcoded URLs in tests and Action roups have been replaced with page references. _Fix submitted by Lukasz Bajsarowicz in pull request 117 in private repository partners-magento2ee_. [GitHub-26331](https://github.com/magento/magento2/issues/26331)

<!--- ENGCOM-7273-->

*  Tests now cover the task of logging Admin Actions related to CMS pages. _Fix submitted by Lukasz Bajsarowicz in pull request 172 in private repository partners-magento2ee_. [GitHub-171](https://github.com/magento/magento2/issues/171)

<!-- ENGCOM-7040 7051-->

*  Invalid functional test names have been revised to follow best practices. _Fix submitted by Lukasz Bajsarowicz in pull request [27118](https://github.com/magento/magento2/pull/27118) and pull request 151 in private repository partners-magento2ee. [GitHub-27117](https://github.com/magento/magento2/issues/27117)_

<!-- ENGCOM-7026-->

*  Magento `cron` is now used for re-indexing after creating test data, and where applicable, `cache:flush config` replaces `cache:flush`. _Fix submitted by Lukasz Bajsarowicz in pull request [26990](https://github.com/magento/magento2/pull/26990)_. [GitHub-26989](https://github.com/magento/magento2/issues/26989)

<!--- ENGCOM-7421-->

*  Acceptance tests now follow naming conventions for `Magento/Indexer` and `Magento/Backup` modules.  _Fix submitted by Shankar Konar in pull request [27515](https://github.com/magento/magento2/pull/27515)_. [GitHub-27503](https://github.com/magento/magento2/issues/27503)

<!--- ENGCOM-6791 6825-->

*  The `AdminReorderWithCatalogPrice` test has been refactored and no longer fails during the CI validation process. _Fix submitted by Lukasz Bajsarowicz in pull request 135 in private repository partners-magento2ee_. [GitHub-26607](https://github.com/magento/magento2/issues/26607)

<!-- ENGCOM-6780 6795-->

*  The `AdminAddingNewOptionsWithImagesAndPricesToConfigurableProduct` and `StorefrontApplyPromoCodeDuringCheckout` tests have been refactored and no longer fail during CI validation process. _Fix submitted by Lukasz Bajsarowicz in pull request [26611](https://github.com/magento/magento2/pull/26611) and pull request [26614](https://github.com/magento/magento2/pull/26614)_. [GitHub-26612](https://github.com/magento/magento2/issues/26612), [GitHub-26610](https://github.com/magento/magento2/issues/26610)

<!-- ENGCOM-6621-->

*  The `DeleteProduct and DeleteCustomer Action Groups` tests have been refactored and no longer fail during the CI validation process. _Fix submitted by Lukasz Bajsarowicz in pull request [26407](https://github.com/magento/magento2/pull/26407)_. [GitHub-26396](https://github.com/magento/magento2/issues/26396)

<!-- ENGCOM-6608-->

*  The `AdminMoveAnchoredCategoryTest.xml` tests have been refactored and no longer fail during the CI validation process. _Fix submitted by Lukasz Bajsarowicz in pull request [26395](https://github.com/magento/magento2/pull/26395)_. [GitHub-26396](https://github.com/magento/magento2/issues/26396)

#### Integration tests

<!--- ENGCOM-7143-->

*  Consecutive requests in integration tests no longer fail. Previously, tests failed because request objects were shared between dispatches. The `resetRequest` method now empties the state of `request`. _Fix submitted by Lukasz Bajsarowicz in pull request [27300](https://github.com/magento/magento2/pull/27300)_. [GitHub-27299](https://github.com/magento/magento2/issues/27299)

<!-- ENGCOM-7262-->

*  Additional integration tests added to cover for `Magento_Customer` email features. _Fix submitted by Lukasz Bajsarowicz in pull request [27606](https://github.com/magento/magento2/pull/27606)_. [GitHub-27607](https://github.com/magento/magento2/issues/27607)

#### PHP unit tests

<!-- ENGCOM-7435 7306-->

*  PHP unit tests no longer throw this fatal error: `Fatal error: Class Mock_CartExtensionInterface_0ba80a0b contains 2 abstract methods and must therefore be declared abstract or implement the remaining methods (Magento\Quote\Api\Data\CartExtensionInterface::getAmazonOrderReferenceId, Magento\Quote\Api\Data\CartExtensionInterface::setAmazonOrderReferenceId) in /var/www/html/vendor/phpunit/phpunit-mock-objects/src/Generator.php(264) : eval()'d code on line 1`. _Fix submitted by Lukasz Bajsarowicz in pull requests 178 in private repository partners-magento2ee and [27701](https://github.com/magento/magento2/pull/27701)_. [GitHub-27638](https://github.com/magento/magento2/issues/27638)

<!-- ENGCOM-7271-->

*  Tests for `Offline_Payments` are now compatible with PHPUnit 8.  _Fix submitted by Cristiano Pacheco in pull request [27627](https://github.com/magento/magento2/pull/27627)_. [GitHub-27500](https://github.com/magento/magento2/issues/27500)

<!-- ENGCOM-7243 7284 7291-->

*  Unit tests for `Framework`, `AdminAnalytics`, `AdminNotification`, and `AMPQ` have been updated for PHPUnit 8. _Fix submitted by Ihor Sviziev in pull requests [27522](https://github.com/magento/magento2/pull/27522), [27521](https://github.com/magento/magento2/pull/27521), [27519](https://github.com/magento/magento2/pull/27519), [27522](https://github.com/magento/magento2/pull/27522)_. [GitHub-27500](https://github.com/magento/magento2/issues/27500)

<!--- ENGCOM-6542-->

*  You can now run the `\Magento\Downloadable\Test\Unit\Helper\DownloadTest` unit test without being connected to the internet.  _Fix submitted by aleromano89 in pull request [26264](https://github.com/magento/magento2/pull/26264)_. [GitHub-23521](https://github.com/magento/magento2/issues/23521)

<!--- ENGCOM-6695-->

*  Added unit test for `app/code/Magento/Fedex/Model/Source/Generic.php`. _Fix submitted by Sathish Subramanian in pull request [26549](https://github.com/magento/magento2/pull/26549)_.

<!-- ENGCOM-7251 7283 7472-->

*  `<magentoCron>` has been added to multiple tests, which triggers partial reindexing. This changes addresses issues that created false negatives in functional tests that covered `Magento_Bundle`, `CatalogImportExport`, `CatalogInventory`, `CatalogRule`, `Backend`, `Braintree`, and `Captcha`. _Fix submitted by Lukasz Bajsarowicz in pull requests [27322](https://github.com/magento/magento2/pull/27322), [27323](https://github.com/magento/magento2/pull/27323), [27321](https://github.com/magento/magento2/pull/27321)_. [GitHub-27320](https://github.com/magento/magento2/issues/27320)

<!-- ENGCOM-6844-->

*  All incorrect uses of `<amOnPage>` have been replaced with an appropriate `<actionGroup>` for Admin log out where applicable in tests. _Fix submitted by Lukasz Bajsarowicz in pull request 116  in private repository partners-magento2ee_. [GitHub-26331](https://github.com/magento/magento2/issues/26331)

<!--- ENGCOM-6352-->

*  Each Action group in a test has been moved to a separate file to follow MFTF best practices, and inconsistent file names have been revised. Tests for the following modules have been affected:

   *  module-catalog-permissions
   *  module-shared-catalog
   *  module-catalog-event
   *  module-banner
   *  module-admin-gws
   *  module-advanced-checkout
   *  module-shipping
   *  module-ui
   *  module-shipping
   *  module-checkout-address-search
   *  module-sales
   *  module-catalog
   *  module-catalog-rule-staging
   *  module-visual-merchandiser
   *  module-customer

   _Fix submitted by Lukasz Bajsarowicz in pull requests [25800](https://github.com/magento/magento2/pull/25800), [26323](https://github.com/magento/magento2/pull/26323), [26321](https://github.com/magento/magento2/pull/26321), [26320](https://github.com/magento/magento2/pull/26320), [26319](https://github.com/magento/magento2/pull/26319), [26322](https://github.com/magento/magento2/pull/26322), [25828](https://github.com/magento/magento2/pull/25828), [26329](https://github.com/magento/magento2/pull/26329) (and pull requests 104, 105, 106, 107, 108, 109, 111, 119, 120, 121 in private repository partners-magento2ee)_. [GitHub-22853](https://github.com/magento/magento2/issues/22853)

### Theme

<!--- MC-29804-->

*  We’ve resolved a bug in `JsFooterPlugin.php` that affected the display of dynamic blocks. Previously, Magento displayed this error when you directly accessed `/banner/ajax/load/url`: `Uncaught TypeError: strpos() expects parameter 1 to be string, null given in`.

<!--- ENGCOM-6708-->

*  The `i18n` method provides the ability to add a string to underscore templates.  _Fix submitted by Sergiy Vasiutynskyi in pull request [26435](https://github.com/magento/magento2/pull/26435)_. [GitHub-18012](https://github.com/magento/magento2/issues/18012)

<!--- ENGCOM-6666-->

*  The `section-config` module has been refactored. This refactoring has reduced errors that were caused by third-party modules making POST requests or requesting customer data directly before the module was initialized by `data-mage-init`. _Fix submitted by Mateusz Krzeszowiak in pull request [25764](https://github.com/magento/magento2/pull/25764)_. [GitHub-17125](https://github.com/magento/magento2/issues/17125)

<!--- ENGCOM-6924-->

*  `LoadCssAsync` HTML format errors have been fixed. _Fix submitted by Sathish Subramanian in pull request [26764](https://github.com/magento/magento2/pull/26764)_. [GitHub-26760](https://github.com/magento/magento2/issues/26760)

<!--- ENGCOM-7052-->

*  When you create `default.xml` and `catalog_product_view.xml` files as part of creating a new theme, Magento either creates these pages or logs errors in the log files as expected. Previously, Magento logged errors in `vendor/magento/framework/View/Page/Config/Renderer.php` file. _Fix submitted by Vinh Le in pull request [27026](https://github.com/magento/magento2/pull/27026)_. [GitHub-27009](https://github.com/magento/magento2/issues/27009)

### Translation and locales

<!--- MC-24186-->

*  Inline translation now works as expected on the storefront when **Admin** > **Stores** > **Configuration** > **Advanced** > **Developer** > **Translate Inline** > **Enabled for Storefront** is set.

<!--- MC-31663-->

*  Inline translation now works as expected when enabled for a storefront.

<!--- ENGCOM-7064-->

*  Product URL keys are now transliterated as expected. _Fix submitted by DanieliMi in pull request [26506](https://github.com/magento/magento2/pull/26506)_. [GitHub-26499](https://github.com/magento/magento2/issues/26499)

<!--- ENGCOM-6899-->

*  The `es_US Spanish (United States)` locale is now supported. _Fix submitted by Vinh Le in pull request [26857](https://github.com/magento/magento2/pull/26857)_. [GitHub-26843](https://github.com/magento/magento2/issues/26843)

<!--- ENGCOM-6996-->

*  Numerical placeholder count and JavaScript code placeholder count are now the same. Previously, the JavaScript code assumed 0% while the numerical placeholder count started with %1.  _Fix submitted by korostii in pull request [25359](https://github.com/magento/magento2/pull/25359)_. [GitHub-25243](https://github.com/magento/magento2/issues/25243)

<!--- ENGCOM-6557-->

*  You can now disable the translation of the page title of the Product details page (`page.main.title`), which is enabled by default. _Fix submitted by Bartomiej Szubert in pull request [26269](https://github.com/magento/magento2/pull/26269)_. [GitHub-7065](https://github.com/magento/magento2/issues/7065)

<!--- ENGCOM-7465-->

*  Issues with the rendering of Arabic and Hebrew in invoice PDFs have been resolved. _Fix submitted by Ihor Sviziev in pull request [27887](https://github.com/magento/magento2/pull/27887)_. [GitHub-25769](https://github.com/magento/magento2/issues/25769)

<!--- ENGCOM-6646-->

*  Language pack inheritance order is now applied in a first-listed, first-used basis as expected and as described in the Magento documentation.  _Fix submitted by Sergiy Vasiutynskyi in pull request [26420](https://github.com/magento/magento2/pull/26420)_. [GitHub-8691](https://github.com/magento/magento2/issues/8691)

<!--- ENGCOM-6443-->

*  Magento now displays this error message when you enter a non-Latin character for a folder name in locales where only Latin letters are supported: `Please rename the folder using only Latin letters, numbers, underscores and dashes`. _Fix submitted by Eden Duong in pull request [25904](https://github.com/magento/magento2/pull/25904). [GitHub-25896](https://github.com/magento/magento2/issues/25896)_

<!--- ENGCOM-6539-->

*  The length of the `locale` column for `directory_country_region_name` has been increased from 8 to 16 to support locales such as  `zh_Hans_CN`. _Fix submitted by Bartomiej Szubert in pull request [26268](https://github.com/magento/magento2/pull/26268)_. [GitHub-14001](https://github.com/magento/magento2/issues/14001)

### UI

<!--- ENGCOM-7490-->

*  The Back button now works as expected from **Admin** > **Stores** > **Order Status** > **Edit Order Status**. _Fix submitted by Vadim Malesh in pull request [27976](https://github.com/magento/magento2/pull/27976)_. [GitHub-1270](https://github.com/magento/magento2/issues/1270)

<!--- ENGCOM-6692-->

*  Preview images no longer change unexpectedly when you use the arrow keys to move the cursor in the **File Name** field in the Adobe Stock list. _Fix submitted by Adarsh Manickam in pull request [25991](https://github.com/magento/magento2/pull/25991)_. [GitHub-847](https://github.com/magento/magento2/issues/847)

<!--- ENGCOM-6414-->

*  The **Your Password**  field on the Current User Identity Verification section of the **Admin** > **System** > **Integrations** page now inherits styles as expected. _Fix submitted by Eduard Chitoraga in pull request [25918](https://github.com/magento/magento2/pull/25918)_. [GitHub-25917](https://github.com/magento/magento2/issues/25917)

<!--- ENGCOM-6482-->

*  Input that is validated by the JavaScript validator on the storefront will also pass validation on the Admin. Previously, the JavScript validator counted newlines as a single character on the storefront, but on the server side, `\Magento\Catalog\Model\Product\Option\Type\maxCharacters` counted newlines as two characters. _Fix submitted by Grzegorz Bogusz in pull request [26033](https://github.com/magento/magento2/pull/26033)_. [GitHub-25974](https://github.com/magento/magento2/issues/25974)

<!--- ENGCOM-6517-->

*  The `subTitle` tag is no longer erased when you change a modal title using the `setTitle()` call. Previously, when you tried to create a popup or custom modal with a title and subtitle, then changed title with the `setTitle()` method, the `subTitle` was erased. _Fix submitted by Andrea Parmeggiani in pull request [26142](https://github.com/magento/magento2/pull/26142)_. [GitHub-26141](https://github.com/magento/magento2/issues/26141)

<!--- ENGCOM-6464-->

*  The submenu in the Admin Marketing tab now automatically adjusts to the length of menu items as expected.  You can also now scroll horizontally.  _Fix submitted by Paweł Tylek in pull request [26034](https://github.com/magento/magento2/pull/26034)_. [GitHub-18687](https://github.com/magento/magento2/issues/18687)

<!--- ENGCOM-6519-->

*  The table `quote`  column `customer_note` now uses type `text` as expected. Previously, it used type `varchar(255)`. _Fix submitted by Ravi Chandra in pull request [26160](https://github.com/magento/magento2/pull/26160)_. [GitHub-26155](https://github.com/magento/magento2/issues/26155)

<!--- ENGCOM-7153-->

*  Corrected display issues with the table header on the **My Account**  > **Address Book**  Address Entries table.  _Fix submitted by Abrar Pathan in pull request [27336](https://github.com/magento/magento2/pull/27336)_. [GitHub-27335](https://github.com/magento/magento2/issues/27335)

<!--- ENGCOM-5986-->

*  The currency symbol used in Layered Navigation Price Step is now based on default settings as expected.  _Fix submitted by Bartomiej Szubert in pull request [24815](https://github.com/magento/magento2/pull/24815)_. [GitHub-21684](https://github.com/magento/magento2/issues/21684)

<!--- ENGCOM-6324-->

*  The symbol for the Belarusian currency (BYR) has been updated to BYN. _Fix submitted by Bartomiej Szubert in pull request [25723](https://github.com/magento/magento2/pull/25723)_. [GitHub-24713](https://github.com/magento/magento2/issues/24713)

<!--- ENGCOM-6622-->

*  The Compare Products section of the Catalog page is now displayed as expected in mobile view on displays with resolutions of less than 767px. _Fix submitted by Hitesh in pull request [26418](https://github.com/magento/magento2/pull/26418)_. [GitHub-26416](https://github.com/magento/magento2/issues/26416)

<!--- ENGCOM-6376-->

*  Scrolling of product pages now works as expected in mobile view.  _Fix submitted by Mateusz Krzeszowiak in pull request [25385](https://github.com/magento/magento2/pull/25385)_. [GitHub-10518](https://github.com/magento/magento2/issues/10518), [GitHub-21717](https://github.com/magento/magento2/issues/21717)

<!--- ENGCOM-6368-->

*  You can now scroll through gallery thumbnail images on the product page in mobile view as expected. _Fix submitted by iGerchak in pull request [25839](https://github.com/magento/magento2/pull/25839)_. [GitHub-21014](https://github.com/magento/magento2/issues/21014)

<!--- ENGCOM-6425-->

*  Clicking on Theme Title on **Admin**  > **Content** > **Themes** no longer results in duplicate records. _Fix submitted by Eden Duong in pull request [25926](https://github.com/magento/magento2/pull/25926)_. [GitHub-25925](https://github.com/magento/magento2/issues/25925)

<!--- ENGCOM-6328-->

*  The layout of the Admin Billing Address/Shipping Address page has been refactored to meet Magento Admin form display conventions. _Fix submitted by Alexey Rakitin in pull request [25699](https://github.com/magento/magento2/pull/25699)_. [GitHub-23481](https://github.com/magento/magento2/issues/23481), [GitHub-19805](https://github.com/magento/magento2/issues/19805)

<!--- ENGCOM-6628 6593-->

*  The Add to Compare link on the product detail page now renders correctly in mobile view on displays with less than 640px resolution. _Fix submitted by Pawe Tylek in pull request [26424](https://github.com/magento/magento2/pull/26424) and Tejash Kumbhare in pull request [26365](https://github.com/magento/magento2/pull/26365)_. [GitHub-26364](https://github.com/magento/magento2/issues/26364)

<!--- ENGCOM-6607-->

*  The **Sort By** label no longer overlaps with the **Shop By** button on the category page in mobile view. _Fix submitted by Andrii Kartavtsev in pull request [26381](https://github.com/magento/magento2/pull/26381)_. [GitHub-25300](https://github.com/magento/magento2/issues/25300)

<!--- ENGCOM-7137-->

*  You can now update the value of a downloadable product’s sample and link title by enabling the  **Use default** checkbox. _Fix submitted by Abel Truong in pull request [27295](https://github.com/magento/magento2/pull/27295)_. [GitHub-27169](https://github.com/magento/magento2/issues/27169)

<!--- ENGCOM-6532-->

*  Corrected spacing between the **Update** button and **Qty** field on the mini cart.  _Fix submitted by Hitesh in pull request [26234](https://github.com/magento/magento2/pull/26234)_. [GitHub-26227](https://github.com/magento/magento2/issues/26227)

<!--- ENGCOM-7032-->

*  The bottom border color of the Additional Address Entries table on the Address Book page now matches `thead` and `tbody` border color. _Fix submitted by Tejash Kumbhare in pull request [26649](https://github.com/magento/magento2/pull/26649)_. [GitHub-26648](https://github.com/magento/magento2/issues/26648)

<!--- ENGCOM-7195-->

*  Prompt modals no longer carry out a confirm action when a user clicks on the modal overlay. _Fix submitted by Serhiy Zhovnir in pull request [27399](https://github.com/magento/magento2/pull/27399)_.

### URL

<!--- ENGCOM-7112-->

*  The category repository (save method) has been refactored, which had previously prevented you from creating unique paths when changing a category URL key. _Fix submitted by Sergiy Vasiutynskyi in pull request [27304](https://github.com/magento/magento2/pull/27304)_. [GitHub-14080](https://github.com/magento/magento2/issues/14080)

<!--- ENGCOM-7208-->

*  Validation for the category URL key logic has been improved. _Fix submitted by Sergiy Vasiutynskyi in pull request [27412](https://github.com/magento/magento2/pull/27412)_. [GitHub-13689](https://github.com/magento/magento2/issues/13689)

### URL rewrites

<!--- MC-31147-->

*  Customers who change language on a CMS page can now successfully navigate to the store view they’ve selected. Previously, Magento displayed a 404 error.

<!--- ENGCOM-6997-->

*  URL rewrite generation for product URLs for which you’ve enabled category path inclusion now works as expected. Previously, in deployments with multiple store views, Magento sometimes generated incorrect URL rewrites by using the default value of the category url path instead of the storeview-specific URL path. _Fix submitted by Pieter Hoste in pull request [26784](https://github.com/magento/magento2/pull/26784)_. [GitHub-25124](https://github.com/magento/magento2/issues/25124), [GitHub-11616](https://github.com/magento/magento2/issues/11616)

<!--- ENGCOM-6995-->

*  We’ve added a check to prevent URL redirects if the request path is the same as the target path. _Fix submitted by Bartomiej Szubert in pull request [26902](https://github.com/magento/magento2/pull/26902)_. [GitHub-20309](https://github.com/magento/magento2/issues/20309)

<!--- ENGCOM-6303-->

*  URL rewrite operations  no longer removes a query string from a URL when the URL has a trailing slash.  _Fix submitted by Alexey Arendarenko in pull request [25603](https://github.com/magento/magento2/pull/25603)_. [GitHub-18717](https://github.com/magento/magento2/issues/18717)

### VAT

<!--- ENGCOM-7458-->

*  Corrected the VAT Validation URL for [EU Vat numbers](http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl).  _Fix submitted by Shikha Mishra in pull request [27886](https://github.com/magento/magento2/pull/27886)_. [GitHub-27874](https://github.com/magento/magento2/issues/27874)

### Web API framework

<!--- MC-29891-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/orders` calls.

<!--- MC-30675-->

*  Corrected issues with the POST `/rest/default/async/bulk/V1/products` calls.

<!--- ENGCOM-6945-->

*  The `getList` method has been refactored to retrieve the `is_subscribed` extension attribute. Previously, you could not retrieve this attribute when fetching a customer entity through the API. _Fix submitted by enriquei4 in pull request [25311](https://github.com/magento/magento2/pull/25311)_. [GitHub-13252](https://github.com/magento/magento2/issues/13252)

<!--- ENGCOM-6500-->

*  Updating customer information through `/V1/customers/:id` no longer resets the `group_id` unnecessarily. Previously, when you updated a customer through REST, the customer group was changed to 1 if the body did not contain a customer group. _Fix submitted by MaxRomanov4669 in pull request [25958](https://github.com/magento/magento2/pull/25958)_. [GitHub-14663](https://github.com/magento/magento2/issues/14663)

<!--- ENGCOM-6920-->

*  Nullable getters in service contracts no longer throw reflection errors when used in the web API. Methods that can return null and a valid type now working correctly regardless of order, too.  _Fix submitted by Marco K̦pcke in pull request [25806](https://github.com/magento/magento2/pull/25806)_. [GitHub-25656](https://github.com/magento/magento2/issues/25656)

<!--- ENGCOM-7075-->

*  You can now use POST `/V1/guest-carts/:cartId/items` to add products to a specific cart. Previously, when you used this call, Magento ignored the value of `cartId`. _Fix submitted by Vadim Malesh in pull request [27172](https://github.com/magento/magento2/pull/27172)_. [GitHub-14086](https://github.com/magento/magento2/issues/14086)

<!--- ENGCOM-7102-->

*  You can now use the `PUT /V1/cmsPage/:id` endpoint to save a CMS page title without changing the values of other fields. _Fix submitted by Vadim Malesh in pull request [27237](https://github.com/magento/magento2/pull/27237)_. [GitHub-24704](https://github.com/magento/magento2/issues/24704)

<!--- ENGCOM-7011-->

*  The pagination of results from REST requests is now accurate. Previously, when you requested results from a specific page (for example, `page_size` = 1 and a `current_page` value that was out of scope), the call returned repeated the last page of results rather than an informative message .  _Fix submitted by Lukasz Bajsarowicz in pull request [26988](https://github.com/magento/magento2/pull/26988)_. [GitHub-26986](https://github.com/magento/magento2/issues/26986), [GitHub-8099](https://github.com/magento/magento2/issues/8099)

<!-- ENGCOM-6540-->

*  The result of GET `/V1/orders/items/{id}` now includes an extension attribute element that includes  gift message data. _Fix submitted by Laura Folco in pull request [25946](https://github.com/magento/magento2/pull/25946)_. [GitHub-19093](https://github.com/magento/magento2/issues/19093)

### Wishlist

<!--- MC-29988-->

*  A wishlist now works as expected when it is enabled at the store-view level and disabled at the global level. Previously, when these settings were in place, adding a product to a wishlist resulted in a 404 error.

<!--- ENGCOM-6518-->

*  We’ve improved the error message that is displayed when a customer tries to share their wishlist with more email addresses than is permitted.  _Fix submitted by divyajyothi5321 in pull request [26066](https://github.com/magento/magento2/pull/26066)_. [GitHub-26064](https://github.com/magento/magento2/issues/26064)

<!--- ENGCOM-6723-->

*  Magento now displays the My Wishlist page as expected in displays with resolution greater than  768px and less than 1023px. _Fix submitted by Hitesh in pull request [26546](https://github.com/magento/magento2/pull/26546)_. [GitHub-26543](https://github.com/magento/magento2/issues/26543)

<!--- ENGCOM-7062-->

*  The email generated when you click **Share Wishlist** now displays the same product images as the Wishlist page. _Fix submitted by Michael Bottens in pull request [27125](https://github.com/magento/magento2/pull/27125). [GitHub-27124](https://github.com/magento/magento2/issues/27124)_

<!--- ENGCOM-6602-->

*  Customers can now add to a wishlist both a simple product that is part of grouped product and the same simple product with a different quantity.  _Fix submitted by MaxRomanov4669 in pull request [26258](https://github.com/magento/magento2/pull/26258)_. [GitHub-11209](https://github.com/magento/magento2/issues/11209)

### WYSIWYG

<!--- ENGCOM-6275-->

*  The WYSIWYG image uploader now uses `pub/media/wysiwyg` as the storage root. Previously, the uploaded used `pub/media` as its storage root, which made those uploaded images inaccessible after recent changes to image uploader code. _Fix submitted by Pieter Hoste in pull request [24878](https://github.com/magento/magento2/pull/24878)_. [GitHub-22609](https://github.com/magento/magento2/issues/22609)

<!--- ENGCOM-7045-->

*  TinyMCE4 on the Chrome browser now handles double-byte characters as expected. Previously, TinyMCE4 could not properly handle double-byte characters (such as used in Chinese) on Chrome. _Fix submitted by Hirokazu Nishi in pull request [25454](https://github.com/magento/magento2/pull/25454)_. [GitHub-24637](https://github.com/magento/magento2/issues/24637)

## Known issues -- General

**Issue**: Anomalies in storefront error messages occur in deployments where PHP 7.4.2 is installed. When Magento 2.4.0 is deployed with PHP 7.4.2, the space symbols in storefront error messages are replaced with plus (+) characters.  This bug is native to PHP 7.4.2 and cannot be corrected by Magento. **Workaround**: Magento recommends using other versions of PHP 7.4.x. See [Raw message data display on storefront](https://support.magento.com/hc/en-us/articles/360045804332)  Knowledge Base article. <!--- MC-34170-->

**Issue**: Merchants cannot add ordered products to a package from the Admin Create Package page and save the package. See [Shipping labels creation](https://support.magento.com/hc/en-us/articles/360046750171) Knowledge Base article. The **MC-35514-2.4.0-CE-composer.patch** hotfix  for this issue is now available from [Releases](https://magento.com/tech-resources/download). <!--- MC-35514-->

**Issue**: Magento displays this error message during installation of Magento with third-party extensions that have dependencies on APIs for the `Store` module in CLI commands: `The default website isn't defined. Set the website and try again`. **Workaround**: Remove dependencies on third-party extensions from Composer, install Magento, and then install third-party extensions.

**Issue**: The **Add selections to my cart** button on the bottom of the shopping cart does not work. **Workaround**: Use the **Add selections to my cart** button on the top of the page. See [Add selections to my cart button does not work](https://support.magento.com/hc/en-us/articles/360045838312) Knowledge Base article. <!--- MC-35313-->

**Issue**: Merchants can’t create a new order from the Admin because the **Add Products By SKU** and **Add Products**  buttons are missing from the order creation page when JavaScript bundling is enabled.  **Workaround**: Disable the JavaScript bundling for your Magento deployment. <!--- MC-36044-->

**Issue**: Magento throws a `404 not found` error when a customer tries to remove reward points when checking out an order being shipped to multiple addresses. <!--- MC-35955-->

**Issue**: Editing a configurable product from a customer’s wishlist results in the following unexpected behavior: An unexpected field appears on the Configure Product page, and the Configure Product page does not disappear after you click **OK**. Magento also displays this message: `Please load Wish List item`. **Workaround**: Reload the Configure Product page. <!--- MC-35617-->

**Issue**:  Customers cannot change the number of orders displayed per page when the Orders list spans multiple pages. Currently, Magento displays this message when you navigate to the last page of orders and try to change the number of orders displayed per page: `You have placed no orders`. See [Orders display error](https://support.magento.com/hc/en-us/articles/360046802271) Knowledge Base article.  **Workaround**: Re-opening the My Orders page will result in the display of the Orders list. <!--- MC-34153-->

**Issue**: Directly clicking on the **Export Tax Rates** button of the Add New Tax Rule page (**Stores** > **Tax Rules**)  does not download the `tax_rates.csv` file as expected. **Workaround**: Click the edge of the  **Export Tax Rates** button.  See [Export Tax Rates does not work](https://support.magento.com/hc/en-us/articles/360045850032)  Knowledge Base article. <!--- MC-35345-->

**Issue**: The **Refresh** buttons on the Last Ordered Items,  Products in Comparison List, and Recently Compared Products sections of the Admin Customer Activities page do not work as expected. Currently, Magento scrolls the page  every time the **Refresh** button is clicked and does not display the product name. See [Refresh on Customer's Activities does not work](https://magento.zendesk.com/hc/en-us/articles/360046091332) Knowledge Base article. <!--- MC-35296-->

## Known issues -- VBE

### Amazon Pay

*  **Issue**: Payment methods are missing from the checkout workflow when a customer clicks **Return to standard checkout** during checkout with Amazon Pay. **Workaround**: Refresh the checkout page to display the missing methods.  <!--- BUNDLE-2661-->

*  **Issue**: Magento displays two identical Amazon Pay methods in the Payment Method drop-down list that is available when creating a new cart price rule.  <!--- BUNDLE-2685-->

### Braintree

*  **Issue**: Magento displays an error when an administrator tries to access the Braintree Settlement Report page (**Admin** > **Reports** ). Currently, Magento displays this message: `An error has happened during application run. See exception log for details`. See [Braintree Settlement Report fails to load](https://support.magento.com/hc/en-us/articles/360046798251) Knowledge Base article. The **BUNDLE-2683_SettlementReport.patch** hotfix for this issue is now available from [Releases](https://magento.com/tech-resources/download). <!--- BUNDLE-2683-->

*  **Issue**: Merchants can’t create partial invoices for orders in deployments where Venmo is enabled and the **Enable Vault for Card Payments** setting is disabled. Currently, Magento displays this error: `The "vault_capture" command doesn't exist. Verify the command and try again`.  <!--- BUNDLE-2647-->

*  **Issue**: Magento displays two identical PayPal methods in the Payment Method drop-down list that is available when creating a new cart price rule.   <!--- BUNDLE-2686-->

*  **Issue**: Magento throws an error when opening **Sales** > **Braintree Virtual Terminal**. Although the form contains corrupted UI elements,  it still accepts payments. **Workaround**: Save the  correct Braintree credentials, which will fix the collapsed input fields. See [Braintree Virtual Terminal page is corrupted](https://support.magento.com/hc/en-us/articles/360046800071)  Knowledge Base article. The **BUNDLE-2670_VirtualTerminal.patch** hotfix for this issue is now available from [Releases](https://magento.com/tech-resources/download). <!--- BUNDLE-2670-->

*  **Issue**: Magento displays an error message in the following countries when a customer selects a local payment method during checkout: Belgium, Netherlands, Italy, Spain, and Poland.  **Workaround**: Ignore the error message and continue with payment.

### Klarna

*  **Issue**:  Leaving the **Design Theme** field blank in Klarna On-Site Messaging  (**Admin**  >  **Stores**  >  **Configuration**  > **Klarna settings**) results in  a blank page.  **Workaround**: Select a design theme and save.  <!--- BUNDLE-2623-->

### Vertex

*  **Issue**:  Magento displays an  **Address verification** button on the shipping section of the checkout workflow even when address validation is disabled. The address validator doesn’t re-check the updated address and continues to display a message that indicates that the address is invalid when a customer enters a correct address after first entering an incorrect address even when address validation is enabled. **Workaround**: Disable Vertex address validation. <!--- BUNDLE-2604-->

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
