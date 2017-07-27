---
layout: default
group: cloud
subgroup: 080_setup
title: First-time development setup
menu_title: First-time development setup
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/access-acct/first-time-setup.md
redirect_from:
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/access-acct/admin-env-vars.html
  - /guides/v2.1/cloud/access-acct/admin-env-vars.html
---

To create an account and start developing Magento, you need a configured developer workspace, base Magento Enterprise Cloud Edition code, and knowledge of the deployment workflow. These instructions guide through the entire process to create a development workspace on your local.

## Project user account {#account}
Depending on the project owner, you may need to be invited by the owner to the project. This account gives you participation to the project and connects your local, credentials, and access to your company's Magento Enterprise Cloud Edition account. The account includes all source code and deployment environments.

After you receive an invitation, you can complete tasks to create your local, pull code, and deploy your store.

## Helpful knowledge {#knowledge}
We highly recommend having experience with the following technologies and methodologies:

* Magento [technology stack]({{ page.baseurl }}architecture/tech-stack.html)
* [Git](https://git-scm.com/) for repository and code management, [branching methodologies](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows), and working with Magento Git code
* [GitHub](https://github.com/) for managing your code and accessing Magento repos
* [Fastly](https://www.fastly.com/) for CDN and caching, used in Staging and Production
* [Galara Cluster](http://galeracluster.com/) for databases, used in Staging and Production (with triple reduncy failover in Production)

## Create a local workspace
For development, you need to install and configure a local workspace. To develop Magento code, you write code in Git branches from the Magento project master repository on a local system. You need to install a series of applications, configure user accounts and SSH credentials, prior to coding in branches.

For complete steps, see [Set up a project and dev workspace]({{ page.baseurl }}cloud/before/before-workspace.html).

#### Related topics
*	[Set up a project and dev workspace]({{ page.baseurl }}cloud/before/before-workspace.html)
* [Install Magento prerequisites]({{ page.baseurl }}cloud/before/before-workspace-magento-prereqs.html)
* [Enable SSH keys]({{ page.baseurl }}cloud/before/before-workspace-php.html)
* [Set up the Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)
* [Clone the project]({{ page.baseurl }}cloud/before/before-workspace-ssh.html)
* [Set up Magento cron]({{ page.baseurl }}cloud/before/before-setup-env-cron.html)
* [Clone or branch an environment]({{ page.baseurl }}cloud/before/before-setup-env-env.html)
* [Install Magento]({{ page.baseurl }}cloud/before/before-setup-env-install.html)
* [First steps for importing Magento EE]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-first-steps.html)
* [Set up Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html)
