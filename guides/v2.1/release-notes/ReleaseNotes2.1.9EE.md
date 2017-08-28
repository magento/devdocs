---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.9 Release Notes
menu_title: Magento Commerce 2.1.9 Release Notes
menu_order: 256
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.9EE.md
---

*	TOC
{:toc}

*Code released: , 2017*

*Page updated: , 2017*

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.9. This release includes important enhancements to your Magento software.

<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>



## Highlights

Magento 2.1.8 contains almost 40 security fixes and enhancements.  Look for the following highlights in this release:


* reduced opportunities for remote code execution (RCE), Cross-Site Request Forgery (CSRF), and Cross-Site Scripting (XSS) attacks. 

* minimized data leaks, including the unintentional disclosure of pathways that unauthorized users could exploit to launch malicious attacks. 


See [Magento 2.0.16 and 2.1.9 Security Patches](https://magento.com/security/patches/magento-2016-and-219-security-update){:target="_blank"} for a comprehensive discussion of these issues. 




## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


