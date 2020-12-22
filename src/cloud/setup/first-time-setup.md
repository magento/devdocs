---
group: cloud-guide
title: Local development
redirect_from:
  - /cloud/before/before-setup-env-overview.html
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ece}} environments are **Read Only**, including all Starter environments and all Pro Integration, Staging, and Production environments. In a local development environment, you can write and test code prior to pushing it to an Integration environment for further testing and deployment to Staging and Production. You must develop in a local workspace using a cloned Integration environment and push changes to the remote, read-only {{site.data.var.ece}} Git repository. You can choose one of two methods:

-  [Launch a Docker development environment](#docker)
-  [Create a local development environment](#local)

## Gather credentials {#credentials}

Prior to setting up a workspace, gather the following credentials and accounts:

-  **Magento authentication keys (Composer keys)**

    Magento authentication keys are 32-character authentication tokens that provide secure access to the Magento 2 Composer repository (repo.magento.com), and any other Git services required for Magento development such as GitHub. Your account can have multiple Magento authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Account Owner to create them, or create the [Magento authentication keys] yourself.

-  **Cloud Project account**
    The Account Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account]({{ site.baseurl }}/cloud/before/before-workspace.html#newaccount) for details.

-  **Magento Encryption Key**
    When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key]({{ site.baseurl }}/cloud/trouble/trouble-crypt-key-variable.html)

## Launch a Docker environment {#docker}

You can use the Docker environment to emulate the {{site.data.var.ece}} Integration environment for local development. You need three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

-  [Docker architecture and common commands]({{ site.baseurl }}/cloud/docker/docker-development.html)
-  [Launch Docker development environment]({{ site.baseurl }}/cloud/docker/docker-config.html)

## Create a local environment {#local}

You can manually add a virtual machine (VM) and install {{site.data.var.ee}}. The environment closely matches the cloud environments. The following steps walk-through manually preparing your local environment, installing Magento, and starting development:

1. [Prepare for local environment setup]({{ site.baseurl }}/cloud/before/before-workspace.html)
1. [Install Magento prerequisites]({{ site.baseurl }}/cloud/before/before-workspace-magento-prereqs.html)
1. [Enable SSH keys]({{ site.baseurl }}/cloud/before/before-workspace-ssh.html)
1. [Set up the Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) (optional)
1. [Clone and branch the project]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html)
1. [Install Magento]({{ site.baseurl }}/cloud/before/before-setup-env-install.html)
1. [First time deployment]({{ site.baseurl }}/cloud/setup/first-time-deploy.html)

You can import existing Magento custom code. See [First steps for importing {{site.data.var.ee}}]({{ site.baseurl }}/cloud/setup/first-time-setup-import-first-steps.html).

[Magento authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html