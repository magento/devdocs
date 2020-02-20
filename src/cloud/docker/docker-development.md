---
group: cloud-guide
title: Docker development
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.ece}} provides a Docker environment option for those who use their local environment for development, test, or automation tasks. The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package.

{%include cloud/note-docker-config-reference-link.md%}

## Host Operating Systems

The Cloud Docker environment supports Linux, macOS, and Windows operating systems. The containers should run on any Docker host, but some of the set up scripts require you to install PHP and Composer.

## Gather credentials

Prior to setting up a local workspace, gather the following credentials and accounts:

-  **Magento authentication keys (Composer keys)**

    Magento authentication keys are 32-character authentication tokens that provide secure access to the Magento 2 Composer repository (repo.magento.com), and any other Git services required for Magento development such as GitHub. Your account can have multiple Magento authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Project Owner to create them, or create the [Magento authentication keys] yourself.

-  **Cloud Project account**

   The Project Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account] for details.

-  **Magento Encryption Key**

   When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key].

## Launch a Docker environment

You can use the Docker environment to emulate the {{site.data.var.ece}} Integration and production environments for local development and testing. You need three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

-  [Docker architecture and common commands]({{site.baseurl}}/cloud/docker/docker-containers.html)
-  [Launch Docker development environment]({{site.baseurl}}/cloud/docker/docker-config.html)

[config docker]: {{site.baseurl}}/cloud/docker/docker-config.html
[Magento authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[Set up an account]: {{site.baseurl}}/cloud/before/before-workspace.html#newaccount
[Resolve issues with encryption key]: {{site.baseurl}}/cloud/trouble/trouble-crypt-key-variable.html
