---
layout: default
group: 
subgroup:
title: Overview of a Magento Developer Environment
menu_title: Overview of a Magento Developer Environment
menu_order:
menu_node:
version: 2.0
github_link: cloud/before/before-setup-env-overview.md
---

{::options syntax_highlighter="rouge" /}

The following sections discuss your options for setting up a Magento local environment for installing and developing code, extensions, and configurations. You should have a local workspace prepared with installed software, a Magento ECE account, and a project created. For details, see [Overview of a Magento workspace]({{ page.baseurl}}/cloud/before/before-workspace.html).

The steps in this section provide an order for setting up your local environment. You may be redirected to skip ahead or back through the steps, depending on your workspace needs.

* Set up SSH keys (could have been completed with your workspace setup)
* Clone the Magento Project, or master Git branch
* Set up authentication keys for Magento and Git
* Set up cron jobs for Magento
* Clone or create a Git branch from master
* Install Magento locally (two options available)
* Set file system permissions and ownership

On your local, you will add extensions, develop and add any custom code, export configurations, and any additional work to iterate through code changes. Using Git processes with GitHub repos, push changes to your branch, test in the Integration development environment, prior to deployments for staging and production testing. For more information on the develop and deploy process, see the [Deployment process]({{ page.baseurl}}/cloud/reference/discover-deploy.html).

#### Next step
[Step 1, Get started setting up an environment]({{ page.baseurl}}/cloud/before/before-setup-env-2_clone.html)
