---
group: release-notes
title: Magento Open Source 2.4.4 Release Notes
---

{{ site.data.var.ce }} 2.4.4 introduces enhancements to performance and security plus significant platform improvements. Security enhancements include expansion of reCAPTCHA coverage and inclusion of built-in rate limiting. Core composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x.

This release includes over  new fixes to core code and  security enhancements. It includes the resolution of almost  GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in GraphQL.

All known issues identified in the {{ site.data.var.ce }} 2.4.3 release notes have been fixed in this release.

{:.bs-callout-info}
Quarterly releases may contain backward-incompatible changes (BIC). {{ site.data.var.ce }}  2.4.2 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

See [Magento 2.4.2-p2 release notes]({{page.baseurl}}/release-notes/2-4-2-p2.html) for information about Magento 2.4.2-p2.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release.

### Substantial security enhancements

This release includes  security fixes and platform security improvements. Many of these security fixes have been backported to Magento 2.4.3-p2.

#### Thirty-three security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Adobe Security Bulletin](https://helpx.adobe.com/security/products/magento/apsb21-64.html) for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Infrastructure improvements

This release contains enhancements that improve the quality of the framework and the following functional areas:

*  Customer Account

*  Catalog

*  CMS

*  OMS

*  Import/Export

*  Promotions and Targeting

*  Cart and Checkout

*  B2B

*  Staging and Preview

### Platform enhancements

Magento 2.4.3 is not yet compatible with PHP 8.x, but the following platform upgrades bring us closer to future compatibility with PHP 8.x.

*  Core Composer dependencies and third-party libraries have been upgraded to the latest versions that are compatible with PHP 8.x. <!--- MC-39514-->

*  The KnockoutJS library has been upgraded to v3.5.1 (the latest version). <!--- MC-40694-->

*  The deprecated TinyMCE v3 library has been removed. The `Magento_Tinymce3Banner` module and MFTF tests related to TinyMCE v3.x have been removed from Adobe Commerce. <!--- MC-42199 42170 -->

*  Magento 2.4.3 has been tested and confirmed to be compatible with Redis 6.0.12. (Magento 2.4.x remains compatible with Redis 5.x.)

*  Laminas library dependencies have been upgraded to PHP 8.x-compatible versions. Some redundant dependencies have been removed from the `composer.json` file. **Adobe Commerce 2.4.3 uses Laminas 3.4.0**. <!--- MC-39513-->

### Performance enhancements

This release includes enhancements that decrease indexation time for Product Price and Catalog Rule indexers. Merchants can now exclude a website from a customer group or shared catalog, which reduces the number of records for indexing and improves indexing times.

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.1.

### GraphQL

This release adds GraphQL coverage for shared routes. The [route query](https://devdocs.magento.com/guides/v2.4/graphql/queries/route.html) and [RoutableInterface](https://devdocs.magento.com/guides/v2.4/graphql/interfaces/routable-interface.html) support routing requests on product, category, and CMS pages. The `urlResolver` query has been deprecated, and its functionality has been superseded by the `route` query.

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### Page Builder

Page Builder is now available as a bundled extension in Magento Open Source. It is now the default content editing tool for {{ site.data.var.ee }} 2.4.3 and {{ site.data.var.ce }} 2.4.3. It can replace the WYSIWG editor with any third-party module.

Page Builder replaces the TinyMCE editor in the following Admin areas:

*  CMS Page
*  CMS Block
*  Category Description
*  Product Description

All the content created in TinyMCE has been migrated into Page Builder as HTML.

### PWA Studio

For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions.

### Upgrade Compatibility Tool

The scope of the [Upgrade Compatibility Tool]({{ site.baseurl }}/upgrade-compatibility-tool/introduction.html) has been expanded based on feedback from the community. Join our [#upgrade-compatibility-tool](https://magentocommeng.slack.com/archives/C019Y143U9F) Slack channel to get support from the Adobe product team and the community, as well as to help guide the future direction of the tool.

### Vendor Developed Extensions

See the following articles for updates on features and changes for this release:

*  [Amazon Pay](https://docs.magento.com/user-guide/payment/amazon-pay.html)

*  [Braintree](https://docs.magento.com/user-guide/payment/braintree.html)

*  [dotdigital Engagement Cloud]({{ site.baseurl }}/extensions/vendor/dotdigital/release-notes.html)

*  [Klarna](https://docs.magento.com/user-guide/payment/klarna.html)

*  [Vertex Cloud](https://docs.magento.com/user-guide/tax/vertex.html)

*  [Yotpo Product Reviews]({{ site.baseurl }}/extensions/vendor/yotpo/release-notes.html)

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.3 core code.

<!--- MC-41154-->

### Installation, upgrade, deployment

### Adobe Stock Integration

### Backend

### Bundle products

### Cache

### CAPTCHA

### Cart and checkout

### Catalog

### Catalog rule

### CMS content

### Configurable products

### Content security Policy CSP)

### cron

### Custom customer attributes

### Customer

### Directory
 workflow. [GitHub-23371](https://github.com/magento/magento2/issues/23371)

### Downloadable

### EAV

### Email

### Frameworks

### General fixes

### Gift cards

### Gift message

### Google Tag Manager

### GraphQL

### Image

### Import/export

### Index

### Infrastructure

### Invoice

### Media Gallery

### MFTF

#### Refactored tests

The following tests have been refactored to improve execution time:

#### New action groups

#### Deleted action groups

### Newsletter

### Order

### Payment methods

#### PayPal

### Performance

### Pricing

### Product video

### Quote

### Reports

### Reviews

### Rewards

### Sales

### Sales Rule

### Shipping

### Store

### Tax

### Test

### Theme

### Translation and locales

### UI

### URL rewrites

### User

### VersionCMS

### Video

### Web API framework

### Widget

### Wish list

## Known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{ site.data.var.ce }} 2.4.4 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration toolkits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
