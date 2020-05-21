---
group: release-notes
title: Magento Open Source 2.4.0 Release Notes
---

Magento Open Source 2.4.0 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes all the improvements to core quality that were included in Magento 2.3.5,  over 100 new fixes to core code, and 30 security enhancements. It includes the resolution of  226 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.0 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

The name of the security-only patch for this quarter is 2.3.5-p2. Future releases will follow the typical package naming conventions for full-release  and security packages.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.4-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

With this quarterly release, we’ve changed how we describe these security issues. Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Inventory Management and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin.

#### Security enhancements and fixes to core code

This release includes over 30 security fixes and platform security improvements. Additional security enhancements include:

*  **Two-factor authentication (2FA) is now enabled by default for the Magento Admin**. Admin users must first configure their 2FA before logging into the Admin through either the UI or a web API. 2FA is enabled by default and cannot be disabled. This extra step of authentication makes it harder for malicious users to log in to the Admin without authorization. See [Two-factor Authentication (2FA)]({{page.baseurl}}/security/two-factor-authentication.html). <!--- MC-22631-->

*  **Template filter strict mode is now enabled by default**. Magento components (including CMS pages and blocks) that use the template filter in legacy mode can be vulnerable to remote code execution (RCE). Enabling strict mode by default ensures that RCE attacks cannot be deliberately enabled. <!--- MC-22982-->

*  **Data rendering for UI data providers is now disabled by default**. This removes an opportunity for malicious users to execute arbitrary JavaScript. <!--- MC-17356-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance. Supported versions of PHP and PHPUnit, Elasticsearch, MySQL, and other dependencies are listed in [Magento 2.4 technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

*  **PHP 7.4 support introduced and PHP 7.1 and 7.2 deprecated**. Magento 2.4.0 introduces support for PHP 7.4. Installation of Magento 2.4.x requires either PHP 7.4 or 7.3.

*  **Support for PHPUnit 9.x and deprecation of PHPUnit 6.5**. PHP 7.4 requires the use of the latest PHPUnit testing framework, which is PHPUnit 9.x. Magento Marketplace extension vendors must confirm that all new extension versions are compatible with PHP 7.4 and that all  unit and integration tests have been configured to be run with PHPUnit 9.

*  **Elasticsearch 7.x support**. The latest Elasticsearch 7.x version is now the default catalog search engine for Magento Commerce and Open Source. Elasticsearch version 2.x code has been removed, and Elasticsearch version 5.x has been deprecated. Elasticsearch v6.8 is still supported in Magento 2.4.0 (and 2.3.x). See [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

*  **MySQL 8.0 support**. Magento 2.4.x supports MySQL 8.x. (Magento 2.4.0 was tested with MySQL 8.0.20.) Merchants are encouraged to migrate their deployments to MySQL 8.x to take advantage of its improved performance, security, and reliability. Although MySQL 5.7 is still supported for Magento 2.4.x, MySQL 5.6 is no longer supported. You cannot host Magento 2.4.x with a MySQL 5.6 database. See [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html).

*  **Removal of the MySQL catalog search engine**. The MySQL search engine has been removed from Magento 2.4.0 and replaced as the default search engine with Elasticsearch. Elasticsearch provides superior search capabilities as well as catalog performance optimizations.  All merchants must have Elasticsearch to install and deploy Magento 2.4.0. See [Check the catalog search engine]({{page.baseurl}}/comp-mgr/prereq/prereq-elasticsearch.html).

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. See the [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251)  DevBlog post.

*  **Removal of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on the Magento Marketplace.

*  **MariaDB 10.4 support**. Support for MySQL 8.0 provides the opportunity for merchants to deploy MariaDB 10.4 with Magento. Although merchants can still use MariaDB 10.2 with Magento 2.4.0, we recommend upgrading to MariaDB 10.4 for improved performance and reliability. MariaDB 10.0 and 10.1 are no longer supported (as a result of removing support for MySQL 5.6 in this release).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Customer Account, Catalog, CMS, Import, Cart and Checkout, and B2B.

*  **Removal of core integration of third-party payment methods**. With this release, the Authorize.Net, eWay, CyberSource, and Worldpay payment method integrations have been removed from core code. Merchants should migrate to the official extensions that are available on the Magento Marketplace. See the [Deprecation of Magento core payment integrations](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Magento-core-payment-integrations/ba-p/426445) devblog post. <!--- MC-29029-->

*  **Support for partial-word search for Elasticsearch (new default search engine)**. Elasticsearch now supports the use of  partial words in search terms for  product names and SKUs when using quick search. This capability was supported by the MySQL search engine, which has been deprecated and replaced by Elasticsearch in this release. By default, shoppers can use partial-word search for product names and SKUs, but merchants can extend this capability to custom product attributes by configuring the `search_request.xml` (catalog search configuration) file.

*  **PayPal JavaScript SDK upgrade**. We’ve migrated the PayPal Express Checkout integration to the latest PayPal JavaScript SDK, an SDK that  automatically collects and passes needed risk parameters to PayPal. The behavior of the PayPal Express Checkout payment method remains unchanged. However, upgrading this SDK to the latest version let merchants access the latest features and security enhancements. <!--- MC-30962-->

*  **Deprecation and removal of the Web Set Up Wizard**.

*  **Composer update plugin**. Composer plugin streamlines the  upgrade process by resolving changes that must be made to the root project `composer.json` file before updating to a new Magento product requirement. This plug-in protects against overwriting customizations. See [Upgrade using the Magento composer root plugin](https://devdocs.magento.com/guides/v2.3/comp-mgr/cli/upgrade-with-plugin.html).

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

### Adobe Stock Integration v2.0

**Ability to license stock image previews from the Media Gallery**. Merchants can now find any Adobe Stock preview image in the Media Gallery, which reduces the number of steps required to license stock preview image.

### Magento Media Gallery

This replacement for the former Media Gallery offers a brand-new, searchable interface for Magento media assets. Administrators can now search, filter, and sort images up to 30x faster than they could in the earlier version of this feature. Merchants can use this tool to evaluate storefront image usage.

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

This release also removes deprecated actions and upgrades scripts added to upgrade tests to MFTF major version requirements.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It introduces both quality and UX improvements to these extensions and an expansion of MFTF coverage.

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

*  Updates to CSP whitelists
*  Ability to do multiple authorizations for a multi-item order
*  Support for Japanese addresses

#### Braintree Payments

This extension replaces our core Braintree integration. It provides the same features as the Braintree core integration. See [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html).

#### Klarna

This release includes additional on-site messaging options and improvements to:

*  refunds
*  API efficiency
*  cookies and unit tests

#### Vertex

This release of Vertex includes the following new feature and enhancements:

*  Improvements to Admin UI configuration
*  Removal of unnecessary plugins associated with Admin order creation, which has improved extension performance
*  Replacement of installation and upgrade scripts with XML schema files and patches
*  Removal of deprecated code (ApiClient and ClientInterface) and replacement with service-specific interfaces

#### Yotpo

Yotpo is now integrated with Page Builder.

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.0 core code.

### Installation, upgrade, deployment

### Adobe stock integration

### Bundle products

### Cache

### Cart and checkout

### Catalog

### CatalogInventory

### Catalog Price Rule

### Catalog widget

### Cleanup and simple code refactoring

### CMS content

### Configurable products

### Cron

### Custom customer attribute

### Customer

### EAV

### Email

### Frameworks

### JavaScript framework

### General fixes

### Import/export

### Index

### Infrastructure

### Inventory

### Newsletter

### Payment methods

### Performance

### Reviews

### Sales

### Sales Rule

### Search

### Shipping

### Sitemap

### Store

### Swagger

### Swatches

### Tax

### Testing

### Theme

### Translation and locales

### UI

### URL rewrites

### Web API framework

### Wishlist

### WYSIWYG

## Known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Open Source 2.4.0 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
