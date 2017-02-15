---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.6 Release Notes
menu_title: Magento EE 2.1.6 Release Notes
menu_order: 265
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.6EE.md
---

*	TOC
{:toc}

We are pleased to present Magento Enterprise Edition 2.1.6. This release includes important enhancements to the security of your Magento software.


<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>

Looking for the <a href="http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes2.1.4.html" target="_blank">Magento Enterprise Cloud Edition 2.1.4 and 2.0.12 Release Notes</a>?


## Highlights

Magento 2.1.6 contains 15 security enhancements. Look for the following highlights in this release:

* **Removal of vulnerability with the Zend framework `Zend_Mail` library**. For more information, see <a href="https://magento.com/security/news/new-zend-framework-1-security-vulnerability" target="_blank">New Zend Framework 1 Security Vulnerability</a>.  



## Security enhancements

<!--- 64635 -->

<!--- 64049 -->* We’ve updated several vulnerable moment.js libraries (query-migrate, query, jquery-ui-1.9.2.js)

<!--- 63879 -->* You can no longer instantiate an arbitrary object while adding conditions to an email reminder rule. 

<!--- 63877 -->* The Admin URL in the response body of an HTTP request is no longer visible to unauthenticated users 

<!--- 63869 -->

<!--- 63866 -->* Admin users without proper permissions can no longer delete store backups or system support reports. 

<!--- 63864 -->* Customer-authenticated APIs are no longer vulnerable to CSRF.

<!--- 63862 -->

<!--- 63680 -->

<!--- 63632-->

<!--- 63527 -->

<!--- 63517 -->

<!--- 62475 -->* Magento now displays a 404 page when you try to route a request to index.phpadmin. Previously, Magento displayed an Admin page.

<!--- 62313 -->* We’ve removed  the PHP serialized object from  the JSON report_data component from the \Magento\Support\Ui\Component\Listing\Column\ReportActions response. 

<!--- 61015 -->* Action logs no longer display plain-text passwords. 

<!--- 59097 -->






## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


