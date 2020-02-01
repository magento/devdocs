---
group: release-notes
title: Magento Open Source 2.3.5 Release Notes
---

Magento Open Source 2.3.5 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods.

This release includes over  functional fixes to the core product and  over security enhancements. It includes resolution of over  contributions by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5) provides. Patch 2.3.4.1 (Composer package 2.3.4-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.4. All hot fixes that were  applied to the 2.3.4 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.) For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p1), see [Install Magento using Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

With the 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento  (APSB20-02)](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Adobe Security Bulletin for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.5) have been ported to 1.14.4.5, and 1.9.4.5, as appropriate.

#### Security enhancements and fixes to core code

Additional security enhancements include:

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance

### Performance boosts

Merchants and customers will see performance improvements as a result of these enhancements:

### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, and CMS.

### Merchant tool enhancements

### Inventory Management

Inventory Management enhancements for this release include:

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

This release includes improved GraphQL coverage for search, layered navigation, cart functionality. The following mutations/queries are available:

See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### dotdigital

### Google Shopping ads Channel

[Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.5 core code.

<!--- MC--->

### Installation, upgrade, deployment

### Analytics

### Backend

### Bundle products

### Cache

### Cart and checkout

### Catalog

### CatalogInventory

### Cleanup and simple code refactoring

### CMS content

### Command-line interface (CLI commands)

### Configurable products

### Cookies

### Cron

### Customer

### Custom customer attribute

### Database media storage

### Declarative schema

### Downloadable products

### EAV

### Email

### Frameworks

### JavaScript framework

### General fixes

### Image

### Import/export

### Index

### Infrastructure

### Inventory

### Layered navigation

### Media storage

### Newsletter

### Orders

### Payment methods

### Performance

### Reports

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

### Translation and locales

### UI

### URL rewrites

### Web API framework

### Wishlist

### WYSIWYG

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
