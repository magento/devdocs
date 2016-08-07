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
[2016-07-28 10:19:03 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.3"}" has been started
[2016-07-28 10:19:03 CDT] Starting composer update...
[2016-07-28 10:19:04 CDT] ./composer.json has been updated

[2016-07-28 10:21:32 CDT] Loading composer repositories with package information
Updating dependencies (including require-dev)
- Installing addshoppers/magento2-connector (2.0.1)
Downloading: Connecting... Downloading: 0%... Downloading: 30%... Downloading: 100%

- Installing fooman/printorderpdf-m2 (2.0.3)
Downloading: Connecting... Downloading: 0% ... Downloading: 50%... Downloading: 100%

Writing lock file
Generating autoload files

[2016-07-28 10:21:32 CDT] Composer update completed successfully
[2016-07-28 10:21:32 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.3"}}}" has successfully completed

[2016-07-28 15:22:16 UTC] Job "setup:cache:enable ["config layout block_html collections reflection db_ddl eav customer_notification full_page config_integration config_integration_api translate config_webservice"]" has started
Changed cache status:
config: 0 -> 1
layout: 0 -> 1
... more ...

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
Module 'Magento_SwatchesLayeredNavigation':
... more ...
Module 'Magento_ThemeSampleData':
Installing data... 
Module 'Magento_TaxImportExport':
Module 'Magento_NewRelicReporting':
Module 'Magento_CatalogSampleData':
Installing data...
... more ...
{% endhighlight %}

When the installation is complete, a page similar to the following displays:

<img src="{{ site.baseurl }}common/images/extensman_new-purchases_finish.png" width="200px">

Click **Back to Setup Tool**.
