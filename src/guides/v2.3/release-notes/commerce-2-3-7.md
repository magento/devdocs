---
group: release-notes
title: Magento Commerce 2.3.7 Release Notes
---

Magento Commerce 2.3.7 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over 180 functional fixes to the core product and over 25 security enhancements. 

{:.bs-callout-info}

Quarterly releases may contain backward-incompatible changes (BIC). Magento 2.3.5 contains minor backward-incompatible changes. To review minor backward-incompatible changes, see [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). (Major backward-incompatible issues are described in [BIC highlights]({{page.baseurl}}/release-notes/backward-incompatible-changes/index.html). Not all releases introduce major BICs.)

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.5-p1) provides. Patch 2.3.4.2 (Composer package 2.3.4-p2) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.4. All hot fixes that were applied to the 2.3.4 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.)

For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.4-p2), see [Install Magento using Composer]({{page.baseurl}}/install-gde/composer.html). Security-only patches include security bug fixes only, not the additional security enhancements that are included in the full patch.

With this quarterly release, we have changed how we describe these security issues. Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, B2B, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 25 security enhancements that help close remote code execution (RCE) and cross-site scripting (XSS) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication]({{page.baseurl}}/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See Security updates available for Magento for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.5) have been ported to 1.14.4.5 and 1.9.4.5, as appropriate.

With the Magento 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an [Adobe Security bulletin](https://helpx.adobe.com/security/products/magento/apsb20-22.html).

#### Security enhancements and fixes to core code

This release includes over 25 security fixes and platform security improvements. Additional security enhancements include:

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment. You can learn more about CVE identifiers at [CVE](https://cve.mitre.org/).

### Platform upgrades

The following platform upgrades help enhance website security and performance:

### Performance

### Infrastructure improvements

## Fixed issues

We have fixed several issues in the Magento 2.3.7 core code.

### Installation, upgrade, deployment


### Cart and checkout

### Catalog

### Customer

<!--- MC-38680-->

*  The **Create an Account** button on the Create New Account page remains active when a shopper enters invalid data. Previously, this button was disabled, which prevented shoppers from re-attempting to create an account after making an error. This was a known issue in Magento 2.4.1. [GitHub-30513](https://github.com/magento/magento2/issues/30513)

### Frameworks

<!--- MC-38561-->

*  Magento now deletes expired database sessions from the database `session` table as expected. [GitHub-26308](https://github.com/magento/magento2/issues/26308)

<!--- MC-36776-->

*  Magento now correctly converts plain text to HTML when you click **Return Html Version** when loading an email template.

### JavaScript framework

### General fixes

<!--- MC-31807-->

*  Disabling the PageBuilder module no longer affects the rendering of the product page. Previously, custom layouts on the product page disappeared when the module was disabled, and Magento displayed a blank page.


### Infrastructure
### Performance
### Sales

### Sales Rule
### Tax

<!--- MC-38939-->

*  Cart price rules are now applied as expected when order subtotals are calculated without incorporating tax. The new `Subtotal (Incl. Tax)` option has been added as a cart price rule condition. [GitHub-29740](https://github.com/magento/magento2/issues/29740)

### UI

### Web API framework
## Known issues

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.7 using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
