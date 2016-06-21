---
layout: default 
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Upgrade Magento EE to version 2.1 (June 21, 2016)
menu_node: 
menu_order: 2
version: 2.0
github_link: comp-mgr/release-notes/tech_bull_setup-wizard-upgrade.md
---

![This topic applies to Enterprise Edition only]({{ site.baseurl }}common/images/ee-only_large.png)

## Upgrade Magento EE to version 2.1
These instructions apply to you *only* if all of the following are true:

*	You're using Magento Enterprise Edition (EE)
*	You're upgrading to Magento EE version 2.1 (including a Release Candidate) using the Web Setup Wizard

### Get the patch
Use the following instructions to get the patch named `MDVA-532.*`, then transfer it to your Magento server.

{% collapsible To get the patch: %}

{% include install/patch/get-patch-ee.md %}

{% endcollapsible %}

### Apply the patch
As the [Magento file system owner]({{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html), extract the patch in your Magento installation directory.

{% collapsible To apply the patch: %}

{% include install/patch/apply-patch.md %}

For example, to change to the `magento_user` and extract `MDVA-532.zip` into `/var/www/magento2`, enter:

	su magento_user && cd /var/www/magento2 && unzip MDVA-532.zip

{% endcollapsible %}

### Fix `composer.lock`
Magento's `composer.lock` file specifies a non-existent component type; this issue prevents the upgrade from completing successfully.

{% collapsible To fix composer.lock: %}

1.	As the Magento file system owner, open `<your Magento install dir>/composer.lock` in a text editor.
2.	Change the following entry.

	from:

		"type": "magento2-module-customer-balance",

	to:

		"type": "magento2-module",

{% endcollapsible %}

### Manually clear directories
Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

A sample command follows:

	rm -rf var/cache/* var/page_cache/* var/generation/*

### Start the upgrade
Start your upgrade as discussed in [Start System Upgrade]({{ site.gdeurl21 }}comp-mgr/upgrader/upgrade-start.html).