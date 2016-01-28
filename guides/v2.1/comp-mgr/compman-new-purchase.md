---
layout: default 
group: compman
subgroup: New Purchase
title: Step 3. Component Install
menu_title: Step 3. Component Install
menu_node: 
menu_order: 1
github_link: comp-mgr/compman-new-purchase.md
---

## Step 3. Component Install
When you're installing new purchases from Magento Marketplace, the page displays similar to the following:

<img src="{{ site.baseurl }}common/images/compman_new-purchases-step3install.png" width="500px">

If the list of purchases is correct, click **Install**.

Messages display in the Console Log as your new purchases are installed. Following is a sample of some of these messages:

	[2015-12-02 17:56:07 CST] Job "maintenance_mode {"enable":true}" has been started
	[2015-12-02 17:56:07 CST] Magento maintenance mode is enabled.
	[2015-12-02 17:56:07 CST] Job "maintenance_mode {"enable":true}" has successfully completed
	[2015-12-02 17:56:07 CST] Job "update {"components":{"magento/module-grouped-product-sample-data":{"name":"magento/module-grouped-product-sample-data","version":"100.0.2"},"magento/module-catalog-sample-data":{"name":"magento/module-catalog-sample-data","version":"100.0.2"},"magento/module-customer-sample-data":{"name":"magento/module-customer-sample-data","version":"100.0.2"},"magento/module-downloadable-sample-data":{"name":"magento/module-downloadable-sample-data","version":"100.0.2"},"magento/module-offline-shipping-sample-data":{"name":"magento/module-offline-shipping-sample-data","version":"100.0.2"},"magento/module-theme-sample-data": ... more

	{"name":"magento/module-gift-registry-sample-data","version":"100.0.2"},"magento/module-multiple-wishlist-sample-data":{"name":"magento/module-multiple-wishlist-sample-data","version":"100.0.2"}}}" has been started
	[2015-12-02 17:56:07 CST] Starting composer update...
	[2015-12-02 17:56:07 CST] ./composer.json has been updated

	[2015-12-02 17:58:43 CST] Loading composer repositories with package information
	Updating dependencies (including require-dev)
	- Installing magento/module-catalog-sample-data (100.0.2)
	Downloading: Connecting... Downloading: 0% Downloading: 10% Downloading: 20% Downloading: 30% Downloading: 35% Downloading: 45% Downloading: 50% Downloading: 70% Downloading: 75% Downloading: 100%

	- Installing magento/module-grouped-product-sample-data (100.0.2)
	: Connecting... Downloading: 0%  Downloading: 5% Downloading: 10% Downloading: 15% Downloading: 100%

	... more ...

	[2015-12-02 17:58:43 CST] Composer update completed successfully

	... more ...

When the installation is complete, a page similar to the following displays:

<img src="{{ site.baseurl }}common/images/cman_new-purchases_finish.png">

Click **Back to Setup Tool**.