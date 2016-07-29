---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Step 3. Component Install
menu_title: Component Install
menu_node: 
menu_order: 9
level3_menu_node: level3child
level3_subgroup: step3-ext
version: 2.2
github_link: comp-mgr/extens-man/extensman-new-purchase.md
---

## Step 3. Component Install
When you're installing new purchases from Magento Marketplace, the page displays similar to the following:

<img src="{{ site.baseurl }}common/images/extensman_new-purchases-step3install.png" width="500px">

If the list of purchases is correct, click **Install**.

Messages display in the Console Log as your new purchases are installed. Following is a sample of some of these messages:

{% highlight xml %}
[2016-07-28 15:18:03 UTC] Job "setup:maintenance:enable []" has started
Enabled maintenance mode

[2016-07-28 15:18:03 UTC] Job "setup:maintenance:enable []" has been successfully completed
[2016-07-28 15:18:03 UTC] Job "setup:cache:disable []" has started
Changed cache status:
config: 1 -> 0
layout: 1 -> 0
block_html: 1 -> 0
collections: 1 -> 0
reflection: 1 -> 0
db_ddl: 1 -> 0
eav: 1 -> 0
customer_notification: 1 -> 0
full_page: 1 -> 0
config_integration: 1 -> 0
config_integration_api: 1 -> 0
translate: 1 -> 0
config_webservice: 1 -> 0

[2016-07-28 15:18:03 UTC] Job "setup:cache:disable []" has been successfully completed
[2016-07-28 10:19:03 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.3"},"magento/module-catalog-rule-sample-data":{"name":"magento/module-catalog-rule-sample-data","version":"100.1.0-rc3"},"magento/module-catalog-sample-data":{"name":"magento/module-catalog-sample-data","version":"100.1.0-rc3"},"magento/module-cms-sample-data":{"name":"magento/module-cms-sample-data","version":"100.1.0-rc3"}}}" has been started
[2016-07-28 10:19:03 CDT] Starting composer update...
[2016-07-28 10:19:04 CDT] ./composer.json has been updated

[2016-07-28 10:20:03 CDT] Update is already in progress.
[2016-07-28 10:21:03 CDT] Update is already in progress.
[2016-07-28 10:21:32 CDT] Loading composer repositories with package information
Updating dependencies (including require-dev)
- Installing addshoppers/magento2-connector (2.0.1)
Downloading: Connecting... Downloading: 0% Downloading: 30% Downloading: 100%

- Installing fooman/printorderpdf-m2 (2.0.3)
Downloading: Connecting... Downloading: 0%  Downloading: 50% Downloading: 100%

- Installing magento/module-catalog-rule-sample-data (100.1.0-rc3)
Downloading: Connecting... Downloading: 0%  Downloading: 100%

- Installing magento/module-catalog-sample-data (100.1.0-rc3)
Downloading: Connecting... Downloading: 0%  Downloading: 100%

- Installing magento/sample-data-media (100.1.0)
Downloading: Connecting... Downloading: 0%  Downloading: 5% Downloading: 10% Downloading: 15% Downloading: 20% Downloading: 25% Downloading: 30% Downloading: 35% Downloading: 40% Downloading: 45% Downloading: 50% Downloading: 55% Downloading: 60% Downloading: 65% Downloading: 70% Downloading: 75% Downloading: 80% Downloading: 85% Downloading: 90% Downloading: 95% Downloading: 100% Downloading: 100%

- Installing magento/module-theme-sample-data (100.1.0)
Downloading: Connecting... Downloading: 0%  Downloading: 100%

- Installing magento/module-cms-sample-data (100.1.0-rc3)
Downloading: Connecting... Downloading: 0%  Downloading: 30% Downloading: 100%

Package fabpot/php-cs-fixer is abandoned, you should avoid using it. Use friendsofphp/php-cs-fixer instead.
Writing lock file
Generating autoload files

[2016-07-28 10:21:32 CDT] Composer update completed successfully
[2016-07-28 10:21:32 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.3"},"magento/module-catalog-rule-sample-data":{"name":"magento/module-catalog-rule-sample-data","version":"100.1.0-rc3"},"magento/module-catalog-sample-data":{"name":"magento/module-catalog-sample-data","version":"100.1.0-rc3"},"magento/module-cms-sample-data":{"name":"magento/module-cms-sample-data","version":"100.1.0-rc3"}}}" has successfully completed

[2016-07-28 15:22:16 UTC] Job "setup:cache:enable ["config layout block_html collections reflection db_ddl eav customer_notification full_page config_integration config_integration_api translate config_webservice"]" has started
Changed cache status:
config: 0 -> 1
layout: 0 -> 1
block_html: 0 -> 1
collections: 0 -> 1
reflection: 0 -> 1
db_ddl: 0 -> 1
eav: 0 -> 1
customer_notification: 0 -> 1
full_page: 0 -> 1
config_integration: 0 -> 1
config_integration_api: 0 -> 1
translate: 0 -> 1
config_webservice: 0 -> 1
Cleaned cache types:
config
layout
block_html
collections
reflection
db_ddl
eav
customer_notification
full_page
config_integration
config_integration_api
translate
config_webservice

[2016-07-28 15:22:17 UTC] Job "setup:cache:enable ["config layout block_html collections reflection db_ddl eav customer_notification full_page config_integration config_integration_api translate config_webservice"]" has been successfully completed
[2016-07-28 15:22:17 UTC] Job "setup:upgrade []" has started
Cache cleared successfully
File system cleanup:
/var/www/html/magento2/var/generation/Composer
/var/www/html/magento2/var/generation/Magento
/var/www/html/magento2/var/generation/Symfony
The directory '/var/www/html/magento2/var/di/' doesn't exist - skipping cleanup
/var/www/html/magento2/pub/static/_requirejs
/var/www/html/magento2/pub/static/adminhtml
/var/www/html/magento2/var/view_preprocessed/source
Updating modules:
Schema creation/updates:
Module 'Magento_Store':
Module 'Magento_Directory':
Module 'Magento_Theme':
Module 'Magento_AdvancedPricingImportExport':
Module 'Magento_Backend':
Module 'Magento_Eav':
Module 'Magento_Customer':
Module 'Magento_Backup':
Module 'Magento_AdminNotification':
Module 'Magento_Indexer':
Module 'Magento_BundleImportExport':
Module 'Magento_CacheInvalidate':
Module 'Magento_Cms':
Module 'Magento_Config':
Module 'Magento_CatalogImportExport':
Module 'Magento_Catalog':
Module 'Magento_Rule':
Module 'Magento_Msrp':
Module 'Magento_Quote':
Module 'Magento_Search':
Module 'Magento_SalesSequence':
Module 'Magento_CatalogUrlRewrite':
Module 'Magento_Widget':
Module 'Magento_Payment':
Module 'Magento_CheckoutAgreements':
Module 'Magento_CatalogInventory':
Module 'Magento_SampleData':
Module 'Magento_CmsUrlRewrite':
Module 'Magento_Sales':
Module 'Magento_ConfigurableImportExport':
Module 'Magento_Checkout':
Module 'Magento_Contact':
Module 'Magento_Cookie':
Module 'Magento_Cron':
Module 'Magento_CurrencySymbol':
Module 'Fooman_PrintOrderPdf':
Module 'Magento_CustomerImportExport':
Module 'Magento_Deploy':
Module 'Magento_Developer':
Module 'Magento_Dhl':
Module 'Magento_Authorization':
Module 'Magento_Downloadable':
Module 'Magento_ImportExport':
Module 'Magento_Authorizenet':
Module 'Magento_Email':
Module 'Magento_User':
Module 'Magento_Fedex':
Module 'Magento_GiftMessage':
Module 'Magento_GoogleAdwords':
Module 'Magento_GoogleAnalytics':
Module 'Magento_Ui':
Module 'Magento_GroupedImportExport':
Module 'Magento_GroupedProduct':
Module 'Magento_DownloadableImportExport':
Module 'Magento_Bundle':
Module 'Magento_Security':
Module 'Magento_LayeredNavigation':
Module 'Magento_Marketplace':
Module 'Magento_MediaStorage':
Module 'Magento_CatalogRule':
Module 'Magento_Multishipping':
Module 'Magento_ConfigurableProduct':
Module 'Magento_Newsletter':
Module 'Magento_OfflinePayments':
Module 'Magento_SalesRule':
Module 'Magento_PageCache':
Module 'Magento_CatalogRuleConfigurable':
Module 'Magento_Vault':
Module 'Magento_Persistent':
Module 'Magento_ProductAlert':
Module 'Magento_ProductVideo':
Module 'Magento_Paypal':
Module 'Magento_Reports':
Module 'Magento_RequireJs':
Module 'Magento_Review':
Module 'Magento_Rss':
Module 'Magento_CatalogRuleSampleData':
Module 'Magento_CatalogSearch':
Module 'Magento_OfflineShipping':
Module 'Magento_Captcha':
Module 'Magento_Tax':
Module 'Magento_Weee':
Module 'Magento_Integration':
Module 'Magento_SendFriend':
Module 'Magento_Shipping':
Module 'Magento_Sitemap':
Module 'Addshoppers_Connector':
Module 'Magento_Swagger':
Module 'Magento_Swatches':
Module 'Magento_SwatchesLayeredNavigation':
Module 'Magento_ThemeSampleData':
Module 'Magento_TaxImportExport':
Module 'Magento_NewRelicReporting':
Module 'Magento_CatalogSampleData':
Module 'Magento_Translation':
Module 'Magento_GoogleOptimizer':
Module 'Magento_Ups':
Module 'Magento_UrlRewrite':
Module 'Magento_EncryptionKey':
Module 'Magento_Usps':
Module 'Magento_Variable':
Module 'Magento_Braintree':
Module 'Magento_Version':
Module 'Magento_Webapi':
Module 'Magento_WebapiSecurity':
Module 'Magento_CmsSampleData':
Module 'Magento_CatalogWidget':
Module 'Magento_Wishlist':
Schema post-updates:
Module 'Magento_Store':
Module 'Magento_Directory':
Module 'Magento_Theme':
Module 'Magento_AdvancedPricingImportExport':
Module 'Magento_Backend':
Module 'Magento_Eav':
Module 'Magento_Customer':
Module 'Magento_Backup':
Module 'Magento_AdminNotification':
Module 'Magento_Indexer':
Running schema recurring...
Module 'Magento_BundleImportExport':
Module 'Magento_CacheInvalidate':
Module 'Magento_Cms':
Module 'Magento_Config':
Module 'Magento_CatalogImportExport':
Module 'Magento_Catalog':
Running schema recurring...
Module 'Magento_Rule':
Module 'Magento_Msrp':
Module 'Magento_Quote':
Running schema recurring...
Module 'Magento_Search':
Module 'Magento_SalesSequence':
Module 'Magento_CatalogUrlRewrite':
Running schema recurring...
Module 'Magento_Widget':
Module 'Magento_Payment':
Module 'Magento_CheckoutAgreements':
Module 'Magento_CatalogInventory':
Running schema recurring...
Module 'Magento_SampleData':
Module 'Magento_CmsUrlRewrite':
Module 'Magento_Sales':
Module 'Magento_ConfigurableImportExport':
Module 'Magento_Checkout':
Module 'Magento_Contact':
Module 'Magento_Cookie':
Module 'Magento_Cron':
Module 'Magento_CurrencySymbol':
Module 'Fooman_PrintOrderPdf':
Module 'Magento_CustomerImportExport':
Module 'Magento_Deploy':
Module 'Magento_Developer':
Module 'Magento_Dhl':
Module 'Magento_Authorization':
Module 'Magento_Downloadable':
Module 'Magento_ImportExport':
Module 'Magento_Authorizenet':
Module 'Magento_Email':
Module 'Magento_User':
Module 'Magento_Fedex':
Module 'Magento_GiftMessage':
Module 'Magento_GoogleAdwords':
Module 'Magento_GoogleAnalytics':
Module 'Magento_Ui':
Module 'Magento_GroupedImportExport':
Module 'Magento_GroupedProduct':
Module 'Magento_DownloadableImportExport':
Module 'Magento_Bundle':
Running schema recurring...
Module 'Magento_Security':
Module 'Magento_LayeredNavigation':
Module 'Magento_Marketplace':
Module 'Magento_MediaStorage':
Module 'Magento_CatalogRule':
Module 'Magento_Multishipping':
Module 'Magento_ConfigurableProduct':
Running schema recurring...
Module 'Magento_Newsletter':
Module 'Magento_OfflinePayments':
Module 'Magento_SalesRule':
Module 'Magento_PageCache':
Module 'Magento_CatalogRuleConfigurable':
Module 'Magento_Vault':
Module 'Magento_Persistent':
Module 'Magento_ProductAlert':
Running schema recurring...
Module 'Magento_ProductVideo':
Module 'Magento_Paypal':
Module 'Magento_Reports':
Running schema recurring...
Module 'Magento_RequireJs':
Module 'Magento_Review':
Module 'Magento_Rss':
Module 'Magento_CatalogRuleSampleData':
Module 'Magento_CatalogSearch':
Module 'Magento_OfflineShipping':
Module 'Magento_Captcha':
Module 'Magento_Tax':
Module 'Magento_Weee':
Running schema recurring...
Module 'Magento_Integration':
Running schema recurring...
Module 'Magento_SendFriend':
Module 'Magento_Shipping':
Module 'Magento_Sitemap':
Module 'Addshoppers_Connector':
Module 'Magento_Swagger':
Module 'Magento_Swatches':
Module 'Magento_SwatchesLayeredNavigation':
Module 'Magento_ThemeSampleData':
Module 'Magento_TaxImportExport':
Module 'Magento_NewRelicReporting':
Module 'Magento_CatalogSampleData':
Module 'Magento_Translation':
Module 'Magento_GoogleOptimizer':
Module 'Magento_Ups':
Module 'Magento_UrlRewrite':
Module 'Magento_EncryptionKey':
Module 'Magento_Usps':
Module 'Magento_Variable':
Module 'Magento_Braintree':
Module 'Magento_Version':
Module 'Magento_Webapi':
Module 'Magento_WebapiSecurity':
Module 'Magento_CmsSampleData':
Module 'Magento_CatalogWidget':
Module 'Magento_Wishlist':
Running schema recurring...
Data install/update:
Module 'Magento_Store':
Module 'Magento_Directory':
Module 'Magento_Theme':
Module 'Magento_AdvancedPricingImportExport':
Module 'Magento_Backend':
Module 'Magento_Eav':
Module 'Magento_Customer':
Module 'Magento_Backup':
Module 'Magento_AdminNotification':
Module 'Magento_Indexer':
Module 'Magento_BundleImportExport':
Module 'Magento_CacheInvalidate':
Module 'Magento_Cms':
Module 'Magento_Config':
Module 'Magento_CatalogImportExport':
Module 'Magento_Catalog':
Module 'Magento_Rule':
Module 'Magento_Msrp':
Module 'Magento_Quote':
Module 'Magento_Search':
Module 'Magento_SalesSequence':
Module 'Magento_CatalogUrlRewrite':
Module 'Magento_Widget':
Module 'Magento_Payment':
Module 'Magento_CheckoutAgreements':
Module 'Magento_CatalogInventory':
Module 'Magento_SampleData':
Module 'Magento_CmsUrlRewrite':
Module 'Magento_Sales':
Module 'Magento_ConfigurableImportExport':
Module 'Magento_Checkout':
Module 'Magento_Contact':
Module 'Magento_Cookie':
Module 'Magento_Cron':
Module 'Magento_CurrencySymbol':
Module 'Fooman_PrintOrderPdf':
Module 'Magento_CustomerImportExport':
Module 'Magento_Deploy':
Module 'Magento_Developer':
Module 'Magento_Dhl':
Module 'Magento_Authorization':
Module 'Magento_Downloadable':
Module 'Magento_ImportExport':
Module 'Magento_Authorizenet':
Module 'Magento_Email':
Module 'Magento_User':
Module 'Magento_Fedex':
Module 'Magento_GiftMessage':
Module 'Magento_GoogleAdwords':
Module 'Magento_GoogleAnalytics':
Module 'Magento_Ui':
Module 'Magento_GroupedImportExport':
Module 'Magento_GroupedProduct':
Module 'Magento_DownloadableImportExport':
Module 'Magento_Bundle':
Module 'Magento_Security':
Module 'Magento_LayeredNavigation':
Module 'Magento_Marketplace':
Module 'Magento_MediaStorage':
Module 'Magento_CatalogRule':
Module 'Magento_Multishipping':
Module 'Magento_ConfigurableProduct':
Module 'Magento_Newsletter':
Module 'Magento_OfflinePayments':
Module 'Magento_SalesRule':
Module 'Magento_PageCache':
Module 'Magento_CatalogRuleConfigurable':
Module 'Magento_Vault':
Module 'Magento_Persistent':
Module 'Magento_ProductAlert':
Module 'Magento_ProductVideo':
Module 'Magento_Paypal':
Module 'Magento_Reports':
Module 'Magento_RequireJs':
Module 'Magento_Review':
Module 'Magento_Rss':
Module 'Magento_CatalogRuleSampleData':
Installing data... 
Module 'Magento_CatalogSearch':
Module 'Magento_OfflineShipping':
Module 'Magento_Captcha':
Module 'Magento_Tax':
Module 'Magento_Weee':
Module 'Magento_Integration':
Module 'Magento_SendFriend':
Module 'Magento_Shipping':
Module 'Magento_Sitemap':
Module 'Addshoppers_Connector':
Module 'Magento_Swagger':
Module 'Magento_Swatches':
Module 'Magento_SwatchesLayeredNavigation':
Module 'Magento_ThemeSampleData':
Installing data... 
Module 'Magento_TaxImportExport':
Module 'Magento_NewRelicReporting':
Module 'Magento_CatalogSampleData':
Installing data...


{% endhighlight %}

When the installation is complete, a page similar to the following displays:

<img src="{{ site.baseurl }}common/images/extensman_new-purchases_finish.png" width="200px">

Click **Back to Setup Tool**.
