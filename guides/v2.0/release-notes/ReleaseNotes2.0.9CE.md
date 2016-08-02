---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.0.9 Release Notes
menu_title: Magento CE 2.0.9 Release Notes
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.9CE.md
---
*	TOC
{:toc}


## Magento Community Edition 2.0.9
We are pleased to present Magento Community Edition 2.0.9. This release includes several functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



### Fixed issues


#### Shopping cart

<!--- 56019/49716 -->* Magento no longer displays an incorrect price in the shopping cart when using multiple shipping addresses.

<!--- 55464/53793 -->* The Minicart Maximum Display Recently Added Item setting now works as expected.  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. <a href="https://github.com/magento/magento2/issues/4750" target="_blank">(GITHUB-4750)</a> 


#### Miscellaneous

<!--- 55362/45339 -->* Cart price rules are now applied as expected to Payment method conditions. Previously, discounts set in Cart Price rules were not applied during checkout. 




<!--- 55526/53986 -->* You can now select Gift Wrapping when purchasing a Grouped product. Previously, Magento did not permit you to select Gift Wrapping for a Grouped product. <a href="https://github.com/magento/magento2/issues/4853" target="_blank">(GITHUB-4853)</a> 


<!--- 55513/51015 -->* You can now save a product for which you've entered no Swatch attribute value when this attribute is not required.  Previously, during product creation, Magento would not save the product unless you added a value to the swatch attribute even with a Values Required' set to No. 
 

<!--- 55465/50026 -->* Attributes of the SalesInvoiceRepository methods are now correctly type cast. (The datatype is now a float -- not nullable float.)  Previously, due to the use of an incorrect data type cast, Magento would produce an error when calling the salesInvoiceRepositoryV1GetList methods. <a href="https://github.com/magento/magento2/issues/3605" target="_blank">(GITHUB-3605)</a> 


<!--- 55461/54224 -->* We've renamed the Tier Price option on the Advanced pricing tab to Customer Group Price option. 


<!--- 55441/55055 -->* Tier pricing now works correctly with Full Page Cache (FPC). <a href="https://github.com/magento/magento2/issues/5364" target="_blank">(GITHUB-5364)</a>


 

<!--- Omitted (can't be reproduced or won't fix) 48425, 53777, 54721, 54804, 54718, 54647-->





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
