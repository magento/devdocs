---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.9 Release Notes
menu_title: Magento Commerce 2.1.9 Release Notes
menu_order: 256
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
---

*	TOC
{:toc}

*Code released:  September 14, 2017*

*Page updated:  September 14, 2017*

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.9. This release includes important enhancements to your Magento software.

{: .bs-callout .bs-callout-warning }
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.

## Highlights

Magento 2.1.9 contains almost 40 security fixes and enhancements. Look for the following highlights in this release:

* enhancements that help close cross-site request forgery (CSRF), unauthorized data leak, and authenticated Admin user remote code execution vulnerabilities. See [Magento 2.0.16 and 2.1.9 Security Patches](https://magento.com/security/patches/magento-2016-and-219-security-update){:target="_blank"} for a comprehensive discussion of these issues. 

* support for changes to the USPS API that USPS implemented on September 1, 2017

* fix for issue with logging information about exceptions caused by payment failures

* change to how Magento displays status updates during upgrade.

## Fixed issues

<!--- 72306 -->* We’ve added support for the change to the USPS API that USPS implemented on September 1, 2017. After installing or upgrading to this release, Magento will display the Domestic rate for USPS, First-Class Mail Parcel as expected. Previously, the USPS First-Class Mail Parcel option was not available after September 1, 2017 on installations running Magento 2.x unless you applied the workaround described [here]({{ site.baseurl }}/guides/v2.1/release-notes/tech_bull_USPS-patch-Sept2017.html). 


<!--- 55065 -->* Magento now logs all expected exception information in the `exception.log` file when a payment transaction fails. 
Previously, Magento did not log all exception information when a payment transaction failed, and this lack of full exception information, undermined debugging attempts.  [GitHub-6246](https://github.com/magento/magento2/issues/6246)

<!--- 60835 -->* We’ve changed how Magento displays status updates during a product upgrade. Previously, potentially vulnerable information such as full paths and module names were displayed in the product GUI, potentially exposing this information to a malicious user. Magento now restricts this potentially vulnerable information to logs that are available to administrators only. 

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
[System Requirements]({{ page.baseurl }}/install-gde/system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The [Data Migration Tool]({{ page.baseurl }}/migration/migration-migrate.html){:target="_blank"} helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install the Data Migration Tool]({{ page.baseurl }}/migration/migration-tool-install.html){:target="_blank"}. Consider exploring or contributing to the [ Magento Data Migration repository](https://github.com/magento/data-migration-tool){:target="_blank"}.

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration){:target="_blank"} helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports. 


