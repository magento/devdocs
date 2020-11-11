---
group: cloud-guide
title: Docker development
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.mcd-prod}} provides an option to deploy {{site.data.var.ee}} to a Docker environment for development, test, and automation tasks.

The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package.

{%include cloud/note-docker-config-reference-link.md%}

## Host Operating Systems

The Cloud Docker environment supports Linux, macOS, and Windows operating systems. The containers should run on any Docker host, but some of the set up scripts require you to install PHP and Composer.

## Gather credentials

Prior to setting up a local workspace, gather the following credentials and accounts:

-  **Magento authentication keys (Composer keys)**

    Magento authentication keys are 32-character authentication tokens that provide secure access to the Magento 2 Composer repository (repo.magento.com), and any other Git services required for Magento development such as GitHub. Your account can have multiple Magento authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Account Owner to create them, or create the [Magento authentication keys] yourself.

-  **Cloud Project account**

   The License Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account] for details.

-  **Magento Encryption Key**

   When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key].

## Launch a Docker environment

You can use the Docker environment to emulate the {{site.data.var.ece}} Integration and production environments for local development and testing. You need three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and {{site.data.var.ece}} `{{site.data.var.ct}}` package.

-  [Docker architecture and common commands]({{site.baseurl}}/cloud/docker/docker-containers.html)
-  [Launch Docker development environment]({{site.baseurl}}/cloud/docker/docker-config.html)

## Getting support for {{site.data.var.mcd-prod}}

{{site.data.var.mcd-prod}} is a Magento Community Engineering project supported by the Magento developer community. You have several options to get support and learn more about {{site.data.var.mcd-prod}} and Magento local development.

-  **[Magento Community Engineering Slack organization]**–For support, questions, or discussion, chat with us in the **#cloud-docker** and **#cloud** channels. To join, send a request to _engcom@magento.com_ or [sign yourself up] using Slack.

-  **[{{site.data.var.mcd-package}} GitHub repository]**–Visit the GitHub repository to read discussions about current issues, check current development, and submit issues or pull requests to improve the project.

-  **Magento Cloud Community Engineering demos**–Magento hosts Cloud demo session where you can learn about developing Magento on the Cloud platform, including information about local development with {{site.data.var.mcd-prod}}. For a schedule and recordings of previous demos, see the [Magento Cloud Community Engineering Demo Schedule].

<!--Link definitions-->

[config docker]: {{site.baseurl}}/cloud/docker/docker-config.html
[Magento authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[Magento Community Engineering Slack organization]: https://magentocommeng.slack.com/
[Set up an account]: {{site.baseurl}}/cloud/before/before-workspace.html#newaccount
[sign yourself up]: https://tinyurl.com/engcom-slack
[Magento Cloud Community Engineering demo schedule]: https://spark.adobe.com/page/PbxJoujH7oRTc/
[{{site.data.var.mcd-package}} GitHub repository]: https://github.com/magento/magento-cloud-docker
[Resolve issues with encryption key]: {{site.baseurl}}/cloud/trouble/trouble-crypt-key-variable.html
