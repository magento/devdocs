---
layout: default
group: cloud
subgroup: 080_setup
title: Set up Magento cron
menu_title: Set up Magento cron
menu_order: 40
menu_node:
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-setup-env-cron.md
---

#### Previous step:
[Set up Magento authentication keys]({{ page.baseurl }}cloud/before/before-setup-env-keys.html)

Magento uses cron jobs for numerous features to schedule activities. Complete these instructions to configure cron for Magento. For additional information on Magento cron, see [Configure and run cron]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html)

We recommend you run cron as the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html). Do not run cron as `root`; we also recommend against running cron as the web server user.

{% include config/setup-cron.md %}

#### Next step
[Branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)
