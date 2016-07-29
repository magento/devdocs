---
layout: default 
group: compman
subgroup: 06_UseExtMan
title: Step 3. Remove or Keep Data
menu_title: Data Option
menu_node: 
menu_order: 12
level3_menu_node: level3child
level3_subgroup: step3-ext
version: 2.2
github_link: comp-mgr/extens-man/extensman-uninst-data.md
---

## Step 3. Remove or Keep Data
This step displays if you're uninstalling a component.

After backing up, you have the choice of removing component data from the Magento 2 database.

If the component has no data to remove, the following message displays. (If a component has data but no uninstall script, the same prompt displays. In that case, you must remove database data manually.)

	The selected component has no data to remove.

If the component has data to remove, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_uninstall-data.png" width="600px" alt="You can optionally component component database data">

Click one of the following:

*	**Keep data**: Click to keep the component's data in the database.
*	**Remove data**: Click to remove component's data from the database. 

	You can click **Back** to back up the database first if you did not do so already.

Continue with [Step 4. Uninstall]({{page.baseurl}}comp-mgr/extens-man/extensman-uninst-final.html)

