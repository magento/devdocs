<div markdown="1">

These instructions apply to you *only* if all of the following are true:

*	You're currently using a version of Magento *earlier than* 2.0.7
*	You have installed optional sample data

To upgrade to Magento 2 RC1 with sample data, you must do all of the following:

*	Apply file system permissions and ownership
*	Require the `2.1.0-rc1` version of the Magento software and the `100.1.0-rc1` version of all sample data modules in `composer.json`

### Apply file system permissions and ownership {#rc1-samp-ownership}
Before you update Magento and sample data, you must apply current file system permission and ownership as the `root` user. Failure to do so will cause your upgrade to fail.

For more information about file system ownership and permissions since the Magento 2.0.6 release, see [Overview of ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html).

#### One-user ownership and permissions
If you run the Magento application as one user (which is typical of shared hosting environments), change file system permissions and ownership as follows:

	cd <your Magento install dir>
	find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
	find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} \;
	chmod u+x bin/magento

To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2`:

	cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var vendor pub/static pub/media app/etc -type d -exec chmod g+w {} \; && chmod u+x bin/magento

#### Two-user ownership and permissions
If you run the Magento application with two users, enter the following commands as the `root` user:

	cd <your Magento install dir>
	find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
	find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
	chown -R :<web server group> .
	chmod u+x bin/magento

To optionally enter all commands on one line, enter the following assuming Magento is installed in `/var/www/html/magento2` and the web server group name is 'apache':

	cd /var/www/html/magento2 && find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \; && chown -R :apache . && chmod u+x bin/magento

### Upgrade the Magento application and sample data
To upgrade to Magento 2 RC1 sample data using the command line:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/file-system-perms-over.html).
2.	Change to the Magento installation directory.
3.	Back up your current `composer.json`:

		cp composer.json composer.json.bak
4.	Enter one of the following commands to upgrade the Magento software version:

		composer require <product> <version> --no-update

	*	Magento CE:

			composer require magento/product-community-edition 2.1.0-rc1 --no-update
	*	Magento EE:

			composer require magento/product-enterprise-edition 2.1.0-rc1 --no-update
4.	Enter one of the following commands to update `composer.json` to specify the correct version of all RC1 sample data modules:

	*	Magento CE:

			composer require magento/module-bundle-sample-data:100.1.0-rc1 magento/module-widget-sample-data:100.1.0-rc1 magento/module-theme-sample-data:100.1.0-rc1 magento/module-catalog-sample-data:100.1.0-rc1 magento/module-customer-sample-data:100.1.0-rc1 magento/module-cms-sample-data:100.1.0-rc1  magento/module-catalog-rule-sample-data:100.1.0-rc1 magento/module-sales-rule-sample-data:100.1.0-rc1 magento/module-review-sample-data:100.1.0-rc1 magento/module-tax-sample-data:100.1.0-rc1 magento/module-sales-sample-data:100.1.0-rc1 magento/module-grouped-product-sample-data:100.1.0-rc1 magento/module-downloadable-sample-data:100.1.0-rc1 magento/module-msrp-sample-data:100.1.0-rc1 magento/module-configurable-sample-data:100.1.0-rc1 magento/module-product-links-sample-data:100.1.0-rc1 magento/module-wishlist-sample-data:100.1.0-rc1 magento/module-swatches-sample-data:100.1.0-rc1 magento/sample-data-media:100.1.0-rc1 magento/module-offline-shipping-sample-data:100.1.0-rc1 --no-update 

	*	Magento EE:

			composer require magento/module-bundle-sample-data:100.1.0-rc1 magento/module-widget-sample-data:100.1.0-rc1 magento/module-theme-sample-data:100.1.0-rc1 magento/module-catalog-sample-data:100.1.0-rc1 magento/module-customer-sample-data:100.1.0-rc1 magento/module-cms-sample-data:100.1.0-rc1  magento/module-catalog-rule-sample-data:100.1.0-rc1 magento/module-sales-rule-sample-data:100.1.0-rc1 magento/module-review-sample-data:100.1.0-rc1 magento/module-tax-sample-data:100.1.0-rc1 magento/module-sales-sample-data:100.1.0-rc1 magento/module-grouped-product-sample-data:100.1.0-rc1 magento/module-downloadable-sample-data:100.1.0-rc1 magento/module-msrp-sample-data:100.1.0-rc1 magento/module-configurable-sample-data:100.1.0-rc1 magento/module-product-links-sample-data:100.1.0-rc1 magento/module-wishlist-sample-data:100.1.0-rc1 magento/module-swatches-sample-data:100.1.0-rc1 magento/sample-data-media:100.1.0-rc1 magento/module-offline-shipping-sample-data:100.1.0-rc1 magento/module-gift-card-sample-data:100.1.0-rc1 magento/module-customer-balance-sample-data:100.1.0-rc1 magento/module-target-rule-sample-data:100.1.0-rc1 magento/module-gift-registry-sample-data:100.1.0-rc1 magento/module-multiple-wishlist-sample-data:100.1.0-rc1 --no-update
5.	Update dependencies:
	
		composer update
6.	If prompted, enter your [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html).
7.	Wait for dependencies to update.
8.	After dependencies have updated, enter the following command from your Magento installation directory:

		php bin/magento setup:upgrade
 