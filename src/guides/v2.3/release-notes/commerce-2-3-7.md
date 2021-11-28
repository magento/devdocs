---
group: release-notes
title: Adobe Commerce 2.3.7 Release Notes
---

{{site.data.var.ee}} 2.3.7 offers significant platform upgrades, 40 security enhancements, and 10 functional fixes for the core product.

{:.bs-callout-info}

PHP 7.3 reaches end of support in December 2021, and {{site.data.var.ee}} 2.3.x reaches end of support in April 2022. **We strongly recommend planning your upgrade now to {{site.data.var.ee}} 2.4.x and PHP 7.4.x to help maintain PCI compliance**.

## Backward-Incompatible Changes (BiCs)

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.7 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 40 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. See [Adobe Security Bulletin](https://helpx.adobe.com/security/products/magento/apsb21-30.html) for a discussion of these fixed issues.

#### Security enhancements and fixes to core code

This release includes 40 security fixes and platform security improvements. The copy-to-clipboard feature has also been disabled for all storefront credit card fields. <!--- MC-38985-->

{:.bs-callout-info}
Starting with the release of {{site.data.var.ee}} 2.3.2, we will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

*  **PHP 7.4 support**. Magento 2.3.7 introduces support for PHP 7.4. Commerce Marketplace extension vendors must confirm that new versions of their extensions are compatible with PHP 7.4. All unit and integration tests should be run using PHPUnit 9. See the [PHP 7.4 support for Magento 2.3.x release line](https://community.magento.com/t5/Magento-DevBlog/PHP-7-4-support-for-Magento-2-3-x-release-line/ba-p/458946) DevBlog post.

*  **PHP 7.3 is now deprecated.**  We do not recommend running Magento 2.3.7 with PHP 7.3. Merchants can run Magento 2.3.7 with PHP 7.3, but this configuration has not been tested. Adobe will continue to perform compatibility testing but not full functional testing with PHP 7.3. PHP 7.3 reaches end-of-life on December 6, 2021, and after that date, all deployments running PHP 7.3 will be vulnerable to security exploits.

*  **Removal of PHP 7.1 and 7.2 compatibility**. You cannot run Magento 2.3.7 on PHP 7.1 or 7.2.

*  **Support for PHPUnit 9.x and deprecation of PHPUnit 6.5**. PHP 7.4 requires the use of the latest PHPUnit testing framework, which is PHPUnit 9.x. Commerce Marketplace extension vendors must confirm that all new extension versions are compatible with PHP 7.4 and that all unit and integration tests have been configured to be run with PHPUnit 9.

*  [Elasticsearch 7.9.x is now supported]({{ page.baseurl }}/install-gde/system-requirements.html). Although we recommend running Elasticsearch 7.9.3, Magento 2.3.x remains compatible with Elasticsearch 7.4.x.

*  Varnish 6.5.1 is now supported on 2.3.x.

*  Magento 2.3.7 is now compatible with Composer 2.x. We recommend that merchants migrate to Composer 2.x. Although you can install this release using Composer 1.x, Composer 1.x will soon reach end-of-life. For an overview of Composer 2.x features, see [Deprecating Packagist.org support for Composer 1.x](https://blog.packagist.com/deprecating-composer-1-support/).

*  [Redis 6.x is now supported]({{ page.baseurl }}/install-gde/system-requirements.html). Magento 2.3.x remains compatible with Redis 5.x.

*  The `endroid/qr-code` library dependency has been updated to the latest version (4.x).

### Interactive In-Product Guidance

Interactive In-Product Guidance provides merchants with usage tips and information from within the Admin on new feature announcements, walk-through guides, on-boarding information, and tool tips. Administrators must opt-in from the Admin to receive in-product guidance if this feature is not enabled.

### Infrastructure improvements

*  The Vimeo Simple API has been replaced with Vimeo [oEmbed](https://developer.vimeo.com/api/oembed) API. <!--- MC-40510-->

*  The Web Set Up Wizard has been deprecated and removed. You must use the command line to install or upgrade Magento 2.3.7. See [Install Magento]({{ page.baseurl }}/install-gde/install/cli/install-cli.html). <!--- MC-40598-->

### Vendor-developed extension enhancements

All Vendor-Developed Extensions (VDEs) include bug fixes, security updates, and PHP 7.4 support.

#### Amazon Pay

Amazon Pay has been deprecated.

#### Vertex

New Vertex features and enhancements include:

*  **Admin Order Cleansing**. The Vertex Address Validation module now displays a button for validating and updating addresses during Admin order creation. <!--- BUNDLE-2627-->

*  **Commodity Codes**. Merchants can now attach commodity codes with a type of `UNSPSC`, `NCM`, `HSN`, or `Service` to products when Vertex is enabled. This supports the staging of commodity code changes to products.  <!--- BUNDLE-2628-->

## Fixed issues

We have fixed several issues in the Magento 2.3.7 core code.

### Customer

<!--- MC-38680-->

*  The **Create an Account** button on the Create New Account page remains active when a shopper enters invalid data. Previously, this button was disabled, which prevented shoppers from re-attempting to create an account after making an error. This was a known issue in Magento 2.4.1. [GitHub-30513](https://github.com/magento/magento2/issues/30513)

### Frameworks

<!--- MC-38561-->

*  Magento now deletes expired database sessions from the database `session` table as expected. [GitHub-26308](https://github.com/magento/magento2/issues/26308)

<!--- MC-36776-->

*  Magento now correctly converts plain text to HTML when you click **Return Html Version** when loading an email template. [GitHub-29740](https://github.com/magento/magento2/issues/29740)

### General fixes

<!--- MC-31807-->

*  Disabling the PageBuilder module no longer affects the rendering of the product page. Previously, custom layouts on the product page disappeared when the module was disabled, and Magento displayed a blank page.

### MFTF

The following tests have been improved:

*  `StoreFrontFreeShippingRecalculationAfterCouponCodeAddedTest` <!--- MC-39116-->
*  `AdminMassUpdateProductStatusStoreViewScopeTest` <!--- MC-40540-->
*  `StorefrontInstantPurchaseFunctionalityTest` <!--- MC-40353-->

### Sales

<!--- MC-39568-->

*  Magento no longer creates duplicate address entries for a customer account when creating a new order from the Admin for an existing customer. The **Save in Address Book** check box has been renamed to **Add to Address Book** and is now unchecked in the Admin by default.

### Tax

<!--- MC-38939-->

*  Cart price rules are now applied as expected when order subtotals are calculated without incorporating tax. The new `Subtotal (Incl. Tax)` option has been added as a cart price rule condition. [GitHub-29740](https://github.com/magento/magento2/issues/29740)

### Video

<!--- MC-40510-->

*  The Vimeo Simple API has been replaced with the Vimeo [oEmbed](https://developer.vimeo.com/api/oembed) API. This corrects a problem merchants experienced trying to add Vimeo videos to a product page. Previously, Magento displayed a 404 error. [GitHub-31753](https://github.com/magento/magento2/issues/31753)

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.7 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.