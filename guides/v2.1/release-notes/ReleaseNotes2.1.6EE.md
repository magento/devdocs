---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento EE 2.1.6 Release Notes
menu_title: Magento EE 2.1.6 Release Notes
menu_order: 265
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
github_link: release-notes/ReleaseNotes2.1.6EE.md
---

*	TOC
{:toc}

We are pleased to present Magento Enterprise Edition 2.1.6. This release includes important performance enhancements for your Magento software, especially to the performance of operations involving configurable products with swatches. 

Looking for the <a href="http://devdocs.magento.com/guides/v2.0/cloud/release-notes/CloudReleaseNotes2.1.4.html" target="_blank">Magento Enterprise Cloud Edition Release Notes</a>?


## Highlights

Magento 2.1.6 contains over 15 significant performance enhancements when compared to 2.1.5. Look for the following highlights in this release:

 * **Improved performance of the category page**

 	* loading configurable products from the database is now up to 5x faster

 	* price calculations is now up to 3-5% faster

 	* stock validation is now up to 20% faster


* **Optimized image resizing** 

	* image resize operations performed from the Command Line Interface (CLI) now generate full size images

	* image resize operations from the Admin is fixed as well

	* IO activity and number of images requested is now up to 30% faster

	* caching of image metadata is up to 50% faster, depending upon store size


* **Improved performance of layered navigation**

	* layered navigation is now up to 3% faster due to the caching of attribute options


*	**Minimization of indexing operations after product import**






## Functional enhancements

### Catalog


<!--- 65324 -->* Magento no longer permits JOIN operations to lock rows in the SQL `cataloginventory_stock_item` table during checkout. Previously, Magento permitted this type of operation to maintain the consistency of inventory information during checkout. However, under these conditions, you received this error: 

`General error: 1205 Lock wait timeout exceeded; try restarting transaction`


<!--- 65251 -->* The Magento image resize mechanism no longer generates images of all sizes upon user request. Instead, Magento generates and saves all image sizes after you save a product.  Previously, some product images were re-sized on the fly during a request, which degraded performance.



### Configurable products

<!--- 65339 -->* The check that Magento runs to confirm a configurable product's readiness for sale is now faster.  (The `isSalable` method checks that a configurable product can be sold (that is, is in a saleable state). 



<!--- 65247 -->* Index optimizations have improved the speed of configurable product price calculation. 


<!--- 65246 -->* The speed of configurable product special price calculation and rendering on the Category page has improved. Magento now renders the regular price for a configurable product on the Product page, but not for the list of products on the Category page. Previously, Magento rendered the regular price in both locations, which affected performance. 



### Indexers

<!--- 65362 -->* Magento now runs a full reindex after import if you've set **Update on Schedule** to on. Previously, Magento ran a full reindex no matter which index mode was set. 



### Import

<!--- 64856 -->* Magento now displays imported product images in this order: first, the base image, then the additional images in the order in which they were listed in the CSV file. Previously, Magento displayed images in this unexpected order: first, an additional image, then the base image, and finally, all remaining additional images.



### Miscellaneous

<!--- 65484 -->* Magento now caches attribute options for the layered navigation feature, which reduces the number of queries to the database, and consequently improves performance.


<!--- 65483 -->* Magento no longer performs unnecessary file check operations (for example, `file_exists`, `is_file`). 


<!--- 65480 -->* Magento now caches image metadata, which avoids the time-consuming need to read images for metadata loading.


<!--- 65481 -->* Magento no longer performs unnecessary staging-related flag operations on the Category page. Previously, Magento performed staging-related flag operations even when the Staging module was not used.  





### Swatches

<!--- 65404 -->* Magento no longer creates redundant objects when initializing a configurable product on the Category page.


<!--- 65403 -->* You can now disable swatches for both the Catalog page and search results (quick or advanced). To disable swatches from these requests, disable **Stores > Configuration > Catalog > Storefront > Show Swatches in Product List**.

<!--- 65402 -->* The logic that Magento uses to validate swatch attributes has been optimized. 

<!--- 65248 -->* Magento now caches swatch data in block cache, which improves the responsiveness of the configurable product pages. 




<!--- DUPLICATE -->
<!--- 65252 -->

<!--- INTERNAL ONLY -->
<!--- 65203 -->

<!--- CAN'T REPRODUCE -->
<!--- 65609 -->

<!--- WON'T FIX -->
<!--- 65250 -->


## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 


