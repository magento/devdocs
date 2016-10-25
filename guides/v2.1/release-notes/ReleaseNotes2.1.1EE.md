---
layout: default
group: release-notes
subgroup: 02_ReleaseNotes
title: Magento EE 2.1.1 Release Notes
menu_title: Magento EE 2.1.1 Release Notes
menu_order: 5
version: 2.1
github_link: release-notes/ReleaseNotes2.1.1EE.md
---

*	TOC
{:toc}


## Magento Enterprise Edition 2.1.1
We are pleased to present Magento Enterprise Edition 2.1.1. This release includes several functional fixes as well as enhancements to the deployment of static assets. It also provides enhancements to the Wishlist module's extensibility and modularity.


Backward-incompatible changes are documented in [Magento 2.1 backward incompatible changes]({{ page.baseurl }}release-notes/backward-incompatible-changes-2.1.html).


### Fixed issues

We address the following functional issues in this release. 



#### Installation and upgrade


<!--- 55357/53777-->* You can now run `magento setup:upgrade --keep-generated` in production mode. Previously, Magento would throw an error when you ran `setup:upgrade` after compiling DI. (This significantly curtailed your ability to deploy continuous integration.) <a href="https://github.com/magento/magento2/issues/4795" target="_blank">(GITHUB-4795)</a> 


<!--- 56974-->* You can now upgrade 2.0.9 with sample data to 2.1.1. 




#### Pricing
<!--- 54320 -->* The Category page now displays current, rather than outdated,  product prices.


<!--- 55055 -->* Tier pricing now works correctly with full page cache. <a href="https://github.com/magento/magento2/issues/5364" target="_blank">(GITHUB-5364)</a> 


<!--- 45339 -->* Cart Price rules are now applied as expected to payment method conditions. Previously, discounts set in Cart Price rules were not applied during checkout.





#### Shopping cart

<!--- 53793 -->* Magento now implements the minicart maximum display recently added item setting to your shopping cart.  Previously, Magento displayed all the items in the shopping cart, even when the number of items exceeded this limit. <a href="https://github.com/magento/magento2/issues/4750" target="_blank">(GITHUB-4750)</a> 





#### Performance


<!--- 57410-->* You can now quickly generate or preview multiple variations of a configurable product. (Saving these variations to the database can be time-consuming, if you have several thousand product options, and our efforts to improve performance continue.) Previously, Magento threw an Invalid Form key error is thrown while you tried to save a configurable product with variations. 


<!--- 52660 -->* We've improved the speed of static asset deployment. 

<!--- 52614 -->* The `setup:static-content:deploy` command now provides flags that you can use to exclude or include individual themes, areas, and locales. For more information, see <a href="https://github.com/magento/magento2/issues/4294" target="_blank">(GITHUB-4294)</a>. 


<!--- 55300, 55620, 54682-->* We've improved storefront performance when creating 2500 or more product variants. 



#### Miscellaneous

<!--- 56892-->*  You can now save products using the multiple select attribute value. Previously, you could not save values if using this attribute. 

<!--- 55524/48429-->* You can now delete updates from a campaign's page entity grid. 



<!--- 56951-->* Magento now displays configurable products as expected after creation. 

<!--- 56582-->* You can now save a product with images multiple times. 


<!--- 56126 -->* You can now log in successfully after creating a custom attribute. Previously, Magento would display an error message, and you could not log in, after first creating a custom attribute, then logging out. 


<!--- 55598/54787 -->* You can now successfully place orders when the Enable and Configure Website Payments Standard Payment Action attribute is set to Sale. Previously, under these conditions, Magento would display an error message and not allow you to complete the purchase.  <a href="https://github.com/magento/magento2/issues/4785" target="_blank">(GITHUB-4785)</a> 



<!--- 50026 -->* Attributes of the `salesInvoiceRepository` methods are now more appropriately type cast. (The datatype is now a nullable float.)  Previously, due to the use of an incorrect datatype, Magento would produce an error when calling the `salesInvoiceRepositoryV1GetList` method. <a href="https://github.com/magento/magento2/issues/3605" target="_blank">(GITHUB-3605)</a> 


<!--- 55462/52448-->* Magento now correctly displays customer address during account creation. Previously, when you selected a default billing address during creation of a new customer account, Magento would not display the address. 



<!--- 54721-->* You can now use Braintree as a payment method when applying reward points or store credit to an order. 

<!--- 57420/54320-->* The category page now shows the current price after Magento runs a scheduled update.  Previously, the category page would not update the  price after running a scheduled update.	<a href="https://github.com/magento/magento2/issues/4945" target="_blank">(GITHUB-4945)</a> 





<!--- DELETED: 54839 (release notes), 56893 (clone), 54647, 55897, 56945, 54963 -->




### Known issue


The Sales API does not currently support all the update operations on objects that you can execute from the Admin. (<i>Objects</i> in this context include orders, invoices, shipments, credit memos, and return merchandise authorizations.)
 
The Sales API

* supports create, read, delete, and search operations on objects

* does not support updates to order status or payment status. (<i>Order status</i> includes changes to processing, shipped, processed, and hold, while <i>payment status</i> includes authorized, charged, reject, and refund.)


You can run these operations from the Admin.



### System requirements
Our technology stack is built on PHP and MySQL. For more information, see
[System Requirements]({{ site.baseurl }}magento-system-requirements.html){:target="_blank"}.


{% include install/releasenotes/ee_install_21.md %}



### Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
