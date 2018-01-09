---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.0.18 Release Notes
menu_title: Magento Open Source 2.0.18 Release Notes
menu_order: 158
version: 2.0
level3_menu_node: level3child
level3_subgroup: ce20-relnotes 
github_link: release-notes/ReleaseNotes2.0.18CE.md
---

*Patch code and release notes were published on February 12, 2018.* 

We are pleased to present Magento Open Source 2.0.18. This release includes multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.

Magento 2.0.18 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.


The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
