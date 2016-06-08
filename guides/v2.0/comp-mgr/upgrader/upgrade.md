---
layout: default 
group: compman
subgroup: 15_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node: 
menu_order: 20
github_link: comp-mgr/upgrader/upgrade.md
---

## Step 4. Upgrade {#upgrade-finish}
The components you're upgrading display. The following figure shows an example.

<img src="{{ site.baseurl }}common/images/upgr_upgrade.png" width="550px" alt="Click upgrade to complete the task">


To complete the upgrade, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

<img src="{{ site.baseurl }}common/images/upgr_success.png" width="350px" alt="Your upgrade was successful">

Messages similar to the following display in the Console Log:

{% collapsible Click to view the Console Log %}

<img src="{{ site.baseurl }}common/images/upgrade-success-consolelog.png" width="650px">

{% endcollapsible %}

After the upgrade finishes, access your storefront.

## Errors after upgrade
After you finish your upgrade, errors might display.

*	On the main storefront page, the following error might display.

		We're sorry, an error has occurred while generating this email.
*	On a category page, the following error might display:

		We can't find products matching the selection.
	
If any of the preceding errors display, perform all of the following tasks.

{% include install/sampledata/file-sys-perms-digest.md %}

### Clear `var` directories
Clear the `var/cache`, 	`var/page_cache`, `var/generation`

A sample command follows:

	rm -rf var/cache/* var/page_cache/* var/generation/*

### Access your storefront again
After performing the preceding tasks, access your storefront again. If necessary, press Control+R to force the page to reload.
