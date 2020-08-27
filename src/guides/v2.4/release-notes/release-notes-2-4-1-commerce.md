---
group: release-notes
title: Magento Commerce 2.4.1 Release Notes
---

Magento Commerce 2.4.0 introduces support for

This release includes all the improvements to core quality that were included in Magento 2.4.0, over new 150 fixes to core code, and security enhancements. It includes the resolution of GitHub issues by our community members. These community contributions range from minor clean-up of core code to significant enhancements in Inventory Management and GraphQL.

All known issues identified in Magento 2.4.0 have been fixed in this release.

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

This release includes over 15 security fixes and platform security improvements. All security fixes have been backported to Magento 2.4.0-p1 and Magento 2.3.6.

#### Over security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP allowlisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security Updates Available for Magento](https://helpx.adobe.com/security/products/magento/apsb20-47.html) for a discussion of these fixed issues.

#### Additional security enhancements

*  **CAPTCHA has been added to Place Order storefront page and web API**. Order placement is now covered by CAPTCHA for both storefront UI and web API (REST/GraphQL). <!--- MC-36067-->

*  **CAPTCHA has been added to payment-related web APIs**. Web APIs endpoints related to payment information are now covered by CAPTCHA.<!--- MC-36064-->

*  **Support for the SameSite attribute for cookies**. Magento classes that handle cookies have been updated to support the `SameSite` cookie attribute. This attribute is set to `Lax` by default but can be explicitly overridden. <!--- MC-35389-->

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance. Supported versions of PHP and PHPUnit, Elasticsearch, MySQL, and other dependencies are listed in [Magento 2.4 technology stack requirements]({{page.baseurl}}/install-gde/system-requirements-tech.html).

### Infrastructure improvements

This release contains enhancements to core quality, which improve the quality of the Framework and these functional areas: Customer Account, Catalog, CMS, OMS, Import/Export, Promotions and Targeting, Cart and Checkout, B2B, and Staging and Preview.

*  **Site-Wide Analysis Tool (SWAT) integration with Magento Admin**. Merchants can use the new SWAT Admin role to securely access SWAT Customer Detail pages through the Magento Admin. <!--- SWAT-807-->

### Performance improvements

*  **Reduction in the size of network transfers between Redis and Magento**. Plugin list configuration is now generated during the execution of the `di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include:

   *  Network cache size has decreased by 10 - 15%
   *  Execution time for many scenarios has been improved by 3%.<!--- MC-31617-->

*  **Improvement to message queue consumer performance**.

<!--- MC-35884-->

*  **Improved execution time** for `bin/magento` commands.

### Adobe Stock Integration

This release includes Adobe Stock Integration v2.1.0.

### Page Builder

Page Builder now supports full screen mode, which supports easier editing of content. <!--- PB-543-->

### Inventory Management

Inventory Management enhancements for this release include support for in-store pickup and bundle product support. See [Inventory Management release notes]({{page.baseurl}}/inventory/release-notes.html) for a more detailed discussion of recent Inventory Management bug fixes.

### GraphQL

This release includes over 20 GraphQL bug fixes and an expansion of our GraphQl feature set to include the following.
Customers can now:

*  Read and provide reviews for products <!--- MC-32349-->

*  View and select gift wrapping and messaging options <!--- MC-32345-->

*  View information about reward points, apply and remove reward points to their cart, and view reward history <!--- MC-23366-->

*  Use order number to retrieve details about orders, invoices, shipping, and refunds in My account <!--- MC-20635-->

See the [GraphQL Developer Guide]({{page.baseurl}}/graphql/) for details on this and other enhancements.

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

#### Klarna

This release includes new on-site messaging options to help shoppers understand the available credit and financing options. It also includes improvements to:

#### Vertex

This release of Vertex includes the following new feature and enhancements:

## Fixed issues

We have fixed hundreds of issues in the Magento 2.4.1 core code.

### Installation, upgrade, deployment

<!--- MC-36113-->

<!--- MC-33273-->

<!--- MC-34429-->

<!--- MC-36231-->

<!--- MC-35001-->

<!--- MC-17959-->

<!--- MC-33788-->

<!--- ENGCOM-7219-->

<!--- ENGCOM-7459-->

<!--- ENGCOM-7265-->

<!--- ENGCOM-7508-->

<!--- ENGCOM-7800-->

<!--- ENGCOM-7629-->

<!--- ENGCOM-7776-->

<!--- ENGCOM-7853-->

<!--- ENGCOM-7883-->

<!--- ENGCOM-8006-->

<!--- ENGCOM-8020-->

<!--- ENGCOM-7987-->

### AdminGWS

<!--- MC-36164-->

<!--- MC-36330-->

### Adobe Stock Integration

### Analytics

<!--- MC-33314-->

<!--- MC-34352-->

### Backend

### Bundle products

<!--- MC-36281-->

<!--- MC-34261-->

<!--- MC-29908-->

<!--- ENGCOM-7499-->

<!--- ENGCOM-7655-->

<!--- ENGCOM-7985-->

### Cache

<!--- MC-36096-->

<!--- ENGCOM-7780-->

<!--- ENGCOM-7073-->

<!--- ENGCOM-8019-->

### Cart and checkout

<!--- MC-36252-->

<!--- MC-35329-->

<!--- MC-34999-->

<!--- MC-25042-->

<!--- MC-24043-->

<!--- MC-23992-->

<!--- MC-33899-->

<!--- MC-35989-->

<!--- MC-36060-->

<!--- ENGCOM-7746-->

<!--- ENGCOM-7752-->

<!--- ENGCOM-7585-->

<!--- ENGCOM-7457-->

<!--- ENGCOM-5629-->

<!--- ENGCOM-7949-->

<!--- ENGCOM-7968-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-7976-->

<!--- ENGCOM-8019-->

<!--- ENGCOM-7825-->

<!--- ENGCOM-8004-->

<!--- ENGCOM-7950-->

<!--- MC-36418-->

<!--- MC-35607-->

### Cart price rule

### Catalog

<!--- MC-25062-->

<!--- ENGCOM-7292-->

<!--- ENGCOM-7563-->

<!--- ENGCOM-7513-->

<!--- ENGCOM-7420-->

<!--- ENGCOM-7976-->

<!--- MC-34314-->

<!--- MC-34258-->

<!--- MC-32552-->

### Catalog Rule

<!--- MC-33487-->

### Catalog widget

### CMS content

<!--- MC-35971-->

<!--- ENGCOM-7600-->

<!--- ENGCOM-7602-->

<!--- MC-35480-->

### Cleanup

<!--- ENGCOM-7281-->

<!--- ENGCOM-7723-->

<!--- ENGCOM-7745-->

<!--- ENGCOM-7657-->

<!--- ENGCOM-7698-->

<!--- ENGCOM-7753-->

<!--- ENGCOM-7771-->

<!--- ENGCOM-7658-->

<!--- ENGCOM-7680-->

<!--- ENGCOM-7925-->

<!--- ENGCOM-7983-->

<!--- ENGCOM-7993-->

<!--- ENGCOM-7830-->

### Configurable products

<!--- ENGCOM-7214-->
<!--- ENGCOM-7787-->
<!--- MC-33523-->
<!--- MC-33406-->
<!--- MC-29882-->

### Cookies
<!--- ENGCOM-7156-->

### cron

<!--- ENGCOM-7863-->

<!--- MC-35884-->

### CSS

<!--- ENGCOM-7658-->
<!--- ENGCOM-7678-->

### Custom customer attributes

<!--- MC-36387-->
<!--- MC-33645-->

### Customer

<!--- MC-33679-->
<!--- ENGCOM-7793-->
<!--- MC-36226-->
<!--- MC-34655-->
<!--- MC-33522-->
<!--- MC-33357-->
<!--- MC-33150-->

### Customer segment

<!--- MC-33184-->
<!--- MC-36224-->

### Directory

<!--- MC-32271-->

### Downloadable

<!--- MC-29905-->

<!--- MC-35026-->

<!--- MC-34262-->

<!--- ENGCOM-7757-->

<!--- ENGCOM-7796-->

### Dynamic block (formerly banner)

<!--- MC-33266-->

<!--- MC-33286-->

### EAV

### Email

<!--- MC-32789-->

<!--- MC-36015-->

<!--- MC-34107-->

<!--- MC-33905-->

<!--- MC-33700-->

<!--- ENGCOM-7576-->

<!--- ENGCOM-7177-->

<!--- ENGCOM-7506-->

<!--- ENGCOM-7815-->

<!--- MC-33232-->

### Frameworks

<!--- MC-35893-->

<!--- MC-34153-->

<!--- MC-35020-->

<!--- MC-29755-->

<!--- MC-34257-->

<!--- MC-33898-->

<!--- MC-32929-->

### General fixes

<!--- MC-36048-->

<!--- MC-36343-->

<!--- MC-35998-->

<!--- ENGCOM-7286-->

<!--- ENGCOM-7532-->

<!--- ENGCOM-7577-->

<!--- ENGCOM-7591-->

<!--- ENGCOM-7447-->

<!--- ENGCOM-7299-->

<!--- ENGCOM-7193-->

<!--- ENGCOM-7610-->

<!--- ENGCOM-7565-->

<!--- ENGCOM-7682-->

<!--- ENGCOM-7514-->

<!--- ENGCOM-7588-->

<!--- MC-33744-->

<!--- ENGCOM-7511-->

<!--- ENGCOM-7462-->

<!--- ENGCOM-7729-->

<!--- ENGCOM-7810-->

<!--- ENGCOM-7801-->

<!--- ENGCOM-7816-->

<!--- ENGCOM-7724-->

<!--- ENGCOM-7844-->

<!--- ENGCOM-7834-->

<!--- ENGCOM-7854-->

<!--- ENGCOM-7826-->

<!--- ENGCOM-7147-->

<!--- ENGCOM-7868-->

<!--- ENGCOM-7867-->

<!--- ENGCOM-7881-->

<!--- ENGCOM-7857-->

<!--- ENGCOM-7856-->

<!--- ENGCOM-7999-->

<!--- ENGCOM-7962-->

<!--- MC-35550-->

<!--- MC-35230-->

<!--- MC-34369-->

### Gift cards

<!--- ENGCOM-7661-->

<!--- MC-36118-->

<!--- MC-34519-->

<!--- MC-34469-->

<!--- MC-33851-->

### Google Tag Manager

<!--- MC-33729-->

### GraphQL

<!--- MC-34485-->

<!--- MC-32949-->

<!--- MC-31084-->

<!--- MC-36646-->

<!--- MC-34187-->

<!--- ENGCOM-7662-->

<!--- ENGCOM-7559-->

<!--- ENGCOM-7638-->

<!--- ENGCOM-7663-->

<!--- ENGCOM-7512-->

<!--- ENGCOM-7743-->

<!--- ENGCOM-7743-->

<!--- ENGCOM-7559-->

<!--- ENGCOM-7707-->

<!--- ENGCOM-7751-->

<!--- ENGCOM-7750-->

<!--- ENGCOM-7216-->

<!--- ENGCOM-7216-->

<!--- ENGCOM-7732-->

<!--- ENGCOM-7733-->

<!--- ENGCOM-7821-->

<!--- ENGCOM-7838-->

<!--- ENGCOM-7839-->

<!--- ENGCOM-7841-->

### Grouped products

### Images

<!--- ENGCOM-7691-->

### Import/export

<!--- MC-35479-->

<!--- ENGCOM-7616-->

<!--- ENGCOM-7673-->

<!--- ENGCOM-7995-->

<!--- MC-33730-->

<!--- MC-33277-->

<!--- MC-32956-->

<!--- MC-34939-->

<!--- MC-34657-->

### Index

<!--- ENGCOM-7776-->

<!--- ENGCOM-7073-->

<!--- MC-39468-->

### Infrastructure

<!--- ENGCOM-7154-->

<!--- ENGCOM-7483-->

<!--- ENGCOM-7651-->

<!--- ENGCOM-7484-->

<!--- ENGCOM-7817-->

<!--- ENGCOM-7778-->

<!--- ENGCOM-7713-->

<!--- ENGCOM-7523-->

<!--- ENGCOM-7756-->

<!--- ENGCOM-7820-->

<!--- ENGCOM-7790-->

<!--- ENGCOM-7758-->

<!--- ENGCOM-7781-->

<!--- ENGCOM-7926-->

<!--- ENGCOM-7910-->

<!--- ENGCOM-7814-->

<!--- ENGCOM-7566-->

<!--- ENGCOM-7906-->

<!--- ENGCOM-8000-->

<!--- ENGCOM-7994-->

<!--- MC-35372-->

### Inventory

<!--- ENGCOM-7979-->

<!--- MC-34701-->

### Layered navigation

<!--- MC-25043-->

<!--- ENGCOM-7493-->

### Logging

<!--- ENGCOM-7692-->

### Media Gallery

<!--- ENGCOM-8014-->

### Media Storage

### MFTF

<!--- ENGCOM-7529-->

<!--- ENGCOM-7590-->

<!--- ENGCOM-7343-->

<!--- ENGCOM-7635-->

<!--- ENGCOM-7972-->

<!--- ENGCOM-7972-->

<!--- ENGCOM-7963-->

<!--- ENGCOM-7964-->

<!--- ENGCOM-7928-->

<!--- ENGCOM-7915-->

<!--- ENGCOM-7991-->

### New Relic

### Newsletter

<!--- MC-34714-->

<!--- ENGCOM-7522-->

<!--- ENGCOM-7788-->

<!--- ENGCOM-7739-->

### Orders

<!--- ENGCOM-7858-->

<!--- ENGCOM-7885-->

<!--- ENGCOM-7798-->

### Page Builder

<!--- ENGCOM-7918-->

### Payment methods

<!--- MC-34363-->

<!--- MC-33494-->

#### PayPal

<!--- MC-33879-->

<!--- MC-34152-->

<!--- MC-33330-->

### Performance

<!--- MC-31617-->

*  Plugin list configuration is now generated during the execution of the `di:compile` command. This configuration information is written to generated metadata folders based on scope. Previously, this information was stored in cache. Resulting performance improvements include:

   *  Network cache size has decreased by 10 - 15%
   *  Execution time for many scenarios has been improved by 3%.

<!--- ENGCOM-7290-->

<!--- MC-31617-->

<!--- MC-33107-->

### Pricing

### Product alert

### Product video

### Reports

### Return Merchandise Authorizations (RMA)

<!--- MC-35984-->

<!--- MC-35826-->

### Reviews

<!--- MC-33405-->

### Rewards

### Sales

<!--- MC-35675-->

<!--- MC-35888-->

<!--- MC-35837-->

<!--- MC-35707-->

<!--- MC-35858-->

<!--- MC-35633-->

<!--- MC-35353-->

### Sales Rule

<!--- MC-33745-->

### Search

<!--- MC-31304-->

<!--- MC-32518-->

<!--- MC-33952-->

<!--- MC-35013-->

<!--- ENGCOM-7222-->

<!--- ENGCOM-7917-->

### Shipping

<!--- MC-35955-->

<!--- MC-33737-->

<!--- MC-33267-->

<!--- MC-35514-->

### Sitemap

<!--- ENGCOM-7924-->

<!--- MC-34617-->

### Staging

<!--- MC-36458-->

<!--- MC-34484-->

<!--- MC-33789-->

<!--- MC-33572-->

### Store

<!--- MC-35853-->

<!--- MC-32634-->

### Swagger

<!--- ENGCOM-7720-->

### Swatches

<!--- ENGCOM-7845-->

<!--- MC-33147-->

### TargetRule

<!--- MC-36162-->

### Tax

<!--- MC-36049-->

### Test

<!--- ENGCOM-7593-->

<!--- ENGCOM-7887-->

<!--- ENGCOM-7874-->

<!--- ENGCOM-7886-->

<!--- ENGCOM-8003-->

<!--- ENGCOM-7142-->

<!--- ENGCOM-7142-->

<!--- ENGCOM-8009-->

#### Integration tests

#### PHP unit tests

### Theme

<!--- MC-34397-->

### Translation and locales

<!--- ENGCOM-7536-->

<!--- ENGCOM-7535-->

<!--- ENGCOM-7521-->

### UI

<!--- MC-36260-->

<!--- MC-36044-->

<!--- MC-35974-->

<!--- MC-35475-->

<!--- MC-35370-->

<!--- MC-35345-->

<!--- MC-35313-->

<!--- MC-35296-->

<!--- MC-35412-->
<!--- MC-35658-->

<!--- MC-34602-->

<!--- ENGCOM-7264-->

<!--- ENGCOM-7575-->

<!--- ENGCOM-7507-->

<!--- ENGCOM-7578-->

<!--- ENGCOM-7579-->

<!--- ENGCOM-7579-->

<!--- ENGCOM-7456-->

<!--- ENGCOM-7285-->

<!--- ENGCOM-7631-->

<!--- ENGCOM-7010-->

<!--- ENGCOM-7244-->

<!--- ENGCOM-7770-->

<!--- ENGCOM-7619-->

<!--- ENGCOM-7873-->

<!--- ENGCOM-7639-->

<!--- ENGCOM-7156-->

<!--- ENGCOM-7981-->

<!--- ENGCOM-7911-->

<!--- ENGCOM-8007-->

<!--- ENGCOM-7992-->

<!--- ENGCOM-7967-->

<!--- ENGCOM-8015-->

### URL

### URL rewrites

<!--- MC-34483-->

<!--- MC-33028-->

### Varnish

<!--- ENGCOM-7761-->

### Vault

<!--- MC-34674-->

### VAT

### Visual Merchandiser

<!--- MC-35574-->

### Web API framework

<!--- ENGCOM-7618-->

<!--- ENGCOM-7709-->

<!--- ENGCOM-7665-->

<!--- ENGCOM-7612-->

<!--- ENGCOM-7785-->

<!--- ENGCOM-7715-->

<!--- ENGCOM-7829-->

<!--- ENGCOM-7611-->

<!--- MC-36419-->

<!--- MC-36084-->

<!--- MC-35838-->

<!--- MC-35975-->

### Website Restrictions

<!--- MC-32366-->

### Wishlist

<!--- MC-35810-->

<!--- MC-35622-->

<!--- MC-35618-->

<!--- MC-34408-->

<!--- ENGCOM-7580-->

<!--- ENGCOM-7561-->

<!--- ENGCOM-7660-->

<!--- ENGCOM-7674-->

<!--- ENGCOM-7675-->

<!--- ENGCOM-7564-->

<!--- ENGCOM-7717-->

<!--- MC-36250-->

### WYSIWYG

<!--- ENGCOM-7559-->

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
