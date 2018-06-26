---
group: cloud
subgroup: 130_upgrades
title: Upgrades and Patches
menu_title: Upgrades and Patches
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/project/project-upgrade-parent.md
functional_areas:
  - Cloud
  - Upgrade
---

The following information helps you upgrade and patch {{site.data.var.ece}}. All of our upgrades and patches are [Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html) driven. We recommend using `composer update` for running updates.

As part of your normal pushes of code, {{site.data.var.ece}} checks for any pending patches and updates. These instructions walk through the specific steps needed, including preparing, updating, and verifying the upgrade.

What you need:

* An active branch on your local to test in your Integration environment. We recommend using a dedicated branch for the upgrades and patches, without additional in-progress extension or code work.
* Access to the environment and variables if needed

For detailed instructions:

* [Upgrade Magento Commerce (Cloud)]({{ page.baseurl }}/cloud/project/project-upgrade.html)
* [Patch Magento Commerce (Cloud)]({{ page.baseurl }}/cloud/project/project-patch.html)
* Specifics for [upgrading from Magento Commerce (Cloud) 2.0.4]({{ page.baseurl }}/cloud/upgrade/upgrade-from-2-0-4.html)
