---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.10 Release Notes
menu_title: Magento EE 2.0.10 Release Notes
menu_order: 20
github_link: release-notes/ReleaseNotes2.0.10EE.md
---
*	TOC
{:toc}


## Magento Enterprise Edition 2.0.10
We are pleased to present Magento Enterprise Edition 2.0.10. This release includes multiple security and functional enhancements as well as enhancements to the Sales API. New Sales API methods allow third party solutions, such as shipping or ERP applications, to use APIs when they create an invoice or shipment. 



Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.

### Highlights

Patch 2.0.10 introduces two new web APIs (or <i>service contracts</i>) for the Sales module that incorporate functionality that is currently available in the Admin interface into the Sales API. After you install this patch, you’ll be able to use the Sales API `salesShipOrderV1` and `salesInvoiceOrderV1` methods to capture payment and ship product. **These new interfaces will not break any existing customizations or extensions.**

See Module Reference for information on using the `salesShipOrderV1` and `salesInvoiceOrderV1` interfaces. 

Why are we adding new APIs in a patch release? See AK’s blog for more information about these features and Magento’s use of semantic versioning. 






### Security enhancements

We address the following security issues in this release. 

#### General security 

<!--- 57303 -->* FPC Cache Poisoning / Log Evadence for 2.0. It appears to be possible to poison Magento page caches with different pages from the same site. 

<!--- 57811 -->* You can no longer delete a currently logged-in user. 

<!--- 56930 -->* Sessions now expire as expected after logout.

<!--- 57582/1488 -->* Fixed issue with using the Magento Enterprise Edition invitations feature to insert malicious JavaScript and subsequently execute it in the Admin context.


<!--- 57566/1533-->* Change/fake any product price from frontend and complete an order with that faked price. 
You can no longer change or fake a product price from the Magento storefront and then complete an order with that fake price. 


<!--- 57464 -->* The Guest order view protection code is no longer vulnerable to brute force attacks. 



<!--- 56902 -->* A user with lesser privileges can no longer force an Admin user to add his private or public key using a JSON call.

<!--- 56700 -->* <a href="https://github.com/magento/magento2/issues/5719" target="_blank">(GITHUB-5719)</a>, <a href="https://github.com/magento/magento2/issues/5890" target="_blank">(GITHUB-5890)</a>


<!--- 56851 -->* Fixed issue with unserialized data during payment. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>


<!--- 56542/1480 -->* Resolved issue with potential SQL injection through the use of the ordering or grouping parameters.


<!--- 45757 -->* CSRF vulnerability on cart checkout. I have found a CSRF vulnerability on deleting the user's CART in Magento2.
There is no Server side validation of CSRF token in the body of the request. OPEN


#### Cross-site scripting  

<!--- 57463 -->* You can no longer insert malicious cross-site scripting code during email creation. 

<!--- 57580/1433 -->* Resolved a potential cross-site scripting (XSS) vulnerability in which customer addresses could be deleted. You can no longer trick a user into deleting his store address book entries.

<!--- 57803/1539 -->* Cross-Site Scripting: Reflected in loading section. Fixed issue with cross-site scripting reflected in loading section of request.

<!--- 57363 -->*  Stored XSS - Email Template.

1.)Login to your magento2 admin panel

2.)Click on marketing tab

3.)Now select email templates and now create a template

4.)type the name of template anything

5.)Now type template subject anything

6.)In Template Content : Type this payload

<object data="data:text/html;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5jb29raWUpOzwvc2NyaXB0Pg==">

and save it

7.)Now click on preview and you will get stored xss which can be used to steal users ,cookies or to bypass csrf protection.






### Functional fixes

We address the following functional issues in this release.



#### Upgrade

<!--- 57579 -->* Upgrade does not put store in maintenance mode. <a href="https://github.com/magento/magento2/issues/3191" target="_blank">(GITHUB-3191)</a>




#### Tracking and shipping 

<!--- 57098 -->* Changing the city field of an order now affects the shipping rate as expected. Previously, the shipping rate did not update when you changed the city on your order form. 

<!--- 56908 -->* Magento now returns UPS shipping rates for Puerto Rico.

<!--- 57461 -->* Magento no longer throws an exception if you enter an invalid FedEx shipment tracking number.



#### Performance

<!--- 55300 -->* We’ve improved storefront performance when creating 2500 or more product variants.


<!--- 55785 -->* We've improved the load speed of the Configurable Product page. 



#### Cart and checkout

<!--- 56953 -->* Magento now updates the mini cart as expected when you reorder an item. Previously, Magento added the reordered items to the shopping cart, but the mini cart did not update its item count. <a href="https://github.com/magento/magento2/issues/6121" target="_blank">(GITHUB-6121)</a>

 
<!--- 56911 -->* You can now use an alternative Merchant Account ID when using Braintree as a payment method. <a href="https://github.com/magento/magento2/issues/5910" target="_blank">(GITHUB-5910)</a>


#### Sales API enhancements

<!--- 56429 -->*  Shipment creation through API change order status. As an API client I want the order status has to be changed after Invoice has been created via API. Sales API must update status in the same way as Admin actions. 

<!--- 56428 -->*  Invoice creation through API change order status. 



#### Miscellaneous

<!--- 56905 -->* Local File Inclusion for 2.0.x


<!--- 58611 -->*  

<!--- 57065 -->* Magento now returns you to the Admin panel after you've successfully changed your Admin password. Previously, Magento prompted you to change your password even after you just successfully changed it. <a href="https://github.com/magento/magento2/issues/4331" target="_blank">(GITHUB-4331)</a>

<!--- 58625 -->* Not display specific page by adminSetup. Request Setup Wizard Pages when Admin has Permission and is Logged in. The goal is to ensure that an admin user who is logged in and have permission to perform system upgrade can successfully and completely perform an upgrade without been requested to enter a password. OPEN


<!--- 58674 -->* Visual Swatches are not displayed when using search. OPEN

<!--- 58671 -->* Save Credit Cards for registered user during checkout with Braintree Credit Card with 3D Secure enabled does not working OPEN

<!--- 58666 -->* Product is present only in the website3 OPEN






<!--- Omitted (can't be reproduced or won't fix) 57800 (CLONES: 58314) (CANNOT REPRO: 53971, 53431) (INTERNAL ONLY: 56759, 58167, 57879, 57577, 57568, 57294, 57546), 57303, 55862, 52239, 58626-->

### Known issues





<!--- 58017 -->* Issue: Error creating configurable products <a href="https://github.com/magento/magento2/issues/6424" target="_blank">(GITHUB-6424)</a>

While creating a configurable product, the configurable options appear to be created properly, but when you go to save the product, the associated simple products are not saved.


Workaround: Clear browser cache. 





<!--- 55594 -->* Issue: Client-side rendering performance times deteriorate if top-level product categories exceed 2000. 


Workaround: You can still load product pages with more than 2,000 categories, but product performance will be enhanced by limiting top-level categories to less than 2,000. Load times otherwise may exceed your patience. 




<!--- 54618 -->* Issue: Magento does not display the Products > Catalog table after you upgrade from 2.0.1 to 2.1.0, but instead displays a JavaScript error. 

Workaround: After your upgrade is complete, 

1. Clean the page cache by either selecting Flush Magento Cache from the Admin dashboard, or using the command line interface (CLI). To clean the cache from CLI, see Manage the Cache  http://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands-cache.html#config-cli...

2. Restart Varnish: service varnish restart





### System requirements
Our technology stack is built on PHP and MySQL. See
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
