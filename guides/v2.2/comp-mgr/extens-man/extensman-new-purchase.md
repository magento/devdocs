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

<img src="{{ site.baseurl }}common/images/compman_new-purchases-step3install.png" width="500px">

If the list of purchases is correct, click **Install**.

Messages display in the Console Log as your new purchases are installed. Following is a sample of some of these messages:

{% highlight xml %}
[2016-07-26 18:53:02 UTC] Job "setup:maintenance:enable []" has started
Enabled maintenance mode

[2016-07-26 18:53:02 UTC] Job "setup:maintenance:enable []" has been successfully completed
[2016-07-26 18:53:02 UTC] Job "setup:cache:disable []" has started
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

[2016-07-26 18:53:02 UTC] Job "setup:cache:disable []" has been successfully completed
[2016-07-26 13:54:02 CDT] Job "update {"components":[{"name":"addshoppers/magento2-connector","version":"2.0.1"}]}" has been started
[2016-07-26 13:54:02 CDT] Starting composer update...
[2016-07-26 13:54:02 CDT] ./composer.json has been updated

[2016-07-26 13:54:22 CDT] Loading composer repositories with package information
Updating dependencies (including require-dev)
- Installing addshoppers/magento2-connector (2.0.1)
Loading from cache

Package fabpot/php-cs-fixer is abandoned, you should avoid using it. Use friendsofphp/php-cs-fixer instead.
Writing lock file
Generating autoload files

[2016-07-26 13:54:22 CDT] Composer update completed successfully
{% endhighlight %}

When the installation is complete, a page similar to the following displays:

<img src="{{ site.baseurl }}common/images/extensman_new-purchases_finish.png" width="200px">

Click **Back to Setup Tool**.
