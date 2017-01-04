---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.4 Release Notes
menu_title: Magento EE 2.1.4 Release Notes
menu_order: 12
version: 2.1
github_link: release-notes/ReleaseNotes2.1.4EE.md
---

*	TOC
{:toc}

We are pleased to present Magento Enterprise Edition 2.1.4. This release includes many functional fixes and enhancements.



## Highlights

Magento 2.1.4 contains more than 20 bug fixes and enhancements, including these highlights:





## Functional fixes and enhancements

We address the following functional issues in this release.


### Checkout 

<!---60293 -->* The Magento application now successfully estimates shipping costs. Previously, when you tried to estimate shipping costs, the load indicator would spin indefinitely, and Magento displayed this exception, "Object doesn't support this action". <a href="https://github.com/magento/magento2/issues/5358" target="_blank">(GITHUB-5358)</a>, <a href="https://github.com/magento/magento2/issues/7051" target="_blank">(GITHUB-7051)</a>




### Configurable products

<!--- 58437-->* The storefront gallery now displays all the images associated with a configurable product. Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images.  <a href="https://github.com/magento/magento2/issues/6195" target="_blank">(GITHUB-6195)</a>, <a href="https://github.com/magento/magento2/issues/4101" target="_blank">(GITHUB-4101)</a>


<!---57832 -->* The Magento application now displays the "This is a required field" message immediately below the product options as needed during checkout. Previously, Magento displayed this message at the bottom of the checkout form. 


### Installation, configuration, and deployment

<!--- 62400-->* We've fixed an issue where third-party command line tools failed when you ran `setup:di:compile`.

<!--- 62648-->* The Magento application now correctly applies website configuration parameters to the corresponding store view. <a href="https://github.com/magento/magento2/issues/7943" target="_blank">(GITHUB-7943)</a>



### Payment methods

<!--- 56695-->* You can now successfully complete Paypal checkout with products that have custom options.  <a href="https://github.com/magento/magento2/issues/5938" target="_blank">(GITHUB-5938)</a>

<!--- 58376-->* PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price  into U.S. dollars, no matter which currency was specified in the store settings. 

<!--- 55612-->* Magento no longer displays the “No Payment method available” message when a customer tries to ship his items to a billing-restricted country. 

<!--- 62669-->* Third party payment gateways are now visible from the Admin interface.  <a href="https://github.com/magento/magento2/issues/7891" target="_blank">(GITHUB-7891)</a>

<!--- 62428-->* The Magento application now updates you as expected on order comments and order history after you initiate a refund using Braintree. Previously, when you clicked on the Refund button (to initiate a refund), Magento did not redirect you to order comments and history information.


### Indexers

<!--- 59853-->* The Magento flat indexer now collects correct product data for `ROW_ID`.

<!--- 58893-->* `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. <a href="https://github.com/magento/magento2/issues/5155" target="_blank">(GITHUB-5155)</a> 



### Miscellaneous

<!--- 62229-->* The Magento application now displays the price of out-of-stock products.  Previously, it did not display the price of out-of-stock products on the product page.


<!--- 62721-->*  The **Allow Gift Wrapping for Order Items** setting now works as expected. Previously, when **Stores > Configuration > Sales > Gift Options** was set to **No**, users  saw the Gift Option link under each product in their shopping cart.  


<!--- 60248-->* The **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!---59416 -->* Admin users with appropriate permissions can now reset the passwords of more than one customer at a time. <a href="https://github.com/magento/magento2/issues/5260" target="_blank">(GITHUB-5260)</a>


<!---59142 -->* Admin interface forms now load data as expected after initializing all components. Previously, under certain conditions, the load indicator would spin indefinitely, and the Magento application would not load data. 


<!--- 59036-->* We've fixed an issue with using PayPal Express Checkout to order products with custom options. <a href="https://github.com/magento/magento2/issues/5434" target="_blank">(GITHUB-5434)</a>

<!--- 58895-->* Magento no longer redirects you to the Compare Products page if you try to remove a product.


<!--- 58832-->* The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was made was listed twice.

<!--- 58559-->* We've fixed an issue with indexing of flat tables.




### Travis builds


<!--- 62388-->* We've fixed a fatal issue that occurred if you executed CatalogImportExport testbefore running a subsequent test. Previously, you'd receive this error: `Failed asserting that false is true`.




<!--- 59680-->* We've fixed a fatal issue that occurred if you ran Travis builds on `imagettfbbox 2.1.2`. Previously, you'd receive this error: `PHP Fatal error: Call to undefined function Magento\Framework\Image\Adapter\imagettfbbox() in /home/travis/build/magento/magento2/lib/internal/Magento/Framework/Image/Adapter/Gd2.php`. 








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



## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


