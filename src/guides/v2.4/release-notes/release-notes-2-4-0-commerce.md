---
group: release-notes
title: Magento Commerce 2.4.0 Release Notes
---

Magento Commerce 2.4.0 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes all the improvements to core quality that were included in Magento 2.3.5,  over 100 new fixes to core code, and 30 security enhancements. It includes the resolution of  226 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.5 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

During pre-release, we discovered issues that forced us to create new packages. To expedite delivery, we chose to  change the name of the full-release patch from 2.3.5 to 2.3.5-p1. The 2.3.5-p1 package contains all new features and fixes. We also changed the name of the security-only patch for this quarter from 2.3.4-p1 to 2.3.4-p2. Future releases will follow the typical package naming conventions for full-release  and security packages. See [Wishlist error during upgrade to Magento versions 2.3.4-p1 or 2.3.5](https://support.magento.com/hc/en-us/articles/360042621771).

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.5-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.5-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

With this quarterly release, we have changed how we describe these security issues. Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

#### Security enhancements and fixes to core code

This release includes over 30 security fixes and platform security improvements. Additional security enhancements include:

*  **Two-factor authentication (2FA) is now enabled by default for the Magento Admin**. Admin users must first configure their 2FA before logging into the Admin through either the UI or an API. 2FA is enabled by default and cannot be disabled. This extra step of authentication makes it harder for malicious users to log in to the Admin without authorization. <!--- MC-22631-->

*  **Template filter strict mode is now enabled by default**. Magento components (including CMS pages and blocks) that use the template filter in legacy mode can be vulnerable to remote code execution (RCE). Enabling strict mode by default ensures that RCE attacks cannot be deliberately enabled. <!--- MC-22982-->

*  **Data rendering for UI data providers is now disabled by default**. This removes an opportunity for malicious users to execute arbitrary JavaScript. <!--- MC-17356-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance:

*  **PHP 7.4 support introduced and PHP 7.1 and 7.2 deprecated**. Magento 2.4.0 introduces support for PHP 7.4. Installation of magento 2.4.x requires either PHP 7.4 or 7.3.

*  **Support for PHPUnit 9.x and deprecation of PHPUnit 6.5**. PHP 7.4 requires the use of the latest PHPUnit testing framework, which is PHPUnit 9.x. Magento Marketplace extension vendors must confirm that all new extension versions are compatible with PHP 7.4 and that all  unit and integration tests have been configured to be run with PHPUnit 9.

*  **Elasticsearch 7.x support**. The latest Elasticsearch 7.x version is now the default catalog search engine for Magento Commerce and Open Source. Elasticsearch versions 2.x and 5.x have been deprecated and removed from the code. Elasticsearch v6.8 is still supported in Magento 2.4.0 (and 2.3.x).

*  **MySQL 8.0 support**. Magneto 2.4.x supports MySQL 8.x. (Magento 2.4.0 was tested with MySQL 8.0.20.) Merchants are encouraged to migrate their deployments to MySQL 8.x to take advantage of its improved performance, security, and reliability. Although MySQL 5.7 is still supported for Magento 2.4.x, MySQL 5.6 is no longer supported. You cannot host Magento 2.4.x with a MySQL 5.6 database.

*  **Removal of the MySQL catalog search engine**. The MySQL search engine has been removed from Magento 2.4.0 and replaced as the default search engine with Elasticsearch. Elasticsearch provides superior search capabilities as well as catalog performance optimizations.  All merchants must have Elasticsearch to install and deploy Magento 2.4.0.

*  **Migration of dependencies on Zend Framework to the [Laminas project](https://getlaminas.org/about/foundation)** to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated. See the [Migration of Zend Framework to the Laminas Project](https://community.magento.com/t5/Magento-DevBlog/Migration-of-Zend-Framework-to-the-Laminas-Project/ba-p/443251)  DevBlog post.

*  **Removal of the core integration of the Signifyd fraud protection code**. This core feature is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on the Magento Marketplace. <!--- MC-31295—>

*  **MariaDB 10.4 support**. Support for MySQL 8.0 provides the opportunity for merchants to deploy MariaDB 10.4 with Magento. Although merchants can still use MariaDB 10.2 with Magento 2.4.0, we recommend upgrading to MariaDB 10.4 for improved performance and reliability. MariaDB 10.0 and 10.1 are no longer supported (as a result of removing support for MySQL 5.6 in this release).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Customer Account, Catalog, CMS, Import, Cart and Checkout, and B2B.

*  **Removal of core integration of third-party payment methods**. With this release, the Authorize.Net, eWay, CyberSource, and Worldpay payment method integrations have been removed from core code. Merchants should migrate to the official extensions that are available on the Magento Marketplace. See the [Deprecation of Magento core payment integrations](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Magento-core-payment-integrations/ba-p/426445) devblog post. <!--- MC-29029-->

*  **Support for partial-word search for Elasticsearch (new default search engine)**. Elasticsearch now supports the use of  partial words in search terms for  product names and SKUs when using quick search. This capability was supported by the MySQL search engine, which has been deprecated and replaced by Elasticsearch in this release. By default, shoppers can use partial-word search for product names and SKUs, but merchants can extend this capability to custom product attributes by configuring the search_request.xml (catalog search configuration) file.

*  **PayPal JavaScript SDK upgrade**. We’ve migrated the PayPal Express Checkout integration to the latest PayPal JavaScript SDK, an SDK that  automatically collects and passes needed risk parameters to PayPal. The behavior of the PayPal Express Checkout payment method remains unchanged. However, upgrading this SDK to the latest version let merchants access the latest features and security enhancements. <!--- MC-30962-->

*  **Deprecation and removal of the Web Set Up Wizard**.

### Adobe Stock Integration v2.0

**Ability to license stock image previews from the Media Gallery**. Merchants can now find any Adobe Stock preview image in the Media Gallery, which reduces the number of steps required to license stock preview image.

### Magento Media Gallery

This replacement for the former Media Gallery offers a brand-new, searchable interface for Magento media assets. Administrators can now search, filter, and sort images up to 30x faster than they could in the earlier version of this feature. Merchants can use this tool to evaluate storefront image usage.

### Page Builder

Page Builder now supports PHP 7.4, which brings it in line with the core product's PHP support.

### Inventory Management

Inventory Management enhancements for this release include support for in-store pickup and bundle product support. See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent Inventory Management bug fixes.

### GraphQL

GraphQL enhancements include support for Inventory In-Store Pickup. See  the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on this and other enhancements. See [Release notes]({{page.baseurl}}/graphql/release-notes.html) for a detailed discussion of recent GraphQL bug fixes.

### PWA Studio

PWA Studio 6.0.0 contains both new features and improvements to existing features:

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### dotdigital

This release includes:

### B2B

This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Product Recommendations

Magento’s Product Recommendations is a new marketing tool that merchants can use to increase conversions, boost revenue, and stimulate shopper engagement. It is powered by Adobe Sensei, which uses artificial intelligence and machine-learning algorithms to perform a deep analysis of aggregated shopper data. This data, when combined with your Magento catalog, results in highly engaging, relevant, and personalized experiences for the shopper. See [Product Recommendations](https://devdocs.magento.com/recommendations/product-recs.html).

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

### Magento Functional Testing Framework (MFTF)

MFTF v3.0.0 includes these new features and includes support for PHP 7.4 and PHPUnit 9:

*  MFTF helpers, which can create custom actions outside of the test framework
*  schema updates for test entities
*  sub-folders in test modules
*  nested assertion syntax
*  static check that checks and reports references to deprecated test entities

This release also removes deprecated actions and upgrades scripts added to upgrade tests to MFTF major version requirements.

#### Klarna

#### Vertex

This release of Vertex includes the following new feature and enhancements:

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.0 core code.

### Installation, upgrade, deployment

### Adobe stock integration

### Analytics

### Bundle products

### Cache

### Cart and checkout

### CatalogInventory

### Catalog Price Rule

### Catalog widget

### Cleanup and simple code refactoring

### CMS content

### Configurable products

### Cron

### Custom customer attributes

### Customer

### Customer segment

### Dynamic block (formerly banner)

### EAV

### Email

### Frameworks

*  Dependencies on Zend Framework have been migrated to the [Laminas project](https://getlaminas.org/about/foundation) to reflect the transitioning of Zend Framework to the Linux Foundation’s Laminas Project. Zend Framework has been deprecated.

### JavaScript framework

### General fixes

### Gift cards

### Gift wrapping

### Google Tag Manager

### Import/export

### Index

### Infrastructure

### Inventory

### Layered navigation

### Logging

### Newsletter

### Payment methods

<!--- MC--->

*  The integration of third-party payment methods into the core Magento code has been deprecated. With this release, the integrations of the Authorize.Net, eWay, CyberSource, and Worldpay payment methods are deprecated. These core features are no longer supported and will be removed in the next minor release (2.4.0). Merchants should migrate to the official extensions that are available on the Magento Marketplace.

<!--- MC--->

*  The WorldPay payment integration with the Magento core has been deprecated. Please use the official Marketplace extension instead.

<!--- MC--->

*  The core implementation of Signifyd fraud protection is no longer supported. Merchants should migrate to the [Signifyd Fraud & Chargeback Protection extension](https://marketplace.magento.com/signifyd-module-connect.html) that is available on Magento Marketplace.

### Performance

### Return Merchandise Authorizations (RMA)

### Reviews

### Rewards

### Sales

### Sales Rule

### Search

### Shipping

### Sitemap

### Store

### Swagger

### Swatches

### Target Rule

### Tax

### Testing

### Theme

### Translation and locales

### UI

### URL rewrites

### Visual Merchandiser

### Wishlist

### WYSIWYG

## Known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.4.0 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
