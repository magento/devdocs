<div markdown="1">

These instructions apply to Magento Community Edition (CE) and Magento Enterprise Edition (EE) users *only* if all of the following are true:

*	You have installed optional sample data
*	You're upgrading to Magento 2.1 (including a Release Candidate) from any earlier version using the command line

{% collapsible Click to expand/collapse content %}

To upgrade to Magento 2.1 sample data using the command line:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html).
2.	Change to the Magento installation directory.
3.	Back up your current `composer.json`:

		cp composer.json composer.json.bak
4.	Enter one of the following commands to upgrade the Magento software version to 2.1.0 (GA release):

		composer require <product> <version> --no-update
		composer require <sample data module-1>:<version> ... <sample data module-n>:<version> --no-update

	*	{{site.data.var.ce}}:

			composer require magento/product-community-edition 2.1.0 --no-update

			composer require magento/module-bundle-sample-data:100.1.0 magento/module-widget-sample-data:100.1.0 magento/module-theme-sample-data:100.1.0 magento/module-catalog-sample-data:100.1.0 magento/module-customer-sample-data:100.1.0 magento/module-cms-sample-data:100.1.0  magento/module-catalog-rule-sample-data:100.1.0 magento/module-sales-rule-sample-data:100.1.0 magento/module-review-sample-data:100.1.0 magento/module-tax-sample-data:100.1.0 magento/module-sales-sample-data:100.1.0 magento/module-grouped-product-sample-data:100.1.0 magento/module-downloadable-sample-data:100.1.0 magento/module-msrp-sample-data:100.1.0 magento/module-configurable-sample-data:100.1.0 magento/module-product-links-sample-data:100.1.0 magento/module-wishlist-sample-data:100.1.0 magento/module-swatches-sample-data:100.1.0 magento/sample-data-media:100.1.0 magento/module-offline-shipping-sample-data:100.1.0 --no-update 
	*	Magento EE:

			composer require magento/product-enterprise-edition 2.1.0 --no-update

			composer require magento/module-bundle-sample-data:100.1.0 magento/module-widget-sample-data:100.1.0 magento/module-theme-sample-data:100.1.0 magento/module-catalog-sample-data:100.1.0 magento/module-customer-sample-data:100.1.0 magento/module-cms-sample-data:100.1.0  magento/module-catalog-rule-sample-data:100.1.0 magento/module-sales-rule-sample-data:100.1.0 magento/module-review-sample-data:100.1.0 magento/module-tax-sample-data:100.1.0 magento/module-sales-sample-data:100.1.0 magento/module-grouped-product-sample-data:100.1.0 magento/module-downloadable-sample-data:100.1.0 magento/module-msrp-sample-data:100.1.0 magento/module-configurable-sample-data:100.1.0 magento/module-product-links-sample-data:100.1.0 magento/module-wishlist-sample-data:100.1.0 magento/module-swatches-sample-data:100.1.0 magento/sample-data-media:100.1.0 magento/module-offline-shipping-sample-data:100.1.0 magento/module-gift-card-sample-data:100.1.0 magento/module-customer-balance-sample-data:100.1.0 magento/module-target-rule-sample-data:100.1.0 magento/module-gift-registry-sample-data:100.1.0 magento/module-multiple-wishlist-sample-data:100.1.0 --no-update

	<div class="bs-callout bs-callout-info" id="info">
  		<p>To upgrade to a Release Candidate, append <code>-rc&lt;x></code> to the version of each module. For example, <code>-rc3</code>.</p>
	</div>

5.	Update dependencies:
	
		composer update
6.	If prompted, enter your [authentication keys]({{page.baseurl}}/install-gde/prereq/connect-auth.html).
7.	Wait for dependencies to update.

### Finish your upgrade
After you've reset file system permissions:

1.	If you haven't done so already, log in to your Magento server as, or switch to, the Magento file system owner.
2.	Change to your Magento installation directory.
2.	Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

	A sample command follows:

		rm -rf var/cache/* var/page_cache/* var/generation/*
3.	Enter the following command from your Magento installation directory:

		php bin/magento setup:upgrade

{% include install/sampledata/file-sys-perms-digest.md %}

{% endcollapsible %}


