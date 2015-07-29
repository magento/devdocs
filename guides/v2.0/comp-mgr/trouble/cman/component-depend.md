---
layout: default
group: compman
subgroup: ZZ_Troubleshooting
title: Resolve component dependency conflicts
menu_title: Resolve component dependency conflicts
menu_node: 
menu_order: 5
github_link: comp-mgr/trouble/cman/component-depend.md
---
<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: TBD owned by Ogres -->

<h2 id="trouble-depend">Resolve component dependency conflicts</h2>
The readiness check for component dependencies fails if Composer cannot determine which components to install or update. To resolve component dependency issues, you should be a technical person who thoroughly understands how Composer works.

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
