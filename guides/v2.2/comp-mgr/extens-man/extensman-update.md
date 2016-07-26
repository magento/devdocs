---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Step 3. Component Update
menu_title: Component Update
menu_node: 
menu_order: 10
level3_menu_node: level3child
level3_subgroup: step3-ext
version: 2.2
github_link: comp-mgr/extens-man/extensman-update.md
---

## Step 3. Component Update
This step displays if you're updating components. The following figure shows an example.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/extensman_update-step.png" width="350px" alt="Click update to complete the task">

To complete the update, click **Update**. 

### Success
If the update is successful, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_update-success.png" width="200px" alt="Your component update was successful">

Messages similar to the following display in the Console Log:

	[2015-07-31 19:41:02 CDT] Job "update {"require":[{"name":"magento/sample-module-updater-wizard","version":"3.0.0.0"}]}" has been started
	[2015-07-31 19:41:02 CDT] Starting composer update...
	[2015-07-31 19:41:02 CDT] ./composer.json has been updated

	[2015-07-31 19:42:05 CDT] Loading composer repositories with package information
	Updating dependencies (including require-dev)
		- Removing magento/sample-module-updater-wizard (2.0.2)
		- Installing magento/sample-module-updater-wizard (3.0.0)
	Downloading: Connecting... Downloading: 100%

	Writing lock file
	Generating autoload files

	[2015-07-31 19:42:05 CDT] Composer update completed successfully
	[2015-07-31 19:42:05 CDT] Job "update {"require":[{"name":"magento/sample-module-updater-wizard","version":"3.0.0.0"}]}" has successfully completed

### Failure
If the update fails, click **Rollback** to restore an earlier backup. Messages display in the Console Log as shown in the following figure.

![If the component update fails, you can roll back]({{ site.baseurl }}common/images/cman_update-fail.png)



