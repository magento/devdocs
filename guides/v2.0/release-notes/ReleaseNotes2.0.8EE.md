---
layout: default
group: release-notes
subgroup: Release Notes
title: Magento EE 2.0.8 Release Notes
menu_title: Magento EE 2.0.8 Release Notes
menu_order: 14
github_link: release-notes/ReleaseNotes2.0.8EE.md
---
*	TOC
{:toc}


##Magento Enterprise Edition 2.0.8
We are pleased to present Magento Enterprise Edition 2.0.8. This release includes several functional fixes.


Backward-incompatible changes are documented in <a href="{{ page.baseurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



###Fixed issues
{:.no_toc}



<!--- 53342 -->* The Magento application no longer duplicates URL keys during the creation of a configurable product.


<!--- 46014 -->* The Magento application now displays error messages on the page where the error occurred. Previously, error messages invoked by actions on the login page were not displayed until you left that page.

<!--- 51072 -->* The storefront now reflects changes to configurable swatches.  

<!--- 52284 -->* You can now insert more than two images using the WYSIWYG editor. <a href="https://github.com/magento/magento2/issues/4221" target="_blank">(GITHUB-4221)</a>




<!--- 51592 -->* The code compiler now works when the Magento application is not installed.



<!--- 51834 -->* Maestro credit cards can now pass validation on the application server side.


<!--- 50507 -->* You can now successfully rest the Product Attributes mass update Admin form.


<!--- 50193 -->* Layered Navigation now contains previously missing category filters.


<!--- 49877 -->* The callable argument type hint has been restored. <a href="https://github.com/magento/magento2/issues/2026" target="_blank">(GITHUB-2026)</a>

<!--- 47999 -->* Magento now registers added themes during production mode. <a href="https://github.com/magento/magento2/issues/2797" target="_blank">(GITHUB-2797)</a>


<!--- 50716 -->* The Admin Action Log archive is now formatted as expected.


<!--- 50504 -->* OnePageCheckoutTest fails when you select online shipping methods at checkout. <a href="https://github.com/magento/magento2/issues/4059" target="_blank"> (GITHUB-4059)</a>

<!--- 52437 -->* Magento now successfully processes password change requests from the Admin interface. Previously, when you clicked Save Account after changing your password, Magento would continue to display the " It's time to change your password" message.


<!--- 45651 -->* Magento displays simple products in groups when a product is set to out of stock. Previously, Magento did not correctly display simple products in their associated groups when a product was set to out of stock.

<!--- 45402 -->* Magento no longer caches pages that contain a layout that includes a non-cachable block. Previously, Magento would cache a page than contained a layout that included a non-cachable block.


<!--- 51079 -->* The Used in Product Listing option for attributes now works as expected.


<!--- 50409-->* The order of attributes for a configurable product now corresponds to the order as specified server-side. Previously, Magento ordered attributes in the order of their creation.


<!--- 50076 -->* Magento now supports GLOB_BRACE on non-GNU Linux systems. <a href="https://github.com/magento/magento2/issues/3490" target="_blank">(GITHUB-3490)</a> 

<!--- 49769 -->* You can now assign permissions to URL rewrites from Marketing > SEO and Search. <a href="https://github.com/magento/magento2/issues/3194" target="_blank">(GITHUB-3194)</a> 

<!--- 49716 -->* Magento no longer displays an incorrect price in the shopping cart when using multiple  shipping addresses.


<!--- 49212 -->* We've improved the implementation of the `Magento\Sales\Model\OrderRepository::getList()` function.  <a href="https://github.com/magento/magento2/issues/3018" target="_blank">(GITHUB-3018)</a> 

<!--- 48729 -->* Varnish now purges cache as expected after a scheduled update (that is, when indexes are set to UPDATE BY SCHEDULE).  


<!--- 48386 -->*  Scrolling now works as expected when using the Store View dropdown  menu in the Magento Admin. <a href="https://github.com/magento/magento2/issues/2896" target="_blank">(GITHUB-2896)</a> 

<!--- 52629 -->* You can now refresh statistics after deleting a product. Previously, after  deleting a product that been ordered, you could not refresh lifetime statistics. 

<!--- 50144 -->* Magento now displays ampersands (&) correctly in attribute options. 

<!--- 52512 -->* Newsletter subscriptions now work correctly when the Need to confirm option is set to yes during newsletter subscription configuration.

<!--- 50522 -->* The WYSIWYG editor no longer removes HTML5 tags.

<!--- 45608 -->* You can now successfully uninstall Magento_CustomerBalanceSampleData.


<!--- 53865-->* Payment methods now pass credit card data as expected in the  `additional_data` field. Previously, payment methods using this field did not complete the transactions successfully.  <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>


<!--- 51803-->* The Select All check box on the Cache Management page now works as expected. <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-3580)</a>, <a href="https://github.com/magento/magento2/issues/3580" target="_blank">(GITHUB-3580)</a>, <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-4080)</a>


<!--- 52923-->* Switching to Varnish no longer causes the Category menu to force HTTPS links. <a href="https://github.com/magento/magento2/issues/4540" target="_blank">(GITHUB-4540)</a>


###Known issue

<!--- 49556 -->The POST V1/shipment and other APIs that include a list of items might return an error if an item's quantity (`qty`) is specified before its ID (`order_item_id`, for example).

**Workaround:** Make sure to specify an item's ID before specifying quantity. 


###System requirements
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ee_install_20.md %}



###Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
