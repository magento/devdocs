---
layout: default 
group: compman
subgroup: D_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node: 
menu_order: 20
github_link: comp-mgr/upgrader/upgrade.md
---

## Update your components
After backing up, your components are updated. The following figure shows an example.

<img src="{{ site.baseurl }}common/images/upgr_upgrade.png" alt="Click upgrade to complete the task">

To complete the update, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

<img src="{{ site.baseurl }}common/images/upgr_success.png" alt="Your upgrade was successful">

Messages similar to the following display in the Console Log:

	[2015-08-06 11:26:02 CDT] Job "update {"require":[{"name":"magento/product-community-edition","version":"1.2.0"},
	{"name":"3rdp/a","version":"1.1.0"},{"name":"3rdp/b","version":"1.1.0"}]}" has been started
	[2015-08-06 11:26:02 CDT] Starting composer update...
	[2015-08-06 11:26:02 CDT] ./composer.json has been updated

	[2015-08-06 11:26:23 CDT] Loading composer repositories with package information
	Updating dependencies (including require-dev)
	- Removing 3rdp/c (1.0.0)
	- Installing 3rdp/c (1.1.0)
	Downloading: Connecting... Downloading: 100%

	- Removing 3rdp/a (1.0.0)
	- Installing 3rdp/a (1.1.0)
	Downloading: Connecting... Downloading: 100%

	- Removing 3rdp/b (1.0.0)
	- Installing 3rdp/b (1.1.0)
	Downloading: Connecting... Downloading: 100%

	Writing lock file
	Generating autoload files

	[2015-08-06 11:26:23 CDT] Composer update completed successfully
	[2015-08-06 11:26:23 CDT] Job "update {"require":[{"name":"magento/product-community-edition","version":"1.2.0"},
	{"name":"3rdp/a","version":"1.1.0"},{"name":"3rdp/b","version":"1.1.0"}]}" has successfully completed


