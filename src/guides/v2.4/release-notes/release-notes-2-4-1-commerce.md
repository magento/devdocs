---
group: release-notes
title: Magento Commerce 2.4.1 Release Notes
---

Magento Commerce 2.4.0 introduces support for

This release includes all the improvements to core quality that were included in Magento 2.4.0, over new fixes to core code, and  security enhancements. It includes the resolution of GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

{:.bs-callout-info}

Minor releases bring substantial code enhancements. Before upgrading to Magento 2.4.1, confirm that your environment meets the minimal [technical stack requirements](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements-tech.html).

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.1 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

{:.bs-callout-info}

The package names of security-only releases are typically appended with -p1. However, we could not avoid deviating from these naming conventions with Magento 2.3.5, which in turn has had a temporary ripple effect on the subsequent security package names. Specifically, the full-feature Magento 2.3.5 release is Magento 2.3.5-p1. The security-only release that we will release when Magento 2.4.0 GAs will be Magento 2.3.5-p2. We hope to return to the usual naming conventions in future releases.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p2) provides. Patch 2.3.5.2 (Composer package 2.3.5-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5-p1. All hot fixes that were applied to the 2.3.5 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.5-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes over 30 security fixes and platform security improvements.

#### Over  security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security Updates Available for Magento](https://helpx.adobe.com/security/products/magento/apsb20-47.html) for a discussion of these fixed issues.

#### Additional security enhancements

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance. Supported versions of PHP and PHPUnit, Elasticsearch, MySQL, and other dependencies are listed in [Magento 2.4 technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these modules: Customer Account, Catalog, CMS, Import, Cart and Checkout, and B2B.

### Performance improvements

### Page Builder

Page Builder now supports PHP 7.4.

### Inventory Management

Inventory Management enhancements for this release include support for in-store pickup and bundle product support. See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent Inventory Management bug fixes.

### GraphQL

GraphQL enhancements include:

See  the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on this and other enhancements. See [Release notes]({{page.baseurl}}/graphql/release-notes.html) for a detailed discussion of recent GraphQL bug fixes.

### PWA Studio

See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions. For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### B2B

This release also includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### Magento Functional Testing Framework (MFTF)

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It introduces both quality and UX improvements to these extensions and an expansion of MFTF coverage.

Magento Marketplace extension vendors should confirm that their extensions are compatible with PHP 7.4 when publishing a new version of their extension for Magento 2.4.1.

#### dotdigital

This release includes these enhancements:

#### Amazon Pay

This release includes:

#### Braintree Payments

This bundled extension replaces our core Braintree integration, which has been removed in this release. See [Braintree Payments](https://marketplace.magento.com/paypal-module-braintree.html).

#### Klarna

This release includes new on-site messaging options to help shoppers understand the available credit and financing options. It also includes improvements to:

#### Vertex

This release of Vertex includes the following new feature and enhancements:

#### Yotpo

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.1 core code.
<!--- MC-->

### Installation, upgrade, deployment

### AdminGWS

### Adobe Stock Integration

### Analytics

### Backend

### Bundle products

### Cache

### Cart and checkout

### Cart price rule

### Catalog

### Catalog Rule

### Catalog widget

### CMS content

### Cleanup

### Configurable products

### Cookies

### Custom customer attributes

### Customer

### Customer segment

### Directory

### Downloadable

### Dynamic block (formerly banner)

### EAV

### Email

### Frameworks

### General fixes

### Gift cards

### Google Tag Manager

### GraphQL

### Grouped products

### Images

### Import/export

### Index

### Infrastructure

### Layered navigation

### Logging

### Media Gallery

### Media Storage

### New Relic

### Newsletter

### Orders

### Payment methods

#### PayPal

### Performance

### Pricing

### Product alert

### Product video

### Reports

### Return Merchandise Authorizations (RMA)

### Reviews

### Rewards

### Sales

### Sales Rule

### Search

### Shipping

### Sitemap

### Staging

### Store

### Swatches

### TargetRule

### Tax

### Test

#### Integration tests

#### PHP unit tests

### Theme

### Translation and locales

### UI

### URL

### URL rewrites

### VAT

### Visual Merchandiser

### Wishlist

### WYSIWYG

## Known issues -- general

### B2B

## Known issues -- VBE

### Amazon Pay

### Braintree

### dotdigital

### Klarna

### Vertex

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-1-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-1-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Magento Commerce 2.4.0 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
