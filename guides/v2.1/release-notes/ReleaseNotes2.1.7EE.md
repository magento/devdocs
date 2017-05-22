---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.7 Release Notes
menu_title: Magento EE 2.1.7 Release Notes
menu_order: 260
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.7EE.md
---

*	TOC
{:toc}

We are pleased to present Magento Enterprise Edition 2.1.7. This release includes important enhancements to the security of your Magento software.


<div class="bs-callout bs-callout-warning" markdown="1">
While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
</div>

Looking for the <a href= "http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.1.7 contains over 15 security enhancements as well as one significant functional enhancement. Look for the following highlights in this release:

* Support for MasterCard BIN number expansion. MasterCard recently added a new series of Bank Identification Numbers (BIN), and this release of Magento provides support for transactions made with cards using these new BINs. MasterCard describes the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}. 


* Resolution of multiple high priority and critical security issues. These critical issues include remote code execution for authenticated admin users, access control bypass, and CSRF issues.




## Security enhancements

### Remote code execution
<!--- 63862 -->* Magento no longer permits Admin users that have access to CMS and widgets to execute code through unserialization. 


### Access control bypass
<!--- 63866 -->* Admin users without proper permissions can no longer delete store backups or system support reports. 


### Cross site request forgery
<!--- 63864 -->* Customer-authenticated APIs are no longer vulnerable to cross-site request forgeries.

### Cross-site scripting
<!--- 63517 -->* Magento no longer permits stored cross-site scripting code on the customer address page of the Magento Admin.

### Zend mail
<!--- 63632 -->*  We've removed a vulnerability with Zend Mail.




### General

<!--- 64049, 63680 -->* We’ve updated several vulnerable moment.js libraries (`query-migrate`, `query`, `jquery-ui-1.9.2.js`)

<!--- 63879 -->* You can no longer instantiate an arbitrary object while adding conditions to an email reminder rule. 

<!--- 63877 -->* The Admin URL in the response body of an HTTP request is no longer visible to unauthenticated users. 

<!--- 63869 -->* Magento now displays a 404 page when an Admin with insufficient privilege tries to request a specific resource. 


<!--- 63527 -->* Magento now blocks all requests from an Admin's account as soon as the Admin user is disabled. 


<!--- 62475 -->* Magento now displays a 404 page when you try to route a request to `index.phpadmin`. Previously, Magento displayed an Admin page.

<!--- 62313 -->* Magento no longer uses a PHP serialized object in the JSON `report_data` component from the `\Magento\Support\Ui\Component\Listing\Column\ReportActions` response. 

<!--- 61015 -->* Action logs no longer display plain-text passwords. 

<!--- 59097 -->* The Magento Admin no longer leaks user password hashes. 




<!--- INTERNAL ONLY -->

<!--- 67335, 67117, 67102, 66931, 66689, 65226, 65012, 64877, 64771, 64717, 64635, 64453-->


<!--- NOT A BUG -->

<!--- 67111 -->



<!--- CANNOT REPRODUCE -->

<!--- 65500 -->



<!--- WON'T FIX -->

<!--- 67100 -->


<!--- DUPLICATE -->

<!--- 67149 -->



## Known issues

We’ve identified the following issues with how Magento displays images in this release:

<!--- 59354 -->*  59354 Magento does not correctly display visual swatches on Category and Product pages. 

<!--- 69346 -->* Image resizing  does not work correctly on Checkout. Specifically some product pictures in the Order Summary overlap.



## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


