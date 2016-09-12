---
layout: default
group: release-notes
subgroup: 02_ReleaseNotes
title: Magento CE 2.1.2 Release Notes
menu_title: Magento CE 2.1.2 Release Notes
menu_order: 7
version: 2.1
github_link: release-notes/ReleaseNotes2.1.2CE.md
---

*	TOC
{:toc}


## Magento Community Edition 2.1.2
We are pleased to present Magento Community Edition 2.1.2. This release includes several functional fixes.


Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}release-notes/backward-incompatible-changes-2.1.html).


### Security enhancements
This release includes enhancements to improve the security of your Magento installation. While there are no confirmed attacks related to these issues to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento installation to the latest version as soon as possible.

The following list provides an overview of the security issues fixed in this release. We describe each issue in greater detail in the Magento Security Center.

<!--- 57812/1539, 1543-->* You can no longer delete a currently logged-in user. 

<!--- 55126-->* Linking a simple product to a configurable one now behaves as expected. When trying to link simple product to configurable one using REST API response with "Status Code: 200 OK" is returned however products are not linked.



<!--- 57800/1541-->* Brute force attack on API to retrieve valid user email address. OPEN


<!--- 57581/1433-->* Resolved a potential cross-site scripting (XSS) vulnerability in which customer addresses could be deleted. You can no longer trick a user into deleting his store address book entries.  


<!--- 57565/1533-->* You can no longer change or fake a product price from the Magento storefront and then complete an order with that faked price. 


<!--- 57302/1338-->*  You can no longer manipulate the full page cache to store incorrect pages under regular page URL entries.

<!--- 56912/1488-->*  Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context.  

<!--- 56901/1492-->*  A user with lesser privileges can no longer force an Admin user to add his private or public key using a JSON call. 


<!--- 56852/1484-->*  Fixed issue with arbitrary PHP code execution via the PHP unserialize function during checkout. 


<!--- 56594/1490-->*  Magento no longer permits you to use Products > Images and Videos > Insert YouTube video to potentially upload malicious code.



<!--- 56540/1480-->*  SQL injection in Zend framework. A bug in Zend Framework value escaping allows to inject SQL through ordering or grouping parameters. 


<!--- 53971-->*  Fixed issue with running `cron` jobs less frequently than the application `cron` setting. 


<!--- 46026/1270-->* The Guest order view protection code is no longer vulnerable to brute force attacks.


<!--- 55476/1478-->*  Sessions now expire as expected after logout. 

<!--- 55126-->* Cannot link simple product to configurable one. OPEN



<!--- 58007/1544-->* We've reduced the risk of SQL injection in the F1 Sqli backend cache adapter by adding proper variable escaping. 


<!--- 57804/1539-->* Fixed issue with cross-site scripting reflected in loading section of request.


<!--- 56700/5719, 5890-->*  The timestamp associated with an order on the Admin > Sales > Order list now identifies when the  order status was last updated or a commented upon. Previously, the timestamp indicated when the browser page was last refreshed. 

<!--- 57463-->* Removed potential for exploitation of guest order view feature to harvest order information.  

<!--- 57460-->* Magento no longer throws an exception if you enter an invalid FedEx shipment tracking number.  

<!--- 57097-->* Changing the city field of an order now affects the shipping rate as expected. Previously, the shipping rate did not update if you changed the city field. 	

<!--- 57003-->* The Product page scope selector now displays all related websites associated with a restricted user. 

<!--- 56952-->* We've resolved an issue with the get active payment methods (`getActiveMethods`). <a href="https://github.com/magento/magento2/issues/5413" target="_blank">(GITHUB-5413)</a>

<!--- 56940-->* Kount and 3D Secure now work as expected for Braintree Vault. 

<!--- 56431-->* Magento now updates order status as expected after a shipment has been created through the API.

<!--- 56426-->* Magento now updates order status as expected after an invoice has been created through the API.


<!--- 54964-->* Magento now updates the mini cart as expected when you reorder an item. Previously, Magento added the reordered items to the shopping cart, but the mini cart did not update its item count. <a href="https://github.com/magento/magento2/issues/6121" target="_blank">(GITHUB-6121)</a> 

<!--- 54737, 55116-->* Magento 2.1.2 now supports PHP 7.0.4. 


<!---55126-->* When trying to link simple product to configurable one using REST API response with "Status Code: 200 OK" is returned however products are not linked. <a href="https://github.com/magento/magento2/issues/5243" target="_blank">(GITHUB-5243)</a>



<!--- DELETED:  (won't fix) 57578, CLONE: 58123, 58111, 57049, 57032, OMIT: 57878 (releasenotes),57845, 55862, 57294, 58166, 58204, 57965 (internal) -->



### Known issues

<!--- 58017-->* Error creating configurable products in 2.1.1 <a href="https://github.com/magento/magento2/issues/6424" target="_blank">(GITHUB-6424)</a>

**Issue**: 

**Workaround**: Clear your browser cache after upgrading. 



<!--- 58034-->

**Issue**: When you edit a configurable product and add options to a simple product, Magento does not save these options. 

**Workaround**: 



### System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

Note: Magento 2.1.2 requirements have changed slightly from 2.1.1. This release supports PHP 5.6.5 and above instead of 5.6.x.
 5.6. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



### Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
