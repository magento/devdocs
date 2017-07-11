---
layout: default
group: cloud
subgroup: 080_setup
title: Step 4, Set up cron
menu_title: Step 4, Set up cron
menu_order: 165
menu_node:
level3_menu_node: level3child
level3_subgroup: setupenv
version: 2.0
github_link: cloud/before/before-setup-env-cron.md
---

{::options syntax_highlighter="rouge" /}
Magento uses cron jobs for numerous features to schedule activities. Complete these instructions to configure cron for Magento. For additional information on Magento cron, see [Configure and run cron]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-cron.html)

We recommend you run cron as the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html). Do not run cron as `root`; we also recommend against running cron as the web server user.

{% include config/setup-cron.md %}

#### Next step
[Step 5, clone or branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)
