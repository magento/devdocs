---
layout: default 
group: compman
subgroup: 07_new
title: Step 3. Component Install
menu_title: Component Install (Component Manager)
menu_node: parent
menu_order: 1
version: 2.0
github_link: comp-mgr/compman-new-purchase.md
---

## Step 3. Component Install
When you're installing new purchases from Magento Marketplace, the page displays similar to the following:

<img src="{{ site.baseurl }}common/images/compman_new-purchases-step3install.png" width="500px">

If the list of purchases is correct, click **Install**.

Messages display in the Console Log as your new purchases are installed. Following is a sample of some of these messages:

{% highlight xml %}
[2016-04-07 09:37:06 CDT] Job "maintenance_mode {"enable":true}" has been started
[2016-04-07 09:37:06 CDT] Magento maintenance mode is enabled.
[2016-04-07 09:37:06 CDT] Job "maintenance_mode {"enable":true}" has successfully completed
[2016-04-07 09:37:06 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.2"}}}" has been started
[2016-04-07 09:37:06 CDT] Starting composer update...
[2016-04-07 09:37:07 CDT] ./composer.json has been updated

[2016-04-07 09:37:45 CDT] Loading composer repositories with package information
Updating dependencies (including require-dev)
- Installing addshoppers/magento2-connector (2.0.1)
Downloading: Connecting... Downloading: 0%.............. Downloading: 10%................
Downloading: 15% ............ 100%

- Installing fooman/printorderpdf-m2 (2.0.2)
Downloading: Connecting......... Downloading: 0% ............ Downloading: 40%........... Downloading: 75% ........... Downloading: 100%

Writing lock file
Generating autoload files

[2016-04-07 09:37:45 CDT] Composer update completed successfully
[2016-04-07 09:37:45 CDT] Job "update {"components":{"addshoppers/magento2-connector":{"name":"addshoppers/magento2-connector","version":"2.0.1"},"addshoppers/purchase-sharing":{"name":"addshoppers/purchase-sharing","version":"2.0.1"},"fooman/printorderpdf-m2":{"name":"fooman/printorderpdf-m2","version":"2.0.2"}}}" has successfully completed
[2016-04-07 14:38:06 UTC] Job "setup:upgrade []" has started
Cache cleared successfully
File system cleanup:
/var/www/html/magento2/var/generation/Composer
/var/www/html/magento2/var/generation/Magento
/var/www/html/magento2/var/generation/Symfony
The directory '/var/www/html/magento2/var/di/' doesn't exist - skipping cleanup
Updating modules:
Schema creation/updates:
Module 'Magento_Store':

... more ...

Module 'Magento_WishlistSampleData':
Data install/update:
Module 'Magento_Store':
... more ...

Please re-run Magento compile command

[2016-04-07 14:38:14 UTC] Job "setup:upgrade {"command":"setup:upgrade"}" has been successfully completed
[2016-04-07 14:38:14 UTC] Job "setup:static:regenerate []" has started

[2016-04-07 14:38:15 UTC] Cleaning generated files...
[2016-04-07 14:38:15 UTC] Clearing cache...
[2016-04-07 14:38:15 UTC] Cleaning static view files
[2016-04-07 14:38:15 UTC] Job "setup:static:regenerate []" has been successfully completed
{% endhighlight %}

When the installation is complete, a page similar to the following displays:

<img src="{{ site.baseurl }}common/images/cman_new-purchases_finish.png" width="300px">

Click **Back to Setup Tool**.
