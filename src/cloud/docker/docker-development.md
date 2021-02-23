---
group: cloud-guide
title: Cloud Docker development
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.mcd-prod}} provides an option to deploy {{site.data.var.ee}} to a Docker environment for development, test, and automation tasks. It includes the following features:

-  **Cross-platform support**—Supports Linux, macOS and Windows with WSL2
-  **Magento Cloud emulation**-Provides a Cloud-like deployment pipeline and filesystem to test code locally before deploying your {{ site.data.var.ece }} project to Staging or Production servers
-  **{{site.data.var.ee}} development**–Create a local development environment for Magento on-premises projects
-  **Multiple sync options**-Provides three file synchronization options (native, mutagen and docker-sync) for best performance
-  **Extensibility**-Use a standard Docker configuration file to extend and customize your development environment

## Host Operating Systems

The Cloud Docker environment supports Linux, macOS, and Windows operating systems. The containers should run on any Docker host, but some of the set up scripts require you to install PHP and Composer.

## Requirements

-  [Git] for interaction between your local system and {{site.data.var.ece}} source repositories
-  [Docker] for Mac 2.2.0.0 or later or Docker for Linux
-  If you want to use Developer mode on MacOS systems, you might require [mutagen] or [docker-sync] for file synchronization.

### Docker engine

{{site.data.var.mcd-prod}} requires the following Docker resources to support local Docker development.

-  CPUs: 2
-  Memory: 6.00 GB
-  Swap: 1.00 GB

You can configure Docker resources from the [Docker Desktop].

### PHP and Composer

{{site.data.var.mcd-prod}} does not require PHP and Composer to be installed locally. To perform PHP and Composer operations, you can use the Cloud Docker installation script [init-docker.sh].

The script runs the following command to install the template dependencies and sets the PHP version and the {{site.data.var.mcd-prod}} image version.

```bash
docker run --rm -e "MAGENTO_ROOT=/app" -v "$(pwd)":/app -v ~/.composer/cache:/root/.composer/cache "magento/magento-cloud-docker-php:${PHP_VERSION}-cli-${IMAGE_VERSION}" composer install --ansi
```

The script provides options to specify the PHP version and {{site.data.var.mcd-prod}} image version, and adds the default hostname to your `/etc/hosts` file.

> `init.docker.sh` options

{: .install-script-options}
Option | Description
:----- | :------
`-p`, `--php` | PHP version (for installing dependencies). You must specify a PHP version that is compatible with the {{site.data.var.ee}} version deployed to the Cloud Docker envrionment. Defaults to `7.2`
`-i`, `--image` |  {{site.data.var.mcd-prod}} image version (for installing dependencies). Defaults to `1.1`
`--host` | domain name to add to /etc/hosts. Defaults to `magento2.docker`
`--add-host` | Add domain name to /etc/hosts file. Defaults to `true`
`-h`, `--help` | Get help

**Examples:**

Run the script with default settings.

```bash
bin/init-docker.sh
```

Run the script to install PHP 7.3 and skip adding the domain to the `etc/hosts` file

```bash
bin/init-docker.sh --php 7.3 --add-host no
```

On initial project installation, you can use cURL to install the template dependencies. See [Update the hosts file and install dependencies].

### Web server configuration

{{site.data.var.mcd-prod}} binds to port `80` on your host environment. If you have enabled the bundled web server on your workstation you must stop the service before launching the Docker environment.

```bash
sudo apachectl stop
```

{:.bs-callout-tip}
If the Apache server is running when you start Docker, the following error displays when you start the Cloud Docker environment: `Cannot start service tls: Ports are not available: port is already allocated.`

### Composer authentication keys

Prior to setting up a local workspace, gather the following credentials and account information:

-  **Magento authentication keys (Composer keys)**

    Magento authentication keys are 32-character authentication tokens that provide secure access to the Magento 2 Composer repository (repo.magento.com), and any other Git services required for Magento development such as GitHub. Your account can have multiple Magento authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Account Owner to create them, or create the [Magento authentication keys] yourself.

-  **(Optional) Cloud Project account**

   The License Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account] for details.

-  **(Optional) Magento Encryption Key**

   When importing an existing Magento system only, capture the Magento encryption key used to protect your access and data for the Magento database. For details on this key, see [Resolve issues with encryption key]

## Getting support for {{site.data.var.mcd-prod}}

{{site.data.var.mcd-prod}} is a Magento Community Engineering project supported by the Magento developer community. You have several options to get support and learn more about {{site.data.var.mcd-prod}} and Magento local development.

-  **[Magento Community Engineering Slack organization]**–For support, questions, or discussion, chat with us in the **#cloud-docker** and **#cloud** channels. To join, send a request to _engcom@adobe.com_ or [sign yourself up] using Slack.

-  **[{{site.data.var.mcd-package}} GitHub repository]**–Visit the GitHub repository to read discussions about current issues, check current development, and submit issues or pull requests to improve the project.

-  **Magento Cloud Community Engineering demos**–Magento hosts Cloud demo session where you can learn about developing Magento on the Cloud platform, including information about local development with {{site.data.var.mcd-prod}}. For a schedule and recordings of previous demos, see the [Magento Cloud Community Engineering Demo Schedule].

<!--Link definitions-->

[Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[Docker Compose]: https://docs.docker.com/compose/
[Docker]: https://www.docker.com/get-started
[Docker desktop]: https://docs.docker.com/desktop/#configure-docker-desktop
[docker-sync]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[init-docker.sh]: https://github.com/magento/magento-cloud-docker/blob/develop/bin/init-docker.sh
[mutagen]: https://mutagen.io/documentation/introduction/installation
[Magento authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[Magento Cloud template]: https://github.com/magento/magento-cloud
[Magento Cloud Community Engineering demo schedule]: https://spark.adobe.com/page/PbxJoujH7oRTc/
[Magento Community Engineering Slack organization]: https://magentocommeng.slack.com/
[Set up an account]: {{site.baseurl}}/cloud/before/before-workspace.html#newaccount
[sign yourself up]: https://magentocommeng.slack.com/ssb/redirect
[Resolve issues with encryption key]: {{site.baseurl}}/cloud/trouble/trouble-crypt-key-variable.html
[Update the hosts file and install dependencies]: {{site.baseurl}}/cloud/docker/docker-installation.html#update-the-hosts-file-and-install-dependencies
[{{site.data.var.mcd-package}} GitHub repository]: https://github.com/magento/magento-cloud-docker

<style>
table.install-script-options td:nth-child(1) {
  width: 200px;
}
