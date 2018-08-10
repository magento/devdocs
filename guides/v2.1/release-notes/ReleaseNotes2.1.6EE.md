---
group: release-notes
subgroup: 02_rel-notes
title: Magento Commerce 2.1.6 Release Notes
menu_title: Magento Commerce 2.1.6 Release Notes
menu_order: 262
level3_menu_node: level3child
level3_subgroup: ee21-relnotes 
version: 2.1
---

*	TOC
{:toc}

*Release notes updated on April 28, 2017.*

<div class="bs-callout bs-callout-warning" markdown="1">
Upgrading to this release can cause problems with image resizing. Please see [Image Resize Issue with Magento 2.1.6]({{ site.baseurl }}/guides/v2.1/release-notes/tech_bull_216-imageresize.html){:target="_blank"} for an overview of these post-upgrade issues and our suggested workaround.
</div>

We are pleased to present Magento Commerce (formerly Enterprise Edition) 2.1.6. This release includes important performance enhancements for your Magento installation, especially for operations that involve the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} page as well as image resizing. 

Looking for the <a href="{{ site.baseurl }}/guides/v2.0/cloud/release-notes/CloudReleaseNotes.html" target="_blank">Magento Commerce (Cloud)  Release Notes</a>?

## Highlights

Magento 2.1.6 contains over 15 significant performance enhancements when compared to 2.1.5. Look for the following highlights in this release:


* **Improved performance of the Category page**

	* loading configurable products from the database is now up to 5x faster

	* price calculations are now up to 3-5% faster

	* stock validation is now up to 20% faster



* **Optimized image resizing** 

	* image resize operations performed from the command line interface now generate images of all sizes. See [magento catalog:images:resize]({{ page.baseurl }}/frontend-dev-guide/themes/theme-images.html) for more information.

	* image resize operations from the Admin have been fixed

	* significant decrease in the number of file system operations when processing images on frontend

	* caching of image metadata is up to 50% faster, depending on store size


* **Improved performance of layered navigation**

	* layered navigation is now up to 3% faster due to the caching of attribute options


*	**Minimized indexing operations after product import**

## Functional fixes and enhancements

We address the following functional fixes and enhancements in this release.

### Catalog

<!--- 65324 -->*  Magento no longer locks the `category_product_entity` table. Unlocking this table reduces the potential of lock-related timeouts that can occur when indexing and checkout operations run in parallel. Previously, Magento locked the `category_product_entity` table. 


<!--- 65251 -->* The {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} now displays images that Magento resizes during product save operations, rather than resizing the product on the storefront. Previously, the image path contained `store_id`,  and during save operations, Magento resized images for images the default store only. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Users have encountered problems displaying images after upgrading their software to Magento 2.1.6. These problems range from incomplete loading to the total inability to load images.  Consequently, if you saved a product and didn't open it on the storefront before upgrading to 2.1.6, you'll need to apply a workaround. 

**Workaround**: To correct problems with image loading, choose one of these two workarounds:

* Run `php bin/magento catalog:images:resize`

or 

* Save (or resave) the product with the associated image in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel.
</div>


<!--- 66366 -->* The `\Magento\CatalogInventory\Model\Stock\Status\getStockId()` method now returns the correct values.

### Configurable products

<!--- 65339 -->* The check that Magento runs to confirm a configurable product's readiness for sale is now faster.  (The `isSalable` method checks that a {% glossarytooltip 2fd4d100-28d2-45ca-bec1-128444ea98e6 %}configurable product{% endglossarytooltip %} can be sold (that is, is in a saleable state)). 


<!--- 65247 -->* Query optimizations have improved the speed of configurable product price calculation.



<!--- 65246 -->*  Magento no longer calculates configurable product special prices on the category page. Previously, Magento calculated special prices on the category page, but did not display them.  

### Indexers

<!--- 65362 -->* Magento now runs a selective partial re-indexing operation after import if you enable **Update on Schedule**. Previously, Magento ran a full reindex no matter which index mode was set. 

### Import

<!--- 64856 -->* Magento now displays imported product images in this order: first, the base image, then the additional images in the order in which they were listed in the {% glossarytooltip 6341499b-ead9-4836-9794-53d95eb48ea5 %}CSV{% endglossarytooltip %} file. Previously, Magento displayed images in this unexpected order: first, an additional image, then the base image, and finally, all remaining additional images.

### Miscellaneous

<!--- 65484 -->* Magento now caches attribute options for the layered navigation feature. This reduces the number of queries to the database, and consequently improves performance.


<!--- 65483 -->* Magento no longer performs unnecessary file check operations (for example, `file_exists`, `is_file`), which improves the performance of the category and product pages. 


<!--- 65480 -->* Magento now caches image metadata, which avoids the time-consuming need to read images for {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} loading.


<!--- 65481 -->* Magento no longer performs unnecessary staging-related flag operations on the Category page. Previously, Magento performed staging-related flag operations even when the Staging {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} was not used.  


<!--- 66400 -->*  Magento now shows a significant decrease in Redis traffic after upgrading 2.1.2 to 2.1.4. 

### Swatches

<!--- 65404 -->* Magento no longer creates redundant objects when initializing a configurable product on the Category page.


<!--- 65403 -->* You can now disable swatches for both the {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} page and search results (quick or advanced). To disable swatches from these requests, disable **Stores > Configuration > Catalog > Storefront > Show Swatches in Product List**.

<!--- 65402 -->* The logic that Magento uses to validate swatch attributes has been optimized. 

<!--- 65248 -->* Magento now caches swatch data in the block cache, which improves the responsiveness of the configurable product pages. 




<!--- DUPLICATE -->
<!--- 65252 -->
<!--- 66125 -->
<!--- 66346 -->


<!--- INTERNAL ONLY -->
<!--- 65203 -->

<!--- CAN'T REPRODUCE -->
<!--- 65609 -->

<!--- WON'T FIX -->
<!--- 65250 -->

## System requirements

Our technology stack is built on {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} and MySQL. For more information, see
<a href="{{ page.baseurl }}/install-gde/system-requirements.html" target="_blank">System Requirements</a>.




{% include install/releasenotes/ee_install_21.md %}

## Migration toolkits

The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits

Dear community members, thank you for your suggestions and bug reports. 


