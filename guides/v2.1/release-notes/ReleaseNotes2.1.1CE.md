---
layout: default
group: release-notes
subgroup: 02_ReleaseNotes
title: Magento CE 2.1.1 Release Notes
menu_title: Magento CE 2.1.1 Release Notes
menu_order: 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.1CE.md
---

*	TOC
{:toc}


## Magento Community Edition 2.1.1
We are pleased to present Magento Community Edition 2.1.1. This release includes several functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



## Fixed issues

#### Installation and upgrade

<!--- 55458/54647-->* You can now successfully update simple products after upgrading from CE 2.0.2 to EE 2.1.0-rc3. 

<!--- 55357/53777-->* You can now run `magento setup:upgrade --keep-generated` in production mode.  <a href="https://github.com/magento/magento2/issues/4795" target="_blank">(GITHUB-4795)</a> 

<!--- 55199/54089-->* You can now upgrade your Magento installation after changing the name of the default attribute set.



#### Shopping cart

<!--- 55463/53793 -->* The Minicart Maximum Display Recently Added Item setting now works as expected.  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. <a href="https://github.com/magento/magento2/issues/4750" target="_blank">(GITHUB-4750)</a> 

<!--- 55361/45339-->* Cart price rules are now applied as expected to payment method conditions. Previously, discounts set in Cart Price rules were not applied during checkout.



#### Miscellaneous


<!--- 55604/55055-->* Tier pricing now works correctly with Full Page Cache. <a href="https://github.com/magento/magento2/issues/5364" target="_blank">(GITHUB-5364)</a> 

<!--- 55598/54787 -->* You can now successfully place orders when the Enable and Configure Website Payments Standard Payment Action attribute is set to Sale. Previously, under these conditions, Magento would display an error message and not complete the purchase.  <a href="https://github.com/magento/magento2/issues/4785" target="_blank">(GITHUB-4785)</a> 

<!--- 55517/53159-->* Magento now uses site configuration settings to determine which countries are displayed in a product profile's Country of Manufacture drop-down menu. <a href="https://github.com/magento/magento2/issues/4579" target="_blank">(GITHUB-4579)</a> 

<!--- 55515/54320-->*  The Magento category page now retrieves current prices from the price index. 


<!--- 55466/50026 -->* Attributes of the `SalesInvoiceRepository` methods are now more appropriately type cast. (The datatype is now a nullable float.)  Previously, due to the use of an incorrect datatype, Magento would produce an error when calling the `salesInvoiceRepositoryV1GetList` method. <a href="https://github.com/magento/magento2/issues/3605" target="_blank">(GITHUB-3605)</a> 


<!--- 55462/52448-->* Magento now correctly displays the customer address. Previously, when you selected a default billing address during creation of a new customer account, Magento would not display the address. 



<!--- 55360/48425-->* Magento now uses the configuration settings for the default storeview when displaying the list of all allowed countries for an associated customer address. <a href="https://github.com/magento/magento2/issues/2946" target="_blank">(GITHUB-2946)</a>



<!--- 55355/54721-->* You can now use Braintree as a payment method when applying reward points or store credit to an order. Previously, you could not access or populate Braintree payment fields if your order included reward points or store credits.



<!--- DELETED: 54804 (won't fix) -->





### System requirements
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
