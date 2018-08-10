---
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.0.18 Release Notes
menu_title: Magento Open Source 2.0.18 Release Notes
menu_order: 158
version: 2.0
level3_menu_node: level3child
level3_subgroup: ce20-relnotes 
---

*Patch code and release notes were published on February 27, 2018.* 

*Release notes updated on March 22, 2018.*


We are pleased to present Magento Open Source 2.0.18. This release includes 35 enhancements to product security, a change to the Magento Admin to recent upcoming USPS shipping changes, and a copyright update. See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update)  for more information.

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.


<div class="bs-callout bs-callout-warning" markdown="1">
The Magento Open Source 2.0.18 software release marks the final supported software release for Magento Open Source version 2.0.X. Magento Open Source 2.0.X will no longer receive security updates or product quality fixes now that its support window has expired.

To maintain the performance and security of your site, we advise you to upgrade to the latest version of Magento Open Source. We encourage you to reach out to your partners, developers, or Magento Customer Success contact for more information on upgrading your site.
</div>

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For security reasons, this release limits the ability to use symlinks for <code>/media</code> and other folders. If you are using symlinks for deployment, or if your <code>/media</code> is using symlinks, you may experience problems uploading or removing images. Magento will announce a fix for this issue when available. See <a href="https://github.com/magento/magento2/issues/13929" target="_blank">GitHub-13929</a> for more information.
</div>

## Highlights

Look for the following highlights in this release:

* **Enhancements that help close authenticated Admin user remote code execution, unauthorized data leaks, and cross-site request forgery (CSRF) vulnerabilities**. See [Magento Security Center](https://magento.com/security/patches/magento-223-2112-and-2018-security-update) for more information.

* **Change to Magento Admin to support upcoming USPS shipping changes**. On February 23, 2018, USPS  removed APIs that support the creation of shipping labels without postage. In response, we’ve removed this functionality from the Magento Admin. Consequently, you cannot create and print shipping labels that do not have postage applied. If you require USPS postage printing capabilities, please visit [Magento Shipping](https://magento.com/products/shipping) to learn more, and explore various shipping extensions on Magento Marketplace. 

* **Updated copyright for 2018**.

## System requirements

Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.


The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
