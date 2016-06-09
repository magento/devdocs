---
layout: default
group: compman
subgroup: 50_trouble
title: Resolve component dependencies
menu_title: Resolve component dependencies
menu_node: 
menu_order: 150
version: 2.0
github_link: comp-mgr/trouble/cman/component-depend.md
---

<h2 id="trouble-depend">Resolve component dependency conflicts</h2>
We suggest you try the following solutions in the order shown:

*	<a href="#trouble-depend-conflict">Conflicting dependencies</a>
*	<a href="#trouble-depend-permission">File system permissions issues</a>
*	<a href="#trouble-depend-state">The Component Dependency Check status never changes</a>

<h3 id="trouble-depend-conflict">Conflicting dependencies</h3>
The message `We found conflicting component dependencies` displays if Composer cannot determine which components to install or update. To resolve component dependency issues, you should be a technical person who thoroughly understands how Composer works.

Following is a sample failure message:

	We found conflicting component dependencies. 

	You are trying to update package(s) magento/module-sample-data to 1.0.0.0-beta
	We've detected conflicts with the following packages:
	- magento/sample-data version 0.74.0-beta15. Please try to update it to one of the following package versions: 1.0.0-beta, 0.74.0-beta16, 0.74.0-beta14, 0.74.0-beta13, 0.74.0-beta12, 0.74.0-beta11, 0.74.0-beta10, 0.74.0-beta9, 0.74.0-beta8, 0.74.0-beta7

<div class="bs-callout bs-callout-info" id="info">
  <p>The message you see will likely be different.</p>
</div>

Typically, component dependency conflicts result from someone manually editing the Magento 2 `composer.json` file. In the preceding example, the installed package, `magento/sample-data version 0.74.0-beta15`, cannot be upgraded to `1.0.0.0-beta`. However, 0.74.0-beta15 *can* be upgraded to `0.74.0-beta15` first or directly to `1.0.0.0-beta`.

Edit `composer.json` to make any of these changes and try the readiness check again.

<h3 id="trouble-depend-permission">File system permissions issues</h3>
If the Magento file system owner doesn't have permissions to write to directories on the Magento file system, a message similar to the following displays:

	file_put_contents(/var/www/html/magento2ce/var/composer_home/cache/repo/https---
	packagist.org/provider-doctrine$instantiator.json): failed to open stream: Permission denied

Make sure you set file system permissions as discussed in <a href="{{ site.gdeurl }}install-gde/install/file-system-perms.html">Set file system ownership and permissions</a> or contact your system administrator.

<h3 id="trouble-depend-state">The Component Dependency Check status never changes</h3>
In some cases, the status of the Component Dependency Check doesn't change, even after you try to correct issues. In that case, you can either delete or rename files named `<your Magento install dir>/var/.update_cronjob_status` and `<your Magento install dir>/var/.setup_cronjob_status` and try running the Component Manager again.

Renaming or removing these files forces the Component Manager to run the checks again.
