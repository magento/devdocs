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
We are pleased to present Magento Enterprise Edition 2.0.8. This release includes  several functional fixes.


Backward-incompatible changes are documented in <a href="{{ site.gdeurl }}release-notes/changes_2.0.html" target="_blank">Magento 2.0 Backward Incompatible Changes</a>.



###Fixed issues
{:.no_toc}

<!--- 51440 -->* Fatal errors no longer occur when running CLI commands after compilation in some regression environments.

<!--- 52612 -->* CLI is affected by the permissions configuration setting in server config.

 
<!--- 51072 -->* The storeview now reflects changes to the swatch attribute's property.  

<!--- 53342 -->* Magento no longer duplicates URL keys during the creation of a configurable product.


<!--- 46014 -->* Magento now displays error messages on the page where the error occurred. Previously, error messages invoked by actions on the login page were not displayed until you left that page. 

<!--- 51072 -->* The storefront now reflects changes to the swatch attribute's property.  

<!--- 52284 -->* You can now insert more than two images using the WYSIWYG editor. <a href="https://github.com/magento/magento2/issues/4221" target="_blank">(GITHUB-4221)</a>




<!--- 51592 -->* Single tenant compiler now works when Magento is not installed.



<!--- 51834 -->* Maestro credit cards can now pass validation on the application server side.


<!--- 50507 -->* You can now successfully rest the Product Attributes mass update Admin form.


<!--- 50193 -->* Layered Navigation now contains previously missing category filters.



<!--- 52284 -->* You can now insert more than two images using the WYSIWYG editor. <a href="https://github.com/magento/magento2/issues/4221" target="_blank">(GITHUB-4221)</a>



<!--- 52436 -->* Magento now displays categories that contain children categories. <a href="https://github.com/magento/magento2/issues/2121" target="_blank">(GITHUB-2121)</a>

<!--- 49877 -->* Don't omit the "callable" argument type hint. <a href="https://github.com/magento/magento2/issues/2026" target="_blank">(GITHUB-2026)</a>

<!--- 47999 -->* Magento now registers added themes during production mode. <a href="https://github.com/magento/magento2/issues/2797" target="_blank">(GITHUB-2797)</a>


<!--- 50716 -->* The Admin Action Log archive is now formatted as expected. 


<!--- 50504 -->* OnePageCheckoutTest fails when you select online shipping methods at checkout. <a href="https://github.com/magento/magento2/issues/4059" target="_blank"> (GITHUB-4059)</a> (50504) 

<!--- 52437 -->* Magento now successfully processes password change requests from the Amin interface. Previously, when you clicked Save Account after changing your password, Magento would continue to display the " It's time to change your password" message. (52437)


<!--- 45651 -->* Magento displays simple products in groups when set to out of stock. Previously, Magento did not correctly display simple products in their associated groups when set to out of stock.  (45651)

<!--- 45402 -->* Magento no longer caches pages that contain a layout that includes a non-cacheable block. Previously, Magento would cache a page than contained a layout that included a non-cacheable block. (45402)


<!--- 51079 -->* The Used in Product Listing option for attributes now works as expected. (51079)


<!--- 50409-->* The order of attributes for a configurable product now corresponds to the order as specified server-side. Previously, Magento ordered attributes in the order of their creation. (50409)


<!--- 50076 -->* Magento now supports GLOB_BRACE on non-GNU Linux systems. <a href="https://github.com/magento/magento2/issues/3490" target="_blank">(GITHUB-3490)</a> (50076)


<!--- 49769 -->* You can now assign permissions to URL rewrites from Marketing > SEO and Search. <a href="https://github.com/magento/magento2/issues/3194" target="_blank">(GITHUB-3194)</a>  (49769)

<!--- 49716 -->* Magento no longer displays incorrect price in the shopping cart when using multiple  shipping addresses. (49716)


<!--- 49212 -->* We've improved the implementation of the `Magento\Sales\Model\OrderRepository::getList()` function.  <a href="https://github.com/magento/magento2/issues/3018"" target="_blank">(GITHUB-3018)</a> (49212)


<!--- 48729 -->* You can now refresh statistics after deleting a product.  (48729)


<!--- 48386 -->*  Scrolling now works as expected when using the Store View dropdown  menu in the Admin interface. <a href="https://github.com/magento/magento2/issues/2896" target="_blank">(GITHUB-2896)</a> (48386)

<!--- 52629 -->* You can now refresh statistics after deleting a product. Previously, after  deleting a product that been ordered, you could not refresh lifetime statistics. (52629)

<!--- 50144 -->* Magento now displays ampersands (&) correctly in attribute options. (50144)

<!--- 52512 -->* Newsletter subscriptions now work correctly when the Need to confirm option is set to yes during newsletter subscription configuration.  (52512)

<!--- 50522 -->* The WYSIWYG editor no longer removes HTML5 tags.

<!--- 45608 -->* You can now successfully uninstall the Magento_CustomerBalanceSampleData module.


<!--- 53865-->* The CC model now assigns cc data that is passed in the `additional_data` field.   <a href="https://github.com/magento/magento2/issues/4741" target="_blank">(GITHUB-4741)</a>


<!--- 51803-->* The Select All check box on the Cache Management page now works as expected. <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-3580)</a>, <a href="https://github.com/magento/magento2/issues/3580" target="_blank">(GITHUB-3580)</a>, <a href="https://github.com/magento/magento2/issues/4080" target="_blank">(GITHUB-4080)</a>


<!--- 52923-->* Switching to Varnish no longer causes the Category menu to force HTTPS links. <a href="https://github.com/magento/magento2/issues/4540" target="_blank">(GITHUB-4540)</a> 


###Known issue

<!--- 49556 -->The POST V1/shipment and other APIs that include a list of items might return an error if an item's quantity (`qty`) is specified before its ID (`order_item_id`, for example). 

**Workaround:** Make sure to specify an item's ID before specifying quantity. (49556)


###System requirements
Our technology stack is built on PHP and MySQL. Magento 2.0.1 and later supports PHP 5.5, 5.6, 7.0.2, and MySQL 5.6. For more information, see 
<a href="{{ site.gdeurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


###Installation instructions

####New installations
New users can now complete a full installation of Magento Enterprise Edition 2.0.8 from an archive file.

#####Download a new installation
1. Go to the <a href="https://www.magento.com/" target="_blank">Magento</a> website, and click **My Account**. Then, log in to your account. 
2. In the panel on the left, choose **Downloads**. Choose **Magento Enterprise Edition 2.x**, and do the following:

	a.	Click **Magento Enterprise Edition 2.x Release**.

	b.	In the list, choose **Version 2.0.8**.

	c.	Click **Download**.

3.	Follow the instructions to upgrade and verify your installation. If you need help, go to the **Support** tab of your Magento account, and **Open a Ticket**.


####Upgrade existing installations

This section discusses how to upgrade to Magento EE 2.0.8.


#####Upgrade using the Setup Wizard
Use the instructions in [Start System Upgrade]({{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html). When prompted to choose a version, choose 2.0.8.

#####Upgrade an existing installation from the GitHub repository
Developers who contribute to the EE codebase can <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">upgrade manually</a> from the Magento EE GitHub repository.

1.	Go to the <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html" target="_blank">Contributing Developers</a> page.

2.	Follow the instructions to pull the updates from the repository and update using Composer.

#####Upgrade using the command line
To upgrade to Magento EE 2.0.8 using the command line:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to the directory in which you installed the Magento software.

	For example, `cd /var/www/html/magento2`
2.	Enter the following command to disable the cache:

		php bin/magento cache:disable
2.	Enter the following commands in the order shown:

		composer require <product> 2.0.8 --no-update
		composer update

	

	To upgrade to Magento EE 2.0.8, enter:

		composer require magento/product-enterprise-edition 2.0.8 --no-update
		composer update
	
3.	If prompted, enter your [authentication keys]({{ site.gdeurl }}comp-mgr/prereq/prereq_auth-token.html).
4. Update the database schema and data:

		php bin/magento setup:upgrade
5.	Enter the following command to enable the cache:

		magento cache:enable


###Migration toolkits
The <a href="{{ site.gdeurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ site.gdeurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.








