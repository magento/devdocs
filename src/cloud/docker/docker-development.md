---
group: cloud-guide
title: Cloud Docker development
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

{{site.data.var.mcd-prod}} provides an option to deploy {{site.data.var.ee}} to a Docker environment for development, testing, and automation tasks. It includes the following features:

-  **Cross-platform support**–Supports Linux, macOS and Windows with WSL2
-  **Cloud emulation**–Provides a Cloud-like deployment pipeline and filesystem to test code locally before deploying your {{ site.data.var.ece }} project to Staging or Production servers
-  **{{site.data.var.ee}} development**–Creates a local development environment for On-premises projects
-  **Multiple sync options**–Provides three file synchronization options: `native`, `mutagen`, and `manual-native`. The `manual-native` option provides the best performance on macOS and Windows.
-  **Extensibility**–Use a standard Docker configuration file to extend and customize your development environment

{:.bs-callout-info}
{{site.data.var.mcd-prod}} is a Magento Community Engineering project supported by the Magento developer community. For details and support information, see [Get support for {{site.data.var.mcd-prod}}][].

## Host Operating Systems

The Cloud Docker environment supports Linux, macOS, and Windows operating systems. The containers should run on any Docker host, but some of the set up scripts require you to install PHP and Composer.

## Prerequisites

-  [Git] for interaction between your local system and {{site.data.var.ece}} source repositories
-  [Docker] for Mac 2.2.0.0 or later or Docker for Linux
-  Developer mode on macOS systems might require the [mutagen] option for file synchronization.

### Docker engine

{{site.data.var.mcd-prod}} requires the following Docker resources to support local Docker development.

-  CPUs: 2
-  Memory: 6.00 GB
-  Swap: 1.00 GB

You can configure Docker resources from the [Docker Desktop].

### PHP and Composer

{{site.data.var.mcd-prod}} does not require PHP and Composer to be installed locally. We provide an installation script, [init-docker.sh] to perform PHP and Composer operations.

The `init-docker.sh` script runs the following command which installs the template dependencies and sets both the PHP version and the {{site.data.var.mcd-prod}} image version.

```bash
docker run --rm -e "MAGENTO_ROOT=/app" -v "$(pwd)":/app -v ~/.composer/cache:/root/.composer/cache "magento/magento-cloud-docker-php:${PHP_VERSION}-cli-${IMAGE_VERSION}" composer install --ansi
```

The script option settings determine the PHP version and {{site.data.var.mcd-prod}} image version. The script also adds the default hostname, `magento2.docker`, to your `/etc/hosts` file.

> `init-docker.sh` options

{:.fixed}
Option | Description
:----- | :------
`-p`, `--php` | PHP version (for installing dependencies). You must specify a PHP version that is compatible with the {{site.data.var.ee}} version deployed to the Cloud Docker environment.
`-i`, `--image` |  {{site.data.var.mcd-prod}} image version (for installing dependencies). Defaults to `1.1`
`--host` | Domain name to add to the `/etc/hosts` file. Defaults to `magento2.docker`
`--add-host` | Add domain name to `/etc/hosts` file. Defaults to true (`yes`)
`-h`, `--help` | Get help

**Examples:**

To run the script with default settings:

```bash
bin/init-docker.sh
```

To run the script to install PHP 7.3 and skip adding the domain to the `etc/hosts` file:

```bash
bin/init-docker.sh --php 7.3 --add-host no
```

On initial project installation, you can use cURL to run the installation script and install the template dependencies. See [Update the hosts file and install dependencies].

### Web server configuration

{{site.data.var.mcd-prod}} binds to port `80` on your host environment. If you have enabled the bundled web server on your workstation you must stop the service before launching the Docker environment.

```bash
sudo apachectl stop
```

{:.bs-callout-tip}
If you start your Docker environment with Apache running, the following error displays: `Cannot start service tls: Ports are not available: port is already allocated`

### Composer authentication keys

Prior to setting up a local workspace, gather the following credentials and account information:

-  **Authentication keys (Composer keys)**

    Authentication keys are 32-character authentication tokens that provide secure access to the {{site.data.var.ee}} Composer repository (repo.magento.com), and any other Git services required for development such as GitHub. Your account can have multiple authentication keys. For the workspace setup, start with one specific key for your code repository. If you do not have any keys, contact the Account Owner to create them, or create the [authentication keys] yourself.

-  **(Optional) Cloud Project account**

   The License Owner or Technical Admin (Super User) should invite you to the {{site.data.var.ece}} project. When you receive the e-mail invitation, click the link and follow the prompts to create your account. See [Set up an account] for details.

-  **(Optional) Encryption Key**

   When importing an existing {{site.data.var.ee}} instance, capture the encryption key used to protect your access and data for the {{site.data.var.ee}} database. For details on this key, see [Resolve issues with encryption key]

<!--Link definitions-->

[Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[Docker Compose]: https://docs.docker.com/compose/
[Docker]: https://www.docker.com/get-started
[Docker desktop]: https://docs.docker.com/desktop/#configure-docker-desktop
[init-docker.sh]: https://github.com/magento/magento-cloud-docker/blob/develop/bin/init-docker.sh
[mutagen]: https://mutagen.io/documentation/introduction/installation
[authentication keys]: {{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html
[Magento Cloud template]: https://github.com/magento/magento-cloud
[Set up an account]: {{site.baseurl}}/cloud/before/before-workspace.html#newaccount
[Resolve issues with encryption key]: https://support.magento.com/hc/en-us/articles/360033978652
[Update the hosts file and install dependencies]: {{site.baseurl}}/cloud/docker/docker-installation.html#update-the-hosts-file-and-install-dependencies
[{{site.data.var.mcd-package}} GitHub repository]: https://github.com/magento/magento-cloud-docker
[Get support for {{site.data.var.mcd-prod}}]: {{site.baseurl}}/cloud/docker/docker-troubleshooting.html
