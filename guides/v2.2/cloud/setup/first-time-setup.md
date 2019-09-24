---
group: cloud-guide
title: Local development
redirect_from:
  - /guides/v2.2/cloud/before/before-setup-env-overview.html
  - /guides/v2.3/cloud/before/before-setup-env-overview.html
  - /guides/v2.2/cloud/access-acct/first-time-setup.html
  - /guides/v2.3/cloud/access-acct/first-time-setup.html
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ece}} environments are **Read Only**, including all Starter environments and all Pro Integration, Staging, and Production environments. In a local development environment, you can write and test code prior to pushing it to an Integration environment for further testing and deployment to Staging and Production. You must develop in a local workspace using a cloned Integration environment and push changes to the remote, read-only {{site.data.var.ece}} Git repository. You can choose one of two methods:

-  [Launch a Docker development environment](#docker)
-  [Create a local development environment](#local)

## Gather credentials {#credentials}

Prior to setting up a workspace, gather the following credentials and accounts:

-  **Magento Access Key**
    Provides secure access through a 32-character authentication token. The token authenticates between your account, the Magento 2 Composer repository (repo.magento.com), and any other Git services—such as GitHub—required for development. You can create multiple Magento access keys. For the workspace setup, you can start with one specific key for your code repository. Contact the Project Owner to generate [Magento authentication keys]({{page.baseurl}}/install-gde/prereq/connect-auth.html).
-  **Cloud Project account**
    The Project Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account]({{page.baseurl}}/cloud/before/before-workspace.html#newaccount) for details.
-  **Magento Encryption Key**
    When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key]({{page.baseurl}}/cloud/trouble/trouble-crypt-key-variable.html)

## Launch a Docker environment {#docker}

You can use the Docker environment to emulate the {{site.data.var.ece}} Integration environment for local development. You need three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

-  [Docker architecture and common commands]({{page.baseurl}}/cloud/docker/docker-development.html)
-  [Launch Docker development environment]({{page.baseurl}}/cloud/docker/docker-config.html)

## Create a local environment {#local}

You can manually add a virtual machine (VM) and install {{site.data.var.ee}}. The environment closely matches the cloud environments. The following steps walk-through manually preparing your local environment, installing Magento, and starting development:

1.  [Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html)
1.  [Install Magento prerequisites]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
1.  [Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)
1.  [Set up the Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) (optional)
1.  [Clone and branch the project]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html)
1.  [Install Magento]({{ page.baseurl }}/cloud/before/before-setup-env-install.html)
1.  [First time deployment]({{ page.baseurl }}/cloud/setup/first-time-deploy.html)

You can import existing Magento custom code. See [First steps for importing {{site.data.var.ee}}]({{ page.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html).