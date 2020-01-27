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

The `{{site.data.var.ct}}` package (version 2002.0.13 or later) deploys to a read-only file system by default in the Docker environment, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker Compose configuration and deploy {{site.data.var.ece}} in a Docker container.

{: .bs-callout-warning }
The `docker:build` command overwrites the existing `docker-compose.yml` configuration file. You can save your customizations for the Docker Compose configuration in a `docker-compose.override.yml` file. See a detailed example in the [Docker quick reference][docker-reference].

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
=======
1. Optionally, [enable Xdebug]({{ site.baseurl }}/cloud/docker/docker-development-debug.html#enable-xdebug).

## Launch the Docker environment

1. Download a Magento application template from the [Magento Cloud repository](https://github.com/magento/magento-cloud). Be careful to select the branch that corresponds with the Magento version.

1. Add your [Magento access credentials]({{site.baseurl}}/guides/v2.3/install-gde/prereq/connect-auth.html) to the `auth.json` file.

1. Install the template dependencies.

   ```bash
   composer install
   ```

1. Continue with steps for [Production mode](#production-mode) or [Developer mode](#developer-mode).

### Production mode

Continue launching your Docker environment in the default _production_ mode.

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp ./docker/config.php.dist ./docker/config.php
   ```

1. In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version](#service-versions).

   ```bash
   ./vendor/bin/ece-tools docker:build
   ```

1. _Optional_: Configure the Docker global variables in the `docker-compose.yml` file. For example, you can [configure Xdebug]({{ site.baseurl }}/cloud/docker/docker-development-debug.html#configure-xdebug).

1. Build files to containers and run in the background.

   ```bash
   docker-compose up -d
   ```

1. Install Magento in your Docker environment.

   -  Build Magento in the Docker container:

     ```bash
     docker-compose run build cloud-build
     ```

   -  Deploy Magento in the Docker container:

      ```bash
      docker-compose run deploy cloud-deploy
      ```

   {:.bs-callout-info}
   For `{{site.data.var.ct}}` v2002.0.12, install Magento with the `docker-compose run cli magento-installer` command.

1. Configure and connect Varnish.

   ```bash
   docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env &&
    \
   docker-compose run deploy magento-command setup:config:set --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run deploy magento-command cache:clean
   ```

1. _Optional_: Restart services if the static content does not synchronize with all images after generation on build phase.

   ```bash
   docker-compose restart
   ```

1. [Access the Magento instance](#access-magento-instance).

### Developer mode

Continue launching your Docker environment in the _developer_ mode. The developer mode supports active development on your local environment.

 {:.bs-callout-info}
The `{{site.data.var.ct}}` version 2002.0.18 and later supports developer mode.

1. Install the `docker-sync` tool using the [Installation instructions](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html).

   Optionally, you can install the `mutagen.io` tool using the [Installation instructions](https://mutagen.io/documentation/introduction/installation/).

   If you have it installed, continue to the next step.

1. _Optional_: If you have a custom PHP configuration file, copy the default configuration DIST file to your custom configuration file and make any necessary changes.

   ```bash
   cp ./docker/config.php.dist ./docker/config.php
   ```

1. In your local environment, start the Docker configuration generator. You can use the service keys, such as `--php`, to [specify a version](#service-versions).

   ```bash
   ./vendor/bin/ece-tools docker:build --mode="developer"
   ```

   By default, the docker-compose configuration uses 'docker-sync' for file synchronization. To use 'mutagen.io' for file synchronization, you must run the command with the `--sync-engine=mutagen` option.

   For example:

   ```bash
   ./vendor/bin/ece-tools docker:build --mode="developer" --sync-engine=mutagen
   ```

1. _Optional_: Configure the Docker global variables in the `docker-compose.yml` file. For example, you can [enable and configure Xdebug]({{ site.baseurl }}/cloud/docker/docker-development-debug.html).

1. Start the file synchronization.

   For the `docker-sync` tool:

   ```bash
   docker-sync start
   ```

   If it is the first installation you should wait a few minutes for synchronization files

    {:.bs-callout-info}
    If you use `mutagen.io` for file synchronization, skip this step. You start `mutagen.io` _after_ deploying the docker containers.

1. Start the file synchronization with mutagen.io. If you use docker-sync for file synchronization, skip this step.
>>>>>>> Cloud-2002.1.0

## Launch modes

_Mode_ is an additional configuration option for the Docker configuration generator (the `docker:build` command). This mode option does not affect the Magento mode. It determines the {{site.data.var.ece}} file system installation and read-only or read-write behavior.

You can launch your Docker environment in one of the following modes:

-  [**production**][prod-mode]—Production mode is the default configuration setting for launching the Docker environment with read-only filesystem permissions. This option builds the Docker environment in production mode and verifies configured service versions.
-  [**developer**][dev-mode]—Developer mode supports an active development environment with full, writable filesystem permissions. This option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations.

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-docker build:compose --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

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

## Sendmail service

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
