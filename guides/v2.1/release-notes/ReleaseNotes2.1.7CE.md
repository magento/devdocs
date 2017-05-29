---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.1.7 Release Notes
menu_title: Magento CE 2.1.7 Release Notes
menu_order: 162
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
github_link: release-notes/ReleaseNotes2.1.7CE.md
---

*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.1.7. This release includes critical enhancements to the security of your Magento software.


<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>


Looking for the <a href= "http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.1.7 contains over 15 security enhancements as well as one significant functional enhancement. Look for the following highlights in this release:

* **Support for MasterCard BIN number expansion**. MasterCard recently added a new series of Bank Identification Numbers (BIN), and this release of Magento provides support for transactions made with cards using these new BINs. MasterCard describes the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}. 


* **Resolution of multiple high priority and critical security issues**. These critical issues include remote code execution for authenticated Admin users, access control bypass, and cross-site request forgery issues. See [Magento 2.0.14 and 2.1.7 Security Patches](https://magento.com/security/patches/magento-2014-and-217-security-update){:target="_blank"} for a comprehensive discussion of these issues. 



## Known issues

We’ve identified the following issues with how Magento displays images in this release:

<!--- 59354 -->* Magento does not correctly display visual swatches on Category and Product pages. 

<!--- 69346 -->* Image resizing does not work correctly on Checkout. Specifically, some product pictures in the Order Summary overlap.



<!--- INTERNAL ONLY -->

<!--- 67335, 67117, 67102, 66931, 66689, 65226, 65012, 64877, 64771, 64717, 64635, 64453, 66693, 66692, 65244,64115 -->


<!--- NOT A BUG -->

<!--- 67111 -->



<!--- CANNOT REPRODUCE -->

<!--- 65500 -->



<!--- WON'T FIX -->

<!--- 67100 -->


<!--- DUPLICATE -->

<!--- 67149 -->

## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

