---
group: cloud-guide
title: Requirements
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

The {{site.data.var.ece}} Docker environment requires three, essential components: a {{site.data.var.ee}} v2 template, Docker Compose, and the {{site.data.var.ece}} `{{site.data.var.ct}}` package.

## Prerequisites

-  [Git] for interaction between a local machine and Magento Cloud
-  [Docker] for Mac 2.2.0.0 or later or Docker for Linux
-  Developer mode may require one of [mutagen] or [docker-sync] depending on your preference

## Docker engine

Magento Cloud Docker requires some amount of resources to be allocated from Docker. This can be adjusted via `Preferences -> Resources -> Advanced`.

-  CPUs: 2
-  Memory: 6.00 GB
-  Swap: 1.00 GB

## PHP and Composer

Magento Cloud Docker does not require PHP and Composer to be installed locally. To perform PHP and Composer operations, use the OOTB script:

```bash
docker run -it -v $(pwd):/app/ -v ~/.composer/:/root/.composer/ magento/magento-cloud-docker-php:7.3-cli-1.1 bash -c "php -v"
```

{:.bs-callout-info}
To simplify the documentation, `php` and `composer` commands will be used directly without OOTB script.

### Optional Steps

Magento Cloud Docker binds to port `80` on your host environment. If you have enabled the bundled web server on your workstation you must stop the service before launching the Docker environment.

```bash
sudo apachectl stop
```

## Composer authentication keys

Prior to setting up a local workspace, gather the following credentials and accounts:

-  **Magento authentication keys (Composer keys)**

    Magento authentication keys are 32-character authentication tokens that provide secure access to the Magento 2 Composer repository (repo.magento.com), and any other Git services required for Magento development such as GitHub. Your account can have multiple Magento authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Account Owner to create them, or create the [Magento authentication keys] yourself.

-  **(Optional) Cloud Project account**

   The License Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account] for details.

-  **(Optional) Magento Encryption Key**

   When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key].

[Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[Docker]: https://www.docker.com/get-started
[docker-sync]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[mutagen]: https://mutagen.io/documentation/introduction/installation
[Magento authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[Set up an account]: {{site.baseurl}}/cloud/before/before-workspace.html#newaccount
[Resolve issues with encryption key]: {{site.baseurl}}/cloud/trouble/trouble-crypt-key-variable.html
