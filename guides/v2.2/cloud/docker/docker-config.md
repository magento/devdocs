---
group: cloud-guide
title: Configure Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The `{{site.data.var.ct}}` package (version 2002.0.13 or later) deploys to a read-only file system by default in the Docker environment, which mirrors the read-only file system deployed in the Production environment. You can use the `docker:build` command in the `{{site.data.var.ct}}` package to generate the Docker Compose configuration and deploy {{site.data.var.ece}} in a Docker container.

## Prerequisites

1. You must have the following software installed on your local workstation:
   -  PHP version 7.1 or later
      -  [php@7.1](https://formulae.brew.sh/formula/php@7.1)
      -  [php@7.2](https://formulae.brew.sh/formula/php@7.2)
   -  [Composer](https://getcomposer.org)
   -  [Docker](https://www.docker.com/get-started)
   -  File synchronization required for developer mode—use one of the following:
      -  [docker-sync](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html)
      -  [mutagen](https://mutagen.io/documentation/introduction/installation)

1. Update the hosts file.

   Before you begin, you must add the following hostname to your `/etc/hosts` file:

   ```conf
   127.0.0.1 magento2.docker
   ```

   Alternatively, you can run the following command to add it to the file:

   ```bash
   echo "127.0.0.1 magento2.docker" | sudo tee -a /etc/hosts
   ```

   {: .bs-callout-tip }
   To change the `magento2.docker` hostname for your project, you must update the host in three files: `.docker/config.php`, `docker-compose.yml`, and `/etc/hosts`

1. Stop the default Apache instance on Mac OS.

   Because Mac OS provides built-in Apache service, and may occupy port `80`, you must stop the service with the following command:

   ```bash
   sudo apachectl stop
   ```

1. Optionally, [enable Xdebug]({{page.baseurl}}/cloud/docker/docker-development-debug.html#enable-xdebug).

## Launch modes

_Mode_ is an additional configuration option for the Docker configuration generator (the `docker:build` command). This mode does not affect the Magento mode. It determines the {{site.data.var.ece}} file system installation and read-only or read-write behavior.

You can launch your Docker environment in one of the following modes:

-  [**production**](prod-mode)—Production mode is the default configuration setting for launching the Docker environment with read-only filesystem permissions. This option builds the Docker environment in production mode and verifies configured service versions.
-  [**developer**](dev-mode)—Developer mode supports an active development environment with full, writable filesystem permissions. This option builds the Docker environment in developer mode and verifies configured service versions. System performance is slower in developer mode because of additional file synchronization operations.

For example, the following command starts the Docker configuration generator for the developer mode:

```bash
./vendor/bin/ece-tools docker:build --mode="developer"
```

To skip the interactive mode, use the `-n, --no-interaction` option.

## Stop and start containers

You can stop containers and restore them afterwards using the following methods.

Action | Command
------ | -------
Suspend containers to continue your work later | `docker-compose stop`
Start containers from a suspended state | `docker-compose start`
Stop the synchronization daemon | `docker-sync stop`
Start the synchronization daemon | `docker-sync start`

Use the following command to stop and remove the Docker configuration:

   ```bash
   docker-compose down -v
   ```

{: .bs-callout-warning}
This removes all components of your local Docker instance including containers, networks, volumes, and images.

## Advanced usage

### Extend the Docker configuration

You can use the built-in extension mechanism of Docker to [specify multiple compose files](https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files). The following example replaces the default value of the `ENABLE_SENDMAIL` environment variable.

1. Create a `docker-compose-dev.yml` file inside your project root directory and add the following content:

   ```yaml
   version: '2'
   services:
     deploy:
       environment:
         - ENABLE_SENDMAIL=true
   ```

1. Pass both configuration files while executing your commands. For example:

   ```bash
   docker-compose -f docker-compose.yml -f docker-compose-dev.yml run deploy bash
   ```

[prod-mode]: {{page.baseurl}}/cloud/docker/docker-mode-production.html
[dev-mode]: {{page.baseurl}}/cloud/docker/docker-mode-developer.html
