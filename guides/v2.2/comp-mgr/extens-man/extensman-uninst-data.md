---
group: software-update-guide
subgroup: 06_UseExtMan
title: Step 3. Data Option
menu_title: Remove or Keep Data
menu_node:
menu_order: 50
level3_menu_node: level3child
level3_subgroup: step3-ext
functional_areas:
  - Upgrade
---

## Step 3. Data Option

This step displays if you're uninstalling extensions.

After backing up, you have the choice of removing data from the Magento 2 database.

If the [extension](https://glossary.magento.com/extension) has no data to remove, the following message displays. (If a extension has data but no uninstall script, the same prompt displays. In that case, contact the vendor or remove database data manually.)

	The selected extension has no data to remove.

If the extension has data to remove, a page similar to the following displays.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="{{ site.baseurl }}/common/images/cman_uninstall-data.png" width="600px" alt="You can optionally remove database data">

Click one of the following:

*	**Keep data**: Click to keep the data in the database.
*	**Remove data**: Click to remove data from the database.

	You can click **Back** to back up the database first if you did not do so already.

Continue with [Step 4. Uninstall]({{ page.baseurl }}/comp-mgr/extens-man/extensman-uninst-final.html)

