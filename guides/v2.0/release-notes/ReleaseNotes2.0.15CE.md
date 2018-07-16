---
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.0.15 Release Notes
menu_title: Magento Open Source 2.0.15 Release Notes
menu_order: 164
version: 2.0
level3_menu_node: level3child
level3_subgroup: ce20-relnotes 
github_link: release-notes/ReleaseNotes2.0.15CE.md
---

*Patch code and release notes were published on June 21, 2017.* 

We are pleased to present Magento Open Source  (formerly Community Edition) 2.0.15. This release includes only one enhancement: Support for changes in PayPal's Instant Payment Notification (IPN) service.

For increased security, merchants using PayPal’s Instant Payment Notification (IPN) service will be able to use only HTTPS when posting messages back to PayPal for verification. In the past, PayPal has allowed the use of HTTP for these postbacks. PayPal provides more information at [IPN Verification Postback to HTTPS Microsite](https://www.paypal-knowledge.com/infocenter/index?page=content&widgetview=true&id=FAQ1916&viewlocale=en_US){:target="_blank"}.

 
<div class="bs-callout bs-callout-warning" markdown="1">
You must upgrade or apply this patch by June 30, 2017 to avoid any disruption to this service.
</div>


 Looking for the [Magento Commerce (Cloud) Release Notes](http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html){:target="_blank"}?

## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
