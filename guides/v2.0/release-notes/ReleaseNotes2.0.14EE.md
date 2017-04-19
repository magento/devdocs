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

We are pleased to present Magento Enterprise Edition 2.0.14. This release includes many functional fixes and enhancements. 

Looking for the <a href="http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes2.1.4.html" target="_blank">Magento Enterprise Cloud Edition 2.1.4 and 2.0.12 Release Notes</a>?



## Highlights

Magento 2.0.14 contains more than 15 security enhancements. Look for the following highlights in this release:





## Security enhancements

This release includes important enhancements to the security of your Magento software. While there are no confirmed attacks related to the Zend framework `Zend_Mail` library vulnerability to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.




<!--- 63876 -->* Magento now displays a 404 page when an Admin with insufficient privilege tries to request a specific resource.

<!--- 63871 -->* Magento UI controllers now check proper ACL node. Previously, Magento returned leading to any admin getting data from ui data providers. 


You can now generate coupon codes as expected when you add a new cart Price rule. Previously, when you tried to generate a coupon code after clicking **Add New Rule**, Magento disabled all fields in the **Manage Coupon Codes** section.

<!--- 66972 -->* Magento now displays a relevant message when you create an inactive user.  Previously, Magento did not confirm a successful creation, but instead displayed an error message, even though the inactive user was successfully created. 

<!--- 63880 -->* You can no longer instantiate an arbitrary object while adding conditions to an email reminder rule. 

<!--- 63878 -->* The Admin URL in the response body of an HTTP request is no longer visible to unauthenticated users. 

<!--- 63868 -->* Admin users without proper permissions can no longer delete store backups or system support reports.

<!--- 63865 -->* Customer-authenticated APIs are no longer vulnerable to cross-site request forgery.

<!--- 63863 -->* Magento no longer permits Admin users that have access to CMS and widgets to execute code through unserialization.

<!--- 63681, 64051 -->* We’ve updated several vulnerable `moment.js` libraries (`query-migrate`, `query`, `jquery-ui-1.9.2.js`)

<!--- 63633 -->* We’ve removed a vulnerability with Zend Mail.

<!--- 63528 -->* Magento now blocks all requests from an Admin’s account as soon as the Admin user is disabled.

<!--- 63518 -->* Magento no longer permits stored cross-site scripting code on the customer address page of the Magento Admin.

<!--- 62314 -->* Magento no longer uses a PHP serialized object in the JSON `report_data` component from the `\Magento\Support\Ui\Component\Listing\Column\ReportActions` response.

<!--- 61016 -->* Action logs no longer display plain-text passwords.

<!--- 59096 -->* The Magento Admin no longer leaks user password hashes.


<!--- INTERNAL ONLY -->
<!--- 66916, 66634, 66633, 66631, 66605, 66604, 66598, 66597, 66594, 66593, 66591, 66590, 66451, 66405, 66326, 65493, 65054, 64877, 64584, 66491, 66496, 66498, 66542-->

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
