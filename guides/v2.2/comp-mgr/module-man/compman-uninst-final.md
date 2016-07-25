---
layout: default 
group: compman
subgroup: 05_UseCompMan
title: Step 4. Uninstall
menu_title: Step 4. Uninstall
menu_node: 
menu_order: 50
version: 2.2
github_link: comp-mgr/module-man/compman-uninst-final.md
---

## Step 4. Uninstall
To uninstall your component, click **Uninstall** as the following figure shows.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_uninst2.png" width="300px" alt="Click Uninstall">

If successful, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_uninst-success.png" width="250px" alt="Your component was successfully uninstalled">

Messages similar to the following display in the Console Log:

	[2015-08-15 13:01:02 CDT] Job "setup:component:uninstall {"components":[{"name":"example/module"}],"dataOption":false}" has started
	Removing from module registry in database
	Removing from module list in deployment configuration
	Cleaning cache
	Cleaning generated files
	Cleaning static view files

	[2015-08-15 13:01:02 CDT] Job "setup:component:uninstall {"components":[{"name":"example/module"}],
	"dataOption":false}" has been successfully completed
	[2015-08-15 13:01:03 CDT] Job "uninstall {"components":[{"name":"example/module"}]}" has been started
	[2015-08-15 13:01:03 CDT] Starting composer remove...

