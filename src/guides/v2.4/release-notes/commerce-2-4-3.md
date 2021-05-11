---
group: release-notes
title: Adobe Commerce 2.4.3 Release Notes
---

Adobe Commerce 2.4.3 introduces enhancements to performance and security plus significant platform improvements. Security enhancements include expansion of support for the `SameSite` attribute for all cookies. B2B improvements focus on support for online payments for purchase orders. Elasticsearch 7.9.x and Redis 6.x are now supported.

This release includes over 280 new fixes to core code and 35 security enhancements. It includes the resolution of almost 290 GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in GraphQL.

All known issues identified in Magento 2.4.2 have been fixed in this release.

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.4.2 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release provides (for example, Magento 2.4.1-p1). Patch 2.4.0.12 (Composer package 2.4.1-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.4.1. All hot fixes that were applied to the 2.4.1 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.4.1-p1), see [Install Magento using Composer]({{ page.baseurl }}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release.

### Substantial security enhancements

This release includes over 35 security fixes and platform security improvements. All security fixes have been backported to Magento 2.4.1-p1 and Magento 2.3.6-p1.

#### Over 35 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Adobe Security Bulletin](https://helpx.adobe.com/security/products/magento/apsb21-08.html) for a discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

*  Enhancements throughout the codebase to **reduce vulnerability to dependency confusion attacks**. These attacks can trick Composer into installing malicious dependencies. <!--- MC-41195-->

*  **Support for OAuth2.0 for server integrations**. Note that OAuth 2.0 integrations must be created separately from existing, OAuth 1.0, integrations. <!--- MC-38541 39994-->

*  **JSON Web Token (JWT) support for the Magento Framework**. The JWT standard supports creating data with an optional signature and optional encryption (or simply the optional encryption). The https://github.com/web-token/jwt-framework library supports all token types.<!--- MC-38539-->

*  **ReCAPTCHA  coverage has been extended** to include all endpoints that lack corresponding HTML pages.  (This excludes web APIs that are accessed by integration.) <!--- MC-34472-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these functional areas: Customer Account, Catalog, CMS, OMS, Import/Export, Promotions and Targeting, Cart and Checkout, B2B, and Staging and Preview.

### Platform enhancements

*  [**Elasticsearch 7.10.x is now supported**]({{ page.baseurl }}/install-gde/system-requirements.html).  <!--- MC-41128-->

### Performance enhancements

This release includes code enhancements that boost API performance and Admin response time for deployments with large catalogs.

### GraphQL

This release adds GraphQL coverage for the following features:


See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### B2B

Magento 2.4.2 introduces B2B v1.3.1.

This release also includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html).

### PWA Studio

This release of PWA Studio includes:

For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Magento compatibility](https://magento.github.io/pwa-studio/technologies/magento-compatibility/) for a list of PWA Studio versions and their compatible Magento core versions.

### Page Builder

This release includes enhancements to Page Builder content migration and Page Builder CSS customization:

### Interactive In-Product Guidance

Interactive In-Product Guidance provides merchants with usage tips and information from within the Admin on new feature announcements, walk-through guides, on-boarding information, and tool tips.  **Administrators must opt-in from the Admin to receive in-product guidance if this feature is not enabled**. See [Usage Data Collection](https://docs.magento.com/user-guide/stores/admin.html) and [Admin Usage](https://docs.magento.com/user-guide/configuration/advanced/admin.html#admin-usage).

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.1.

### Media Gallery

### Magento Functional Testing Framework (MFTF)

MFTF 3.2.1 is now available. This release introduces error tolerance in both tests and test suite generation. Additional enhancements and bug fixes are described in the [Magento Functional Testing Framework Changelog](https://github.com/magento/magento2-functional-testing-framework/blob/develop/CHANGELOG.md).

### Vendor Developed Extensions

See the following topics for updates on features and changes for this release:

*  [Amazon Pay](https://docs.magento.com/user-guide/payment/amazon-pay.html). Amazon Pay has been deprecated in this release and will be removed in Magento 2.5.0. Magento 2.4.3 and higher will contain only updates for compatibility and fixes for major bugs.

*  [Braintree](https://docs.magento.com/user-guide/payment/braintree.html)

*  [dotdigital Engagement Cloud](https://docs.magento.com/user-guide/marketing/dotdigital/engagement-cloud.html)

*  [Klarna](https://docs.magento.com/user-guide/payment/klarna.html)

*  [Vertex Cloud](https://docs.magento.com/user-guide/tax/vertex.html)

*  [Yotpo Product Reviews]({{ site.baseurl }}/extensions/vendor/yotpo/release-notes.html)

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.2 core code.

### Installation, upgrade, deployment

<!--- MC-38429-->

### AdminGWS

### Adobe Stock Integration

### Analytics

### Braintree

### Bundle products

### Cart and checkout

### Catalog

### Catalog Rule

### Cleanup

#### Typo and grammar cleanup

#### Code cleanup

### Configurable products

### cron

### Custom customer attributes

### Customer

### dotdigital

### Downloadable

### Dynamic block (formerly banner)

### EAV

### Email

### Frameworks

### General fixes

## Gift cards

### Google Tag Manager

### GraphQL

### Grouped products

### Images

### Import/export

## Index

### Infrastructure

### Klarna

### Logging

### Media Gallery

### MFTF

#### New tests

#### New action groups

### Newsletter

### Payment methods

#### PayPal

### Performance

### Persistent

### Pricing

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

### Target rules

### Tax

### Test

### Theme

### Translation and locales

### UI

### Vault

### Vertex

### Web API framework

### Wishlist

## Known issues

### B2B known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-3-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-4-2-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install Adobe Commerce 2.4.3 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
