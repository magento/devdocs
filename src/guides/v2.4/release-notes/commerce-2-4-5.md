---
group: release-notes
title: Adobe Commerce 2.4.5 Release Notes
---

{{ site.data.var.ee }} 2.4.5 introduces support for

This release includes almost quality fixes and enhancements.

{:.bs-callout-info}
Releases may contain backward-incompatible changes (BIC). {{ site.data.var.ee }} 2.4.5 contains backward-incompatible changes. To review these backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Other release information

Although code for these features is bundled with quarterly releases of the {{ site.data.var.ee }} core code, several of these projects (for example, B2B, Page Builder, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

### Hotfixes included in this release

{{ site.data.var.ee }} 2.4.5 includes resolution of all issues that were addressed by the following hotfixes, which were provided for {{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.4, 2.4.3-p2, and 2.3.7-p3:


## {{ site.data.var.ee }} 2.4.5 highlights

Look for the following highlights in this release.

### Security enhancements

This release includes  security fix and platform security improvements. This security fix has been backported to {{ site.data.var.ee }} 2.4.3-p3 and {{ site.data.var.ee }} 2.3.7-p4.

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts:

*  IP allowlisting
*  [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html)
*  use of a VPN
*  use of a unique location rather than `/admin`
*  good password hygiene

See Adobe Security Bulletin for the latest discussion of these fixed issues.

#### Additional security enhancements

Security improvements for this release improve compliance with the latest security best practices, including:

### Platform enhancements

{{ site.data.var.ee }} 2.4.5 now supports

### Performance and scalability enhancements

{{ site.data.var.ee }} performance enhancements 

Performance enhancements in this release:

### GraphQL

This release includes these GraphQL enhancements:

#### New mutations

*  **Performance improvements**:

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on these enhancements.

### B2B

This release includes multiple bug fixes. See [B2B Release Notes]({{page.baseurl}}/release-notes/b2b-release-notes.html)

### PWA Studio

PWA Studio v.12.x.x is compatible with {{ site.data.var.ee }} 2.4.5. It includes support for . For information about enhancements and bug fixes, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases). See [Version compatibility](https://developer.adobe.com/commerce/pwa-studio/integrations/adobe-commerce/version-compatibility/) for a list of PWA Studio versions and their compatible {{ site.data.var.ee }} core versions.

### PayPal Payment enhancements

### Live Search

### Accessibility updates

This release brings increased conformance to standard accessibility guidelines.

### Page Builder

## Fixed issues

<!--- AC-1589-->

We are fixing hundreds of issues in the {{ site.data.var.ee }} 2.4.5 core code.

### Installation, upgrade, deployment

### Accessibility

### AdminGWS

### Backend

### Bundle products

### Cache

### Cart and checkout

### Catalog

### Catalog rule

### Configurable products

### Customer

### Customer segment

### Email

### Frameworks

### General fixes

### Gift cards

### GraphQL

### Image

### Import/export

### Index

### Infrastructure

#### Library removals and deprecations

#### Library upgrades

### Invoice

### Logging

### {{ site.data.var.ee }} coding standard

### Media Gallery

### MFTF

#### New action groups

#### Action groups

Repetitive actions have been replaced with action groups in these tests:

#### New tests

#### Refactored tests

### Order

### Payment methods

#### PayPal

### Performance

### Pricing

### ProductAlert

### Product video

### Return Merchandise Authorizations (RMA)

### Reviews

### Sales

### Sales Rule

### Search

### Shipping

### Staging

### Store

### Tax

### Test

#### Unit tests

### Theme

### Translations and locales

### UI

### URL rewrites

### Web API framework

### Wish list

## Known issues

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request number, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-4-5-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.4.5 using [Composer]({{ page.baseurl }}/install-gde/composer.html).

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento-commerce/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.