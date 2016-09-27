---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento CE 2.0.10 Release Notes
menu_title: Magento CE 2.0.10 Release Notes
menu_order: 19
github_link: release-notes/ReleaseNotes2.0.10CE.md
---
*	TOC
{:toc}


## Magento Community Edition 2.0.10
We are pleased to present Magento Community Edition 2.0.10. This release includes multiple security and functional enhancements as well as enhancements to the Sales API. New Sales API methods allow third party solutions, such as shipping or ERP applications, to use APIs when they create an invoice or shipment. 



Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.


### Highlights
Patch 2.0.10 introduces two new web APIs (or <i>service contracts</i>) for the Sales module that incorporate functionality into the Sales API that is currently available in the Admin interface. After you install this patch, you’ll be able to use the Sales API `salesShipOrderV1` and `salesInvoiceOrderV1` methods to capture payment and ship product. See Module Reference for information on using the `salesShipOrderV1` and `salesInvoiceOrderV1` interfaces. 

#### Why are we adding new APIs in a patch release?

<i>These new interfaces will not break any existing customizations or extensions</i>.  See Alan Kent’s blog for more information about these features and Magento’s use of semantic versioning. 




### Security enhancements

We address the following security issues in this release. 

#### General security 


<!--- 57811 -->* You can no longer delete a currently logged-in user. 

<!--- 56930 -->* Sessions now expire as expected after logout.

<!--- 57582/1488 -->* Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context.


<!--- 57566/1533-->* You can no longer change or fake a product price from the Magento storefront and then complete an order with that fake price. 


<!--- 56902 -->* A user with lesser privileges can no longer use a JSON call to force an Admin user to add his private or public key.

<!--- 56700 -->* The order comment timestamp now correctly reflects the time that the comment was submitted, not when the page was last refreshed.<a href="https://github.com/magento/magento2/issues/5719" target="_blank">(GITHUB-5719)</a>, <a href="https://github.com/magento/magento2/issues/5890" target="_blank">(GITHUB-5890)</a>


<!--- 56851 -->* Fixed issue with the `_convertAdditionalData` method's use of unserialized data during payment. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>


<!--- 56542/1480 -->* Resolved issue with potential SQL injection through the use of the ordering or grouping parameters.


#### Denial-of-service attacks and brute force attacks

<!--- 57464 -->* The Guest order view protection code is no longer vulnerable to brute force attacks. 

<!--- 57303 -->* Fixed vulnerability to denial-of-service (DoS) attacks by full page cache poisoning. 


#### Cross-Site Request Forgery  (CSRF)

<!--- 45757 -->* Removed vulnerability in cart checkout experience by enhancing server-side Cross-Site Request Forgery (CSRF) validation.



#### Cross-site scripting  (XSS)

<!--- 57580/1433 -->* Resolved a potential XSS vulnerability in which customer addresses could be deleted. You can no longer deceive a user into deleting his store address book entries.

<!--- 57803/1539 -->* Fixed issue with XSS reflection in the loading section of REST requests.


<!--- 57363 -->*  Fixed issue with potential storage of malicious XSS code in the body of an email template. (A malicious user could use this this script to steal user information and cookies, or to bypass cross-site request forgery protection.)



### Functional fixes

We address the following functional issues in this release.




#### Tracking and shipping 

<!--- 57098 -->* Changing the city field of an order now affects the shipping rate as expected. Previously, the shipping rate was not updated when you changed the city on your order form. 

<!--- 56908 -->* Magento now returns UPS shipping rates for Puerto Rico.

<!--- 57461 -->* Magento no longer throws an exception if you enter an invalid FedEx shipment tracking number.



#### Cart and checkout

<!--- 56953 -->* Magento now updates the mini cart as expected when you reorder an item. Previously, Magento added the reordered items to the shopping cart, but the mini cart did not update its item count. <a href="https://github.com/magento/magento2/issues/6121" target="_blank">(GITHUB-6121)</a>

 
<!--- 56911 -->* You can now use an alternative Merchant Account ID when using Braintree as a payment method. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>


#### Sales API enhancements

<!--- 56429 -->*  We've added the ability to change the status of a shipment through the web API.  The new `salesShipOrderV1` interface support tasks you can already carry out through the Admin dashboard. These tasks include creating a shipment document or modifying an existing one. This call also has the ability to: 

* write information about shipped items to the order

* change order status and state to reflect actions

* notify customer about shipment creation




<!--- 56428 -->*  We've added the ability to change the status of an invoice through the web API.  The new `salesInvoiceOrderV1` interface support tasks you can already do through the Admin dashboard. These tasks  include creating a full or partial invoice or modifying an existing one.  This call also has the ability to:  


* capture money that was placed with order payment

* change order status and state to reflect actions

* notify customer about invoice creation







#### Miscellaneous


<!--- 57065 -->* Magento now returns you to the Admin dashboard after you've successfully changed your Admin password. Previously, Magento prompted you to change your password even after you just successfully changed it. <a href="https://github.com/magento/magento2/issues/4331" target="_blank">(GITHUB-4331)</a>

<!--- 57579 -->* Upgrade now puts stores in maintenance mode as expected. <a href="https://github.com/magento/magento2/issues/3191" target="_blank">(GITHUB-3191)</a>



<!--- Omitted (can't be reproduced or won't fix) 57800 (CLONES: 58314, 58798, 58695, 58883) (CANNOT REPRO: 53971, 53431) (INTERNAL ONLY: 58674, 58816, 558874, 56759, 58167, 57879, 57577, 57568, 57294, 57546), 57303, 55862, 52239, 58626, 58625, 58666, 58933, 58923 (WONT FIX: 58671-->

### Known issues


<!--- 58017 -->* **Issue: Error creating configurable products** <a href="https://github.com/magento/magento2/issues/6424" target="_blank">(GITHUB-6424)</a>

While creating a configurable product, the configurable options appear to be created properly, but when you go to save the product, the associated simple products are not saved.


**Workaround**: Clear browser cache. 



<!--- 56853 -->* **Issue: Restful API returns unexpected attribute**

The value type of the `catalogProductRepositoryV1` method `category_ids` attribute should be string, but instead returns an array. 

**Workaround**: Adjust your code to handle a response of type array instead of string. 



<!--- 54618 -->* **Issue: Magento does not display the Products > Catalog table after you upgrade from 2.0.1 to 2.1.0, but instead displays a JavaScript error** 

**Workaround**: After your upgrade is complete, follow these steps:

1. Clean the page cache by either selecting Flush Magento Cache from the Admin dashboard, or by using the command line interface (CLI). To clean the cache from CLI, see <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-cache.html" target="_blank">Manage the Cache</a>.


2. Restart Varnish. 


<!--- 57004 -->* **Issue: The scope selector on the Product page does not display all websites associated with a restricted user.**


### System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.

{% include install/releasenotes/ce_install_20.md %}


## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
