---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.0.16 Release Notes
menu_title: Magento Commerce 2.0.16 Release Notes
menu_order: 262
version: 2.0
level3_menu_node: level3child
level3_subgroup: ee20-relnotes 
github_link: release-notes/ReleaseNotes2.0.16EE.md
---

*Patch code and release notes were published on September 14, 2017.* 

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.0.16. This release includes almost 40 security fixes and enhancements to your Magento software.

<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>



## Highlights

Magento 2.0.16 contains almost 40 security fixes and enhancements.  Look for the following highlights in this release:


* enhancements that help close cross-site request forgery (CSRF), unauthorized data leak, and authenticated Admin user remote code execution 
vulnerabilities. See [Magento 2.0.16 and 2.1.9 Security Patches](https://magento.com/security/patches/magento-2016-and-219-security-update){:target="_blank"} for a comprehensive discussion of these issues. 

* support for changes to the USPS API that USPS implemented on September 1, 2017

* change to how Magento displays status updates during upgrade.


## Fixed issue

* We’ve added support for the change to the USPS API that USPS implemented on September 1, 2017. After installing or upgrading to this release, the discontinued First-Class Mail Parcel service will change to First-Class Package Service – Retail. Previously, the USPS First-Class Mail Parcel option was not available after September 1, 2017 on installations running Magento 2.x unless you applied the workaround described [here](http://devdocs.magento.com/guides/v2.1/release-notes/tech_bull_USPS-patch-Sept2017.html).

<!--- 60835 -->* We’ve changed how Magento displays status updates during a product upgrade. Previously, potentially vulnerable information such as full paths and module names were displayed in the product GUI, potentially exposing this information to a malicious user. Magento now restricts this potentially vulnerable information to logs that are available to administrators only.


## System requirements
Our technology stack is built on PHP and MySQL. See
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
