---
group: release-notes
title: Magento Open Source 2.4.0 Release Notes
---

Magento Open Source 2.4.0 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes all the improvements to core quality that were included in Magento 2.3.5,  over 100 new fixes to core code, and 30 security enhancements. It includes the resolution of  226 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.5 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

During pre-release, we discovered issues that forced us to create new packages. To expedite delivery, we chose to change the name of the full-release patch from 2.3.5 to 2.3.5-p1. The 2.3.5-p1 package contains all new features and fixes. We also changed the name of the security-only patch for this quarter from 2.3.4-p1 to 2.3.4-p2. Future releases will follow the typical package naming conventions for full-release  and security packages. See [Wishlist error during upgrade to Magento versions 2.3.4-p1 or 2.3.5](https://support.magento.com/hc/en-us/articles/360042621771).

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.4-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

With this quarterly release, we’ve changed how we describe these security issues. Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Inventory Management and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close remote code execution (RCE)  and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

#### Security enhancements and fixes to core code

This release includes over 30 security fixes and platform security improvements. Additional security enhancements include:

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and performance:

### Performance boosts

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Catalog, Sales, PayPal, Elasticsearch, Import, and CMS.

### Inventory Management

Inventory Management enhancements for this release include:

See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

With this release, you can now use

See [Release notes]({{page.baseurl}}/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

PWA Studio 6.0.0 contains both new features and improvements to existing features:

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### dotdigital

This release includes:

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

#### Vertex

This release of Vertex includes the following new feature and enhancements:

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
