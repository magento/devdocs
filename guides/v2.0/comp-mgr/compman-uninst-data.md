---
layout: default 
group: compman
subgroup: 16_Uninstall
title: Step 3. Data Option
menu_title: Step 3. Data Option
menu_node: 
menu_order: 2
version: 2.0
github_link: comp-mgr/compman-uninst-data.md
---

## Data option
After backing up, you have the choice of removing component data from the Magento 2 database.

If the component has no data to remove, the following message displays. (If a component has data but no uninstall script, the same prompt displays. In that case, you must remove database data manually.)

	The selected component has no data to remove.

If the component has data to remove, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}common/images/cman_uninstall-data.png" width="600px" alt="You can optionally component component database data">

Click one of the following:

*	**Keep data**: Click to keep the component's data in the database.
*	**Remove data**: Click to remove component's data from the database. 

	You can click **Back** to back up the database first if you did not do so already.

Continue with <a href="{{ site.gdeurl }}comp-mgr/compman-uninst-final.html">Step 4. Uninstall</a>
