---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento CE 2.1.4 Release Notes
menu_title: Magento CE 2.1.4 Release Notes
menu_order: 9
version: 2.1
github_link: release-notes/ReleaseNotes2.1.4CE.md
---

*	TOC
{:toc}


We are pleased to present Magento Community Edition 2.1.4. This release includes many functional enhancements and fixes.



## Highlights

Magento 2.1.4 contains more than 20 functional fixes and enhancements, and one security enhancement. It includes these highlights:

* **Improvements to Payflow Pro processing**. PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price of a purchase into U.S. dollars, no matter which currency you specified in the store settings. 

* **Removal of vulnerability with the Zend framework `Zend_Mail` library**. For more information, see <a href="https://magento.com/security/news/new-zend-framework-1-security-vulnerability" target="_blank">New Zend Framework 1 Security Vulnerability</a>.  


* **Refinements to catalog indexing**. 


## Security enhancement

This release includes an important enhancement to the security of your Magento software. While there are no confirmed attacks related to the Zend framework `Zend_Mail` library vulnerability to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
 


## Functional fixes and enhancements

We address the following functional issues in this release.





### Catalog

<!--- 58437-->* The storefront gallery now displays all the images associated with a configurable product. Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images.  <a href="https://github.com/magento/magento2/issues/6195" target="_blank">(GITHUB-6195)</a>, <a href="https://github.com/magento/magento2/issues/4101" target="_blank">(GITHUB-4101)</a>


<!---57832 -->* Magento now displays the **This is a required field** message immediately adjacent to the product options as needed during checkout. Previously, Magento displayed this message at the bottom of the checkout form. 


### Checkout 

<!---60293 -->* Magento now successfully estimates shipping costs. Previously, when you tried to estimate shipping costs, the load indicator would spin indefinitely, and Magento displayed this exception, ```Object doesn't support this action```. <a href="https://github.com/magento/magento2/issues/5358" target="_blank">(GITHUB-5358)</a>, <a href="https://github.com/magento/magento2/issues/7051" target="_blank">(GITHUB-7051)</a>



### Indexers


<!--- 58893-->* `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. <a href="https://github.com/magento/magento2/issues/5155" target="_blank">(GITHUB-5155)</a> 

<!--- 58559-->* We've fixed an issue with the indexing of flat tables. Previously, you encountered an error if you re-indexed after enabling the use of flat tables (either product or catalog tables). 




### Installation, configuration, and deployment

<!--- 62400-->* Third-party command line tools no longer fail when you run `setup:di:compile`.

<!--- 62648-->* Magento now correctly applies website configuration parameters to the corresponding store view. <a href="https://github.com/magento/magento2/issues/7943" target="_blank">(GITHUB-7943)</a>





### Miscellaneous

<!--- 62229-->* Magento now displays the price of out-of-stock products.  Previously, it did not display the price of out-of-stock products on the product page.


<!--- 62721-->*  The **Allow Gift Wrapping for Order Items** setting now works as expected. Previously, when **Stores > Configuration > Sales > Gift Options** was set to **No**, users  saw the Gift Option link under each product in their shopping cart.  


<!--- 60248-->* The **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!---59416 -->* Admin users with appropriate permissions can now reset the passwords of more than one customer at a time. <a href="https://github.com/magento/magento2/issues/5260" target="_blank">(GITHUB-5260)</a>


<!---59142 -->* Admin interface forms now load data as expected after initializing all components. Previously, under certain conditions, the load indicator would spin indefinitely, and Magento did not load data. 



<!--- 58895-->* If you remove an item from the Compare Items list that is displayed on any Category page, Magento no longer redirects you to the Compare Products page.


<!--- 58832-->* The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was entered was listed twice.




### Payment methods

<!--- 56695-->* You can now successfully complete Paypal checkout with products that have custom options.  <a href="https://github.com/magento/magento2/issues/5938" target="_blank">(GITHUB-5938)</a>

<!--- 58376-->* PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price  into U.S. dollars, no matter which currency was specified in the store settings. 

<!--- 55612-->* Magento no longer displays the **No Payment method available** message when a customer tries to shipitems to a billing-restricted country. 

<!--- 62669-->* Third party payment gateways are now visible from the Admin.  <a href="https://github.com/magento/magento2/issues/7891" target="_blank">(GITHUB-7891)</a>

<!--- 62428-->* Magento now updates you as expected on order comments and order history after you initiate a refund using Braintree. Previously, when you clicked the **Refund** button (to initiate a refund), Magento did not redirect you to order comments and history information.

<!--- 59036-->* We've fixed an issue with using PayPal Express Checkout to order products with custom options. Previously, although an Admin user could create and configure “File type” custom options, customers could not upload and store files within the order quote. <a href="https://github.com/magento/magento2/issues/5434" target="_blank">(GITHUB-5434)</a>




### Travis builds


<!--- 62388-->* We've fixed a fatal issue that occurred if you executed the CatalogImportExport test before running a subsequent test. Previously, you'd receive this error: ```Failed asserting that false is true```.




<!--- 59680-->* We've fixed a fatal issue that occurred if you ran Travis builds on `imagettfbbox 2.1.2`. Previously, you'd receive this error: 
			PHP Fatal error: Call to undefined function Magento\Framework\Image\Adapter\imagettfbbox() in /home/travis/build/magento/magento2/lib/internal/Magento/Framework/Image/Adapter/Gd2.php`. 








<!-- NOT A BUG -->
<!--- 62239-->

<!--- 62527-->

<!--- 62281-->





<!-- CANNOT REPRODUCE --> 

<!--- 62257-->

<!--- 62479-->

<!--- 62256-->

<!--- 62476-->

<!--- 62585-->

<!--- 62524-->



<!-- DUPLICATE --> 

<!--- 62664-->

<!--- 62442-->



<!-- WON'T FIX --> 

<!--- 62429-->




<!-- INTERNAL ONLY --> 

<!--- 62136-->

<!--- 60718--> 

<!--- 60590 -->

<!--- 60145-->

<!--- 61950 -->


## Known issues

<!--- 63123 --> * Extension Manager runs slowly when installing or uninstalling extensions. It does not display information as expected about the extension you are installing or uninstalling, and the error console logs do not contain pertinent messages.


<!--- 63115 --> * Admin users cannot use the **NEW Category Image Upload** field (**Product > Categories > Content**) to upload new Category images. Currently, Magento fails to load new Category images, and displays this message, "Attention. The file was not uploaded". 

<!--- 63050 --> * Magento does not correctly display the status of products when you add an item to the Configurable product page. 

<!--- 62605 --> * Although the Category Preview page omits some details, those details are present in the category on the storefront.  


<!--- 62523 --> * The Magento Admin Order page is currently not displaying critical information about orders. Specifically, the Payment Information block lacks the following information: 

	* Fraud Detection

	* FDS Filter Action

	* AVS Response

	* Fraud Filters

	* Amount Filter



<!--- 62283 --> * Server-side LESS compilation is not working as expected. When you enable server-side LESS compilation,  the `pub/static/frontend` directory remains. 


<!--- 62243 --> * After a customer orders the last unit in your inventory of a Configurable product, Magento still lists the product as being in stock.  




 
 


## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

