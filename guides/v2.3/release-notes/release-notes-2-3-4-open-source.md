---
group: release-notes
title: Magento Open Source 2.3.4 Release Notes
---

Magento Open Source 2.3.4 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods.

This release includes over 220 functional fixes to the core product and  over 30 security enhancements. It includes resolution of over 275 contributions by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.4) provides. Patch 2.3.3.1 (Composer package 2.3.3-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.3.  For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.3-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Adobe Security Bulletin for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.4) have been ported to 2.2.11, 1.14.4.4, and 1.9.4.4, as appropriate.

#### Security enhancements and fixes to core code

Additional security enhancements include:

* **Removal of custom layout updates and the deprecation of layout updates to remove the opportunity for Remote Code Execution (RCE)**.  The **Custom Layout Update** field on the CMS Page Edit, Category Edit, and Product Edit pages has now been converted to a selector. You can no longer specify an entity-specific layout update with text but instead must create a physical file that  contains the layout updates and select it for use. The name of the file containing an update must follow the  conventions described here. <!--- MC-16129-->

* **Redesigned  content template features so that only whitelisted variables can be added to templates**. This avoids the situation where administrator-defined templates such as email, newsletters, and CMS content can include variables and directives that can directly call PHP functions on objects.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and PCI compliance.

* **Enhancements to the message queue framework**. Magento now supports the latest release of RabbitMQ v3.8, which is the third-party technology that underlies the Magento message queue framework. <!--- MC-14871-->
  
* **Improved page caching and session storage**. This release has been tested on the latest stable release of Redis v5.0.6. <!--- MC-14877-->

* **Enhanced support for Maria DB 10.2**. This release introduces a new abstraction layer that permits retrieval of information about tables and columns in deployments that implement declarative schema and MariaDB 10.2. Previously, when you ran `setup:upgrade` in a deployment with those features,  Magento threw an error indicating that the the schema was out-of-date. <!--- MC-16319 MC-17633-->

* The core integration of the Authorize.net payment method has been deprecated. Please use the official payment integration that is available on Marketplace.
  
**Note**: Magento 2.3.4 has not been tested with PHP 7.1. PHP 7.1 reached EOL (End of Life) on December 1, 2019. We recommend updating your deployment to a supported version of PHP. See [Magento 2.3 technology stack requirements](https://devdocs.magento.com/guides/v2.3/install-gde/system-requirements-tech.html) for information about supported versions.

### Performance boosts

Merchants and customers will see performance improvements as a result of these enhancements:

* Redundant non-cached requests to the server on catalog pages have been eliminated by refactoring the customer section invalidation mechanism and improving banner cache logic. <!--- MC-19107 MC-19249-->

* PHTML files have been refactored to better support parsing by the bundling mechanism. Our new bundling mechanism now identifies all dependencies on JavaScript. <!--- MC-19242-->

* Added the ability to disable statistic collecting for Reports module by default. A new configuration setting (**System Configuration** > **General** > **Reports** > **General Options**)  allows merchants to completely or partially disable Magento Reports. (Statistics collection for the Reports module is disabled by default. Magento recommends disabling Reports functionality for performance reasons when this capability is not required.)  <!--- MC-20322-->

### Infrastructure improvements

This release contains 250 enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, CMS, and B2B.

### Merchant tool enhancements

* **Integration with Adobe Stock image galleries**. The new bundled Adobe stock integration extension enables merchants to add high quality media assets to their website content without leaving the Magento Admin. Merchants can use the searchable interface in the Magento Media Gallery to explore, preview, license, and deploy stock images in website content.

### Page Builder

Page Builder enhancements for this release include:

* Improved product sorting. Merchants can now sort by product position in category or list of product SKUs, and sort by defined parameters such as name or stock status.

* Improved product carousel. Merchants can choose how to showcase products in their content by selecting from predefined options in Page Builder Products content type.

* The content that merchants create in Page Builder is optimized for rendering on the storefront using the Venia Theme (PWA Studio). Unstructured content (HTML) that Page Builder generates and saves into a data base is converted into structured data that works in React and PWA Studio.

### Inventory Management

Inventory Management enhancements for this release include:

* New in-store pickup feature
* Support for bundle products on non-default stocks
* Performance optimizations

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

Expanded GraphQL functionality and improvements include the following:

* StoreFront API coverage for Catalog and Checkout
* Pricing schema
* Performance
  
See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### Google Shopping ads Channel

[Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

## Backward-incompatible Changes

## Fixed issues

We've fixed hundreds of issues in the Magento 2.3.4 core code.

### Installation, upgrade, deployment

### Backend

### Bundle products

### Cache

### Cart and checkout

### Cart Price rules

### Catalog

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

* If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member @member_name*".

* The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ce}} 2.3.4 using Composer.

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
