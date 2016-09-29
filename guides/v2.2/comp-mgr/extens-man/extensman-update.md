---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Step 3. Extension Update
menu_title: Extension Update
menu_node: 
menu_order: 30
level3_menu_node: level3child
level3_subgroup: step3-ext
version: 2.2
github_link: comp-mgr/extens-man/extensman-update.md
---

## Step 3. Extension Update
This step displays if you're updating extensions. The following figure shows an example.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/extensman_update-step.png" width="350px" alt="Click update to complete the task">

To complete the update, click **Update**. 

### Success
If the update is successful, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/extensman_update-success.png" width="200px" alt="Your update was successful">

Messages similar to the following display in the Console Log:

{% highlight xml %}
[2016-07-27 20:36:03 UTC] Job "setup:maintenance:enable []" has started
Enabled maintenance mode

[2016-07-27 20:36:03 UTC] Job "setup:maintenance:enable []" has been successfully completed
[2016-07-27 20:37:02 UTC] Job "setup:cache:disable []" has started
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

[2016-07-27 20:37:02 UTC] Job "setup:cache:disable []" has been successfully completed
[2016-07-27 15:38:02 CDT] Job "update {"components":[{"name":"magento/module-bundle-sample-data","version":"100.1.0"}]}" has been started
[2016-07-27 15:38:02 CDT] Starting composer update...
[2016-07-27 15:38:04 CDT] ./composer.json has been updated

[2016-07-27 15:38:36 CDT] Loading composer repositories with package information
Updating dependencies (including require-dev)
- Removing magento/module-bundle-sample-data (100.1.0-rc3)
- Installing magento/module-bundle-sample-data (100.1.0)
Downloading: Connecting... Downloading: 0%..... Downloading: 100%

Generating autoload files

[2016-07-27 15:38:36 CDT] Composer update completed successfully
{% endhighlight %}

### Failure
If the update fails, click **Rollback** to restore an earlier backup. Messages display in the Console Log as shown in the following figure.

![If the component update fails, you can roll back]({{ site.baseurl }}common/images/cman_update-fail.png)



