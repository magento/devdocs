<div markdown="1">

This topic discusses how to upgrade to Magento 2.1 (including a Release Candidate) using the command line.

These instructions apply to Magento Community Edition (CE) and Magento Enterprise Edition (EE) users *only* if all of the following are true:

*	You installed optional sample data
*	You're upgrading to Magento 2.1 (including a Release Candidate) using the command line

#### Put your store in maintenance mode {#upgrade-cli-maint}

{% collapsible To put your store in maintenance mode for the upgrade: %}
To prevent access to your store while it's being upgraded, put your store in maintenance mode.

<div class="bs-callout bs-callout-info" id="info">
  	<p>You can optionally create a <a href="{{ site.gdeurl }}comp-mgr/trouble/cman/maint-mode.html">custom maintenance mode page</a>.</p>
</div>

To enable maintenance mode:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Enter the following command:

		php <your Magento install dir>/bin/magento magento maintenance:enable

	For additional options, see [Enable or disable maintenance mode]({{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-maint.html).

{% endcollapsible %}

#### Upgrade with sample data

{% collapsible To upgrade to Magento 2.1 with sample data: %}

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/file-system-perms-over.html).
2.	Change to the Magento installation directory.
3.	Back up your current `composer.json`:

		cp composer.json composer.json.bak
4.	Enter one of the following commands to upgrade the Magento software version:

		composer require <product> <version> --no-update
		composer require <sample data module-1>:<version> ... <sample data module-n>:<version> --no-update

	*	To upgrade Magento CE to 2.1 RC3:

			composer require magento/product-community-edition 2.1.0-rc3 --no-update

			composer require magento/module-bundle-sample-data:100.1.0-rc3 magento/module-widget-sample-data:100.1.0-rc3 magento/module-theme-sample-data:100.1.0-rc3 magento/module-catalog-sample-data:100.1.0-rc3 magento/module-customer-sample-data:100.1.0-rc3 magento/module-cms-sample-data:100.1.0-rc3  magento/module-catalog-rule-sample-data:100.1.0-rc3 magento/module-sales-rule-sample-data:100.1.0-rc3 magento/module-review-sample-data:100.1.0-rc3 magento/module-tax-sample-data:100.1.0-rc3 magento/module-sales-sample-data:100.1.0-rc3 magento/module-grouped-product-sample-data:100.1.0-rc3 magento/module-downloadable-sample-data:100.1.0-rc3 magento/module-msrp-sample-data:100.1.0-rc3 magento/module-configurable-sample-data:100.1.0-rc3 magento/module-product-links-sample-data:100.1.0-rc3 magento/module-wishlist-sample-data:100.1.0-rc3 magento/module-swatches-sample-data:100.1.0-rc3 magento/sample-data-media:100.1.0-rc3 magento/module-offline-shipping-sample-data:100.1.0-rc3 --no-update 
	*	To Magento EE to 2.1 RC3:

			composer require magento/product-enterprise-edition 2.1.0-rc3 --no-update

			composer require magento/module-bundle-sample-data:100.1.0-rc3 magento/module-widget-sample-data:100.1.0-rc3 magento/module-theme-sample-data:100.1.0-rc3 magento/module-catalog-sample-data:100.1.0-rc3 magento/module-customer-sample-data:100.1.0-rc3 magento/module-cms-sample-data:100.1.0-rc3  magento/module-catalog-rule-sample-data:100.1.0-rc3 magento/module-sales-rule-sample-data:100.1.0-rc3 magento/module-review-sample-data:100.1.0-rc3 magento/module-tax-sample-data:100.1.0-rc3 magento/module-sales-sample-data:100.1.0-rc3 magento/module-grouped-product-sample-data:100.1.0-rc3 magento/module-downloadable-sample-data:100.1.0-rc3 magento/module-msrp-sample-data:100.1.0-rc3 magento/module-configurable-sample-data:100.1.0-rc3 magento/module-product-links-sample-data:100.1.0-rc3 magento/module-wishlist-sample-data:100.1.0-rc3 magento/module-swatches-sample-data:100.1.0-rc3 magento/sample-data-media:100.1.0-rc3 magento/module-offline-shipping-sample-data:100.1.0-rc3 magento/module-gift-card-sample-data:100.1.0-rc3 magento/module-customer-balance-sample-data:100.1.0-rc3 magento/module-target-rule-sample-data:100.1.0-rc3 magento/module-gift-registry-sample-data:100.1.0-rc3 magento/module-multiple-wishlist-sample-data:100.1.0-rc3 --no-update

5.	Update dependencies:
	
		composer update
6.	If prompted, enter your [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html).
7.	Wait for dependencies to update.

#### Finish your upgrade
After you've reset file system permissions:

1.	If you haven't done so already, log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to your Magento installation directory.
2.	Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

	A sample command follows:

		rm -rf var/cache/* var/page_cache/* var/generation/*
3.	Enter the following command from your Magento installation directory:

		php bin/magento setup:upgrade

{% include install/sampledata/file-sys-perms-digest.md %}

#### Disable maintenance mode {#upgrade-cli-maint}

Enter the following command:

	php <your Magento install dir>/bin/magento magento maintenance:disable

{% endcollapsible %}