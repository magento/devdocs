---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.0.14 Release Notes
menu_title: Magento EE 2.0.14 Release Notes
menu_order: 265
version: 2.0
level3_menu_node: level3child
level3_subgroup: ee20-relnotes 
github_link: release-notes/ReleaseNotes2.0.14EE.md
---

*Patch code and release notes were published on xxx.* 

We are pleased to present Magento Community Edition 2.0.14. This release includes critical enhancements to the security of your Magento software.
 


<div class="bs-callout bs-callout-warning" markdown="1">
 While there are no confirmed attacks related to these vulnerabilities to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
 </div>
 
 Looking for the <a href= "http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.0.14 contains more than 15 security enhancements as well as one significant functional enhancement. Look for the following highlights in this release:

<!--- 68868 -->* Support for MasterCard BIN number expansion. MasterCard recently added a new series of Bank Identification Numbers (BIN), and this release of Magento provides support for transactions made with cards using these new BINs. MasterCard describes the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}.

* Resolution of multiple high priority and critical security issues. These critical issues include remote code execution for authenticated Admin users, access control bypass, and cross-site request forgery issues.




## Security enhancements

This release includes important enhancements to the security of your Magento software. 


### Remote code execution
<!--- 63863 -->* Magento no longer permits Admin users that have access to CMS and widgets to execute code through unserialization.


### Access control bypass
<!--- 63868 -->* Admin users without proper permissions can no longer delete store backups or system support reports. 


### Cross-site request forgery
<!--- 63865 -->* Customer-authenticated APIs are no longer vulnerable to cross-site request forgery.


### Cross-site scripti

<!--- 63518 -->* Magento no longer permits stored cross-site scripting code on the customer address page of the Magento Admin.


### Zend mail

<!--- 63633 -->* We’ve removed a vulnerability with Zend Mail.








### General

<!--- 63681, 64051 -->* We’ve updated several vulnerable `moment.js` libraries (`query-migrate`, `query`, `jquery-ui-1.9.2.js`)


<!--- 63880 -->* You can no longer instantiate an arbitrary object while adding conditions to an email reminder rule. 

<!--- 63878 -->* The Admin URL in the response body of an HTTP request is no longer visible to unauthenticated users. 

<!--- 63871 -->* Magento now displays a 404 page when an Admin with insufficient privilege tries to request a specific resource.

<!--- 63528 -->* Magento now blocks all requests from an Admin’s account as soon as the Admin user is disabled.

<!--- 62314 -->* Magento no longer uses a PHP serialized object in the JSON `report_data` component from the `\Magento\Support\Ui\Component\Listing\Column\ReportActions` response.

<!--- 61016 -->* Action logs no longer display plain-text passwords.

<!--- 59096 -->* The Magento Admin no longer leaks user password hashes.

<!--- 67449 -->* Magento has strengthened its verification of image files during upload (**Product > Images and Videos > Video Upload**).

<!--- 66972 -->* Magento now displays a relevant message when you create an inactive user.  Previously, Magento did not confirm a successful creation, but instead displayed an error message, even though the inactive user was successfully created.

 


<!--- INTERNAL ONLY -->
<!--- 66116, 66916,  66633, 66631, 66605, 66598, 66597, 66594, 66593, 66591, 66590, 66405, 66326, 65493, 65054, 64584, 66491, 66498, 66542, 66596, 63202, 65055, 64401, 65076, 66459, 66369, -->

<!--- DUPLICATE -->
<!--- 65056, 65065 -->


<!--- WON'T FIX -->
<!---  65057 -->


<!--- CANNOT REPRODUCE -->
<!---  66592, 66466, 66507 -->




## System requirements
Our technology stack is built on PHP and MySQL. See
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports.
