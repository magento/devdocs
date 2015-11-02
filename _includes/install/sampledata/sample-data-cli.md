<div markdown="1">

<h2 id="install-sample-cli">Install sample data using the command line</h2>
This topic discusses how to install optional Magento 2 sample data using the command line. You can use this method either before or after you install the Magento software.

First, you must get the Magento software in one of the ways discussed in TBD.

<h2 id="install sample-cli-first">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="install-sample-cli-run">Install sample data command</h2>
To install sample data using the command line, enter the following command as the Magento file system owner:

	php <your Magento install dir>/bin/magento sampledata:deploy [module-list]

where `[module-list]` is an optional space-separated list of sample data modules to install. Omit this parameter to install all sample data modules.

The complete list of modules follows:

*	magento/module-bundle-sample-data
*	magento/module-catalog-rule-sample-data
*	magento/module-catalog-sample-data
*	magento/module-cms-sample-data
*	magento/module-configurable-sample-data
*	magento/module-customer-balance-sample-data
*	magento/module-customer-sample-data
*	magento/module-downloadable-sample-data
*	magento/module-gift-card-sample-data
*	magento/module-gift-registry-sample-data
*	magento/module-grouped-product-sample-data
*	magento/module-msrp-sample-data
*	magento/module-multiple-wishlist-sample-data
*	magento/module-offline-shipping-sample-data
*	magento/module-product-links-sample-data
*	magento/module-review-sample-data
*	magento/module-sales-rule-sample-data
*	magento/module-sales-sample-data
*	magento/module-sample-data
*	magento/module-swatches-sample-data
*	magento/module-target-rule-sample-data
*	magento/module-tax-sample-data
*	magento/module-theme-sample-data
*	magento/module-widget-sample-data
*	magento/module-wishlist-sample-data
*	magento/sample-data
*	magento/sample-data-media

Wait while the command completes.

