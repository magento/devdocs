---
group: cloud-guide
title: Configure Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-config.html
---

The `{{site.data.var.ct}}` package (version 2002.0.13 or later) deploys to a read-only file system by default in the Docker environment, which mirrors the read-only file system deployed in the Production environment. You can use the `ece-docker build:compose` command in the `{{site.data.var.ct}}` package to generate the Docker Compose configuration and deploy {{site.data.var.ece}} in a Docker container.

{: .bs-callout-warning }
The `ece-docker build:compose` command overwrites the existing `docker-compose.yml` configuration file. You can save your customizations for the Docker Compose configuration in a `docker-compose.override.yml` file. See a detailed example in the [Docker quick reference][docker-reference].

## Prerequisites

1. You must have the following software installed on your local workstation:
   -  [PHP version 7.1 or later][php]
   -  [Composer]
   -  [Docker]
   -  On MacOS and Windows, file synchronization is required for developer mode—use one of the following:
      -  [docker-sync]
      -  [mutagen]

1. Update the hosts file.

   Before you begin, you must add the following hostname to your `/etc/hosts` file:

   ```conf
   127.0.0.1 magento2.docker
   ```

   Alternatively, you can run the following command to add it to the file:

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

   {:.bs-callout-tip}
   To change the `magento2.docker` hostname for your project, you must update the host in three files: `.docker/config.php`, `docker-compose.yml`, and `/etc/hosts`

1. Stop the default Apache instance on macOS.

   Because macOS provides built-in Apache service, and may occupy port `80`, you must stop the service with the following command:

   ```bash
   sudo apachectl stop
   ```

1. Optionally, [enable Xdebug].

## Set the launch mode

You can launch a Docker environment in production or developer mode by setting the `mode` option on the `ece-docker build:compose` command:

-  **Production mode**—The `--mode="production"` setting supports an active production environment with read-only filesystem permissions. This is the default configuration setting for launching a Docker environment. Selecting this option builds the Docker environment in production mode and verifies configured service versions. See [Production mode launch instructions][prod-mode].
-  **Developer mode**—The `--mode="developer"` setting supports an active development environment with full, writable filesystem permissions. Selecting this option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations. See [Developer mode launch instructions][dev-mode].

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-docker build:compose --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

{:.bs-callout-info}
The mode option for the `ece-docker build:compose` command does not affect the Magento mode. It determines the {{site.data.var.ece}} file system installation and read-only or read-write behavior.

## Stop and start containers

You can stop containers and restore them afterwards using the following methods.

Action | Command
------ | -------
Suspend containers to continue your work later | `docker-compose stop`
Stop and remove all containers, images, and volumes | `docker-compose down`
Start containers from a suspended state | `docker-compose start`
Stop the synchronization daemon | `docker-sync stop`
Start the synchronization daemon | `docker-sync start`

Use the following command to stop and remove the Docker configuration:

   ```bash
   docker-compose down -v
   ```

{: .bs-callout-warning}
This command removes all components of your local Docker instance including containers, networks, volumes, and images except for the persistent database and the `magento-sync` volume. See [Rebuild a clean environment][refresh].

## Run Composer with Docker

You can run composer using the `docker` command before you create the container instance. This technique is useful to create an application instance during the CI/CD build process, or even during first time Magento set up.

When you run composer with Docker commands, you must use the [Docker Hub PHP Image Tag] that matches the Magento application version. The following example uses PHP 7.3. You run this command from the project root directory.

```bash
docker run -it  -v $(pwd):/app/ -v ~/.composer/:/root/.composer/ magento/magento-cloud-docker-php:7.3-cli-1.1 bash -c "composer install&&chown www. /app/"
```

This command passes in the current working directory as `/app/`, includes composer from `~/.composer/`, and runs the `composer install` command in the container. After this set up, the command  fixes the permissions on the files that have been added or changed.

## Set up email

Send emails from your Docker environment by adding the following configuration to the `docker-compose.yml` configuration file:

```yaml
ENABLE_SENDMAIL=true
```

{:.bs-callout-warning}
We do not recommend using Sendmail on CLI containers because the service can slow down the container creation process.

[php]: https://www.php.net/manual/en/install.php
[Composer]: https://getcomposer.org
[Docker]: https://www.docker.com/get-started
[docker-reference]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html
[docker-sync]: https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html
[mutagen]: https://mutagen.io/documentation/introduction/installation
[prod-mode]: {{site.baseurl}}/cloud/docker/docker-mode-production.html
[dev-mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[enable Xdebug]: {{site.baseurl}}/cloud/docker/docker-development-debug.html
[Database container]: {{site.baseurl}}/cloud/docker/docker-containers-service.html#database-container
[refresh]: {{site.baseurl}}/cloud/docker/docker-containers.html#rebuild-a-clean-environment
[Docker Hub PHP Image Tag]: https://hub.docker.com/r/magento/magento-cloud-docker-php/tags
