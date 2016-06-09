---
layout: default 
group: compman
subgroup: 08_Update
title: Step 3. Component Update
menu_title: Component Update
menu_node: parent
menu_order: 1
version: 2.1
github_link21: comp-mgr/compman-update.md
---

## Update your components
After backing up, your components are updated. The following figure shows an example.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_update-step.png" width="350px" alt="Click update to complete the task">

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
If the update fails, click **Rollback** to restore an earlier backup. Messages display in the Console Log as shown in the following figure.<br>

<img src="{{ site.baseurl }}common/images/cman_update-fail.png" alt="If the component update fails, you can roll back">


