---
group: compman
subgroup: 50_trouble
title: Error upgrading from CE to EE
menu_title: Error upgrading from CE to EE
menu_node:
menu_order: 500
version: 2.1
github_link: comp-mgr/trouble/cman/ce-ee-upgrade.md
functional_areas:
  - Upgrade
---

### Problem: Error upgrading from CE to EE {#ce-ee}
Your upgrade from **Magento Open Source** (formerly Community Edition) to **Magento Commerce** (formerly Enterprise Edition) might fail with the following error:

	[2016-01-19 23:33:24 UTC] An error occurred while executing job 
	"setup:upgrade {"command":"setup:upgrade"}": Could not complete 
	setup:upgrade {"command":"setup:upgrade"} successfully: Source 
	class "\Cybersource" for "CybersourceLogger" generation does not exist.

If this error displays, resolve it as follows:

1.	Log in to your Magento server as the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Enter the following commands in the order shown:

		php <your Magento install dir>/bin/magento setup:upgrade

3.	After the command completes, verify your upgrade was successful:

		php bin/magento --version
