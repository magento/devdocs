---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.4 Release Notes
menu_title: Magento Commerce 2.1.4 Release Notes
menu_order: 267
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
---

*	TOC
{:toc}

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.4. This release includes many functional fixes and enhancements, plus one important security fix.


Looking for the <a href="{{ page.baseurl }}/cloud/release-notes/CloudReleaseNotes2.1.4.html" target="_blank">Magento Commerce (Cloud)  2.1.4 and 2.0.12 Release Notes</a>?

## Highlights

Magento 2.1.4 contains more than 20 functional fixes and enhancements, and one security enhancement. Look for the following highlights in this release:


* **Removal of vulnerability with the Zend framework `Zend_Mail` library**. For more information, see <a href="https://magento.com/security/news/new-zend-framework-1-security-vulnerability" target="_blank">New Zend Framework 1 Security Vulnerability</a>. 


* **Updates to the catalog, payment, and sales modules**

## Security enhancement

This release includes an important enhancement to the security of your Magento software. While there are no confirmed attacks related to the Zend framework `Zend_Mail` {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} vulnerability to date, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. We recommend that you upgrade your existing Magento software to the latest version as soon as possible.
 

## Functional fixes and enhancements

We address the following functional issues in this release.

### Catalog

<!--- 58437-->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} gallery now displays all the images associated with a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %}. Previously, when you clicked on the swatches associated with a configurable product, the gallery displayed only one of several possible images.  <a href="https://github.com/magento/magento2/issues/6195" target="_blank">(GITHUB-6195)</a>, <a href="https://github.com/magento/magento2/issues/4101" target="_blank">(GITHUB-4101)</a>


<!---57832 -->* Magento now displays the **This is a required field** message immediately adjacent to the product options as needed during {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. Previously, Magento displayed this message at the bottom of the checkout form. 

### Checkout 

<!---60293 -->* Magento now successfully estimates shipping costs. Previously, when you tried to estimate shipping costs, the load indicator would spin indefinitely, and Magento displayed this exception,```Object doesn't support this action```. <a href="https://github.com/magento/magento2/issues/5358" target="_blank">(GITHUB-5358)</a>, <a href="https://github.com/magento/magento2/issues/7051" target="_blank">(GITHUB-7051)</a>

### Indexers

<!--- 58893-->* `IndexerHandlerFactory` no longer tries to cast the `$indexer` object to a String if an error occurs. Since `$indexer` is an object of type `IndexerInterface` and does not have a `__toString()` method, attempting to cast the `$indexer` object to a String previously resulted in an error. <a href="https://github.com/magento/magento2/issues/5155" target="_blank">(GITHUB-5155)</a> 

<!--- 59853-->* The Magento flat indexer now collects correct product data for `ROW_ID`.


<!--- 58559-->* The Magento flat indexer no longer throws an error after flat tables are enabled and reindexed. This fix applies to both product and {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} tables. 

### Installation, configuration, and deployment

<!--- 62400-->* Third-party command line tools no longer fail when you run `setup:di:compile`.

<!--- 62648-->* Magento now correctly applies {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} configuration parameters to the corresponding {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %}. <a href="https://github.com/magento/magento2/issues/7943" target="_blank">(GITHUB-7943)</a>

### Miscellaneous

<!--- 62229-->* Magento now displays the price of out-of-stock products on the product page.  

<!--- 62721-->*  The **Allow Gift Wrapping for Order Items** setting now works as expected. Previously, when **Stores > Configuration > Sales > Gift Options** was set to **No**, users  saw the Gift Option link under each product in their {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %}.  


<!--- 60248-->* Information set by the **Default Billing Address** and **Default Shipping Address** checkboxes on the Customer page are now saved correctly.

<!---59416 -->* {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} users with appropriate permissions can now reset the passwords of more than one customer at a time. <a href="https://github.com/magento/magento2/issues/5260" target="_blank">(GITHUB-5260)</a>


<!---59142 -->* Admin interface forms now load data as expected after initializing all components. Previously, under certain conditions, the load indicator would spin indefinitely, and Magento would not load data. 



<!--- 58895-->* If you remove an item from the Compare Items list that is displayed on any {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}Category{% endglossarytooltip %} page, Magento no longer redirects you to the Compare Products page.


<!--- 58832-->* The order comments history no longer duplicates the time that a comment was made. Previously, the time that a comment was made was listed twice.

### Payment methods

<!--- 56695-->* You can now successfully complete Paypal checkout with products that have custom options.  <a href="https://github.com/magento/magento2/issues/5938" target="_blank">(GITHUB-5938)</a>

<!--- 58376-->* PayPal Payflow Pro now uses the currency you've specified in your store settings. Previously, Magento converted the total price into U.S. dollars, no matter which currency was specified in the store settings. 

<!--- 55612-->* Magento no longer displays the **No {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}Payment method{% endglossarytooltip %} available** message when a customer tries to ship items to a billing-restricted country. 

<!--- 62669-->* Third-party payment gateways are now visible from the Admin.  <a href="https://github.com/magento/magento2/issues/7891" target="_blank">(GITHUB-7891)</a>

<!--- 62428-->* Magento now updates you as expected on order comments and order history after you initiate a refund using Braintree. Previously, when you clicked the **Refund** button (to initiate a refund), Magento did not {% glossarytooltip 510de766-1ebd-4546-bf38-c618c9c945d2 %}redirect{% endglossarytooltip %} you to order comments and history information.

<!--- 59036-->* We've fixed an issue with using PayPal Express Checkout to order products with custom options. Previously, although an Admin user could create and configure “File type” custom options, customers could not upload and store files within the order {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %}. <a href="https://github.com/magento/magento2/issues/5434" target="_blank">(GITHUB-5434)</a>

### Travis builds

<!--- 62388-->* We've fixed a fatal issue that occurred if you executed the CatalogImportExport test before running a subsequent test. Previously, you'd receive this error: ```Failed asserting that false is true```.




<!--- 59680-->* We've fixed a fatal issue that occurred if you ran Travis builds on `imagettfbbox 2.1.2`. Previously, you'd receive this error: 

	```PHP Fatal error: Call to undefined function Magento\Framework\Image\Adapter\imagettfbbox() in /home/travis/build/magento/magento2/lib/internal/Magento/Framework/Image/Adapter/Gd2.php```








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

<!--- 62135-->



<!-- INTERNAL ONLY --> 

<!--- 62136-->

<!--- 60718--> 

<!--- 60590 -->

<!--- 60145-->

<!--- 61950 -->

<!--- 63329-->

<!--- 63168-->

<!--- 60364-->

## Known issues

<!---62083-->* **Issue**: You receive the following fatal error while installing 2.1.3 from `repo.magento.com`.
   
  	> Fatal error: Cannot instantiate interface Magento\Framework\App\Config\Scope\ReaderPoolInterface in /var/www/html/magento2ce/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php on line 73.
  
  **Workaround**:  You can avoid this fatal error by taking one of these actions: 

	*	If your Magento root directory is `<Magento install dir>/pub`,  then start the Web Setup Wizard from `http://<Magento host or IP>/setup` instead of from `http://<Magento host or IP>`

	*	Install Magento using the [command line]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html).



<!---60616-->* **Issue**: Magento fails to validate a customer address or customer attributes as expected during checkout. 


<!---60781-->* **Issue**: Installing with Varnish can result in products not appearing on the {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} even after you purge the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}. 


<!---60553-->* **Issue**: When editing a product, you cannot edit customizable options on the storeview level. Consequently, a change to one option affects products on all stores. Also, the **Use Default Value** checkbox for the option title does not work. Clearing this checkbox, and then changing the option title affects all storeviews. 



<!---60599-->* **Issue**: You cannot use a negative value in the **Quantity** field for a product, even when you activate back orders (**Stores > Configuration > Catalog > Inventory > Product Stock Options > Backorders = Allow Qty Below 0**) <a href="https://github.com/magento/magento2/issues/7401" target="_blank">(GITHUB-7401)</a>


  
<!---61349-->* **Issue**: When you upgrade your Magento installation from the command line, the `bin/magento` commands do not skip the `var/session` folder, as expected. (The `bin/magento` commands include `setup:cron:run`, `setup:upgrade`, and `setup:uninstall`.) **Workaround**: Make `var/session` writeable before you run the `bin/magento` commands.  



<!---60947-->* **Issue**: The Low Stock Products report (**Admin > Reports > Products > Low Stock**) is not working correctly. 



<!---60902-->* **Issue**: You cannot re-enable a previously disabled `Magento_AdminGws` {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} without causing a range of {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} errors. Here is a sample error:

	```[PDOException] 
	SQLSTATE[42S02]: Base table or view not found: 1146 Table 'magento.quote_item' doesn't exist```



<!---60408-->* **Issue**: If you move a product update from one scheduled update to another, Magento will no longer track {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} changes. 


<!---59775-->* **Issue**: You cannot generate secure content if you deploy {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %} under these conditions: 

	* `pub/static` is in read-only mode

	*  Magento is in production mode

	Requests to `pub/static/_requirejs/frontend/Magento/luma/en_US/secure/requirejs-config.js`, and consequently the frontend code,  will fail under these conditions.



<!---60705-->* **Issue**: Client-side LESS compilation is not working properly. Consequently, page load performance is not optimal. 






 

## System requirements

Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. For more information, see
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports. 


