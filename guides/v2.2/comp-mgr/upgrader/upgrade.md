---
group: compman
subgroup: 32_UseUpgrade
title: Step 4. Upgrade
menu_title: Step 4. Upgrade
menu_node:
menu_order: 20
version: 2.2
github_link: comp-mgr/upgrader/upgrade.md
functional_areas:
  - Upgrade
---

The components you're upgrading are displayed. The following figure shows an example.

<img src="{{ site.baseurl }}/common/images/upgr_upgrade.png" width="550px" alt="Click upgrade to complete the task">


To complete the upgrade, click **Upgrade**. If the upgrade is successful, a page similar to the following displays.

<img src="{{ site.baseurl }}/common/images/upgr_success.png" width="350px" alt="Your upgrade was successful">

Messages similar to the following are displayed in the Console Log:

{% collapsible Click to view the Console Log %}

<img src="{{ site.baseurl }}/common/images/upgrade-success-consolelog.png" width="650px">

{% endcollapsible %}

## Manually clear directories
After the upgrade completes, manually clear `var` subdirectories:

	rm -rf <Magento install dir>/var/cache/*
	rm -rf <Magento install dir>/var/page_cache/*
	rm -rf <Magento install dir>/generated/code/* 

## Restart Varnish
After the upgrade completes, restart Varnish if you use it for page caching.

	service varnish restart

Then access your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and verify everything is working properly.

## Errors after upgrade
After you finish your upgrade, errors might display.

*	On the main storefront page, the following error might display.

		We're sorry, an error has occurred while generating this email.
*	On a {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} page, the following error might display:

		We can't find products matching the selection.
	
If any of the preceding errors display, perform all of the following tasks.

{% include install/sampledata/file-sys-perms-digest.md %}

### Clear `var` and `generated` directories
Clear the `var/cache`, 	`var/page_cache`, `generated/code`

A sample command follows:

	rm -rf var/cache/* var/page_cache/* generated/code/*

### Access your storefront again
After performing the preceding tasks, access your storefront again. If necessary, press Control+R to force the page to reload.
