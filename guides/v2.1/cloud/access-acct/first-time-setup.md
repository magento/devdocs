---
group: cloud-guide
title: Local development
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

{{site.data.var.ece}} environments are **Read Only**. You must develop in a local workspace using a cloned Integration environment and push changes to the remote, read-only {{site.data.var.ece}} Git repository.

After you receive access to a {{site.data.var.ece}} account, you can complete tasks to create your local, pull code, and deploy your store.

## Gather credentials {#credentials}

Prior to setting up a workspace, gather the following credentials and accounts:

-  **Magento Access Key**  
    Provides secure access through a 32-character authentication token. The token authenticates between your account, the Magento 2 code repo (repo.magento.com), and any other Git services like GitHub and 3rd party accounts needed for development. You can create multiple Magento access keys. For the workspace setup, you can start with one specific key for your code repository. To generate a key, contact the Project Owner to generate [Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).
-  **Cloud Project account**  
    The Project Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account]({{ page.baseurl }}/cloud/before/before-workspace.html#newaccount) for details.
-  **Magento Encryption Key**  
    When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key]({{ page.baseurl }}/cloud/trouble/trouble-crypt-key-variable.html)

## Create a local environment {#local}

For development, you need to install and configure a local environment. All environments for {{site.data.var.ece}} are read-only, including all Starter environments and all Pro Integration, Staging, and Production environments. Working in a local environment, you can write and test code prior to pushing it to an Integration environment for further testing and deployment to Staging and Production.

We recommend adding a virtual machine (VM) or Docker container and installing {{site.data.var.ee}}. The environment should closely match cloud environments. To develop Magento code, you will clone the project Git code and create branches to develop your sites and stores in this local environment.

The following steps walk-through preparing your local environment, installing Magento, and starting development:

* [Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html)
* [Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
* [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)
* [Set up the Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) (optional)
* [Clone and branch the project]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html)
* [Install Magento]({{ page.baseurl }}/cloud/before/before-setup-env-install.html)
* [First time deployment]({{ page.baseurl }}/cloud/access-acct/first-time-deploy.html)

If you have existing Magento custom code, we provide instructions to import. For more information, see [First steps for importing {{site.data.var.ee}}]({{ page.baseurl }}/cloud/access-acct/first-time-setup_import-first-steps.html).
