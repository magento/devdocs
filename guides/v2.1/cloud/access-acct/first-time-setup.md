---
group: cloud
subgroup: 080_setup
title: Local environment setup
menu_title: Local environment setup
menu_order: 1
menu_node: parent
version: 2.1
github_link: cloud/access-acct/first-time-setup.md
redirect_from:
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/access-acct/admin-env-vars.html
  - /guides/v2.1/cloud/access-acct/admin-env-vars.html
functional_areas:
  - Cloud
  - Setup
---

All environments for your project are read-only, requiring all work to be completed on your local environment and pushed to cloud environments. To start developing Magento, you need a configured local developer workspace, cloned {{site.data.var.ece}} code from your Git branch, and knowledge of the deployment workflow. These instructions guide through the entire process to create a development workspace on your local system.

## Project user account {#account}
Depending on the [Project Owner]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html), you may need to be invited by the owner to the project. This account gives you participation to the project and connects your local, credentials, and access to your company's {{site.data.var.ece}} account. The account includes all source code and deployment environments.

After you receive an invitation, you can complete tasks to create your local, pull code, and deploy your store.

## Helpful knowledge {#knowledge}
We highly recommend having experience with the following technologies and methodologies:

* Magento [technology stack]({{ page.baseurl }}/architecture/tech-stack.html)
* [Git](https://git-scm.com/){:target="\_blank"} for repository and code management, [branching methodologies](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows){:target="\_blank"}, and working with Magento Git code
* [GitHub](https://github.com/){:target="\_blank"} for managing your code and accessing Magento repos
* [Fastly](https://www.fastly.com/){:target="\_blank"} for CDN and caching, used in Staging and Production
* [Galera Cluster](http://galeracluster.com/){:target="\_blank"} for databases, used in Staging and Production (with triple redundancy failover in Production)

## Gather credentials {#credentials}
Prior to setting up your workspace, you may want to gather the following credentials and accounts:

* **Magento Access Key**: Provides secure access through a 32-character authentication token. The token authenticates between your account, the Magento 2 code repo (repo.magento.com), and any other Git services like GitHub and 3rd party accounts needed for development. You can create multiple Magento access keys. For the workspace setup, you can start with one specific key for your code repository. To generate a key, contact the Project Owner to generate [Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).
* **Cloud Project account**: The Project Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitiation, click the link and follow the prompts to create your account. See [Set up an account]({{ page.baseurl }}/cloud/before/before-workspace.html#newaccount) for details.
* **Magento Encryption Key**: When importing an existing Magento system only, you will need to capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key]({{ page.baseurl }}/cloud/trouble/trouble-crypt-key-variable.html)

## Create a local environment {#local}
For development, you need to install and configure a local environment. All environments for {{site.data.var.ece}} are read-only, including all Starter environments and all Pro Integration, Staging, and Production environments. Working in a local environment, you can write and test code prior to pushing it to a Integration environment for further testing and deployment to Staging and Production.

We recommend adding a virtual machine (VM) or Docker container and installing {{site.data.var.ee}}. The environment should closely match cloud environments. To develop Magento code, you will clone the project Git code and create branches to develop your sites and stores in this local environment.

The following steps walk-through preparing your local environment, installing Magento, and starting development:

*	[Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html)
* [Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
* [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)
* [Set up the Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) (optional)
* [Clone and branch the project]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html)
* [Install Magento]({{ page.baseurl }}/cloud/before/before-setup-env-install.html)
* [First time deployment]({{ page.baseurl }}/cloud/access-acct/first-time-deploy.html)

If you have existing Magento custom code, we provide instructions to import. For more information, see [First steps for importing {{site.data.var.ee}}]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-first-steps.html).
