---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.10 Release Notes
menu_title: Magento EE 2.0.10 Release Notes
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.10EE.md
---
*	TOC
{:toc}


## Magento Enterprise Edition 2.0.10
We are pleased to present Magento Enterprise Edition 2.0.10. This release includes multiple security enhancements and functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



### Fixed issues

 
<!--- 56911 -->* You can now use an alternative Merchant Account ID when using Braintree as a payment method. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>


<!--- 56908 -->* Magento now returns UPS shipping rates for Puerto Rico.


<!--- 56851 -->* Fixed issue with unserialized data during payment.


<!--- 56542 -->* Resolved issue with potential SQL injection through the use of the ordering or grouping parameters. (APPSEC-1480)


<!--- 56314 -->* Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context. APPSEC-1488


<!--- 56108 -->* Fixed issue with certain payment methods potentially permitting the execution of malicious PHP code during check out.   APPSEC-1484


<!--- 55478 -->* Resolved issue where a malicious user could trick Admin users into clicking on a phishing form. This form would then create a backup of the database,  which low-privileged Admin users could then access. APPSEC-1481



<!--- 52437 -->* You no longer receive a prompt to change your password after changing your password and clicking Save Account. <a href="https://github.com/magento/magento2/issues/4331" target="_blank">(GITHUB-4331)</a> 


<!--- 52338 -->* You can no longer trick a user into deleting his store address book entries. APPSEC-1433 


<!--- 51376 -->* Fixed issue with using the Updater application to discover the Magento Admin URL. APPSEC-1404


<!--- 51370 -->* Fixed issue with using the Setup application to discover the Magento local installation path. APPSEC-1402


<!--- 48816 -->* You can no longer store incorrect pages under regular page URL entries. APPSEC-1338

<!--- 48562 -->* Magento no longer exposes internal files when a store is in maintenance mode. APPSEC-1329. <a href="https://github.com/magento/magento2/issues/3191" target="_blank">(GITHUB-3191)</a>



<!--- Omitted (can't be reproduced or won't fix) (CLONES: 57605, 56930, 56925, 56905) (CANNOT REPRO: 53971, 53431) (RELEASE NOTES: 56780)-->


### System requirements
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports:

* PHP 5.5.x, where x is 22 or greater

* PHP 5.6.x

* PHP 7.0.2 up to 7.1.0, except for 7.0.5

* MySQL 5.6 

For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
