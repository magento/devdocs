---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.0.10 Release Notes
menu_title: Magento CE 2.0.10 Release Notes
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.10CE.md
---
*	TOC
{:toc}


## Magento Community Edition 2.0.10
We are pleased to present Magento Community Edition 2.0.10. This release includes several functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



### Fixed issues


#### Security enhancements


<!--- 56594 -->* An Administrator with minimal privileges can store a system file in a publicly accessible media folder, where even an unprivileged user can retrieve it. (APPSEC-1490)


<!--- 56542 -->* Bypass single query restriction and inject SQL (port to 2.0) (APPSEC-1480)

<!--- 56314 -->* Your session cookie does not expire when you log out. This makes it possible for an unauthorized user to access your customer account using the unexpired cookie. This vulnerability is especially relevant when using a shared computer (such as one in a library) to access the site. (APPSEC-1478)

<!--- 56108 -->* Certain payment methods potentially permit the execution of malicious PHP code during checkout. (APPSEC-1484)

<!--- 55478 -->* Any user can create backup

<!--- 55476 -->*  You could use the Magento Enterprise Edition invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context. (APPSEC-1488)

<!--- 55432 -->* Lack of CSRF protection and privilege check allows any Admin user to create backup of the system. Admin user can be tricked into clicking on a phishing form that creates a backup or a low privileged admin user can access this functionality. Low risk since creating a backup does not cause harm to the installation. (APPSEC-1481)

<!--- 52338 -->* It is possible to trick user to delete his store address book entries. (APPSEC-1433

<!--- 51376-->*  You can use the Updater application to discover the Magento Admin URL. (APPSEC-1404)

<!--- 51370-->*  You can use the Setup application to discover the Magento local installation path. (APPSEC-1402)


<!--- 48816-->*  It is possible to affect full page cache and as a result store incorrect pages under regular page URL entries. (APPSEC-1338)


#### Miscellaneous functional fixes

<!--- 55612 -->* “No Payment method available” when customer tries to ship his items to billing restricted country. In Magento 2, “No Payment method available” validation is displayed when customer tries to ship his items to billing restricted country. Allow all countries for shipping, but only one country for Billing (Payment from specific country – for example India).
In shipping address step, select country as “United States” and select an available shipping method and proceed to next step.
In Payment method step, “No Payment method available” validation is displayed as shown in the below screenshot.



<!--- 52437 -->* The "It's time to change your password" prompt now longer appears after you've successfully changed and saved your password. Previously, you would click this button, then successfully change your password, but Magento would still display this prompt. 
 <a href="https://github.com/magento/magento2/issues/4331" target="_blank">(GITHUB-4331)</a>

LOOK IN PREVIOUS RELEASE NOTES




<!--- 48562 -->* Upgrade does not put store in maintenance mode. <a href="https://github.com/magento/magento2/issues/3191" target="_blank">(GITHUB-3191)</a>

<!--- 47240 -->*  We've fixed the JavaScript error that occured on the Checkout Page after Changing Country in Estimate Shipping and Tax Block.  <a href="https://github.com/magento/magento2/issues/5089" target="_blank">(GITHUB-5089)</a>




<!--- Omitted (can't be reproduced or won't fix) 56780, 53971 per steve's suggestion -->





### System requirements
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports:

* PHP 5.5.x, where x is 22 or greater

* PHP 5.6.x

* PHP 7.0.2 up to 7.1.0, except for 7.0.5

* MySQL 5.6 

For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
