<div markdown="1">

These instructions apply to Magento Community Edition (CE) and Magento Enterprise Edition (EE) users *only* if all of the following are true:

*	You have installed optional sample data
*	You're upgrading to Magento RC1 or RC2 from any earlier version using the command line

{% collapsible Click to expand/collapse content %}

To upgrade to Magento 2 RC1 or RC2 sample data using the command line:

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
8.	After dependencies have updated, reset [file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-system-perms.html).

	*	If you run the Magento application with one user account, enter the commands as that user.
	*	If you run the Magento application with two user accounts, you must enter the commands as `root`.
8.	Manually clear the following `var` directories:

		rm -rf var/cache/* var/page_cache/* var/generation/*
8.	Enter the following command from your Magento installation directory:

		php bin/magento setup:upgrade

{% endcollapsible %}